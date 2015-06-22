# UiMgr

## About UiMgr

### Overview

The UI Manager feature allows you to manage UI configurations using its UI Manager parameters. 

### Main Functionality

* Enable Clipboard
* Disable Clipboard
* Clear Clipboard 
* Enable Auto Correct
* Disable Auto Correct
* Enable Home Key
* Disable Home Key
* Enable Bluetooth Paring Popup
* Disable Bluetooth Paring Popup
* Set Curent Local 
  * Canada
  * Canada French
  * China 
  * Chines
  * English 
  * France
  * French
  * German
  * Germany
  * Italian
  * Italy
  * Japan
  * Japanese
  * Korea
  * Korean
  * PRC
  * Simplified Chines
  * Taiwan 
  * Traditional Chines
  * UK
  * US
* Set Default Input Method 
  * English (US)
  * Japanese
  * Chinese (China)
  * User Defined Input Method

##Parameter Notes
### Clipboard
Specify whether the use of clipboard will be allowed.

* Do not change
* Enable
* Disable

### Clear Clipboard?
This check box provides an option whether to clear clipboard.

* Check Box is marked: Clear the clipboard.
* Check Box is not marked: Don't clear the clipboard.


##Example XML
### Configuring Device Region and Keyboard

    :::XML
    <wap-provisioningdoc>
      <characteristic type="UiMgr" version="4.3" >
        <parm name="CurrentLocale" value="en_GB"/>
        <parm name="InputMethodAction" value="1"/>
        <characteristic type="InputMethodDetails">
          <parm name="InputMethodOption" value="1"/>
        </characteristic>
      </characteristic>
    </wap-provisioningdoc>

## Queries

### Get Current Locale

#### Input 

    :::XML
     <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="CurrentLocale"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="CurrentLocale" value="en"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Home Key Usage

#### Input 

    :::XML
     <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="HomeKeyUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="" value=""/>
        </characteristic>
    </wap-provisioningdoc>  

### Get Clipboard Usage

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="ClipboardUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="ClipboardUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Auto Correct Usage

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="AutoCorrectUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="AutoCorrectUsage" value ="1"/> 
        </characteristic>
    </wap-provisioningdoc>

### Get Paring Popup

#### Input 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="BluetoothPairingPopupUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="BluetoothPairingPopupUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Input Methods

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <characteristic-query type="InputMethodDetails"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output Selected Input

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="InputMethodAction" value="1"/>
            <characteristic-query type="InputMethodDetails">
              <parm name="InputMethodOption" value="1"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

#### Output Custom Input

    :::XML
    <characteristic type="UiMgr" version="4.3" >
        <parm name="InputMethodAction" value="1"/>
        <characteristic type="InputMethodDetails">
	        <parm name="InputMethodOption" value="4"/>
	        <parm name="InputMethodPackageName" value="PakcageName1"/>
	        <parm name="InputMethodClassName" value="ClassName1"/>
        </characteristic>
    </characteristic>


### Get All Settings

#### Input 

    :::xml
    <wap-provisioningdoc>
        <characteristic-query type="UiMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
	    <characteristic type="UiMgr" version="4.3" >
            <parm name="CurrentLocale" value="en"/>
            <parm name="HomeKeyUsage" value="1"/>
            <parm name="ClipboardUsage" value ="1"/>
            <parm name="AutoCorrectUsage" value ="1"/> 
            <parm name="InputMethodAction" value="1"/>
            <parm name="BluetoothPairingPopupUsage" value="1"/>
            <characteristic type="InputMethodDetails">
	            <parm name="InputMethodOption" value="4"/>
	            <parm name="InputMethodPackageName" value="PakcageName1"/>
	            <parm name="InputMethodClassName" value="ClassName1"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UiMgr&os=JB&embed=true"></iframe> 