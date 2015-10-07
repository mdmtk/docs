# ConditionMgr

## About ConditionMgr

### Overview
The ConditionMgr Feature Type is somewhat unique since, unlike most other Feature Types, the primary purpose of the ConditionMgr Feature Type is to fail, under just the right circumstances. Most Feature Types are used to accomplish some specific purpose and a failure generally indicates that the desired operation could not be performed. The ConditionMgr Feature Type allows you to check selected Conditions and cause a failure if they do or do not exist on the device.

To understand how to use the ConditionMgr Feature Type, it is important to understand how error handling works in the MXMS.  This is explained in more detail in the XmlMgr Feature Type.

The ConditionMgr Feature Type is designed to create failures. As such, it cannot deliver full value when it is used with the Default Error-Handling Mode since the failure would just be reported, but would not stop execution. To gain full value from the ConditionMgr Feature Type, the "Execute until error, then stop" Error Handling Mode should be used. A common use case for the ConditionMgr Feature Type is to check for some Condition at the start of a sequence of Features that indicates that those Features cannot or should not be executed, and hence to stop executing immediately and thereby avoid executing those Features. The ConditionMgr Feature Type results in a failure, the ConditionMgr Feature Type allows control over what failure is reported, thus assisting with troubleshooting the source of the failure.

The ConditionMgr Feature Type can handle situations where the Condition to be tested may not happen immediately, such as when a device user must perform some action.  To handle such cases, the Condition test can be repeated until the desired state has been reached or until a specified number of retries has been exhausted.  To handle cases where the desired Condition may require device user action, the ConditionMgr Feature Type allows collaboration with the StatusMgr Feature Type to provide a message to notify the device user of the need for action.

### Main Functionality
* Test for a Condition and return failure if the specified Condition is met or not met
	* Only currently supported Condition is "Have any valid IP Address"
* Specify a failure message to return for a failure
* Retry up to a specified number of tries, with a specified delay between tries
* Specify a waiting status message to display (via StatusMgr) while trying/retrying


##Parameter Notes
###Data Type
Pivotal parm: Yes

Description: 

>This parm allows you to select the Data Type of the Condition you want to Test.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Boolean</td>
    <td>"1"</td>
	<td>This value will set the Data Type of the Condition to test to be Boolean. A Boolean Data Type can represent only values of "true" or "false" and hence can be used directly as the Condition to Test.</td>
  </tr>
 <!-- <tr>
    <td>Integer</td>
    <td>"2"</td>
	<td>This value will set the Data Type of the Condition to test to be an integer.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"3"</td>
	<td>This value will set the Data Type of the Condition to test to be a string.</td>
  </tr>
  -->
</table>
</div>	

###Boolean Data Source
Settable if: The Data Type is "Boolean"

Pivotal parm: Yes

Description: 

>This parm allows you to select the Boolean Data Source that you want to Test for the Condition.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
<!--  <tr>
    <td>Boolean System Property</td>
    <td>"1"</td>
	<td></td>
  </tr> -->
  <tr>
    <td>Pre-defined System Boolean Value</td>
    <td>"2"</td>
	<td>This value will indicate that the Condition to Test will be selected from a pre-defined set of System Boolean Values. System Boolean Values have fixed rules by which the System determines the result and typically allow you to test key aspects that reflect the current state or condition of the device.</td>
  </tr>
<!--  <tr>
    <td>Boolean System Setting</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Custom Class Boolean Member</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>Pre-defined System Boolean Function</td>
    <td>"5"</td>
	<td></td>
  </tr> -->
</table>
</div>	

<!--
####Boolean System Property
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Boolean System Property"

Pivotal parm: No

Parm name: BooleanSystemProperty

Description: 

