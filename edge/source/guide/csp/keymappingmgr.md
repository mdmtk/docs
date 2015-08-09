# KeyMappingMgr

## About KeyMappingMgr

### Overview

The KeyMappingMgr Feature Type allows you to modify what behavior a given key will exhibit when pressed.

The keys can be remapped for specific Key Tables. A Key Table is a list of behaviors that a key will exhibit when pressed. The Base table is a list of behaviors a key will have when a modifier key, such as the shift or control keys, is not pressed. All devices support the Base key table, while other key tables may only be supported on devices that have the modifier key for that key table. For instance the Blue Table is only supported on devices that have a blue key. While remapping a key, you can set the behavior for that key in each table supported by the device.

The modifiable key tables are:

* Base - no modifier key was pressed
* Blue - blue key was pressed before a key was pressed
* Orange - orange key was pressed before a key was pressed
* Grey - grey key was pressed before a key was pressed
* Shift - shift key was pressed before a key was pressed
* Control - control key was pressed before a key was pressed

### Main Functionality

* Default all key mappings
* Remap a key

##Parameter Notes
###Action
Pivotal parm: Yes

Description: 

>This parm allows you to select if a key should be remapped so that it will perform a specified behavior when the key is pressed.

>By default, all keys are mapped to a specific behavior. For instance, when the the letter "A" is pressed, a lowercase "a" will be sent. Through remapping, the behavior of this key could be changed to perform a different behavior when it is pressed.

> **Note:** When adding a custom key map, you may want to Default all key mappings before applying your new key map. This would insure that your key mappings are the only ones that exist after your profile is applied.


<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Remap a key</td>
    <td>"1"</td>
	<td>This value will allow you to remap a key on the device to perform a specified behavior when pressed.</td>
  </tr>
  <tr>
    <td>Default all key mappings</td>
    <td>"2"</td>
	<td>This value cause all of the key mappings to be reset back to their original behavior, before any of the keys were remapped.</td>
  </tr>
</table>
</div>	

####Choose a key to modify
Settable if: The Action value is "Remap a key"

Pivotal parm: Yes

Description: 

>This parm allows you to select the key that will be remapped.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<!-- <th>Description</th> -->
	</tr>
  <tr>
    <td>None</td>
    <td>""</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>0</td>
    <td>"0"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>1</td>
    <td>"1"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>2</td>
    <td>"2"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>3</td>
    <td>"3"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>4</td>
    <td>"4"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>5</td>
    <td>"5"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>6</td>
    <td>"6"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>7</td>
    <td>"7"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>8</td>
    <td>"8"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>9</td>
    <td>"9"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>A</td>
    <td>"A"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>B</td>
    <td>"B"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>C</td>
    <td>"C"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>D</td>
    <td>"D"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>E</td>
    <td>"E"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F</td>
    <td>"F"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>G</td>
    <td>"G"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>H</td>
    <td>"H"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>I</td>
    <td>"I"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>J</td>
    <td>"J"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>K</td>
    <td>"K"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>L</td>
    <td>"L"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>M</td>
    <td>"M"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>N</td>
    <td>"N"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>O</td>
    <td>"O"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>P</td>
    <td>"P"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Q</td>
    <td>"Q"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>R</td>
    <td>"R"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>S</td>
    <td>"S"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>T</td>
    <td>"T"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>U</td>
    <td>"U"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>V</td>
    <td>"V"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>W</td>
    <td>"W"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>X.</td>
    <td>"X"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Y</td>
    <td>"Y"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Z</td>
    <td>"Z"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F1</td>
    <td>"F1"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F2</td>
    <td>"F2"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F3</td>
    <td>"F3"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F4</td>
    <td>"F4"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F5</td>
    <td>"F5"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F6</td>
    <td>"F6"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F7</td>
    <td>"F7"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F8</td>
    <td>"F8"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F9</td>
    <td>"F9"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F10</td>
    <td>"F10"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F11</td>
    <td>"F11"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F12</td>
    <td>"F12"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Enter</td>
    <td>"ENTER"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Up</td>
    <td>"UP"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Down</td>
    <td>"DOWN"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left</td>
    <td>"LEFT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right</td>
    <td>"RIGHT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Escape</td>
    <td>"ESC"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Backspace</td>
    <td>"BACKSPACE"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Period</td>
    <td>"DOT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Star</td>
    <td>"Star"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Pound</td>
    <td>"POUND"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Space</td>
    <td>"SPACE"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Return</td>
    <td>"RETURN"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Clear</td>
    <td>"CLR"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Field Exit</td>
    <td>"FIELD_EXIT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Alt</td>
    <td>"ALT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Control</td>
    <td>"CTRL"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Shift</td>
    <td>"SHIFT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Blue</td>
    <td>"BLUE"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Orange</td>
    <td>"ORANGE"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Green Dot</td>
    <td>"GREEN"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Red Dot</td>
    <td>"RED"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Up</td>
    <td>"VOLUMEUP"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Down</td>
    <td>"VOLUMEDOWN"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Scan</td>
    <td>"SCAN"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Grip Trigger</td>
    <td>"GRIP_TRIGGER"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L1</td>
    <td>"LEFT_TRIGGER_1"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L2</td>
    <td>"LEFT_TRIGGER_2"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R1</td>
    <td>"RIGHT_TRIGGER_1"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R2</td>
    <td>"RIGHT_TRIGGER_2"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Headset Button</td>
    <td>"HEADSET_HOOK"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Back</td>
    <td>"BACK"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Home</td>
    <td>"HOME"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Menu</td>
    <td>"MENU"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Recent</td>
    <td>"RECENT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Search</td>
    <td>"SEARCH"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Keyboard Backlight</td>
    <td>"KEYLIGHT"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Display Backlight</td>
    <td>"LAMP"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Power</td>
    <td>"POWER"</td>
	<!-- <td></td> -->
