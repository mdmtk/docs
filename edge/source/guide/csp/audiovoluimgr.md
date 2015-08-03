# AudioVolUIMgr

## About AudioVolUIMgr

### Overview
The AudioVolUIMgr Feature Type is used to manage the device's current volume mode and manage the appearance and settings of the customizable Audio UI screen, which is accessible when pressing the physical volume buttons on the device or by going to the Volumes screen in the Android Settings app. 

The settings for the Audio UI screen are customized through the use of Audio UI Profiles, which are created and managed through the AudioVolUIMgr. Each Profile can configure the following streams either individually or collectively:

* STREAM_MUSIC - The Android audio stream for music playback.
* STREAM_RING - The Android audio stream for the phone ring. 
* STREAM_NOTIFICATION - The Android audio stream for notifications. 
* STREAM_SYSTEM - The Android audio stream for system sounds.
* STREAM_ALARM - The Android audio stream for alarms.
* STREAM_VOICE_CALL - The Android audio stream for phone calls.
* Decode Beep Virtual Volume Scale - This is a custom stream for Zebra devices, which controls the volume of the scanner beep sound.

For each of the above streams, the following settings can be configured:

* Label - The label for the stream that will be seen in the Audio UI.
* Icon - The icon image for the stream that will be seen in the Audio UI.
* Visibility - Each individual stream can be set to be visible or not. This could be useful in situations where it may be beneficial to prevent a user from having the ability to adjust the volumes of certain audio streams. For example, preventing an employee from lowering the ring tone volume.
* Minimum volume level - The minimum volume level that can be set for the stream.
* Maximum volume level - The maximum volume level that can be set for the stream.
* Preset volume level - The preset volume level that can be set for the stream.

Also, the minimum, maximum, and preset volume levels can be set for each of the four audio modes:

* Speaker
* Receiver
* Wired headset
* Bluetooth headset

>**Note:** The custom Audio UI which the AudioVolUIMgr configures is only available on rebranded Zebra devices.

### Main Functionality
* Set the device to Mute mode
* Set the device to Vibrate mode
* Set the device to Unmute mode
* Create a new Audio UI Profile
* Remove an Audio UI Profile
* Set an Audio UI Profile as the current Profile
* Adjust the Preset volume level of the current Profile
* Set the FactoryPreset Profile to the current Profile

##Parameter Notes
###Mute/Vibrate State
Pivotal parm: No

Parm name: MuteVibrateState

Description: 

>Select whether to mute the device, set the device to vibrate, or unmute the device.

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
	<td>This will not change the current volume mode of the device.</td>
  </tr>
  <tr>
    <td>Mute - Turn off audible sounds</td>
    <td>"1"</td>
	<td>This will set the device to mute, meaning there will be no audible sounds.</td>
  </tr>
  <tr>
    <td>Vibrate - Turn off audible sounds and turn on vibrate</td>
    <td>"2"</td>
	<td>This will set the device to vibrate mode.</td>
  </tr>
  <tr>
    <td>UnMute - Turn on audible sounds</td>
    <td>"3"</td>
	<td>This will unmute the device.</td>
  </tr>
</table>
</div>	

###Current Active Profile Action
Pivotal parm: Yes

Description: 

>These actions are used to affect the Audio UI Profile that is the current Profile that is being used by the Audio UI screen. With this feature, an Audio UI Profile that has already been created on the device can be selected to be used, which can change the appearance and settings of the Audio UI. 

>Also, this feature could be used to adjust the volume of the device to be the same level as the current Profile's Preset volume levels.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This will not change the Profile that is currently being used on the device.</td>
  </tr>
  <tr>
    <td>Set an Audio UI Profile as the current Profile</td>
    <td>"1"</td>
	<td>This will set the current Profile to a specified Audio UI Profile that has been already saved on the device.</td>
  </tr>
  <tr>
    <td>Adjust to the Preset volume level of the current Profile</td>
    <td>"2"</td>
	<td>This will adjust the volume of the device to be the same level as the current Profile's Preset volume levels.</td>
  </tr>
  <tr>
    <td>Set the FactoryPreset Profile as the current Profile</td>
    <td>"3"</td>
	<td>This will set the current Audio UI Profile to the FactoryPreset Profile that is built into the device, which contains the default settings.</td>
  </tr>
</table>
</div>	

####Name of the Current Audio UI Profile
Settable if: The Current Profile Action is "Set an Audio UI Profile as the current Profile"

Pivotal parm: No

Parm name: CurrentProfileName

Description: 

>This is the name of the Audio UI Profile that will be set as the current Profile that is used by the Audio UI. The Profile that is entered must be a Profile that already exists on the device.

Parm value input rules: 

* String that has a minimum size of 1 character and a maximum size of 255 characters

####Adjust current audio volume
Settable if: The Current Profile Action is "Set an Audio UI Profile as the current Profile"

Pivotal parm: No

Parm name: SetCurrentProfileOption

Description: 