>Select the Boolean System Property to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>GMS Build</td>
    <td>"ro.config.bsp.gms"</td>
	<td></td>
  </tr>
  <tr>
    <td>FIPS Build</td>
    <td>"ro.config.bsp.fips"</td>
	<td></td>
  </tr>
  <tr>
    <td>BETA Build</td>
    <td>"ro.config.bsp.beta"</td>
	<td></td>
  </tr>
</table>
</div>	
-->

####Boolean System Value
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Pre-defined System Boolean Value"

Pivotal parm: No

Parm name: BooleanSystemValue

Description: 

>This parm allows you to select the Boolean System Value that you want to Test for the Condition.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
<!--  <tr>
    <td>Battery is Charging</td>
    <td>"1"</td>
	<td></td>
  </tr> -->
  <tr>
    <td>Have any valid IP Address</td>
    <td>"2"</td>
	<td><p>This value indicates that the Test to perform for the Condition should be based on whether the device currently has any valid IP Address assigned to it for any active network adapter.</p><p><b>Note:</b> Since a value of "true" is returned whenever a valid IP Address from any network adapter, this cannot be used to determine when an IP Address is acquired from a network adapter (e.g. Ethernet) while a device already has an IP address from another network adapter (e.g. Wi-Fi).</p><p>This value is typically used to determine that a connection has been successfully established and that subsequent Features, such as using the FileMgr Feature Type, can successfully be used since a viable network connection exists.  Since it might take a while for a newly established network connection to acquire a valid IP Address, it is often desirable to allow for some time before returning a failure.</p><p>A common use case for this value is when the ComponentMgr Feature Type has been used to Turn Ethernet On and we want to wait until a valid IP Address is acquired before proceeding.  Since establishing an Ethernet network connection may require the device user to insert the device into a cradle, a device user notification may be appropriate.  And if a valid IP Address is not acquired within a reasonably time, then a failure can be generated to stop execution of subsequent Features.</p></td>
  </tr>
<!--  <tr>
    <td>USB ADB is connected</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Wi-Fi is ON</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>Have a valid Wi-Fi IP Address</td>
    <td>"5"</td>
	<td></td>
  </tr>
  <tr>
    <td>Cellular is ON</td>
    <td>"6"</td>
	<td></td>
  </tr>
  <tr>
    <td>Have a valid Cellular IP Address</td>
    <td>"7"</td>
	<td></td>
  </tr>
  <tr>
    <td>Ethernet is ON</td>
    <td>"8"</td>
	<td></td>
  </tr>
  <tr>
    <td>Have a valid Ethernet IP Address</td>
    <td>"9"</td>
	<td></td>
  </tr>
  <tr>
    <td>Bluetooth is ON</td>
    <td>"10"</td>
	<td></td>
  </tr>
  <tr>
    <td>GPS is ON</td>
    <td>"11"</td>
	<td></td>
  </tr>
  <tr>
    <td>NFC is ON</td>
    <td>"12"</td>
	<td></td>
  </tr>
  <tr>
    <td>Accumulator 1</td>
    <td>"13"</td>
	<td></td>
  </tr>
  <tr>
    <td>Accumulator 2</td>
    <td>"14"</td>
	<td></td>
  </tr> -->
</table>
</div>	

<!--
####Boolean System Setting
Settable if:  The Data Type is "Boolean" *AND* the Boolean Data Source is "Boolean System Setting"

Pivotal parm: No

Parm name: BooleanSystemSetting

Description: 

>Select the Boolean System Setting to Test

Parm value input rules: 

* String with a minimum of 1 character

####Boolean Custom Class Name
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Custom Class Boolean Member"

Pivotal parm: No

Parm name: BooleanCustomClass

Description: 

>Enter the Class Name from which to Acquire a Boolean Value

Parm value input rules: 

* String with a minimum of 1 character

####Boolean Custom Member Name
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Custom Class Boolean Member"

Pivotal parm: No

Parm name: BooleanCustomMember

Description: 

>Enter the Member Name for which to Acquire a Boolean Value

