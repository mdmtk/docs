# EncryptMgr

## About EncryptMgr

### Overview

The EncryptMgr allows the developer to set encryption policies on a device through MX XML. For example a developer can create an Encrypted File System for storing application data.  

### Main Functionality

* Install Encryption Key
* Revoke Encryption Key
* Create an Encrypted File System
* Delete an Encrypted File System
* Encrypt SD Card
* Format SD Card

##Parameter Notes
###Install Key?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to install an Encryption Key to the Key Storage Database on the device. After successfully installing a key, all Encrypted File Systems using that key will be mounted. If multiple unmounted Encrypted File Systems use the same mount point, only the first will be mounted.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an Encryption Key to be installed.</td>
  </tr>
  <tr>
    <td>Install key</td>
    <td>"1"</td>
	<td>This value will cause an Encryption Key to be installed.</td>
  </tr>
</table>
</div>

####Install Key Name
Settable if: The Install Key action is "Install key"

Pivotal parm: No

Parm name: InstallKeyName

Description: 

>This parm allows you to set the name of the Encryption Key that will be installed on the device. This name must not be identical to the name of an existing Encryption Key on the device.

Parm value input rules: 

* String with a minimum size of 1 character

####Install Key Value
Settable if: The Install Key action is "Install key"

Pivotal parm: No

Parm name: InstallKeyValue

Description: 

>This parm allows you to set the key value of the Encryption Key that will be installed on the device. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause a random key value to be generated for the given key name.

Parm value input rules: 

* HEX string with a length of 64 bytes

###Revoke Key?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to revoke an Encryption Key from the Key Storage Database. After successfully revoking a key, all Encrypted File System using that key will be unmounted.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an Encryption Key to be revoked.</td>
  </tr>
  <tr>
    <td>Revoke key</td>
    <td>"1"</td>
	<td>This value will cause an Encryption Key to be revoked.</td>
  </tr>
</table>
</div>	

####Revoke Key Name(s)
Settable if: The Revoke Key action is "Revoke key"

Pivotal parm: No

Parm name: RevokeKeyName

Description: 

>This parm allows you to provide the name(s) of the Encryption Key(s) to revoke.

Parm value input rules: 

* String with a minimum size of 1 character
* The names must be separated by commas

###Create EFS?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to create an Encrypted File System on the device. Since the process of creating the Encrypted File System takes time, access to the Encrypted File System will be denied during the creation process

>Encrypted File System creation may fail for any of the following conditions

>* Duplicate Encrypted File System names - Encrypted File Systems with the same name can coexist on different supporting file systems, but cannot coexist on the same file system.
>* Encrypted File System storage type is not available, e.g. no SD card inserted and mounted
>* Not enough space on supporting file system 
>* Key does not exist 
>* Creating an Encrypted File System on encrypted SD card 
>* Invalid parm values, e.g. Encrypted File System size too big or too small or not an integer number 
>* Unmatched mount point and Encrypted File System storage type

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an Encrypted File System to be created.</td>
  </tr>
  <tr>
    <td>Create EFS</td>
    <td>"1"</td>
	<td>This value will cause an Encrypted File System to be created.</td>
  </tr>
</table>
</div>	

####EFS Name
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSName

Description: 

>This parm allows you to provide the EFS name to create an Encrypted File System.

Parm value input rules: 

* String with a minimum size of 1 character

####EFS Key Name
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSKeyName

Description: 

>This parm allows you to provide the name of the Encryption Key you would like to use to encrypt the new Encrypted File System.

Parm value input rules: 

* String with a minimum size of 1 character

####EFS Location (internal/SDcard)
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSLocation

Description: 

>This parm allows you to select the location of the Encrypted File System to create.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Internal</td>
    <td>"0"</td>
	<td>This value indicates that the Encrypted File System will be in the internal storage of the device.</td>
  </tr>
  <tr>
    <td>SDcard</td>
    <td>"1"</td>
	<td>This value indicates that the Encrypted File System will be on the SD card.</td>
  </tr>
</table>
</div>	

####Mount path for EFS
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: MountPath

Description: 

>This parm allows you to provide the mount path to create the Encrypted File System.

Parm value input rules: 

* String with a minimum size of 1 character

####Size of EFS in MB
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: VolumeSize

Description: 

>This parm allows you to provide the size of the Encrypted File System in Megabytes (MB).

Parm value input rules: 

* String with a minimum size of 1 character
* This value must be at least 1MB and cannot exceed 4096MB.

