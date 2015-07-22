#Quick Start

## Overview
This quick start guide will walk through the common tasks and components that you will use in order for your MDM client to interface with the MX Framework available on Zebra Android devices. The following steps will be covered. 

* **Definitions of Terms** - definitions of the necessary terms
* **MX Architecture and Data Flow**
* **MXMS XML** - descriptions of the XMLs that are used by MXMS
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

## MX Architecture and Data Flow

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

### MXMS Architecture

![img](images/quick-start/architecture-mxms.png)

### MDM Agent Submits XML to MXMS

![img](images/quick-start/architecture-submitXml.png)

### MXMF routes XML to CSPs

![img](images/quick-start/architecture-routesXmls.png)

### Configuration by MDM Server/Agent

![img](images/quick-start/architecture-configServerAgent.png)

### Configuration by MDM Agent

![img](images/quick-start/architecture-configAgent.png)

## MXMS XML

### XML Schema

MXMS utilizes XML that conforms to the PROV DTD and more specifically to the Microsoft-define dialect defined by the MSPROV DTD. PROV DTD is the XML Schema used by the OMA CP (Open Mobile Alliance Client Provisioning) Standard. Use of this XML Schema means that XML that can be consumed by MXMS will be familiar to MDM Vendors that are already familiar with OMA CP and/or the PROV DTD. Use of this XML Schema also means that MXMS can be more easily leveraged by existing MDMs that are based on or can already leverage OMA CP.

### Request and Result XML Documents

To request the MXMS to perform some behavior(s), a Request XML must be created and submitted to MXMS by a requesting application. A Request XML Document consists of one or more TLCs that define the behavior(s) requested by that Request XML Document. The MXMS breaks the Request XML Document into its component Request TLC and delivers each Request TLC, in the order it appears in the Request XML Document, to a corresponding CSP.

Request TLCs in Request XML Documents can be used to perform 3 primary types of Behaviors:

1. Set Configuration - Almost every CSP supports a Request TLC that can be used to set or modify the configuration of the subsystem that is managed by that CSP
2. Perform Action - Some CSPs support Request TLCs that can be used to perform discrete actions (e.g. Reboot the device) upon the subsystem managed by that CSP (as opposed to changing the configuration of the subsystem)
3. Query Configuration - Some CSPs support Request TLCs that can be used to obtain the current configuration of the subsystem managed by that CSP

A CSP processes a Request TLC and returns a Result TLC or TLC Error based on the results of processing that TLC. The MXMS aggregates Request TLCs and TLC Errors into a Result XML Document in the same order as the corresponding Request TLCs in the Request XML Document. The MXMS returns the Result XML Document to the Requesting Application to communicate the results of the attempt to perform the behavior(s) requested in the Request XML Document.

Set Configuration and Perform Action Behaviors are Reflexive, which means that a Results XML Document has the same format as a successfully completed Request XML Document. Query Configuration Behaviors are not Reflexive, which means that a Result XML Document has an intentionally different format than a successfully completed Request XML Document. In particular, the Result XML Document returned for a successful Query Configuration Behavior follows the same format as that used for both the Request XML Document and Result XML Document for a Set Configuration Behavior for the same configuration. Another way of saying this is that the Result XML Document returned for a successful Query Configuration Behavior is suitable for use as a Request XML Document for a subsequent Set Configuration Behavior.

A TLC in a Request XML Document will result in one of the following in the Result XML Document:

* The Request TLC in the Request XML Document was PERFORMED [mostly] successfully by the corresponding CSP, in which case a Result TLC will appear in the corresponding location in the Result XML Document.
* The Request TLC was REJECTED by the corresponding CSP, in which case a TLC Error will appear in the corresponding location in the Result XML Document instead of the Request TLC.
* The Request TLC was IGNORED by the MXMS (not sent to the corresponding CSP), in which case neither a Result TLC nor a TLC Error will appear in the corresponding location in the Result XML Document.
	
An SGC in a Request XML Document will result in one of the following in the Result XML Document:

* The Request SGC in the Request XML Document was PERFORMED [mostly] successfully by the corresponding CSP, in which case a Result SGC will appear in the corresponding location in the Result XML Document.
* The Request SGC was REJECTED by the corresponding CSP, in which case an SGC Error will appear in the corresponding location in the Result XML Document instead of the Request SGC.
* The Request SGC was IGNORED by the MXMS (not sent to the corresponding CSP), in which case neither a Result SGC nor an SGC Error will appear in the corresponding location in the Result XML Document.

