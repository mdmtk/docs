# Wi-Fi

## About Wi-Fi

### Overview

The Wi-Fi feature allows you to manage your devices Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.

>Notes:

>In order for settings to be applied, Wi-Fi must be turned on. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply certain settings if the device's Wi-Fi is not already turned on.

>In other CSPs, the terms "enable" and "disable" refer to whether or not the user will be allowed to turn the device on or off at all. However, in this CSP, "enable" and "disable" are equivalent to "turn on" and "turn off".


### Main Functionality

* Enable Wi-Fi
* Disable Wi-Fi
* Set Wi-Fi to Never Sleep
* Set Wi-Fi to Never Sleep When Plugged In
* Set Wi-Fi to Always Sleep
* Use Network Notifications
* Do Not Use Network Notifications
* Enable Auto Country Selection
* Manually Select country
* Set the RF Band
* Enable Auto RF Band Selection
* Enable Fusion Advanced Logging
* Enable the Device to set the Clock off the AP (Access Point) Time
* Enable HF SR (Hyper Fast Secure Roam)
* Disable HR SR (Hyper Fast Secure Roam)
* Enable CCKM (Cisco Centralized Key Management)
* Disable CCKM (Cisco Centralized Key Management)
* Enable FT (Fast Transition)
* Disable FT (Fast Transition)
* Enable FTRIC (Fast Transition Resource Request)
* Disable FTRIC (Fast Transition Resource Request)
* Enable OKC (Opportunistic Key Caching)
* Disable OKC (Opportunistic Key Caching)
* Enable PMKID Caching
* Disable PMKID Caching
* Enable PreAuth
* Disable PreAuth
* Set Power Savings Mode to Always Active
* Set Power Savings Mode to WMM-PS
* Set Power Savings Mode to Null Data Power Save
* Set Power Savings Mode to PS-POLL
* Enable Advanced Logging
* Disable Advanced Logging
* Enable FIPS Compliance
* Disable FIPS Compliance
* Enable Restricted WLAN Settings UI
* Disable Restricted WLAN Settings UI
* Enable Radio Resource Measurement(802.?11K)
* Disable Radio Resource Measurement(802.?11K)
* Enable Management Frame Protection Mode(802.?11w)
* Disable Management Frame Protection Mode(802.?11w)
* Set the band preference
* Enable FTOverTheDS
* Disable FTOverTheDS
* Enable AggregatedFT
* Disable AggregatedFT
* Enable ScanAssist
* Disable ScanAssist
* Enable Coverage Hole Detection
* Disable Coverage Hole Detection
* Enable Sub-Net Roam
* Disable Sub-Net Roam
* Enable WANCountry
* Disable WANCountry
* Add a Wi-Fi Network
* Remove a Wi-Fi Network
* Connect to a Wi-Fi Network
* Disconnect from a Wi-Fi Network
* Enable an Existing Wi-Fi Network
* Disable an Existing Wi-Fi Network
* Disable all Existing Wi-Fi Networks
* Remove all Existing Wi-Fi Networks

##Parameter Notes
### Target OS
Pivotal parm: Yes

Description: Specify the target OS of the device

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	</tr>
  <tr>
    <td>Android</td>
    <td>"2"</td>
  </tr>
</table>
</div>
	
### Wi-Fi Enable 
Pivotal parm: No

Parm name: WiFiAction

Description: Turn the Wi-Fi radio on or off.

> Notes:

>In order for settings to be applied, Wi-Fi must be turned on. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply certain settings if the device's Wi-Fi is not already turned on.

>In other CSPs, the terms "enable" and "disable" refer to whether or not the user will be allowed to turn the device on or off at all. However, in this CSP, "enable" and "disable" are equivalent to "turn on" and "turn off".

>As a best practice, it is recommended that this is turned on whenever setting another Wi-Fi parm that requires to be on, as it is not harmful to enable the Wi-Fi again if it is already on.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"enable"</td>
	<td>Turns on the Wi-Fi radio</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"disable"</td>
	<td>Turns off the Wi-Fi radio</td>
  </tr>
</table>
</div>	

### Sleep Policy
Pivotal parm: No

Parm name: WifiSleepPolicy

Description: Specifies the state of the Wi-Fi radio when the device suspends.

For Android devices, the device is suspended when the display turns off after idling for a certain amount of time. While the device is suspended, the device's software continues running in a lower power mode, meaning that the device itself is not turned off and software can run when the device is in this state. The amount of power consumption while in this state partially depends on what features are left on.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Never Sleep</td>
    <td>"AlwaysOn"</td>
	<td>This will leave the Wi-Fi radio on while the device's display is turned off and Wi-Fi can continue to be used by any software that is running. Existing Wi-Fi connections will be maintained as if the device was not suspended. For example, emails will continue to come in. This behavior may be preferred in some situations, however this could significantly increase the drain on the battery and reduce the battery life.</td>
  </tr>
  <tr>
    <td>Never Sleep When Plugged</td>
    <td>"PluggedIn"</td>
	<td>This will leave the Wi-Fi radio on while the display is turned off if the device is not running from battery power.</td>
  </tr>
  <tr>
    <td>Always Sleep</td>
    <td>"NeverOn"</td>
	<td>This turns the Wi-Fi radio off while the device's display is turned off. Existing Wi-Fi connections will be dropped and will need to be re-established, if needed, when the display (and Wi-Fi) are turned back on. Software that is running cannot use Wi-Fi while it is off. This can significantly increase the battery life if communications are not needed when the device is suspended.</td>
  </tr>