###Delete EFS?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to delete an Encrypted File System.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an Encryption File System to be deleted.</td>
  </tr>
  <tr>
    <td>Delete EFS</td>
    <td>"1"</td>
	<td>This value will cause an Encryption File System to be deleted.</td>
  </tr>
</table>
</div>	

####EFS Location (internal/SDcard)
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: DeleteEFSLocation

Description: 

>This parm allows you to select the location of the Encrypted File System to delete.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Internal</td>
    <td>"0"</td>
	<td>This value indicates that the Encrypted File System that will be deleted is located in the internal storage on the device.</td>
  </tr>
  <tr>
    <td>SDcard</td>
    <td>"1"</td>
	<td>This value indicates that the Encrypted File System that will be deleted is located on the SD card.</td>
  </tr>
</table>
</div>	

###SDcard Operation
Pivotal parm: Yes

Description: 

>This parm allows you to choose if the SD card should be encrypted or formatted.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause no change to the SD card.</td>
  </tr>
  <tr>
    <td>Encrypt SDcard</td>
    <td>"1"</td>
	<td>This value will cause the entire SD card to be encrypted.</td>
  </tr>
  <tr>
    <td>Format SDcard</td>
    <td>"2"</td>
	<td><p>This value will cause the SD card to be formatted.</p> <p> <b>Note:</b> When formating an encrypted SD card, the result would be a formated, unencrypted SD card.</p></td>
  </tr>
</table>
</div>	

####Key to encrypt SDcard
Settable if: The SDcard Operation is "Encrypt SDcard"

Pivotal parm: No

Parm name: SdCardKeyName

Description: 

>This parm allows you to provide the key name to encrypt the  SD card with. Since the process of encrypting the SD card takes time, access to the encrypted SD card will be denied during the creation process. When encrypting an SD card that was previously encrypted, the SD card will be re-formated and re-encrypted, as a result, all existing data will be lost.

> Encrypting the SD card may fail for the following reasons:

>* SD card is not inserted
>* SD card is not mounted, e.g. UMS is in use
>* Key name is invalid

> **Note:** This process will format and encrypt the SD card. Therefore, all existing data on the SD card will be lost.


Parm value input rules: 

* String with a minimum size of 1 character

## Example XML
### Encrypt SD Card 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3" >
            <parm name="SdCardOperation" value="1"/>
            <parm name="SdCardKeyName" value=" EncryptKey"/>
        </characteristic>
    </wap-provisioningdoc>

## Queries

### Get Sdcard Encryption State

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr">
            <parm-query name="SdCardOperation" />
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <parm name="SdCardOperation" value="1" />
        </characteristic>
	</wap-provisioningdoc>    

### Get EFS (Encrypted File System) List

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic-query type="CreateEFS"/>
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="CreateEFS"/>
                <parm name="CreateEFSAction" value="1" /> 
                <characteristic type="CreateEFSDetails">
                    <parm name="EFSName" value=" EFSName1" /> 
                    <parm name="EFSKeyName" value=" EFSKeyName1" /> 
                    <parm name="EFSLocation" value=" StorageType1" /> 
                    <parm name="MountPath" value=" MountPath1" /> 
                    <parm name="VolumeSize" value=" VolumeSize1" /> 
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="CreateEFS"/>
                <parm name="CreateEFSAction" value="1" /> 
                <characteristic type="CreateEFSDetails">
                    <parm name="EFSName" value=" EFSName2" /> 
                    <parm name="EFSKeyName" value=" EFSKeyName2" /> 
                    <parm name="EFSLocation" value=" StorageType2" /> 
                    <parm name="MountPath" value=" MountPath2" /> 
                    <parm name="VolumeSize" value=" VolumeSize2" /> 
                </characteristic>
            </characteristic>
        </characteristic>
	</wap-provisioningdoc>

### Get Key List

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic-query type="InstallKey"/>
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="InstallKey"/>
                <parm name="InstallKeyAction" value="1" /> 
                <characteristic type=" InstallKeyDetails ">
                    <parm name="InstallKeyName" value=" KeyName1" /> 
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="InstallKey"/>
                <parm name="InstallKeyAction" value="1" /> 
                <characteristic type=" InstallKeyDetails ">
                    <parm name="InstallKeyName" value=" KeyName2" /> 
                </characteristic>
            </characteristic>
        </characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=EncryptMgr&os=JB&embed=true"></iframe> 