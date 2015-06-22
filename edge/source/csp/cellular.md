# CellularMgr

## About CellularMgr

### Overview

The Cellular Manager feature allows you to configure options of the  cellular radio on your device. 

### Main Functionality

* Turn off Data Roaming 
* Turn on Data Roaming 
* Turn on Background Data
* Turn off Background Data

##Example XML
### Turn Off Data Roaming and Background Data
	:::xml
	<wap-provisioningdoc>
		<characteristic type="CellularMgr" version="4.3" >
			<parm name="DataRoamingState" value="2"/>
			<parm name="BackgroundDataState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CellularMgr&os=JB&embed=true"></iframe> 