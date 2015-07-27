# XML Responses

When submitting a Request XML document, knowing what happened will require at least some minimal parsing of the Result XML document. The required parsing can be simplified by taking advantage of the following aspects of MXMS XML: 

* All three types of behaviors (Set Configuration, Perform Action, and Query Configuration) have the same format for their Result XML documents
* The presence of TLC errors and the (absence of) XML equivalence can be used to quickly separate successes from failures
* If an operation was performed, but not exactly as requested, Parm Value Extraction can be used to compare requested and resulting values to determine any deviation
* When an XML query is issued, Parm Value Extraction can be used to extract key values that were the primary purpose of the XML query 

This document will describe how to handle response from MX:

* Success Response
* Error Responses

## Parm Value Extraction

A simple and quite useful method for simplifying the extraction of relevant information from an XML Result document is Parm Value Extraction. Parm Value Extraction is simply the process of searching an XML document for a parm with a given name and extracting the value associated with it. Parm Value Extraction is most commonly applied to Non-Pivotal Parms since they are the mostly likely to contain useful information. This is because Pivotal Parms are typically "canned" as part of an XML Template used to create an Request XML document and are simply replicated into the Result XML document. It is an important aspect of the XML used by MXMS that a given parm can only appear once within a given TLC since this can make it much easier to extract of the value of a given named parm from within a Result XML document.

## Success Response

If the call to MX is successful, the XML returned from MX will exactly match the XML sent to MX.   

XML Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
            <parm name="Date" value="2014-01-19"/>
            <parm name="Time" value="17:00:00"/>
        </characteristic>
    </wap-provisioningdoc>

XML Returned

	:::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
            <parm name="Date" value="2014-01-19"/>
            <parm name="Time" value="17:00:00"/>
        </characteristic>
    </wap-provisioningdoc>


## Error Responses 

Each CSP will handle errors according to their specific implementation. If the call to MX fails the response XML will contain information about the failure and contain the text "-error". Overall, there are a few common error types:

* Framework Error
* CSP Error
* Sub Characteristic Error
* Parm Error

### Framework Error
The MX framework typically passes the submitted XML directly to the CSP, but may return errors if a CSP is not found or if the XML is malformed in general. Below is an example:


XML Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="SomeCSP" version="4.3">
            <parm name="SomeParm" value="false"/>
        </characteristic>
    </wap-provisioningdoc>

XML Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic-error type="SomeCSP" version="4.3" desc=" has not registered with MX Framework yet">
            <parm name="SomeParm" value="false"/>
        </characteristic-error>
    </wap-provisioningdoc>

### CSP Error
A CSP is considered a 'top-level characteristic' within the context of the XML. An error indicated at this level is considered a major error by the CSP and typically means that none of the parms were processed. 

Below is an example:

XML Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="100" >
            <parm name="AutoTime" value="true"/>
        </characteristic>
    </wap-provisioningdoc>


XML Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic-error type="Clock" version="100" desc="The DSD version is higher than current supported DSD 4.3">
            <parm name="AutoTime" value="true"/>
        </characteristic-error>
    </wap-provisioningdoc>

>Note: The XML CSP enables you to control how MX will handle top-level characteristic errors. Consult the XML CSP reference in this guide for more information.

### Sub Characteristic Error
Some CSPs contain 'sub-characteristics' which provide for a grouping of settings to be applied to a specific feature of the CSP. The CSP may report a `characteristic-error` at this level when all settings within that sub-characteristic have failed to be applied. Other settings outside of the sub-characteristic may have been applied. Below is an example:


XML Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3" >
            <parm name="AutoTime" value="true"/>
            <characteristic type="AutoTimeDetails">
                <parm name="somParm" value="00:30:00"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

XML Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="true"/>
            <characteristic-error type="AutoTimeDetails" desc="unsupported">
                <parm-error name="someParm" value="00:30:00" desc="Param type is not supported"/>
            </characteristic-error>
        </characteristic>
    </wap-provisioningdoc>


### Parm Error
Some CSPs may report a `parm-error` when that setting for that specific parm have failed to be applied. Other settings outside of parm may have been applied. Below is an example:


XML Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="SomeParm" value="false"/>
        </characteristic>
    </wap-provisioningdoc>

XML Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm-error name="SomeParm" value="false" desc="Param type is not supported"/>
        </characteristic>
    </wap-provisioningdoc>

## Notes

XML sent into and returned from MX may differ in white spacing both before and after XML nodes and within XML nodes. When comparing returned XML to submitted XML you should format the white spacing to a unified pattern before making comparisons. 