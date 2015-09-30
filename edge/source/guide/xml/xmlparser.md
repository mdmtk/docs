# XML Parser 

## Overview

The XML Parser class is a Java class for assisting with MXMS XML on Android. This class is available in the SimpleMdmToolkitSample and SimpleMdmToolkitQuery projects that are included in the MDM Toolkit. These projects can be found in the "Samples" folder of the MDM Toolkit.

The XML Parser class has been developed to assist in starting MXMS development and to offer suggestion as to how your application might process MXMS XML. Your application does not need to use the XML Parser class. It is up to your development teams to determine the best way for your application to handle MXMS XML for your needs. 

## Main Features

### Validate Set Responses

The XML Parser class can assist you in validating responses from MXMS through the help of the `isXmlEquivalent` function. When an MXMS set is successful the response XML should be equivalent to the set XML, besides for white space. To use the `isXmlEquivalent` function pass in the XML string you have submitted to MXMS and the XML string response from MXMS. If the XML is equivalent, the function will return `true` if not it will return `false`. If the function  returns `false` it should contain error parms or characteristics.

For Example:

    :::java
    //Check for Errors
    Boolean isXmlGood = XmlParser.isXmlEquivalent(XML, resXML);

### Validate Query Responses 

The XML Parser class assist you in validating query responses from MXMS through the help of the `isQueryXmlResponseValid` function. You can pass in the response XML from MXMS and if the XML is error free it will return `true` if there is an error it will return `false`. 

For Example:

    :::java
    //Check for Errors
	Boolean isXmlGood = XmlParser.isQueryXmlResponseValid(resXML);

### Counting Errors in Response XML

The XML Parser class helps you count the number of errors in the XML returned from the MXMS through the use of the function `countCharErrors` and `countParmErrors`. Both functions take in the response XML string from MXMS and return the number of errors of their specified type. 

For Example: 

    :::java
    //Count Errors 
    int charErrors = XmlParser.countCharErrors(resXML);
    int parmErrors = XmlParser.countParmErrors(resXML);

### Modifying XML Documents

The XML Parser class helps you modify MXMS XML. For example you can use it to replace values in a template XML with values given to your program through a user input. The function `replaceParms` allows you to specify the XML string to modify, the list of MXMS parm values to set, and outputs the updated XML string. 

For Example:

    :::java
    //Setup parm value
	ParmValue parmValue = new ParmValue("charType", "parmName", "value");
	    				 
	//Setup parm value array list
	ArrayList<ParmValue> parmValues = new ArrayList<ParmValue>();
	    				 
	//Add parm value
	parmValues.add(parmValue);
	    				 
	//Modify XML
	String newXML = XmlParser.replaceParms(xml, parmValues);

### Reading XML Documents

The XML Parser class helps you read MXMS XML through the use of the `fetchParms` function. For example you can use this function to confirm parm values in set XML or read parm values in query xml. To use this function pass in the XML and a list of parm selectors, and the function will return an array list of parm values. 

For Example:

    :::java
    //Setup parm selector
	ParmSelector parmSelector = new ParmSelector("charType", "parmName");
	    				 
	//Setup parm value array list
	ArrayList<ParmSelector> parmSelectors = new ArrayList<ParmSelector>();
	    				 
	//Add parm value
	parmSelectors.add(parmSelector);
	    				 
	//Get parm values
	ArrayList<ParmValue> parmValues = XmlParser.fetchParms(xml, parmSelectors);

## Main Methods

### boolean isXmlEquivalent(String inXml,String outXml)

Function for comparing if two MXMS XML's are equivalent, this can be used for validating set results

**Parameters:**

**inXml-** XML submitted to MXMS

**outXml-** XML revived from MXMS

**Returns:** boolean- True if XML is equivalent false if XMLs are different 

### boolean isQueryXmlResponseValid(String resXml)

Checks Query response XML for Errors

**Parameters:**

**resXml**- XML to check for errors

**Returns:** boolean- True for no errors false for errors 

### String formatXml(String xml)

