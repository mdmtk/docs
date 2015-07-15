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

Parm options:

* Android 
	* Parm value: "Android"
	
### Wi-Fi Enable 
Parm name: WiFiAction

Pivotal parm: No

Description: Enable/Disable Wi-Fi Radio.

>Note: In order for other settings to be applied, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

Parm options:

* Do not change - will use whatever the device is currently configured as.
	* Parm value: ""
* Enable - enabled the Wi-Fi radio
	* Parm value: "enable"
* Disable - disabled the Wi-Fi radio
	* Parm value: "disable"

### Sleep Policy
Parm name: WifiSleepPolicy

Pivotal parm: No

Description: Specifies the state of the Wi-Fi radio when the device suspends.	

Parm options:

* Do not change - will use whatever the device is currently configured as.
	* Parm value: ""
* Never Sleep - Leave Wi-Fi radio powered.
	* Parm value: "AlwaysOn"
* Never Sleep When Plugged - Leave Wi-Fi radio powered while it is connected to A/C power and power down the Wi-Fi radio while it is on battery.
	* Parm value: "PluggedIn"
* Always Sleep - Power down the Wi-Fi radio.
	* Parm value: "NeverOn"

### Network Notification
Parm name: NetworkNotification

Pivotal parm: No

Description: Specifies whether or not to notify the user when a open network comes in range.

Parm options:

* Do not change - will use whatever the device is currently configured as.
	* Parm value: ""
* Use network notification - Notify the user when a network comes in range.
	* Parm value: "true"
* Do not use network notification - Don't notify the user when a network comes in range.
	* Parm value: "false"
	
### Country Selection Auto/Manual

Pivotal parm: Yes

Description: By leaving this option unchecked, the country may be determined by the router or access point setting. To manually select the country, you should select the checkbox. When doing this a country drop-down will appear.

#### Country
Parm name: Country

Pivotal parm: No

Settable if:

* The "Configure Country (Auto/Manual)" box is not checked

Description: Country to use for Wi-Fi regulatory setting. 802.11d will not be enabled if you select 'U.S.A' in the Country drop-down. When you choose 'AUTO' in the drop-down, 802.11d will be enabled. 

### RF Band
Pivotal parm: Yes

Description: Specifies the 802.11 band(s) to use.

Parm options: 

* Unchanged - will use whatever the device is currently configured as.
	* Parm value: ""
* 2.4GHZ - enable 2.4GHz band
	* Parm value: "2.4GHz"
* 5.0GHZ - enable 5.0GHz band
	* Parm value: "5.0GHz"
* Auto - enable both bands and connect automatically to either.
	* Parm value: "Auto"

#### 2.4GHz Channels 
Parm name: 2.4GHzChannels

Settable if:

* The RF Band that is selected is either 2.4GHZ or Auto

Pivotal parm: No

Description: Enable the specified channels in the 2.4GHz band. 

Input rules: 

* String containing a set of valid channels. 
* Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10

#### 5.0GHz Channels 
Parm name: 5.0GHzChannels

Settable if:

* The RF Band that is selected is either 5.0GHZ or Auto

Pivotal parm: No

Description: Enable the specified channels in the 5.0GHz band.

Input rules: 

* String containing a set of valid channels. 
* Comma separated and may contain a range specified with a dash '-'. Example: 36-60

### Specify Diagnostic Options

Pivotal parm: Yes

Description: Specify whether Diagnostic Options will be used. When enabled, Fusion Advanced Logging can also be enabled. 

#### Fusion Advanced Logging
Parm name: FusionAdvancedLogging

Settable if:

* The "Specify Diagnostic Options" box is checked

Pivotal parm: No

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

#### Auto Time Config
Parm name: AutoTimeConfig

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Enable AutoTimeConfig feature. Updates device timestamp based on Symbol IE in 802.11 beacon. This is a Symbol specific feature.

#### Profile Roaming
Parm name: ProfileRoaming

Settable if:

* The "Specify Advanced Options" box is checked *AND* the Target OS is not Android

Pivotal parm: No

Description: Specify whether to enable roaming between Wi-Fi Profiles

#### HFSR
Parm name: HFSR

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Hyper Fast Secure Roam (HFSR) is a Symbol's fast roam algorithm. 