> When setting the current Audio UI Profile, this parm will indicate whether the device's current volume levels should be changed to this Profile's Preset volume levels for all of the different streams.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not adjust the volume level</td>
    <td>"1"</td>
	<td>This indicates that the device's volume levels should not be altered when setting an Audio UI Profile to the current Profile.</td>
  </tr>
  <tr>
    <td>Adjust the volume level</td>
    <td>"2"</td>
	<td>This indicates that the device's volume levels should be adjusted to the selected Audio UI Profile's Preset volume levels.</td>
  </tr>
</table>
</div>	

###Audio UI Profile Action
Pivotal parm: Yes

Description: 

>These actions will add or remove Audio UI Profiles that are on the device. These Profiles are used to set each settable option, such as the icon image and maximum and minimum allowed volumes, for each audio stream, such as multimedia volume and ring tone volume, that is available on the device. These options can visually affect the device's Audio UI screen, which is accessible when pressing the physical volume buttons on the device or by going to the Volumes screen in the Android Settings app.

>When a profile is made, it is saved on the device. It could be set to the current Active UI Profile through the use of the Current Active Profile Action feature. 

>This parm can also be used to remove a Audio UI Profile. The Profile would be removed from the device and can no longer be used Audio UI.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This will not add or remove an Audio UI Profile.</td>
  </tr>
  <tr>
    <td>Add an Audio UI Profile</td>
    <td>"1"</td>
	<td>This will create a new Audio UI Profile containing the information that is entered for the parms below.</td>
  </tr>
  <tr>
    <td>Remove an Audio UI Profile</td>
    <td>"2"</td>
	<td>This will remove a specified Audio UI Profile that was previously saved on the device so that it can no longer be used by the Audio UI.</td>
  </tr>
</table>
</div>	

####Name of the Audio UI Profile
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile" or "Remove an Audio UI Profile"

Pivotal parm: No

Parm name: ProfileName

Description: 

>This is the name of the Audio UI Profile. 

>When adding a new Profile, this will be the name that is assigned to it, which must be unique for each Profile that is on the device. If a ProfileName is entered that is the same name as a Profile that is already on the device, the new profile that is created will overwrite the previous Profile. This name is the same name that would be used by the CurrentProfileName feature when setting the current Profile to use. 

>When removing an Audio UI Profile, this name will be used to identify the Profile to delete from the device.

>**Note:** This value cannot be "FactoryPreset" since this is a reserved name for the FactoryPreset Profile that is built into the device.

Parm value input rules: 

* String that has a minimum size of 1 character and a maximum size of 255 characters

####UI Label of STREAM_MUSIC
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Label

Description: 

>This will set a customized label for the music volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Provide the URL to the icon image for the music stream
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Icon

Description: 

>This will set a custom icon for the music volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Ctrl

Description: 

>This value will indicate whether or not the music stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the music stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the music stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the music stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the music stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the music stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the music stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the music stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the music stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the music stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_RING
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Label

Description: 

>This will set a customized label for the ring tone volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_RING
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Icon

Description: 

>This will set a custom icon for the ring tone volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Ctrl

Description: 

>This value will indicate whether or not the ring tone stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the ring tone stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the ring tone stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the ring tone stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the ring tone stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the ring tone stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the ring tone stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the ring tone stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the ring tone stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the ring tone stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_NOTIFICATION
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_Label

Description: 

>This will set a customized label for the notification volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_NOTIFICATION
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: 

Description: 

>This will set a custom icon for the notification volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_Ctrl

Description: 

>This value will indicate whether or not the notification stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the notification stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the notification stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the notification stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the notification stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the notification stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the notification stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the notification stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the notification stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the notification stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_SYSTEM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Label

Description: 

>This will set a customized label for the system volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_SYSTEM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Icon

Description: 

>This will set a custom icon for the system volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Ctrl

Description: 

>This value will indicate whether or not the system stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the system stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_ALARM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Label

Description: 

>This will set a customized label for the alarm volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_ALARM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Icon

Description: 

>This will set a custom icon for the alarm volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Ctrl

Description: 

>This value will indicate whether or not the alarm stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the alarm stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the alarm stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the alarm volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the alarm stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the alarm stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the alarm volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the alarm stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the system stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the system stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_VOICECALL
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Label

Description: 

>This will set a customized label for the voice call volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_VOICECALL
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Icon

Description: 

>This will set a custom icon for the voice call volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Ctrl

Description: 

>This value will indicate whether or not the voice call stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the voice call stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the voice call stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the voice call stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the voice call stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the voice call stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the voice call stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the voice call stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the voice call stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the voice call stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of Decode Beep Virtual Volume Scale
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Label

Description: 

>This will set a customized label for the decode beep virtual volume stream in the Audio UI.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of Decode Beep Virtual Volume Scale
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Icon

Description: 

>This will set a custom icon for the decode beep virtual volume stream in the Audio UI. This must be the URL for an image file that is on the device. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Specify whether the stream is visible (1) or not (0) to the user
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Ctrl

Description: 

>This value will indicate whether or not the decode beep virtual stream will be visible in the Audio UI. If the stream is not visible in the app, the user will not be able to set the volume of this stream from the UI. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1" or "0", which will make the decode beep virtual stream visible or hidden respectively.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AudioVolUIMgr&os=JB&embed=true"></iframe> 