</table>
</div>	

###Key Behavior Parms

####Key behavior
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Base Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

####Key behavior in Blue mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Blue Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

####Key behavior in Orange mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Orange Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

####Key behavior in Grey mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Grey Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

####Key behavior in Shift mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Shift Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

####Key behavior in Control mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the behavior that the selected key should have when it is pressed. This is applicable for the Control Key Table. See the sections below for information about setting the specific details of the different behaviors.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the key's current behavior.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will allow you to specify a different key-code that the key should send when it is pressed.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the key to act as a trigger, which can be configured to send one of eight trigger options.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the key launch a specified application when it is pressed.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the key send a specified intent when it is pressed.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the key to be disabled so that nothing will happen when it is pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will reset the key to its original settings before it was remapped.</td>
  </tr>
</table>
</div>	

###Trigger Parms

These parms will be used to configure the details of remapped keys that will act as a trigger.

####Trigger
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior for the corresponding Key Table is "Send trigger"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseTrigger

For Blue Key Table mode

* Parm name: BlueTrigger

For Orange Key Table mode

* Parm name: OrangeTrigger

For Grey Key Table mode

* Parm name: GreyTrigger

For Shift Key Table mode

* Parm name: ShiftTrigger

For Control Key Table mode

* Parm name: ControlTrigger

Description: 

>This value allows you to select the behavior that will be mapped to the specified key. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Trigger 1</td>
    <td>"10016"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 2</td>
    <td>"10017"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 3</td>
    <td>"10018"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 4</td>
    <td>"10019"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 5</td>
    <td>"10020"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 6</td>
    <td>"10021"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Trigger 7</td>
    <td>"10022"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>10023</td>
    <td>"Trigger 8"</td>
	<!-- <td></td> -->
  </tr>
</table>
</div>	

###Key-code Parms

These parms will be used to configure the details of remapped keys that will send a key-code.

####Key-code
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseKeyCode

For Blue Key Table mode

* Parm name: BlueKeyCode

For Orange Key Table mode

* Parm name: OrangeKeyCode

For Grey Key Table mode

* Parm name: GreyKeyCode

For Shift Key Table mode

* Parm name: ShiftKeyCode

For Control Key Table mode

* Parm name: ControlKeyCode

Description: 