Parm value input rules: 

* String with a minimum of 1 character

####Boolean Custom Arguments
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Custom Class Boolean Member"

Pivotal parm: No

Parm name: BooleanCustomArgs

Description: 

>Select the Method Arguments to Pass to the Member (if a method)

Parm value input rules: 

* String with a minimum of 1 character

####Boolean System Function
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Pre-defined System Boolean Function"

Pivotal parm: Yes

Description: 

>Select the Boolean System Function to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Check for File Existence</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Attempt to Ping IP Address</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>	

####File Path and Name
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Pre-defined System Boolean Function" *AND* Boolean System Function is "Check for File Existence"

Pivotal parm: No

Parm name: ArgFilePathAndName

Description: 

>Select the Path and Name of the File to Check

Parm value input rules: 

* String with a minimum of 1 character

####IP Address
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Pre-defined System Boolean Function" *AND* Boolean System Function is "Attempt to Ping IP Address"

Pivotal parm: No

Parm name: ArgIpAddress

Description: 

>Select the IP Address to Ping

Parm value input rules: 

* The value must be a valid IPV4 address

####Boolean Condition Test
Settable if: The Data Type is "Boolean"

Pivotal parm: No

Parm name: BooleanConditionTest

Description: 

>Select the Boolean Condition Test to Perform

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>OR with Accumulator 1</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>OR with Accumulator 2</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>AND with Accumulator 1</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>AND with Accumulator 2</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	
-->

<!--
###Integer Data Source
Settable if: The Data Type is "Integer"

Pivotal parm: Yes

Description: 

>Select the Integer Data Source of the Condition to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Integer System Property</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Pre-defined System Integer Value</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Integer System Setting</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Custom Class Integer Member</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####Integer System Property
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Integer System Property"

Pivotal parm: No

Parm name: IntegerSystemProperty

Description: 

>Select the Integer System Property to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Platform SDK Version</td>
    <td>"ro.build.version.sdk"</td>
	<td></td>
  </tr>
  <tr>
    <td>BSP Major Version</td>
    <td>"ro.config.bsp.major"</td>
	<td></td>
  </tr>
  <tr>
    <td>BSP Minor Version</td>
    <td>"ro.config.bsp.minor"</td>
	<td></td>
  </tr>
  <tr>
    <td>BSP Build Number</td>
    <td>"ro.config.bsp.build"</td>
	<td></td>
  </tr>
</table>
</div>	

####Integer System Value
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Pre-defined System Integer Value"

Pivotal parm: No

Parm name: IntegerSystemValue

Description: 

>Select the Integer System Value to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Battery Level</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Battery Health</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Wi-Fi Signal Quality</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>WWAN Signal Quality</td>
    <td>""</td>
	<td></td>
  </tr>
</table>
</div>	

####Integer System Setting
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Integer System Setting"

Pivotal parm: 

Parm name: IntegerSystemSetting

Description: 

>Select the Integer System Setting to Test

Parm value input rules: 

* String with a minimum of 1 character

####Integer Custom Class Name
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Custom Class Integer Member"

Pivotal parm: No

Parm name: IntegerCustomClass

Description: 

>Enter the Class Name from which to Acquire an Integer Value

Parm value input rules: 

* String with a minimum of 1 character

####Integer Custom Member Name
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Custom Class Integer Member"

Pivotal parm: No

Parm name: IntegerCustomMember

Description: 

>Enter the Member Name for which to Acquire an Integer Value

Parm value input rules: 

* String with a minimum of 1 character

####Integer Custom Arguments
Settable if: The Data Type is "Integer" *AND* the Integer Data Source is "Custom Class Integer Member"

Pivotal parm: No

Parm name: IntegerCustomArgs

Description: 

>Select the Method Arguments to Pass to the Member (if a method)

####Integer Condition Test
Settable if:  The Data Type is "Integer"

Pivotal parm: Yes