A Parm in a Request XML Document will result in one of the following in the Result XML Document:

* The Request Parm was ACCEPTED by the corresponding CSP, in which case the value of that Parm will be used by the CSP when performing the requested Behavior. In this case, the Parm value in the corresponding location in the Result XML Document will be the same as the corresponding Parm value in the Request XML Document to indicate that the requested value was used.
* The Request Parm can be REJECTED by the corresponding CSP, in which case the value of that will be NOT used to perform a requested Behavior. The CSP may consider the Parm value specified in the Request XML Document to be CRITICAL and hence may return a Parm-Error Element in the corresponding location in the Result XML Document or the CSP may consider the Parm value NON-CRITICAL (i.e. merely a “suggestion”) and will use a different value to perform the Behavior, in which case the CSP will return the value actually used in the corresponding location Result XML Document instead of the value specified in the Parm in the Request XML Document.

### XML Equivalence

Two XML Documents are Equivalent if they represent the same data even if they do not have identical text. Two XML Documents are Equivalent if they differ only in White Space, for example:

	:::XML
	<characteristic type="Wi-Fi" version="2.1" >
	
vs.

	:::XML
	<characteristic type="Wi-Fi"                       version="2.1" >

Two XML Documents may be Equivalent if they differ only in Order and Order is not relevant, for example:

	:::XML
	<characteristic  version="2.1" type="Wi-Fi" >
	
vs.

	:::XML
	<characteristic  type="Wi-Fi" version="2.1" >	

Equivalence is a key concept when taken together with the Reflexive nature of Set Configuration and Perform Action Behaviors. "Total Success" is indicated by Request and Result XML Documents being Equivalent since it means that what was done was exactly what was requested

### XML Elements

#### Characteristics

A characteristic is an element that appears in an XML Document or DSD and that is used to define hierarchical organization of parms and characteristics. 

Top-Level Characteristics (TLCs) must appear at the outermost level of a document (XML or DSD). Every XML Document must contain at least one TLC and every DSD must contain **exactly one** TLC. There is  a one to one mapping between TLCs and DSDs/CSPs. The type of a TLC specified in the XML or DSD exactly matches the CSP name. A Request TLC appears in a Request XML Document to specify one or more Set Configuration and/or Perform Action Behaviors. A Result TLC provides information about the success or failure of the Behavior(s) requested by the corresponding Request TLC.

Sub-Group Characteristic (SGCs) may appear in TLCs/SGCs. A TLC may have any number (including zero) of SGCs and an SGC may have any number (including zero) of SGCs. A Request SGC provides information about a Behavior to  be performed by its enclosing Result TLC. A Result SGC provides information about  the Behavior performed for its enclosing Result SGC.

#### Characteristic-Errors

A Characteristic-Error is an Element that appears in a Result XML Document that is used to indicate a failure when processing a corresponding Characteristic in a Request XML Document. Top-Level Characteristic-Errors (TLC Errors) are those that appear at the outermost level of a Result XML Document. A Result XML Document may contain zero or more TLC Errors. If a Result XML Document contains a TLC Error, it indicates that the corresponding Characteristic in the Request XML Document was COMPLETELY REJECTED and hence NONE of the Behavior requested by that TLC was performed by the CSP. 

Sub-Group Characteristic-Errors (SGC Errors) are those that appear within TLCs/SGCs. If a TLC or SGC in a Result XML Document contains an SGC Error, it indicates that the Behavior requested by the corresponding SGC was REJECTED and hence that portion of the Behavior requested by the enclosing TLC was not performed by the CSP.

#### Characteristic-Queries

A Characteristic-Query is an Element that appears in a Request XML Document that is used to request a Query of some or all of the current Configuration of the subsystem managed by a CSP. Top-Level Queries (TLQs) MUST appear at the outermost level of an XML Document. A Request XML Document MAY contain zero or more TLQs. A TLQ CANNOT contain any sub-Elements. A TLQ in a Request XML Document will result in a TLC or TLC Error in the corresponding location in the Result XML Document.

