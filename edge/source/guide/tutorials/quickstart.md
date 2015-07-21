#Quick Start

## Overview
This quick start guide will walk through the common tasks and components that you will use in order for your MDM client to interface with the MX Framework available on Zebra Android devices. The following steps will be covered. 

* **Definitions of Terms** - Definitions of the necessary terms
* **Binding to MX** - all communications to the MX framework on Zebra devices, occur through a common binding interface.  
* **Generating XML** - data exchanged to the MX framework from the MDM client is handled through a defined XML structure. Using the DSDtoXml tool provided in the MDM Toolkit will provide a template for the XML to be used for applying settings. Typically you will use this tool to generate all needed functions and then replace string values for dynamically changing variables.
* **Submitting XML** - within the MDM client, XML will be submitted to apply settings via a simple API.
* **Checking Response** - the MDM client will need to handle response from the MX framework for interpreting submit or query results
* Next Steps

## Requirements

* MDM Toolkit (XML Generator Tool, DSD Files)
* Symbol Android Device with MX
* Java JVM Installed
* Android ADT

## Definitions of Terms

### Board Support Package (BSP)

A BSP is the method that the device teams use to deliver the operating system for any of their devices. 

Every device ships with a specific BSP version pre-installed that is suitable for use on that device model, which is reported via the "Build number". The BSP version that ships in devices of a particular model may or may not be updated just because a new BSP becomes available for that device model. It can generally be updated by downloading a newer (or sometimes older) BSP from our support web site and applying it to the device via the OS Update Process for that device

### Android Open Source Project (AOSP)

AOSP is the method that Google uses to release and distribute the source code for the Android Operating System for royalty-free use by the open source community. OEMs are free to use, modify, and extend AOSP as needed, subject to certain standard licensing requirements. Each BSP for any of our Android devices includes an Operating System that was derived, directly or indirectly, from AOSP
Each BSP for any of our Android devices generally also includes modifications to and/or enhancements beyond AOSP that provide additional value to our customers.

### Mobility Extensions (MX)

MX is the umbrella term used to refer collectively to entire experience offered by our Android devices. Another way of saying the same thing is that MX represents all the value that a BSP offers over and above that provided by AOSP, including:

* Changes and extensions to the Core Operating System (OSX)
* Value-Add Features (e.g. Multi-User, Whitelisting)
* The MX Management Framework (MXMF)
* Configuration Service Providers (CSPs)
* Changes and extensions to standard applications (e.g. Settings UI, Browser, Email Client, etc.)

### Operating System Extensions (OSX)

OSX is the term used to refer to changes and extensions to the standard Android Operating System (AOSP) as included in a BSP. OSX is versioned and the version of OSX in a device is the primary way to determine which changes and extensions are present in the Operating System of that device. As a general rule, the version of OSX that is in a device can ONLY be changed by loading a different BSP (that contains a different version of OSX) into that device, via the OS Update process.

### MX Management Framework (MXMF)

MXMF is a device subsystem that implements a facility to enable applications to Set and/or Query the configuration of other device subsystems. MXMF provides an interface to applications that wish to set and query the configuration of device subsystems. It does not directly implement set and query functions but provides a Framework to support and host CSPs that do. MXMF can be built-into a BSP or can be added to a BSP after a device is shipped (via a patch applied via the OS Update Process). The interface between applications and the MXMF involves the interchange of XML that conforms to the **XML.DTD**, as described in the document **MX MF XML DTD**.

### Document Type Definition (DTD)

A DTD is a standards-based [non-XML] document that defines the syntax of a class of related XML Documents. It is used to specify the Elements that are allowed to appear within all XML Documents that are used for a specific purpose. 

The following DTDs are used by the MXMF:

* **XML.DTD** (described in the document **MX MF XML DTD**)
	* This DTD defines the syntax of XML Documents that can be consumed by CSPs that registered with the MXMF and that can be used to set and query the configuration of the device systems associated with those CSPs
* **DSD.DTD** (described in the document **MX MF DSD DTD**)
	* This DTD defines the syntax of DSD documents that are used to define the capabilities of CSPs

### Configuration Service Provider (CSP)

