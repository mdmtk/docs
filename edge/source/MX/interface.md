# MX Binding Interface

In order to communicate with the MX Framework you must setup a binding to the service. Once this reference is established you can then:

* Send XML to change device behavior or configuration
* Query for current device and framework settings
* Process results sent back from MX

## Requirements 

* Zebra Android Device with MX
* Android ADT

## Setup Code ###

>Note: The code and variables referenced here will be used in other documents that discuss submitting XML as well as sending queries.

1. Create a new Android project with an empty activity in Eclipse.  
2. Create a new package in your application with the following name `com.symbol.mxmf`. This will be used for holding the aidl (Android Interface Definition Language)file.  
3. Create a file called `IMxFrameworkService.aidl` inside the new package.
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

5. Add the Permission `<uses-permission android:name = "com.symbol.mxmf.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />` to your manifest file to allow MX accesses. 
6. Implement `ServiceConnection` from your MainActivity, and add unimplemented methods. You should now have methods for `onServiceConnected` and `onServiceDisconnected`. 
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
8. Add the following method to `MainActivity` for binding to the MX service. 

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
9. Add the following code to `onCreate` for getting the application context and calling the binding method. 

        :::java
	    //Get Application Context
	    this.context = this.getApplicationContext();
	
	    // Call bindService
		bindService();
10. Add the following code to `onServiceConnected` to set the service reference. 

        :::java
	    //Set service
		this.MXService = IMxFrameworkService.Stub.asInterface(service);
11. Add the following code to `onServiceDisconnected` to set the service reference to null. 

        :::java
	    //Set service to null
		this.MXService=null;

>Note:  
> you can use the following code to close the connection to MX. 
>
>     :::java
>     //Unbind service
>     this.context.unbindService(this);
>
>     //Set service to null
>     this.MXService = null;

