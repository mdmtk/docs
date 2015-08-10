# LicenseMgr

## About LicenseMgr

### Overview

The LicenseMgr Feature Type allows you to handle license related configurations.

### Main Functionality

* Apply or remove a license

##Parameter Notes
###Specify license action to perform
Pivotal parm: Yes

Description: 

>This parm allows you to specify whether a license should be applied or removed from the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This value will not cause a license to be applied or removed.</td>
  </tr>
  <tr>
    <td>Apply</td>
    <td>"apply"</td>
	<td>This value will cause a license to be applied to the resident licensing component. This can enable the use of a currently unlicensed software component by installing the suitable license.</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>"remove"</td>
	<td>This value will cause a license to be removed from the resident licensing component. This can disable the use of a currently licensed software component by installing the suitable license.</td>
  </tr>
</table>
</div>	

####Specify verification method to use
Settable if: The "Specify license action to perform" is "Apply"

Pivotal parm: Yes

Description: 

>This parm allows you to specify how the feature name within in the input file should be verified.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not verify feature name</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the feature name to be verified.</td>
  </tr>
  <tr>
    <td>Verify against a standard feature name</td>
    <td>"1"</td>
	<td>This value will allow a standard feature name to be used for verification.</td>
  </tr>
  <tr>
    <td>Verify against a custom feature name</td>
    <td>"2"</td>
	<td>This value will allow a custom feature name to be used for verification.</td>
  </tr>
</table>
</div>	

#####**Specify standard feature name**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify verification method to use" is "Verify against a standard feature name"

Pivotal parm: No

Parm name: VerifyStandardFeatureName

Description: 

>This parm allows you to specify the desired feature name.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>SimulScan OCR/OMR</td>
    <td>"SIMULDC1_0_0"</td>
	<td>This value will set the desired feature name as SimulScan OCR/OMR.</td>
  </tr>
</table>
</div>	

#####**Enter custom feature name**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify verification method to use" is "Verify against a custom feature name"

Pivotal parm: No

Parm name: VerifyCustomFeatureName

Description: 

>This parm allows you to enter the custom feature name, which is obtained from license server.

Parm value input rules: 

* String with a valid feature name

####Specify licensing method
Settable if: The "Specify license action to perform" is "Apply"

Pivotal parm: Yes

Description: 

>This parm allows you to specify the method that will be used to supply the license blob.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Embed the license blob from the license file into the XML</td>
    <td>"embed"</td>
	<td>This parm value indicates that the license blob should be embedded in the XML.</td>
  </tr>
  <tr>
    <td>Reference a license file already on the mobile device</td>
    <td>"reference"</td>
	<td>This parm value indicates that a license file that is already on the device should be referenced.</td>
  </tr>
</table>
</div>	

#####**License file**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify licensing method" is "Embed the license blob from the license file into the XML"

Pivotal parm: No

Parm name: LicenseBlob

Description: 

>This parm allows you to select the licensing file whose data should be embedded in the XML. This is a base 64 encoded binary blob that will be applied to the resident licensing component.

Parm value input rules: 

* String with a minimum size of 1 character
* The data should be base 64 encoded

#####**Specify file name and path to the license file**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify licensing method" is "Reference a license file already on the mobile device"

Pivotal parm: No

Parm name: LicensePathAndFileName

Description: 

>This parm allows you to specify file name and path to the license file that will be referenced. The file that is referenced should contain a base 64 encoded binary blob which contains the SW license entitlement. The contents of this file will be extracted and applied to the resident licensing component.

Parm value input rules: 

* String with a minimum size of 1 character

####Specify selection method to use
Settable if: The "Specify license action to perform" is "Remove"

Pivotal parm: Yes

Description: 

>This parm allows you to specify the method that will be used to select an existing feature in the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Select using a standard feature name</td>
    <td>"1"</td>
	<td>This parm will cause a standard feature name to be used to select an existing feature on the device.</td>
  </tr>
  <tr>
    <td>Select using a custom feature name</td>
    <td>"2"</td>
	<td>This parm will cause a custom feature name to be used to select an existing feature on the device.</td>
  </tr>
</table>
</div>	

#####**Specify standard feature name**
Settable if: The "Specify license action to perform" is "Remove" *AND* "Specify selection method to use" is "Select using a standard feature name"

Pivotal parm: No

Parm name: SelectStandardFeatureName

Description: 

>This parm allows you to specify the desired standard feature name.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>SimulScan OCR/OMR</td>
    <td>"SIMULDC1_0_0"</td>
	<td>This value will set the desired feature name as SimulScan OCR/OMR.</td>
  </tr>
</table>
</div>	

#####**Enter custom feature name**
Settable if: The "Specify license action to perform" is "Remove" *AND* "Specify selection method to use" is "Select using a custom feature name"

Pivotal parm: No

Parm name: SelectCustomFeatureName

Description: 

>This parm allows you to enter the custom feature name, which is obtained from license server.

Parm value input rules: 

* String with a valid feature name

## Queries

### Get Get LicenseMgr Info

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type="LicenseMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic type=" ExistingLicense ">
                <parm name="SelectStandardFeatureName" value="featurename1"/>
                <parm name="CompanyName" value="CompanyName1"/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic type=" ExistingLicense ">
                <parm name=" SelectStandardFeatureName " value="featurename2"/>
                <parm name="CompanyName" value="CompanyName1"/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

### Get License Info

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic-query type="ExistingLicense">
                 <parm name="SelectCustomFeatureName" value=" featurename1"/>
            </characteristic-query>
        </characteristic>
    </wap-provisioningdoc>


#### Output if license is Installed

    :::XML
    <wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <parm name="LicenseAction" value="apply"/>
            <characteristic type=" ExistingLicense ">
                <parm name=" SelectCustomFeatureName " value="featurename1/>
                <parm name="CompanyName" value="CompanyName1/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

#### Output if license is not Installed

    :::XML
	<wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic-error type="ExistingLicense" desc="Feature is not licensed"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=LicenseMgr&os=JB&embed=true"></iframe> 