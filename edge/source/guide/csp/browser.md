# BrowserMgr

## About BrowserMgr

### Overview

The BrowserMgr Feature Type is used to configure the settings of the Android web browser app.

### Main Functionality

* Set Default homepage
* Turn on Remember Password
* Turn off Remember Password
* Turn on save form data
* Turn off save form data

##Parameter Notes
###Set Default Home Page
Pivotal parm: No

Parm name: SetDefaultHomepage

Description: 

>This parm will set a specified web page as the default home page in the Android web browser. This requires the full, valid URL to the web page to be input, such as "www.google.com". Then when this browser app is opened, it will open on the web page that was set with this parm.

Parm value input rules: 

* String with a minimum size of 0 characters and a maximum size of 2000 characters

###Turn On/Off Remember Passwords
Pivotal parm: No

Parm name: SetRememberPasswords

Description: 

>This parm will set whether or not the user should be asked if they want the browser to save their password when they are submitting a password in a web page. If this is turned on, the password will be remembered by the browser and will automatically be filled in when the user fills out the same web page.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will cause no change to whether or not the Remember Passwords dialog currently appears.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will turn on the Remember Passwords option, which will cause the user to be prompted if they would like to save the password.</td>
  </tr>
  <tr>
    <td>Turn off</td>
    <td>"2"</td>
	<td>This value will turn on the Remember Passwords option, which will cause the user to not be prompted if they would like to save the password.</td>
  </tr>
</table>
</div>	

###Turn On/Off Save Form Data
Pivotal parm: No

Parm name: SetSaveFormData

Description: 

>This parm will set whether or not the user should be asked if they want to save the information that they entered into the field when filling out and submitting a web form.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will cause no change to whether or not the Save Form Data dialog currently appears.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will turn on the Save Form Data option, which will cause the user to be prompted if they would like to to save the form data.</td>
  </tr>
  <tr>
    <td>Turn off</td>
    <td>"2"</td>
	<td>This value will turn off the Save Form Data option, which will cause the user to not be prompted if they would like to to save the form data.</td>
  </tr>
</table>
</div>	


## Queries

### Get All Browser Settings

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type = "BrowserMgr">
       	</characteristic-query>
    </wap-provisioningdoc>


#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
            <parm name="SetRememberPasswords" value="1"/>
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>


### Get Default Homepage Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetDefaultHomepage"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Remember Password Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetRememberPasswords"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetRememberPasswords" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Save Forum Data Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetSaveFormData"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=BrowserMgr&os=JB&embed=true"></iframe> 