A CSP is a device code module that implements the ability to Set and Query the configuration of a subsystem on a device (e.g. Clock, Wi-Fi, etc.). The capabilities that are supported and exposed by a CSP are defined by a corresponding DSD. 

A CSP is a plug-in to the MXMF which can ship as part of the MXMF, can be included in a BSP along with the MXMF, or can be downloaded to a device as needed. A CSP must be registered with the MXMF on a device before it can be used on that device and all calls to a CSP must go via the MXMF. The interface between the MXMF and a CSP is XML that conforms to the **XML.DTD**, as described in the document **MX MF XML DTD**.

### Document Semantics Definition (DSD)

A DSD is an XML Document that conforms to the **DSD.DTD**, as described in the document **MX MF DSD DTD** and that corresponds to and describes the capabilities of a CSP. It is used by tools (e.g. EMDK Profile Manager, Staging Tool, MDM Console, etc.) to enable programmatic generation of XML that can then be consumed by a CSP. 

A DSD is created and maintained by the author of a CSP and each CSP must have a corresponding DSD that must be supplied when the CSP registers with the MXMF. A CSP and its corresponding DSD should generally be produced, maintained, and distributed together.

### MX Management System (MXMS)

MXMS is a term used to refer to the MXMF and all CSPs that are registered with the MXMF at a given point in time. It provides the ability to set and/or query the configuration of the device subsystems for which CSPs are registered with MXMF. 

Some CSPs are built-into the MXMF (e.g. CertMgr). Other CSPs are built-into a device and pre-registered with MXMF (e.g. Wi-Fi) and other CSPs are optional and can be downloaded to a device and then can be registered, unregistered, or updated, as needed. MXMS can be thought of as a short-hand way of saying “the MXMF and a collection of currently registered CSPs”. Although applications submit XML to the MXMF, it is a bit more accurate to say that the MXMS (not just the MXMF) is the entity via which applications set and/or query configuration.










## Binding to MX

1. Create a new Android project with an empty activity in Eclipse.   

2. Create a new package in your application with the following name "com.symbol.mxmf". This will be used for holding the aidl (Android Interface Definition Language)file.  

3. Create a file called "IMxFrameworkService.aidl" inside the new package.  

4. Copy the following code into your aidl file, which defines to MX Interface:

        :::java
	    package com.symbol.mxmf;
     
	    // IMxFrameworkService.aidl
	    // Declare any non-default types here with import statements
	
	    /**
	     *  MX Management Framework AIDL service interface
	     */
		interface IMxFrameworkService {
	      /**
		   * Provide Mx Framework Service(s) to process a clinet's request
		   * @param  sRequest - request String in XML format sent by a client
		   * @return a String from Mx Framework Service's response in XML format
		   */
	       String processXML(String sRequest);
    
	       /**
		   * Provide Mx Framework Service(s) to process a clinet's request
		   * @param  sRequest - request String in XML format sent by a client
		   * @param  mapExtra - a map that contains Extra information on how the request XML should be applied
		   * @return a String from Mx Framework Service's response in XML format
		   */
	       String processXmlRequest(String sRequest, in Map mapExtra);
	
	       /**
		    * Get value from CSP by providing a key
		    * @param  sKey - a key that CSP would understand, then return a value to MxFramework.
		    * @return a value
		    */
	        String getValue(String sKey);
		}

    

5. Add the Permission to your manifest file to allow MX accesses.  

        :::xml
        <uses-permission android:name="com.symbol.mxmf.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />

    
6. Implement "ServiceConnection" from your MainActivity, and add unimplemented methods. You should now have methods for "onServiceConnected" and "onServiceDisconnected".   

7. Copy the following variables to the top of your MainActivity for holding values needed for MX.  

        :::java
		//Application Context for MX 
		Context context = null;
		
	    //MX Framework package name
		private static final String MX_FRAMEWORK_PKG ="com.symbol.mxmf";
	
		//MX Framework service class name
		private static final String MX_FRAMEWORK_SERVICE_CLS ="com.symbol.mxmf.MxFrameworkService";
	
		//MX service holder
		public IMxFrameworkService MXservice = null;

    

