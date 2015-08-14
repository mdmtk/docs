# MX Overview

## Overview

The MX Framework provides a common interface to Zebra Android device capabilities utilizing XML that conforms to the standard OMA-CP PROV (Microsoft MSPROV) schema. This framework allows developers and administrators an extensible, efficient, reliable and scalable means for configuring and administrating Zebra Android devices. MX exposes capabilities that underlying CSPs provide to give the user access to both privileged and unprivileged APIs. Each CSP exposes its capabilities using DSD files that are included with the MDM Toolkit. These DSD files are then imported into a DSDtoXML tool to generate XML that can be sent to the MX framework running on the device to change a device configuration or behavior.

## <a name="definitions"></a> Definitions of Terms

### Board Support Package (BSP)

A BSP is the method that the device teams use to deliver the operating system for any of their devices. 

Every device ships with a specific BSP version pre-installed that is suitable for use on that device model, which is reported via the "Build number". The BSP version that ships in devices of a particular model may or may not be updated just because a new BSP becomes available for that device model. They can generally be updated by downloading a newer (or sometimes older) BSP from the Zebra support website and applying it to the device via the OS Update Process for that device.

### Android Open Source Project (AOSP)

AOSP is the method that Google uses to release and distribute the source code for the Android Operating System for royalty-free use by the open source community. OEMs are free to use, modify, and extend AOSP as needed, subject to certain standard licensing requirements. Each BSP for any of the Zebra Android devices includes an operating system that was derived, directly or indirectly, from AOSP. These BSPs generally also include modifications and/or enhancements beyond AOSP that provide additional value to our customers.

### Mobility Extensions (MX)

MX is the umbrella term used to refer collectively to the entire experience offered by the Zebra Android devices. This means that MX represents all the value that a BSP offers over and above that provided by AOSP, including:

* Changes and extensions to the Core Operating System (OSX)
* Value-Add Features (e.g. Multi-User, Whitelisting)
* The MX Management Framework (MXMF)
* Configuration Service Providers (CSPs)
* Changes and extensions to standard applications (e.g. Settings UI, Browser, Email Client, etc.)

### Operating System Extensions (OSX)

OSX is the term used to refer to changes and extensions to the standard AOSP as included in a BSP. OSX is versioned and the version of OSX in a device is the primary way to determine which changes and extensions are present in the operating system of that device. As a general rule, the version of OSX that is in a device can ONLY be changed by loading a different BSP (that contains a different version of OSX) into that device, via the OS update process.

### MX Management Framework (MXMF)

MXMF is a device subsystem that provides an interface to applications that wish to set or query the configuration of device subsystems. It does not directly implement set and query functions but provides a framework to support and host CSPs that do. MXMF can be built-into a BSP or can be added to a BSP after a device is shipped (via a patch applied via the OS update process). Applications and the MXMF communicate through an interchange of XMLs that conform to the **XML.DTD**, as described in the document **MX MF XML DTD**.

### Document Type Definition (DTD)

A DTD is a non-XML, standards-based document that defines the syntax of a class of related XML documents. It is used to specify the elements that are allowed to appear within all XML documents that are used for a specific purpose. 

The following DTDs are used by the MXMF:

* **XML.DTD** (described in the document **MX MF XML DTD**)
	* This DTD defines the syntax of XML Documents that can be consumed by CSPs that registered with the MXMF and that can be used to set and query the configuration of the device systems associated with those CSPs
* **DSD.DTD** (described in the document **MX MF DSD DTD**)
	* This DTD defines the syntax of DSD documents that are used to define the capabilities of CSPs

### Configuration Service Provider (CSP)

A CSP is a device code module that implements the ability to set and query the configuration of a subsystem on a device (e.g. Clock, Wi-Fi, etc.). The capabilities that are supported and exposed by a CSP are defined by a corresponding DSD. 

A CSP is a plug-in to the MXMF which can ship as part of the MXMF, can be included in a BSP along with the MXMF, or can be downloaded to a device as needed. Before it can be used on a device, a CSP must be registered with the MXMF on that device and all calls to a CSP must go through the MXMF. The MXMF and CSPs communicate through XMLs that conform to the **XML.DTD**, as described in the document **MX MF XML DTD**.

### Document Semantics Definition (DSD)

A DSD is an XML Document that conforms to the **DSD.DTD**, as described in the document **MX MF DSD DTD** and that corresponds to and describes the capabilities of a CSP. It is used by tools to enable programmatic generation of XML that can then be consumed by a CSP. Some examples of these tools are EMDK Profile Manager, Staging Tool, and MDM Console.

A DSD is created and maintained by the author of a CSP and each CSP must have a corresponding DSD that must be supplied when the CSP registers with the MXMF. A CSP and its corresponding DSD should generally be produced, maintained, and distributed together.

### MX Management System (MXMS)

