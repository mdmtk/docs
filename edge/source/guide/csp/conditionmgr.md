# ConditionMgr

## About ConditionMgr

### Overview


### Main Functionality


##Parameter Notes
###Data Type
Pivotal parm: Yes

Description: 

>Select the Data Type of the Condition to Test

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
	<td>This value will set the Data Type of the Condition to test to be a Boolean.</td>
  </tr>
  <tr>
    <td>Integer</td>
    <td>"2"</td>
	<td>This value will set the Data Type of the Condition to test to be a integer.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"3"</td>
	<td>This value will set the Data Type of the Condition to test to be a string.</td>
  </tr>
</table>
</div>	

###Boolean Data Source
Settable if: The Data Type is "Boolean"

Pivotal parm: Yes

Description: 

>Select the Boolean Data Source of the Condition to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Boolean System Property</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Pre-defined System Boolean Value</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
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
  </tr>
</table>
</div>	

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

####Boolean System Value
Settable if: The Data Type is "Boolean" *AND* the Boolean Data Source is "Pre-defined System Boolean Value"

Pivotal parm: No

Parm name: BooleanSystemValue

Description: 

>Select the Boolean System Value to Test

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Battery is Charging</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Have any valid IP Address</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
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
  </tr>
</table>
</div>	

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

###Condition Met Action
Pivotal parm: Yes

Description: 

>Select the Action to Perform if the Condition is Met

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
	<td></td>
  </tr>
  <tr>
    <td>Fail with characteristic-error</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Retry (up to specified times) then Fail</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>	

###Condition Not Met Action
Pivotal parm: Yes

Description: 

>Select the Action to Perform if the Condition is Not Met

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
	<td></td>
  </tr>
  <tr>
    <td>Fail with characteristic-error</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Retry (up to specified times) then Fail</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>	

###Condition Repeat Count
Settable if: Condition Met Action is "Retry (up to specified times) then Fail" *OR* Condition Not Met Action is "Retry (up to specified times) then Fail"

Pivotal parm: No

Parm name: ConditionRepeatCount

Description: 

>Select the Repeat Count for Testing the Condition

Parm value input rules: 

* Integer with a minimum possible value of 2

###Condition Repeat Interval
Settable if: Condition Met Action is "Retry (up to specified times) then Fail" *OR* Condition Not Met Action is "Retry (up to specified times) then Fail"

Pivotal parm: No

Parm name: ConditionRepeatInterval

Description: 

>Select the Time (in seconds) between Tests of the Condition

Parm value input rules: 

* Integer with a minimum possible value of 1

###Condition Fail Message
Pivotal parm: No

Parm name: ConditionFailMessage

Description: 

>Select the Message to Return if the Condition Fails

Parm value input rules: 

* String with a minimum size of 1 character

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ConditionMgr&os=JB&embed=true"></iframe> 