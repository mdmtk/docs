#SimpleMdmToolkitQuery Test App

##Overview

The SimpleMdmToolkitQuery test app can be used to send Request XML Documents which contain queries to the MXMS. This would allow you to receive back information about the current settings on the device.

##Sample Location

The SimpleMdmToolkitQuery test app can be found in the `[MDM Install folder]\Samples\SimpleMdmToolkitQuery` folder.

##Instructions

1. Import the SimpleMdmToolkitQuery test app into Eclipse.
2. Create an XML file containing the Request XML Document that contains the query that you would like to send.
3. Place this XML inside the test app's assets folder.
4. In Eclipse, open the MainActivity class that is located in the `com.symbol.simplemdmtoolkitquery` package.
5. Create a new method in this class which will use the XML that was created in Step 2, send it to MXMS, and output the result to LogCat in Eclipse. The other methods in this class demonstrate how to do this, such as:

		:::java
		// Function to query MX version(s)
		private void queryMX()
		{
			// Check to see if the MXMS is successfully bound and ready to accept XML
			// Note: Once the binding complete notification (previous code) is passed on, this function will return true
			//       Depending on where this code is called from, this check may or may not be required, but never hurts.
			if ( SymbolBrand.MXMS.isReady() )
			{
				Log.d(m_activity.getApplicationInfo().name,"MXMS.isReady");

				// Extract an XML snippet from the application assets
				String inXml = XmlParser.getAssetXml(m_activity,"mx.in3.xml");
				
				// If the XML was successfully obtained
				if ( inXml != null )
				{
					Log.d(m_activity.getApplicationInfo().name,"inXml = "+inXml);

					// Submit the XML to the MXMS for processing
					// Note: This will FAIL unless SymbolBrand.MXMS.isReady(), indicating that the binding to the MXMS has completed successfully
					String outXml = SymbolBrand.MXMS.submitXml(inXml);

					// If we got back result XML
					// Note: A null result XML is what happens when the binding to the MXMS has NOT completed successfully
					if ( outXml != null )
					{
						Log.d(m_activity.getApplicationInfo().name,"outXml = "+outXml);

						String queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","MXMFVersion"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"MXMF version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no MXMF version");
						}

						queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","Version"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"Version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no version");
						}
					}
					else
					{
						Log.d(m_activity.getApplicationInfo().name,"MX query returned no results");
					}
				}
			}
		}

	>**Note:** If you would like to base your method off of the queryMX method, make sure to edit the name of the XML that is used in the inXml instantiation to match the name of the XML that you would like to use.

6. Invoke your method from the onServiceConnected method.
7. Run the program while a Zebra Android device is connected to the computer with a USB cable and ADB is enabled on it. This will submit the query to MXMS.
8. The Result XML Document that was returned from MXMS will be output to the LogCat log messages in Eclipse. This will show the result of the query that was performed, containing the information that was requested.