</table>
</div>

### Network Notification
Pivotal parm: No

Parm name: NetworkNotification

Description: Specifies whether or not to notify the user when an unknown, open network comes in range. If this setting is turned on, the user will be asked if they want to join the network, which could be useful for personal or dual use devices which might want to use a public Wi-Fi connection at some point. However, turning these notifications on is not recommended for devices that are supposed to be used only on a single corporate Wi-Fi network since it might be harmful to offer a user the opportunity to connect to a rogue, non-secure network.

 <div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Use network notification</td>
    <td>"true"</td>
	<td>Notify the user when an unknown, open network comes into range</td>
  </tr>
  <tr>
    <td>Do not use network notification</td>
    <td>"false"</td>
	<td>Don't notify the user when an unknown, open network comes into range</td>
  </tr>
</table>
</div>

### Country Selection Auto/Manual
Pivotal parm: Yes

Description: By leaving this option unchecked, the country may be determined by the router or access point setting. To manually select the country, you should select the checkbox. When doing this a country drop-down will appear.

#### Country
Settable if: The "Configure Country (Auto/Manual)" box is not checked

Pivotal parm: No

Parm name: Country

Description: Sets the country to use for Wi-Fi regulatory setting. 

When you choose 'AUTO' in the drop-down, 802.11d will be enabled. 802.11d is a mode where the device will listen for a country-specific beacon. It also will not transmit unless it can auto-detect the country, which can be beneficial because the device cannot transmit with a frequency that is inconsistent with the Wi-Fi infrastructure and is therefore less likely to violate country-specific regulations.

