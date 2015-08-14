# SdCardMgr

## About SdCardMgr

### Overview

The SdCardMgr Feature Type allows your application to manage the usage of the device's external SD card.

### Main Functionality

* Enable or Disable the SD card usage

##Parameter Notes
###Enable or Disable use of SdCard
Pivotal parm: No

Parm name: SdCardUsage

Description: 

>This parm will enable or disable the usage of the external SD card, which means that the user will be allowed or disallowed from using an SD card on the device. Enabling or disabling this would affect whether or not the device can read from and write to the SD card.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether an SD card can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of an SD card on the device to be enabled, thus allowing the device user use an SD card for additional storage. If an SD card is inserted while the SD card usage is enabled, the SD card will be mounted.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause use of an SD card on the device to be disabled, thus preventing the device user from using an SD card for additional storage. If an SD card is inserted while the SD card usage is disabled, the SD card will be unmounted.</td>
  </tr>
</table>
</div>	

## Example XML
###Enable SD Card
	:::xml
	<wap-provisioningdoc>
		<characteristic type="SdCardMgr" version="4.3" >
			<parm name="SdCardUsage" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

## Queries

### Get is SD Card Usage Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SdCardMgr" >
            <parm-query name="SdCardUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SdCardMgr" version="4.3" >
            <parm name="SdCardUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=SdCardMgr&os=JB&embed=true"></iframe> 

