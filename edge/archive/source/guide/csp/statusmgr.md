# StatusMgr

## About StatusMgr

### Overview

The StatusMgr Feature Type has the ability to send the status of various staging Feature Types.

### Main Functionality

* Add, Replace, or Remove Status Requests
* Notify about Status

##Parameter Notes
###Status Request Action
Pivotal parm: Yes

Description: 

>This parm allows you to select the Request Action to be performed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any Status Request action to be performed.</td>
  </tr>
  <tr>
    <td>Add/Replace Status Request</td>
    <td>"1"</td>
	<td>This value will cause a Status Request to be added or replaced.</td>
  </tr>
  <tr>
    <td>Remove Status Request</td>
    <td>"2"</td>
	<td>This value will cause a Status Request to be removed.</td>
  </tr>
</table>
</div>	

####Request Status ID
Settable if: The Status Request Action is "Add/Replace Status Request" or "Remove Status Request"

Pivotal parm: No

Parm name: RequestId

Description: 

>This parm allows you to enter an ID for the status that is being requested.

Parm value input rules: 

* String with a minimum size of 1 character

####Request Status Filter
Settable if: The Status Request Action is "Add/Replace Status Request"

Pivotal parm: No

Parm name: RequestFilter

Description: 

>This parm allows you to select the type of status that should be requested.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Request ALL Status</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Request Completion Status</td>
    <td>"1"</td>
	<td></td>
  </tr>
</table>
</div>	

####Dispatch Intent Action Name
Settable if: The Status Request Action is "Add/Replace Status Request"

Pivotal parm: No

Parm name: ActionName

Description: 

>This parm allows you to enter the Android Action Name to include in the intent.

Parm value input rules: 

* String with a minimum size of 1 character

####Dispatch Intent MIME Type
Settable if: The Status Request Action is "Add/Replace Status Request"

Pivotal parm: No

Parm name: MimeType

Description: 

>This parm allows you to enter an optional MIME Type to include in the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 characters

####Dispatch Intent Package Name
Settable if: The Status Request Action is "Add/Replace Status Request"

Pivotal parm: No

Parm name: PackageName

Description: 

>This parm allows you to enter an optional Package Name to include in the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 characters

####Dispatch Intent Class Name
Settable if: The Status Request Action is "Add/Replace Status Request"

Pivotal parm: No

Parm name: ClassName

Description: 

>This parm allows you to enter an optional Class Name to include in the intent.

Parm value input rules: 

* String with a minimum size of 0 characters

###Status Notify Action
Pivotal parm: Yes

Description: 

>This parm allows you to select the Notify Action to be performed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any Status Notify action to be performed.</td>
  </tr>
  <tr>
    <td>Notify about Status</td>
    <td>"1"</td>
	<td></td>
  </tr>
</table>
</div>	

####Notify Source ID
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifySourceId

Description: 

>This parm allows you to specify an identifier for the source of the notification.

Parm value input rules: 

* String with a minimum size of 1 character

####Notify State
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifyState

Description: 

>This parm allows you to specify the state for the notification. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 character

####Notify Header
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifyHeader

Description: 

>This parm allows you to enter an optional Text Header for the Notification. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 character

####Notify Body
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifyBody

Description: 

>This parm allows you to enter an optional text body for the notification. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 character

####Notify Footer
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifyFooter

Description: 

>This parm allows you to enter an optional text footer for the notification. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* String with a minimum size of 0 character

####Notify Percentage
Settable if: The Status Notify Action is "Notify about Status"

Pivotal parm: No

Parm name: NotifyPercent

Description: 

>This parm allows you to enter an optional Percentage Complete value for the notification. Specifying a value of "-1" (or the absence of this parm from the XML) will cause this value to not be set.

Parm value input rules: 

* Integer with a minimum value of "-1" and a maximum value of "100"

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=StatusMgr&os=JB&embed=true"></iframe> 