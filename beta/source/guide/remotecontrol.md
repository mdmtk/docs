#Remote Control

##Overview

This document describes how to integrate the Zebra Remote Control with any of the MDM solutions. Zebra Remote Control consists of the following components.

###Remote Control Client 

The Remote Control Client is available as an Android APK file. This should be deployed to the Zebra Android devices as a user application using any management software. Because of Android security, the user has to start the client manually for the first time. For the remote control to be functional, a secured shared key has to be set using the [EncryptMgr Feature Type](../guide/csp/encrypt) by using the MX interface either directly or through the use of tools, such as StageNow or EMDK.

###Remote Control Server

This component is written as a Java applet. This should be launched from any of the MDM pages. Sample application source is provided explaining the details. This applet expects a few parameters as explained in detail below.

<div class="parm-table">
 <table>
	<tr>
		<th>Parameter Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>WsUrl</td>
    <td>Mandatory</td>
	<td>URL of the web service end point</td>
  </tr>
  <tr>
    <td>WsApiKey</td>
    <td>Mandatory</td>
	<td>This is the API key to validate the request</td>
  </tr>
  <tr>
    <td>WsUserName</td>
    <td>Optional</td>
	<td>User Name of the Basic authentication. This field can be empty if the basic authentication is not configured in the web service</td>
  </tr>
  <tr>
    <td>WsPW</td>
    <td>Optional</td>
	<td>Password of the Basic authentication. This field can be empty if the basic authentication is not configured in the web service</td>
  </tr>
</table>
</div>	

###Sample MDM Web Service

MDM vendors need to implement this web service adhering to Zebra Remote Control standard. The details about input and output parameters are explained below. This can be implemented as REST service with the GET request type returning the JSON string

Zebra has provided a sample web service implementation in Java web archive file (WAR) file with the source code. This can be deployed in an application server, such as Tomcat.

<div class="parm-table">
 <table>
	<tr>
		<th>Input Parameter Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Key</td>
    <td>Mandatory. Passed as a query parameter.</td>
	<td>This is the API key to validate the request. This key has to be passed to the applet in the applet launching page.</td>
  </tr>
</table>
</div>	

A sample URL request is as shown below:

https://localhost:8443/RCWebService/rest/RCWebService/deviceproperty/?key=abcdefg

####Response

The response from the web service should be in the JSON format, which contains the following attributes:

<div class="parm-table">
 <table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>bitDepth</td>
    <td>Optional</td>
	<td>Bit Depth required for the remote control connection. Default value is 32. Currently Remote control supports only 32 bit</td>
  </tr>
  <tr>
    <td>deviceIP</td>
    <td>Mandatory</td>
	<td>This is the IP address of the device.</td>
  </tr>
  <tr>
    <td>Port</td>
    <td>Optional</td>
	<td>Port number in which device is listening for TCP connection</td>
  </tr>
  <tr>
    <td>Passphrase</td>
    <td>Mandatory</td>
	<td>This Key should be same as the key set in the device using MX interface</td>
  </tr>
  <tr>
    <td>screenHeight</td>
    <td>Optional</td>
	<td>Height of the device display resolution. Displays the Applet height based on this parameter</td>
  </tr>
  <tr>
    <td>screenWidth</td>
    <td>Optional</td>
	<td>Width of the device display resolution. Displays the Applet height based on this parameter</td>
  </tr>
</table>
</div>	

A sample Web Service output is as shown below:

{"bitDepth":"32","deviceIP":"10.233.82.145","passPhrase":"1111111111111111111111111111111111111111111111111111111111111111","port":"7775","screenHeight":"800","screenWidth":"800"}

##Getting Started

Software Requirements

* Tomcat (Tested with Tomcat 8.0) with SSL support
	* Please refer to this web page for more information: https://dzone.com/articles/setting-ssl-tomcat-5-minutes
* Java latest version JRE8
* Firefox/Chrome 
	* These browsers will eventually block all Java applets

The following steps describe how to integrate the Zebra Remote Control:

1.	Install the shared secret key to the device using StageNow tool
2.	Implement web service 
3.	Call the applet from any of the MDM pages, such as the Device Detail page
4.	Install the Remote Control client on the device
5.	Start the Remote Control client

	>**Note:** This is only required to be done the first time after installation.