>This parm allows you to select the key-code that the selected key will send. When modifying a key-code to be sent, you may also choose to select the state of a modifier key. For instance, if you where to modify the "A" key to send a "B" key-code, and set the SHIFT state to Forced ON, the physical Shift keys state would be disregarded and a capital "B" would be sent. Modifier keys can be enabled through the use of the KeyMappingMgr's Advanced parm.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	<!--	<th>Description</th> -->
	</tr>
  <tr>
    <td>0</td>
    <td>"7"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>1</td>
    <td>"8"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>2</td>
    <td>"9"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>3</td>
    <td>"10"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>4</td>
    <td>"11"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>5</td>
    <td>"12"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>6</td>
    <td>"13"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>7</td>
    <td>"14"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>8</td>
    <td>"15"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>9</td>
    <td>"16"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>A</td>
    <td>"29"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>B</td>
    <td>"30"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>C</td>
    <td>"31"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>D</td>
    <td>"32"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>E</td>
    <td>"33"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F</td>
    <td>"34"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>G</td>
    <td>"35"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>H</td>
    <td>"36"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>I</td>
    <td>"37"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>J</td>
    <td>"38"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>K</td>
    <td>"39"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>L</td>
    <td>"40"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>M</td>
    <td>"41"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>N</td>
    <td>"42"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>O</td>
    <td>"43"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>P</td>
    <td>"44"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Q</td>
    <td>"45"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>R</td>
    <td>"46"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>S</td>
    <td>"47"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>T</td>
    <td>"48"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>U</td>
    <td>"49"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>V</td>
    <td>"50"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>W</td>
    <td>"51"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>X.</td>
    <td>"52"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Y</td>
    <td>"53"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Z</td>
    <td>"54"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Enter</td>
    <td>"66"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Tab</td>
    <td>"61"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Space</td>
    <td>"62"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Escape</td>
    <td>"111"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Delete</td>
    <td>"67"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F1</td>
    <td>"131"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F2</td>
    <td>"132"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F3</td>
    <td>"133"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F4</td>
    <td>"134"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F5</td>
    <td>"135"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F6</td>
    <td>"136"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F7</td>
    <td>"137"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F8</td>
    <td>"138"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F9</td>
    <td>"139"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F10</td>
    <td>"140"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F11</td>
    <td>"141"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F12</td>
    <td>"142"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 0</td>
    <td>"144"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 1</td>
    <td>"145"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 2</td>
    <td>"146"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 3</td>
    <td>"147"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 4</td>
    <td>148""</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 5</td>
    <td>"149"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 6</td>
    <td>"150"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 7</td>
    <td>"151"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 8</td>
    <td>"152"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 9</td>
    <td>"153"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Divide</td>
    <td>"154"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Multiply</td>
    <td>"155"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Subtract</td>
    <td>"156"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Add</td>
    <td>"157"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Period</td>
    <td>"158"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Comma</td>
    <td>"159"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Enter</td>
    <td>"160"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Equals</td>
    <td>"161"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Left Parenthesis</td>
    <td>"162"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Right Parenthesis</td>
    <td>"163"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Up</td>
    <td>"19"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Down</td>
    <td>"20"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Left</td>
    <td>"21"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Right</td>
    <td>"22"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Center</td>
    <td>"23"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Move Home</td>
    <td>"122"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Move End</td>
    <td>"123"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Page Up</td>
    <td>"92"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Page Down</td>
    <td>"93"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Insert</td>
    <td>"124"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Forward Delete</td>
    <td>"112"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Clear</td>
    <td>"28"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Blue</td>
    <td>"10027"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Orange</td>
    <td>"10028"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Grey</td>
    <td>"10029"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Alt</td>
    <td>"10030"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Control</td>
    <td>"10031"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Shift</td>
    <td>"10032"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Shift</td>
    <td>"59"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Shift</td>
    <td>"60"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Alt</td>
    <td>"57"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Alt</td>
    <td>"58"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Control</td>
    <td>"113"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Control</td>
    <td>"114"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Meta Left</td>
    <td>"117"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Meta Right</td>
    <td>"118"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Caps Lock</td>
    <td>"115"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Num Lock</td>
    <td>"143"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Scroll Lock</td>
    <td>"116"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>SysRq</td>
    <td>"120"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Break</td>
    <td>"121"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Function</td>
    <td>"119"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Plus</td>
    <td>"81"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Minus</td>
    <td>"69"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Equals</td>
    <td>"70"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Bracket</td>
    <td>"71"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Bracket</td>
    <td>"72"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Grave</td>
    <td>"68"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Slash</td>
    <td>"76"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Backslash</td>
    <td>"73"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Semicolon</td>
    <td>"74"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Apostrophe</td>
    <td>"75"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Comma</td>
    <td>"55"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Period</td>
    <td>"56"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Star</td>
    <td>"17"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Pound</td>
    <td>"18"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>At</td>
    <td>"77"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Back</td>
    <td>"4"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Forward</td>
    <td>"125"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Home</td>
    <td>"3"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Menu</td>
    <td>"82"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Settings</td>
    <td>"176"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Application Switch</td>
    <td>"187"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Calculator</td>
    <td>"210"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Explorer</td>
    <td>"64"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Envelope</td>
    <td>"65"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Bookmark</td>
    <td>"174"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Music</td>
    <td>"209"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Call</td>
    <td>"5"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>End Call</td>
    <td>"6"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Microphone Mute</td>
    <td>"91"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Camera</td>
    <td>"27"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Search</td>
    <td>"84"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Contacts</td>
    <td>"207"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Calendar</td>
    <td>"208"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Up</td>
    <td>"24"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Down</td>
    <td>"25"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Mute</td>
    <td>"164"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Brightness Up</td>
    <td>"221"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Brightness Down</td>
    <td>"220"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Power</td>
    <td>"26"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Sleep</td>
    <td>"223"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Wakeup</td>
    <td>"224"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Headset</td>
    <td>"79"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Push-to-talk</td>
    <td>"228"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Camera Focus</td>
    <td>"80"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Play/Pause</td>
    <td>"85"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Stop</td>
    <td>"86"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Next</td>
    <td>"87"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Previous</td>
    <td>"88"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Rewind</td>
    <td>"89"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Fast-Forward</td>
    <td>"90"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Play</td>
    <td>"126"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Pause</td>
    <td>"127"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Close</td>
    <td>"128"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Eject</td>
    <td>"129"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Record</td>
    <td>"130"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L1</td>
    <td>"102"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R1</td>
    <td>"103"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L2"</td>
    <td>"104"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R2</td>
    <td>"105"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button A</td>
    <td>"96"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button B</td>
    <td>"97"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button C</td>
    <td>"98"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button X</td>
    <td>"99"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button Y</td>
    <td>"100"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button Z</td>
    <td>"101"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Thumb Button</td>
    <td>"106"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Thumb Button</td>
    <td>"107"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Start Button</td>
    <td>"108"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Select Button</td>
    <td>"109"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Mode Button</td>
    <td>"110"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 1</td>
    <td>"188"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 2</td>
    <td>"189"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 3</td>
    <td>"190"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 4</td>
    <td>"191"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 5</td>
    <td>"192"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 6</td>
    <td>"193"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 7</td>
    <td>"194"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 8</td>
    <td>"195"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 9</td>
    <td>"196"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 10</td>
    <td>"197"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 11</td>
    <td>"198"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 12</td>
    <td>"199"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 13</td>
    <td>"200"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 14</td>
    <td>"201"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 15</td>
    <td>"202"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 16</td>
    <td>"203"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Zenkaku/Hankaku</td>
    <td>"211"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Eisu</td>
    <td>"212"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Muhenkan</td>
    <td>"213"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Henkan</td>
    <td>"214"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Katakana/Hiragana</td>
    <td>"215"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Yen</td>
    <td>"216"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Ro</td>
    <td>"217"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Kana</td>
    <td>"218"</td>
	<!-- <td></td> -->
  </tr>
