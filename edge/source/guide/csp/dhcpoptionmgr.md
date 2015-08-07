# DhcpOptionMgr

## About DhcpOptionMgr

### Overview

The DhcpOptionMgr Feature Type allows you to control various DHCP configuration options.

### Main Functionality

* Enable or Disable use of Host Name
* Enable or Disable use of User Class
* Enable or Disable use of Broadcast Address
* Enable or Disable use of NTP Server
* Enable or Disable use of TFTP Server Name
* Enable or Disable use of Boot File Name
* Enable or Disable use of Domain Search
* Enable or Disable use of TFTP Server Address

##Parameter Notes
###Host Name
Pivotal parm: Yes

Description: 

>This parm allows you to control whether the state of the Host Name Option (DHCP Option Code 12) can be changed. The Host Name is used to identify a client on the network.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of Host Name Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Host Name Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Host Name Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>	

####Host Name Option value
Settable if: Host Name is "Enable"

Pivotal parm: No

Parm name: HostNameValue

Description: 

>This parm allows you to specify the Host Name (DHCP Option Code 12) that the client should send, which is used to identify a client on the network.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 91 characters

###User Class
Pivotal parm: Yes

Description: 

>This parm allows you to control whether the state of the User Class Option (DHCP Option Code 77) can be changed. The User Class value allows a DHCP server to select an appropriate address pool to assign an address to the client and any additional configuration parameters.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the User Class Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the User Class Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the User Class Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>	

####User Class value
Settable if: User Class is "Enable"

Pivotal parm: No

Parm name: UserClassValue

Description: 

>This parm allows you to specify the User Class value (DHCP Option Code 77) that the client should send.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 91 characters

###Broadcast Address
Pivotal parm: No

Parm name: BroadcastAddrState

Description: 

>This parm allows you to control whether the state of the Broadcast Address Option (DHCP Option Code 28) can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the Broadcast Address Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Broadcast Address Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Broadcast Address Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

###NTP Server
Pivotal parm: No

Parm name: NTPServerState

Description: 

>This parm allows you to control whether the state of the NTP Server Option (DHCP Option Code 42) can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the NTP Server Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the NTP Server Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the NTP Server Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

###TFTP Server Name
Pivotal parm: No

Parm name: TFTPSerNameState

Description: 

>This parm allows you to control whether the state of the TFTP Server Name Option (DHCP Option Code 66) can be changed. 

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the TFTP Server Name Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the TFTP Server Name Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the TFTP Server Name Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

###Boot File Name
Pivotal parm: No

Parm name: BootFileState

Description: 

>This parm allows you to control whether the state of the Boot File Name Option (DHCP Option Code 67) can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the Boot File Name Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Boot File Name Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Boot File Name Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

###Domain Search
Pivotal parm: No

Parm name: DomainSearchState

Description: 

>This parm allows you to control whether the state of the Domain Search Option (DHCP Option Code 119) can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the Domain Search Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Domain Search Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Domain Search Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

###TFTP Server Address
Pivotal parm: No

Parm name: TFTPSerAddrState

Description: 

>This parm allows you to control whether the state of the TFTP Server Address Option (DHCP Option Code 150) can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the TFTP Server Address Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the TFTP Server Address Option to be unlocked, allowing it to be changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the TFTP Server Address Option to be locked, preventing it from being changed either by the device user or by the DhcpOptionMgr Feature Type.</td>
  </tr>
</table>
</div>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=DhcpOptionMgr&os=JB&embed=true"></iframe> 