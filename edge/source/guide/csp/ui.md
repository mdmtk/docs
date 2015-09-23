# UiMgr

## About UiMgr

### Overview

The UiMgr Feature Type allows you to manage UI configurations. 

### Main Functionality

* Enable or Disable Clipboard
* Clear Clipboard 
* Enable or Disable Auto Correct
* Enable or Disable Home Key
* Enable or Disable Bluetooth Paring Popup
* Set Current Locale 
* Set Default Input Method 

##Parameter Notes
### Clipboard
Pivotal parm: No 

Parm name: ClipBoardUsage

Description: 

>This parm will specify whether or not the use of the clipboard will be allowed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the clipboard is currently allowed to be used or not.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will allow the clipboard to be used. This will allow the user to be able to copy and paste data to or from the clipboard.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disallow the clipboard from being used. This will disallow the user from being able to copy and paste data to or from the clipboard and a toast message will appear to tell the user that the use of the clipboard was disabled by the admin.</td>
  </tr>
</table>
</div>	

###Clear Clipboard?
Pivotal parm: No

Parm name: ClipBoardClear

Description: 

>This parm allows you to specify if the clipboard should be cleared. This would erase anything that was copied and saved to the clipboard.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"true"</td>
	<td>This value will cause the clipboard to be cleared. This would clear all of the clipboard data for all of the users.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the clipboard to be cleared.</td>
  </tr>
</table>
</div>	

###Enable/Disable AutoCorrect
Pivotal parm: No

Parm name: AutoCorrectUsage

Description: 

>This parm allows you to specify whether if mistyped words will be allowed to be corrected by Auto Correct.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether Auto Correct is allowed to be used or not.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will allow Auto Correct to be used. This will allow the user to set the auto correction states(off/modest/aggressive/very aggressive) through the Settings application (Settings/Language & Input / Android Keyboard / Auto Correction). Auto Correct will be enabled if any state other than "Off" is selected.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disallow Auto Correct from being used. This would cause the Auto Correct option in the Settings application to be grayed out and the user will be blocked from turning this feature On or Off.</td>
  </tr>
</table>
</div>	

###Enable/Disable HomeKey
Pivotal parm: No

Parm name: HomeKeyUsage

Description: 

>This parm allows you to specify if the use of Home Key will be allowed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether Home Key is allowed to be used or not.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will allow the Home Key to be used. Therefore, when the user presses the Home Key, the device will go to the home screen.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disallow the Home Key from being used. Therefore, when the user presses the Home Key, the device will not go to the home screen. Disabling the Home Key also does not affect the key's behavior when it is long pressed.</td>
  </tr>
</table>
</div>	

###Enable/Disable Bluetooth Pairing Popup
Pivotal parm: No

Parm name: BluetoothPairingPopupUsage

Description: 

>This parm will allow you to specify if the use of the Bluetooth Pairing Popup will be allowed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether Bluetooth Pairing Popup is allowed to be used or not.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will allow the Bluetooth Pairing Popup to be used. Therefore, if the user tries to do Bluetooth pairing with another device, the user will see the Bluetooth Pairing Popup appear.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disallow the Bluetooth Pairing Popup from being used. Therefore, if the user tries to do Bluetooth pairing with another device, the user will not see the Bluetooth Pairing Popup appear.</td>
  </tr>
</table>
</div>	

###Set Current Locale
Pivotal parm: No

Parm name: CurrentLocale

Description: 