If a Wi-Fi infrastructure does not support, 802.11d, then the country that is used by this infrastructure will need to be selected so that the device can connect to it.

 <div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
	</tr>
  <tr>
    <td>AUTO (Use 802.11d)</td>
    <td>"AUTO"</td>
  </tr>
  <tr>
    <td>Algeria</td>
    <td>"DZ"</td>
  </tr>
  <tr>
    <td>Anguilla</td>
    <td>"AI"</td>
  </tr>
  <tr>
    <td>Argentina</td>
    <td>"AR"</td>
  </tr> 
  <tr>
    <td>Australia</td>
    <td>"AU"</td>
  </tr> 
  <tr>
    <td>Austria</td>
    <td>"AT"</td>
  </tr> 
  <tr>
    <td>Bahamas</td>
    <td>"BS"</td>
  </tr> 
  <tr>
    <td>Bahrain</td>
    <td>"BH"</td>
  </tr> 
  <tr>
    <td>Barbados</td>
    <td>"BB"</td>
  </tr> 
  <tr>
    <td>Belarus</td>
    <td>"BY"</td>
  </tr> 
  <tr>
    <td>Belgium</td>
    <td>"BE"</td>
  </tr> 
  <tr>
    <td>Bermuda</td>
    <td>"BM"</td>
  </tr> 
  <tr>
    <td>Bolivia</td>
    <td>"BO"</td>
  </tr> 
  <tr>
    <td>Bonaire</td>
    <td>"BQ"</td>
  </tr> 
  <tr>
    <td>Bosnia and Herzegovina</td>
    <td>"BA"</td>
  </tr> 
  <tr>
    <td>Brazil</td>
    <td>"BR"</td>
  </tr> 
  <tr>
    <td>Bulgaria</td>
    <td>"BG"</td>
  </tr> 
  <tr>
    <td>Canada</td>
    <td>"CA"</td>
  </tr>
  <tr>
    <td>Cayman Islands</td>
    <td>"KY"</td>
  </tr> 
  <tr>
    <td>Chile</td>
    <td>"CL"</td>
  </tr>
  <tr>
    <td>China</td>
    <td>"CN"</td>
  </tr>
  <tr>
    <td>Christmas Island</td>
    <td>"CX"</td>
  </tr>  
  <tr>
    <td>Columbia</td>
    <td>"CO"</td>
  </tr> 
  <tr>
    <td>Costa Rica</td>
    <td>"CR"</td>
  </tr>
  <tr>
    <td>Croatia</td>
    <td>"HR"</td>
  </tr>
  <tr>
    <td>Curacao</td>
    <td>"CW"</td>
  </tr> 
  <tr>
    <td>Cyprus</td>
    <td>"CY"</td>
  </tr> 
  <tr>
    <td>Czech Republic</td>
    <td>"CZ"</td>
  </tr> 
  <tr>
    <td>Denmark</td>
    <td>"DK"</td>
  </tr> 
  <tr>
    <td>Dominican Republic</td>
    <td>"DO"</td>
  </tr> 
  <tr>
    <td>Ecuador</td>
    <td>"EC"</td>
  </tr> 
  <tr>
    <td>Egypt</td>
    <td>"EG"</td>
  </tr> 
  <tr>
    <td>El Salvador</td>
    <td>"SV"</td>
  </tr> 
  <tr>
    <td>Estonia</td>
    <td>"EE"</td>
  </tr> 
  <tr>
    <td>Falkland Islands(Malvinas)</td>
    <td>"FK"</td>
  </tr> 
  <tr>
    <td>Finland</td>
    <td>"FI"</td>
  </tr> 
  <tr>
    <td>France</td>
    <td>"FR"</td>
  </tr> 
    <tr>
    <td>French Guiana</td>
    <td>"GF"</td>
  </tr>
  <tr>
    <td>Germany</td>
    <td>"DE"</td>
  </tr>
  <tr>
    <td>Greece</td>
    <td>"GR"</td>
  </tr>
  <tr>
    <td>Guadelope</td>
    <td>"GP"</td>
  </tr> 
  <tr>
    <td>Guam</td>
    <td>"GU"</td>
  </tr> 
  <tr>
    <td>Guatemala</td>
    <td>"GT"</td>
  </tr> 
  <tr>
    <td>Guyana</td>
    <td>"GY"</td>
  </tr> 
  <tr>
    <td>Haiti</td>
    <td>"HT"</td>
  </tr> 
  <tr>
    <td>Honduras</td>
    <td>"HN"</td>
  </tr> 
  <tr>
    <td>Hong Kong</td>
    <td>"HK"</td>
  </tr> 
  <tr>
    <td>Hungary</td>
    <td>"HU"</td>
  </tr> 
  <tr>
    <td>Iceland</td>
    <td>"IS"</td>
  </tr> 
  <tr>
    <td>India</td>
    <td>"IN"</td>
  </tr> 
  <tr>
    <td>Indonesia</td>
    <td>"ID"</td>
  </tr> 
  <tr>
    <td>Ireland</td>
    <td>"IE"</td>
  </tr> 
  <tr>
    <td>Israel</td>
    <td>"IL"</td>
  </tr> 
  <tr>
    <td>Italy</td>
    <td>"IT"</td>
  </tr>
   <tr>
    <td>Jamaica</td>
    <td>"JM"</td>
  </tr> 
  <tr>
    <td>Japan</td>
    <td>"JP"</td>
  </tr> 
  <tr>
    <td>Jordan</td>
    <td>"JO"</td>
  </tr> 
  <tr>
    <td>Kazakhstan</td>
    <td>"KZ"</td>
  </tr> 
  <tr>
    <td>Kenya</td>
    <td>"KE"</td>
  </tr> 
  <tr>
    <td>Korea Republic</td>
    <td>"KR"</td>
  </tr> 
  <tr>
    <td>Kuwait</td>
    <td>"KW"</td>
  </tr> 
  <tr>
    <td>Latvia</td>
    <td>"LV"</td>
  </tr> 
  <tr>
    <td>Lebanon</td>
    <td>"LB"</td>
  </tr> 
  <tr>
    <td>Liechtenstein</td>
    <td>"LI"</td>
  </tr> 
  <tr>
    <td>Lithuania</td>
    <td>"LT"</td>
  </tr> 
  <tr>
    <td>Luxembourg</td>
    <td>"LU"</td>
  </tr> 
  <tr>
    <td>Macedonia, Former Yugoslav Republic</td>
    <td>"MK"</td>
  </tr> 
  <tr>
    <td>Malaysia</td>
    <td>"MY"</td>
  </tr> 
  <tr>
    <td>Malta</td>
    <td>"MT"</td>
  </tr> 
  <tr>
    <td>Martinique</td>
    <td>"MQ"</td>
  </tr> 
  <tr>
    <td>Mexico</td>
    <td>"MX"</td>
  </tr> 
  <tr>
    <td>Montenegro</td>
    <td>"ME"</td>
  </tr> 
  <tr>
    <td>Morocco</td>
    <td>"MA"</td>
  </tr> 
  <tr>
    <td>Netherlands, Antilles</td>
    <td>"AN"</td>
  </tr>
   <tr>
    <td>Netherlands</td>
    <td>"NL"</td>
  </tr> 
  <tr>
    <td>New Zealand</td>
    <td>"NZ"</td>
  </tr> 
  <tr>
    <td>Nicaragua</td>
    <td>"NI"</td>
  </tr> 
  <tr>
    <td>Nigeria</td>
    <td>"NG"</td>
  </tr> 
  <tr>
    <td>Niue</td>
    <td>"NU"</td>
  </tr> 
  <tr>
    <td>Norfolk Islands</td>
    <td>"NF"</td>
  </tr> 
  <tr>
    <td>Northern Marina Islands</td>
    <td>"MP"</td>
  </tr> 
  <tr>
    <td>Norway</td>
    <td>"NO"</td>
  </tr> 
  <tr>
    <td>Oman</td>
    <td>"OM"</td>
  </tr> 
  <tr>
    <td>Pakistan</td>
    <td>"PK"</td>
  </tr> 
  <tr>
    <td>Panama</td>
    <td>"PA"</td>
  </tr> 
  <tr>
    <td>Paraguay</td>
    <td>"PY"</td>
  </tr> 
  <tr>
    <td>Peru</td>
    <td>"PE"</td>
  </tr> 
  <tr>
    <td>Philippines</td>
    <td>"PH"</td>
  </tr> 
  <tr>
    <td>Poland</td>
    <td>"PL"</td>
  </tr> 
  <tr>
    <td>Portugal</td>
    <td>"PT"</td>
  </tr> 
  <tr>
    <td>Puerto Rico</td>
    <td>"PR"</td>
  </tr> 
  <tr>
    <td>Qatar</td>
    <td>"QA"</td>
  </tr> 
  <tr>
    <td>Romania</td>
    <td>"RO"</td>
  </tr> 
  <tr>
    <td>Russian Federation</td>
    <td>"RU"</td>
  </tr> 
  <tr>
    <td>St. Maarten</td>
    <td>"SX"</td>
  </tr> 
  <tr>
    <td>Saudi Arabia</td>
    <td>"SA"</td>
  </tr> 
  <tr>
    <td>Serbia</td>
    <td>"RS"</td>
  </tr> 
  <tr>
    <td>Singapore</td>
    <td>"SG"</td>
  </tr> 
  <tr>
    <td>Slovakia</td>
    <td>"SK"</td>
  </tr> 
  <tr>
    <td>Slovenia</td>
    <td>"SI"</td>
  </tr> 
  <tr>
    <td>South Africa</td>
    <td>"ZA"</td>
  </tr> 
  <tr>
    <td>Spain</td>
    <td>"ES"</td>
  </tr> 
  <tr>
    <td>Sri Lanka</td>
    <td>"LK"</td>
  </tr> 
  <tr>
    <td>Sweden</td>
    <td>"SE"</td>
  </tr> 
  <tr>
    <td>Switzerland</td>
    <td>"CH"</td>
  </tr> 
  <tr>
    <td>Taiwan, Province of China</td>
    <td>"TW"</td>
  </tr> 
  <tr>
    <td>Thailand</td>
    <td>"TH"</td>
  </tr> 
  <tr>
    <td>Trinidad and Tobago</td>
    <td>"TT"</td>
  </tr> 
  <tr>
    <td>Tunisia</td>
    <td>"TN"</td>
  </tr> 
  <tr>
    <td>Turkey</td>
    <td>"TR"</td>
  </tr> 
  <tr>
    <td>Ukraine</td>
    <td>"UA"</td>
  </tr> 
  <tr>
    <td>United Arab Emirates</td>
    <td>"AE"</td>
  </tr> 
  <tr>
    <td>United Kingdom</td>
    <td>"GB"</td>
  </tr> 
  <tr>
    <td>U.S.A.</td>
    <td>"US"</td>
  </tr> 
  <tr>
    <td>Uruguay</td>
    <td>"UY"</td>
  </tr> 
  <tr>
    <td>Venezuela</td>
    <td>"VE"</td>
  </tr> 
  <tr>
    <td>Vietnam</td>
    <td>"VN"</td>
  </tr> 
  <tr>
    <td>Virgin Islands(British)</td>
    <td>"VG"</td>
  </tr> 
  <tr>
    <td>Virgin Islands(US)</td>
    <td>"VI"</td>
  </tr>