Formats XML to eliminate XML formatting issues in XML Nodes

**Parameters:**

**xml**- XML to format

**Returns:** String- Cleaned XML

### int countCharErrors(String xml)

Counts the number of characteristic errors in a block of MXMS XML

**Parameters:**

**xml**- XML to count errors on

**Returns:** int- Number of errors

### int countParmErrors(String xml)

Counts the number of parm errors in a block of MXMS XML

**Parameters:**

**xml**- XML to count errors on

**Returns:** int- Number of errors

### String getParmQuery(String charType,String parmName)

Helper function for creating a parm query

**Parameters:**

**charType**- Characteristic type

**parmName**- Parm Name to query 

**Returns:** String- MXMS query XML

### String getCharQuery(String charType)

Helper function for creating a characteristic query

**Parameters:** 

**charType**- Characteristic type

**Returns:** String- MXMS query XML

### String replaceParms(String xml,ArrayList<ParmValue> values)

Updates XML with specified parm changes 

**Parameters:**

**xml**- XML to update

**values**- Values to replace

**Returns:** String- Updated XML

###  ArrayList<ParmValue> fetchParms(String xml,ArrayList<ParmSelector> selectors)

Find parm value in xml

**Parameters:**

**xml**- XML to find parms in

**selectors**- Parm selectors to find 

**Returns:** String- List of parm selector values or null on error

### String fetchParm(String xml,ParmSelector selector)

Find parm value in xml

**Parameters:**

**xml**- XML to find parm in

**selector**- Parm selector

**Returns:** String- Parm value