6.	When the applet is launched it should automatically connect to the device UI

Please refer to the user guide for more details about the Remote Control applet.

###Installing the Remote Control Files

1. Copy the following folders and files from: `\\10.233.85.45\images\MDM_TK\release\1.0.1.1012\Deliverables`
	* MDM-Webservice - This contains the sample webservice used by RC App
	* MDM-Webapp - This is the RC App to contact webservice and connect to MC/TC handsets and display remote UI
	* RC-client - This is the APK to be installed on the respective handsets
2.  Copy "MDM-Webservice/RCWebService.war" to the "webapps" folder of your Tomcat installation folder
3.  Copy the complete folder "MDM-Webapp" to the "webapps" folder of your Tomcat installation folder

###Device Setup

The following steps describe how to stage the "Install Key" by using the EncryptMgr Feature Type:

1. The Install Key Name should be: "mrckey"
2. The Install Key Value should be: "AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF00000000000000000000000000000000"
3. Use "StageNow" to set this key
4. Install the MRCService-release.1.0.1.1012.apk on the corresponding Handset/device

###Tomcat Setup

1. Install Tomcat 

	>**Note:** JDK 1.8 is a pre-requisite for tomcat
2. Enter "Symbol" as the Username
3. Enter "Symbol" as the Password
4. Setup SSL for Tomcat as mentioned in https://dzone.com/articles/setting-ssl-tomcat-5-minutes

	For example:

	a. "%JAVA_HOME%\bin\keytool" -genkey -alias tomcat -keyalg RSA (provide necessary data)

	".keystore" will be saved in `C:\Users\<username>\.keystore`

	b. Modify Server.xml (`tomcat/conf`) to have the below changes. Ensure that `C:\Users\<user>\.keystore` is present. Follow the link mentioned above for more information.

		:::XML
		<Connector SSLEnabled="true" acceptCount="100" clientAuth="false"
			disableUploadTimeout="true" enableLookups="false" maxThreads="25"
			port="8443" keystoreFile="C:\Users\<username>\.keystore" keystorePass="tomcat"
			protocol="org.apache.coyote.http11.Http11NioProtocol" scheme="https"
			secure="true" sslProtocol="TLS" />

	c. In web.xml (`tomcat/conf`), just before the "web-app" tag ends, add the following:
		
		:::XML
		 <security-constraint>
			<web-resource-collection>
				<web-resource-name>securedapp</web-resource-name>
				<url-pattern>/*</url-pattern>
			</web-resource-collection>
			<user-data-constraint>
				<transport-guarantee>NONE</transport-guarantee>
			</user-data-constraint>
		</security-constraint>

5. Once all these changes are done, "STOP" and "START" Tomcat to deploy the WAR

###Security Settings

1. In Control Panel -> Programs -> Java , update "Security settings" to set the Security Level to "High".
2. Add an exception in the Site list to allow the browser (Chrome or Firefox) to allow running Java Applets.
3. Add
	* "http://ipaddress:8080/MDM-Webapp"
	* "http://ipaddress:8443/MDM-Webapp"
4. To enable Java in the browser, please refer to these web pages: 

	https://www.java.com/en/download/help/browser_activate_plugin.xml

	https://java.com/en/download/faq/chrome.xml
5. In your URL bar, enter: chrome://flags/#enable-npapi
6. Click the Enable link for the "Enable NPAPI" configuration option.
7. Click the Relaunch button that now appears at the bottom of the configuration page.

###Configuring web.xml

Set the IP of the device in `tomcat\webapps\RCWebService\WEB-INF\web.xml` by modifying the following lines:

	:::XML
	<param-name>IpAddress</param-name>
    <param-value>10.233.82.150</param-value>

Another way to do this would be to override "Device IP" in the GUI after launching the URL in the section below.

![img](images/remote-control/rc-3.PNG) 

###Setting key in device

The below given snapshot is from StageNowClient where user can set key name and key value.
 
![img](images/remote-control/rc-1.PNG) 

![img](images/remote-control/rc-2.PNG) 

![img](images/remote-control/rc-4.PNG) 

###Launch URL

http://localhost:8080/MDM-Webapp/

Accept all the security warning pop up to proceed.

>**Note:** If any Tomcat user name and password is asked for, please enter: Symbol,Symbol

