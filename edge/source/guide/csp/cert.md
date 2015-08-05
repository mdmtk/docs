# CertMgr

## About CertMgr

### Overview

The CertMgr Feature Type allows your application to install or uninstall certificates and initialize the Android Keystore. Digital certificates can be used to identify the device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by applications, such as Email or Chrome. 

### Main Functionality

* Install or uninstall Certificate
* Initialize Android Keystore
* Adjust System Clock

##Parameter Notes
###Certificate Action
Pivotal parm: Yes

Description: 

>This parm will allow you to specify which certificate action should be performed. These actions involve installing or uninstalling a certificate or initializing an Android Keystore. 

>When the Android Keystore is initialized, this will create a new Keystore, which will replace any previously existing keystore. A Keystore must exist on the device before installing or uninstalling certificates. 

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
	<td>This value will cause a new Android Keystore to be initialized.</td>
  </tr>
</table>
</div>	

###Certificate Alias
Settable if: The Certificate Action is "Install certificate" or "Uninstall certificate"

Pivotal parm: No

Parm name: CertAlias

Description: 

>This parm is used to provide the name (alias) that will uniquely identify the certificate. 

>When installing a certificate, the old certificate with same alias name will be replaced by the new certificate.

>When uninstalling a certificate, the Keystore or trusted CA store will be searched for a record with the same alias name. If the record is found, it removes the Keystore or trusted CA store. 

Parm value input rules: 

* String with a minimum size of 1 character

#### Alias Handling Issues
Due to current limitations of the Certificate Manager Feature (in an EAP-TLS scenario), it is not possible to "override" the Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore

The only way to determine the actual Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore is to examine the Android Keystore after installation to determine which Alias was used:

1. The same Alias will ALWAYS be assigned to a given Client Certificate and Private Key, no matter when, or on which device, it is installed

2. Whenever a different Client Certificate is used, a different Alias will generally be assigned to the Client Certificate and Private Key

#### Manually Determining the Certificate Alias
A device can be used to capture the alias being used for the certificate being installed. It is recommended that the Keystore be cleared before performing these steps (Settings->Security->Clear Credentials)

1. Use Certificate Manager to install the certificate onto a device.
2. Navigate to Settings->Wi-Fi->'+'' to add a network
3. Scroll to security, tap and select 802.1x EAP
4. Scroll to EAP method, tap and select TLS
5. Scroll to client certificate, tap and note a drop down box with "(unspecified)" and the alias of the installed certificate. The alias listed can become the value to use as the certificate when using WiFiConfig to configure a profile that uses EAP-TLS.

###Certificate Type
Settable if: The Certificate Action is "Install certificate"

Pivotal parm: Yes

Description: 

>This parm is used to specify the type of certificate to be installed.

>Note: Be sure to initialize the Keystore the first time when installing certificate types with private keys (.PFX,.P12,.PKCS12)

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
	<td></td>
  </tr>
  <tr>
    <td>Client Certificate (.PEM file)</td>
    <td>"6"</td>
	<td></td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.PFX file)</td>
    <td>"8"</td>
	<td></td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.P12 file)</td>
    <td>"9"</td>
	<td></td>
  </tr>
  <tr>
    <td>Client Certificate and Private Key (.PKCS12 file)</td>
    <td>"10"</td>
	<td></td>
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
	<td>This value indicates that the file must exist on the device that contains the certificate data.</td>
  </tr>
  </table>
</div>	

###Certificate File
Pivotal parm: No 

Description: 

>This parm is used to provide the path and name of the (in-device) file containing the desired certificate data. The parm name will change depending on the values of other CertMgr parms. 

If the Certificate Action is "Install certificate" *AND* the Certificate Method is "Reference certificate file" *AND* the Certificate Type is "CA Certificate (.PEM file)" 

* Parm name: CertFileCA

If the Certificate Action is "Install certificate" *AND* the Certificate Method is "Reference certificate file" *AND* the Certificate Type is "Client Certificate (.PEM file)" or "Client Certificate and Private Key (.PFX file)" or "Client Certificate and Private Key (.P12 file)" or "Client Certificate and Private Key (.PKCS12 file)"

* Parm name: CertFileClient

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters
	
###Adjust Clock?
Settable if: The Certificate Action is "Install certificate"

Pivotal parm: No

Parm name: CertAdjustClock

Description: 

>This parm is used to specify whether or not to adjust device clock if the current date is outside of the certificate validity window.

###Private Key Password
Settable if: The Certificate Action is "Install certificate" *AND* the Certificate Type is "Client Certificate and Private Key (.PFX file)" or "Client Certificate and Private Key (.P12 file)" or "Client Certificate and Private Key (.PKCS12 file)"

Pivotal parm: No

Parm name: PrivateKeyPassword

Description: 

>This parm is used to provide the password required to decrypt the private key

Parm value input rules: 

* String with a minimum of 1 character and a maximum of 32 characters

###Keystore Password
Settable if: The Certificate Action is "Initialize Android Keystore"

Pivotal parm: No

Parm name: KeystorePassword

Description: 

>This parm is used to set the password which is needed to initialize the Android Keystore.

>**Note:** This parm is optional and is not required to be present in the Request XML document.

Parm value input rules: 

* String with a minimum of 1 character and a maximum of 32 characters


##Example XML
###Initialize the Android Keystore

This must be done for a new device before certificates can be installed.

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

###Install a Client Certificate and Private Key (.P12 file)
	
	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/enterprise/usr/persist/test.p12"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="mobility"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Install a Client Certificate and Private Key (.PKCS12 file)
	
	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="mxtest"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/enterprise/usr/persist/test.pkcs12"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="mobility"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

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

<!--###Install a Certificate
	:::xml
	<!-- Silently install the PFX file from the /enteprise/usr/persist folder -->
	<characteristic type="CertMgr" >
		<parm name="CertAction" value="1"/>
		<characteristic type="cert-details">
			<parm name="CertAlias" value="mxtest"/>
			<parm name="CertType" value="8"/>
			<parm name="CertMethod" value="2"/>
			<parm name="PfxFile" value="/enterprise/usr/persist/test.pfx"/>
			<parm name="PrivateKeyPassword" value="mobility"/>
		</characteristic>
	</characteristic>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CertMgr&os=JB&embed=true"></iframe> 