# MX

## About MX

### Overview

The MX Feature Type is used to record the version number of the MXMF. The main functionality of this Feature Type is to return this value when it receives a Request XML document that contains a top-level characteristic query for "MX". This Feature Type can also return its own version number by receiving a Request XML document that contains a parm-query for "MX".

### Main Functionality

* Queries for the MXMF version number

##Parameter Notes
###Version
Parm name: Version

Description:

>This is the version of the MX Feature Type that is returned when a Request XML document that contains a parm-query for "MX" is received.

###MXMF Version
Parm name: MXMFVersion

Description:

>This is the version of MXMF that is returned when a Request XML document that contains a top-level characteristic query for "MX" is received.

## Queries
###MX Feature Type Version Query

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX">
			<parm-query name="Version"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX" version="4.4">
			<parm name="Version" value="4.4.3.6"/>
		</characteristic>
	</wap-provisioningdoc>

###MXMF Version Query

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="MX"/>
	</wap-provisioningdoc>
	
Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX" version="4.4">
			<parm name="MXMFVersion" value="4.4.3.6"/>
		</characteristic>
	</wap-provisioningdoc>
	
## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=MX&os=JB&embed=true"></iframe> 