Description: 

>Select the Integer Condition Test to Perform

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Equal-to a Constant Integer</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Not-Equal-to a Constant Integer</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Greater-than a Constant Integer</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Less-than a Constant Integer</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>Greater-than-or-equal-to a Constant Integer</td>
    <td>"5"</td>
	<td></td>
  </tr>
  <tr>
    <td>Less-than-or-equal-to a Constant Integer</td>
    <td>"6"</td>
	<td></td>
  </tr>
</table>
</div>	

####Integer Constant Value
Settable if:  The Data Type is "Integer" *AND* Integer Condition Test is "Greater-than a Constant Integer" or "Less-than a Constant Integer"

Pivotal parm: No

Parm name: IntegerConstantValue

Description: 

>Select the Integer Constant Value to Test

Parm value input rules: 

* Integer with a minimum possible value of "-32768" and a maximum possible value of "-32767"
-->

<!--
###String Data Source
Settable if:  The Data Type is "String"

Pivotal parm: Yes

Description: 

>Select the String Data Source of the Condition to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>String System Property</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Pre-defined System String Value</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>String System Setting</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Custom Class String Member</td>
    <td>"4"</td>
	<td></td>
  </tr>
</table>
</div>	

####String System Property
Settable if: The Data Type is "String" *AND* String Data Source is "String System Property"

Pivotal parm: No

Parm name: StringSystemProperty

Description: 

>Select the String System Property to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Product Name</td>
    <td>"ro.product.name"</td>
	<td></td>
  </tr>
  <tr>
    <td>Product Model</td>
    <td>"ro.product.model"</td>
	<td></td>
  </tr>
  <tr>
    <td>Product Device</td>
    <td>"ro.product.device"</td>
	<td></td>
  </tr>
  <tr>
    <td>Product Device</td>
    <td>"ro.product.manufacturer"</td>
	<td></td>
  </tr>
  <tr>
    <td>Product Language</td>
    <td>"ro.product.locale.language"</td>
	<td></td>
  </tr>
  <tr>
    <td>Product Region</td>
    <td>"ro.product.locale.region"</td>
	<td></td>
  </tr>
  <tr>
    <td>UTC Date and Time</td>
    <td>"ro.build.date.utc"</td>
	<td></td>
  </tr>
  <tr>
    <td>Build Type</td>
    <td>"ro.build.type"</td>
	<td></td>
  </tr>
  <tr>
    <td>Build ID</td>
    <td>"ro.build.id"</td>
	<td></td>
  </tr>
  <tr>
    <td>Build Tags</td>
    <td>"ro.build.tags"</td>
	<td></td>
  </tr>
  <tr>
    <td>Platform Version</td>
    <td>"ro.build.version.release"</td>
	<td></td>
  </tr>
  <tr>
    <td>Build Number</td>
    <td>"ro.build.version.incremental"</td>
	<td></td>
  </tr>
  <tr>
    <td>Serial Number</td>
    <td>"ro.serialno"</td>
	<td></td>
  </tr>
  <tr>
    <td>Hardware Revision(s)</td>
    <td>"ro.config.bsp.hwrev"</td>
	<td></td>
  </tr>
</table>
</div>	

####String System Value
Settable if: The Data Type is "String" *AND* String Data Source is "Pre-defined System String Value"

Pivotal parm: No

Parm name: StringSystemValue

Description: 

>Select the String System Value to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Wi-Fi IP Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Wi-Fi MAC Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Cellular IP Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Cellular MAC Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Ethernet IP Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Ethernet MAC Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Blutooth Address</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Unique Hardware ID</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Host Name</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Logged-in User</td>
    <td>""</td>
	<td></td>
  </tr>
  <tr>
    <td>Logged-in User Group(s)</td>
    <td>""</td>
	<td></td>
  </tr>
</table>
</div>	

####String System Setting
Settable if: The Data Type is "String" *AND* String Data Source is "String System Setting"

