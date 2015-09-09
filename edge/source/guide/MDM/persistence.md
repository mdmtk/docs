#Persistence

##Overview

In the context of the MDM Toolkit, Persistence is defined as the ability of to persist across an Enterprise Reset or an OS Update that results in an Enterprise Reset.

On Zebra Android devices, an Enterprise Reset is the same as a Factory Reset with the exception that the /enterprise partition is preserved (whereas it would be destroyed on a Factory Reset). The purpose of an Enterprise Reset is to return the device to an Enterprise-defined default state, generally as determined by the contents of the /enterprise partition. When using the MDM Toolkit, an MDM Agent can control the Enterprise-defined default state, and hence what will persist across an Enterprise Reset. This is done by directly controlling which MDM-deployed content is stored in the /enterprise folder, so it will survive an Enterprise Reset, and by controlling which Request XML Documents are Persistent, using the PersistMgr Feature Type.

There are two key aspects of Persistence that should be considered with regard to an MDM: Persistence of Manageability by the MDM and Persistence of Management Operations performed using the MDM. These aspects will be covered in the major sections of this page.

###Persistence of Manageability by the MDM

As a general rule, most customers using an MDM would expect that an Enterprise Reset would return a device to their specific Enterprise-defined default state and that state would include everything necessary to allow the device to be managed by the MDM following the Enterprise Reset. It is therefore incumbent on an MDM vendor to ensure that their MDM Agent is capable of meeting this expectation.

If a customer used StageNow to Stage the device to install the MDM Agent and bring the device under management by the MDM, as described in [Staging a Device to be Managed by an MDM](../guide/MDM/staging), then Persistence of Manageability would be a given, since it would have been established by StageNow. But if the customer used some sort of sideloading process to install the MDM Agent and bring the device under management by the MDM, then Persistence of Manageability might require significant additional effort to achieve. This is another good reason why customers are strongly recommended to use StageNow to install the MDM Agent and bring the device under management by the MDM.

Of course, in order for Persistence to work as expected when established using StageNow, the customer must use StageNow properly for the MDM in question. Since each MDM will likely have unique aspects, such as file names, etc. the MDM vendor will need to provide customers with the specifics related to their MDM Agent APK file(s), configuration file(s), etc. so the customer can use StageNow appropriately to achieve Persistence of Manageability for that MDM.

####Staging Requirements for Persistence of Manageability

In order to Stage a device to be managed by an MDM and to provide Persistence of Manageability for that MDM across an Enterprise Reset, the following Staging requirements would need to be met:

1.	A suitable version of the MXMS must be present on a device before an MDM Agent can use any Feature Types to perform Management Operations on that device. The MDM Tool Kit is designed to target MXMS versions 4.4 and higher.

	Requirement 1 could be accomplished on most Zebra Android devices by having the customer use StageNow to install MXMS 4.4, if it is not already present on the device.

2.	The MDM Agent configuration file(s) must be stored in a location within the device file system that will persist across an Enterprise Reset
3.	The MDM Agent APK file(s) must be stored in a location within the device file system that will persist across an Enterprise Reset

	Requirements 2 and 3 could be accomplished on most Zebra Android devices by having the customer use StageNow to store these files to a folder under /enterprise/usr. In most cases, it would be advisable to use an MDM-specific sub-folder under this folder, such as /enterprise/usr/mymdm. Such a folder should have its permissions set to 777 (world readable and writable) to ensure that it will be accessible even if owner IDs change as a result of reinstallation following Enterprise Reset. If the StageNow FileMgr Setting Type is used to deploy files to such a folder, it will automatically set the permissions correctly. If the folder is created by the MDM Agent, it should set the permissions appropriately. The MDM vendor should select this folder and communicate it to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

4.	The MDM Agent APK file(s) must be installed

	Requirement 4 could be accomplished on most Zebra Android devices by having the customer use the StageNow AppMgr Setting Type install the APK file(s) using the same paths and file names to which those files were stored using the StageNow FileMgr Setting Type. The MDM vendor should select the locations and specify the file names and communicate them to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