#### CCKM 
Parm name: CCKM

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable CCX roam algorithm (CCKM).

#### FT 
Parm name: FT

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable Fast Transition roam algorithm (802.11r).

#### FTRIC 
Parm name: FTRIC

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable Fast Transition Resource Request (802.11r).

#### OKC
Parm name: OKC

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable Opportunistic Key Caching (OKC).

#### PMKID 
Parm name: PMKID

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable PMKID Caching. We need to disable OKC and enable PMKID for PMKID caching to work.

#### Pre-Auth
Parm name: PreAuth

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This is to enable / disable 802.1x Pre-Authentication.

#### Power Save Mode 
Parm name: PowerSave

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: This option is to configure different Power Save Modes of Radio.

Parm options: 

* Do not change - will use whatever the device is currently configured as.
	* Parm value: ""
* Always Active - This will keep the radio in active
	* Parm value: "Active" 
* WMM-PS
	* Parm value: "WMM-PS"
* Null Data Power Save
	* Parm value: "NDP"
* PS-POLL
	* Parm value: "PS-POLL "

#### Advanced Logging
Parm name: AdvancedLogging

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Description: Start or Stop advanced Wi-Fi logging.

#### FIPS 
Parm name: FIPS

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: We can use this option to enable or disable FIPS data in motion supported in WLAN. WLAN FIPS 140-2, level 1 compliance.

#### Enable Restricted Settings UI
Parm name: EnableRestrictedSettingsUI

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Description: When enabled the Wi-Fi settings will be in Read-Only mode.

Parm options: 

* Do not change
	* Parm value: "0"
* Disable Restricted WLAN Settings UI
	* Parm value: "1"
* Enable Restricted WLAN Settings UI
	* Parm value: "2"

#### Radio Resource Measurement(802.11K)
Parm name: 802.11K

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable Radio Resource Measurement

#### Management Frame Protection Mode(802.11K)
Parm name: 802.11w

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify the Management Frame Protection Mode

Parm options: 

* No MFP
	* Parm value: "Disable"
* Capable
	* Parm value: "Capable"
* Mandatory
	* Parm value: "Mandatory" 
* Do not change
	* Parm value: ""

#### Select your band preference
Parm name: BandPreference

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify the band preference

Parm options:

* No preference
	* Parm value: "Band Preference disabled"
* Prefer 2.4GHz
	* Parm value: "2.4GHz" 
* Prefer 5.0GHz 
	* Parm value: "5.0GHz "
* Do not change
	* Parm value: ""

#### Enable FTOverTheDS
Parm name: FTOverTheDS

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable FTOverTheDS

#### Enable AggregatedFT
Parm name: AggregatedFT

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable AggregatedFT

#### Enable ScanAssist
Parm name: ScanAssist

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description Specify whether to enable ScanAssist

#### Enable Coverage Hole Detection
Parm name: CHD

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable Coverage Hole Detection

#### Enable Sub-Net Roam
Parm name: SubNetRoam

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable Sub-Net Roam

#### WANCountry
Parm name: WANCountry

Settable if:

* The "Specify Advanced Options" box is checked

Pivotal parm: No

Description: Specify whether to enable WanCountry

### Network Action
Pivotal parm: Yes

Description: Used to manage the network profiles on the device.

Parm options:

* Do Nothing
	* Parm value: ""
* Add a New Network - will add a new profile with the provided profile settings. For the options that will be presented when choosing to add a new network, please see the "Add a New Network Options" section below
	* Parm value: "Add" 
* Remove an Existing Network - will remove the a network profile based on the SSID.
	* Parm value: "Remove"
* Connect to an Existing Network - will initiate a connection to the network based on the SSID.
	* Parm value: "Connect"
* Disconnect from an Existing Network - will disconnect from a network based on the SSID.
	* Parm value: "Disconnect"
* Enable an Existing Network - will enable a network profile based on the SSID.
	* Parm value: "Enable"
* Disable an Existing Network - will disable a network profile based on the SSID.
	* Parm value: "Disable" 
* Disable All Existing Networks - will disable all network profiles.
	* Parm value: "DisableAll"