>This parm value will allow you to select the device's current locale.

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
	<td></td>
  </tr>
  <tr>
    <td>CANADA</td>
    <td>"en_CA"</td>
	<td></td>
  </tr>
  <tr>
    <td>CANADA_FRENCH</td>
    <td>"fr_CA"</td>
	<td></td>
  </tr>
  <tr>
    <td>CHINA</td>
    <td>"zh_CN"</td>
	<td></td>
  </tr>
  <tr>
    <td>CHINESE</td>
    <td>"zh"</td>
	<td></td>
  </tr>
  <tr>
    <td>ENGLISH</td>
    <td>"en"</td>
	<td></td>
  </tr>
  <tr>
    <td>FRANCE</td>
    <td>"fr_FR"</td>
	<td></td>
  </tr>
  <tr>
    <td>FRENCH</td>
    <td>"fr"</td>
	<td></td>
  </tr>
  <tr>
    <td>GERMAN</td>
    <td>"de"</td>
	<td></td>
  </tr>
  <tr>
    <td>GERMANY</td>
    <td>"de_DE"</td>
	<td></td>
  </tr>
  <tr>
    <td>ITALIAN</td>
    <td>"it"</td>
	<td></td>
  </tr>
  <tr>
    <td>ITALY</td>
    <td>"it_IT"</td>
	<td></td>
  </tr>
  <tr>
    <td>JAPAN</td>
    <td>"ja_JP"</td>
	<td></td>
  </tr>
  <tr>
    <td>JAPANESE</td>
    <td>"ja"</td>
	<td></td>
  </tr>
  <tr>
    <td>KOREA</td>
    <td>"ko_KR"</td>
	<td></td>
  </tr>
  <tr>
    <td>KOREAN</td>
    <td>"ko"</td>
	<td></td>
  </tr>
  <tr>
    <td>PRC</td>
    <td>"zh_CN"</td>
	<td></td>
  </tr>
  <tr>
    <td>SIMPLIFIED_CHINESE</td>
    <td>"zh_CN"</td>
	<td></td>
  </tr>
  <tr>
    <td>TAIWAN</td>
    <td>"zh_TW"</td>
	<td></td>
  </tr>
  <tr>
    <td>TRADITIONAL_CHINESE</td>
    <td>"zh_TW"</td>
	<td></td>
  </tr>
  <tr>
    <td>UK</td>
    <td>"en_GB"</td>
	<td></td>
  </tr>
  <tr>
    <td>US</td>
    <td>"en_US"</td>
	<td></td>
  </tr>
</table>
</div>	

###Set Default Input Method?
Pivotal parm: Yes

Description: 

>This parm value will allow you to select the action for input method.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to the current input method on the device.</td>
  </tr>
  <tr>
    <td>Change Current Input Method</td>
    <td>"1"</td>
	<td>This value will allow you to change the current input method that is used on the device.</td>
  </tr>
</table>
</div>	

####Select a Default Input Method Option
Settable if: The "Set Default Input Method?" value is "Change Current Input Method"

Pivotal parm: Yes

Description: 

>This parm value will allow you to select the desired input method. The selected method will be enabled by the CSP and then set as the default.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>English(US)</td>
    <td>"1"</td>
	<td>This value would set the default input method to English.</td>
  </tr>
  <tr>
    <td>Japanese</td>
    <td>"2"</td>
	<td>This value would set the default input method to Japanese.</td>
  </tr>
  <tr>
    <td>Chinese(China)</td>
    <td>"3"</td>
	<td>This value would set the default input method to Chinese.</td>
  </tr>
  <tr>
    <td>User defined Input Method</td>
    <td>"4"</td>
	<td>This value would set the default input method to a user defined input method which would be installed by the user. The package name and class name would need to be specified.</td>
  </tr>
</table>
</div>	

#####**Package name of input Method**
Settable if: The "Set Default Input Method?" value is "Change Current Input Method" *AND* the "Select a Default Input Method Option" is "User defined Input Method"

Pivotal parm: No

Parm name: InputMethodPackageName

Description: 

>This parm will allow you to provide the package name of the user defined input method that will be set to the default input method.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* String with a minimum size of 1 character

#####**Class name of input Method**
Settable if: The "Set Default Input Method?" value is "Change Current Input Method" *AND* the "Select a Default Input Method Option" is "User defined Input Method"

Pivotal parm: No

Parm name: InputMethodClassName

Description: 

>This parm will allow you to provide the class name of the user defined input method that will be set to the default input method.

Parm value input rules: 

* String with a minimum size of 1 character

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
			<parm-query name="HomeKeyUsage"/>
		</characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="HomeKeyUsage" value="1"/>
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

#### Output 

	:::XML
	<wap-provisioningdoc>
		<characteristic type="UiMgr" version="4.3">
			<parm name="InputMethodAction" value="1"/>
			<characteristic type="InputMethodDetails">
				<parm name="InputMethodOption" value="1"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>


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