5.	The MDM Agent APK(s) must be launched

	Requirement 5 could be accomplished on most Zebra Android devices by having the customer use the StageNow Intent Setting Type to send the Android Intent(s) required to launch the MDM Agent APK(s). The exact Android Intent(s) that need to be sent, and the details of those Intent(s), such as the package name and the class name of the MDM Agent, will be specific to the MDM vendor implementation. The MDM vendor should define those details (such as the package name and class name)and communicate them to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

6.	Connectivity must be established via which the MDM Agent can contact the MDM Server
	
	Requirement 6 could be accomplished on most Zebra Android devices by having the customer use various StageNow Setting Types, such as the [Wi-Fi Setting Type](../guide/csp/wifi) or the [GprsMgr Setting Type](../guide/csp/gprs), in conjunction with supporting Setting Types, such as the [CertMgr Setting Type](../guide/csp/cert), to establish the required Connectivity. The exact Settings Types to be used will depend on the types of Connectivity the customer wishes to establish and the types of Connectivity over which the MDM supports management of devices. This will likely vary widely by customer and the MDM vendor can likely give the customer only general advice on what Connectivity to establish when using StageNow to Stage a device to be managed by that MDM.

7.	All XML used above should be made Persistent

	Requirement 7 could be accomplished on most Zebra Android devices by having the customer use the StageNow PersistMgr Setting Type to make the entire Staging Profile Persistent.
	
####Sample Staging Profile	

The following sample Staging Profile is an example of a how a Staging Profile can be structured so that MDM Manageability can be persisted:
 
a. Wi-Fi - Set up Staging WLAN network
b. FileMgr - Download MDM Agent Configuration file to:
	
&nbsp;&nbsp;&nbsp;&nbsp; /enterprise/usr/mymdm/mymdm.cfg

c. FileMgr - Download MDM Agent APK file to:

&nbsp;&nbsp;&nbsp;&nbsp; /enterprise/usr/mymdm/mymdm.APK

d. AppMgr - Install APK file from:
	
&nbsp;&nbsp;&nbsp;&nbsp; /enterprise/usr/mymdm/mymdm.APK

e. Intent - Send Intent, with:

&nbsp;&nbsp;&nbsp;&nbsp; action="android.intent.action.MAIN"

&nbsp;&nbsp;&nbsp;&nbsp; type="Start Activity"

&nbsp;&nbsp;&nbsp;&nbsp; package="com.mycompany.mymdm"

&nbsp;&nbsp;&nbsp;&nbsp; class=" com.mycompany.mymdm/MainActivity"

f. PersistMgr - Persist entire Staging Profile, with:
	
&nbsp;&nbsp;&nbsp;&nbsp; PersistAsName="StageNowPersistMyMDM"

&nbsp;&nbsp;&nbsp;&nbsp; PersistAsVersion="1.0"

&nbsp;&nbsp;&nbsp;&nbsp; PersistAsOrder="50"

&nbsp;&nbsp;&nbsp;&nbsp; PersistIfError="false"

The sample Staging Profile would in theory meet all the key requirements to achieve Persistence of Manageability for the hypothetical MDM named "MyMDM". In particular:

* Step a) establishes Connectivity that will be used to download required files during Staging and that will be used by the MDM Agent to contact the MDM Server
* Steps b) and c) cause the the MDM Agent Configuration file and the MDM Agent APK file to be downloaded and stored into the folder "/enterprise/usr/mymdm", which is a location that will persist across an Enterprise Reset.
* Step d) installs the MDM Agent APK silently
* Step e) launches the Main Activity Class of the MDM Agent
* Step f) persists everything done in prior steps, causing PersistMgr to save the XML for the Staging Profile in the /enterprise partition and arrange to resubmit it following subsequent Enterprise Resets.

Once the steps in the sample Staging Profile are completed, the MDM Agent would be running. When the MDM Agent starts, it would presumably read its Configuration file, looking for the specific file name in a specific location (e.g. "/enterprise/usr/mymdm/mymdm.cfg") and configure itself based on the contents of that file. It would then use that configuration to reach the MDM Server, via the established Connectivity. The device then will be discovered by the MDM Server and will show up in the device inventory displayed by the Management Console of the MDM Server.

