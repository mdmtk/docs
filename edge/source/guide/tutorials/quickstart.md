#Quick Start

## Overview
This quick start guide will walk through the common tasks and components that you will use in order for your MDM client to interface with the MX Framework available on Zebra Android devices. The following steps will be covered. 

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