Pivotal parm: No

Parm name: StringSystemSetting

Description: 

>Select the String System Setting to Test

Parm value input rules: 

* String with a minimum of 1 character

####String Custom Class Name
Settable if: The Data Type is "String" *AND* String Data Source is "Custom Class String Member"

Pivotal parm: No

Parm name: StringCustomClass

Description: 

>Enter the Class Name from which to Acquire a String Value

Parm value input rules: 

* String with a minimum of 1 character

####String Custom Member Name
Settable if: The Data Type is "String" *AND* String Data Source is "Custom Class String Member"

Pivotal parm: No

Parm name: StringCustomMember

Description: 

>Enter the Member Name for which to Acquire a String Value

Parm value input rules: 

* String with a minimum of 1 character

####String Custom Arguments
Settable if: The Data Type is "String" *AND* String Data Source is "Custom Class String Member"

Pivotal parm: No

Parm name: StringCustomArgs

Description: 

>Select the Method Arguments to Pass to the Member (if a method)

Parm value input rules: 

* String with a minimum of 1 character

####String Condition Test
Settable if: The Data Type is "String"

Pivotal parm: Yes

Description: 

>Select the String Condition Test to Perform

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Equal-to null</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Not-Equal-to null</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Equal-to empty-string</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>Not-Equal-to empty-string</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>Equal-to a Constant String</td>
    <td>"5"</td>
	<td></td>
  </tr>
  <tr>
    <td>Not-Equal-to a Constant String</td>
    <td>"6"</td>
	<td></td>
  </tr>
  <tr>
    <td>Contains a Constant String</td>
    <td>"7"</td>
	<td></td>
  </tr>
  <tr>
    <td>Does-not-contain a Constant String</td>
    <td>"8"</td>
	<td></td>
  </tr>
  <tr>
    <td>Starts-with a Constant String</td>
    <td>"9"</td>
	<td></td>
  </tr>
  <tr>
    <td>Does-not-start-with a Constant String</td>
    <td>"10"</td>
	<td></td>
  </tr>
  <tr>
    <td>Ends-with a Constant String</td>
    <td>"11"</td>
	<td></td>
  </tr>
  <tr>
    <td>Does-not-end-with a Constant String</td>
    <td>"12"</td>
	<td></td>
  </tr>
</table>
</div>	

####String Constant Value
Settable if: The Data Type is "String" *AND* String Condition Test is "Equal-to a Constant String" or "Not-Equal-to a Constant String" or "Contains a Constant String" or "Does-not-contain a Constant String" or "Starts-with a Constant String" or "Does-not-start-with a Constant String" or "Ends-with a Constant String" or "Does-not-end-with a Constant String"

Pivotal parm: No

Parm name: StringConstantValue

Description: 

>Select the String Constant Value to Test

####String Ignore Case
Settable if: The Data Type is "String" *AND* String Condition Test is "Equal-to a Constant String" or "Not-Equal-to a Constant String" or "Contains a Constant String" or "Does-not-contain a Constant String" or "Starts-with a Constant String" or "Does-not-start-with a Constant String" or "Ends-with a Constant String" or "Does-not-end-with a Constant String"

Pivotal parm: No

Parm name: StringIgnoreCase

Description: 

>Select whether to ignore case during String Comparison

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td></td>
  </tr>
</table>
</div>	
-->

<!--
###Condition Storage
Pivotal parm: No

Parm name: ConditionStorage

Description: 

>Select where to Store the Condition Result

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not Store Condition Result</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Store in Accumulator 1</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Store in Accumulator 2</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>	
-->

###Condition Met Action
Pivotal parm: Yes

Description: 