</table> 
</div>

### RF Band
Pivotal parm: Yes

Description: Specifies the 802.11 band(s) to use. The bands to use will usually be determined automatically through negotiation with the Wi-Fi infrastructure. However, in some cases, the Wi-Fi infrastructure may be shared amongst multiple uses, which may mean that it would be preferable to limit the devices to one band and leave the other bands for other purposes. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Unchanged</td>
    <td>""</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>2.4GHZ</td>
    <td>"2.4GHz"</td>
	<td>Enable 2.4GHz band</td>
  </tr>
  <tr>
    <td>5.0GHZ</td>
    <td>"5.0GHz"</td>
	<td>Enable 5.0GHz band</td>
  </tr>
  <tr>
    <td>Auto</td>
    <td>"Auto"</td>
	<td>Enable both bands and connect automatically to either</td>
  </tr>
</table>
</div>

#### 2.4GHz Channels 
Settable if: The RF Band that is selected is either 2.4GHz or Auto

Pivotal parm: No

Parm name: 2.4GHzChannels

Description: Enable the specified channels in the 2.4GHz band. In most cases, if the 2.4GHZ band is allowed to be used, then the channels in this band that should be used can be determined automatically through negotiation with the Wi-Fi infrastructure. However, it may be beneficial to control the channels manually because different channels or sets of channels might be used for different uses. It may be preferable to limit the devices to only use certain channels so that other channels are left for other purposes.

Parm value input rules: 

* String containing a set of valid channels.
	* Not all channels are available in all every country. Please see the link below for more information:
		* https://en.wikipedia.org/wiki/List_of_WLAN_channels
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10

#### 5.0GHz Channels 
Settable if: The RF Band that is selected is either 5.0GHz or Auto