Sub-Group Queries (SGQs) MAY appear in TLCs/SGCs. An SGQ MUST appear within a TLC or a SGC (never WITHIN another query). An SGQ MAY contain a Parm to act as a Query Index to select which configuration to query. A Request SGQ in a Request XML Document will either result in a Characteristic-Query-Error or in the matching SGC in the corresponding location in the Result XML Document.

#### Characteristic-Query-Errors

A Characteristic-Query-Error is an Element that appears in a Result XML Document that is used to indicate that a failure occurred when processing a corresponding Characteristic-Query Element in a Request XML Document. This could occur because the TLC or SGC being queried does not support Characteristic-Query. This could also occur because the SGC being queried requires a Query Index and none was supplied or the Query Index Parm supplied did not have a value that selected a valid configuration to query.

#### Parms

A parm is an Element that appears in a Request XML Document or a Result XML Document and that is used to hold a single data item. Every Parm must have a name that is unique within a given TLC (even across different SGCs within that TLC). A given Parm can appear AT MOST ONCE within a given TLC and MAY appear more than once within an XML Document if that XML Document contains multiple TLCs and that Parm appears only once within each TLC.

A Parm communicates a Value that helps define a Behavior. A Parm is used to represent a Desired Configuration Value when used as part of a Request XML Document for a Set Configuration Behavior. It is also used to represent an Desired Action Selector or Action Parameter Value when used as part of a Request XML Document for a Set Configuration Behavior. It is  also used to represent a Current Configuration Value when returned as part of a Result XML Document for a Query Configuration Behavior.

#### Parm-errors

A Parm-Error is an Element that appears in a Result XML Document that is used to indicate a failure when processing a corresponding Parm in a Request XML Document.

If the processing of a Parm in a Request XML Document by a CSP is successful, then the Result XML Document will contain a Parm Element, typically with the same value. The Parm Element MAY have a different value in the Result XML Document if the CSP determined that the value requested was not supported but was “close enough” to a supported value that substituting the closest supported value was reasonable. In such a case, the value actually used will be returned in the Parm in the Result XML Document instead of the value requested.

If the processing of a Parm in a Request XML Document by a CSP is unsuccessful, then the Result XML Document will contain a Parm-Error Element instead of a Parm Element. The Parm-Error Element will contain the same name and value as the failed Parm Element plus a description explaining the reason for the failure. If a Result XML Document contains a Parm-Error Element,then it indicates that the Behavior requested by the Request XML Document could not be completely achieved.

#### Parm-Queries

A Parm-Query is an Element that appears in a Request XML Document that is used to request a Query of a single current Configuration Value of the subsystem managed by a CSP. Every Parm-Query must have a name that is unique within a given TLC (even across different SGCs within that TLC). A given Parm-Query can appear AT MOST ONCE within a given TLC and it MAY appear more than once within an XML Document if that XML Document contains multiple TLCs and that Parm-Query appears only once within each TLC.

A Parm-Query requests a Value that is part of the Current Configuration of the subsystem managed by a CSP. It is used to request a Current Configuration Value when sent in a Request XML Document. The queried value will be returned via a Parm element in the Result XML Document.

#### Parm-Query-Errors

A Parm-Query-Error is an Element that appears in a Result XML Document that is used to indicate that a failure occurred when processing a corresponding Parm-Query Element in a Request XML Document. If the processing of a Parm-Query in a Request XML Document by a CSP is successful, then the Result XML Document will contain a Parm Element, with the current Configuration Value of that Parm. If the processing of a Parm-Query in a Request XML Document by a CSP is unsuccessful, then the Result XML Document will contain a Parm-Query-Error Element instead of a Parm Element. The Parm-Query-Error Element will contain the same name as the failed Parm-Query Element plus a description explaining the reason for the failure.

### DSDs and Conditional Elements

A primary purpose of a DSD is to provide the information required to present a viable Data-Driven UI to create XML that can be consumed by the CSP corresponding to that DSD.

In many cases, a CSP will support multiple use-cases, sub-use-cases, modes, options, or functions. In order to effectively describe such cases, the XML sent to a CSP may need to be conditional in nature. For example, the presence of one Parm or Characteristic may be optional depending on the value selected or entered for a prior Parm. To reliably generate such conditional XML, the Data-Driven UI must reflect the conditional nature of the XML and hence the DSD can utilize the PresentIf Attribute.

