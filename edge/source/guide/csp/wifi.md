# Wi-Fi

## About Wi-Fi

### Overview

The Wi-Fi feature allows you to manage your devices Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.

>Note: In order for settings to be applied, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

### Main Functionality

* Enable Wi-Fi
* Disable Wi-Fi
* Set Wi-Fi to Never Sleep
* Set Wi-Fi to Never Sleep When Plugged In
* Set Wi-Fi to Always Sleep
* Use Network Notifications
* Do Not User Network Notifications
* Enable Auto Country Selection
* Manually Select country
* Set the RF Band
* Enable Auto RF Band Selection
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
* Enable PreAuth
* Disable PreAuth
* Set Power Saving Mode to Fast Power Savings
* Set Power Savings Mode to Always Active
* Set Power Savings Mode to Maximum Power Savings
* Enable Advanced Logging
* Disable Advanced Logging
* Enable FIPS Compliance
* Disable FIPS Compliance
* Enable Restricted WLAN Settings UI
* Disable Restricted WLAN Settings UI
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

 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	</tr>
  <tr>
    <td style="width:50%">Android</td>
    <td style="width:50%">"Android"</td>
  </tr>
</table>
	
### Wi-Fi Enable 
Pivotal parm: No

Parm name: WiFiAction

Description: Enable/Disable Wi-Fi Radio.

>Note: In order for other settings to be applied, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Enable</td>
    <td style="width:33%">"enable"</td>
	<td style="width:33%">Enables the Wi-Fi radio</td>
  </tr>
  <tr>
    <td style="width:33%">Disable</td>
    <td style="width:33%">"disable"</td>
	<td style="width:33%">Disables the Wi-Fi radio</td>
  </tr>
</table>
</div>	

### Sleep Policy
Pivotal parm: No

Parm name: WifiSleepPolicy

Description: Specifies the state of the Wi-Fi radio when the device suspends.	

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Never Sleep</td>
    <td style="width:33%">"AlwaysOn"</td>
	<td style="width:33%">Leave Wi-Fi radio powered</td>
  </tr>
  <tr>
    <td style="width:33%">Never Sleep When Plugged</td>
    <td style="width:33%">"PluggedIn"</td>
	<td style="width:33%">Leave Wi-Fi radio powered while it is connected to A/C power and power down the Wi-Fi radio while it is on battery</td>
  </tr>
  <tr>
    <td style="width:33%">Always Sleep</td>
    <td style="width:33%">"NeverOn"</td>
	<td style="width:33%">Power down the Wi-Fi radio.</td>
  </tr>
</table>
</div>

### Network Notification
Pivotal parm: No

Parm name: NetworkNotification

Description: Specifies whether or not to notify the user when a open network comes in range.
 <div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Use network notification</td>
    <td style="width:33%">"true"</td>
	<td style="width:33%">Notify the user when a network comes in range</td>
  </tr>
  <tr>
    <td style="width:33%">Do not use network notification</td>
    <td style="width:33%">"false"</td>
	<td style="width:33%">Don't notify the user when a network comes in range</td>
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

Description: Country to use for Wi-Fi regulatory setting. 802.11d will not be enabled if you select 'U.S.A' in the Country drop-down. When you choose 'AUTO' in the drop-down, 802.11d will be enabled. 

 <div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
	</tr>
  <tr>
    <td style="width:50%">AUTO (Use 802.11d)</td>
    <td style="width:50%">"AUTO"</td>
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

Description: Specifies the 802.11 band(s) to use.

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Unchanged</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">2.4GHZ</td>
    <td style="width:33%">"2.4GHz"</td>
	<td style="width:33%">enable 2.4GHz band</td>
  </tr>
  <tr>
    <td style="width:33%">5.0GHZ</td>
    <td style="width:33%">"5.0GHz"</td>
	<td style="width:33%">enable 5.0GHz band</td>
  </tr>
  <tr>
    <td style="width:33%">Auto</td>
    <td style="width:33%">"Auto"</td>
	<td style="width:33%">Enable both bands and connect automatically to either</td>
  </tr>