* Remove All Existing Networks - will remove all network profiles.
	* Parm value: "RemoveAll"

### Add a New Network Options
Parameters used for adding a network. SSID is used to identify the network profile to be acted on when choosing an '... an Existing Network' network action above.

#### SSID
Parm name: SSID

Settable if:

* The Network Action is any option other than "Do Nothing", "Disable All Existing Networks", or "Remove All Existing Networks"

Pivotal parm: No

Description: the SSID name of the network

#### Security Mode 
Pivotal parm: Yes

Settable if:

* The Network Action is "Add a New Network"

Description: Specify the security mode used by the network

Parm options:

* Open - Open network
	* Parm value: "Open" 
* Personal - PSK or WEP
	* Parm value: "Personal" 
* Enterprise - 802.1x EAP profiles
	* Parm value: "Enterprise"

#### WPA Mode
Pivotal parm: Yes

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise"

Description: WPA mode used by the network.

>Note: WEP is not supported with a Enterprise Security Mode. It is only supported using Personal Security Mode.

Parm options: 

* WPA
	* Parm value: "WPA"
* WPA2
	* Parm value: "WPA2"
* WPA/WPA2
	* Parm value: "WPA/WPA2"
* WEP
	* Parm value: "WEP"

#### Authentication
Parm name: Authentication

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Description: Authentication mode used by the network. used with Enterprise Security Mode. 

Parm options:

* EAP-TLS
	* Parm value: "1"
* EAP-FAST-GTC
	* Parm value: "13"
* EAP-FAST-MSCHAPV2
	* Parm value: "11"
* EAP-TTLS-PAP
	* Parm value: "8"
* EAP-TTLS-MSCHAP
	* Parm value: "6" 
* EAP-TTLS-MSCHAPV2
	* Parm value: "7" 
* LEAP
	* Parm value: "4" 
* PEAP-MSCHAPV2
	* Parm value: "2"
* PEAP-GTC
	* Parm value: "10"

#### Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

##### **Use User Profile**
Pivotal parm: Yes

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Target OS is not Android

Description: the name that should be used to join the network.

##### **Encryption Type**
Pivotal parm: No


Description: Type of encryption used by the network. The values in this drop-down will change based on the WPA Mode selected. 

If WPA is selected: 

* Parm name: EncryptionWPA
* Parm options:
	* Default - this will not change the encryption type that is currently used on the device
		* Parm value: "Default" 
	* TKIP
		* Parm value: "TKIP" 
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA

If WPA2 is selected:

* Parm name: EncryptionWPA2
* Parm options:
	* Default - this will not change the encryption type that is currently used on the device
		* Parm value: "Default" 
	* AES-CCMP
		* Parm value: "AES-CCMP"
	* TKIP
		* Parm value: "TKIP" 
	* AES-CCMP/TKIP
		* Parm value: "AES-CCMP/TKIP"
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA2 or WPA/WPA2

If WEP is selected:

* Parm name: EncryptionWEP
* Parm options:
	* WEP-40
		* Parm value: "WEP-40"
	* WEP-104
		* Parm value: "WEP-104"
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WEP

##### **Identity**
Parm name: Identity

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Description: the name that should be used to join the network.

##### **Anonymous Identity** 
Parm name: AnonymousIdentity

Pivotal parm: No

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS" or "LEAP"

Description: Provide the name of the anonymous identity to be used to join the network.

##### **Protect Password**
Parm name: ProtectPassword

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS"

Pivotal parm: No

Description: when selected will encrypt the password.

##### **Password** 
Pivotal parm: No

Description: the password to be used to connect to the network. The parm name will change depending on the value of ProtectPassword.

If ProtectPassword is false:

* Parm name: PasswordClear
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is false

If ProtectPassword is true:

* Parm name: PasswordEncrypted
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is true

##### **Server Certificate Name (optional)**
Parm name: OptionalServerCertificate

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is "EAP-TLS", "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-FAST-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

Description: the name of the certificate alias that should be used to verify the server (Optional).

##### **Client Certificate Name (mandatory)**
Parm name: MandatoryClientCertificate

Settable if:

* The Network Action is "Add a New Network" and the Security Mode is "Enterprise" and the Authentication is "EAP-TLS"

Pivotal parm: No