>This parm allows you to select what should happen when the Test specified for the Condition is Met (results in "true").

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Success</td>
    <td>"0"</td>
	<td>This value indicates that when the Test specified for the Condition is Met (results in "true") then the Feature should indicate success by immediately returning a characteristic tag.</td>
  </tr>
  <tr>
    <td>Fail with characteristic-error</td>
    <td>"1"</td>
	<td>This value indicates that when the Test specified for the Condition is Met (results in "true") then the Feature should indicate failure by returning a characteristic-error tag.</td>
  </tr>
  <tr>
    <td>Retry (up to specified times) then Fail</td>
    <td>"2"</td>
	<td>This value indicates that when the Test specified for the Condition is Met (results in "true") then the Feature should retry, up to the specified number of tries, with the specified delay between tries.  If the Condition is Met on any try, it should be handled as defined above for "Success".  If the Condition remains Not Met on the last try, then it should be handled as defined above for "Fail with characteristic-error".</td>
  </tr>
</table>
</div>	

###Condition Not Met Action
Pivotal parm: Yes

Description: 

>This parm allows you to select what should happen when the Test specified for the Condition is Not Met (results in "false").

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Success</td>
    <td>"0"</td>
	<td>This value indicates that when the Test specified for the Condition is Not Met (results in "false") then the Feature should indicate success by immediately returning a characteristic tag.</td>
  </tr>
  <tr>
    <td>Fail with characteristic-error</td>
    <td>"1"</td>
	<td>This value indicates that when the Test specified for the Condition is Not Met (results in "false") then the Feature should indicate failure by returning a characteristic-error tag.</td>
  </tr>
  <tr>
    <td>Retry (up to specified times) then Fail</td>
    <td>"2"</td>
	<td>This value indicates that when the Test specified for the Condition is Not Met (results in "false") then the Feature should retry, up to the specified number of tries, with the specified delay between tries.  If the Condition is Not Met on any try, it should be handled as defined above for "Success". If the Condition remains Not Met on the last try, then it should be handled as defined above for "Fail with characteristic-error".</td>
  </tr>
</table>
</div>	

###Condition Repeat Count
Settable if: Condition Met Action is "Retry (up to specified times) then Fail" *OR* Condition Not Met Action is "Retry (up to specified times) then Fail"

Pivotal parm: No

Parm name: ConditionRepeatCount

Description: 

>This parm allows you to select the number of times the Test specified for the Condition should be repeated (tried) before giving up and indicating failure.

Parm value input rules: 

* Integer with a minimum value of "2" and a maximum value of "500"

###Condition Repeat Interval
Settable if: Condition Met Action is "Retry (up to specified times) then Fail" *OR* Condition Not Met Action is "Retry (up to specified times) then Fail"

Pivotal parm: No

Parm name: ConditionRepeatInterval

Description: 

>This parm allows you to select the amount of time (in seconds) to wait between tries when the Test specified for the Condition is repeated.

Parm value input rules: 

* Integer with a minimum possible value of 1 and a maximum value of "60"

###Condition Fail Message
Pivotal parm: No

Parm name: ConditionFailMessage

Description: 

>This parm allows you to specify the message that should be returned in the characteristic-error tag to indicate why the Feature failed. This should generally provide an explanation of the Test that was performed, the result that leads to determining a failure. For example, a failure to acquire a valid IP Address [via Ethernet] within a specified amount of time might use a message such as "Ethernet connectivity not established before timeout". Such a message could be invaluable when troubleshooting later as it clearly defines why the Feature failed and could be used to determine appropriate corrective action. If an empty (length of zero) value is specified, then no message will be included in the characteristic-error tag.

Parm value input rules: 

* String with a maximum size of 250 characters

###Condition Wait Message
Settable if: The Condition Met Action is "Retry (up to specified times) then Fail" OR the Condition Not Met Action is "Retry (up to specified times) then Fail"

Pivotal parm: No

Parm name: ConditionWaitMessage

Description: 