</table>
</div>

#### 2.4GHz Channels 
Settable if: The RF Band that is selected is either 2.4GHZ or Auto

Pivotal parm: No

Parm name: 2.4GHzChannels

Description: Enable the specified channels in the 2.4GHz band. 

Parm value input rules: 

* String containing a set of valid channels.
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10

#### 5.0GHz Channels 
Settable if: The RF Band that is selected is either 5.0GHZ or Auto

Pivotal parm: No

Parm name: 5.0GHzChannels

Description: Enable the specified channels in the 5.0GHz band.

Parm value input rules: 

* String containing a set of valid channels. 
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 36-60

### Specify Diagnostic Options
Pivotal parm: Yes

Description: Specify whether Diagnostic Options will be used. When enabled, Fusion Advanced Logging can also be enabled. 

#### Fusion Advanced Logging
Settable if: The "Specify Diagnostic Options" box is checked

Pivotal parm: No

Parm name: FusionAdvancedLogging

Description: Specify whether Fusion Advanced Logging will be used

### Specify Advanced Options
Pivotal parm: Yes

Description: Specify whether Advanced Options will be used. When enabled, the following options will be available to set.

>Note: The following steps must be followed in order to use the Advanced Options under the WiFi feature:
>
>* PMKID must be enabled in order to enable PreAuth (PreAuth =1 and PMKID =1)
>* FT must be enabled in order to enable FTRIC (FT=1 and FTRIC =1)
>* OKC must be disabled (OKC =0 and PMKID =1) in order to use PMKID caching
>
> Important Note: The default "Fast Power Savings" value must be used for the "Power Save" parameter under the Advanced Options. Using the "Do Not Change" value will result in failure.

#### Hotspot SSID
Pivotal parm: No
 
Parm name: HotspotSSID

Description: Provide the SSID to use for Hotspot mode

Parm value input rules

* String with a minimum size of 1 character and a maximum size of 32 characters

#### Hotspot AP Channel
Pivotal parm: No
 
Parm name: HotspotAPChannel

Description: Provide the AP Channel to use for Hotspot mode

Parm value input rules

* Integer value from (and including) 1 to 11

#### Hotspot Security Mode
Pivotal parm: Yes

Description: Specify the Security Mode to use for Hotspot mode

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	</tr>
  <tr>
    <td style="width:50%">Open</td>
    <td style="width:50%">"Open"</td>
  </tr>
  <tr>
    <td style="width:50%">WPA2/PSK</td>
    <td style="width:50%">"WPA2/PSK"</td>
  </tr>
</table>
</div>

#### Protect Hotspot Passphrase
Settable if: Hotspot security mode is "WPA2/PSK"

Pivotal parm: Yes

Description: Specify whether the Passphrase to use for Hotspot mode should be protected

#### Hotspot Passphrase
Pivotal parm: No

Description: The passphrase to use for Hotspot mode. The parm name will change depending on the value of Protect Hotspot Passphrase

If Protect Hotspot Passphrase is false:

* Settable if: Hotspot security mode is 1 *AND* Protect Hotspot Passphrase is false
* Parm name: HotspotPassphraseClear
* Parm value input rules
	* String with a minimum size of 1 character and a maximum size of 32 characters

If Protect Hotspot Passphrase is true:

* Settable if: Hotspot security mode is 1 *AND* Protect Hotspot Passphrase is true
* Parm name: HotspotPassphraseEncrypted
* Parm value input rules
	* String with a minimum size of 1 character and a maximum size of 32 characters

#### Auto Time Config
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: AutoTimeConfig

Description: Enable AutoTimeConfig feature. Updates device timestamp based on Symbol IE in 802.11 beacon. This is a Symbol specific feature.

#### Profile Roaming
Settable if: The "Specify Advanced Options" box is checked *AND* the Target OS is not Android