Pivotal parm: No

Parm name: 5.0GHzChannels

Description: Enable the specified channels in the 5.0GHz band. In most cases, if the 5.0GHZ band is allowed to be used, then the channels in this band that should be used can be determined automatically through negotiation with the Wi-Fi infrastructure. However, it may be beneficial to control the channels manually because different channels or sets of channels might be used for different uses. It may be preferable to limit the devices to only use certain channels so that other channels are left for other purposes.

Parm value input rules: 

* String containing a set of valid channels. 
	* Not all channels are available in all every country. Please see the link below for more information:
		* https://en.wikipedia.org/wiki/List_of_WLAN_channels
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 36-60

### Specify Diagnostic Options
Pivotal parm: Yes

Description: Specify whether Diagnostic Options will be used. When enabled, Fusion Advanced Logging can also be enabled. This option can be used to collect additional information for troubleshooting but can impact the performance of a device.

>Note: In most cases, this option should not be used except under the direction of Zebra support staff.

#### Fusion Advanced Logging
Settable if: The "Specify Diagnostic Options" box is checked

Pivotal parm: No

Parm name: FusionAdvancedLogging

Description: Specify whether Fusion Advanced Logging will be used

### Specify Advanced Options

Description: Specify whether Advanced Options will be used. In most cases, these options should not be used except under the direction of Zebra support staff. More information about the Advanced Options that can be set, please see [this page.](../guide/csp/wifiAdvancedOptions)

### Network Action
Pivotal parm: Yes

Description: This is used to manage the Wi-Fi network profiles on the device. A given device can have zero or more Wi-Fi network profiles defined, which are used to specify the information that is needed for the device to connect to a single Wi-Fi network. These profiles can each be enabled or disabled. An enabled Wi-Fi network profile can be used to connect to a network and a disabled profile cannot be used to connect to a network. At any given time, the device can be connected to at most one network using a corresponding Wi-Fi network profile. The potential network connections are controlled by which profiles are defined and enabled on the device. It is also possible to force a connection to the network associated with a specific Wi-Fi network profile.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Nothing</td>
    <td>""</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Add a New Network</td>
    <td>"Add"</td>
	<td>Will add a new profile with the provided profile settings. For the options that will be presented when choosing to add a new network, please see the following "SSID" parm and the "Add a New Network Options" section below</td>
  </tr>
  <tr>
    <td>Remove an Existing Network</td>
    <td>"Remove"</td>
	<td>Will remove the a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Connect to an Existing Network</td>
    <td>"Connect"</td>
	<td>Will initiate a connection to the network based on the SSID</td>
  </tr>
    <tr>
    <td>Disconnect from an Existing Network </td>
    <td>"Disconnect"</td>
	<td>Will disconnect from a network based on the SSID</td>
  </tr>
  <tr>
    <td>Enable an Existing Network</td>
    <td>"Enable"</td>
	<td>Will enable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Disable an Existing Network</td>
    <td>"Disable"</td>
	<td>Will disable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Disable All Existing Networks</td>
    <td>"DisableAll"</td>
	<td>Will disable all network profiles</td>
  </tr>
    <tr>
    <td>Remove All Existing Networks</td>
    <td>"RemoveAll"</td>
	<td>Will remove all network profiles</td>
  </tr>
</table>
</div>

#### SSID
Settable if: The Network Action is any option other than "Do Nothing", "Disable All Existing Networks", or "Remove All Existing Networks"

Pivotal parm: No

Parm name: SSID

Description: This is the SSID name of the network, which is the primary mechanism used to identify a Wi-Fi network and is used to identify the Wi-Fi network profile to be acted on. Therefore, any Network Action that is used to affect a single profile need to specify the SSID to select the desired profile.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 32 characters

### Add a New Network Options
The following parms are the parameters that are used for adding a network, in addition to the SSID parm above. 

#### Security Mode 
Settable if: The Network Action is "Add a New Network"

Pivotal parm: Yes

Description: This specifies the Security Mode used by the network, which determines the degree or class of security to be used on the device. Based on the Security Mode, more or fewer security options will be offered.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Open</td>
    <td>"0"</td>
	<td>An open network indicates that the network uses no security. These kinds of networks are generally not advised to be used for transmitting sensitive data unless other protection mechanisms are used, such as VPNs, data encryption, etc. No additional security information will need to be supplied to configure these networks.</td>
  </tr>
  <tr>
    <td>Personal</td>
    <td>"1"</td>
	<td>This indicates that the network uses basic security. A Pre-Shared Key (PSK) or Wired Equivalency Privacy (WEP) key, which is known to both the device and the Wi-Fi infrastructure, is used to encrypt data. These networks are more secure than open networks, but may be compromised if the keys are not handled securely and/or are not changed periodically. Security information pertaining to the required key will need to be supplied to configure these networks.</td>
  </tr>
  <tr>
    <td>Enterprise</td>
    <td>"2"</td>
	<td>This indicates that the network uses 802.1x Extensible Authentication Protocol (EAP) security. These networks use authentication to establish the entitlement of a device to join the network and then distribute necessary keys once this entitlement has been verified. Security information pertaining to the EAP type and authentication credentials to be used will need to be supplied to configure these networks.</td>
  </tr>
