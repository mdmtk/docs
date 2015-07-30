# AnalyticsMgr

## About AnalyticsMgr

### Overview

The AnalyticsMgr feature type allows you to configure what data about a device should be collected and where the data should be collected. It creates configurations that are required by the Data Analytics Client for Data Collection.

### Main Functionality

* Enable Analytics 
* Disable Analytics
* Send Analytics data to Cloud
* Send Analytics data to File
* Data sources
  * WWAN Performance	
  * WLAN Performance	
  * Battery and CPU Status	
  * System Information	
  * GPS Information
* Data Collection Levels
  * None	
  * Low	
  * Medium	
  * High   

##Parameter Notes
###Analytics Action
Pivotal parm: No

Parm name: AnalyticsAction

Description: 

>This will enable or disable the use of Data Collection on the device.

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>Enables the use of Data Collection</td>
  </tr>  
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>Disables the use of Data Collection</td>
  </tr>
</table>
</div>	

###Transport Method
Pivotal parm: No

Parm name: TransportMethod

Description: 

>This will set the Transport Method that will be used for data that is collected on the device, which can be set to cloud transport or file based transport. 

>If there is an error in this configuration, the Transport Method will default to cloud transport. Also, if this configuration is missing from the Request XML document, the XML will be returned with a "parm-error" for the TransportMethod parm.

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>Select Cloud Transport</td>
    <td>"1"</td>
	<td>Enables cloud transport on the device. A corresponding client capable of performing the transport should be available on the device.</td>
  </tr>
  <tr>
    <td>Select File Transport</td>
    <td>"2"</td>
	<td>Enables file based transport on the device.</td>
  </tr>
</table>
</div>	

###Group Action
Pivotal parm: Yes

Description: 

>This CSP supports optional support for the configuration of collection levels for a group of metrics.

>The setting of one or more groups would not affect any other group that is not selected. Also, previously selected settings would be retained on the device. For example, the Analytics CSP could be used to collect WWAN Performance metrics and the other groups could be set to "Do not change". Then at another time, the CSP could be used to collect WLAN Performance metrics and the other groups could be set to "Do not change". Both WWAN and WLAN Performance metrics would then be set to collect data.

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>Configure Levels for Multiple Groups</td>
    <td>"1"</td>
	<td>This will allow the configuration levels for multiple groups to be set. The levels that they can be set to are a predefined collection frequency and a pre-defined metrics set.</td>
  </tr>
</table>
</div>	

####WWAN Performance
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: WWANPerf

Description: 

>Select the Level of Collection for the WWAN Performance Group

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>The collection of all of the metrics in this group will be disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####WLAN Performance
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: WLANPerf

Description: 

>Select the Level of Collection for the WLAN Performance Group

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>The collection of all of the metrics in this group will be disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####Battery and CPU Status
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: SmartBattery

Description: 

>Select the Level of Collection for the Battery and CPU Status Group

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>The collection of all of the metrics in this group will be disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####System Information
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: SystemInfo

Description: 

>Select the Level of Collection for the System Information Group

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>The collection of all of the metrics in this group will be disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####GPS Information
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: GPSInfo

Description: 

>Select the Level of Collection for The GPS Information Group

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
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>The collection of all of the metrics in this group will be disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AnalyticsMgr&os=JB&embed=true"></iframe> 