# CspMgr

## About CspMgr

### Overview

The CspMgr Feature Type is used by the Mx Management Framework to maintain records of the Feature Types, which are required to submit their registration information to the CspMgr when the device boots up after an Enterprise or Factory Reset.

For MDMs, the main functionality of the CspMgr Feature Type that would be of use would be its queries. By submitting a Request XML document which contains a Top-Level Query to the CspMgr, an enumerated list of all of the registered Feature Types on the device will be returned with parms containing information about the Feature Type. This will indicate which Feature Types have registered with the CspMgr and which are available to be used.

### Main Functionality

* Queries for the current registered Feature Types

##Parameter Notes
###Characteristic
Parm name: characteristic

Description: 

>This parm will contain the Top Level Characteristic (TLC) of each of the registered Feature Types. These are the TLC values that will be used in Request XML documents for the Feature Type that you want to use.

###Package
Parm name: package

Description: 

>This parm will contain the Android Package Name of each of the registered Feature Types.

###Class
Parm name: class

Description: 

>This parm will contain the Android Class Name of each of the registered Feature Types.

##Queries

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="CspMgr"/>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.accessmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.accessmgr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AppMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.appmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.appmgr.MxAppMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AudioVolUIMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.audiovoluimgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.audiovoluimgr.MxAudioVolUICSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CertMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.certmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.certmgr.MxCertManagerService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Clock"/>
				<parm name="package" value="com.symbol.mxmf.csp.clock"/>
				<parm name="class" value="com.symbol.mxmf.csp.clock.MxCSPClockService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Intent"/>
				<parm name="package" value="com.symbol.mxmf.csp.intent"/>
				<parm name="class" value="com.symbol.mxmf.csp.intent.MxIntentCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="MX"/>
				<parm name="package" value="com.symbol.mxmf.csp.mx"/>
				<parm name="class" value="com.symbol.mxmf.csp.mx.MxVersionCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PersistMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.persistmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.persistmgr.MxPersistCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="XmlMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.xmlmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.xmlmgr.MxXmlMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AnalyticsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.analyticsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.analyticsmgr.AnalyticsMgrService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Batch"/>
				<parm name="package" value="com.symbol.mxmf.csp.batch"/>
				<parm name="class" value="com.symbol.mxmf.csp.batch.BatchCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="BatteryMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.batterymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.batterymgr.MxBatteryMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="BrowserMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.browsermgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.browsermgr.MxBrowserMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CameraMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.cameramgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.cameramgr.MxCameraCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CellularMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.cellularmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.cellularmgr.MxCellularMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="ComponentMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.componentmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.componentmgr.MxComponentMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DevAdmin"/>
				<parm name="package" value="com.symbol.mxmf.csp.devadmin"/>
				<parm name="class" value="com.symbol.mxmf.csp.devadmin.MxDevAdminCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DhcpOptionMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.dhcpoptionmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.dhcpoptionmgr.MxDhcpOptionMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DisplayMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.displaymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.displaymgr.MxDisplayMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="EncryptMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.encryptmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.encryptmgr.MxEncryptMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="FileMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.filemgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.filemgr.FileMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="GprsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.gprsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.gprsmgr.GPRSMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="KeyMappingMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.keymappingmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.keymappingmgr.MxKeyMappingMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="LicenseMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.licensemgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.licensemgr.LicenseMgrService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerKeyMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.powerkeymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.powerkeymgr.MxPowerKeyMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.powermgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.powermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SdCardMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.sdcardmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.sdcardmgr.MxSdCardMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SettingsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.settingsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.settingsmgr.MxSettingsMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Stats"/>
				<parm name="package" value="com.symbol.mxmf.csp.stats"/>
				<parm name="class" value="com.symbol.mxmf.csp.stats.MxStatsCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="ThreatMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.threatmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.threatmgr.MxThreatMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="TouchMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.touchmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.touchmgr.TouchMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.uimgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.uimgr.MxUiMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UsbMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.usbmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.usbmgr.MxUsbMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Wi-Fi"/>
				<parm name="package" value="com.symbol.mxmf.csp.wifi"/>
				<parm name="class" value="com.symbol.mxmf.csp.wifi.MxWifiConfigCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="WirelessMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.wirelessmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.wirelessmgr.MxWirelessMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>



## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CspMgr&os=JB&embed=true"></iframe> 