## Specify Advanced Options
Pivotal parm: Yes

Description: Specify whether Advanced Options will be used. These options can be used to alter the low-level behavior of the Wi-Fi implementation. In most cases, these options should not be used except under the direction of Zebra support staff. When turned on, the following options will be available to set.

>Note: The following steps must be followed in order to use the Advanced Options under the WiFi feature:
>
>* PMKID must be turned on in order to enable PreAuth (PreAuth =1 and PMKID =1)
>* FT must be turned on in order to enable FTRIC (FT=1 and FTRIC =1)
>* OKC must be turned off (OKC =0 and PMKID =1) in order to use PMKID caching
>
> Important Note: The default "Fast Power Savings" value must be used for the "Power Save" parameter under the Advanced Options. Using the "Do Not Change" value will result in failure.

### Auto Time Config
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: AutoTimeConfig

Description: Enable AutoTimeConfig feature. Updates device timestamp based on Symbol IE in 802.11 beacon. This is a Symbol specific feature.

### HFSR
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: HFSR

Description: Hyper Fast Secure Roam (HFSR) is a Symbol's fast roam algorithm. 

### CCKM 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: CCKM

Description: This is to enable / disable CCX roam algorithm (CCKM).

### FT 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FT

Description: This is to enable / disable Fast Transition roam algorithm (802.11r).

### FTRIC 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FTRIC

Description: This is to enable / disable Fast Transition Resource Request (802.11r).

### OKC
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: OKC

Description: This is to enable / disable Opportunistic Key Caching (OKC).

### PMKID 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PMKID

Description: This is to enable / disable PMKID Caching. We need to disable OKC and enable PMKID for PMKID caching to work.

### Pre-Auth
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PreAuth

Description: This is to enable / disable 802.1x Pre-Authentication.

### Power Save Mode 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: PowerSave

Description: This option is to configure different Power Save Modes of Radio.

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
    <td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Always Active</td>
    <td>"1" </td>
	<td>This will keep the radio in active</td>
  </tr>
  <tr>
    <td>WMM-PS</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>Null Data Power Save</td>
    <td>"5"</td>
	<td></td>
  </tr>
  <tr>
    <td>PS-POLL</td>
    <td>"6"</td>
	<td></td>
  </tr>
</table>
</div>

### Advanced Logging
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Parm name: AdvancedLogging

Description: Start or Stop advanced Wi-Fi logging.

### FIPS 
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FIPS

Description: We can use this option to enable or disable FIPS data in motion supported in WLAN. WLAN FIPS 140-2, level 1 compliance.

### Enable Restricted Settings UI
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No
 
Parm name: EnableRestrictedSettingsUI

Description: When enabled the Wi-Fi settings will be in Read-Only mode.

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
	<td>Will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Disable Restricted WLAN Settings UI</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Enable Restricted WLAN Settings UI</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>

### Radio Resource Measurement(802.11K)
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: 802.11K

Description: Specify whether to enable Radio Resource Measurement

### Management Frame Protection Mode(802.11w)
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: 802.11w

Description: Specify the Management Frame Protection Mode

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No MFP</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Capable</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Mandatory</td>
    <td>"2" </td>
	<td></td>
  </tr>
  <tr>
    <td>Do not change</td>
    <td>"3"</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
</table>
</div>

### Select your band preference
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: BandPreference

Description: Specify the band preference

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No preference</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Prefer 2.4GHz</td>
    <td>"1" </td>
	<td></td>
  </tr>
  <tr>
    <td>Prefer 5.0GHz </td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Do not change</td>
    <td>"3"</td>
	<td>Will not change what the device is currently configured as</td>
  </tr>
</table>	
</div>
	
### Enable FTOverTheDS
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: FTOverTheDS

Description: Specify whether to enable FTOverTheDS

### Enable AggregatedFT
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: AggregatedFT

Description: Specify whether to enable AggregatedFT

### Enable ScanAssist
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: ScanAssist

Description Specify whether to enable ScanAssist

### Enable Coverage Hole Detection
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: CHD

Description: Specify whether to enable Coverage Hole Detection

### Enable Sub-Net Roam
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: SubNetRoam

Description: Specify whether to enable Sub-Net Roam

### WANCountry
Settable if: The "Specify Advanced Options" box is checked

Pivotal parm: No

Parm name: WANCountry

Description: Specify whether to enable WanCountry