>**Note:** The sample Staging Profile presupposes that the same network can and will be used to download files and for the MDM Agent to contact the MDM Server. This need not be the case and may not always be the right thing to do. There may be situations where it is desired or required for downloading during Staging to be done over a Staging Network and for the MDM Agent to contact the MDM Server via a different Production Network. In such cases, the Staging Profile used might need to be more sophisticated.

####Operational Aspects of Persistence of Manageability

Once the Staging steps described in the sample Staging Profile have been completed, the MDM Agent would be running. When the MDM Agent starts, it would presumably read its Configuration file, looking for the specific file name in a specific location (e.g. "/enterprise/usr/mymdm/mymdm.cfg") and configure itself based on the contents of that file. It would then use that configuration information to reach the MDM Server, via the already established Connectivity. The device then will be discovered by the MDM Server and will show up in the device inventory displayed by the Management Console of the MDM Server.

At this point, if an Enterprise Reset was performed on the device, the PersistMgr would locate the Persistent Request XML Document that was stored by PersistMgr as a result of the Staging Profile and would resubmit it. For the sample Staging Profile, this would lead to the following:

* Step a) re-establishes the Connectivity that will be used by the MDM Agent to contact the MDM Server
* Steps b) and c) causes the attempted re-download of the MDM Agent Configuration file and the MDM Agent APK file. But since these both files already exist, downloading of both files will fail (benignly).
* Step d) re-installs the MDM Agent APK silently
* Step e) re-launches the Main Activity Class of the MDM Agent
* Step f) does not re-persist the Request XML Document since PersistIfError="false" and errors occurred (during the download steps). But since the Request XML Document is already Persistent, it will remain Persistent.

####MDM Agent Updates and Persistence of Manageability

Given that Persistence of Manageability has been established for the MDM Agent, as described above, there likely will come a when the MDM Agent needs to be updated, as described in Updating the MDM Agent. While the MDM Agent can be updated directing using the AppMgr Feature Type, unless care is taken, that will not automatically cause the new version of the MDM Agent to become the Persistent version. As noted above, following an Enterprise Reset, PersistMgr will re-install the MDM Agent APK file from the location as a result of resubmitting the Persistent Request XML Document.

If the new version of the MDM Agent APK file has the same name and is downloaded and stored into the same location, thus physically replacing the existing APK file, then the new version will be re-installed as a result of PersistMgr resubmitting that existing Persistent Request XML Document following a subsequent Enterprise Reset. Since the StageNow FileMgr Setting Type has to be told what name to give the file and the location in which it should be stored, you would need to know the details of how the customer used StageNow in order to know how to update the MDM Agent so as to maintain Persistence of Manageability. The easiest way to do that is to tell the customer the right way to use StageNow to Stage your MDM for Persistence of Manageability and then leverage that knowledge to update the MDM Agent to maintain Persistence of Manageability.

For more information on updating the MDM Agent, please see the [Updating page](../guide/MDM/updating).

####Connectivity and Persistence of Manageability

Various Feature Types, such as the Wi-Fi Feature Type or the GprsMgr Feature Type, in conjunction with supporting Feature Types, such as the CertMgr Feature Type, can be used to establish new Connectivity and/or modify existing Connectivity. But unless care is taken, any newly configured Connectivity will not automatically become Persistent. And as previously noted, Persistence of Connectivity is a key requirement for Persistence of Manageability, since manageability depends on the MDM Agent contacting the MDM Sever via some Connectivity.

Persistence of Connectivity is really a topic that is better suited for discussion in the next section Persistence of Management Operations performed using the MDM. But some aspects of Connectivity Persistence are worth mentioning here due to the potential overlap with Staging and the important role Connectivity plays in Persistence of Manageability. If Connectivity is made Persistent as part of Staging, as might intuitively seem be appropriate, to achieve Persistence of Manageability, then any subsequent changes that are made to Connectivity should be made Persistent as well, to ensure that they continue to promote and support ongoing Persistence of Manageability.

An important aspect to understand is that if the StageNow PersistMgr Setting Type was used to make the Request XML Document for the Staging Profile Persistent, and if Connectivity was part of what was made Persistent, then that Request XML Document, along with any Connectivity it configures will remain Persistent until it is explicitly made Non-persistent, using PersistMgr. If additional Connectivity is configured, and if it is also made Persistent using PersistMgr, then conflicts could potentially arise following an Enterprise Reset, when PersistMgr resubmits multiple Persistent Request XML Documents that configure Connectivity.