Pivotal parm: No

Parm name: ProfileRoaming

Description: Specify whether to enable roaming between Wi-Fi Profiles

#### HFSR
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: HFSR

Description: Hyper Fast Secure Roam (HFSR) is a Symbol's fast roam algorithm. 

#### CCKM 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: CCKM

Description: This is to enable / disable CCX roam algorithm (CCKM).

#### FT 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FT

Description: This is to enable / disable Fast Transition roam algorithm (802.11r).

#### FTRIC 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FTRIC

Description: This is to enable / disable Fast Transition Resource Request (802.11r).

#### OKC
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: OKC

Description: This is to enable / disable Opportunistic Key Caching (OKC).

#### PMKID 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PMKID

Description: This is to enable / disable PMKID Caching. We need to disable OKC and enable PMKID for PMKID caching to work.

#### Pre-Auth
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PreAuth

Description: This is to enable / disable 802.1x Pre-Authentication.

#### Power Save Mode 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PowerSave

Description: This option is to configure different Power Save Modes of Radio.

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do not change</td>
	<td style="width:33%">""</td>
    <td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Always Active</td>
    <td style="width:33%">"Active" </td>
	<td style="width:33%">This will keep the radio in active</td>
  </tr>
  <tr>
    <td style="width:33%">WMM-PS</td>
    <td style="width:33%">"WMM-PS"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Null Data Power Save</td>
    <td style="width:33%">"NDP"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">PS-POLL</td>
    <td style="width:33%">"PS-POLL "</td>
	<td style="width:33%"></td>
  </tr>
</table>
</div>

#### Advanced Logging
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Parm name: AdvancedLogging

Description: Start or Stop advanced Wi-Fi logging.

#### FIPS 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FIPS

Description: We can use this option to enable or disable FIPS data in motion supported in WLAN. WLAN FIPS 140-2, level 1 compliance.

#### Enable Restricted Settings UI
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Parm name: EnableRestrictedSettingsUI

Description: When enabled the Wi-Fi settings will be in Read-Only mode.

<div style="max-height:300px;overflow:auto;">
<table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">"0"</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Disable Restricted WLAN Settings UI</td>
    <td style="width:33%">"1"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Enable Restricted WLAN Settings UI</td>
    <td style="width:33%">"2"</td>
	<td style="width:33%"></td>
  </tr>
</table>
</div>

#### Radio Resource Measurement(802.11K)
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: 802.11K

Description: Specify whether to enable Radio Resource Measurement

#### Management Frame Protection Mode(802.11K)
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: 802.11w

Description: Specify the Management Frame Protection Mode

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">No MFP</td>
    <td style="width:33%">"Disable"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Capable</td>
    <td style="width:33%">"Capable"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Mandatory</td>
    <td style="width:33%">"Mandatory" </td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
</table>
</div>

#### Select your band preference
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: BandPreference

Description: Specify the band preference

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">No preference</td>
    <td style="width:33%">"Band Preference disabled"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Prefer 2.4GHz</td>
    <td style="width:33%">"2.4GHz" </td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Prefer 5.0GHz </td>
    <td style="width:33%">"5.0GHz "</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Do not change</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
</table>	
</div>
	
#### Enable FTOverTheDS
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FTOverTheDS

Description: Specify whether to enable FTOverTheDS

#### Enable AggregatedFT
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: AggregatedFT

Description: Specify whether to enable AggregatedFT

#### Enable ScanAssist
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: ScanAssist

Description Specify whether to enable ScanAssist

#### Enable Coverage Hole Detection
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: CHD

Description: Specify whether to enable Coverage Hole Detection

#### Enable Sub-Net Roam
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: SubNetRoam

Description: Specify whether to enable Sub-Net Roam

#### WANCountry
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: WANCountry

Description: Specify whether to enable WanCountry

### Network Action
Pivotal parm: Yes