</table>
</div>	

###Advanced
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code"

Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not advanced key-code options should be set.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value indicates that advanced options will be set.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"2"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the indicates that advanced options will not be set.</td>
  </tr>
</table>
</div>	

####SHIFT state
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseKeyCodeShiftState

For Blue Key Table mode

* Parm name: BlueKeyCodeShiftState

For Orange Key Table mode

* Parm name: OrangeKeyCodeShiftState

For Grey Key Table mode

* Parm name: GreyKeyCodeShiftState

For Shift Key Table mode

* Parm name: ShiftKeyCodeShiftState

For Control Key Table mode

* Parm name: ControlKeyCodeShiftState

Description: 

>This parm allows you to set the state of the Shift key when the key-code is sent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the will not change the state of the Shift key.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the state of the Shift key to Force On.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will set the state of the Shift key to Force Off.</td>
  </tr>
</table>
</div>

####ALT state
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseKeyCodeAltState

For Blue Key Table mode

* Parm name: BlueKeyCodeAltState

For Orange Key Table mode

* Parm name: OrangeKeyCodeAltState

For Grey Key Table mode

* Parm name: GreyKeyCodeAltState

For Shift Key Table mode

* Parm name: ShiftKeyCodeAltState

For Control Key Table mode

* Parm name: ControlKeyCodeAltState

