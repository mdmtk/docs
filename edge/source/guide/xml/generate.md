# XML Generation

## Overall Approach
As discussed in the MX overview document, MX uses the XML format to submit requests to the framework to apply settings or to retrieve information. It also uses this same format when sending back responses to the client making the request. The XML needs to be structured in a standardized format. In order to help understand this format, we have included a DSDtoXML tool with this toolkit to be used to generate sample XML. Typically you would require that some values be changed dynamically on the device by your client application. So you would therefore manipulate the values of specific parameter attributes within your code based on the specific template you have generated. 

A typical approach to XML generation may include:

* Use the DSDtoXML tool to generate several XML templates for the features you wish to include in your client
* Include these templates either in your device client or server code depending on your scheme for setting values
* Edit the values inside specific parameter attributes accordingly (typically parameters with text values)
* Submit the XML from your client application that has been enabled for MX communication



## DSD Files

DSD Files are XML documents that define the schema a CSP uses to configure settings on a device. Each CSP has a matching DSD document. Each version of the MX Framework includes a set of CSPs that include a specific feature set. When generating XML for a CSP, be sure to consider the version of MX that you are working with. The DSDs included with the MDM Toolkit can be found in the `MX` folder. Within the `MX` folder, there will be versions of MX along with a `DSD` subfolder. 

![img](images/dsdfiles.jpg)

## Using DSDtoXML Tool

The DSDtoXML tool, `DSDtoXML.jar`, is used for generating XML configuration files and templates. It is located in the `DSD To XML` folder of the MDM Toolkit

![img](images/dsdtoolfolder.jpg)

###Prerequisites

* Java JVM Installed
* DSDtoXML.jar
* DSD Files

### Generating XML

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
6. You can now open the file with a text or XML editor to view the generated XML. For this example this is the XML output:

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

### About CSP XML Parms 

In order to make sure your XML is well structured and follows the MX Framework definition. It is recommended that the XML be constructed using the DSDtoXML tool. The XML structure contains a possible tree of `characteristic` and `parm` attributes along with their values. Each CSP will generate a different XML tree based on how the CSP has grouped features together. By comparing the XML generated to the values you choose within the DSDtoXML tool will give you a way to identify the values that you may need to change dynamically. Typically the values that the MDM client will change will be the free form text fields. It is not recommended that other types of characteristics are changed dynamically. A set of XML characteristic and parm uages can be found in the associated CSP RTF file found in the `RTF` folder. You can also generate this document using the DSDtoXML tool by  selecting the "Save RTF" button. 

>Note: Notice in the example below we are using the DSDtoXML tool to generate a Wi-Fi profile to add a new Wi-Fi network. In the tool we put in placeholder text that we can replace with our MDM client code before submitting the XML to the MX framework.

![img](images/xmlgenrelationship.jpg)

### Switching DSD Documents

Most likely, you will need to generate multiple sets of XML segments associated with each task that the MDM client wishes to expose. To accomplish this, you will need to load DSD files separately. You can select another DSD at any time by clicking the button `Load DSD`. 

![img](images/xmlgenloaddsdbutton.jpg)

>Note:   
>All current settings will be lost. 

### Resetting Configuration

At any time while configuring MX settings you can reset the settings to their default values by clicking "Reset".

![img](images/xmlgenresetbutton.jpg)

>Note:   
>All current settings will be lost. 

### Quitting the Application

To quit the application click the button "Quit". 

![img](images/xmlgenquitbutton.jpg)

>Note:   
>All current settings will be lost. 

### Limitations

* In addition to setting device configurations, MX can be used to set query for device information. Currently this tool cannot generate Query XML. 

## Modifying Values

Once the XML template has been generated, it is very likely your MDM client will want to modify some of the values dynamically. As you get familiar with different CSPs, you will see that when some options are selected, another group of options are presented. Some of the fields of the newly presented options may be required in order for it to be successfully processed. Generating the corresponding XML within your MDM client code would be quite complex and prone to error. Therefore, it is recommended that the DSDtoXML tool be used to generate each of these "decision points" to develop a very modular approach to XML submission. Then the values that need to be changed dynamically would simply reside in the text fields that are shown in the DSDtoXMl tool. This value would then simply be replaced in the XML in the MDM client application.

For example, let's say we needed to install and uninstall a series of applications as well as change the default launcher for the device. We would launch the DSDtoXML tool and develop a few XML modules:

* Install Application
* Uninstall Application
* Set Default Launcher

The **Install Application** XML module would look something like:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Install"/>
			<parm name="APK" value="/storage/sdcard1/placeholder-install.apk"/>
		</characteristic>
	</wap-provisioningdoc>

The MDM client would use this XML module for each application it wishes to install and replace the `APK` parm's value `/storage/sdcard1/placeholder.apk` each time with the 'real' value.

The **Uninstall Application** XML module would look something like:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Uninstall"/>
			<parm name="Package" value="com.mycompany.placeholder"/>
		</characteristic>
	</wap-provisioningdoc>

Notice that this XML looks very similar to the previous one, but the `Action` parm has changed to `Uninstall`. This in turn, has also changed the parm to `Package` as opposed to `APK` that was used in the install XML above. Instead of trying to develop this XML within the MDM client code, we would just have a corresponding XML module generated by the DSDtoXML tool for our 'uninstall' action and then replace the  `Package` parm's value from `com.mycompany.placeholder` to the actual package that we wish to remove.

Our **Default launcher** XML module looks very similar to the Uninstall one we just discussed:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="SetDefaultLauncher"/>
			<parm name="Package" value="com.mycompany.placeholder-launcher"/>
		</characteristic>
	</wap-provisioningdoc>

Notice just the `Action` parm's value has changed.

## XML Queries

At this time, the DSDtoXML tool does not generate XML that can be used for queries. Each CSP reference document within this MDM Toolkit documentation may include a section on query XML depending on whether it supports any query abilities. Future versions of the MDM toolkit and MX framework, may contain the ability to generate queries by using the corresponding DSD file and updated DSDtoXML tool.