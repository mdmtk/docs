#Remote Control

##Overview

Zebra Remote Control is part of MDM Toolkit to mirror the display of a Zebra Enterprise Android device and control the navigation of the device from a Workstation or desktop. The screen capture data from the device and the UI events from the Web App are encrypted using a shared "Customer Generated Encryption Key". - **mrckey**

This document describes how to integrate the Zebra Remote Control with any of the MDM solutions. Zebra Remote Control consists of the following components.

![img](images/remote-control/rc-overview.PNG) 

##Components

###Remote Control Client 

The Remote Control Client is available as an Android APK file. This should be deployed to the Zebra Android devices as a user application using any management software. Because of Android security, the user has to start the client *manually* for the first time. For the remote control to be functional, a *secured shared key* (Customer Generated Encryption Key- "**mrckey**") has to be set using the [EncryptMgr Feature Type](../guide/csp/encrypt) by using the MX interface either directly or through the use of tools, such as StageNow or EMDK.


###Remote Control Server Web App

The Remote Control Server Web App is a simple WebApp hosted and served from the MDM page or the App Server, such as Tomcat. A sample HTML page is provided with the "Java Applet" embedded in it.

The Remote Control UI component is written as a Java Applet. This applet will communicate with a web service to obtain information about the device to which it needs to connect and also to obtain the "Shared Customer Generated Encryption Key", which was set in device using Staging. This applet expects a few parameters for launching as explained in detail below.

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
	<td>URL of the web service end point implemented by MDM</td>
  </tr>
  <tr>
    <td><b>WsApiKey</b></td>
    <td>Mandatory</td>
	<td>This is the API key to validate the request from WebApp</td>
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

MDM vendors must implement this web service adhering to the Zebra Remote Control standard. The details about input and output parameters are explained below. This can be implemented as a REST service with the GET request type returning the JSON string.

Zebra has provided a sample web service implementation in Java web archive file (WAR) file with the source code. This can be deployed in an application server, such as Tomcat.

<div class="parm-table">
 <table>
	<tr>
		<th>Input Parameter Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>key</td>
    <td>Mandatory. Passed as a query parameter.</td>
	<td>This is the API key to validate the request. This key has to be passed to the Applet in the applet launching page, mentioned as <b>WsApiKey</b>.</td>
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
	<td>This is the IP address of the device to which the WebApp/Java applet needs to connect.</td>
  </tr>
  <tr>
    <td>Port</td>
    <td>Optional</td>
	<td>Port number in which device is listening for TCP connection (ideally set to port :7775)</td>
  </tr>
  <tr>
    <td>Passphrase</td>
    <td>Mandatory</td>
	<td>This Key should be same as the key set in the device using MX interface and must be of 64 bytes (Customer Generated Encryption Keys)</td>
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

**A sample Web Service output is as shown below:**

{"bitDepth":"32","deviceIP":"10.233.82.145","passPhrase":"1111111111111111111111111111111111111111111111111111111111111111","port":"7775","screenHeight":"800","screenWidth":"800"}

##Getting Started

Software Requirements

* Tomcat (Tested with Tomcat 8.0) with SSL support
	* Please refer to this web page for more information: https://dzone.com/articles/setting-ssl-tomcat-5-minutes
* Java latest version JRE8
* Firefox/Internet Explorer

###Staging the device with Shared Customer Generated Encryption Key

To prepare a device to be Remote Controlled, perform the below steps in the specified order:

1. Generate a 256 bit encryption key
	* This can be any 256 bit value, expressed as 64 hex characters, but for best results this should be randomly generated
	* This could be done using openssl to generate the key or by using any other random number generator that can generated such values
		* For example, openssl rand 32 -hex (https://www.openssl.org/docs/man1.0.2/apps/rand.html)
2. Add a key with the name "**mrckey**" and with the above value of encryption key.
	* This could be done as part of Staging by using the StageNow EncryptMgr Setting Type
	* This could be done by the MDM Agent by using the [EncryptMgr Feature Type](../guide/csp/encrypt)

	![img](images/remote-control/rc-stagenow-key.PNG)
	
3. Download the APK (**MRCService-release.1.0.1.1017**) to a suitable path that is persistent, such as: /enterprise/usr/ using using FileMgr
	* This could be done as part of Staging by using the StageNow FileMgr Setting Type
	* This could be done by the MDM Agent using its native file transfer capabilities
4. Install the APK from the location to which it was stored
	* This could be done as part of Staging by using the AppMgr Setting Type in StageNow
	* This could be done by the MDM Agent by using the [AppMgr Feature Type](../guide/csp/app)

	![img](images/remote-control/rc-stagenow-manageapps.PNG)
	
	![img](images/remote-control/rc-stagenow-installapp.PNG)
	
5. Launch the APK using an Intent with action=" android.intent.action.MAIN" plus Package Name and Class Name (defined by the MDM)
	* This could be done as part of StageNowTool by using the "App Manager Launch App" Setting Type
	* This could be done by the MDM Agent by using the [Intent Feature Type](../guide/csp/intent)

	![img](images/remote-control/rc-stagenow-launchapp.PNG)
	
6. Make the Request XML Document containing the above steps persistent
	* This could be done as part of Staging by using the PersistMgr Setting Type
	* This could be done by the MDM Agent by using the [PersistMgr Feature Type](../guide/csp/persistence)

Once the above steps have been completed, the Remote Control Client will be ready and listening for connections from the Remote Control Web App, which must possess the same 256 bit encryption key.  It will also be persistent and will come up ready to be Remote Controlled following subsequent Enterprise Resets.

###MDM Vendor Changes for Zebra RC Integration/Launch

1. MDM must host the Zebra-signed Remote Control Web App on their MDM Server (Tomcat server)
2. MDM must implement Zebra defined Web Service Interface on their MDM Server
3. MDM may elect prepare a device to be Remote Controlled
	* MDM may elect to do all the steps required via the MDM Agent or may assume some or all steps were done during Staging
	* MDM may want to control the value deployed for the "mrckey" to the device to ensure it matches the key possessed by the MDM Server
4. MDM must determine the IP address of a device that is ready to be Remote Controlled
5. MDM must expose a feature in their Management Console to launch Remote Control for a device
6. MDM must provide a page in their Management Console within which the Zebra-signed Remote Control Web App can be run
7. MDM must ensure that the page on which the Zebra-signed Remote Control Web App runs passes the proper parameters to it

###Initialization and Launch of Zebra Remote Control

1. Administrator launches the MDM Management Console
2. Administrator selects a device that is ready to be Remote Controlled from the MDM Management Console
3. Administrator selects Remote Control function for the selected device
4. MDM Management Console displays the Remote Control page with the Zebra-signed Remote Control Web App running in it
5. Zebra-signed Remote Control Web App calls the Web Service on the MDM Server to obtain the information needed to contact the device and the key
6. Zebra-signed Remote Control Web App contacts the Zebra Remote Control Client on the device to be Remote Controlled
7. Communication between the Zebra-signed Remote Control Web App and the Zebra Remote Control Client is protected using the key

When the applet is launched it should automatically connect to the device UI based on the IP, port setting 

![img](images/remote-control/rc-settings.PNG)

###Java Control Panel Setting

Go to Windows-> Start Menu-> Run -> **javacpl**

* Launch the Java Control Panel and check the "Enable Java content in the Browser" option
* Add the URL (http://**yourweb-appserverIP**:8443/**MDM-webapp**). The bolded text should match your webserver IP as well as the app name deployed in Tomcat.

![img](images/remote-control/rc-javacontrolpanel.PNG) 

###Deployment of WebApp using Tomcat

In this guide, Tomcat is used to deploy the webapp as well as the webservice (RESTful) for launching Zebra Remote Control in the desktop/workstation.
The following directories should be available as a sample in the release package obtained from Zebra:

* MDM-Webservice (Contains the sample webservice used by RemoteControl App)
* MDM-Webapp (RemoteControl App to contact webservice and connect to MC/TC handsets and display remote UI)

To install these files:

1. Copy "RCWebService.1.0.1.1017.war" to ("webapps" folder of your Tomcat installation)
2. Copy the complete folder "MDM-Webapp" to ("webapps" folder of your Tomcat installation)

Follow the below steps to install/configure Tomcat for deploying the webservice/webapp.

1. Install Tomcat by providing a Username and password 

	>**Note:** JDK 1.8 is a pre-requisite for Tomcat

2. Setup SSL for Tomcat as mentioned in https://dzone.com/articles/setting-ssl-tomcat-5-minutes
3. "%JAVA_HOME%\bin\keytool" -genkey -alias **tomcat** -keyalg RSA (provide necessary data)

	".keystore" will be saved in C:\Users\<**username**>\.keystore

	The bolded text can be configured to the user's preference. Remember the password for the keystore, which will be used later below as keystorePass.

4. Modify the Server.xml in the Tomcat install folder, `tomcat/conf`, to have the below changes. Ensure that `C:\Users\<user>\.keystore` is present.

		:::XML
		<Connector SSLEnabled="true" acceptCount="100" clientAuth="false"
			disableUploadTimeout="true" enableLookups="false" maxThreads="25"
			port="8443" keystoreFile="C:\Users\<username>\.keystore" keystorePass="tomcat"
			protocol="org.apache.coyote.http11.Http11NioProtocol" scheme="https"
			secure="true" sslProtocol="TLS" />

5. Add in web.xml (`tomcat/conf`) just before "web-app" tag ends
		
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

6. Once all these changes are done, "STOP" and "START" Tomcat to deploy the WAR

###Configuring web.xml

Set the IP of the device in `tomcat\webapps\RCWebService\WEB-INF\web.xml` by modifying the following lines:

	:::XML
	<param-name>IpAddress</param-name>
    <param-value>10.233.82.150</param-value>

Another way to do this would be to override "Device IP" in the GUI after launching the URL in the section below.

###Launch URL

http://localhost:8080/MDM-Webapp/

If localhost is not used, replace it with the correct IP adresss in the index.html sample in the MDM-Webapp folder.

Accept all the security warning pop up to proceed.

![img](images/remote-control/rc-connection.PNG)