A PresentIf Attribute that is specified for a Characteristic or Parm Element includes a Boolean Expression that must be evaluated to determine whether that Characteristic or Parm should be "presented" within the Data-Driven UI. If a Characteristic or Parm is not presented, then no UI will be displayed based on those Elements and no XML will be generated. This enabled flexibility in the DSD, permitting definition of complex relationships.

#### Pivotal Parms

Use the PresentIf Attribute in Characteristic or Parm Elements within a DSD causes certain Parm Elements to become "Pivotal" with respect to the UI that will be displayed and the XML that will be generated.

A Pivotal Parm is simply a Parm where the value selected or entered determines which SGCs and/or Parms will be presented by the UI and included in the generated XML. When using Data-Driven UI to generate XML, the Data-Driven UI will enforce the PresentIf Attributes defined in the DSD and the generated XML will automatically be compliant to the DSD and hence will be consumable by the corresponding CSP.

But when generating XML programmatically, it can be of critical importance to know about Pivotal Parms since failure to properly account for them can lead to the generation of XML does not conform to the DSD and hence cannot be successfully consumed by the corresponding CSP. In many cases, the existence of Pivotal Parms will indicate that the CSP can be used to accomplish multiple logical Use Cases, where each Use Case is achieved by taking a given path through the DSD by making certain selections for one or more Pivotal Parms.

#### Error Handling Rules

If a Result XML Document is Equivalent the corresponding Request XML Document then it indicates “total success” and that ALL the Behavior(s) requested were performed EXACTLY as specified. However, if a Result XML Document contains any TLC errors, then the Behaviors requested by the TLCs in the corresponding Request XML Document were NOT performed AT ALL. 

To find out which Behaviors were not performed, and why, examine the TLC Errors in the Result XML Document. 

If a Result XML Document contains no TLC Errors but is NOT Equivalent to the corresponding Request XML Document, then SOME of the Behaviors requested by the corresponding Request XML Document were either NOT PERFORMED or were performed but NOT EXACTLY as specified. To find out which Behaviors were not executed, examine SGC Errors or Parm-Errors in the Result XML Document. To find out which Behaviors were executed, but not exactly as specified, examine the values of Parms in the Result XML Document and see how they differ from the requested values in the Request XML Document.

#### CSPs and Enterprise and Factory Resets

Configuration performed by ALL CSPs is stored such that it is intentionally lost on every Enterprise Reset and Factory Reset. Another way of saying this is that the CSPs and the subsystems they manage intentionally DO NOT store configuration in a manner that would cause it to be Persistent across an Enterprise or Factory Reset. By definition, it is NOT possible to make ANY configuration Persistent across Factory Reset since Factory Reset MUST ALWAYS return a device to its Factory Default state and hence MUST discard all configuration that has been applied.

However, it is possible to make Set Configuration Behaviors effectively Persistent across an Enterprise Reset by using the PersistMgr. This is done by appending a PersistMgr TLC to the Request XML Document. The PersistMgr CSP will then store the ENTIRE Request XML Document in a special secure location that will survive an Enterprise Reset. Following Enterprise Reset, the PersistMgr CSP will automatically resubmit all saved Request XML Documents, thus effectively restoring their effects. 

A PersistMgr TLC can specify whether the containing Request XML Document should always be saved or only if it was initially applied without TLC Errors. Each Request XML Document to be made Persistent using a PersistMgr CSP must be given a unique name to identify it, which can then be used to later enumerate and/or remove saved Request XML Documents. A PersistMgr TLC can specify the order in which various Request XML Documents should be reapplied following an Enterprise Reset. More information about the PersistMgr can be found in the CSP reference section.

## MDM Interface to MXMS

![img](images/quick-start/mdmInterface.png)

Since Tier 2 and Tier 3 MDM Agents WILL NOT be signed, they MUST perform ALL privileged management functions by interfacing to MXMS. This interface is documented and enabled by the EMDK for MDMs and consists of:

* Constructing a suitable Request XML Document
* Submitting the Request XML Document to MXMS
* Receiving a Result XML Document back from MXMS
* Parsing the Result XML Document to determine what happened

## MDM Implementation Approaches

### XML Created by MDM Administrator

