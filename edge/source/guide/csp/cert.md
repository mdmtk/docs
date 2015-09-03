# CertMgr

## About CertMgr

### Overview

A Digital Certificate is an electronic document that can be used to prove an asserted identity. By possessing a valid Public Certificate and its matching Private Key, an entity can assert an identity and then, through Certificate Validation, prove to other entities that it is entitled to assert that identity. Certificate Validation is based on verification that an entity possesses the Private Key that is associated with valid Public Certificate for the asserted identity and that was issued by a trusted Certificate Authority (CA).

To acquire a Public Certificate, an entity first generates a Public/Private Key pair. The entity then submits the Public Key along with identity information to a Certificate Authority (CA). The CA verifies the identity information provided by the requestor, issues a Public Certificate that contains the submitted Public Key and identity information, and signs the Public Certificate using its own Private Key. By signing a Public Certificate with its own Private Key, the CA enables other entities that trust that CA to trust the Public Certificate once they verify that it was signed by that CA. Signing also enables entities to verify that the Public Certificate is genuine and has not been modified since it was signed by the CA.

Digital Certificates are issued for a specific duration, commonly called their Validity Window. A Certificate is not generally considered valid unless the current date is within the Validity Window for that Certificates. This requirement has two key implications. First, it means that entities that utilize Digital Certificates, especially those that perform Certificate Validation, need to know the correct date. Second, it means that entities that use Digital Certificates will need to periodically refresh them by replacing a soon-to-expire Certificate (where the current date is near the end of its Validity Window) with a newer, but compatible Certificate (where the identity information is the same but the current date is further from the end of its Validity Window).

Digital Certificates are most commonly used in Android devices in two primary ways:

* A Public Certificate can be used to establish trust by a device of some other entity, such as a server. The most common use of Public Certificates alone is to establish trust of a CA and hence of all Certificates issued by that CA. Such a Public Certificate is generally referred to as a CA Certificate. In addition, a Public Certificate could be used to verify that an application to be run on the device came from a trusted developer or to verify that a Server being accessed by the device is authentic.
* Second, a Public Certificate can be paired with a Private Key to allow the device to assert and prove an identity to another entity. Such a pairing of a Public Certificate with a Private Key is often referred to as a Client Certificate because it is commonly used by a Client on device to prove an identity that it asserts to a Server. A Client Certificate might be used to authenticate the device to a Wireless Local Area Network (e.g. EAP-TLS) or to a Web Server (e.g. HTTPS).

Zebra Android devices can store Digital Certificates in two primary areas:

* The Trusted Store is a protected area of the device that can only hold CA Certificates. The Trusted Store is present in the device by default and contains CA Certificates for many well-known and universally trusted CAs. The Trusted Store allows various System Applications to establish trust of CAs that issue other Certificates.
* The Android Keystore is a protected area of the device that can hold both CA Certificates and Client Certificates. The Android Keystore must be initialized before it can be used and starts out empty.  By adding CA Certificates to the Android Keystore, trust of additional CAs and Servers may be established. By adding Client Certificates to the Android Keystore, the device can be provided with the ability to assert and prove various identities.

Digital Certificates are commonly acquired in the form of Certificate Files of various formats. Distinguished Encoding Rules (DER) is a standard scheme used to encode Digital Certificates. DER can be used directly to encode a Certificate as a binary Certificate File, which will usually have a file extension of .CER, but may also have a file extension of .CRT or .DER.  DER can also be used in conjunction with Base64 encoding to produce a text Certificate File according to the Privacy-enhanced Electronic Mail (PEM) standard. Certificate Files only encode Public Certificates, never Private Keys.

Private Keys are commonly generated or acquired in the form of a text Key File encoded according to the PEM standard. A common practice for Client Certificates is to combine a Public Certificate and a matching Private Key into a Container Files using the Public-Key Cryptography Standards (PKCS) standard PKCS12. PKCS12 is an archive file format for storing multiple cryptography objects as a single binary file, usually with a file extension of .PKCS12, .P12, or .PFX. Container Files constructed according to the PKCS12 standard are typically encrypted based on a password, to protect the Private Key contained therein. Encrypted Container Files would require the original password to be supplied before they could be processed.

The CertMgr Feature Type allows you to initialize the Android Keystore, install or uninstall CA Certificates to the Trusted Store and Android Keystore and the install or uninstalled CA and/or Client Certificates to the Android Keystore.

### Main Functionality

* Initialize Android Keystore
* Install or uninstall CA Certificates
* Install or uninstall Client Certificates

##Parameter Notes
###Certificate Action
Pivotal parm: Yes

Description: 