In a similar manner to that discussed for MDM Agent updates, Connectivity updates will need to be considered in light of their relationship to what was performed and what was Persisted, during Staging. Depending on how the customer performs their Staging, and in particular depending on what they choose to make Persistent, the MDM may need to align any Connectivity updates to match. This could lead to many combinations and could get quite complex. You could solve this by persisting the connectivity 

A simplifying assumption can be made and is strongly recommended. The customer can be directed to use StageNow to Stage the device such that Connectivity is not Persistent but everything else is Persistent. Then, the customer can be directed to use the MDM to configure Persistent Connectivity as one of the first Management Operations performed using the MDM. In this manner, no conflict between Persistent Connectivity configured by StageNow and Persistent Connectivity configured by the MDM could occur.

###Persistence of Management Operations performed using the MDM

This section assumes that you have already followed the guidelines and recommendations in the previous section and that the customer has following appropriate procedures when Staging the device to arrive at a point where Persistence of Manageability has been full realized. Once we no longer have to worry about Persistence of Manageability, the next question is "What about the Persistence of the various Management Operations that have been performed for the device by the MDM Agent at the request of the MDM Server?" This section will address this question.

####Approaches to Persistence of Management Operations

It is important to understand that once Persistence of Manageability is achieved, then by definition the device will end up managed by the MDM after an Enterprise Reset. This means that an MDM should be able to detect the new post-Enterprise Reset state of the device. If the MDM Server, via the MDM Agent, becomes aware of some configuration that should be on the device, but isn't, then the MDM Server should be able to apply the desired configuration to the device via the MDM Agent. So, in a sense, the MDM could offer Persistence of Management Operations that have been performed by simply re-performing them.

Depending on the situation, a customer may be completely satisfied with an MDM that only offers an MDM Server-based ability to re-perform Management Operations as a means to make them Persistent across an Enterprise Reset. But there may also be reasons why a customer considers such an approach to be undesirable or even unacceptable, such as:

* Connectivity might be lacking following an Enterprise Reset

	Depending on the circumstances under which an Enterprise Reset is initiated, Connectivity that allows the MDM Agent to contact the MDM Server might be lacking. Just because the configuration of the Connectivity has occurred doesn't mean the Connectivity is actually available. If the connection to the MDM Server is down for some reason, or if there is a disruption in the wireless network, or if the device is out of range, then the MDM Agent may be unable to contact the MDM Server right away.

	If the device is not usable for its intended purpose following an Enterprise Reset until the MDM Server is able to successfully re-perform critical Management Operations, then a lack of Connectivity could result in a loss of productivity. This could lead a customer to require that certain critical Management Operations be made Persistent locally on the device, so the device can be usable following an Enterprise Reset regardless of Connectivity. Obviously, in such cases, a device used under such situations would be effectively unmanaged until Connectivity becomes available again. But the customer might prefer that to having the device be unusable.

* Re-performing Management Operations takes time

	Following an Enterprise Reset, if Connectivity is available then the MDM Agent can contact the MDM Server and reports its post-Enterprise Reset State. The MDM Server can then compare the current state of the device to the desired state of the device and begin initiating Management Operations to return the device to the desired state. But that may require many round trips of information, downloading files, etc., all of which may take time. If those Management Operations are critical to return the device to a usable state, then that time may could result in a loss of productivity. This could lead a customer to require that certain critical Management Operations be made Persistent locally on the device, so the device can be usable more rapidly following an Enterprise Reset.
	
This leads us to identify the following high level approaches that an MDM might take to make Management Operations performed using that MDM Persistent:

* MDM Server re-performs Management Operations by resending them to the MDM Agent

	This approach as described earlier and the potential downsides related to dependence on Connectivity and potential lag time were already discussed. This approach has the upside that it have fewer demands on device storage.

	In particular, the /enterprise partition is a limited resource on Zebra Android devices, usually having a size of 128MB. If there is a need to make many large applications Persistent, there may not be adequate space to store Persistent copies of their APK files on the /enterprise partition. If not every application is of the same criticality, it might be appropriate to use this approach for the less critical applications.