MXMS is a term used to refer to the MXMF and all CSPs that are registered with the MXMF at a given point in time. It provides the ability to set and/or query the configuration of the device subsystems for which CSPs are registered with MXMF. There are three kinds of CSPs that are included in this:

* CSPs that are built-into the MXMF, such as the CertMgr CSP
* CSPs that are built-into a device and pre-registered with MXMF, such as the Wi-Fi CSP
* CSPs that are optional and can be downloaded to a device and then can be registered, unregistered, or updated, as needed. 

MXMS can be thought of as "the MXMF and a collection of currently registered CSPs". Although applications submit XML to the MXMF, it is a bit more accurate to say that the MXMS (not just the MXMF) is the entity via which applications set and/or query configuration.

## <a name="arch"></a>  MX Architecture and Data Flow

System components:

* MXMS
	* MXMF
	* CSPs
		* Unprivileged
		* Privileged
	* AOSP APIs
		* Unprivileged
		* Privileged
	* OSX APIs
		* Privileged
	* Core Applications

### Overview
![img](images/quick-start/architecture-overview.png)

### Creating/Editing an XML Document

![img](images/quick-start/architecture-createXml.png)

### Android Device BSP

![img](images/quick-start/architecture-bsp.png)

## MDM Interface to MXMS

Since Tier 2 and Tier 3 MDM Agents will not be signed, they must perform all privileged management functions by interfacing to MXMS. This interface is documented and enabled by the EMDK for MDMs and consists of:

* Constructing a suitable Request XML document
* Submitting the Request XML document to MXMS
* Receiving a Result XML document back from MXMS
* Parsing the Result XML document to determine what happened

![img](images/quick-start/mdmInterface.png)

<!--
### Configuration by MDM Server/Agent

![img](images/quick-start/architecture-configServerAgent.png)

### Configuration by MDM Agent

![img](images/quick-start/architecture-configAgent.png)

-->
### Recommended Implementation 

#### XML Created by MDM Agent

<!--
### MDM Agent Submits XML to MXMS

![img](images/quick-start/architecture-submitXml.png)

### MXMF routes XML to CSPs
-->

In this model, the MDM Agent would submit Request XML documents to MXMS, which would then process the XML and route it to the appropriate CSPs. The CSPs would attempt to perform the requested actions and would return their own Result XML documents. These documents would be combined by the MXMF Results Handler and one complete Result XML document would then be returned to the MDM Agent. 

![img](images/quick-start/architecture-routesXmls.png)

Here, the MDM Server has no inherent understanding of the Request and Result XML documents or DSDs used by MXMS, and the MDM Agent has inherent understanding of the Request and Result XML documents.

1. An MDM Administrator creates a proprietary command within the MDM Server using a Proprietary UI presented by the MDM Server based on a Proprietary feature-set shared between the MDM Server and MDM Agent. 
2. The MDM Server delivers the proprietary command to the MDM Agent via the Proprietary Server/Agent communications protocol. 
3. The MDM Agent interprets proprietary command and creates a Request XML document to perform the desired function using one or more CSPs based on a hard-coded knowledge of the capabilities of the available CSPs and the XML required to perform specific management operations using those CSPs. 
4. The MDM Agent submits the created Request XML Document to the MXMS and receives back a Result XML document. 
5. The MDM Agent interprets the Result XML document based on a hard-coded knowledge of the XML results that can be returned by the CSPs it uses to perform management operations. 
6. The MDM Agent forms a proprietary response that communicates the interpreted results and delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol.
7. The MDM Server interprets the proprietary response and presents the results to the MDM Administrator using a Proprietary UI.

![img](images/quick-start/implementation4.png)

### Other Implementation Approaches

#### XML Created by MDM Administrator

In this model, the MDM Server and MDM Agent have no inherent understanding of the Request and Result XML documents used by MXMS. 

1. An MDM Administrator obtains or creates a Request XML document offline (using a text editor or a tool provided by Zebra) and provides the XML document to the MDM Server via the MDM Server Proprietary UI.
2. The MDM Server treats the Request XML document as an opaque payload and delivers it to the MDM Agent via the Proprietary Server/Agent communications protocol.
3. The MDM Agent treats the Request XML document as an opaque payload and submits it to the MXMS and receives back a Result XML document. 
4. The MDM Agent treats the Result XML document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. 
5. The MDM Server treats the Result XML document as an opaque payload and provides it to the MDM Administrator via the MDM Server Proprietary UI. 
6. The MDM Server interprets the Result XML document offline (using a text editor or a tool provided by Zebra) to determine the results of the request.

![img](images/quick-start/implementation1.png)

#### XML Created by MDM Server

In this model, the MDM Server has an inherent understanding of the Request and Result XML documents (but not the DSDs) used by MXMS, and the MDM Agent has no inherent understanding of any of them. 