## XML Parser Class

    :::java
    package com.example.mdmtester;

	import java.io.BufferedReader;
	import java.io.ByteArrayInputStream;
	import java.io.ByteArrayOutputStream;
	import java.io.IOException;
	import java.io.InputStream;
	import java.io.OutputStream;
	import java.io.StringReader;
	import java.util.ArrayList;
	import java.util.Properties;
	import javax.xml.parsers.DocumentBuilderFactory;
	import javax.xml.transform.OutputKeys;
	import javax.xml.transform.Transformer;
	import javax.xml.transform.TransformerFactory;
	import javax.xml.transform.dom.DOMSource;
	import javax.xml.transform.stream.StreamResult;
	import org.w3c.dom.Document;
	import org.w3c.dom.NamedNodeMap;
	import org.w3c.dom.Node;
	import android.app.Activity;
	import android.content.res.AssetManager;

	/** 
	 * Helper class for working with MXMS XML
	 */
	public class XmlParser
	{
		//Variables
		static private ArrayList<ParmSelector> m_selectors;
		static private ArrayList<ParmValue> m_values;
		static private String m_fetchParm;
		static private int m_countCharErrors;
		static private int m_countParmErrors;
		static private String m_char;

		/**
		 * Takes in a list of parm selectors and returns the value for that parm 
		 * @param xml XML to find parms in
		 * @param selectors Parm selectors to find 
		 * @return List of parm selector values or null on error
		 */
		static public ArrayList<ParmValue> fetchParms(String xml,ArrayList<ParmSelector> selectors)
		{
			if ( xml == null ) return null;
			if ( selectors == null ) return null;
			if ( selectors.size() == 0 ) return null;
			
			DocParser parser = new DocParser(xml)
			{
				@Override public boolean test(Node node)
				{
					if ( isChar(node) && !isChar(node.getParentNode()) ) m_char = getCharType(node);
					return isParm(node);
				}
				@Override public void process(Node node)
				{
					String name = getParmName(node); if ( name == null ) return;
					for(ParmSelector selector:m_selectors)
					{
						if ( ( selector != null ) && selector.getParmName().equalsIgnoreCase(name) )
						{
							String charType = selector.getCharType(); 
							if ( ( charType != null ) && !charType.equalsIgnoreCase(m_char) ) continue;
							m_values.add(new ParmValue(selector,getParmValue(node)));
						}
					}
				}
			};

			if ( !parser.isValid() ) return null;

			m_char = null;
			m_selectors = selectors;
			m_values = new ArrayList<ParmValue>();
			if ( !parser.parse(null,-1) ) return null; 
			
			return m_values;
		}

		/**
		 * Find parm value in xml
		 * @param xml XML to find parm in
		 * @param selector Parm selector
		 * @return Parm value
		 */
		static public String fetchParm(String xml,ParmSelector selector)
		{
			if ( xml == null ) return null;
			if ( selector == null ) return null;
			
			DocParser parser = new DocParser(xml)
			{
				@Override public boolean test(Node node) { return isParm(node); }
				@Override public void process(Node node) { m_fetchParm = getParmValue(node); }
			};

			if ( !parser.isValid() ) return null;

			m_fetchParm = null;
			if ( !parser.parse(null,-1) ) return null; 
			
			return m_fetchParm;
		}
		
		/**
		 * Updates XML with specified parm changes 
		 * @param xml XML to update
		 * @param values Values to replace
		 * @return Updated XML
		 */
		static public String replaceParms(String xml,ArrayList<ParmValue> values)
		{
			if ( values == null ) return null;
			
			DocParser parser = new DocParser(xml)
			{
				@Override public boolean test(Node node)
				{
					if ( isChar(node) )
						if ( !isChar(node.getParentNode()) )
							m_char = getCharType(node);
					
					return isParm(node);
				}
				@Override public void process(Node node)
				{
					String name = getParmName(node); if ( name == null ) return;
					for(ParmValue value:m_values)
					{
						if ( ( value != null ) && value.getParmName().equalsIgnoreCase(name) )
						{
							String charType = value.getCharType(); 
							if ( ( charType != null ) && !charType.equalsIgnoreCase(m_char) ) continue;
							replaceParmValue(node,value);
						}
					}
				}
			};

			if ( !parser.isValid() ) return null;

			m_values = values;
			if ( !parser.parse(null,-1) ) return null; 
			
			return parser.toXml(false);
		}
		
		/**
		 * Helper function for creating a characteristic query
		 * @param charType Characteristic type
		 * @return MXMS query XML 
		 */
		static public String getCharQuery(String charType)
		{
			if ( charType == null ) return null;
			
			return "<wap-provisioningdoc><characteristic-query type=\"" + charType + "\" /></wap-provisioningdoc>";
		}

		/**
		 * Helper function for creating a parm query
		 * @param charType Characteristic type
		 * @param parmName Parm Name to query 
		 * @return MXMS query XML 
		 */
		static public String getParmQuery(String charType,String parmName)
		{
			if ( charType == null ) return null;
			if ( parmName == null ) return null;
			
			return "<wap-provisioningdoc><characteristic type=\"" + charType + "\"><parm-query name=\"" + parmName + "\"/>" + "</characteristic></wap-provisioningdoc>";
		}
		
		/**
		 * Reads in input stream and saves the XML to a string 
		 * @param stream Input stream to read XML from 
		 * @return Null on error or XML string on success 
		 */
		public static String readXml(InputStream stream)
		{
			if ( stream == null ) return null;
			
			StringBuilder xml = new StringBuilder();
			byte[] buffer = new byte[256];
			int count;
			
			try { while ( ( count = stream.read(buffer) ) > 0 ) for(int i=0;i<count;i++) xml.append((char)buffer[i]); } catch ( Exception e ) { }
			
			try { stream.close(); } catch ( Exception e ) { }
			
			return xml.toString();
		}

		/**
		 * Counts the number of characteristic errors in a block of MXMS XML
		 * @param xml XML to count errors on 
		 * @return Number of errors 
		 */
		static public int countCharErrors(String xml)
		{
			if ( xml == null ) return -1;
			
			DocParser parser = new DocParser(xml)
			{
				@Override public boolean test(Node node) { return isChar(node); }
				@Override public void process(Node node) { if ( isError(node) ) m_countParmErrors++; }
			};
			if ( !parser.isValid() ) return -2;
			
			m_countParmErrors = 0;
			if ( !parser.parse(null,-1) ) return -3; 
			
			return m_countParmErrors;
		}
		
		/**
		 * Counts the number of parm errors in a block of MXMS XML
		 * @param xml XML to count errors on 
		 * @return Number of errors 
		 */
		static public int countParmErrors(String xml)
		{
			if ( xml == null ) return -1;
			
			DocParser parser = new DocParser(xml)
			{
				@Override public boolean test(Node node) { return isParm(node); }
				@Override public void process(Node node) { if ( isError(node) ) m_countCharErrors++; }
			};
			if ( !parser.isValid() ) return -2;
			
			m_countCharErrors = 0;
			if ( !parser.parse(null,-1) ) return -3; 
			
			return m_countCharErrors;
		}

		/** 
		 * Formats XML to eliminate XML formatting issues in XML Nodes
		 * @param xml XML to format 
		 * @return Cleaned XML
		 */
		public static String formatXml(String xml)
		{
			if ( xml == null ) return null;
			
			DocParser parser = new DocParser(xml);
			if ( !parser.isValid() ) return null;
			
			return parser.toXml(true);
		}

		/**
		 * Function for comparing if two MXMS XML's are equivalent. This can be used for validating set results.
		 * @param inXml XML submitted to MXMS 
		 * @param outXml XML revived from MXMS
		 * @return True if XML is equivalent false if XMLs are different 
		 */
		static public boolean isXmlEquivalent(String inXml,String outXml)
		{
			if ( inXml == null ) return false;
			if ( outXml == null ) return false;
			
			return formatXml(trimWhiteSpace(inXml)).equalsIgnoreCase(formatXml(trimWhiteSpace(outXml)));
		}
		
		/**
		 * Checks Query response XML for Errors
		 * @param resXml XML to check for errors 
		 * @return True for no errors false for errors 
		 */
		static public boolean isQueryXmlResponseValid(String resXml)
		{
			if (resXml == null ) return false;
			
			if(resXml.contains("<characteristic-error") || resXml.contains("<characteristic-query-error") || resXml.contains("<parm-error") || resXml.contains("<parm-query-error") )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		
		/**
		 * Removes white space charters from the begging and end of lines in an XML string
		 * @param inputXML XML to clean
		 * @return Cleaned XML
		 */
		private static String trimWhiteSpace(String inputXML) 
		{
			BufferedReader readerBuffer = new BufferedReader(new StringReader(inputXML));
			StringBuffer resultBuffer = new StringBuffer();
			try 
			{
				String xmlLine;
				while ((xmlLine = readerBuffer.readLine()) != null)
				{
					resultBuffer.append(xmlLine.trim());
				}
				return resultBuffer.toString();
			} 
			catch (IOException e) 
			{
				throw new RuntimeException(e);
			}
		}
		
		/** 
		 * Reads an application asset file and loads it into a string
		 * @param activity Activity to get asset for
		 * @param assetName file name
		 * @return XML on success or null on frailer 
		 */
		static public String getAssetXml(Activity activity,String assetName)
		{
			if ( activity == null ) return null;
			if ( assetName == null ) return null;
			
			AssetManager assetManager = activity.getAssets();
			if ( assetManager == null ) return null; 
			
			String readXml = null;
			try { readXml = XmlParser.readXml(assetManager.open(assetName)); } catch ( Exception e) { }
			if ( readXml == null ) return null;
			
			return readXml;
		}
		
		/**
		 * Helper class for selecting xml parms by characteristic type parm name 
		 */
		public static class ParmSelector
		{ 
			//Variables
			protected String m_charType;
			protected String m_parmName;
			
			/**
			 * Creates a new Parm Selector Object
			 * @param selector Existing Parm Selector to duplicate
			 */
			public ParmSelector(ParmSelector selector)
			{
				m_charType = selector.m_charType;
				m_parmName = selector.m_parmName;
			}
			
			/**
			 * Creates a new Parm Selector Object
			 * @param charType Characteristic Type
			 * @param parmName Parm Name
			 */
			public ParmSelector(String charType,String parmName)
			{
				m_charType = charType;
				m_parmName = parmName;
			}
			
			/**
			 * Get the Characteristic Type
			 * @return Characteristic
			 */
			public String getCharType() 
			{ 
				return m_charType; 
			}
			
			/**
			 * Get the Parm Name
			 * @return Parm name
			 */
			public String getParmName() 
			{ 
				return m_parmName; 
			}
		}

		/**
		 * Helper class for holding parm information
		 */
		public static class ParmValue extends ParmSelector
		{
			//Variables
			protected String m_value;
			
			/**
			 * Creates a new Parm value object
			 * @param selector Parm selector object
			 * @param value Parm value
			 */
			public ParmValue(ParmSelector selector,String value)
			{
				super(selector);
				
				m_value = value;
			}

			/**
			 * Creates a new parm value object
			 * @param charType Characteristic Type
			 * @param parmName Parm name
			 * @param value Parm value
			 */
			public ParmValue(String charType,String parmName,String value)
			{
				super(charType,parmName);
				
				m_value = value;
			}
			
			/**
			 * Get parm selector
			 * @return Parm selector 
			 */
			public ParmSelector getSelector() 
			{ 
				return this; 
			}
			
			/**
			 * Get parm value
			 * @return Parm value 
			 */
			public String getValue() 
			{ 
				return m_value; 
			}
		}
		
		/** 
		 * Helper class for parsing MXMS XML documents 
		 */
		private static class DocParser
		{
			//Variables
			private Document m_doc;
			
			/** 
			 * Creates a new instance of the doc parser 
			 * @param xml XML string to parse
			 */
			public DocParser(String xml)
			{
				DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
				dbf.setNamespaceAware(true);
				dbf.setCoalescing(true);
				dbf.setIgnoringElementContentWhitespace(true);
				dbf.setIgnoringComments(true);
				
				try { m_doc = dbf.newDocumentBuilder().parse(new ByteArrayInputStream(xml.getBytes())); } catch ( Exception e) { m_doc = null; }
			}

			/**
			 * Checks if doc is null
			 * @return True if doc is not null false if doc is null 
			 */
			public boolean isValid() 
			{ 
				return ( m_doc != null ); 
			}
			
			/**
			 * Recursive function for processing XML
			 * @param node XML node to process 
			 * @param depth Depth of node
			 * @return Returns true when finished 
			 */
			public boolean parse(Node node,int depth)
			{
				if ( node == null ) { node = m_doc.getFirstChild(); depth--; }
				if ( node == null ) return false;

				while ( node != null )
				{
					if ( node.getNodeType() != Node.TEXT_NODE )
					{
						if ( test(node) ) process(node); 
						
						Node child;
						if ((depth != 0) && ((child = node.getFirstChild()) != null )) 
						{
							if (!parse(child,depth-1))
							{
								return false;
							}
						}
					}
					node = node.getNextSibling();
				}
				return true;
			}
			
			/**
			 * Stub function for testing an XML node. Should be override in real use case.  
			 * @param node XML node to test
			 * @return
			 */
			public boolean test(Node node) 
			{ 
				return false; 
			}
			
			/**
			 * Stub function for processing an XML node. Should be override in real use case.  
			 * @param node XML node to process
			 */
			public void process(Node node) 
			{ 
				
			}
			
			/**
			 * Checks if an XML node is of type characteristic
			 * @param node XML node to check if node is a characteristic 
			 * @return True if XML nod is characteristic
			 */
			public boolean isChar(Node node)
			{
				if ( node == null ) return false;
				String name = node.getNodeName().toLowerCase();
				return ( name.startsWith("characteristic") ); 
			}
			
			/**
			 * Checks if an XML node is of type parm
			 * @param node XML node to check if node is a parm
			 * @return True if XML nod is parm
			 */
			public boolean isParm(Node node)
			{
				if ( node == null ) return false;
				String name = node.getNodeName().toLowerCase();
				return ( name.startsWith("parm") ); 
			}
			
			/**
			 * Checks if an XML node is of type error
			 * @param node XML node to check if node is of type error 
			 * @return True if XML nod is of type error 
			 */
			public boolean isError(Node node)
			{
				if ( node == null ) return false;
				String name = node.getNodeName().toLowerCase();
				return ( name.endsWith("-error") ); 
			}
			
			/**
			 * Checks if an XML node is of type query
			 * @param node XML node to check if node is of type query 
			 * @return True if XML nod is of type query 
			 */
			public boolean isQuery(Node node)
			{
				if ( node == null ) return false;
				String name = node.getNodeName().toLowerCase();
				return ( name.endsWith("-query") ); 
			}
			
			/**
			 * Get the parm name from an XML node
			 * @param node XML node to get parm name from
			 * @return Parm name
			 */
			public String getParmName(Node node)
			{
				if ( !isParm(node) && !isQuery(node) ) return null;
				return getAttrValue(node,"name");
			}
			
			/**
			 * Get the characteristic type from an XML node
			 * @param node XML node to get characteristic type from
			 * @return Characteristic type
			 */
			public String getCharType(Node node)
			{
				if ( !isChar(node) ) return null;
				return getAttrValue(node,"type");
			}
			
			/**
			 * Get the parm value from an XML node
			 * @param node XML node to get parm value from
			 * @return Parm value
			 */
			public String getParmValue(Node node)
			{
				if ( !isParm(node) && !isQuery(node) ) return null;
				return getAttrValue(node,"value");
			}
			
			/**
			 * Replace parm value in XML node
			 * @param node XML node to replace value in
			 * @param value Parm value to set
			 * @return True on successes false on failure
			 */
			public boolean replaceParmValue(Node node,ParmValue value)
			{
				if ( node == null ) return false;
				if ( value == null ) return false;
				if ( !isParm(node) && !isQuery(node) ) return false;
				return setAttrValue(node,"value",value.getValue());
			}
			
			/**
			 * Get the value of an attribute in an XML node
			 * @param node XML Node to get value from
			 * @param name Attribute to get value of
			 * @return Attribute
			 */
			public String getAttrValue(Node node,String name)
			{
				NamedNodeMap map = node.getAttributes(); if ( map == null ) return null;
				Node attr = map.getNamedItem(name); if ( attr == null ) return null;
				return attr.getNodeValue();
			}
			
			/**
			 * Sets attribute value in XML node 
			 * @param node XML Node to set value in 
			 * @param name XML attribute name 
			 * @param value XML attribute value 
			 * @return True on successes false on failure
			 */
			public boolean setAttrValue(Node node,String name,String value)
			{
				if ( node == null ) return false;
				if ( name == null ) return false;
				if ( value == null ) return false;
				
				NamedNodeMap map = node.getAttributes(); if ( map == null ) return false;
				Node attr = map.getNamedItem(name); if ( attr == null ) return false;
				attr.setNodeValue(value);
				
				return true;
			}
			
			/**
			 * Format XML doc through XML Transformer and returns formatted XML as a string
			 * @param indent True if XML Transformer should indent XML or False if it should not indent XML
			 * @return Formatted XML
			 */
			public String toXml(boolean indent)
			{
				if ( m_doc == null ) return null;
				
				try
				{
					TransformerFactory factory = TransformerFactory.newInstance();
					Transformer transformer = factory.newTransformer();
					Properties outFormat = new Properties();
					outFormat.setProperty(OutputKeys.INDENT,indent?"yes":"no"); 
					outFormat.setProperty(OutputKeys.METHOD,"xml");
					outFormat.setProperty(OutputKeys.OMIT_XML_DECLARATION,"yes");
					outFormat.setProperty(OutputKeys.VERSION,"1.0");
					outFormat.setProperty(OutputKeys.ENCODING,"UTF-8");
					transformer.setOutputProperties(outFormat);
					
					DOMSource domSource = new DOMSource(m_doc.getDocumentElement());
					OutputStream output = new ByteArrayOutputStream();
					StreamResult result = new StreamResult(output);
					transformer.transform(domSource,result);
					return output.toString();
				}
				catch ( Exception e) { return null; }
			}
		}
	}