Description: Used to manage the network profiles on the device.

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Do Nothing</td>
    <td style="width:33%">""</td>
	<td style="width:33%">Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td style="width:33%">Add a New Network</td>
    <td style="width:33%">"Add"</td>
	<td style="width:33%">Will add a new profile with the provided profile settings. For the options that will be presented when choosing to add a new network, please see the "Add a New Network Options" section below</td>
  </tr>
  <tr>
    <td style="width:33%">Remove an Existing Network</td>
    <td style="width:33%">"Remove"</td>
	<td style="width:33%">Will remove the a network profile based on the SSID</td>
  </tr>
  <tr>
    <td style="width:33%">Connect to an Existing Network</td>
    <td style="width:33%">"Connect"</td>
	<td style="width:33%">Will initiate a connection to the network based on the SSID</td>
  </tr>
    <tr>
    <td style="width:33%">Disconnect from an Existing Network </td>
    <td style="width:33%">"Disconnect"</td>
	<td style="width:33%">Will disconnect from a network based on the SSID</td>
  </tr>
  <tr>
    <td style="width:33%">Enable an Existing Network</td>
    <td style="width:33%">"Enable"</td>
	<td style="width:33%">Will enable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td style="width:33%">Disable an Existing Network</td>
    <td style="width:33%">"Disable"</td>
	<td style="width:33%">Will disable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td style="width:33%">Disable All Existing Networks</td>
    <td style="width:33%">"DisableAll"</td>
	<td style="width:33%">Will disable all network profiles</td>
  </tr>
    <tr>
    <td style="width:33%">Remove All Existing Networks</td>
    <td style="width:33%">"RemoveAll"</td>
	<td style="width:33%">Will remove all network profiles</td>
  </tr>
</table>
</div>

### Add a New Network Options
Parameters used for adding a network. SSID is used to identify the network profile to be acted on when choosing an '... an Existing Network' network action above.

#### SSID
Settable if: The Network Action is any option other than "Do Nothing", "Disable All Existing Networks", or "Remove All Existing Networks"

Pivotal parm: No

Parm name: SSID

Description: the SSID name of the network

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 32 characters

#### Security Mode 
Settable if: The Network Action is "Add a New Network"

Pivotal parm: Yes

Description: Specify the security mode used by the network

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Open</td>
    <td style="width:33%">"Open"</td>
	<td style="width:33%">Open network</td>
  </tr>
  <tr>
    <td style="width:33%">Personal</td>
    <td style="width:33%">"Personal"</td>
	<td style="width:33%">PSK or WEP</td>
  </tr>
  <tr>
    <td style="width:33%">Enterprise</td>
    <td style="width:33%">"Enterprise"</td>
	<td style="width:33%">802.1x EAP profiles</td>
  </tr>
</table>
</div>

#### WPA Mode
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise"

Pivotal parm: Yes

Description: WPA mode used by the network.

>Note: WEP is not supported with a Enterprise Security Mode. It is only supported using Personal Security Mode.

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">WPA</td>
    <td style="width:33%">"WPA"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">WPA2</td>
    <td style="width:33%">"WPA2"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">WPA/WPA2</td>
    <td style="width:33%">"WPA/WPA2"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">WEP</td>
    <td style="width:33%">"WEP"</td>
	<td style="width:33%"></td>
  </tr>
</table>
</div>

#### Authentication
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Parm name: Authentication

Description: Authentication mode used by the network. used with Enterprise Security Mode. 

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">EAP-TLS</td>
    <td style="width:33%">"1"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">EAP-FAST-GTC</td>
    <td style="width:33%">"13"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">EAP-FAST-MSCHAPV2</td>
    <td style="width:33%">"11"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">EAP-TTLS-PAP</td>
    <td style="width:33%">"8"</td>
	<td style="width:33%"></td>
  </tr>
   <tr>
    <td style="width:33%">EAP-TTLS-MSCHAP</td>
    <td style="width:33%">"6"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">EAP-TTLS-MSCHAPV2</td>
    <td style="width:33%">"7"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">LEAP</td>
    <td style="width:33%">"4"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">PEAP-MSCHAPV2</td>
    <td style="width:33%">"2"</td>
	<td style="width:33%"></td>
  </tr> 
  <tr>
    <td style="width:33%">PEAP-GTC</td>
    <td style="width:33%">"10"</td>
	<td style="width:33%"></td>
  </tr>