>This parm allows you to specify whether to initialize the Android Keystore, Install a Certificate or Uninstall a Certificate.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Install certificate</td>
    <td>"1"</td>
	<td>This value will cause a specified certificate to be installed on the device.</td>
  </tr>
  <tr>
    <td>Uninstall certificate</td>
    <td>"2"</td>
	<td>This value will cause a specified certificate to be uninstalled from the device.</td>
  </tr>
  <tr>
    <td>Initialize Android Keystore</td>
    <td>"4"</td>
	<td><p>This value will cause a new Android Keystore to be initialized.</p><b>Note:</b> Initializing the Android Keystore can only be done once. If an attempt is made to Initialize the Android Keystore when it has previously been initialized, via the CertMgr Feature Type or by the device user via the System Settings Menu, then an error will be returned in the Result XML. No method is currently provided, aside from an Enterprise Reset (which can be performed using the PowerMgr Feature Type) to return the Android Keystore to an uninitialized state or to re-initialize the Android Keystore.</p></td>
  </tr>
</table>
</div>	

###Certificate Alias
Settable if: The Certificate Action is "Install certificate" or "Uninstall certificate"

Pivotal parm: No

Parm name: CertAlias

Description: 

>This parm allows you to specify the Alias to be used to identify a Certificate. When installing a Certificate, the specified Alias is associated with the Certificate (and the corresponding Private Key for a Client Certificate). If a Certificate with the same Alias is already present, it will be replaced. When uninstalling a Certificate, the Alias associated with a previously installed Certificate should be specified. If a match is found, the matching Certificate will be removed. If an attempt is made to uninstall a Certificate for which no match is found, then an error will be returned in the Result XML.

Parm value input rules: 

* String with a minimum size of 1 character

#### Alias Handling Issues
Due to limitations on some devices, the Alias specified when installing a Client Certificate using a PFX file may not be assigned to the Certificate and Private Key. On such devices, the actual Alias that will be assigned to the Certificate and Private Key will be computed based on the content of the Certificate being installed. This can inhibit the later ability to uninstall or replace the Client Certificate since the Alias may be impractical to determine. On such devices, it may therefore be impractical to support Client Certificate management.

A key use of Client Certificates is to support Wireless Local Area Networks that use Client Certificates for authentication (e.g. EAP-TLS). In particular, the Wi-Fi Feature Type requires the Client Certificate to be used for authentication to be specified by supplying its Alias. So, if Client Certificate management is impractical, then management of such networks may also be impractical.

###Certificate Type
Settable if: The Certificate Action is "Install certificate"

Pivotal parm: Yes

Description: 

>This parm is used to specify the type of Certificate to be installed.

>**Note:** The Android Keystore must be initialized exactly once before the CertMgr Feature Type can be used to Install or Uninstall Certificates. The Android Keystore may be initialized using the CertMgr Feature Type or by a device user via the System Settings Menu.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>CA Certificate (.PEM file)</td>
    <td>"5"</td>
	<td>This value indicates that the Certificate to be installed is a CA Certificate (contained within a .PEM or .CER file) that will be added to both the Trusted Store and Android Keystore.</td>
  </tr>
  <tr>
    <td>Client Certificate (.PEM file)</td>
    <td>"6"</td>
	<td>This value indicates that the Certificate to be installed is the Public Certificate only (contained within a .PEM or .CER file) for a Client Certificate that will be added only to the Android Keystore.</td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.PFX file)</td>
    <td>"8"</td>
	<td>This value indicates that the Certificate to be installed is a Public Certificate and Private Key (contained within a .PFX file) for a Client Certificate that will be added only to the Android Keystore.</td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.P12 file)</td>
    <td>"9"</td>
	<td>This value indicates that the Certificate to be installed is a Public Certificate and Private Key (contained within a .P12 file) for a Client Certificate that will be added only to the Android Keystore.</td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.PKCS12 file)</td>
    <td>"10"</td>
	<td>This value indicates that the Certificate to be installed is a Public Certificate and Private Key (contained within a .PKCS12 file) for a Client Certificate that will be added only to the Android Keystore.</td>
  </tr>
</table>
</div>	

###Certificate Method
Settable if: The Certificate Action is "Install certificate"

Pivotal parm: Yes

Description: 

>This parm is used to specify the method to use to install the certificate.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Reference certificate file</td>
    <td>"2"</td>
	<td>This value indicates that the data for the Certificate to be Installed is contained with a file that exists in the device file system.</td>
  </tr>
  </table>
</div>	

###Certificate File
Pivotal parm: No 

Description: 

>This parm allows you to specify the path and name of the file in the device file system that contains the data for the Certificate to be installed. If an attempt is made to Install a Certificate using a path and name of a file that does not exist, is not readable, or that does not represent a contain the data for a valid Certificate of the specified type, then an error will be returned in the Result XML.