Description: 

>This parm allows you to set the state of the Alt key when the key-code is sent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the will not change the state of the Alt key.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the state of the Alt key to Force On.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will set the state of the Alt key to Force Off.</td>
  </tr>
</table>
</div>

####CTRL state
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseKeyCodeCtrlState

For Blue Key Table mode

* Parm name: BlueKeyCodeCtrlState

For Orange Key Table mode

* Parm name: OrangeKeyCodeCtrlState

For Grey Key Table mode

* Parm name: GreyKeyCodeCtrlState

For Shift Key Table mode

* Parm name: ShiftKeyCodeCtrlState

For Control Key Table mode

* Parm name: ControlKeyCodeCtrlState

Description: 

>This parm allows you to set the state of the Ctrl key when the key-code is sent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the will not change the state of the Ctrl key.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the state of the Ctrl key to Force On.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will set the state of the Ctrl key to Force Off.</td>
  </tr>
</table>
</div>

####FN state
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseKeyCodeFnState

For Blue Key Table mode

* Parm name: BlueKeyCodeFnState

For Orange Key Table mode

* Parm name: OrangeKeyCodeFnState

For Grey Key Table mode

* Parm name: GreyKeyCodeFnState

For Shift Key Table mode

* Parm name: ShiftKeyCodeFnState

For Control Key Table mode

* Parm name: ControlKeyCodeFnState

Description: 

>This parm allows you to set the state of the Fn key when the key-code is sent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the will not change the state of the Fn key.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the state of the Fn key to Force On.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will set the state of the Fn key to Force Off.</td>
  </tr>
</table>
</div>

###Intent Parms

These parms will be used to configure the details of remapped keys that will send an intent.

####Send Intent
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseSendIntent

For Blue Key Table mode

* Parm name: BlueSendIntent

For Orange Key Table mode

* Parm name: OrangeSendIntent

For Grey Key Table mode

* Parm name: GreySendIntent

For Shift Key Table mode

* Parm name: ShiftSendIntent

For Control Key Table mode

* Parm name: ControlSendIntent

Description: 

>This parm allows you to configure when the intent should be set 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>On key down</td>
    <td>1""</td>
	<td></td>
  </tr>
  <tr>
    <td>On key up</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>On both key down and up</td>
    <td>"3"</td>
	<td></td>
  </tr>
</table>
</div>	

####Intent type
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: Yes

Description: 

>This parm allows you to set the type of the intent that should be sent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Start activity</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Broadcast</td>
    <td>"2"</td>
	<td></td>
  </tr>
</table>
</div>	

####Action
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentAction

For Blue Key Table mode

* Parm name: BlueIntentAction

For Orange Key Table mode

* Parm name: OrangeIntentAction

For Grey Key Table mode

* Parm name: GreyIntentAction

For Shift Key Table mode

* Parm name: ShiftIntentAction

For Control Key Table mode

* Parm name: ControlIntentAction

Description: 

>This parm allows you to specify the action name for the intent that will be sent for a remapped key that will send an intent when it is pressed. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid action name for the intent

####Category
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentCategory

For Blue Key Table mode

* Parm name: BlueIntentCategory

For Orange Key Table mode

* Parm name: OrangeIntentCategory

For Grey Key Table mode

* Parm name: GreyIntentCategory

For Shift Key Table mode

* Parm name: ShiftIntentCategory

For Control Key Table mode

* Parm name: ControlIntentCategory

Description: 

>This parm allows you to specify the category of the intent that will be sent for a remapped key that will send an intent when it is pressed. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid category for the intent

####Package
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent" *AND* the Intent Type is "Start activity"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentPackage

For Blue Key Table mode

* Parm name: BlueIntentPackage

For Orange Key Table mode

* Parm name: OrangeIntentPackage

For Grey Key Table mode

* Parm name: GreyIntentPackage

For Shift Key Table mode

* Parm name: ShiftIntentPackage

For Control Key Table mode

* Parm name: ControlIntentPackage

Description: 

>This parm allows you to specify the package name of the activity that the intent will start. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid package name

####Class
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent" *AND* the Intent Type is "Start activity"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentClass

For Blue Key Table mode

* Parm name: BlueIntentClass