</table>
</div>

#### Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

##### **Use User Profile**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Target OS is not Android

Pivotal parm: Yes

Description: the name that should be used to join the network.


##### **Enable Credentials Prompting**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Target OS is not Android *AND* Use User Profile is true 

Pivotal parm: No

Parm name: EnableCredPrompt

Description: Specify whether to Prompt for User Credentials

##### **Credentials Timeout**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Target OS is not Android *AND* Use User Profile is true 

Pivotal parm: No

Parm name: CredTimeout

Description: Provide the timeout when Prompting for User Credentials

##### **User Profile Mode**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Target OS is not Android *AND* Use User Profile is true 

Pivotal parm: No

Parm name: UserProfMode

Description: Provide the User Profile Mode

##### **Encryption Type**
Pivotal parm: No

Description: Type of encryption used by the network. The values in this drop-down will change based on the WPA Mode selected. 

If WPA is selected: 

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA
* Parm name: EncryptionWPA
*  <div style="max-height:300px;overflow:auto;"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Default</td>
    <td style="width:33%">"Default" </td>
	<td style="width:33%">This will not change the encryption type that is currently used on the device</td>
  </tr>
  <tr>
    <td style="width:33%">TKIP</td>
    <td style="width:33%">"TKIP" </td>
	<td style="width:33%"></td>
  </tr>
</table></div>

If WPA2 is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA2 or WPA/WPA2
* Parm name: EncryptionWPA2
*  <div style="max-height:300px;overflow:auto;"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Default</td>
    <td style="width:33%">"Default"</td>
	<td style="width:33%">This will not change the encryption type that is currently used on the device</td>
  </tr>
  <tr>
    <td style="width:33%">AES-CCMP</td>
    <td style="width:33%">"AES-CCMP"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">TKIP</td>
    <td style="width:33%">"TKIP"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">AES-CCMP/TKIP</td>
    <td style="width:33%">"AES-CCMP/TKIP"</td>
	<td style="width:33%"></td>
  </tr>
</table></div>

If WEP is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WEP
* Parm name: EncryptionWEP
* <div style="max-height:300px;overflow:auto;"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">WEP-40</td>
    <td style="width:33%">"WEP-40"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">WEP-104</td>
    <td style="width:33%">"WEP-104"</td>
	<td style="width:33%"></td>
  </tr>
</table></div> 

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

#### Encryption Key Details	

##### **Key Type**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Personal"

Pivotal parm: Yes

Description: Specify the type of encryption key to be used by the network

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">Hex Key</td>
    <td style="width:33%">"HexKey" </td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">Passphrase</td>
    <td style="width:33%">"Passphrase"</td>
	<td style="width:33%"></td>
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

<div style="max-height:300px;overflow:auto;">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td style="width:33%">wep[0]</td>
    <td style="width:33%">"wep[0]"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">wep[1]</td>
    <td style="width:33%">"wep[1]"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">wep[2]</td>
    <td style="width:33%">"wep[2]"</td>
	<td style="width:33%"></td>
  </tr>
  <tr>
    <td style="width:33%">wep[3]</td>
    <td style="width:33%">"wep[3]"</td>
	<td style="width:33%"></td>
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

##### **Gateway 2 IP Address**
Settable if: The Target OS is not Android *AND* the Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpGateway2

Description: Provide the IP address of the second gateway to the network 

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

### Add Wi-Fi Network

    :::XML
    <wap-provisioningdoc>
        <characteristic type="Wi-Fi" version="2.7" >
            <parm name="UseRegulatory" value="0"/>
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

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=Wi-Fi&os=JB&embed=true"></iframe> 