![img](images/quick-start/implementation1.png)

In this model, the MDM Server and MDM Agent have no inherent understanding of the Request and Result XML Documents used by MXMS. An MDM Administrator obtains or creates a Request XML Document offline (using a text editor or a tool provided by Zebra) and provides the XML Document to the MDM Server via the MDM Server Proprietary UI.

The MDM Server treats the Request XML Document as an opaque payload and delivers it to the MDM Agent via the Proprietary Server/Agent communications protocol. The MDM Agent treats the Request XML Document as an opaque payload and submits it to the MXMS and receives back a Result XML Document. The MDM Agent treats the Result XML Document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. The MDM Server treats the Result XML Document as an opaque payload and provides it to the MDM Administrator via the MDM Server Proprietary UI. The MDM Server interprets the Result XML Document offline (using a text editor or a tool provided by Zebra) to determine the results of the request.

### XML Created by MDM Server

![img](images/quick-start/implementation2.png)

In this model, the MDM Server has an inherent understanding of the Request and Result XML Documents (but not the DSDs) used by MXMS, and the MDM Agent has no inherent understanding of any of them. 

An MDM Administrator creates a Request XML Document within the MDM Server using a Proprietary UI presented by the MDM Server based on a hard-coded knowledge of the capabilities of selected CSPs and the XML required to perform specific management operations using those CSPs. The MDM Server delivers the Request XML Document to the MDM Agent via the Proprietary Server/Agent communications protocol. The MDM Agent treats the Request XML Document as an opaque payload and submits it to the MXMS and receives back a Result XML Document. The MDM Agent treats the Result XML Document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. The MDM Server interprets the Result XML Document and presents those results to the MDM Administrator using a Proprietary UI presented by the MDM Server based on a hard-coded knowledge of the XML results that can be returned by CSPs the MDM Server uses to perform management operations.

### XML Created by MDM Server Using DSD

![img](images/quick-start/implementation3.png)

In this model, the MDM Server has an inherent understanding of the Request and Result XML Documents and DSDs used by MXMS, but the MDM Agent does not. 

An MDM Administrator creates a Request XML Document within the MDM Server using a Data-Driven UI presented by the MDM Server based on a selected DSD. The MDM Server delivers the Request XML Document to the MDM Agent via the Proprietary Server/Agent communications protocol. The MDM Agent treats the Request XML Document as an opaque payload and submits it to the MXMS and receives back a Result XML Document. The MDM Agent treats the Result XML Document as an opaque payload delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. The MDM Server interprets the Result XML Document and presents those results to the MDM Administrator using a Data-Driven UI presented by the MDM Server based on the corresponding DSD.

### XML Created by MDM Agent

![img](images/quick-start/implementation4.png)

In this model, the MDM Server has no inherent understanding of the Request and Result XML Documents or DSDs used by MXMS, and the MDM Agent has inherent understanding of the Request and Result XML Documents.

An MDM Administrator creates a Proprietary Command within the MDM Server using a Proprietary UI presented by the MDM Server based on a Proprietary feature-set shared between the MDM Server and MDM Agent. The MDM Server delivers the Proprietary Command to the MDM Agent via the Proprietary Server/Agent communications protocol. The MDM Agent interprets Proprietary Command and creates a Request XML Document to perform the desired function using one or more CSPs based on a hard-coded knowledge of the capabilities of the available CSPs and the XML required to perform specific management operations using those CSPs. The MDM Agent submits the created Request XML Document to the MXMS and receives back a Result XML Document. The MDM Agent interprets the Result XML Document based on a hard-coded knowledge of the XML results that can be returned by the CSPs it uses to perform management operations. The MDM Agent forms a Proprietary Response that communicates the interpreted results and delivers it to the MDM Server Agent via the Proprietary Server/Agent communications protocol. The MDM Server interprets the Proprietary Response and presents the results to the MDM Administrator using a Proprietary UI.

## MDM XML Creation

### DSD-Driven Programmatic XML Generation