For Orange Key Table mode

* Parm name: OrangeIntentClass

For Grey Key Table mode

* Parm name: GreyIntentClass

For Shift Key Table mode

* Parm name: ShiftIntentClass

For Control Key Table mode

* Parm name: ControlIntentClass

Description: 

>This parm allows you to specify the class of the activity that the intent will start. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid class name

####Data URI
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentUri

For Blue Key Table mode

* Parm name: BlueIntentUri

For Orange Key Table mode

* Parm name: OrangeIntentUri

For Grey Key Table mode

* Parm name: GreyIntentUri

For Shift Key Table mode

* Parm name: ShiftIntentUri

For Control Key Table mode

* Parm name: ControlIntentUri

Description: 

>This parm allows you to specify the URI value for the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this to not be set in the intent.

Parm value input rules: 

* String containing a valid URI value

####MIME type
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentMimeType

For Blue Key Table mode

* Parm name: BlueIntentMimeType

For Orange Key Table mode

* Parm name: OrangeIntentMimeType

For Grey Key Table mode

* Parm name: GreyIntentMimeType

For Shift Key Table mode

* Parm name: ShiftIntentMimeType

For Control Key Table mode

* Parm name: ControlIntentMimeType

Description: 

>This parm allows you to specify the MIME type value for the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid MIME type value

####Extra parameter name
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentStringExtraName

For Blue Key Table mode

* Parm name: BlueIntentStringExtraName

For Orange Key Table mode

* Parm name: OrangeIntentStringExtraName

For Grey Key Table mode

* Parm name: GreyIntentStringExtraName

For Shift Key Table mode

* Parm name: ShiftIntentStringExtraName

For Control Key Table mode

* Parm name: ControlIntentStringExtraName

Description: 

>This parm allows you to specify the extra value name for the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid extra value name

####Extra parameter value
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentStringExtraValue

For Blue Key Table mode

* Parm name: BlueIntentStringExtraValue

For Orange Key Table mode

* Parm name: OrangeIntentStringExtraValue

For Grey Key Table mode

* Parm name: GreyIntentStringExtraValue

For Shift Key Table mode

* Parm name: ShiftIntentStringExtraValue

For Control Key Table mode

* Parm name: ControlIntentStringExtraValue

Description: 

>This parm allows you to specify the extra value for the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid extra value

####Add key event?
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentAddKeyState

For Blue Key Table mode

* Parm name: BlueIntentAddKeyState

For Orange Key Table mode

* Parm name: OrangeIntentAddKeyState

For Grey Key Table mode

* Parm name: GreyIntentAddKeyState

For Shift Key Table mode

* Parm name: ShiftIntentAddKeyState

For Control Key Table mode

* Parm name: ControlIntentAddKeyState

Description: 

>This parm allows you to select whether the key event should be added to the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"0"</td>
	<td>This parm indicates that the key state should be added to the intent.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"1"</td>
	<td>This parm indicates that the key state should not be added to the intent.</td>
  </tr>
</table>
</div>	

####Include additional flags
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseIntentIncludeFlags

For Blue Key Table mode

* Parm name: BlueIntentIncludeFlags

For Orange Key Table mode

* Parm name: OrangeIntentIncludeFlags

For Grey Key Table mode

* Parm name: GreyIntentIncludeFlags

For Shift Key Table mode

* Parm name: ShiftIntentIncludeFlags

For Control Key Table mode

* Parm name: ControlIntentIncludeFlags

Description: 

>This parm allows you to specify the flags that should be included in the intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid flag

###Activity Parms

These parms will be used to configure the details of remapped keys that will launch an activity.

####Application name
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Launch application"

Pivotal parm: No

For Base Key Table mode

* Parm name: BaseLaunchActivityName

For Blue Key Table mode

* Parm name: BlueLaunchActivityName

For Orange Key Table mode

* Parm name: OrangeLaunchActivityName

For Grey Key Table mode

* Parm name: GreyLaunchActivityName

For Shift Key Table mode

* Parm name: ShiftLaunchActivityName

For Control Key Table mode

* Parm name: ControlLaunchActivityName

Description: 

>This parm allows you to specify the activity name of the activity that should be launched. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause this value to not be set in the intent.

Parm value input rules: 

* String containing a valid activity name

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=KeyMappingMgr&os=JB&embed=true"></iframe> 