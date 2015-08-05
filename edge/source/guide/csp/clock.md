# Clock

## About Clock

### Overview

The Clock Feature Type allows for a programmatic way to set the date and time. To account for time zone nuances, including daylight saving time, Clock expects the values for date and time to be entered as normalized values to UTC (GMT) time. In other words, the date and time set as parameters for Clock must be the UTC (GMT) equivalent of the local time being set. 

### Main Functionality

* Set the Time Zone
* Set the Date
* Set the Time
* Enable or disable Auto Time
* Set NTP Server Address
* Set Sync Interval

##Parameter Notes
### AutoTime
Pivotal parm: Yes

Description: 

>This parm will indicate whether or not to use the network-provided time on the device. This means that when AutoTime is turned on, an NTP server will be used to automatically set the time, date and timezone of the device and cannot be set on the device itself. The NTP server will be synced at the specified interval.

>**Note:** This parm is optional and is not required to be present in the Request XML document.

####NTPServer
Settable if: AutoTime is "true"

Pivotal parm: No

Parm name: NTPServer

Description: 

>This parm will specify the IP address of the NTP server which the device will use to automatically set the time, date and timezone.

>**Note:** This parm is optional and is not required to be present in the Request XML document.

####SyncInterval
Settable if: AutoTime is "true"

Pivotal parm: No

Parm name: SyncInterval

Description: 

> This parm will specify the interval in which the time on the device will be automatically synced with the NTP server.

>**Note:** This parm is optional and is not required to be present in the Request XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>30 minutes</td>
    <td>"00:30:00"</td>
	<td>This value will cause the device to sync the time with the NTP server every 30 minutes.</td>
  </tr>
  <tr>
    <td>60 minutes</td>
    <td>"00:60:00"</td>
	<td>This value will cause the device to sync the time with the NTP server every 60 minutes.</td>
  </tr>
  <tr>
    <td>6 hours</td>
    <td>"06:00:00"</td>
	<td>This value will cause the device to sync the time with the NTP server every 6 hours.</td>
  </tr>
  <tr>
    <td>24 hours</td>
    <td>"24:00:00"</td>
	<td>This value will cause the device to sync the time with the NTP server every 24 hours.</td>
  </tr>
</table>
</div>	

### TimeZone 
Settable if: AutoTime is "false"

Pivotal parm: No

Parm name: TimeZone

Description: 

>This parm is used to provide the timezone that the device should be set to. 

>**Note:** This parm is optional and is not required to be present in the Request XML document.

Parm value input rules: 

* String with a maximum of 255 characters
* The string must be the same as the Android supported values. For example, "GMT-5" or an Olson name, such as "America/New_York".

### Date 
Settable if: AutoTime is "false"

Pivotal parm: No

Parm name: Date

Description: 

>Provide the Date the device will be set to when the profile is enabled. It must have a length of 10 and must be in the format 'yyyy-MM-dd' (for example : 2014-12-31). It must be specified in UTC (Universal Time Coordinates) and not in LTC (Local Time Coordinates).

>**Note:** This parm is optional and is not required to be present in the Request XML document.

Parm value input rules: 

* String with a size of 10 characters
* The string must be in the format of "yyyy-MM-dd", such as "2013-12-31"

### Time
Settable if: AutoTime is "false"

Pivotal parm: Time

Parm name: Time

Description: 

>Provide the Time the device will be set to when the profile is enabled. It must have a length of 8 and must be in the format HH:mm:ss (for example : 23:59:59). It must be specified in UTC (Universal Time Coordinates) and not in LTC (Local Time Coordinates).

>**Note:** This parm is optional and is not required to be present in the Request XML document.

Parm value input rules: 

* String with a size of 8 characters
* The string must be in the format of "HH:mm:ss", such as "23:59:59"

### Usage Notes

####Example #1
We want to set the clock with the following settings:

* Set the date to 15-Jan-2010
* Set the time to 2:15PM local time
* Set the time zone to New York, New York, USA

15-Jan is eastern standard time in New York and not daylight saving time meaning it is GMT-04:00. So the parameters to use for Clock would be:

* TimeZone = New York, New York, USA
* Date = 15-Jan-2010 (2010-01-15)
* Time = 6:15PM (18:15:00)

####Example #2
We want to set the clock with the following settings:

* Set the date to 11-Jul-2014
* Set the time to 2:55AM local time
* Set the time zone to Bangalore, India

The time zone for Bangalore is GMT+05:30. So the parameters to use for Clock would be:

* TimeZone Bangalore, India
* Date = 10-Jul-2010 (2010-07-10)
* Time = 9:25PM (21:25:00)

Note the change of date as well as time. In this case, as the device converts this to local time, the date and time will both automatically be set properly when the offset is applied.


##Example XML
### Set the Time Zone, Date, and Time

    :::XML
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.2" >
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
			<parm name="Date" value="2015-07-09"/>
            <parm name="Time" value="10:25:33"/>
        </characteristic>
    </wap-provisioningdoc>
	
###Set the NTP Server Interval

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2" >
			<parm name="AutoTime" value="true"/>
			<characteristic type="AutoTimeDetails">
				<parm name="SyncInterval" value="00:30:00"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
###Set the NTP Server IP Address and Interval

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2" >
			<parm name="AutoTime" value="true"/>
			<characteristic type="AutoTimeDetails">
				<parm name="NTPServer" value="1.2.3.4"/>
				<parm name="SyncInterval" value="00:30:00"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=Clock&os=JB&embed=true"></iframe> 