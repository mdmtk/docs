# Intent

## About Intent

### Overview

The Intent Feature Type helps your application to create and send intents on the device.

### Main Functionality

* Send a Start Activity Intent
* Send a Start Service Intent
* Send a Broadcast Intent
* Set up to 5 extra values with the intent of types:
	* Standard Integer
	* Character
	* Character Sequence
	* Floating Point
	* Long Integer
	* Boolean
	* short
	* Double Precision Floating Point
	* String
	* Single Byte Integer
	
##Parameter Notes
###Action
Pivotal parm: Yes 

Description: 

>This parm will allow you to specify the intent action to perform.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>StartActivity</td>
    <td>"1"</td>
	<td>This value will cause a specified activity to be started.</td>
  </tr>
  <tr>
    <td>StartService</td>
    <td>"2"</td>
	<td>This value will cause a specified service to be started.</td>
  </tr>
  <tr>
    <td>Broadcast</td>
    <td>"3"</td>
	<td>This value will cause a broadcast intent to be sent.</td>
  </tr>
</table>
</div>	

####Android Action Name
Pivotal parm: No

Parm name: ActionName

Description: 

>This parm will allow you to provide the name of the Android action to specify in the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####MIME Type
Pivotal parm: No

Parm name: Type

Description: 

>This parm will allow you to provide the content MIME Type to specify in the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Package Name
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Package

Description: 

>This parm will allow you to provide the target Android Package Name to specify in the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Class Name
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Class

Description: 

>This parm will allow you to provide the target Android Class Name to specify in the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####URI
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Uri

Description: 

>This parm will allow you to set the data Uri for the explicit MIME type for the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####File
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: File

Description: 

>This parm will allow you to set the data file for the explicit MIME type for the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra 0 Type
Pivotal parm: Yes

Description: 

>This parm will allow you to specify the Type of Extra 0 to attach to the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause Extra 0 to be attached to the intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the extra to be a standard integer type.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the extra to be a character type.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the extra to be a character sequence type.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the extra to be a floating point type.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the extra to be a long integer type.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the extra to be a Boolean type.</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the extra to be a short type.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the extra to be a double precision floating point.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the extra to be a String type.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the extra to be a single byte integer type.</td>
  </tr>
</table>
</div>	

#####**Extra 0 Name**
Settable if: The Extra 0 Type is not "None"

Pivotal parm: No

Parm name: ExtraName

Description: 

>This parm will allow you to provide the Name of Extra 0 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

#####**Extra 0 Value**
Settable if: The Extra 0 Type is not "None"

Pivotal parm: No

Parm name: ExtraValue

Description: 

>This parm will allow you to provide the Value of Extra 0 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra 1 Type
Pivotal parm: Yes

Description: 

>This parm will allow you to specify the Type of Extra 1 to attach to the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause Extra 1 to be attached to the intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the extra to be a standard integer type.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the extra to be a character type.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the extra to be a character sequence type.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the extra to be a floating point type.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the extra to be a long integer type.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the extra to be a Boolean type.</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the extra to be a short type.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the extra to be a double precision floating point.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the extra to be a String type.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the extra to be a single byte integer type.</td>
  </tr>
</table>
</div>	

#####**Extra 1 Name**
Settable if: The Extra 1 Type is not "None"

Pivotal parm: No

Parm name: Extra1Name

Description: 

>This parm will allow you to provide the Name of Extra 1 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

#####**Extra 1 Value**
Settable if: The Extra 1 Type is not "None"

Pivotal parm: No

Parm name: Extra1Value

Description: 

>This parm will allow you to provide the Value of Extra 1 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra 2 Type
Pivotal parm: Yes

Description: 

>This parm will allow you to specify the Type of Extra 2 to attach to the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause Extra 2 to be attached to the intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the extra to be a standard integer type.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the extra to be a character type.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the extra to be a character sequence type.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the extra to be a floating point type.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the extra to be a long integer type.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the extra to be a Boolean type.</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the extra to be a short type.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the extra to be a double precision floating point.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the extra to be a String type.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the extra to be a single byte integer type.</td>
  </tr>
</table>
</div>	

#####**Extra 2 Name**
Settable if: The Extra 2 Type is not "None"

Pivotal parm: No

Parm name: Extra2Name

Description: 

>This parm will allow you to provide the Name of Extra 2 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

#####**Extra 2 Value**
Settable if: The Extra 2 Type is not "None"

Pivotal parm: No

Parm name: Extra2Value

Description: 

>This parm will allow you to provide the Value of Extra 2 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra 3 Type
Pivotal parm: Yes

Description: 

>This parm will allow you to specify the Type of Extra 3 to attach to the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause Extra 3 to be attached to the intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the extra to be a standard integer type.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the extra to be a character type.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the extra to be a character sequence type.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the extra to be a floating point type.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the extra to be a long integer type.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the extra to be a Boolean type.</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the extra to be a short type.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the extra to be a double precision floating point.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the extra to be a String type.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the extra to be a single byte integer type.</td>
  </tr>
</table>
</div>	

#####**Extra 3 Name**
Settable if: The Extra 3 Type is not "None"

Pivotal parm: No

Parm name: Extra3Name

Description: 

>This parm will allow you to provide the Name of Extra 3 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

#####**Extra 3 Value**
Settable if: The Extra 3 Type is not "None"

Pivotal parm: No

Parm name: Extra3Value

Description: 

>This parm will allow you to provide the Value of Extra 3 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra 4 Type
Pivotal parm: Yes

Description: 

>This parm will allow you to specify the Type of Extra 4 to attach to the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause Extra 4 to be attached to the intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the extra to be a standard integer type.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the extra to be a character type.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the extra to be a character sequence type.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the extra to be a floating point type.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the extra to be a long integer type.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the extra to be a Boolean type.</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the extra to be a short type.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the extra to be a double precision floating point.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the extra to be a String type.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the extra to be a single byte integer type.</td>
  </tr>
</table>
</div>	

#####**Extra 4 Name**
Settable if: The Extra 4 Type is not "None"

Pivotal parm: No

Parm name: Extra4Name

Description: 

>This parm will allow you to provide the Name of Extra 4 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

#####**Extra 4 Value**
Settable if: The Extra 4 Type is not "None"

Pivotal parm: No

Parm name: Extra4Value

Description: 

>This parm will allow you to provide the Value of Extra 4 to attach to the intent.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters



## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=Intent&os=JB&embed=true"></iframe> 