Description: the name of the certificate alias that should be used to join the network (Mandatory).

##### **Client Certificate Name (optional)**
Parm name: OptionalClientCertificate

Settable if:

* The Network Action is "Add a New Network" and the Security Mode is "Enterprise" the Authentication is "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-TTLS-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

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
Pivotal parm: Yes

Settable if:

* The Network Action is "Add a New Network" and the Security Mode is "Personal"

Description: Specify the type of encryption key to be used by the network

Parm options: 

* Hex Key
	* Parm value: "HexKey" 
* Passphrase
	* Parm value: "Passphrase"

##### **Protect Key**
Pivotal parm: Yes

Settable if:

* The Network Action is "Add a New Network" and the Security Mode is "Personal"

Description: Enables encryption of the Key

##### **Passphrase**
Pivotal parm: No

Description: Provide the passphrase used by the network. The parm name will change based on the WPA mode that is selected and if the Protect Key option was selected

If WEP is selected and Protect Key is false:

* Parm name: PassphraseWEPClear
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is false

If WEP is selected and Protect Key is true:

* Parm name: PassphraseWEPEncrypted
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is true

If WEP is not selected and Protect Key is false:

* Parm name: PassphraseWPAClear
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false

If WEP is not selected and Protect Key is true:

* Parm name: PassphraseWPAEncrypted
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true

##### **Hex Key**
Pivotal parm: No

If WEP is not selected and Protect Key is false:

* Parm name: HexKeyClear
* Description: Provide the hex key (64 hex chars) used by network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false

If WEP is not selected and Protect Key is true:

* Parm name: HexKeyEncrypted
* Description: Provide the hex key (64 hex chars) used by network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true

If WEP is selected, the encryption type is WEP-40, and Protect Key is false:

* Parm name: HexKeyWep40Clear
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is false

If WEP is selected, the encryption type is WEP-40, and Protect Key is true:

* Parm name: HexKeyWep40Encrypted
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is true

If WEP is selected, the encryption type is WEP-104, and Protect Key is false:

* Parm name: HexKeyWep104Clear
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is false

If WEP is selected, the encryption type is WEP-104, and Protect Key is true:

* Parm name: HexKeyWep104Encrypted
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Settable if:
	* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is true

##### **WEP Key Index**
Parm name: WepKeyIndex

Settable if:

* The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the WPA Mode is "WEP"

Pivotal parm: No

Description: Provide the index (1-4) of the WEP key used by the network. Only `wep[0]` is a valid option

Parm options:

* wep[0]
	* Parm value: "wep[0]"
* wep[1]
	* Parm value: "wep[1]"
* wep[2]
	* Parm value: "wep[2]"
* wep[3]
	* Parm value: "wep[3]"

#### Use DHCP
Pivotal parm: Yes

Description: When selected DHCP will be used. When not selected, Static IP address is used and the following IP address settings should be provided:

##### **Static IP Address**
Parm name: IpAddress

Settable if:

* The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the static IP address to be assigned to the device on this network

##### **Gateway 1 IP Address**
Parm name: IpGateway1

Settable if:

* The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the IP address of the first gateway to the network 

##### **Gateway 2 IP Address**
Parm name: IpGateway2

Settable if:

* The Target OS is not Android *AND* the Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the IP address of the second gateway to the network 

##### **Subnet Mask**
Parm name: IpMask

Settable if:

* The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the subnet mask to be used on the network

##### **DNS Server 1 IP Address**
Parm name: IpDns1

Settable if:

* The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the IP address of the first DNS server 

##### **DNS Server 2 IP Address**
Parm name: IpDns2

Settable if:

* The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Description: Provide the IP address of the second DNS server 

#### Use Proxy
Pivotal parm: Yes

Description: When selected, a Proxy is used for network connections. The following proxy settings should be supplied:

##### **Proxy Host Name**
Parm name: ProxyHostName

Settable if:

* The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Description: Provide the host name of the proxy server

##### **Proxy Port**
Parm name: ProxyPort

Settable if:

* The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Description: Provide the port number of the proxy server

##### **Bypass Proxy**
Parm name: BypassProxy

Settable if:

* The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Description: Provide addresses for which the proxy server should be bypassed

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