>This parm allows you to specify the message that should be sent to the device user, using the StatusMgr Feature Type, to indicate that the ConditionMgr is waiting for the Test defined for the Condition to reach a defined state or for the specified number of retries to be exhausted.  Since this message is intended to notify the device user that an action should be taken, it should be worded to communicate to such users.  In particular, it may need to in a particular language. The message should ideally indicate what the Condition is waiting for and/or what action the user should take or not take and what such action will cause.  It may also be useful to communicate the amount of time the user has to take the action before failure will occur. For example, a message indicating a wait for a valid IP Address [via Ethernet] within a specified amount of time might use a message such as "Please insert device into an Ethernet cradle within 2 minutes". If an empty (length of zero) value is specified, then no message will be sent to StatusMgr.

>**Note:** A wait message may or may not be made visible to the device user, depending on whether or not there is an application actively listening for and displaying messages sent to StatusMgr.

Parm value input rules: 

* String with a maximum of 250 characters

##Example XML
###Use with XmlMgr

For best results, ConditionMgr and XmlMgr should be used together. For example, to accomplish the "Ethernet Scan and Dock" use case, the following Request XML Document might be used:

	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="XmlMgr">
			<parm name="ProcessingMode" value="2"/>
		</characteristic>
		<characteristic version="4.4" type="ComponentMgr">
			<parm name=" EthernetState" value="1"/>
		</characteristic>
		<characteristic version="4.4" type="ConditionMgr">
			<parm name="DataType" value="1"/>
			<characteristic type="BooleanDetails">
				<parm name="BooleanSourceType" value="2"/>
				<parm name="BooleanSystemValue" value="2"/>
			</characteristic>
			<parm name="ConditionMetAction" value="0"/>
			<parm name="ConditionNotMetAction" value="2"/>
			<parm name="ConditionRepeatCount" value="120"/>
			<parm name="ConditionNotMetAction" value="1"/>
			<parm name="ConditionFailMessage" value="Ethernet connectivity not established before timeout"/>
			<parm name="ConditionWaitMessage" value="Please insert device into an Ethernet cradle within 2 minutes"/>
		</characteristic>
		<characteristic version="0.6" type="FileMgr">
		</characteristic>
	</wap-provisioningdoc>
	
If the above Request XML document was used without the XmlMgr Feature at the beginning, then the FileMgr Feature would be executed regardless of whether a connection was successfully established via Ethernet. While that would likely result in an error, it might take much longer, since the FileMgr Feature would need to wait for a timeout. Further, the user experience would be inferior since the user would not be informed to insert device into the cradle and the failure would shed no light on why FileMgr "could not connect to server".

###Using ConditionMetAction and ConditionNotMetAction

The two parms ConditionMetAction and ConditionNotMetAction provide identical options for choosing the action to take. While this means you could select the same action for both, that would likely never be the right thing to do. To review, the options are:

* Success
* Fail with characteristic-error
* Retry (up to specified times) then Fail

You should select the first open "Success" for only one of these two parms, depending on whether "true" or "false" best represents the Condition where you want to continue executing Features.  For the other parm, you should select either "Fail with characteristic-error" or "Retry (up to specified times) then Fail", depending on whether you want to stop immediately or retry for a while before deciding to stop executing Features.

When selecting "Retry (up to specified times) then Fail" for either of the parms ConditionMetAction or ConditionNotMetAction, you will need to specify the additional parms ConditionRepeatCount and ConditionRepeatInterval. Taken together, the values of these two parms control how long the total wait time may be. When using this capability, success can occur at any time, but failure requires "exhausting the retries".  The parm ConditionRepeatCount specifies how many time to try and the parm ConditionRepeatInterval specifies how long (in seconds) to wait between tries.  By multiplying these two, you can compute the minimum amount of time that must elapse before failure can occur. The actual time may be somewhat longer since some time may be taken to perform each Test. But in most cases, the wait time before failure should be close to the computed time.

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ConditionMgr&os=JB&embed=true"></iframe> 