#SimpleMdmToolkitQuery Test App

##Overview

The SimpleMdmToolkitQuery test app can be used to send Request XML Documents which contain queries to the MXMS. This would allow you to receive back information about the current settings on the device.

##Sample Location

The SimpleMdmToolkitQuery test app can be found in the `[MDM Install folder]\Samples\SimpleMdmToolkitQuery` folder.

##Instructions

1. Import the SimpleMdmToolkitQuery test app into Eclipse.
2. Create an XML file containing the Request XML Document that contains the query that you would like to send.
3. Place this XML file inside of the test app's assets folder.
4. In Eclipse, open the MainActivity class that is located in the `com.symbol.simplemdmtoolkitquery` package.
5. Create a new method in this class. In this method, call the doQuery method and include the name of the XML file that was created in Step 2 as an input parameter. The doQuery method will take the contents of that XML file, submit it to MXMS and output the result to LogCat in Eclipse and to a new file on the device at this location: `/sdcard/Query.txt`

	For example, your method should contain this method call with the XML you want to submit:

		:::java
		String outXml = doQuery("mx.in3.xml");



6. If you would like to programmatically check the results of the Result XML Document after it is returned from MXMS, the XmlParser class's fetchParm method can be used in your method to do this. You may want to add more log messages to LogCat here as well.

	Examples of completed methods can be found in the MainActivity class, such as:

		:::java
		// Function to query MX version(s)
		private void queryMX()
		{
			//String outXml = doQuery("mx.in1.xml");
			//String outXml = doQuery("mx.in2.xml");
			String outXml = doQuery("mx.in3.xml");
			
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
					Log.i(m_activity.getApplicationInfo().name,"MX query returned no MXMF version");
				}

				queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","Version"));

				if (queryVersion != null )
				{
					Log.i(m_activity.getApplicationInfo().name,"Version = " + queryVersion);
				}
				else
				{
					Log.i(m_activity.getApplicationInfo().name,"MX query returned no version");
				}
			}
		}

	>**Note:** If you would like to base your method off of the queryMX method, make sure to edit the name of the XML that is used in the inXml instantiation to match the name of the XML that you would like to use.

7. Invoke your method from the onServiceConnected method.
8. Run the program while a Zebra Android device is connected to the computer with a USB cable and ADB is enabled on it. This will submit the query to MXMS.
9. The Result XML Document that was returned from MXMS will be output to the LogCat log messages in Eclipse and to the `/sdcard/Query.txt` file. This will show the result of the query that was performed, containing the information that was requested.
	
	>**Note:** If the Result XML Document that is output is too long, this string may be truncated in LogCat, preventing you from seeing the whole result. To view the entire Result XML Document, please see the text file that was created by the doQuery method.