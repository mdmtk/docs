## MX XML Bindings ##

MX XML Bindings allow you to submit XML directly to the MX Framework from within an Android application.  

## Setting up MX Bindings 

### Requirements ###

* Motorola Android Device with MX
* Android ADT

### Instructions ###

1. Create a new Android project with a blank activity in Eclipse.  
2. Create a new package in your application with the following name "com.motorolasolutions.emdk.mxframework". This will be used for holding the aidl (Android Interface Definition Language)file.  
3. Crest a file called "IMxFrameworkService.aidl" inside the new package.
4. Copy the following code into your aidl file, which defines to MX Interface:

        :::java
	    package com.motorolasolutions.emdk.mxframework;
     
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

5. Add the Permission `<uses-permission android:name="com.motorolasolutions.emdk.mxframework.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />` to your manifest file to allow MX accesses. 
6. Implement "ServiceConnection" from your MainActivity, and add unimplemented methods. You should now have methods for "onServiceConnected" and "onServiceDisconnected". 
7. Copy the following variables to the top of your MainActivity for holding values needed for MX.  

        :::java
		//Application Context for MX 
		Context context = null;
		
	    //MX Framework package name
		private static final String MX_FRAMEWORK_PKG ="com.motorolasolutions.emdk.mxframework";
	
		//MX Framework service class name
		private static final String MX_FRAMEWORK_SERVICE_CLS ="com.motorolasolutions.emdk.mxframework.MxFrameworkService";
	
		//MX service holder
		public IMxFrameworkService service = null;
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
		this.service = IMxFrameworkService.Stub.asInterface(service);
11. Add the following code to "onServiceDisconnected" to set the service reference to null. 

        :::java
	    //Set service to null
		this.service=null;

>Note:  
> you can use the following code to close the connection to MX. 
>
>     :::java
>     //Unbind service
>     this.context.unbindService(this);
>
>     //Set service to null
>     this.service = null;


## Submitting code to MX ##

The flowing code snip it shows how so submit XML to the MX Framework.

    :::java
    //MX can through exceptions when processing XML 
	try {
	    //Check if the MX service is null 
	    if(service != null){
	        //MX Response XML
			String MxResXML = "";
						
			//MX XML
			String MxXML = "<wap-provisioningdoc>"
						 +     "<characteristic type=\"Clock\" version=\"4.2\">"
						 +         "<parm name=\"AutoTime\" value=\"false\"/>"
						 +         "<parm name=\"TimeZone\" value=\"GMT-5\"/>"
						 +         "<parm name=\"Date\" value=\"2013-11-19\"/>"
						 +         "<parm name=\"Time\" value=\"10:10:10\"/>"
						 +     "</characteristic>"
						 + "</wap-provisioningdoc>";
						
						
			//Send XML to MX for processing 
			MxResXML = service.processXML(MxXML);
						
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

## MX Response ##

The following code snip it shows how so determine if a call to the MX Framework was Successful. 

	:::java
    //Send XML to MX for processing 
	MxResXML = service.processXML(MxXML);
						
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

### Success ###

If the call to MX is Successful the XML returned from MX will exactly math the XML sent to MX.   

Space Sensitive????

### Failures ###

If the call to MX fails the response XML will contain information about the failure and contain the text "-error". 

#### Error CSP Name ####

If the CSP name does not exist you will get a type "characteristic-error" inside the XML returned from MX along with the description "has not registered with MX Framwork yet". 

For Example:

    :::xml
    <characteristic-error type="ClockTime" version="4.2" desc=" has not registered with MX Framwork yet">

#### Error CSP Version ###

If the DSD version is newer then the DSD version the CSP supports you will get a type "characteristic-error" inside the XML returned from MX along with the description "The DSD version is higher than current supported DSD".

For Example: 

    :::xml
    <characteristic-error type="Clock" desc="The DSD version is higher than current supported DSD 4.2">

#### Error Param not Supported ####

If the parm name is not sported by the CSP you will get a type "parm-error" inside the XML returned from MX along with the description "Param type is not supported".

For Example: 

    :::xml
    <parm-error name="AutoTimeSet" value="false" desc="Param type is not supported"/>

#### Error Param Value ####

If the parm value is incorrect you will get a type "parm-error" inside the XML returned from MX along with the description "Wrong value of (parm name)".

For Example:

    :::xml
    <parm-error name="AutoTime" value="a" desc="Wrong value of Auto time"/>

## Generating MX XML ##



## Querying for MX Version ##

The following XML block queries for MX Version information: 

    :::xml
    <wap-provisioningdoc>
	    <characteristic-query type=\"MX\">
	    </characteristic-query>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="MX" version="4.2">
	        <parm name="Version" value="4.2.0.3"/>
	    </characteristic>
    </wap-provisioningdoc>

## Querying for CSP Version ##

The following XML block queries for CSP Version information: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type=\"AppMgr\">
             <parm-query name=\"Version\">
             </parm-query>
        </characteristic>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="AppMgr" version="4.2">
            <parm name="Version" value="4.2.4"/>
	    </characteristic>
    </wap-provisioningdoc>

## Querying for CSPs  ##

The following XML block queries MX for the list of CSPs: 

    :::xml
    <wap-provisioningdoc>
	    <characteristic-query type=\"CspMgr\">
	    </characteristic-query>
    </wap-provisioningdoc>

Example Output: 

    :::xml
	<wap-provisioningdoc>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.accessmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.accessmngr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AppMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.appmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.appmngr.MxAppMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CertMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxcertmanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxcertmanager.MxCertManagerService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Clock"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxclockcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxclockcsp.MxCSPClockService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Intent"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxintentcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxintentcsp.MxIntentCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="MX"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxversioncsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxversioncsp.MxVersionCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PersistMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpersistcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpersistcsp.MxPersistCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="XmlMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxxmlmgrcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxxmlmgrcsp.MxXmlMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SettingsMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.settingsmanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.settingsmanager.MxSettingsMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Wi-Fi"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.wificonfigcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.wificonfigcsp.MxWifiConfigCSPService"/>
			</characteristic>
		</characteristic>	
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DataWedge"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.datawedgecsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.datawedgecsp.MxDataWedgeCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UsbMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxusbmgrcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxusbmgrcsp.MxUsbMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="TouchMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxtouchmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxtouchmngr.MxTouchMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="WirelessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.wirelessmgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.wirelessmgr.MxWirelessMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">			
			<characteristic type="csp-details">
				<parm name="characteristic" value="GprsMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxgprsmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxgprsmngr.MxGPRSMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details"><parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.uimanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.uimanager.MxUIManagerCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpowermgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpowermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Grouping Queries ##


XML Queries can be combined. For example we can query for MX version, and the list of CSPs:

     :::xml
     <wap-provisioningdoc>"
         <characteristic type=\"CspMgr\">"
         <characteristic-query type=\"CSP\">"
         </characteristic-query>"
         </characteristic>"
    </wap-provisioningdoc>


The output XML will then be combined:

	:::xml
    <wap-provisioningdoc>
		<characteristic type="MX" version="4.2">
			<parm name="Version" value="4.2.0.3"/>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.accessmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.accessmngr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
	 
		.........
	 
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.uimanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.uimanager.MxUIManagerCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpowermgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpowermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