* MDM Agent saves and re-performs MDM commands received from the MDM Server

	The recommended model for implementing MDM Agents using the MDM Toolkit could be described as follows:

	1.	MDM Server sends MDM-specific command(s) to MDM Agent
	2.	MDM Agent receives MDM-specific command(s) from MDM Server
	3.	MDM Agent interprets MDM-specific command(s) to determine function(s) to perform
	4.	MDM Agent extracts relevant information from an MDM-specific command for a function
	5.	MDM Agent selects a suitable pre-built Request XML templates for the function
	6.	MDM Agent substitutes relevant information into the XML template for the function
	7.	MDM Agent assembles a Request XML Document to perform one or more functions
	8.	MDM Agent submits the Request XML Document to the MXMS
	9.	MDM Agent receives the Result XML Document back from the MXMS
	10.	MDM Agent interprets the Result XML Document to determine what happened
	11.	MDM Agent creates MDM-specific result(s) to describe what happened
	12.	MDM Agent sends MDM-specific result(s) to the MDM Server

	If the above model is followed, then an MDM Agent could choose to store the MDM-specific command(s) received from MDM Server in a location where they will Persist across an Enterprise Reset. Following an Enterprise Reset, once the MDM Agent is running again, it can read those MDM-specific command(s) and re-process them (e.g. starting from step 3). Since these command(s) will be process without having just been received from the MDM Server, the results likely will not need to be sent back to the MDM Server.

	One potential benefit of this approach is that is can be used to Persist all Management Operations that the MDM Agent can be requested to do by the MDM Server, whether or not it ultimately is implemented via a Request XML Document that is submitted to MXMS. It could also be used to Persist combinations of things that use both MDM Agent code and Request XML Documents that are submitted to MXMS.

* MDM Agent saves and re-submits Request XML Documents

	If the recommended model for implementing MDM Agents using the MDM Tool Kit, as described above, is followed, then an MDM Agent could choose to store Request XML Documents, which have previously been submitted to the MXMS, in a location where they will Persist across an Enterprise Reset.  Following an Enterprise Reset, once the MDM Agent is running again, it can read those Request XML Documents and resubmit them (e.g. starting from step 8).
	
	One potential benefit of this approach is that the time lag can be reduced because the MDM Agent doesn't need to spend time re-processing MDM-specific command(s) and creating Request XML Documents but can instead immediately begin to submit previously saved Request XML Documents.

	One potential downside of this approach is that it can only be used to Persist Management Operations that the MDM Agent implements using Request XML Documents that are submitted to MXMS. If MDM Agent code must be executed to perform a given Management Operation, then the approach of saving MDM-specific command(s) would likely be a better choice.

* MDM Agent requests PersistMgr to save and re-submit Request XML Documents

	If the recommended model for implementing MDM Agents using the MDM Tool Kit, as described above, is followed, then an MDM Agent could choose to use PersistMgr to cause Request XML Documents to be stored Persistently and automatically resubmitted following an Enterprise Reset.

	One potential benefit of this approach is that it can simplify the implementation of an MDM Agent required to achieve Persistence of Management Operations because most of the work will be done by PersistMgr. The MDM Agent needs to identity when Persistence is required, but doesn't thereafter have to take any action following an Enterprise Reset to make Persistence actually occur.

	This approach shares the same downside as the approach of having the MDM Agent resubmit stored Request XML Documents in that it can only Persist what can be done via MXMS, not any custom code that may be implemented within them MDM Agent.

####Persistence Caveats

Once one or more approaches have been chosen for how to achieve Persistence of Management Operations, some or all of the following caveats should be considered to determine if they apply and, if so, how they should be addressed to help provide a robust and complete solution.

* Not every Management Operation needs to be Persist

	When a customer Device Administrator is performing Management Operations on a device from the Management Console of an MDM Server, some Management Operations will make sense to be Persistent. In other words, the Device Administrator may want them to be part of the new Enterprise-defined default state that the device will return to on subsequent Enterprise Resets. But it may not always be the case that every Management Operation initiated by a Device Administrator should be so permanent. If a Management Operation is performed as a temporary troubleshooting measure, then it may be preferable not to Persist it, and hence not to make it part of the new Enterprise-defined default state. In fact, a key reason why an Enterprise Reset might be issued would be to discard everything that is Non-persistent and return the device to a clean, known-good state.

	This may mean that an MDM should provide some mechanism for the customer Device Administrator to express their intention and take control over which Management Operations should or should not be Persisted. If such control is not provided to the Device Administrator via the Management Console, then the MDM may need to try to make the decision themselves. That could involve making everything Persistent or making nothing Persistent. Since these polar extremes might be undesirable, the MDM might make this determination on a per-Management Operation basis. It is strongly recommended that MDMs consider providing control to the Device Administrator.

