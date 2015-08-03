# BatteryMgr

## About BatteryMgr

### Overview

The BatteryMgr Feature Type is used to configure the battery decommission thresholds, which are used by battery management software, along with other battery parameters, to determine if the battery has been decommissioned. 

The supported thresholds are:

* Battery Usage Decommission Threshold 
	* A battery is considered to be decommissioned if the battery usage number is greater than or equal to Battery Usage Decommission Threshold. 
	* Battery Usage Decommission Threshold is applicable for smart batteries, TC50 batteries, and TC75 batteries.
	* **Note:** Battery usage number is Aggregatecharge/RatedCapacity of the battery.
* Percent Decommission Threshold
	* A battery is considered to be decommissioned if the Health percentage of the battery is less than or equal to Percent Decommission Threshold. 
	* Percent Decommission Threshold is applicable for gifted batteries. 
	* **Note:** Health percentage is the ratio of "present_capacity" to "design_capacity" at a discharge rate of  "design_capacity".

The values that are set for the threshold values are persisted across reboots by the use of shared preferences which will save the configuration data. The configured threshold values will also be persisted across an enterprise reset.

An error will be reported of the OS does not support the battery decommission feature, which will be determined by whether or not the syfs files, either batteryusage_decommission_threshold  or percent_decommission_threshold, are present on the device.

### Main Functionality
 
* Set the Battery Usage Decommissioned Threshold
* Set the Battery Percentage Decommissioned Threshold

##Parameter Notes
###Battery Usage Decommissioned Threshold
Pivotal parm: No

Parm name: SetBatteryUsageDecommissionThreshold

Description: 

> This parm allows you to set the threshold value of the Battery Usage Number on devices with a smart battery, a TC55 battery, or a TC70 battery. The default value for the threshold, which is used by the battery driver, is 400. The battery driver on the device would need to support the decommission feature and expose the batteryusage_decommission_threshold sysfs file in the /sys/power/batt_extras/ path. 

Parm value input rules: 

* The input value must be an integer between 0 and 65535
* Setting this parm to 0 indicates no change or not applicable

###Battery Percentage Decommissioned Threshold
Pivotal parm: No

Parm name: SetPercentDecommissionThreshold

Description: 

>This parm allows you to set the threshold value of the Battery Health Percentage on devices with a gifted battery. The default value for the threshold, which is used by the battery driver, is 75. The battery driver on the device would need to support the decommission feature and expose the percent_decommission_threshold sysfs file in the /sys/power/batt_extras/ path. 

Parm value input rules: 

* The input value must be an integer between 0 and 100
* Setting this parm to 0 indicates no change or not applicable

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=BatteryMgr&os=JB&embed=true"></iframe> 