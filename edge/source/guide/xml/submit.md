# XML Submission

## Overview
This document will describe how to send XML to MXMS for setting parameter values for CSPs:

* Sending XML
* Group Submission

The structure of the XML is based on a standard format that is being used by the MXMS. Each CSP offers different options for parameters and sub-characteristics, but all follow the same structure:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="SomeCSP" version="SpecificVersionToUse">
				<parm name="SomeParm" value="SomeValue"/>
			</characteristic>
			<characteristic type="SomeCSPWithSubCharacteristic" version="SpecificVersionToUse">
				<parm name="SomeParm" value="SomeValue"/>
				<characteristic type="SomeSubChar">
					<parm name="SomeParmofSubChar" value="SomeValue"/>
				</characteristic>
			</characteristic>	
		</wap-provisioningdoc>

### General Submission Rules

* Characteristics must be wrapped in a `wap-provisioningdoc` node
* Each characteristic must contain a version attribute that indicates the version to use
* Multiple characteristics can be sent in one XML package
* Characteristics are processed synchronously in the order they appear in the XML


## Single Characteristic

The following sample code shows how to submit XML to the MXMS to set the date and time of the device's clock.

>Note: The code below uses the `MXservice` variable we used in the binding example. You will need to use the same reference that you established in your MXMS binding code.

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
						 +         "<parm name=\"Date\" value=\"2013-11-19\"/>"
						 +         "<parm name=\"Time\" value=\"10:10:10\"/>"
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

## Multiple Characteristics

You can combine multiple settings together inside on `wap-provisioningdoc` by including multiple `characteristic` XML that was generated individually. These settings will be applied in the order they are represented in the file. Further handling can be controlled by the [XML Manager](../csp/xml) that can control behavior of error handling.  

For example we will set the date and time as two separate instructions as well as add a new WiFi network:

    :::xml
    <wap-provisioningdoc>
	    <characteristic type="Clock" version="4.2">
		    <parm name="AutoTime" value="false">
			<parm name="Date" value="2013-11-19">
        </characteristic>
        <characteristic type="Clock" version="4.2">
		    <parm name="AutoTime" value="false">
			<parm name="Time" value="10:10:10">
        </characteristic>
		<characteristic type="Wi-Fi" version="2.7" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="PLACEHODLER-SSID"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="1"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value=""/>
					<parm name="MandatoryClientCertificate" value=""/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>

    </wap-provisioningdoc>