1. An MDM Administrator creates a Request XML document within the MDM Server using a Proprietary UI presented by the MDM Server based on a hard-coded knowledge of the capabilities of selected CSPs and the XML required to perform specific management operations using those CSPs. 
2. The MDM Server delivers the Request XML document to the MDM Agent via the Proprietary Server/Agent communications protocol. 
3. The MDM Agent treats the Request XML document as an opaque payload and submits it to the MXMS and receives back a Result XML document. 
4. The MDM Agent treats the Result XML document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. 
5. The MDM Server interprets the Result XML document and presents those results to the MDM Administrator using a Proprietary UI presented by the MDM Server based on a hard-coded knowledge of the XML results that can be returned by CSPs the MDM Server uses to perform management operations.

![img](images/quick-start/implementation2.png)

#### XML Created by MDM Server Using DSD

In this model, the MDM Server has an inherent understanding of the Request and Result XML documents and DSDs used by MXMS, but the MDM Agent does not. 

1. An MDM Administrator creates a Request XML document within the MDM Server using a Data-Driven UI presented by the MDM Server based on a selected DSD. 
2. The MDM Server delivers the Request XML document to the MDM Agent via the Proprietary Server/Agent communications protocol. 
3. The MDM Agent treats the Request XML document as an opaque payload and submits it to the MXMS and receives back a Result XML document. 
4. The MDM Agent treats the Result XML document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. 
5. The MDM Server interprets the Result XML document and presents those results to the MDM Administrator using a Data-Driven UI presented by the MDM Server based on the corresponding DSD.

![img](images/quick-start/implementation3.png)


## MX on Devices

The MX version on a specific device can be effected by:

* OS Updates
* EMDK for Android Device Runtime Updates

With each version of MX, new CSPs can be introduced, and pre-existing CSPs can also have new behavior. It is generally not found that MX updates will remove or change pre-existing behavior unless specifically noted.

## CSP Summary
Below is a summary of the included CSPs. Make sure to consult the individual CSP reference found in this documentation, to see more details about the specific CSP features.

### AccessMgr
The Access Manager feature allows you to configure a set of applications that will be allowed to run and install on the device. When this feature is enabled, the device will only allow user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system will still be available). To disable the Whitelist, you would select 'Single User Without Whitelist'.  

### AppMgr
The App Manager feature allows you to install, upgrade, remove, enable, disable applications from the device. It also allows you to change the current application launcher, clear recent app list and much more.

### BrowserMgr
The Browser Manager feature allows your application to control the web browser on the device. For example you can set the browser homepage. 

### CameraMgr
The Camera Manager feature allows your application to control access to the cameras in the device. For example you can disable the user from using all cameras on the device. 

### CellularMgr
The Cellular Manager feature allows you to configure options of the  cellular radio on your device. 

### CertMgr
The Cert Manager feature allows your application to install or uninstall certificates and initialize the Android key store. You can use digital certificates to identify your device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by apps such as Email or Chrome. 

### Clock
Clock allows for a programmatic way to set the date and time. To account for time zone nuances including daylight saving time, Clock expects the values for date and time to be entered as normalized values to UTC (GMT) time. In other words, the date and time set as parameters for Clock must be the UTC (GMT) equivalent of the local time being set. 

### DevAdmin
The Device Admin feature allows your application to manage configuration settings on the device.

### DisplayMgr
The Display Manager feature allows your application to control the screen timeout value to conserve power.

### EncryptMgr
The Encrypt Manager allows the developer to set encryption policies on a device. For example a developer can create an EFS for storing application data.  

### FileMgr
The File Manager feature allows your application to manage files on the device. For example you can download a file from a ftp server and save it on the device.

### GprsMgr
The GPRS feature allows you to add or remove APNs to your device. 

### Intent
The Intent Manager feature helps your application to create and send intents on the device.

### PersistMgr
The Persist Manager is used to create and remove persistent profile features. These features and their parameters will survive and be automatically applied after a 'Enterprise Reset'. 

### PowerMgr
This feature allows you to put the device into Sleep mode, re-power or perform an OS Update. The action will be performed when the configuration is set.

### PowerKeyMgr
The PowerKey Manager feature allows your application to control which options appear on the power menu on the device.

### SdCardMgr
The SdCard Manager allows your application to manage the use of the device's SD card.

### SettingsMgr
Settings Manager feature allows you to manage settings UI configuration by providing the ability to invoke Enterprise Reset in Settings UI of your device.

### ThreatMgr
The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.

### TouchMgr
The Touch Manager feature allows you to set the Touch Mode on your device in order to interact with the user interface.

### UiMgr
The UI Manager feature allows you to manage UI configurations using its UI Manager parameters. 

### UsbMgr
The USB Manager feature allows you to manage USB configurations of your device.

### Wi-Fi
The Wi-Fi feature allows you to manage your device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.

### WirelessMgr
The Wireless Manager allows you to configure wireless configurations on your device. (Ex. Configure device's Bluetooth)  

### XmlMgr
The XML Manager feature allows you to specify various XML processing modes to be used.  