8. Add the following method to "MainActivity" for binding to the MX service. 

        :::java
	    void bindService(){
		    //Bind to Remote Service
		    Intent bindServiceIntent = new Intent();
		    //Set Component
		    bindServiceIntent.setComponent(new ComponentName(MX_FRAMEWORK_PKG, MX_FRAMEWORK_SERVICE_CLS));
		
		    try{
			    this.context.bindService(bindServiceIntent, this, Context.BIND_AUTO_CREATE);
		    }
		    catch(Exception e)
		    {
			    Log.e("MX", e.toString());		
		    }
	    }

	

9. Add the following code to "onCreate" for getting the application context and calling the binding method. 

        :::java
	    //Get Application Context
	    this.context = this.getApplicationContext();
	
	    // Call bindService
		bindService();

	

10. Add the following code to "onServiceConnected" to set the service reference. 

        :::java
	    //Set service
		this.MXservice = IMxFrameworkService.Stub.asInterface(service);

	

11. Add the following code to "onServiceDisconnected" to set the service reference to null. 

        :::java
	    //Set service to null
		this.MXservice=null;

	

>Note:  
> you can use the following code to close the connection to MX. 
>
>     :::java
>     //Unbind service
>     this.context.unbindService(this);
>
>     //Set service to null
>     this.MXservice = null;

## Generating XML

1. Start the jar file "DSDtoXML.jar" located in the folder "DSD To XML". You will be presented with a file select dialog.  
![img](images/xmlgendialog.jpg)
2. Select the DSD file for the corresponding CSP you wish to configure and click "Open". For this example we will be using "Clock.dsd".  
![img](images/xmlgenclock.jpg)
3. Set the values you wish to configure via MX. For this example we will be setting, Date, Time, and time Zone.  
![img](images/xmlgensetvalues.jpg)
4. When complete, click the button "Save XML".  
![img](images/xmlgensavebutton.jpg)
5. Select a location to save your XML configuration file on your computer, give it a name, and select "Save".  
![img](images/xmlgensavelocation.jpg)
6. You can now open the file with a text or XML editor to view the generated XML. For example:

    	:::xml
		<wap-provisioningdoc>
			<characteristic type="Clock" version="4.2" >
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-5"/>
				<parm name="Date" value="2014-12-03"/>
				<parm name="Time" value="17:00:00"/>
			</characteristic>
		</wap-provisioningdoc>

>Note: Notice the relationship with the `parm` attributes and associated `value`. 

## Submitting XML

The following sample code shows how to submit XML that was created in the previous step to the MX Framework as a string. The `MXservice` object refers to the `IMxFrameworkService` object we created in the previous step.

    :::java
    //MX can through exceptions when processing XML 
	try {
	    //Check if the MX service is null 
	    if(MXservice != null){
	        //MX Response XML
			String MxResXML = "";
						
			//MX XML
			String MxXML = "<wap-provisioningdoc>"
						 +     "<characteristic type=\"Clock\" version=\"4.2\">"
						 +         "<parm name=\"AutoTime\" value=\"false\"/>"
						 +         "<parm name=\"TimeZone\" value=\"GMT-5\"/>"
						 +         "<parm name=\"Date\" value=\"2014-12-03\"/>"
						 +         "<parm name=\"Time\" value=\"17:00:00\"/>"
						 +     "</characteristic>"
						 + "</wap-provisioningdoc>";
						
						
			//Send XML to MX for processing 
			MxResXML = MXservice.processXML(MxXML);
						
			//Log result XML
		    Log.i("MX", "MxResXML: " + MxResXML);
	    }
	    else{
	        Log.e("MX", "Service is null");
	    }
	} 
	catch (Exception e) {
	    Log.e("MX", e.toString());
    }

	

## MX Response

On successful processing of the XML, MX will return the XML that was submitted. The following sample code shows how to determine if a call to the MX Framework was successful. 

	:::java
    //Send XML to MX for processing 
	MxResXML = MXservice.processXML(MxXML);
						
	//Check for Success
	if(MxResXML.equals(MxXML))
	{
		//Request Success
		Log.i("MX", "MxResXML: " + MxResXML);
	}
	else
	{
		//Request Failure
		Log.e("MX", "MxResXML: " + MxResXML);
	}



## Next Step
Now that you have mastered the basics you will want to read about more details on the various aspects of interacting with MX.

* [XML Generation](../xml/generate)
