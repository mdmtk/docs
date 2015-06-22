# SdCardMgr

## About SdCardMgr

### Overview

The SdCard Manager allows your application to manage the use of the devices SD card.

### Main Functionality

* Enable SdCard
* Disable SdCard

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