</table>
</div>

#### WPA Mode
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise"

Pivotal parm: Yes

Description: When the selected Security Mode is "Personal" or "Enterprise", the WPA Mode must be specified to determine what sort of key will then be used.

>Note: WEP is not supported with a Enterprise Security Mode. It is only supported using Personal Security Mode.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>WPA</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption using the Wi-Fi Protected Access (WPA) standard. WPA only performs encryption using the Temporal Key Integrity Protocol. A TKIP-compatible key will therefore need to be specified.</td>
  </tr>
  <tr>
    <td>WPA2</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption using the Wi-Fi Protected Access version 2 (WPA2) standard. WPA2 supports encryption using either the Temporal Key Integrity Protocol (TKIP) for backward compatibility with WPA, or the more secure Advanced Encryption Standard (AES) algorithm.  A decision about whether to use TKIP or AES (or auto-select) will need to be made and then a TKIP or AES-compatible key will need to be specified.</td>
  </tr>
  <tr>
    <td>WPA/WPA2</td>
    <td>"3"</td>
	<td>This indicates that the network supports both the Wi-Fi Protected Access (WPA) standard and the Wi-Fi Protected Access version 2 (WPA2) standard. This is essentially the same effect as selecting WPA2 since WPA2 supports backward compatibility with WPA.</td>
  </tr>
  <tr>
    <td>WEP</td>
    <td>"4"</td>
	<td>This indicates that the network requires encryption using the older, and less secure, Wired Equivalency Privacy (WEP) standard. A decision about the WEP key size to use will need to be made and then a WEP key of the selected size will need to be specified.</td>
  </tr>
</table>
</div>

#### Authentication
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Parm name: Authentication

Description: This is the Authentication Mode used by the network. When a Security Mode of "Enterprise" is selected, an Authentication Mode will need to be specified to determine how authentication will be performed as part of the 802.1x EAP type used by the network.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>EAP-TLS</td>
    <td>"1"</td>
	<td>This indicates that the network requires authentication using the 802.1x Extensible Authentication Protocol - Transport Layer Security (EAP-TLS) standard (RFC 5216). EAP-TLS requires a device identity to be specified and requires that a client certificate be specified to prove the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-FAST-GTC</td>
    <td>"13"</td>
	<td>This indicates that the network requires authentication using a token generated using a Generic Token Card (GTC) within an anonymous TLS tunnel established using the 802.1x Extensible Authentication Protocol - Flexible Authentication via Secure Tunneling (EAP-FAST) standard (RFC 5422). EAP-FAST-GTC requires a device identity to be specified and requires that a token value (typically obtained from a physical token device) be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-FAST-MSCHAPV2</td>
    <td>"11"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within an anonymous TLS tunnel established using the 802.1x Extensible Authentication Protocol - Flexible Authentication via Secure Tunneling (EAP-FAST) standard (RFC 5422). EAP-FAST-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-TTLS-PAP</td>
    <td>"8"</td>
	<td>This indicates that the network requires authentication using the Password Authentication Protocol (PAP) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-PAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
   <tr>
    <td>EAP-TTLS-MSCHAP</td>
    <td>"6"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol (MSCHAP) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-MSCHAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-TTLS-MSCHAPV2</td>
    <td>"7"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>LEAP</td>
    <td>"4"</td>
	<td>This indicates that the network requires authentication using the Lightweight Extensible Authentication Protocol (LEAP) defined by Cisco.  LEAP uses a modified version of MSCHAP without a secure tunnel and hence can be easily compromised. LEAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity. Unlike standard EAP modes, LEAP does not support an optional certificate to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>PEAP-MSCHAPV2</td>
    <td>"2"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within a secure TLS tunnel established using the Protected Extensible Authentication Protocol, (PEAP) defined by Cisco Systems, Microsoft, and RSA Security. PEAP-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr> 
  <tr>
    <td>PEAP-GTC</td>
    <td>"10"</td>
	<td>This indicates that the network requires authentication using a token generated using a Generic Token Card (GTC) within a secure TLS tunnel established using the Protected Extensible Authentication Protocol, (PEAP) defined by Cisco Systems, Microsoft, and RSA Security. PEAP-GTC requires a device identity to be specified and requires that a token value (typically obtained from a physical token device) be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
</table>
</div>

#### Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

##### **Identity**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Parm name: Identity

Description: the name that should be used to join the network.


##### **Anonymous Identity** 
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS" or "LEAP"

Pivotal parm: No

Parm name: AnonymousIdentity

Description: Provide the name of the anonymous identity to be used to join the network.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Protect Password**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS"

Pivotal parm: No

Parm name: ProtectPassword

Description: when selected will encrypt the password.

##### **Password** 
Pivotal parm: No

Description: the password to be used to connect to the network. The parm name will change depending on the value of ProtectPassword.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

If Protect Password is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is false
* Parm name: PasswordClear

If Protect Password is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is true
* Parm name: PasswordEncrypted