If the Certificate Action is "Install certificate" AND the Certificate Method is "Reference certificate file" AND the Certificate Type is "CA Certificate (.PEM file)"

* Parm name: CertFileCA

If the Certificate Action is "Install certificate" AND the Certificate Method is "Reference certificate file" AND the Certificate Type is "Client Certificate (.PEM file)" or "Client Certificate and Private Key (.PFX file)" or "Client Certificate and Private Key (.P12 file)" or "Client Certificate and Private Key (.PKCS12 file)"

*Parm name: CertFileClient

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters
	
###Adjust Clock?
Settable if: The Certificate Action is "Install certificate"

Pivotal parm: No

Parm name: CertAdjustClock

Description: 

>This parm allows you to specify whether or not to the device clock should be adjusted automatically when the Certificate is installed if the current date on the device is outside of the Validity Window for the Certificate.

>**Note:** This option allows you to solve the issue where a device may be unable to use a Certificate to get on a network (e.g. EAP-TLS) because the date on the device is not set properly (as it may not be on a fresh-out-of-the-box device) and hence the Certificate appears to be invalid (expired or not yet valid). If this parm has a value of "true", then if the date is outside the Validity Window for a Certificate that is being installed, the date of the device will be changed to the start date of the Validity Window for a Certificate. A common use case is to use this option to allow a Certificate to be used to join a network and then acquire the real date and time via that network (see Clock Feature Type).

Parm value input rules:

* String with a value of "true" or "false".

###Private Key Password
Settable if: The Certificate Action is "Install certificate" *AND* the Certificate Type is "Client Certificate and Private Key (.PFX file)" or "Client Certificate and Private Key (.P12 file)" or "Client Certificate and Private Key (.PKCS12 file)"

Pivotal parm: No

Parm name: PrivateKeyPassword

Description: 

>This parm allows you to specify the password that is required to decrypt a Container File containing the Public Certificate and Private Key for a Client Certificate.

>**Note:** If an attempt is made to use a Container File that is not encrypted or that was not encrypted using the specified password, then an error will be returned in the Result XML.

Parm value input rules: 

* String with a minimum of 1 character and a maximum of 32 characters

###Keystore Password
Settable if: The Certificate Action is "Initialize Android Keystore"

Pivotal parm: No

Parm name: KeystorePassword

Description: 

>This parm allows you to specify the password that will be used to Initialize the Android Keystore. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause a random password to be generated to Initialize the Android Keystore.

>**Note:** This password will never need to be supplied again to the CertMgr Feature Type once the Android Keystore has been successfully initialized since it will be able Install and Uninstall Certificates without needing this password. But the device user might need to know this password to perform management of Certificates using the System Settings Menu. If the password is lost or if a random password is generated, then the device user could not be supplied with the password and hence could never perform such management. This is generally not a problem since management of Certificates is generally a feature best left to MDMs and it is better to prevent the device user from performing such functions.

Parm value input rules: 

* String with a minimum of 1 character and a maximum of 32 characters

##Example XML
###Initialize the Android Keystore

The Android Keystore must be initialized exactly once before Certificates can be installed or uninstalled. If the device user has not initialized the Android Keystore via the System Settings Menu, and the CertMgr Feature Type has not previously been used to initialize the Android Keystore, then the CertMgr Feature Type should be used to initialize the Android Keystore, as shown below:

Without a password:

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
		</characteristic>
	</wap-provisioningdoc>

With a password:

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
			<characteristic type="keystore-details">
				<parm name="KeystorePassword" value="mobility"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Install a CA Certificate (.PEM file)
	
	:::XML	
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
				<parm name="CertType" value="5"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileCA" value="/enterprise/usr/persist/test.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
>**Note:** The above XML, with just a change of file name, could be used to install a CA Certificate from a .CER or .DER file, since all are DER encoded and hence supported via the same type.

###Install a Client Certificate (.PEM file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
				<parm name="CertType" value="6"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/enterprise/usr/persist/test.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
>**Note:** The above XML would not normally be used to Install brand new Client Certificate since it only installs the Public Certificate and not the Private Key. The primary situation where the above XML might be used is when the Public Certificate and Private Key were previously installed, as in the next example, and the Public Certificate needed to be replaced (such as to renew it before it expires). In such a situation, if the Public and Private Key did not change, then it may be preferable to update the Public Certificate and leave the Private Key alone.
	
###Install a Client Certificate and Private Key (.PFX file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
				<parm name="CertType" value="8"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/enterprise/usr/persist/test.pfx"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="mobility"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
>**Note:** The above XML, with just a change of file name, could be used to install a Client Certificate and Private Key from a .P12 or .PKCS12 file, since all are PKCS12 encoded and hence are supported via the same type.

###Remove a Certificate

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="2"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CertMgr&os=JB&embed=true"></iframe> 