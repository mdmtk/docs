var menuStrcture = [
	{
		title: 'Help',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'Overview',
				link: '#guide-about',
			},		
			{
				name: 'Quick Start',
				icon: 'fa fa-rocket',
				link: '#guide-tutorials-quickstart',
				
			},
			{
				name: 'MDM Agent',
				icon: '',
				link: '#',
				items: [
					{
						title: 'MDM Agent',
						icon: '',
						items: [
							{
								name: 'Staging a Device',
								link: '#guide-MDM-staging',
							},
							{
								name: 'MDM Persistence',
								link: '#guide-MDM-persistence',
							},
							{
								name: 'Updating the MDM Agent',
								link: '#guide-MDM-updating',
							},
						]
					}
				]
			},
			{
				name: 'MX Management System',
				icon: '',
				link: '#',
				items: [
					{
						title: 'MX Management System',
						icon: '',
						items: [
							{
								name: 'MXMS Overview',
								link: '#guide-MX-overview',
							},
							{
								name: 'MXMS Interface',
								link: '#guide-MX-interface',
							},
						]
					}
				]
			},
			{
				name: 'XML Handling',
				icon: '',
				link: '#',
				items: [
					{
						title: 'XML Handling',
						icon: '',
						items: [
							{
								name: 'MXMS XML Overview',
								link: '#guide-xml-xml_overview',
							},
							{
								name: 'Generation',
								link: '#guide-xml-generate',
							},
							{
								name: 'Submission',
								link: '#guide-xml-submit',
							},
							{
								name: 'Queries',
								link: '#guide-xml-queries',
							},
							{
								name: 'Response Handling',
								link: '#guide-xml-response',
							},
							{
								name: 'Xml Parser',
								link: '#guide-xml-xmlparser',
							}
						]
					}
				]
			},
			{
				name: 'Feature Type Reference',
				icon: 'fa fa-code',
				link: '#',
				items: [
					{
						title: 'Reference',
						icon: 'fa fa-code',
						items: [
							{
								name: 'AccessMgr',
								link: '#guide-csp-access',
							},
							{
								name: 'AnalyticsMgr',
								link: '#guide-csp-analytics',
							},
							{
								name: 'AppMgr',
								link: '#guide-csp-app',
							},
							{
								name: 'AudioVolUIMgr',
								link: '#guide-csp-audiovoluimgr',
							},
							/*{
								name: 'Batch',
								link: '#guide-csp-batch',
							},*/
							{
								name: 'BatteryMgr',
								link: '#guide-csp-batterymgr',
							},
							{
								name: 'BrowserMgr',
								link: '#guide-csp-browser',
							},
							{
								name: 'CameraMgr',
								link: '#guide-csp-camera',
							},
							{
								name: 'CellularMgr',
								link: '#guide-csp-cellular',
							},
							{
								name: 'CertMgr',
								link: '#guide-csp-cert',
							},
							{
								name: 'Clock',
								link: '#guide-csp-clock',
							},
							{
								name: 'ComponentMgr',
								link: '#guide-csp-componentmgr',
							},
						/*	{
								name: 'ConditionMgr',
								link: '#guide-csp-conditionmgr',
							},
						*/	{
								name: 'CspMgr',
								link: '#guide-csp-cspmgr',
							},
							{
								name: 'DevAdmin',
								link: '#guide-csp-devadmin',
							},
							{
								name: 'DhcpOptionMgr',
								link: '#guide-csp-dhcpoptionmgr',
							},
							{
								name: 'DisplayMgr',
								link: '#guide-csp-display',
							},
							{
								name: 'EncryptMgr',
								link: '#guide-csp-encrypt',
							},
							/*{
								name: 'FileMgr',
								link: '#guide-csp-file',
							},*/
							{
								name: 'GprsMgr',
								link: '#guide-csp-gprs',
							},
							{
								name: 'Intent',
								link: '#guide-csp-intent',
							},
							{
								name: 'KeyMappingMgr',
								link: '#guide-csp-keymappingmgr',
							},
							{
								name: 'LicenseMgr',
								link: '#guide-csp-license',
							},
							{
								name: 'MX',
								link: '#guide-csp-mx',
							},
							{
								name: 'PersistMgr',
								link: '#guide-csp-persistence',
							},
							{
								name: 'PowerKeyMgr',
								link: '#guide-csp-powerkey',
							},
							{
								name: 'PowerMgr',
								link: '#guide-csp-power',
							},
							{
								name: 'SdCardMgr',
								link: '#guide-csp-sdcard',
							},
							{
								name: 'SettingsMgr',
								link: '#guide-csp-settings',
							},
							/*{
								name: 'StatusMgr',
								link: '#guide-csp-statusmgr',
							},
							*/{
								name: 'ThreatMgr',
								link: '#guide-csp-threat',
							},
							{
								name: 'TouchMgr',
								link: '#guide-csp-touch',
							},
							{
								name: 'UiMgr',
								link: '#guide-csp-ui',
							},
							{
								name: 'UsbMgr',
								link: '#guide-csp-usb',
							},
							{
								name: 'Wi-Fi',
								link: '#guide-csp-wifi',
							},
							{
								name: 'WirelessMgr',
								link: '#guide-csp-wireless',
							},
							{
								name: 'XmlMgr',
								link: '#guide-csp-xml',
							}
						]
					}
				]
			},
			{
				name: 'Samples',
				icon: 'fa fa-download',
				link: '#',
				items: [
					{
						title: 'Samples',
						icon: 'fa fa-download',
						items: [
							{
								name: 'Sample App',
								link: '#guide-samples-SimpleMdmToolkitSample',
							},
							{
								name: 'Query Sample App',
								link: '#guide-samples-SimpleMdmToolkitQuery',
							},
						]
					}
				]
			},
			{
				name: 'Remote Control',
				link: '#guide-remotecontrol'
			},
			{
				name: 'FAQ',
				link: '#guide-faq'
			},
			{
				name: 'Using This Help',
				link: '#guide-abouthelp',
				icon: 'fa fa-question-circle'
			}
		]
	}
];