##### **Server Certificate Name (optional)**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is "EAP-TLS", "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-FAST-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

Parm name: OptionalServerCertificate

Description: The name of the certificate alias that should be used to verify the server (Optional).

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Client Certificate Name (mandatory)**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Enterprise" and the Authentication is "EAP-TLS"

Pivotal parm: No

Parm name: MandatoryClientCertificate

Description: The name of the certificate alias that should be used to join the network (Mandatory).

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Client Certificate Name (optional)**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Enterprise" the Authentication is "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-TTLS-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

Parm name: OptionalClientCertificate

Description: The name of the certificate alias that should be used to join the network (Optional).

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **EAP-TLS and Certificate Alias**
Due to current limitations of the Certificate Manager Feature (in an EAP-TLS scenario), it is not possible to "override" the Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore

The only way to determine the actual Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore is to examine the Android KeyStore after installation to determine which Alias was used:

1. The same Alias will ALWAYS be assigned to a given Client Certificate and Private Key, no matter when, or on which device, it is installed

2. Whenever a different Client Certificate is used, a different Alias will generally be assigned to the Client Certificate and Private Key

###### **Manually Determining the Certificate Alias**
A device can be used to capture the alias being used for the certificate being installed. It is recommended that the key store be cleared before performing these steps (Settings->Security->Clear Credentials)

1. Use Certificate Manager to install the certificate onto a device.
2. Navigate to Settings->Wi-Fi->'+'' to add a network
3. Scroll to security, tap and select 802.1x EAP
4. Scroll to EAP method, tap and select TLS
5. Scroll to client certificate, tap and note a drop down box with "(unspecified)" and the alias of the installed certificate. The alias listed can become the value to use as the certificate when using WiFiConfig to configure a profile that uses EAP-TLS.

#### Encryption Type
Pivotal parm: No

Description: Type of encryption used by the network. The values that can be selected for Encryption Type will vary based on the selections made for Security Mode and WPA Mode. But a selection must always be made for Encryption Type whenever Security Mode is not "Open" (indicating no encryption).

If WPA is selected: 

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA
* Parm name: EncryptionWPA
*  <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Default</td>
    <td>"0" </td>
	<td>This will not change the encryption type that is currently used on the device</td>
  </tr>
  <tr>
    <td>TKIP</td>
    <td>"1" </td>
	<td>This indicates that the network requires encryption to be performed using the Temporal Key Integrity Protocol (TKIP) standard with a per-packet key length of 128 bits.</td>
  </tr>
</table></div>

If WPA2 is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA2 or WPA/WPA2
* Parm name: EncryptionWPA2
*  <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Default</td>
    <td>"0"</td>
	<td>This will not change the encryption type that is currently used on the device</td>
  </tr>
  <tr>
    <td>AES-CCMP</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption to be performed using the Advanced Encryption Standard - Counter mode Cipher block chaining Message authentication code Protocol (AES-CCMP) standard, wherein the AES block cipher is used with a per-packet key length of 128 bits.</td>
  </tr>
  <tr>
    <td>TKIP</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption to be performed using the Temporal Key Integrity Protocol (TKIP) standard with a per-packet key length of 128 bits.</td>
  </tr>
  <tr>
    <td>AES-CCMP/TKIP</td>
    <td>"3"</td>
	<td>This indicates that the network allows the use of either the AES-CCMP standard or the TKIP encryption standard and the proper encryption type to use can be automatically determined by negotiation with the Wi-Fi infrastructure.</td>
  </tr>
</table></div>

If WEP is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WEP
* Parm name: EncryptionWEP
* <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>WEP-40</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption to be performed using the Wireless Equivalency Privacy (WEP) standard with a key size of 40 bits.</td>
  </tr>
  <tr>
    <td>WEP-104</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption to be performed using the Wireless Equivalency Privacy (WEP) standard with a key size of 104 bits.</td>
  </tr>
</table></div> 

#### Encryption Key Details	

##### **Key Type**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Personal"

Pivotal parm: Yes

Description: Specify the type of encryption key to be used by the network

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Hex Key</td>
    <td>"HexKey" </td>
	<td></td>
  </tr>
  <tr>
    <td>Passphrase</td>
    <td>"Passphrase"</td>
	<td></td>
  </tr>
</table>
</div>

##### **Protect Key**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Personal"

Pivotal parm: Yes

Description: Enables encryption of the Key

##### **Passphrase**
Pivotal parm: No

Description: Provide the passphrase used by the network. The parm name will change based on the WPA mode that is selected and if the Protect Key option was selected

If WEP is selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is false
* Parm name: PassphraseWEPClear
* Parm value input rules: 
	* String with a minimum of 4 characters and a maximum of 32 characters

If WEP is selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is true
* Parm name: PassphraseWEPEncrypted
* Parm value input rules: 
	* String with a minimum of 4 characters and a maximum of 32 characters
	
If WEP is not selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false
* Parm name: PassphraseWPAClear
* Parm value input rules: 
	* String with a minimum of 8 characters and a maximum of 63 characters