A powerful and extensible, but fairly complex, method for creating conformant XML is to drive generation of XML directly from a DSD. This method is most valuable for an MDM Server that is likely to possess the requisite processing resources. This method could be used to support cases where the MDM Server wishes to present its own Data-Driven UI to allow an MDM Administrator to enabled creation of XML that is conformant to a selected DSD. It also could be used to support cases where the MDM Server needs to programmatically generate XML and wants to drive this from the DSD to avoid the need to change the code if a DSD is added or modified. This method requires that the DSD be parsed and interpreted by the MDM Server code. Since the processing of DSDs can be quite complex, use of this technique is not currently supported by the EMDK for MDMs. Future versions of the EMDK for MDMs may support this method by supplying code libraries that can be called directly from MDM Servers.

### XML Templates

A simple and quite useful method for creating conformant XML is to use XML Templates and Parm Value Substitution. An XML Template is XML that is “hand generated” using a tool that can present a Data-Driven UI based on a DSD. An XML Template may address the needs of a particular Use Case by making specific decisions about the values of specific Pivotal Parms. A single CSP may require many XML Templates if the CSP can be used to satisfy many different Use Cases. An MDM that wants to use a CSP needs to understand the Use Cases that CSP can support and which of them are of value to be leveraged by that MDM. For each Use Case that a CSP supports and that an MDM wishes to leverage, a suitable XML Template will likely need to be generated.

#### XML Templates and Parm Substitution

When an MDM uses XML Templates, a given Use Case is likely to involve one or more Non-Pivotal Parms. 

A Non-Pivotal Parm is simply a Parm where the value selected or entered has no impact on subsequent SGCs or Parms. When an XML Template is “hand generated” for a given Use Case using a tool, it will often be necessary to enter “valid” values for one or more Non-Pivotal Parms. Since the XML Template is intended to be generic for a given Use Case, any valid “placeholder” values can be entered for Non-Pivotal Parms. When an XML Template is used to implement its associated Use Case, Parm Value Substitution can be used to replace the “placeholder” values of Non-Pivotal Parms with the actual values required to customize that XML Template to produce the proper result. It is an important aspect of the XML used by MXMS that a given Parm can only appear ONCE within a given TLC since this can make it much easier to locate and perform replacement of the values of placeholder” values of Non-Pivotal Parms within an XML Template.

#### Management Functions and XML Templates

XML Templates and Parm Value Substitution can be quite useful when XML will be created by the MDM Server or the MSP Agent. This can be accomplished via a process such as:

* Determine the list of Management Functions that need to be supported by the MDM
* Determine which Use Case of which CSP can be used to implement each identified Management Function
* Generate an XML Template for each required Use Case 
* Embed the XML Template for each required Use Case into the code of the MDM Server or MDM Agent, as appropriate, and associate it logically with the associated  Management Function

To perform a given Management Function:

1. Obtain the Parameter Data required to perform that Management Function
2. Select the XML Template associated with that Management Function
3. Use Parm Value Substitution to customize the XML Template with the Parameter Data to generate XML to perform the desired Management Function
4. If the MDM Server is generating the XML, deliver the generated XML to the MSP Agent for submission to the MXMS
5. If the MSP Agent is generating the XML, submit the generated XML to the MXMS

## MDM XML Parsing

### XML Results and Queries

When submitting a Request XML Document, knowing what happened will require at least some minimal parsing of the Result XML Document. The required parsing can be simplified by taking advantage of the following aspects of MXMS XML: 

* All three types of Behaviors (Set Configuration, Perform Action, and Query Configuration) have the same format for their Result XML Documents
* The presence of TLC Errors and the (absence of) XML Equivalence can be used to quickly separate successes from failures
* If an operation was performed, but not exactly as requested, Parm Value Extraction can be used to compare requested and resulting values to determine any deviation
* When an XML Query is issued, Parm Value Extraction can be used to extract key values that were the primary purpose of the XML Query 

### Parm Value Extraction

A simple and quite useful method for simplifying the extraction of relevant information from an XML Result Document is Parm Value Extraction. Parm Value Extraction is simply the process of searching an XML Document for a Parm with a given name and extracting the value associated with it. Parm Value Extraction is most commonly applied to Non-Pivotal Parms since they are the mostly likely to contain useful information. This is because Pivotal Parms are typically “canned” as part of an XML Template used to create an Request XML Document and are simply replicated into the Result XML Document. It is an important aspect of the XML used by MXMS that a given Parm can only appear ONCE within a given TLC since this can make it much easier to extract of the value of a given named Parm from within a Result XML Document.


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