* The /enterprise partition has a limited amount of space

	When making Management Operations Persistent, MDMs should keep in mind that the /enterprise partition is a limited resource used by multiple entities within Zebra Android devices. While the /enterprise partition is allocated 128MB, at least some of this space will be consumed by existing system processes. Consider that Android APK files can range from a few MB to tens of MB in size. If there are many APKs to install, the available space in /enterprise may be rapidly used up. Also keep in mind that while most Request XML Documents are fairly small, every Request XML Document that is made Persistent using PersistMgr will also occupy space on the /enterprise partition.

	As noted above, it is strongly recommended that control over which Management Operations are made Persistent be provided by the MDM to the customer Device Administrator via the Management Console. In that way, the Device Administrator is empowered to decide how to user the limited space on the /enterprise partition and to select which Management Operations should be persisted locally on the device and which can wait to be performed again by the MDM Server.

	It should also be understood that the /enterprise partition may not be the only place that an MDM Agent can store files such that they will Persist across an Enterprise Reset. On devices that have a fixed internal Primary Storage partition, files stored on that partition may well survive an Enterprise Reset, although they might or might not survive certain OS Updates (e.g. from one major version to another). On devices that support removable storage and on which storage card is present, files store on that storage card will generally always survive an Enterprise Reset.

	While there may be multiple alternate locations that could be used on a particular device to Persist files across an Enterprise Reset, the /enterprise partition is the one that is supported on all Zebra Android devices and hence should be used wisely. Also note that Request XML Documents that are Persisted by PersistMgr will always be stored in the /enterprise partition, but can reference files stored elsewhere. So, hybrid solutions that support use of multiple partitions for Persistence can be deployed. It is strongly recommend that customer Device Administrators be provided a method to control the location where files are stored. This could provide both a means to decide what to Persist but also to decide which partition to use to Persist which content.

* The MDM Agent may not be the only application using PersistMgr

	As noted earlier, customers can use the StageNow PersistMgr Setting Type to achieve Persistence of Management for an MDM. The StageNow PersistMgr Setting Type could also be used by the customer to Persist many other things. In addition, the PersistMgr Feature Type could be used by custom applications written using Zebra's Enterprise Mobility Development Kit (EMDK) for Android to Persist various things. Finally, in theory a customer could install multiple MDM Agents, each of which could be using the PersistMgr Feature.

	The primary thing to consider is that just because the MDM Agent submits a Request XML Document and includes a PersistMgr Feature to make it Persistent, doesn't mean that there aren't already, or won't later be, other Persistent Request XML Documents that do similar things and that might conflict. It is important to understand that when multiple applications are using PersistMgr, no one application is inherently pre-eminent. An MDM Agent can't guarantee that its use of PersistMgr will somehow take precedence over others.
	
	The following are some of ways that an MDM might seek to cope with such situations:
		
	* The MDM Agent could query PersistMgr, at strategic times, to determine which Request XML Documents are Persistent and what their names are, and report them to the MDM Server for display in the Management Console. While the MDM Agent cannot obtain the contents of those, knowing the names might provide a customer Device Administrator with some idea of what they do, and the order may help track down why the end result is not as expected.
	* The MDM Agent could use some consistent naming scheme to identify its own Persistent Request XML Documents and thereby differentiate them from others.
	* The MDM Agent could provide the customer Device Administrator with a method to remove Persistent Request XML Documents that are unknown or that might be suspect.
	* The MDM Agent could use the AccessMgr Feature Type, perhaps at the request of the customer Device Administrator via the Management Console of the MDM Server, to control which applications are allowed to submit Request XML Documents to the MXMS. This could be used to give the MDM exclusive, or semi-exclusive access to perform Management Operations using MXMS.