If WEP is not selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true
* Parm name: PassphraseWPAEncrypted
* Parm value input rules: 
	* String with a minimum of 8 characters and a maximum of 63 characters
	
##### **Hex Key**
Pivotal parm: No

If WEP is not selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false
* Parm name: HexKeyClear
* Description: Provide the hex key (64 hex chars) used by network
* Parm value input rules: 
	* String with a minimum of 64 characters and a maximum of 64 characters
	
If WEP is not selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true
* Parm name: HexKeyEncrypted
* Description: Provide the hex key (64 hex chars) used by network
* Parm value input rules: 
	* String with a minimum of 64 characters and a maximum of 64 characters
	
If WEP is selected, the encryption type is WEP-40, and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is false
* Parm name: HexKeyWep40Clear
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Parm value input rules: 
	* String with a minimum of 10 characters and a maximum of 10 characters
	
If WEP is selected, the encryption type is WEP-40, and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is true
* Parm name: HexKeyWep40Encrypted
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Parm value input rules: 
	* String with a minimum of 10 characters and a maximum of 10 characters
	
If WEP is selected, the encryption type is WEP-104, and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is false
* Parm name: HexKeyWep104Clear
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Parm value input rules: 
	* String with a minimum of 26 characters and a maximum of 26 characters

If WEP is selected, the encryption type is WEP-104, and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is true
* Parm name: HexKeyWep104Encrypted
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Parm value input rules: 
	* String with a minimum of 26 characters and a maximum of 26 characters
	
##### **WEP Key Index**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the WPA Mode is "WEP"

Pivotal parm: No

Parm name: WepKeyIndex

Description: Provide the index (1-4) of the WEP key used by the network. Only `wep[0]` is a valid option

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>wep[0]</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>wep[1]</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>wep[2]</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>wep[3]</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>

#### Use DHCP
Pivotal parm: Yes

Description: When selected DHCP will be used. When not selected, Static IP address is used and the following IP address settings should be provided:

##### **Static IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpAddress

Description: Provide the static IP address to be assigned to the device on this network

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **Gateway 1 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpGateway1

Description: Provide the IP address of the first gateway to the network 

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **Subnet Mask**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpMask

Description: Provide the subnet mask to be used on the network

Parm value input rules: 

* Must be a valid IPV4 subnet mask, example: 255.255.255.0

##### **DNS Server 1 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpDns1

Description: Provide the IP address of the first DNS server 

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **DNS Server 2 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpDns2

Description: Provide the IP address of the second DNS server 

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

#### Use Proxy
Pivotal parm: Yes

Description: When selected, a Proxy is used for network connections. The following proxy settings should be supplied:

##### **Proxy Host Name**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: ProxyHostName

Description: Provide the host name of the proxy server

Parm value input rules: 

* String with a minimum of 1 characters and a maximum of 64 characters

##### **Proxy Port**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: ProxyPort

Description: Provide the port number of the proxy server

##### **Bypass Proxy**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: BypassProxy

Description: Provide addresses for which the proxy server should be bypassed

Parm value input rules: 

* String with a maximum of 256 characters

##Example XML

### Managing Certificates Related to Wi-Fi Networks

#### Initialize the Android KeyStore

>Note: This must be done for a new device before you can install certificates.

Without a password

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
		</characteristic>
	</wap-provisioningdoc>

With a password

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
			<characteristic type="keystore-details">
				<parm name="KeystorePassword" value="password"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Remove a Certificate
	
	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="2"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName1"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a CA certificate (.PEM file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="5"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileCA" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate (.PEM file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="6"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.PFX file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="8"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.P12 file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.PKCS12 file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="10"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
### Country Selection

#### Selecting a Country

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="1"/>
			<characteristic type="Regulatory">
				<parm name="Country" value="US"/>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Using the Auto Option

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="1"/>
			<characteristic type="Regulatory">
				<parm name="Country" value="AUTO"/>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>
	
### Band Selection

#### Set 2.4 GHz

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="2.4GHz"/>
				<characteristic type="ChannelSelection">
					<parm name="2.4GHzChannels" value="1"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Set 5.0 GHz

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="5.0GHz"/>
				<characteristic type="ChannelSelection">
					<parm name="5.0GHzChannels" value="36"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Set Auto (both 2.4 and 5.0 GHz)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="Auto"/>
				<characteristic type="ChannelSelection">
					<parm name="2.4GHzChannels" value="1"/>
					<parm name="5.0GHzChannels" value="36"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

	
### Add Wi-Fi Network

#### Adding an Open Network

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="0"/>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="1"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

	
#### Adding a Personal Network with WPA and TKIP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="1"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWPA" value="1"/>
					</characteristic>
				</characteristic>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="2"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA/WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="3"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WEP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="4"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWEP" value="1"/>
					</characteristic>
				</characteristic>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWEPClear" value="KsdU6X3u"/>
					<parm name="WepKeyIndex" value="1"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
#### Adding an Enterprise Network with WPA

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="1"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="2"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WPA/WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="3"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WEP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="4"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWEP" value="1"/>
					</characteristic>
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=Wi-Fi&os=JB&embed=true"></iframe> 