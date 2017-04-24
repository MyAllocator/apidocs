define({ "api": [
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "i - Getting Started",
    "name": "i___Getting_Started",
    "version": "201601.0.0",
    "description": "<p>Welcome PMS vendors!</p> <p> If you would like to use the myallocator.com PMS API please request a vendor id+password here:  <a href=\"https://www.myallocator.com/become-partner/\">https://www.myallocator.com/become-partner/</a></p> <p> The vendor_id + vendor_password will need to be submitted with every request, except HelloWorld (for testing).</p> <p> Be sure to register your vendor account with the email address of which you prefer to receive notifications. We will  send application update notifications and action required requests to this address.</p> <p> Your customers must create an account on myallocator.com before they can use the API (or you need to create one for them).  The myallocator user credentials (user/password) are needed to create an association between your  PMS and the property. They should not be stored in your system.</p> <p> Request API Vendor Credentials:  <a href=\"https://www.myallocator.com/become-partner/\">https://www.myallocator.com/become-partner/</a></p> <p> PMS Integration Guide:  <a href=\"https://docs.google.com/document/d/1_OuI0Z6rTkkuA9xxlJUvhXlazJ9w_iqsp1QzIj4gb2U/edit?usp=sharing\">https://docs.google.com/document/d/1_OuI0Z6rTkkuA9xxlJUvhXlazJ9w_iqsp1QzIj4gb2U/edit?usp=sharing</a></p> <p> PMS PHP SDK (Recommended if using PHP):  <a href=\"https://github.com/MyAllocator/myallocator-pms-php\">https://github.com/MyAllocator/myallocator-pms-php</a></p> <p> <strong> Online Travel Agencies/Booking Websites </strong></p> <p> This API is for PMS vendors.</p> <p> If you are an OTA or booking website, this is NOT the API you are looking for.</p> <p> Please review our Build2Us OTA facing API documentation &amp; licensing:  <a href=\"https://docs.google.com/document/d/1TYM3GxhmvpaOPoQw3S9-tAotv9QrASpwSZahRRWS55M/edit?usp=sharing\">https://docs.google.com/document/d/1TYM3GxhmvpaOPoQw3S9-tAotv9QrASpwSZahRRWS55M/edit?usp=sharing</a></p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "ii - Data Formats",
    "name": "ii___Data_Formats",
    "version": "201601.0.0",
    "description": "<p>The API supports JSON and XML data formats. We recommend using JSON as the XML API may eventually be deprecated.</p> <p> The service URLs are:</p> <p> JSON - <a href=\"https://api.myallocator.com/pms/v201408/json/MethodName\">https://api.myallocator.com/pms/v201408/json/MethodName</a></p> <p> XML - <a href=\"https://api.myallocator.com/pms/v201408/xml/MethodName\">https://api.myallocator.com/pms/v201408/xml/MethodName</a></p> <p> In the URL above the Version is 201408, this version will periodically be changed as new features are added.  The json|xml denotes the protocol for how requests/responses will be formatted. </p> <p> MyAllocator can be accessed via REST using either JSON / XML form syntax or JSON raw:</p> <p> JSON (form): Offers simplified parsing and low transport overhead and is passed in the field &#39;json&#39; using standard HTML form encoding (application/x-www-form-urlencoded). In this example data such as space must be encoded to &#39;+&#39; or %20.</p> <p> JSON (raw): Set the HTTP header Content-Type: application/json and pass a raw UTF8 encoded json body.</p> <p> XML (form): Requests to our server need to be send using the POST method. The XML string should be stored in a parameter called &#39;xmlRequestString&#39;. Using standard HTML form (application/x-www-form-urlencoded) encoding.</p> <p> XML (raw): Set the HTTP header Content-Type: application/xml and pass a raw UTF8 encoded xml body.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "iii - Vendor Tokens",
    "name": "iii___Vendor_Tokens",
    "version": "201601.0.0",
    "description": "<p>Vendor+User and Vendor+Property associations exist in myallocator.</p> <p>Vendor+User Association (Referenced by a user token)</p> <ol> <li>A user token <strong>is required</strong> for a vendor to access a user via the API.</li> <li>User tokens enable vendors to substitute user credentials with a token (Auth/UserToken) for requests requiring user credentials. This helps vendors to avoid storing user credentials.</li> <li>A user token must be generated via the AssociateUserToPMS API Method. If you used the UserCreate call then the association is already done for you and the token is returned in the UserCreate response.</li> <li>If AssociateUserToPMS is called for a vendor / user with an existing token, the existing token is returned.</li> </ol> <p>Vendor+Property Association (Referenced by a property token)</p> <ol> <li>A property association <strong>is</strong> required for a vendor to access a property via the API.</li> <li>The returned token is currently not used for anything. However, the presence indicates that a PMS is allowed to update the property.</li> <li>Property tokens are generated via the following ways:<ol> <li>Vendor creates a property via the PropertyCreate API method, a property token is automatically generated.</li> <li>Vendor invokes the AssociatePropertyToPMS API method.</li> <li>Property navigates in MA web interface to Manage &gt; PMS Connections and enables your PMS to connect.<ol> <li>New vendors may not appear in the PMS dropdown list until after certification. Please let us know if you would like to be added and what you would like your public PMS name to be.</li> </ol> </li> </ol> </li> <li>If AssociatePropertyToPMS is called for a vendor / property with an existing token, the existing token is returned.</li> </ol> <p>Important Notes</p> <ol> <li>User tokens only apply to vendor+user credentials. A vendor+user association is required for a vendor to access a user.</li> <li>Property tokens only apply to vendor+property associations. A vendor+property association is required for a vendor to access a property.</li> <li>To successfully access a property via the API you need both user and property association.</li> </ol> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "iv - Developer Support",
    "name": "iv___Developer_Support",
    "version": "201601.0.0",
    "description": "<p>You may contact us for developer support via the following methods.</p> <p> Chat: <a href=\"http://devchat.myallocator.com\">http://devchat.myallocator.com</a> (Public Hipchat Room - Office Hours: Weekdays 08:00 - 15:00 PDT)</p> <p> Email: devhelp@myallocator.com (please include a &quot;TicketId&quot; if it is about an API call)</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "2_Booking_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Concepts",
    "name": "Concepts",
    "version": "201601.0.0",
    "description": "<p>Callbacks are the preferred way to access booking data (instead of polling).  Callbacks data format matches the BookingList api call. </p> <p> Instead of polling for new bookings every few minutes you should register to receive a booking callback.  With this feature we will send the bookings to your server via HTTP/HTTPS. </p> <p> Callbacks are easier for us and you! You don&#39;t have to develop a mechanism to regularly download bookings.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "2_Booking_Callbacks"
  },
  {
    "group": "2_Booking_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Delivery Method",
    "name": "Delivery_Method",
    "version": "201601.0.0",
    "description": "<p>Callbacks are delivered via HTTP/HTTPS.     </p> <p> Configure a URL endpoint (HTTPS strongly recommended) and password  via the the VendorSet API method that we can use to authenticate to your API.   Whenever we receive a new booking we will send a POST request to your server with two parameters:</p> <ul> <li><em>booking</em> : contains a JSON-coded string of the booking data.</li> <li><em>password</em> : contains a string of a previously agreed on password.</li> </ul> <p> If your server doesn&#39;t answer (or doesn&#39;t answer with the correct code,   see below) our system will retry with incremental delays between each  try (1, 2, 4, 8, 16, 32 minutes... and so on).</p> <p> The Request format is very similiar to the GetBookings response, but instead of  XML it is in JSON format. Additionally it contains a PropertyId field  which is the property ID of the myallocator property.</p> <p> Your server needs to respond in the correct format, otherwise  we will keep resending the booking. In the response BODY   write a JSON object in the following format:</p> ",
    "examples": [
      {
        "title": "Example of a JSON booking",
        "content": "{\n  \"Customers\":[\n     {\n        \"CustomerLName\":\"Smith\",\n        \"CustomerCompany\":\"\",\n        \"CustomerNote\":\" \",\n        \"CustomerEmail\":\"martin@smith.com\",\n        \"CustomerFName\":\"Martin\",\n        \"CustomerCity\":\"Stirling\",\n        \"CustomerCountry\":\"GB\"\n     }\n  ],\n  \"IsCancellation\":false,\n  \"OrderAdults\":1,\n  \"OrderChildren\":0,\n  \"OrderDate\":\"2012-09-18\",\n  \"OrderId\":\"13597636\",\n  \"OrderModifDate\":null,\n  \"OrderModifTime\":null,\n  \"OrderSource\":\"booking.com\",\n  \"OrderSourceId\":\"726122988\",\n  \"OrderTime\":\"16:22:14\",\n  \"Rooms\":[\n     {\n        \"EndDate\":\"2012-09-18\",\n        \"Currency\":\"EUR\",\n        \"RoomTypeIds\":[\n           \"832\"\n        ],\n        \"Price\":\"16.80\",\n        \"RoomDesc\":\"3 person mixed shared bed\",\n        \"Units\":\"1\",\n        \"StartDate\":\"2012-09-18\"\n     }\n  ],\n  \"TotalCurrency\":\"EUR\",\n  \"TotalPrice\":\"16.80\",\n  \"MyallocatorId\":\"5058a1bd921f120061010000\",\n  \"Channel\":\"ct\",\n  \"PropertyId\":264,\n  \"StartDate\":\"2012-09-18\",\n  \"EndDate\":\"2012-09-18\",\n  \"MyallocatorCreationDate\":\"2012-09-18\",\n  \"MyallocatorCreationTime\":\"17:32:16\",\n  \"MyallocatorModificationDate\":\"2012-09-18\",\n  \"MyallocatorModificationTime\":\"17:32:16\"\n}",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "2_Booking_Callbacks"
  },
  {
    "group": "2_Booking_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Response Handling",
    "name": "Response_Handling",
    "version": "201601.0.0",
    "description": "<p>== Response Format ==  The codes are as follows, the message (msg) is not parsed and can be anything you like   (we still recommend something that describes the error).</p> <table> <thead> <tr> <th>Code</th> <th>Cause</th> </tr> </thead> <tbody> <tr> <td>10</td> <td>Password wrong or not set.</td> </tr> <tr> <td>20</td> <td>Error while parsing JSON structure (including the exception message, for example position of not parsable part)</td> </tr> <tr> <td>21</td> <td>Error while parsing JSON structure (exact reason unknown)</td> </tr> <tr> <td>22</td> <td>Error while parsing JSON content</td> </tr> <tr> <td>30</td> <td>PropertyId is NULL or 0</td> </tr> <tr> <td>31</td> <td>Property not used on your PMS anymore</td> </tr> <tr> <td>35</td> <td>MyallocatorId already existing</td> </tr> <tr> <td>40</td> <td>Request a retry (vendor currently unable to process booking notification)</td> </tr> <tr> <td>50+</td> <td>Internal error on your side (for debugging)</td> </tr> </tbody> </table> <p> We record every error and can give you more details if needed. The important codes  are really only 10 and 31. The JSON should always be valid and the PropertyId  always included.</p> ",
    "success": {
      "examples": [
        {
          "title": "Example of a successful JSON response",
          "content": "{ \n    \"success\": true \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example of an unsuccessful JSON response",
          "content": "{\n  \"error\":{\n     \"code\":31,\n     \"msg\":\"Could not find property on this system for myallocator PropertyId: 603\"\n  },\n  \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "2_Booking_Callbacks"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ARIRulesList",
    "title": "ARIRulesList",
    "name": "ARIRulesList",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Your Vendor Property ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "ARIRules",
            "description": "<p>List of all existing ARIRules</p> "
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIRulesListResponse>\n  <Success>true</Success>\n</ARIRulesListResponse>\n\n\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\n<ARIRulesListResponse>\n\t<ARIRules>\n\t\t<RuleAppend PMSRuleId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" />\n\t\t<RuleUpdate PMSRuleId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" />\n\t\t<RuleDelete PMSRuleId=\"\"/>\n\t\t<RuleDelete RoomId=\"\"/>\n\t\t<RuleDelete RoomId=\"\" Channel=\"\"/>\n\t</ARIRules>\n  <Success>true</Success>\n</ARIRulesListResponse>",
          "type": "json"
        }
      ]
    },
    "description": "<p>Lists all existing ARIRules.  See ARIRulesUpdate for more details.</p> ",
    "examples": [
      {
        "title": "XML Request - Creating a customer account",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<ARIRulesList>\n\t<Auth>\n\t\t<UserToken>User token</UserToken>\n\t\t<VendorId>Your Vendor ID</VendorId>\n\t\t<VendorPassword>Your Vendor Password</VendorPassword>\n\t</Auth>\n\t<ARIRules>\n\t\t<Rule PMSRuleId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" />\n\t</ARIRules>\n</ARIRulesList>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/ARIRulesList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ARIRulesUpdate",
    "title": "ARIRulesUpdate",
    "name": "ARIRulesUpdate",
    "version": "201601.0.0",
    "description": "<p>ARIRules allow a PMS to communicate channel/OTA business logic to MyAllocator, so auto-adjustments can be safely made by MyAllocator.</p> <p>Currently the ARIRules only support the &quot;BLOCK&quot; Verb which zeros out inventory for a specific channel  while the rule is in effect.  This can be used to close out a specific channel/OTA without disabling it.</p> <p>The ARIRulesUpdate and ARIRulesList methods were architected so in future releases  we will add additional Verbs to handle other common business cases like reserving rooms for contracted availability,  and limited availability.</p> <p>ARIRules for a property can be can be viewed using ARIRulesList or by going into inbox.myallocator.com | Manage | Rules. Each ARIRule must have a unique &quot;PMSRuleId&quot; that corresponds to the rule ID in your system and is used to identify the rule for a property. </p> <p>When new rules are sent or removed a corresponding ARIUpdate is created for the channel and date ranges specified. The UpdateId is returned in the response and can be viewed using ARIUpdateStatus.</p> <p><em>Why are ARIRules so Important</em></p> <p>Before ARIRules if a PMS developer needed to close out a specific channel for a single day it was necessary  to send a zero update for a specific channel, then send another update with real inventory for all other channels, and it was necessary to do this after each update. Not only was this incredibly resource intensive. But any AutoAdjustments would still update the closed out channels because there was no logical understanding within MyAllocator of the block.  During the time the blocked date was set to zero any booking would appear like an overbooking (making it impossible to separate signal from noise in diagnosing  overbookings) since having &quot;false zero&quot; inventory was part of normal daily operation for many PMS systems.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)#</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "Options/Quiet",
            "description": "<p>suppress output of all rules.</p> "
          }
        ],
        "REquest": [
          {
            "group": "REquest",
            "type": "Boolean",
            "optional": false,
            "field": "Options/NoUpdate",
            "description": "<p>suppress outbound updates of rules to the remote OTA (should be used for testing only)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "ARIRules",
            "optional": false,
            "field": "List",
            "description": "<p>of all existing ARIRules</p> "
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ARIRulesActions",
          "content": "<ARIRulesUpdate>\n\t<ARIRules Action=\"Append\">\n\t\t<Rule PMSRuleId=\"\" RatePlanId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" DaysOfWeek=\"any,mon,tue,wed,thu,fri,sat,sun\" />\n\t\t<Rule PMSRuleId=\"\" RatePlanId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" DaysOfWeek=\"any\"/>\n\t</ARIRules>\n\t<ARIRules Action=\"Update\">\n\t\t<Rule PMSRuleId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" />\n\t\t<Rule PMSRuleId=\"\" RoomId=\"\" Channel=\"\" Verb=\"BLOCK\" StartDate=\"YYYY-MM-DD\" EndDate=\"YYYY-MM-DD\" />\n\t</ARIRules>\n\t<ARIRules Action=\"Delete\">\n\t\t<Rule PMSRuleId=\"\"/>\n\t\t<Rule RoomId=\"\"/>\n\t\t<Rule RoomId=\"\" Channel=\"\"/>\n\t</ARIRules>\n<ARIRulesUpdate>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "JSON ARIRulesUpdate",
        "content": "{\n\t\"ARIRules\":[\n\t\t{ \"_Action\":\"Append\", PMSRuleId:\"\", RatePlanId:\"\", RoomId:\"\", Channel:\"\", Verb:\"BLOCK\", StartDate:\"YYYY-MM-DD\", EndDate:\"YYYY-MM-DD\", DaysOfWeek:\"any,mon,tue,wed,thu,fri,sat,sun\"   },\n\t\t{ \"_Action\":\"Update\", PMSRuleId:\"\", RatePlanId:0, RoomId:\"\", Channel:\"\", Verb:\"BLOCK\", StartDate:\"YYYY-MM-DD\", EndDate:\"YYYY-MM-DD\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\", RoomId:\"\", Channel:\"\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\", RoomId:\"\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\" },\n\t\t]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/ARIRulesUpdate -d@- <<EOJSON\njson={\n\t\"ARIRules\":[\n\t\t{ \"_Action\":\"Append\", PMSRuleId:\"\", RoomId:\"\", RatePlanId:\"\", Channel:\"\", Verb:\"BLOCK\", StartDate:\"YYYY-MM-DD\", EndDate:\"YYYY-MM-DD\"  },\n\t\t{ \"_Action\":\"Update\", PMSRuleId:\"\", RoomId:\"\", Channel:\"\", Verb:\"BLOCK\", StartDate:\"YYYY-MM-DD\", EndDate:\"YYYY-MM-DD\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\", RoomId:\"\", Channel:\"\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\", RoomId:\"\"  },\n\t\t{ \"_Action\":\"Delete\", PMSRuleId:\"\" },\n\t\t]\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "JSON ARIRulesUpdate Response",
        "content": " {\n\t\"Auth/VendorId\":\"Your Vendor ID\",\n\t\"Auth/VendorPassword\":\"Your Vendor Password\",\n\t\"ARIRules\":[\n\t\t{ PMSRuleId: \"\", RoomId:\"\", Channel:\"\", Verb:\"BLOCK\", RatePlanId:\"\", StartDate:YYYY-MM-DD, EndDate:YYYY-MM-DD },\n\t\t{ PMSRuleId: \"\", RoomId:\"\", Channel:\"\", Verb:\"BLOCK\", StartDate:YYYY-MM-DD, EndDate:YYYY-MM-DD }\n\t\t],\n\t\"Options\":{\n\t\t\"Quiet\":true\n\t\t}\n }",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ARIUpdate",
    "title": "ARIUpdate",
    "name": "ARIUpdate",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Options",
            "description": "<p>Container node (Hash) containing a list of channels to be updated.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.QueryForStatus",
            "description": "<p>Default: false, If true the call returns immediately, and the caller should use ARIUpdateStatus to query.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.FailIfUpdateActive",
            "description": "<p>Default: false, If true the call will fail if another update is currently running (rather than block with potentially old data)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.IgnoreInvalidRooms",
            "description": "<p>Default: false, If true AND Invalid RoomId&#39;s are specified then a warning will be returned (otherwise the entire call will fail)</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": ".Options.loop_delay",
            "description": "<p>Intentionally make the &#39;loop&#39; channel take loop_delay seconds (useful for testing with QueryForStatus)</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Channels",
            "description": "<p>Container node (array) containing a list of channels to be updated.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Channels.Channel",
            "description": "<p>(XML ONLY) A XML node containing the channel that the customer wants to update. (Use ChannelList for ChannelId&#39;s)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Channels.ChannelId",
            "description": "<p>(JSON ONLY) the ChannelId of the channel to be updated. ex: &quot;loop&quot; for Loop</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Allocations",
            "description": "<p>Container node (array) containing a list</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Allocations.Allocation",
            "description": "<p>Individual allocations. There can be as many as you like, but a the date ranges should never overlap (within one room id).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Allocation.RoomId",
            "description": "<p>Room type id as returned by RoomList.</p> "
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": ".Allocation.StartDate",
            "description": "<p>Format: YYYY-MM-DD.</p> "
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": ".Allocation.EndDate",
            "description": "<p>Format: YYYY-MM-DD.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": ".Allocations.Allocation.Units",
            "description": "<p>How many beds or rooms should be available on this day. Whether it&#39;s beds or rooms depends on whether the room is a dorm or a private room. To remove allocation set Units to 0.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": ".Allocations.Allocation.MinStay",
            "description": "<p>Specify the minumum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": ".Allocations.Allocation.MaxStay",
            "description": "<p>Specify the maximum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 0 or higher. 0 means &quot;unlimited&quot;. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": ".Allocations.Allocation.Closed",
            "description": "<p>Room is not available during this time</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": ".Allocations.Allocation.ClosedForArrival",
            "description": "<p>Arrivals are not allowed on this day.</p> "
          },
          {
            "group": "Request",
            "type": "Bollean",
            "optional": true,
            "field": ".Allocations.Allocation.ClosedForDeparture",
            "description": "<p>Departures are not allowed on this day.</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": true,
            "field": ".Allocations.Allocation.Prices",
            "description": "<p>(XML ONLY) Container for Price nodes.</p> "
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": true,
            "field": ".Allocations.Allocation.Prices.Price",
            "description": "<p>(XML ONLY) Price per person for shared/dorm rooms or per room for private rooms.</p> "
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": true,
            "field": ".Allocations.Allocation.Price",
            "description": "<p>(JSON ONLY) Price per person for shared/dorm rooms or per room for private rooms.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>Can be it{true} (all channel updates succeeded), it{partial} (not all channels succeeded) or it{false} (all channel updates failed).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Errors/Error",
            "description": "<p>Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the error only applies to a specific channel.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Warnings/Warning",
            "description": "<p>Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the warning only applies to a specific channel.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML ARIUpdate Response (Full Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings>\n\t<Warning channel=\"hc\">\n\t  <WarningId>207</WarningId>\n\t  <WarningMsg>\n\t\tSkipped room type (not setup with channel).\n\t  </WarningMsg>\n\t</Warning>\n </Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Warning Response (at least one channel succeeded)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>partial</Success>\n <Errors>\n\t<Error channel=\"adv\">\n\t  <ErrorId>15</ErrorId>\n\t  <ErrorMsg>\n\t\t Missing or wrong channel credentials on myallocator.com\n\t  </ErrorMsg>\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Failed Response (all channels came back with errors)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>false</Success>\n <Errors>\n\t<Error channel=\"adv\">\n\t  <ErrorId>15</ErrorId>\n\t  <ErrorMsg>\n\t\tMissing or wrong channel credentials on myallocator.com\n\t  </ErrorMsg>\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Failed update (error before submitting to any channel)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>false</Success>\n <Errors>\n\t<Error\">\n\t  <ErrorId>17</ErrorId>\n\t  <ErrorMsg>\n\t\tStart date too far in the future (>2 years)\n\t  </ErrorMsg>\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate QueryForStatus=true",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings></Warnings>\n  <UpdateId>832522158</UpdateId>\n</ARIUpdateResponse>",
          "type": "json"
        }
      ]
    },
    "description": "<p>An allocation sets the number of rooms or beds (depending on whether the  room type is a private room or shared/dorm) available during  any specific time frame. For more details see below.</p> <p> <strong> Excluding Channels </strong>  prefix a channel id with a minus (-) to exclude it.   Ex:  a series of &quot;all&quot;, &quot;-loop&quot; would update all configured channels except &quot;loop&quot;</p> <p> <strong> Handling Errors &amp; Warnings </strong></p> <p> The response will always include the Success, Errors and Warnings tags. If  Success is set to &quot;true&quot; the Errors tag will be empty. If Success is set to  &quot;partial&quot; or &quot;false&quot; at least one Error tag is included.</p> <p> <strong> Sending Overlapping Ranges / Partial updates </strong>  Overlapping ranges in an ARIUpdate are absolutely allowed.   As long as the ranges are sent in the same request body they are applied in sequence as part of the same SQL transaction.   Fields such as Units, MinStay, MaxStay, Price are optional so it is possible send different ranges for pricing and   availability.</p> <p> How this works: we receive XML/JSON request body and decode it into a neutral format,   then write availability directly to the internal MyAllocator database  and provision an updateId for a date range plus room-type(s),   then create one job per channel, finally we return the updateId to the response (assuming QueryForStatus==True).</p> <p> Each job contains ONLY the propertyid, updateId, and ota (no availability, or pricing).  Jobs are picked up one of several auto-scaling &quot;worker tier&quot; servers,   each server loads the latest availability from the db (which may have changed since the updateId was issued),   and then applies any ARIRules, then transmit to OTA, and flag their portion of the updateId as completed.  This ensures the latest availability will always be sent to the OTA.  </p> <p> Once an UpdateId has been issued it falls within the scope of my monitoring domain,   it should be considered reliable by a developer.  The request is broken into a series of jobs (one for each channel).<br> Each job is logged to disk and processed by a pool of servers.<br> It would take a substantial level of failure to be lost.<br> (Jobs are not quite as durable as bookings or configuration data, but it&#39;s still highly durable).  </p> <p> <strong> Submitting to ALL channels </strong></p> <p> You can also submit to all available channels without specifying explicity which  channels to update. Use the channel code &quot;all&quot; to do this. Channels that are not   set up by the user will be skipped as indicated by a warning. </p> <p> It is also possible to submit to all channels while excluding certain channels.  Add the attribute exclude=&quot;true&quot; to skip a channel. See example below.  Use the channel code &quot;all&quot; to do this.</p> <p> <strong> Running Jobs in the Background (ARIUpdateStatus) </strong></p> <p> You can also run the ARIUpdate update in the background and query  for the updates using ARIUpdateStatus. This enables you  to show the update progress to the user while it&#39;s still running. To enable  this feature you need to add the node QueryForStatus (see example)</p> <p> If QueryForStatus is true then the ARIUpdateResponse will contain the additional parameter UpdateId, which  is needed for ARIUpdateStatus</p> <p> QueryForStatus TRUE will be much more resilient than attempting to maintain a single persistent connection,   and it will free up connection requests on our side.  In the future QueryForStatus FALSE may be removed and/or   additional timeouts will be added which may make it unusable.   New integrations should avoid using QueryForStatus FALSE.</p> ",
    "examples": [
      {
        "title": "JSON ARIUpdate",
        "content": "{\n \"Auth/UserToken\":\"user token\",\n \"Auth/PropertyId\":\"property id from myallocator\",\n \"Auth/VendorId\":\"your vendor\",\n \"Auth/VendorPassword\":\"vendorpass\",\n \"Channels\": [ \"hc\",\"iwb\" ],\n \"Allocations\": [\n\t{\n\t\"RoomId\":\"59\",\n\t\"StartDate\":\"2010-06-01\",\n\t\"EndDate\":\"2010-06-01\",\n\t\"Units\":\"3\",\n\t\"MinStay\":\"1\",\n\t\"MaxStay\":\"30\",\n\t\"Price\":\"20.00\"\n\t}\n\t]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/ARIUpdate -d@- <<EOJSON\njson={\n \"Auth/UserToken\":\"your username\",\n \"Auth/PropertyId\":\"property id from myallocator\",\n \"Auth/VendorId\":\"your vendor\",\n \"Auth/VendorPassword\":\"vendorpass\",\n \"Channels\": [ \"hc\",\"iwb\" ],\n \"Allocations\": [\n\t{\n\t\"RoomId\":\"59\",\n\t\"StartDate\":\"2010-06-01\",\n\t\"EndDate\":\"2010-06-01\",\n\t\"Units\":\"3\",\n\t\"MinStay\":\"1\",\n\t\"MaxStay\":\"30\",\n\t\"Price\":\"20.00\",\n    \"PriceWeekly\":\"400.00\",\n    \"PriceMonthly\":\"1600.00\"\n\t}\n\t]\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "JSON ARIUpdateResponse",
        "content": "{\n'Errors':[\n   { 'err':100, 'msg':'Unhandled Exception' }\n],\n'Messages':[\n      {\n         \"msg\" : \"QueryForStatus mode enabled (will not wait)\",\n         \"id\" : 99,\n         \"type\" : \"info\"\n      }\n],\n'Channels':[\n      \"exp\" : {\n         \"msg\" : \"job 123 is queued in tube ariupdates\",\n         \"hold\" : 1,\n         \"parts\" : 1,\n         \"cid\" : \"exp\"\n      },\n      \"boo\" : {\n         \"msg\" : \"job 124 is queued in tube ariupdates\",\n         \"hold\" : 1,\n         \"parts\" : 1,\n         \"cid\" : \"boo\"\n      }\n]\n}",
        "type": "json"
      },
      {
        "title": "XML ARIUpdateRequest",
        "content": "\t<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n\t<ARIUpdate>\n\t <Auth>\n\t   <UserToken>User token</UserToken>\n\t   <PropertyId>Property ID on myallocator.com</PropertyId>\n\t   <VendorId>Your Vendor ID</VendorId>\n\t   <VendorPassword>Your Vendor Password</VendorPassword>\n\t </Auth>\n\n\t <Channels>\n\t\t<Channel>hc</Channel>\n\t\t<Channel>iwb</Channel>\n\t </Channels>\n\n\t <Allocations>\n\t\t<Allocation>\n\t\t  <RoomId>59</RoomId>\n          <RatePlanId>100</RatePlanId>\n\t\t  <StartDate>2010-06-01</StartDate>\n\t\t  <EndDate>2010-08-12</EndDate>\n\t\t  <Units>3</Units>\n\t\t  <MinStay>1</MinStay>\n\t\t  <MaxStay>30</MaxStay>\n\t\t  <Prices>\n\t\t\t <Price>20.00</Price>\n\t\t  </Prices>\n\t\t</Allocation>\n\t </Allocations>\n\t</ARIUpdate>",
        "type": "json"
      },
      {
        "title": "XML Request (Status Check)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdate>\n <Auth>\n\t...\n </Auth>\n\n <Options>\n\t<QueryForStatus>true</QueryForStatus>\n </Options>\n\n ...\n</ARIUpdate>",
        "type": "json"
      },
      {
        "title": "XML ARIUpdate (Submit to all channels excluding Gomio and Hostelsclub)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdate>\n <Auth>\n\t<UserToken>User token</UserToken>\n\t<PropertyId>Property ID on myallocator.com</PropertyId>\n\t<VendorId>Your Vendor ID</VendorId>\n\t<VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n\n <Channels>\n\t<Channel>all</Channel>\n\t<Channel exclude=\"true\">gom</Channel>\n\t<Channel exclude=\"true\">hc</Channel>\n</Channels>\n\n <Allocations>\n\t...\n </Allocations>\n</ARIUpdate>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ARIUpdateStatus",
    "title": "ARIUpdateStatus",
    "name": "ARIUpdateStatus",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "description": "<p>Use this ARIUpdateStatus to query for the status of a ARIUpdate. It  will list the results by channel. Big updates are split into several  parts which is reflected in the Parts and ActivePart parameter.</p> ",
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Parts",
            "description": "<p>A big update can be split into smaller parts. This can be used as a progress indicator. 0 parts mean that the update is completed (or aborted due to an error).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ActivePart",
            "description": "<p>The current part number being submitted to the channel.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML ARIUpdateStatus Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdateStatusResponse>\n <Channels>\n   <Channel code=\"gom\">\n     <ActivePart>3</ActivePart>\n     <Parts>3</Parts>\n     <Warnings></Warnings>\n     <Errors></Errors>\n     <Success>false</Success>\n   </Channel>\n   <Channel code=\"hc\">\n     <ActivePart>3</ActivePart>\n     <Parts>0</Parts>\n     <Errors></Errors>\n     <Success>true</Success>\n     <Warnings>\n       <Warning>\n         <WarningId>207</WarningId>\n         <WarningMsg>Skipped room type (not setup with channel).</WarningMsg>\n       </Warning>\n     </Warnings>\n   </Channel>\n   <Channel code=\"iwb\">\n     <ActivePart>0</ActivePart>\n     <Errors>\n       <ErrorId>15</ErrorId>\n       <ErrorMsg>Missing or wrong channel credentials on myallocator.com</ErrorMsg>\n     </Errors>\n     <Parts>0</Parts>\n     <Success>false</Success>\n     <Warnings>\n     </Warnings>\n   </Channel>\n</ARIUpdateStatusResponse>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "XML ARIUpdateStatus Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdateStatus>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n\n <UpdateId>832522158</UpdateId>\n</ARIUpdateStatus>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/ARIUpdateStatus -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/AmenityList",
    "title": "AmenityList",
    "name": "AmenityList",
    "version": "201601.0.0",
    "description": "<p>List of all supported amenities and their channel support</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/AmenityList -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "JSON AmenityList Response",
        "content": "{\n    \"Amenities\": [\n        {\n            \"id\": \"251\",\n            \"description\": \"Private plunge pool\",\n            \"level\": \"room\",\n            \"ChannelSupport\": [\n                {\n                    \"cid\": \"exp\",\n                    \"ota_amenity_id\": \"4525\"\n                },\n                {\n                    \"cid\": \"ta\",\n                    \"ota_amenity_id\": \"SWIMMING_POOL\"\n                }\n            ]\n        },\n        {\n            \"id\": \"252\",\n            \"description\": \"Separate dining area\",\n            \"level\": \"property\",\n            \"ChannelSupport\": [\n                {\n                    \"cid\": \"exp\",\n                    \"ota_amenity_id\": \"6732\"\n                }\n            ]\n        }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "XML AmenityList Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<AmenityListResponse>\n  <Amenities>\n    <Amenity id=\"251\" description=\"Private plunge pool\" level=\"room\">\n        <ChannelsSupport>\n            <ChannelSupport cid=\"exp\" ota_amenity_id=\"4525\" />\n            <ChannelSupport cid=\"ta\" ota_amenity_id=\"SWIMMING_POOL\" />\n        </ChannelsSupport>\n    </Amenity>\n    <Amenity id=\"252\" description=\"Separate dining area\" level=\"property\">\n        <ChannelsSupport>\n            <ChannelSupport cid=\"exp\" ota_amenity_id=\"6732\" />\n        </ChannelsSupport>\n    </Amenity>\n  </Amenities>\n</AmenityListResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/AssociatePropertyToPMS",
    "title": "AssociatePropertyToPMS",
    "name": "AssociatePropertyToPMS",
    "version": "201601.0.0",
    "description": "<p>Creates a permanent link between an existing myallocator property and a PMS Vendor.  The link is required to access any of the property related calls in our API  with the user token. The returned property token is currently not being used.</p> <p> The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),  then in the background pass the user credentials to AssociatePropertyToPMS and a link will be created.</p> <p> NOTE: Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserPassword",
            "description": "<p>Users password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>PropertyId assigned by MyAllocator</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PMSPropertyId",
            "description": "<p>The Unique PropertyId on the PMS (for reference 128 character max) - will be included in callbacks</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyToken",
            "description": "<p>Token does not have any practical use for now.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociatePropertyToPMS",
        "content": "{\n\t\"Auth/UserId\":\"username for myallocator.com\",\n\t\"Auth/UserPassword\":\"password for myallocator.com\",\n\t\"Auth/VendorId\":\"your vendor id\",\n\t\"Auth/VendorPassword\":\"your vendor password\",\n\t\"Auth/PropertyId\":\"property id from myallocator\",\n\t\"PMSPropertyId\":\"username-on-the-remote-pms-system\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/AssociatePropertyToPMS -d@- <<EOJSON\njson={\n\t\"Auth/UserId\":\"username for myallocator.com\",\n\t\"Auth/UserPassword\":\"password for myallocator.com\",\n\t\"Auth/VendorId\":\"your vendor id\",\n\t\"Auth/VendorPassword\":\"your vendor password\",\n\t\"Auth/PropertyId\":\"property id from myallocator\",\n\t\"PMSPropertyId\":\"username-on-the-remote-pms-system\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<AssociatePropertyToPMS>\n<Auth>\n  <UserId>Customer username</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSPropertyId>username-on-the-remote-pms-system</PMSUserId>\n</AssociatePropertyToPMS>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/AssociateUserToPMS",
    "title": "AssociateUserToPMS",
    "name": "AssociateUserToPMS",
    "version": "201601.0.0",
    "description": "<p>Creates a permanent link between an existing myallocator user and a PMS Vendor.   The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),   then in the background pass the user credentials to AssociateUserToPMS and a link will be created.  Any future API calls will not require UserId or UserPassword.</p> <p> NOTE: Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserId",
            "description": "<p>User unique ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserPassword",
            "description": "<p>User password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PMSUserId",
            "description": "<p>The Unique UserId on the PMS (for reference 128 character max) - will be included in callbacks</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Use this token to access other API calls</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociateUserToPMS",
        "content": "{\n  \"Auth/UserId\":\"username for myallocator.com\",\n  \"Auth/UserPassword\":\"password for myallocator.com\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"PMSUserId\":\"username-on-the-remote-pms-system\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/AssociateUserToPMS -d@- <<EOJSON\njson={\n  \"Auth/UserId\":\"username for myallocator.com\",\n  \"Auth/UserPassword\":\"password for myallocator.com\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"PMSUserId\":\"username-on-the-remote-pms-system\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<AssociateUserToPMS>\n<Auth>\n  <UserId>Customer username</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSUserId>username-on-the-remote-pms-system</PMSUserId>\n</AssociateUserToPMS>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingAction",
    "title": "BookingAction",
    "name": "BookingAction",
    "version": "201601.0.0",
    "description": "<p>Booking provides the ability to send incremental &#39;intents&#39; which modify a booking. Currently a limited number of actions are supported, however in the future new actions will be added. Actions are processed in sequence, the first error encountered stops all future actions. After any successful modification to a booking a callback trigger is modified, and the modified timestamp is set. A Response will be returned which provides insight/status on each command. If multiple commands are sent, the first error on any command will stop all further command processing.</p> <h2 id=\"supported-actions\">Supported Actions</h2> <ul> <li>ACK       mark a booking as acknowledged on myallocator UI</li> <li>UNACK     removes the acknowledgement flag</li> <li>READ      mark a booking as read on myallocator UI</li> <li>UNREAD    remove the read flag</li> <li>ADDNOTE   add a note from the property to be shown on myallocator UI</li> </ul> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId      Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MyAllocatorId",
            "description": "<p>Myallocator Booking ID to which to apply actions</p> "
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": false,
            "field": "Actions",
            "description": "<p>List of actions to be done on the booking</p> "
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Action",
            "optional": false,
            "field": "ACK",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ACtion",
            "optional": false,
            "field": "UNACK",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"XXXXX\",\n    \"Actions\":[\n        \"ACK\",\n        [ \"ADDNOTE\", \"Customer called, they will arrive late\"]\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/BookingAction -d@- <<EOJSON\njson={\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"XXXXX\",\n    \"Actions\":[\n        \"ACK\",\n        [ \"ADDNOTE\", \"Customer called, they will arrive late\"]\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingCancel",
    "title": "BookingCancel",
    "name": "BookingCancel",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId      Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MyAllocatorId",
            "description": "<p>Query for a specific myallocator booking id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CancellationReason",
            "description": "<p>Give a reason for the cancellation</p> "
          }
        ]
      }
    },
    "description": "<p>This method allows you to cancel a booking both in myallocator and the channel.  Only very few channels support this, check the &#39;api_cancellation&#39; flag on the  ChannelList call to see which channels support this.</p> <p> If automatic adjustments are enabled, cancelling a booking will trigger updates  to all configured channels. Depending on the cancellation setting it may or  may not restore availability.</p> ",
    "examples": [
      {
        "title": "JSON Example of cancelling a booking",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\",\n    \"CancellationReason\":\"Guest's flight was cancelled\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/BookingCancel -d@- <<EOJSON\njson=\n{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\",\n    \"CancellationReason\":\"Guest's flight was cancelled\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingCreate",
    "title": "BookingCreate",
    "name": "BookingCreate",
    "version": "201501.0.0",
    "description": "<p>Internal Use Only. </p> <p><strong> Booking callback notifications are disabled </strong>for bookings created via BookingCreate. To test booking callback notifications, you can setup BookNow in the web interface for a test property and generate test bookings.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Booking",
            "description": "<p>(see Booking)</p> "
          }
        ],
        "Booking": [
          {
            "group": "Booking",
            "type": "Date",
            "optional": true,
            "field": ".StartDate",
            "description": "<p>YYYY-MM-DD (Date of Arrival)</p> "
          },
          {
            "group": "Booking",
            "type": "Date",
            "optional": true,
            "field": ".EndDate",
            "description": "<p>YYYY-MM-DD  (Date before Departure)</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".Units",
            "description": "<p>number of Rooms</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".RoomTypeId",
            "description": "<p>MyAllocator Room Id</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".RateId",
            "description": "<p>OTA Rate Id</p> "
          },
          {
            "group": "Booking",
            "type": "Currency",
            "optional": true,
            "field": ".RoomDayRate",
            "description": "<p>MyAllocator Room Price (if not specified then a random, incrementing by $10 per day number will be used)</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".RoomDayDescription",
            "description": "<p>A description for the Room within the DayRates container.</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".CustomerFName",
            "description": "<p>Customer First Name</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".CustomerLName",
            "description": "<p>Customer Last Name</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".RoomDesc",
            "description": "<p>Room Description</p> "
          },
          {
            "group": "Booking",
            "type": "Boolean",
            "optional": true,
            "field": ".OccupantSmoker",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantNote",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantLName",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantFName",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".Occupancy",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".Policy",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".ChannelRoomType",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON BookingCreate Request",
        "content": "{\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"Booking\":{\n\t\"StartDate\":\"YYYY-MM-DD\",\n\t\"EndDate\":\"YYYY-MM-DD\",\n\t\"RoomId\":###,\n\t\"Units\":##,\n\t\"Price\":\"3.00\"\n\t}\n}",
        "type": "json"
      },
      {
        "title": "XML BookingCreate Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<LoopBookingCreate>\n<Auth>\n\t<UserToken>User token</UserToken>\n\t<PropertyId>###</PropertyId>\n</Auth>\n<Booking>\n\t<StartDate>YYYY-MM-DD</StartDate>\n\t<EndDate>YYYY-MM-DD</EndRate>\n</Booking>\n</LoopBookingCreate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/BookingCreate -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"Booking\":{\n\t\"StartDate\":\"YYYY-MM-DD\",\n\t\"EndDate\":\"YYYY-MM-DD\",\n\t\"RoomId\":###,\n\t\"Units\":##,\n\t\"Price\":\"3.00\"\n\t}\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingList",
    "title": "BookingList",
    "name": "BookingList",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId         Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ArrivalStartDate",
            "description": "<p>Query for date of arrival (first day of staying).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ArrivalEndDate",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationStartDate",
            "description": "<p>Query for date of the book modification on myallocator.com.  A modification timestamp will occur if the booking has been cancelled or changes. When a new Booking is received the ModificationDate will be initially set to the creation date.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationEndDate",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationStartDate",
            "description": "<p>Creation date of booking on MyAllocator (probably only useful for testing - use ModificationStartDate for production)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationEndDate",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationStartDateTime",
            "description": "<p>Same as CreationStartDate but uses YYYY-MM-DD hh:mm:ss format</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationEndDateTime",
            "description": "<p>Same as CreationEndDate but uses YYYY-MM-DD hh:mm:ss format</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationStartDateTime",
            "description": "<p>Same as ModificationStartDate but uses YYYY-MM-DD hh:mm:ss format</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationEndDateTime",
            "description": "<p>Same as ModificationEndDate but uses YYYY-MM-DD hh:mm:ss format</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "NotificationQueuedStartDateTime",
            "description": "<p>for querying QueuedNotifications (will always return latest version of booking)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "NotificationQueuedEndDateTime",
            "description": "<p>see NotificationQueuedStartDate</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "OrderId",
            "description": "<p>Query for a specific order id (assigned by OTA)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "BookingId",
            "description": "<p>Query for a specific booking id (also known as &quot;MyAllocatorId&quot;)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreditCardPassword",
            "description": "<p>Password to decrypt booking credit card details. Also requires Options/IncludePaymentData option to be true.</p> "
          },
          {
            "group": "Request",
            "type": "CurrencyCode",
            "optional": true,
            "field": "Options/NormalizeToCurrency",
            "description": "<p>Converts the booking prices into a single currency (at current exchange rates)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeArchived",
            "description": "<p>Bookings are archived a few months after their departure date, this will include historical data, <em>at this time only compatible with Arrival</em>Date)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludePaymentData",
            "description": "<p>Include decrypted credit card details for returned bookings. The CreditCardPassword parameter must also be included and the vendor must be configured as PCI compliant.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Limit",
            "description": "<p>Limit results to this number of bookings</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Skip",
            "description": "<p>For use in conjunction with Limit, offsets the result count</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/Acknowledged",
            "description": "<p>If true returns only bookings acknowleged by the customer on the myallocator UI. If false only returns bookings that are not acknowleged.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/Read",
            "description": "<p>If true returns only bookings looked at by the customer on the myallocator UI. If false only returns bookings that are not looked at.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SearchQuery",
            "description": "<p>Filter by bookings matching this search query (fields searched: Customer first and last name, customer email address, OrderId and BookingId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SortBy",
            "description": "<p>Sort ascending by &#39;ArrivalDate&#39;, &#39;CreationDate&#39; or &#39;ModificationDate&#39; (equals CreationDate if never modified)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SortByDesc",
            "description": "<p>Sort descending by &#39;ArrivalDate&#39;, &#39;CreationDate&#39; or &#39;ModificationDate&#39; (equals CreationDate if never modified)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeCount",
            "description": "<p>Include the count for how many bookings match the search (not taking limit into account)</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeNotes",
            "description": "<p>Include notes added by the hotel on the myallocator inbox</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeVersionData",
            "description": "<p>Includes an additional array with details of previous versions of this booking (only when modifications exist). Cannot be used together with Version parameter.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Version",
            "description": "<p>Return older version of booking. Version 0 is the initial booking, Version 1 second oldest and so on. Without this option we always return the most recent.</p> "
          }
        ]
      }
    },
    "description": "<p>This method allows you to query for bookings made to a specific property  by booking date, modification date or arrival date.</p> <p> It is important to know that not every booking that is returned through  the API neccessarily resulted in an adjustment of the other channels. If the  booking is not mapped to any rooms on our system, or if the channel  has just been setup, the adjustment will not be carried out.  The requests consists of search criteria by date. Only specify the  StartDate/EndDate of one criteria.  note: formerly BookingList (v1).</p> <p> <strong> Data Formatting </strong>  Different channels return a different amount of information about a booking, therefore many fields are optional. (Sorry this isn&#39;t more useful, we&#39;re working on addressing this)</p> <p><strong> Best Pratices </strong></p> <ul> <li>Callbacks are the fastest, best, and preferred way of receiving Booking data. </li> <li>Every effort will be made to synchronize the callback data format and this format. (You can/should use the same data parsing code)</li> <li>BookingList method should only be used as a backup to correct errors or lost callbacks. Or to periodically verify integrity of data. </li> <li>Always use ModificationStartDate ModificationEndDate in production. </li> <li>If a change/cancellation is received then the modification date will also be different from the creation date)</li> <li>Do not frequently poll this API, one call, per property, every 30 minutes is considered &quot;Acceptable Usage&quot;. </li> <li>It is acceptable use for a PMS to burst on this API when initially pulling down data for an existing MA client.</li> </ul> ",
    "examples": [
      {
        "title": "XML Example of querying for bookings",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<BookingList>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <Options>\n\t<NormalizeToCurrency>USD</NormalizeToCurrency>\n </Options>\n <!-- NOTE: Arrival, Creation, Modification cannot *actually* be used together -->\n <ArrivalStartDate>2010-01-01</ArrivalStartDate>\n <ArrivalEndDate>2013-01-01</ArrivalEndDate>\n <CreationStartDate>2010-01-01</CreationStartDate>\n <CreationEndDate>2013-01-01</CreationEndDate>\n <ModificationStartDate>2010-01-01</ModificationStartDate>\n <ModificationEndDate>2013-01-01</ModificationEndDate>\n</BookingList>",
        "type": "json"
      },
      {
        "title": "JSON Example of quering for bookings",
        "content": "{\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\",\n\t\"Auth/PropertyId\":\"\",\n\t\"ModificationStartDate\":\"2010-01-01\",\n\t\"ModificationEndDate\":\"2010-01-02\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/BookingList -d@- <<EOJSON\njson=\n{\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\",\n\t\"Auth/PropertyId\":\"\",\n\t\"ModificationStartDate\":\"2010-01-01\",\n\t\"ModificationEndDate\":\"2010-01-02\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Querying for bookings",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<BookingListResponse>\n <Bookings>\n   <Booking>\n     <Channel>hb2</Channel>\n     <StartDate>2012-01-01</StartDate>\n     <EndDate>2012-01-03</EndDate>\n     <IsCancellation>false</IsCancellation>\n     <MyallocatorId>4d7e47e467458b927c000000</MyallocatorId>\n     <MyallocatorCreationDate>2011-03-14</MyallocatorCreationDate>\n     <MyallocatorCreationTime>16:52:52</MyallocatorCreationTime>\n     <MyallocatorModificationDate>2011-03-14</MyallocatorModificationDate>\n     <MyallocatorModificationTime>16:52:52</MyallocatorModificationTime>\n     <OrderId>1234</OrderId>\n     <OrderDate>2011-11-11</OrderDate>\n     <OrderTime>11:11:00</OrderTime>\n     <OrderSource>Hostelbookers.com</OrderSource>\n     <OrderAdults>2</OrderAdults>\n     <OrderChildren>2</OrderChildren>\n     <Deposit>12.00</Deposit>\n     <TotalPrice>82.00</TotalPrice>\n     <TotalCurrency>GBP</TotalCurrency>\n\n     <Customers>\n       <Customer>\n         <CustomerFName>John</CustomerFName>\n         <CustomerLName>Smith</CustomerLName>\n         <CustomerAddress>522 Main Rd</CustomerAddress>\n         <CustomerArrivalTime>13:00</CustomerArrivalTime>\n         <CustomerEmail>john@googlemail.com</CustomerEmail>\n         <CustomerNationality>UK</CustomerNationality>\n         <CustomerPhone>+44 1234567890</CustomerPhone>\n         <CustomerCompany>Johnston Ltd.</CustomerCompany>\n         <CustomerCity>Stirling</CustomerCity>\n         <CustomerState>Stirlingshire</CustomerState>\n         <CustomerPostCode>FK8 2HE</CustomerPostCode>\n         <CustomerCountry>UK</CustomerCountry>\n         <CustomerNote>Bringing a dog</CustomerNote>\n       </Customer>\n     </Customers>\n\n     <Rooms>\n       <Room>\n         <StartDate>2012-01-01</StartDate>\n         <EndDate>2012-01-03</EndDate>\n         <Price>40.00</Price>\n         <Currency>GBP</Currency>\n         <RoomTypeIds>\n           <RoomTypeId>117</RoomTypeId>\n         </RoomTypeIds>\n         <RoomDesc>2 peoples (1Double bed)</RoomDesc>\n         <Units>2</Units>\n       </Room>\n       <Room>\n         <StartDate>2012-01-02</StartDate>\n         <EndDate>2012-01-02</EndDate>\n         <Price>42.00</Price>\n         <Currency>GBP</Currency>\n         <RoomTypeIds>\n           <RoomTypeId>119</RoomTypeId>\n         </RoomTypeIds>\n         <RoomDesc>Dormitory Room</RoomDesc>\n         <Units>4</Units>\n       </Room>\n     </Rooms>\n\n   </Booking>\n </Bookings>\n</BookingListResponse>",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Channel",
            "description": "<p>2-4 letter channel code</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "StartDate",
            "description": "<p>Date of arrival (YYYY-MM-DD)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EndDate",
            "description": "<p>Date before day of departure (YYYY-MM-DD)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "IsCancellation",
            "description": "<p>\\textit{true} or \\textit{false}</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorId",
            "description": "<p>Booking ID on myallocator.com (hexadecimal number)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorCreationDate",
            "description": "<p>Date of booking creation on myallocator.com</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorCreationTime",
            "description": "<p>Time of booking creation on myallocator.com</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorModificationDate",
            "description": "<p>Date of booking modification on myallocator (in case of a cancellation the modification date is different from the creation date)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorModificationTime",
            "description": "<p>Time of booking modification on myallocator.com</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>Booking ID on the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Rooms/Room",
            "description": "<p>List of booked room</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomTypeId",
            "description": "<p>&amp; List of booked myallocator.com room IDs. Several channel room can mapped to one myallocator.com room. If \\textit{-1} it means that we couldn&#39;t match the channel room to one of our rooms.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>Number of booked rooms (for private rooms) or beds (for shared rooms</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderSource",
            "description": "<p>Which website the booking originates from</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderDate",
            "description": "<p>The date the booking has been created on the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderTime",
            "description": "<p>The time the booking has been created on the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderAdults",
            "description": "<p>Number of adults</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderChildren",
            "description": "<p>Number of children</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Deposit",
            "description": "<p>Amount of money already taken as a deposit</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "DepositCurrency",
            "description": "<p>Currency of deposit</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Commission",
            "description": "<p>Fee taken by the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CommissionCurrency",
            "description": "<p>Currency of fee taken by the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CommissionIncludedInTotal",
            "description": "<p>Whether the commission is included in the TotalPrice. Can be \\textit{true} or \\textit{false}.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TotalPrice",
            "description": "<p>Total cost of booking</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TotalCurrency",
            "description": "<p>Currency for total cost of booking</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Customers/Customer",
            "description": "<p>Customer details (can be more than one)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerFName",
            "description": "<p>First name</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerLName",
            "description": "<p>Family name (or if CustomerFName is empty, both first and last name)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Email address</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerGender",
            "description": "<p>Gender</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerSmoker",
            "description": "<p>Whether customer is a smoker. Can be \\textit{true} or \\textit{false}.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPhone",
            "description": "<p>Phone number</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPhoneMobile",
            "description": "<p>Mobile phone number</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerFax",
            "description": "<p>Fax number</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerAddress",
            "description": "<p>Address</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCompany",
            "description": "<p>Company name</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCompanyDepartment",
            "description": "<p>Company deparment name</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCity",
            "description": "<p>City</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerState",
            "description": "<p>State</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPostCode",
            "description": "<p>Post code</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCountry",
            "description": "<p>Address country name (not neccessarily a 2/3-letter code).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerNationality",
            "description": "<p>Nationality (not neccessarily a 3-letter code)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerArrivalTime",
            "description": "<p>Time of arrival</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerNote",
            "description": "<p>Note to the property owner</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Price",
            "description": "<p>Price for this room and stay</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency for the price</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomDesc",
            "description": "<p>Room description on the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RateDesc",
            "description": "<p>Rate description on the channel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of persons this room is booked for</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantFName",
            "description": "<p>First name of occupant of this room</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantLName",
            "description": "<p>Family name of occupant of this room (or if OccupantFName is empty, both first and last name)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantSmoker",
            "description": "<p>whether occupant is a smoker. Can be \\textit{true} or \\textit{false}.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantNote",
            "description": "<p>Note to the property owner</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Adults",
            "description": "<p>Number of adults staying in this room</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Children",
            "description": "<p>Number of children staying in this room</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Wheter breakfast was ordered alogn with the booking. Can be \\textit{true} or \\textit{false}.\\</p> "
          }
        ]
      }
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingPaymentDownload",
    "title": "BookingPaymentDownload",
    "name": "BookingPaymentDownload",
    "version": "201601.0.0",
    "description": "<p>This call can be used to retrieve credit card details from specific bookings.   This applies only to channels that currently send us the credit card details (booking.com, Expedia, BookNow) and only for bookings that were created after connection with myallocator has been made.</p> <p> This API call is not enabled for vendors by default. You need to send us your PCI compliance certification before this can be done. It&#39;s also neccessary to send along the credit card viewing password (different from the user login). For best practise do not store this password in your system but rather get it from the customer and send it on directly. This way the password will only be in the memory and not as accessible.</p> <p> The credit card viewing password needs to be changed ever 365 by the property. It can happen that the property has reset their password in which case our support team needs to reencrypt the existing details. This is not an automatic process and can take between 1 and 3 business days.</p> <p> Applicable error codes are 26 - 30. Even though logically this would be a GET call, we use POST for this one to prevent the password from going to the webserver log files.</p> <p> Bookings can have multiple credit card details stored within them, as they have been updated by the guest. The response will list credit card details with the most recent credit card first.</p> <p> All instances of credit card details do not contain all fields. We pass along the fields we receive from channels.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Required to download a Booking.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CreditCardPassword",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "OrderId",
            "description": "<p>OrderId from the OTA    (required if no MyAllocatorId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MyAllocatorId",
            "description": "<p>Id assigned by MyAllocator (required if no OrderId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Version",
            "description": "<p>Returns credit card details from a specific version of the booking. Without this parameter the most recent details are returned.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON BookingPaymentDownload",
          "content": "{\n    \"Payments\": [\n         {\n             \"CardNumber\": \"4111111111111111\",\n             \"CardHolderName\": \"Martin Seamus McFly\",\n             \"CardCVV\": \"123\",\n             \"CardExpiryMonth\": \"11\",\n             \"CardExpiryYear\": \"2018\",\n             \"CardHolderAddress\": \"100 Easy St.\",\n             \"CardHolderCity\": \"Mountain View\",\n             \"CardHolderState\": \"CA\",\n             \"CardHolderPostCode\": \"94043\",\n             \"CardHolderCountry\": \"US\"\n         },\n         {\n             \"CardNumber\": \"4111111111111111\",\n             \"CardHolderName\": \"Emmett Lathrop Brown\",\n             \"CardCVV\": \"123\",\n             \"CardExpiryMonth\": \"11\",\n             \"CardExpiryYear\": \"2018\",\n             \"CardHolderAddress\": \"101 Easy St.\",\n             \"CardHolderCity\": \"Mountain View\",\n             \"CardHolderState\": \"CA\",\n             \"CardHolderPostCode\": \"94043\",\n             \"CardHolderCountry\": \"US\"\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl https://api.myallocator.com/pms/v201408/json/BookingPaymentDownload -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"CreditCardPassword\":\"some_password\",\n    \"MyAllocatorId\": \"some_ma_id\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/BookingPaymentPasswordValidate",
    "title": "BookingPaymentPasswordValidate",
    "name": "BookingPaymentPasswordValidate",
    "version": "201601.0.0",
    "description": "<p>This call can be used to check credit card password.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Required to download a Booking.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CreditCardPassword",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<BookingPaymentPasswordValidate>\n  <Auth>\n    <UserToken>Customer User Token</UserToken>\n    <PropertyId>Property ID on myallocator.com</PropertyId>\n    <VendorId>Your Vendor ID</VendorId>\n    <VendorPassword>Your Vendor Password</VendorPassword>\n  </Auth>\n  <CreditCardPassword>some_password</CreditCardPassword>\n</BookingPaymentPasswordValidate>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"CreditCardPassword\":\"some_password\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/BookingPaymentPasswordValidate -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"CreditCardPassword\":\"some_password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<BookingPaymentPasswordValidateResponse PasswordValid=\"true\">\n  <Success>true</Success>\n</BookingPaymentPasswordValidateResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "   {\n\t\"Success\":boolean,\n\t\"PasswordValid\":boolean,\n\t\"ErrorMsg\":\"Reason why password was invalid\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ChannelList",
    "title": "ChannelList",
    "name": "ChannelList",
    "version": "201601.0.0",
    "description": "<p>Dumps information about all known channels, their status, and supported fields.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Channels/cid",
            "description": "<p>a 2-4 digit code used to represent the OTA/Channel.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON ChannelList Response",
          "content": "{\n\t'Channels':{\n\t\t'cid':{\n\t\t\t'name':'Name of Channel (ex: Booking.com),\n\t\t\t'signupLink'=>'http://domain/url.to.signup',\n\t\t\t'requireActivation':'true|false',\n\t\t\t'calendarBased':'true|false',\n\t\t\t'isLive'=>'true|false',\n\t\t\t'isBeta'=>'true|false',\n\t\t\t'PropertyInput':[\n\t\t\t\t{ 'name':'field_id', label=>'Name of Input', type=>'inputtype' },\n\t\t\t\t{ 'name':'field_two', label=>'User Prompt', type=>'inputtype' },\n\t\t\t\t]\n\t\t\t'RoomInput':[\n\t\t\t\t{ 'name':'field_id', label=>'Name of Input', type=>'inputtype' },\n\t\t\t\t{ 'name':'field_two', label=>'User Prompt', type=>'inputtype' },\n\t\t\t\t]\n\t\t\t}\n\t\t}\n}",
          "type": "json"
        },
        {
          "title": "XML ChannelList Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ChannelListResponse>\n  <Channels>\n    <Channel cid=\"hw2\">\n      <name option=\"Hostelworld v2\" />\n      <activationEmail option=\"api.property.activation@webresint.com\" />\n      <aliases option=\"Also known as Hostels.com\" />\n      <isBeta option=\"0\" />\n      <lockedLogin option=\"1\" />\n      <manual_enable option=\"1\" />\n      <module option=\"CHANNEL::Hostelworld2\" />\n      <requireActivation option=\"1\" />\n      <setupMsg option=\"Please enter your Hostelworld Inbox ID and click 'Enable'.\n                    We'll then contact Hostelworld for you to get you enabled\n                    as quickly as possible.\" />\n      <signupLink option=\"http://www.hostelworld.com/hostelsignup/stage1\" />\n    </Channel>\n    <Channel cid=\"rep\">\n      <name option=\"TravelRepublic\" />\n      <aliases option=\"\" />\n      <currencyChoice option=\"1\" />\n      <module option=\"CHANNEL::TravelRepublic\" />\n      <setupExtra name=\"option\" currency=\"1\">\n      </setupExtra>\n      <signupLink option=\"https://www.travelrepublic.co.uk/Supplier/Logon.aspx\" />\n    </Channel>\n  </Channels>\n</ChannelListResponse>",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Channels",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/ChannelList -d@- <<EOJSON\njson={\n\t\"Channels\":{\n\t\t\"cid\":{\n\t\t\t\"name\":\"Name of Channel (ex: Booking.com)\",\n\t\t\t\"signupLink\":\"http://domain/url.to.signup\",\n\t\t\t\"requireActivation\":\"true|false\",\n\t\t\t\"calendarBased\":\"true|false\",\n\t\t\t\"isLive\":\"true|false\",\n\t\t\t\"isBeta\":\"true|false\",\n\t\t\t\"PropertyInput\":[\n\t\t\t\t{ \"name\":\"field_id\", label:\"Name of Input\", type:\"inputtype\" },\n\t\t\t\t{ \"name\":\"field_two\", label:\"User Prompt\", type:\"inputtype\" }\n\t\t\t\t],\n\t\t\t\"RoomInput\":[\n\t\t\t\t{ \"name\":\"field_id\", label:\"Name of Input\", type:\"inputtype\" },\n\t\t\t\t{ \"name\":\"field_two\", label:\"User Prompt\", type:\"inputtype\" }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "JSON ChannelList Response",
        "content": "\n{\n   \"Channels\" : {\n      \"bd\" : {\n         \"RoomInput\" : [\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_type\",\n               \"type\" : \"text\"\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_type\",\n               \"type\" : \"text\"\n            },\n            {\n               \"name\" : \"bd_diff\",\n               \"type\" : \"currency\"\n            }\n         ],\n         \"isLive\" : \"true\",\n         \"isBeta\" : \"true\",\n         \"name\" : \"BestDay\",\n         \"isCalendarBased\" : \"false\",\n         \"signupLink\" : \"http://extranetbeta.bestday.com/HOME/REGISTER\",\n         \"isLockedLogin\" : \"false\",\n         \"PropertyInput\" : [\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_id\",\n               \"type\" : \"text\",\n               \"label\" : \"User ID\",\n               \"validate\" : 1\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_password\",\n               \"type\" : \"text\",\n               \"label\" : \"Password\"\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_propid\",\n               \"type\" : \"text\",\n               \"label\" : \"Property ID\"\n            }\n         ]\n      },\n      \"rec\" : {\n         \"RoomInput\" : [\n            {\n               \"length\" : 50,\n               \"name\" : \"rec_type\",\n               \"type\" : \"text\"\n            },\n            {\n               \"name\" : \"rec_rate\",\n               \"type\" : \"integer\"\n            },\n            {\n               \"name\" : \"rec_diff\",\n               \"type\" : \"currency\"\n            }\n         ],\n         \"isLive\" : \"true\",\n         \"isBeta\" : \"false\",\n         \"name\" : \"Reconline\",\n         \"isCalendarBased\" : \"false\",\n         \"signupLink\" : \"http://www.reconline.com/e/hotels.html\",\n         \"isLockedLogin\" : \"true\",\n         \"PropertyInput\" : [\n            {\n               \"activation\" : 1,\n               \"name\" : \"rec_id\",\n               \"label\" : \"Hotel ID\",\n               \"validate\" : 1\n            },\n            {\n               \"activation\" : 1,\n               \"stored\" : 0,\n               \"name\" : \"rec_city\",\n               \"label\" : \"City\"\n            }\n         ]\n      }\n    }\n}",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/HelloWorld",
    "title": "HelloWorld",
    "name": "HelloWorld",
    "version": "201601.0.0",
    "description": "<table> <thead> <tr> <th>Call</th> <th>Notes + Authentication Requirements</th> </tr> </thead> <tbody> <tr> <td>HelloWorld</td> <td>No Authentication Required</td> </tr> <tr> <td>HelloUser</td> <td>Requires <em>VALID</em> User Credentials</td> </tr> <tr> <td>HelloVendor</td> <td>Requires <em>VALID</em> Vendor Credentials</td> </tr> <tr> <td>HelloVendorUser</td> <td>Requires <em>VALID</em> User <em>AND</em> Vendor Credentials</td> </tr> </tbody> </table> <p> This method is diagnostic in nature, it is intended to provide a simple echo/response &quot;My First API call&quot;,  <em>IT HAS NO PURPOSE</em> besides simply returning whatever parameters you send it (no authentication required).  (Note: HelloVendor and HelloVendorUser return a &quot;callback_delay&quot; parameter which should be zero, any positive number indicates a problem [check your server logs])  ssl_protocol is also included in the response, possible values of SSLv3, TLSv1 will be both be disabled on July 20th, 2016 -- valid values are: TLSv1.1, TLSv1.2 (assuming a secure connection)  additionally a &quot;ssl_pci_compliant&quot; response of &quot;yes&quot; or &quot;no&quot; is also returned, this must be &quot;yes&quot; for BookingPaymentDownload to be used on the same type of connection.</p> ",
    "examples": [
      {
        "title": "XML Hello Request",
        "content": "GET /pms/v201408/xml/Hello\nHTTP/1.1 200 OK\nContent-Type: text/xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<HelloWorld>\n <hello>world</hello>\n</HelloWorld>",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "GET /pms/v201408/json/HelloWorld\nContent-Type: application/json\n{ 'hello':'world' }",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/HelloWorld -d 'json={\"Hello\":\"World\"}'",
        "type": "json"
      },
      {
        "title": "JSON HelloVendor Request",
        "content": "GET /pms/v201408/json/HelloWorld\nContent-Type: application/json\n{ \n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'hello':'world',\n'callback_delay':0,\n'ssl_protocol':'TLSv1.2'\n}",
        "type": "json"
      },
      {
        "title": "curl w/XML",
        "content": "curl http://api.myallocator.com/pms/v201408/xml/Hello --data 'xmlRequestString=\n<HelloWorld>\n<Auth>\n</Auth>\n<Foo>Bar</Foo>\n</HelloWorld>'",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/LoopARIList",
    "title": "LoopARIList",
    "name": "LoopARIList",
    "version": "201601.0.0",
    "description": "<p>Displays a range of Availability and Rate information for the Loopback Channel. For now, this dumps all data in the system (for the Property)</p> ",
    "examples": [
      {
        "title": "JSON Request",
        "content": "{\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/LoopARIList -d@- <<EOJSON\njson={\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/LoopBookingAction",
    "title": "LoopBookingAction",
    "name": "LoopBookingAction",
    "version": "201601.0.0",
    "description": "<p>See &quot;BookingAction&quot; for how to use this call.</p> ",
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/LoopBookingAction -d@- <<EOJSON\njson={\n...\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/LoopBookingCreate",
    "title": "LoopBookingCreate",
    "name": "LoopBookingCreate",
    "version": "201601.0.0",
    "description": "<p>Create a new booking in the Loopback Channel.  Parameters are optional and if not specified then booking will be populated with DWIW (Do What I Want) style data. See the &quot;BookingList&quot; api call for a complete discussion of Booking related fields.</p> <p><strong> Booking callback notifications are disabled </strong> for bookings created via LoopBookingCreate. To test booking callback notifications, you can setup BookNow in the web interface for a test property and generate test bookings.</p> <p><strong> Bookings will not automatically adjust on myallocator or the channels </strong> for bookings created via LoopBookingCreate. To test booking adjustments, you can setup BookNow in the web interface for a test property and generate test bookings.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Booking",
            "description": "<p>(see Booking)</p> "
          }
        ],
        "Booking": [
          {
            "group": "Booking",
            "type": "Date",
            "optional": true,
            "field": ".StartDate",
            "description": "<p>YYYY-MM-DD (Date of Arrival)</p> "
          },
          {
            "group": "Booking",
            "type": "Date",
            "optional": true,
            "field": ".EndDate",
            "description": "<p>YYYY-MM-DD  (Date before Departure)</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".Units",
            "description": "<p>number of Rooms</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".RoomTypeId",
            "description": "<p>MyAllocator Room Id</p> "
          },
          {
            "group": "Booking",
            "type": "Integer",
            "optional": true,
            "field": ".RateId",
            "description": "<p>OTA Rate Id</p> "
          },
          {
            "group": "Booking",
            "type": "Currency",
            "optional": true,
            "field": ".RoomDayRate",
            "description": "<p>MyAllocator Room Price (if not specified then a random, incrementing by $10 per day number will be used)</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".RoomDayDescription",
            "description": "<p>A description for the Room within the DayRates container.</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".CustomerFName",
            "description": "<p>Customer First Name</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".CustomerLName",
            "description": "<p>Customer Last Name</p> "
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".RoomDesc",
            "description": "<p>Room Description</p> "
          },
          {
            "group": "Booking",
            "type": "Boolean",
            "optional": true,
            "field": ".OccupantSmoker",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantNote",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantLName",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".OccupantFName",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".Occupancy",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".Policy",
            "description": ""
          },
          {
            "group": "Booking",
            "type": "String",
            "optional": true,
            "field": ".ChannelRoomType",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON LoopBookingCreate Request",
        "content": "{\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/UserToken\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"Booking\":{\n        \"StartDate\": \"2016-08-10\",\n        \"EndDate\": \"2016-08-11\",\n        \"Units\": \"1\",\n        \"RoomTypeId\": \"83651\",\n        \"RateId\": \"123\",\n        \"RoomDayRate\": \"100.00\",\n        \"RoomDayDescription\": \"A room day description!\",\n        \"CustomerFName\": \"Bob\",\n        \"CustomerLName\": \"Smith\",\n        \"RoomDesc\": \"A room description!\",\n        \"OccupantSmoker\": \"false\",\n        \"OccupantNote\": \"Please do not put me by the elevator. Thanks!\",\n        \"OccupantFName\": \"Tyler\",\n        \"OccupantLName\": \"Green\",\n        \"Occupancy\": \"1\",\n        \"Policy\": \"No smoking.\",\n        \"ChannelRoomType\": \"123\"\n    }\n}",
        "type": "json"
      },
      {
        "title": "XML LoopBookingCreate Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<LoopBookingCreate>\n<Auth>\n    <UserToken>User token</UserToken>\n    <PropertyId>###</PropertyId>\n</Auth>\n<Booking>\n    <StartDate>YYYY-MM-DD</StartDate>\n    <EndDate>YYYY-MM-DD</EndRate>\n</Booking>\n</LoopBookingCreate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/LoopBookingCreate -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"Booking\":{\n    \"StartDate\": \"2016-08-10\",\n    \"EndDate\": \"2016-08-11\",\n    \"Units\": \"1\",\n    \"RoomTypeId\": \"83651\",\n    \"RateId\": \"123\",\n    \"RoomDayRate\": \"100.00\",\n    \"RoomDayDescription\": \"A room day description!\",\n    \"CustomerFName\": \"Bob\",\n    \"CustomerLName\": \"Smith\",\n    \"RoomDesc\": \"A room description!\",\n    \"OccupantSmoker\": \"false\",\n    \"OccupantNote\": \"Please do not put me by the elevator. Thanks!\",\n    \"OccupantFName\": \"Tyler\",\n    \"OccupantLName\": \"Green\",\n    \"Occupancy\": \"1\",\n    \"Policy\": \"No smoking.\",\n    \"ChannelRoomType\": \"123\"\n\t}\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "JSON LoopBookingCreate Response",
          "content": "{\n    \"Booking\" : {\n        \"MyallocatorCreationDate\" : \"2016-08-01\",\n        \"Customers\" : [\n            {\n                \"CustomerFName\" : \"Bob\",\n                \"CustomerLName\" : \"Smith\",\n                \"CustomerNote\" : \"\",\n                \"CustomerEmail\" : \"test@testing.com\"\n            }\n        ],\n        \"Acknowledged\" : false,\n        \"MyallocatorModificationDate\" : \"2016-08-01\",\n        \"MyallocatorModificationTime\" : \"23:48:26\",\n        \"PropertyId\" : ####,\n        \"StartDate\" : \"2016-08-10\",\n        \"EndDate\" : \"2016-08-11\",\n        \"MyallocatorCreationTime\" : \"23:48:26\",\n        \"OrderId\" : \"22326EC417B3-8F4A-6E11-2485-063BDF07\",\n        \"IsCancellation\" : false,\n        \"MarkedAsRead\" : false,\n        \"Channel\" : \"loop\",\n        \"Version\" : 0,\n        \"Rooms\" : [\n            {\n                \"DayRates\" : [\n                    {\n                        \"RateId\" : \"123\",\n                        \"Description\" : \"A fun room day description!\",\n                        \"Rate\" : \"100.00\",\n                        \"Date\" : \"2016-08-10\"\n                    },\n                    {\n                        \"RateId\" : \"123\",\n                        \"Description\" : \"A fun room day description!\",\n                        \"Rate\" : \"100.00\",\n                        \"Date\" : \"2016-08-11\"\n                    }\n                ],\n                \"OccupantSmoker\" : false,\n                \"OccupantFName\" : \"Tyler\",\n                \"OccupantLName\" : \"Green\",\n                \"Units\" : \"1\",\n                \"StartDate\" : \"2016-08-10\",\n                \"Occupancy\" : \"1\",\n                \"EndDate\" : \"2016-08-11\",\n                \"RoomTypeIds\" : [\n                    83651\n                ],\n                \"RoomDesc\" : \"A fun room description!\",\n                \"Price\" : 200,\n                \"RateId\" : \"123\",\n                \"RateDesc\" : \"Standard Rate\",\n                \"Currency\" : \"USD\",\n                \"OccupantNote\" : \"Please do not put me by the elevator. Thanks!\",\n                \"Policy\" : \"No smoking.\",\n                \"ChannelRoomType\" : \"123\"\n            }\n        ],\n        \"MyallocatorId\" : \"70FDB360-5842-11E6-A4F8-3B714CE62322\"\n    },\n    \"Success\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/LoopBookingCreate",
    "title": "LoopBookingCreate",
    "name": "LoopBookingCreate",
    "version": "201501.0.0",
    "description": "<p>Create a new booking in the Loopback Channel. Parameters are optional and if not specified then booking will be populated with DWIW (Do What I Want) style data. See the &quot;BookingList&quot; api call for a complete discussion of Booking related fields.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Booking",
            "description": "<p>(see Booking)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON LoopBookingCreate Request",
        "content": "{\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"Booking\":{\n\t\"StartDate\":\"YYYY-MM-DD\",\n\t\"EndDate\":\"YYYY-MM-DD\",\n\t\"RoomId\":###,\n\t\"Units\":##,\n\t\"Price\":\"3.00\"\n\t}\n}",
        "type": "json"
      },
      {
        "title": "XML LoopBookingCreate Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<LoopBookingCreate>\n<Auth>\n\t<UserToken>User token</UserToken>\n\t<PropertyId>###</PropertyId>\n</Auth>\n<Booking>\n\t<StartDate>YYYY-MM-DD</StartDate>\n\t<EndDate>YYYY-MM-DD</EndRate>\n</Booking>\n</LoopBookingCreate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/LoopBookingCreate -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"Booking\":{\n\t\"StartDate\":\"YYYY-MM-DD\",\n\t\"EndDate\":\"YYYY-MM-DD\",\n\t\"RoomId\":###,\n\t\"Units\":##,\n\t\"Price\":\"3.00\"\n\t}\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/LoopBookingList",
    "title": "LoopBookingList",
    "name": "LoopBookingList",
    "version": "201601.0.0",
    "description": "<p>Displays all bookings (or a range) in the Loopback Channel. See BookingList for examples of parameters/incoming calls and output.</p> ",
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/LoopBookingList -d@- <<EOJSON\njson={\n...\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyChannelList",
    "title": "PropertyChannelList",
    "name": "PropertyChannelList",
    "version": "201601.0.0",
    "description": "<p>Lists the channel details associated with a property. Formerly (v1) GetProperties</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com. If not provided, all properties for given user will be returned.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML PropertyChannelList Request",
        "content": "\t<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t<PropertyChannelList>\n\t  <Auth>\n        <UserToken>User token</UserToken>\n\t    <PropertyId>Property ID on myallocator.com </PropertyId>\n\t    <VendorId>Your Vendor ID </VendorId>\n\t    <VendorPassword>Your Vendor Password </VendorPassword>\n\t  </Auth>\n\t</PropertyChannelList>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201609/json/PropertyChannelList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "JSON Response",
          "content": "{\n   \"Properties\" : [\n      {\n         \"Channels\" : {\n            \"enbc\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"bd\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"eb\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"Enabled\"\n            },\n            \"mal\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"oa\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"enz\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"wix\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"HasErrors\"\n               \"lasterror\" : \"Invalid credentials\"\n            },\n            ...\n         },\n         \"PropertyId\" : 1234\n      }\n   ],\n   \"Success\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyCreate",
    "title": "PropertyCreate",
    "name": "PropertyCreate",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyName",
            "description": "<p>Name of hotel/hostel/B\\&amp;B/</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Street",
            "description": "<p>Steet the property is located in, including house number if applicable. Optional for now but will be required in the future.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "City",
            "description": "<p>City the property is located in.City the property is located in. Optional for now but will be required in the future.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PostCode",
            "description": "<p>Postal code (ZIP) the property is located in.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "State",
            "description": "<p>State the property is located in.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property located in.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be (excluded) or empty.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/id",
            "description": "<p>A unique identifier for this (useful if migrating/updating accounts)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/type",
            "description": "<p>an enumeration for provider tokenx|stripe|braintree|shift4</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/key1",
            "description": "<p>a value required by the specific payment provider. (not validated)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "PropertyId",
            "description": "<p>the MyAllocator PropertyId of the freshly created property (store this to reference the property in other calls)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "propertyToken",
            "description": "<p>the token for the newly created property (same as returned by AssociatePropertyToPMS - for future use)</p> "
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed. Previously known as SetLogin/CreateLogin</p> ",
    "examples": [
      {
        "title": "XML Request - Creating a NEW property (and attaching it to a user account)",
        "content": "\t<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t<PropertyCreate>\n\t <Auth>\n\t   <VendorId>Your Vendor ID</VendorId>\n\t   <VendorPassword>Your Vendor Password</VendorPassword>\n\t </Auth>\n\t <PropertyName>Name of property</PropertyName>\n\t <Currency>EUR</Currency>\n\t <Street>Penny Lane 4</Street>\n\t <City>London</City>\n\t <PostCode>N1 9SD</PostCode>\n\t <State>Greater London</State>\n\t <Country>UK</Country>\n\t <Breakfast>IN</Breakfast>\n\t <BookingAdjust>1</BookingAdjust>\n\t <BookingAdjustCancellation>1</BookingAdjustCancellation>\n\t <BookingAdjustModification>1</BookingAdjustModification>\n\t <BookingDownload>1</BookingDownload>\n\t <EmailDefault>default@email.com</EmailDefault>\n\t <EmailChannelBooking>channel@email.com</EmailChannelBooking>\n\t <EmailBookNow>booknow@email.com</EmailBookNow>\n\t <Timezone>UTC</Timezone>\n\t <PaymentPassword>secret</PaymentPassword>\n\t <PrivateRoomPricing>room|person</PrivateRoomPricing>\n\t <Source>domain.com</Source>\n\t <MinLengthOfStay>##</MinLengthOfStay>\n\t <MaxLengthOfStay>0</MaxLengthOfStay>\n\t <DownloadNewBookings>true|false</DownloadNewBookings>\n     <PaymentProviders>\n        <Provider provide_id=\"xxx\" provider_type=\"stripe|tokenx|braintree\" key1=\"value1\" key2=\"value2\" />\n     </PaymentProviders>\n\t</PropertyCreate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyCreate -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"Auth/PropertyId\":\"Your PropertyId\",\n  \"PropertyName\":\"Name of property\",\n  \"Currency\":\"###\",\n  \"Street\":\"Penny Lane 4\",\n  \"City\":\"London\",\n  \"PostCode\":\"N1 9SD\",\n  \"State\":\"Greater London\",\n  \"Country\":\"UK\",\n  \"Breakfast\":\"IN\",\n  \"BookingAdjust\":\"0|1\",\n  \"BookingAdjustCancellation\":\"0|1\",\n  \"BookingAdjustModification\":\"0|1\",\n  \"BookingDownload\":\"0|1\",\n  \"EmailDefault\":\"contact@property.com\",\n  \"EmailChannelBooking\":\"booking@property.com\",\n  \"EmailBookNow\":\"booknow@property.com\",\n  \"PaymentProviders\":[\n      { \"provider_id\":\"xxx\", provider_type:\"stripe|tokenx|braintree\", key1:\"value1\", key2:\"value2\" }\n  ]\n\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserPropertyResponse> \n <Success>true</Success>\n <PropertyId>1234</PropertyId>\n <propertyToken>23094234234234</propertyToken>\n</UserPropertyResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageCreate",
    "title": "PropertyImageCreate",
    "name": "PropertyImageCreate",
    "version": "201601.0.0",
    "description": "<p>This method allows you to create or remove property images on myallocator.com. Please note that you can only send a single PropertyImageCreate or PropertyImageRemove</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Data",
            "description": "<p>Base64 encoded raw image data</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request:",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyImageCreate>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <CreatePropertyImage>\n   <PropertyImages>\n       <PropertyImage>\n         <Filename>double-room.jpg</Filename>\n         <Data>oAAAANSUhEUgAAG2QAABPqCAYAAA[...]</Data>\n       </PropertyImage>\n   </PropertyImages>\n </CreatePropertyImage>\n</PropertyImageCreate>",
        "type": "json"
      },
      {
        "title": "JSON Request:",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n      {\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\"\n      }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyImageCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n      {\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\"\n      }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Data",
            "description": "<p>Base64 encoded raw image data</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<CreatePropertyImageResponse>\n <Success>true</Success>\n <PropertyImage>\n    <PropertyImageId>423</PropertyImageId>\n    <SavedFilename>576421558171c7f5054966d6b637c37e.jpg</SavedFilename>\n </PropertyImage>\n</CreatePropertyImageResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n  \"Method\": \"PropertyImageCreate\",\n  \"PropertyImage\": {\n    \"PropertyImageId\": 423,\n    \"SavedFilename\": \"576421558171c7f5054966d6b637c37e.jpg\"\n  },\n  \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageList",
    "title": "PropertyImageList",
    "name": "PropertyImageList",
    "version": "201601.0.0",
    "description": "<p>Returns a list of uploaded images for the property-level.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyImageList>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n</PropertyImageList>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyImageList -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The property image ID which will reference the property image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "SavedFilename",
            "description": "<p>Filename in our system</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyImageListResponse>\n <PropertyImages>\n   <PropertyImage>\n     <ImageId>343</ImageId>\n     <SavedFilename>d4790aaafdf4512dad0c4f2eafe72946.png</SavedFilename>\n   </PropertyImage>\n\n   <PropertyImage>\n     <ImageId>344</ImageId>\n     <SavedFilename>a92714654b7486ba6ca010f23bf4c0b6.jpg</SavedFilename>\n   </PropertyImage>\n  </PropertyImages>\n</PropertyImageListResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n  \"PropertyImages\" : [\n    {\n      \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=01D0FAB8-5BF6-11E5-8767-3120FD8AEA94.jpg\",\n      \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=01D0FAB8-5BF6-11E5-8767-3120FD8AEA94.jpg\",\n      \"ImageId\" : \"343\",\n      \"SavedFilename\" : \"01D0FAB8-5BF6-11E5-8767-3120FD8AEA94.jpg\"\n    },\n    {\n      \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=4257D9FE-687A-11E5-B908-DDCC3C83E8DD.jpg\",\n      \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=4257D9FE-687A-11E5-B908-DDCC3C83E8DD.jpg\",\n      \"ImageId\" : \"466\",\n      \"SavedFilename\" : \"4257D9FE-687A-11E5-B908-DDCC3C83E8DD.jpg\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageRemove",
    "title": "PropertyImageRemove",
    "name": "PropertyImageRemove",
    "version": "201601.0.0",
    "description": "<p>Remove a property image.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyImageId",
            "description": "<p>of image to be removed.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON Request (single property image)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    'PropertyImage':{ 'PropertyImageId':### }\n}",
        "type": "json"
      },
      {
        "title": "JSON Request (multiple property images)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    'PropertyImages': [\n        { 'PropertyImageId':## },\n        { 'PropertyImageId':## }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyImageRemove -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    'PropertyImage':{ 'PropertyImageId':### }\n}\nEOJSO\nN",
        "type": "json"
      },
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyImageRemove>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <RemovePropertyImages>\n   <PropertyImageIds>\n     <PropertyImageId>35</PropertyImageId>\n     <PropertyImageId>36</PropertyImageId>\n   </PropertyImageIds>\n </RemovePropertyImages>\n</PropertyImageRemove>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyImageRemoveResponse>\n  <Success>true</Success>\n</PropertyImageRemoveResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"Method\" : \"PropertyImageRemove\",\n    \"Success\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyList",
    "title": "PropertyList",
    "name": "PropertyList",
    "version": "201601.0.0",
    "description": "<p>Users on myallocator.com might have more than one property attached to their username.  This request lists which properties are associated with the customer and provides a property ID, needed to update the availability of this property. This request was formerly known as GetProperties (v1)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Options",
            "description": "<p>Container node (Hash) containing list of options</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.ExpiresSoon",
            "description": "<p>Default: 0, If 1 the call returns properties expiring within the next week.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML PropertyList Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyList>\n <Auth>\n   <UserToken>User token</UserToken>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <Options>\n   <ExpiresSoon>0</ExpiresSoon>\n </Options>\n</PropertyList>",
        "type": "json"
      },
      {
        "title": "JSON PropertyList Request",
        "content": "{\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Auth/UserToken\":\"User token\",\n   \"Options\": {\n       \"ExpiresSoon\": 0\n   }\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyList -d \n\t'json={\"Auth/VendorId\":\"\", \"Auth/VendorPassword\":\"\", \"Auth/UserToken\":\"\"}'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The property ID which will reference the property.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>The name of this property as set by the customer.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>3-letter currency code of the default currency set by the customer according to ISO 4217. Informational.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>2-letter country code of the country the property is situated in according to ISO 3166-1 alpha-2 standard. Might be empty as it wasn&#39;t recorded for early customers. Informational.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Billing",
            "description": "<p>The property&#39;s billing status (trial, active, disabled, expires_soon).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Weekend",
            "description": "<p>Obsolete, not used. Please ignore.</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE).</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Uses default user* email if not configured.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML PropertyList Response Success",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyListResponse>\n  <Properties>\n    <Property>\n      <Id>19</Id>\n      <Name>Property 1</Name>\n      <Breakfast></Breakfast>\n      <Currency>GBP</Currency>\n      <Country>GB</Country>\n\t\t<Billing>active</Billing>\n      <Weekend>\n        <Day name=\"Friday\">5</Day>\n        <Day name=\"Saturday\">6</Day>\n      </Weekend>\n      <BookingAdjust>1</BookingAdjust>\n      <BookingAdjustCancellation>1</BookingAdjustCancellation>\n      <BookingAdjustModification>1</BookingAdjustModification>\n      <BookingDownload>1</BookingDownload>\n      <EmailDefault>default@email.com</EmailDefault>\n      <EmailChannelBooking>channel@email.com</EmailChannelBooking>\n      <EmailBookNow>booknow@email.com</EmailBookNow>\n    </Property>\n    \n    <Property>\n      <Id>13</Id>\n      <Name>Property 2</Name>\n      <Breakfast>IN</Breakfast>\n      <Currency>EUR</Currency>\n      <Country>DE</Country>\n\t\t<Billing>active</Billing>\n      <Weekend>\n      </Weekend>\n      <BookingAdjust>0</BookingAdjust>\n      <BookingAdjustCancellation>0</BookingAdjustCancellation>\n      <BookingAdjustModification>0</BookingAdjustModification>\n      <BookingDownload>0</BookingDownload>\n      <EmailDefault>default@email.com</EmailDefault>\n      <EmailChannelBooking>channel@email.com</EmailChannelBooking>\n      <EmailBookNow>booknow@email.com</EmailBookNow>\n    </Property>\n    \n    <Property>\n      <Id>15</Id>\n      <Name>Property 3</Name>\n      <Breakfast>EX</Breakfast>\n      <Currency>GBP</Currency>\n      <Country>GB</Country>\n\t\t<Billing>active</Billing>\n      <Weekend>\n        <Day name=\"Friday\">5</Day>\n        <Day name=\"Saturday\">6</Day>\n        <Day name=\"Sunday\">7</Day>\n      </Weekend>\n      <BookingAdjust>1</BookingAdjust>\n      <BookingAdjustCancellation>1</BookingAdjustCancellation>\n      <BookingAdjustModification>1</BookingAdjustModification>\n      <BookingDownload>1</BookingDownload>\n      <EmailDefault>default@email.com</EmailDefault>\n      <EmailChannelBooking>channel@email.com</EmailChannelBooking>\n      <EmailBookNow>booknow@email.com</EmailBookNow>\n    </Property>\n  </Properties>\n</PropertyListResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyModify",
    "title": "PropertyModify",
    "name": "PropertyModify",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Your PropertyId</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyName",
            "description": "<p>Name of hotel/hostel/B\\&amp;B/...</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property located in.</p> "
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be IN (included), EX (excluded) or empty.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled).</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Uses default user* email if not configured.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/id",
            "description": "<p>A unique identifier for this (useful if migrating/updating accounts)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/type",
            "description": "<p>an enumeration for provider tokenx|stripe|braintree|shift4</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PaymentProviders/key1",
            "description": "<p>a value required by the specific payment provider. (not validated)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Modifying a property",
        "content": "\t<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t<PropertyModify>\n\t <Auth>\n\t   <VendorId>Your Vendor ID</VendorId>\n\t   <VendorPassword>Your Vendor Password</VendorPassword>\n\t </Auth>\n\t <PropertyName>Name of property</PropertyName>\n\t <Currency>EUR</Currency>\n\t <Country>DE</Country>\n\t <Breakfast>IN</Breakfast>\n\t <BookingAdjust>1</BookingAdjust>\n\t <BookingAdjustCancellation>1</BookingAdjustCancellation>\n\t <BookingAdjustModification>1</BookingAdjustModification>\n\t <BookingDownload>1</BookingDownload>\n\t <EmailDefault>default@email.com</EmailDefault>\n\t <EmailChannelBooking>channel@email.com</EmailChannelBooking>\n\t <EmailBookNow>booknow@email.com</EmailBookNow>\n     <PaymentProviders>\n        <Provider id=\"xxx\" type=\"stripe|tokenx|braintree\" key1=\"value1\" key2=\"value2\" />\n     </PaymentProviders>\n\t</PropertyModify>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/PropertyModify -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"Auth/PropertyId\":\"?\",\n  \"PropertyName\":\"Name of property\",\n  \"Currency\":\"###\",\n  \"Country\":\"##\",\n  \"Breakfast\":\"|IN|EX\",\n  \"BookingAdjust\":\"0|1\",\n  \"BookingAdjustCancellation\":\"0|1\",\n  \"BookingAdjustModification\":\"0|1\",\n  \"BookingDownload\":\"0|1\",\n  \"EmailDefault\":\"contact@property.com\",\n  \"EmailChannelBooking\":\"booking@property.com\",\n  \"EmailBookNow\":\"booknow@property.com\"\n  \"PaymentProviders\":[\n      { \"id\":\"xxx\", type:\"stripe|tokenx|braintree\", key1:\"value1\", key2:\"value2\" }\n  ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyModifyResponse>\n <Success>true</Success>\n <PropertyId>70</PropertyId>\n</PropertyModifyResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RatePlanCreate",
    "title": "RatePlanCreate",
    "name": "RatePlanCreate",
    "version": "201603.0.0",
    "description": "<p>Returns a list of RatePlans by Property</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "RoomTypeId",
            "description": "<p>the MyAllocator RoomTypeId associated to this RatePlan</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Label",
            "description": "<p>The name of the Rate Plan</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "IsIBEOnly",
            "description": "<p>designates is &quot;Internet Booking Engine&quot; exclusive (can&#39;t be mapped to an OTA)</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "OccupancyMin",
            "description": "<p>default minimum occupancy (if no &#39;daily&#39; value is set), leave zero for &#39;none&#39;</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "OccupancyMax",
            "description": "<p>default maximum occupancy (if no &#39;daily&#39; value is set), leave zero for &#39;none&#39;</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "MinLOS",
            "description": "<p>default minimum length of stay (if no &#39;daily&#39; value is set), leave zero for &#39;none&#39;</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "MaxLOS",
            "description": "<p>default maximum length of stay (if no &#39;daily&#39; value is set), leave zero for &#39;none&#39;</p> "
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "optional": false,
            "field": "RateModel",
            "description": "<p>daily: use daily rates;  derived-percentage: RateModifier is a +/- percentage on the rateplan 0 rate, derived-fixed: RateModifier is a +/- fixed dollar (in whatever currency) on rateplan 0 rates.</p> "
          },
          {
            "group": "Request",
            "type": "Decimal",
            "optional": false,
            "field": "RateModifier",
            "description": "<p>used for RateModel derived-percentage and derived-fixed</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RatePlanCreate>\n<Auth>\n<UserToken>User token</UserToken>\n<PropertyId>Property ID on myallocator.com</PropertyId>\n<VendorId>Your Vendor ID</VendorId>\n<VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<RoomTypeId>123</RoomTypeId>\n<Label>Some Text</Label>\n<IsIBEOnly>true|false</IsIBEOnly>\n<OccupancyMin>0</OccupancyMin>\n<OccupancyMax>0</OccupancyMax>\n<MinLOS>0</MinLOS>\n<MaxLOS>0</MaxLOS>\n<RateModel>daily|derived-percentage|derived-fixed</RateModel>\n<RateModifier>10.00</RateModifier>\n</RatePlanCreate>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomTypeId\":1234, \n    \"Label\":\"Name of RatePlan\",\n    \"IsIBEOnly\":false,\n    \"OccupancyMin\":0,\n    \"OccupancyMax\":0,\n    \"MinLOS\":0,\n    \"MaxLOS\":0,\n    \"RateModel\":\"daily\",\n    \"RateModifier\":0\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201603/json/RatePlanCreate -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n    \"RoomTypeId\":1234,\n    \"Label\":\"Name of RatePlan\",\n    \"IsIBEOnly\":false,\n    \"OccupancyMin\":0,\n    \"OccupancyMax\":0,\n    \"MinLOS\":0,\n    \"MaxLOS\":0,\n    \"RateModel\":\"daily\",\n    \"RateModifier\":0\n\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room image ID which will reference the room image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room that the image is stored for</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t<RatePlanCreateResponse>\n\t <RatePlans>\n    \t <RatePlan>\n         </RatePlan>\n     </RatePlans>\n\t</RatePlanCreateResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"RatePlans\" : [\n        {\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RatePlanList",
    "title": "RatePlanList",
    "name": "RatePlanList",
    "version": "201603.0.0",
    "description": "<p>Returns a list of RatePlans by Property</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "RoomTypeId",
            "description": "<p>filter by the MyAllocator RoomTypeId</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "RatePlanId",
            "description": "<p>filter by the MyAllocator RatePlanId</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RatePlanList>\n<Auth>\n<UserToken>User token</UserToken>\n<PropertyId>Property ID on myallocator.com</PropertyId>\n<VendorId>Your Vendor ID</VendorId>\n<VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n</RatePlanList>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201603/json/RatePlanList -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room image ID which will reference the room image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room that the image is stored for</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t<RatePlanListResponse>\n\t <RatePlans>\n    \t <RatePlan>\n         </RatePlan>\n     </RatePlans>\n\t</RatePlanListResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"RatePlans\" : [\n        {\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RatePlanRemove",
    "title": "RatePlanRemove",
    "name": "RatePlanRemove",
    "version": "201603.0.0",
    "description": "<p>Returns a list of RatePlans by Property</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "RatePlanId",
            "description": "<p>The RatePlanId you want to remove</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RatePlanRemove>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n</RatePlanRemove>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RatePlanId\":1234\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RatePlanRemove -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RatePlanId\":1234\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room image ID which will reference the room image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room that the image is stored for</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "SavedFilename",
            "description": "<p>Filename in our system</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t<RatePlanRemoveResponse>\n    <Success>true</Success>\n\t</RatePlanRemoveResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"Success\":true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RatePlanUpdate",
    "title": "RatePlanUpdate",
    "name": "RatePlanUpdate",
    "version": "201603.0.0",
    "description": "<p>Returns a list of RatePlans by Property</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RatePlanUpdate>\n<Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<RatePlanId>1234</RatePlanId>\n<RoomTypeId>1234<RoomTypeId>\n<Label>\"Name of RatePlan\"<Label>\n<IsIBEOnly>false<IsIBEOnly>\n<OccupancyMin>0<OccupancyMin>\n<OccupancyMax>0<OccupancyMax>\n<MinLOS>0<MinLOS>\n<MaxLOS>0<MaxLOS>\n<RateModel>\"daily\"<RateModel>\n<RateModifier><RateModifier>\n</RatePlanUpdate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201603/json/RatePlanUpdate -d@- <<EOJSON\njson={\n\"Auth/VendorId\":\"\",\n\"Auth/VendorPassword\":\"\",\n\"Auth/UserToken\":\"\",\n\"Auth/PropertyId\":\"\",\n\"RatePlanId\":1234,\n\"RoomTypeId\":1234,\n\"Label\":\"Name of RatePlan\",\n\"IsIBEOnly\":false,\n\"OccupancyMin\":0,\n\"OccupancyMax\":0,\n\"MinLOS\":0,\n\"MaxLOS\":0,\n\"RateModel\":\"daily\",\n\"RateModifier\":0\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RatePlanUpdate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RatePlanId\":1234,\n    \"RoomTypeId\":1234,\n    \"Label\":\"Name of RatePlan\",\n    \"IsIBEOnly\":false,\n    \"OccupancyMin\":0,\n    \"OccupancyMax\":0,\n    \"MinLOS\":0,\n    \"MaxLOS\":0,\n    \"RateModel\":\"daily\",\n    \"RateModifier\":0\n\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room image ID which will reference the room image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room that the image is stored for</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "SavedFilename",
            "description": "<p>Filename in our system</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t<RatePlanUpdateResponse>\n\t<RatePlans>\n    <RatePlan>\n        <RatePlanId>1234</RatePlanId>\n    </RatePlan>\n    </RatePlans>\n\t</RatePlanUpdateResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"RatePlans\" : [\n        {\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomAvailabilityList",
    "title": "RoomAvailabilityList",
    "name": "RoomAvailabilityList",
    "version": "201601.0.0",
    "description": "<p>This call can be used to query for all data that we hold for a specific property and date range.   The date range can only be 31 days as the maximum. You can query multiple times if you need a longer date range.</p> <p> A MaxStay setting of 0 means &quot;unrestricted&quot;.   The 48 and 49 in the response example below refer to the room ID as returned by GetRooms (XML API).</p> <p> <strong> Compatibility: </strong>    this was formerly available at: <a href=\"https://myallocator.com/en/api/data\">https://myallocator.com/en/api/data</a></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": "StartDate",
            "description": "<p>(YYYY-MM-DD)</p> "
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": "EndDate",
            "description": "<p>(YYYY-MM-DD)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON RoomAvailabilityList Request",
        "content": "{\n  \"Auth/VendorId\":\"\"\n  \"Auth/VendorPassword\":\"\",\n  \"Auth/UserToken\":\"\",\n  \"Auth/PropertyId\":\"\",\n  \"StartDate\":\"2015-01-01\",\n  \"EndDate\":\"2017-01-01\",\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomAvailabilityList -d@- <<EOJSON\njson=\n{\n  \"Auth/VendorId\":\"\",\n  \"Auth/VendorPassword\":\"\",\n  \"Auth/UserToken\":\"\",\n  \"Auth/PropertyId\":\"\",\n  \"StartDate\":\"2015-01-01\",\n  \"EndDate\":\"2017-01-01\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "XML RoomAvailabilityList Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomAvailabilityList>\n<Auth>\n\t<UserToken>User token</UserToken>\n\t<VendorId>Customer User ID</VendorId>\n\t<VendorPassword>Customer Password</VendorPassword>\n\t<PropertyId>###</PropertyId>\n</Auth>\n<StartDate>2015-01-01</StartDate>\n<EndDate>2017-01-01</EndDate>\n</RoomAvailabilityList>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "JSON RoomAvailabilityList",
          "content": "{\n    \"Rooms\": [\n        {\n            \"Data\": [\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-15\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 33,\n                    \"Units\": 2\n                },\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-16\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 33,\n                    \"Units\": 2\n                }\n            ],\n            \"PropertyId\": 1234,\n            \"RatePlanId\": 0,\n            \"RoomId\": 48,\n            \"RoomName\": \"1-person private\",\n            \"isPrivate\": true\n        },\n        {\n            \"Data\": [\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-15\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 0,\n                    \"Units\": 0\n                },\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-16\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 0,\n                    \"Units\": 0\n                }\n            ],\n            \"PropertyId\": 1,\n            \"RatePlanId\": 0,\n            \"RoomId\": 49,\n            \"RoomName\": \"5-person male shared\",\n            \"isPrivate\": false\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "XML RoomAvailabilityList",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomAvailabilityListResponse Success=\"false\">\n  <Rooms PropertyId=\"1234\" RoomId=\"4567\" \"RatePlanId\"=\"0\" RoomName=\"Test Standard room\" isPrivate=\"true\">\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-01\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-02\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-03\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-04\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-05\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-06\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-07\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-08\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-09\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-10\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-11\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-12\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-13\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-14\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-15\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-16\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-17\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-18\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-19\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-20\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-21\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-22\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-23\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-24\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-25\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-26\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-27\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-28\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-29\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-04-30\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-01\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-02\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-03\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-04\" MaxStay=\"0\" MinStay=\"1\" Price=\"0.00\" Units=\"0\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-05\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-06\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-07\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-08\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-09\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-10\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-11\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-12\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-13\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-14\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-15\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-16\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-17\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-18\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-19\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-20\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-21\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-22\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-23\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-24\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-25\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-26\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-27\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-28\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-29\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-30\" MaxStay=\"5\" MinStay=\"5\" Price=\"55.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-05-31\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n    <Dates Closed=\"0\" ClosedForArrival=\"0\" ClosedForDeparture=\"0\" Date=\"2015-06-01\" MaxStay=\"5\" MinStay=\"5\" Price=\"45.00\" Units=\"4\" />\n  </Rooms>\n</RoomAvailabilityListResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomCreate",
    "title": "RoomCreate",
    "name": "RoomCreate",
    "version": "201601.0.0",
    "description": "<p>This method allows you to create, update or remove rooms on myallocator.com. Please note that you can only send a single RoomCreate, RoomUpdate, or RoomRemove</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "ValidateOnly",
            "description": "<p>if true, the RoomCreate/RoomUpdate will not save changes, but will return errors (if any) - useful to validate user does not exceed billing requirements.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "AuthorizeBilling",
            "description": "<p>if true, the RoomCreate/RoomUpdate automatically approve any increase in billing due to changes in Room Geometry.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Label",
            "description": "<p>String that describes the room, usually provided by the customer. If omitted, a label will automatically be created from the other properties. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>How many rooms of this type there are. The Units parameter is very important because it actually limits the number of rooms that can be allocated. If you send more rooms via PMS it will save max the set Units value. If you use web interface it will not allow you to set more units as well. And the auto adjustment is working with this limit as well.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of many people that can stay in this room.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PrivateRoom",
            "description": "<p>string/scalar &#39;true&#39; if it&#39;s a private room, &#39;false&#39; for dormitories.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Only needed for dormitories. &#39;MA&#39; for males, &#39;FE&#39; for females, &#39;MI&#39; if mixed.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "isDisabled",
            "description": "<p>is the room currently disabled (not being transmitted to channels)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request:",
        "content": "\t<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t<RoomCreate>\n\t <Auth>\n\t   <UserToken>User token</UserToken>\n\t   <PropertyId>Property ID on myallocator.com</PropertyId>\n\t   <VendorId>Your Vendor ID</VendorId>\n\t   <VendorPassword>Your Vendor Password</VendorPassword>\n\t </Auth>\n     <ValidateOnly>false</ValidateOnly>\n     <AuthorizeBilling>false</AuthorizeBilling>\n\n\t <CreateRooms>\n\t\t<RoomTypes>\n\t     <RoomType>\n\t       <Label>2-bed private with sea-view</Label>\n\t       <Units>4</Units>\n\t       <Occupancy>2</Occupancy>\n\t       <PrivateRoom>true</PrivateRoom>\n\t     </RoomType>\n\t     <RoomType>\n\t       <Label>6-bed female dorm</Label>\n\t       <Units>3</Units>\n\t       <Occupancy>6</Occupancy>\n\t       <Gender>FE</Gender>\n\t       <PrivateRoom>false</PrivateRoom>\n\t     </RoomType>\n\t   </RoomTypes>\n\t </CreateRooms>\n\t</RoomCreate>",
        "type": "json"
      },
      {
        "title": "JSON Request:",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"ValidateOnly\":false,\n    \"AuthorizeBilling\":true,\n    \"Rooms\": [\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Double Room\",\n            \"Units\":4,\n            \"Occupancy\":2,\n            \"PrivateRoom\":\"true\",\n            \"Gender\":\"MI\"\n        },\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Female dorm\",\n            \"Units\":3,\n            \"Occupancy\":6,\n            \"PrivateRoom\":\"false\",\n            \"Gender\":\"FE\"\n        }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"ValidateOnly\":false,\n    \"AuthorizeBilling\":true,\n    \"Rooms\": [\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Double Room\",\n            \"Units\":4,\n            \"Occupancy\":2,\n            \"PrivateRoom\":\"true\",\n            \"Gender\":\"MI\"\n        },\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Female dorm\",\n            \"Units\":3,\n            \"Occupancy\":6,\n            \"PrivateRoom\":\"false\",\n            \"Gender\":\"FE\"\n        }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "XML": [
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>The room type ID which will reference the room type.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "PMSRoomId",
            "description": "<p>The room type ID which will reference the room type.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>Number of rooms of this type.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of persons that can stay in this room.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Beds",
            "description": "<p>!!Obsolete!! Replaced with Occupancy (see above).</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Gender restriction for shared rooms. &#39;MA&#39; for males, &#39;FE&#39; for females, &#39;MI&#39; if mixed. Always set to &#39;MI&#39; for private rooms.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "DoubleBed",
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Ensuite",
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false;</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "PrivateRoom",
            "description": "<p>Whether this room is private or shared/dorm (&#39;true&#39; or &#39;false&#39;).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response (creating a room):",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<CreateRoomResponse>\n <Success>true</Success>\n <RoomTypeIds>\n\t<RoomTypeId>35</RoomTypeId>\n </RoomTypeIds>\n</CreateRoomResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response (creating a room)",
          "content": "{\n  \"Method\": \"RoomCreate\",\n  \"Rooms\": [\n    {\n      \"PrivateRoom\": \"true\",\n      \"PMSRoomId\": \"IdOfRoomOnPMS\",\n      \"RoomId\": \"31835\",\n      \"Units\": 4,\n      \"Gender\": \"MI\",\n      \"Occupancy\": 2,\n      \"Label\": \"Double Room\"\n    }\n  ],\n  \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageCreate",
    "title": "RoomImageCreate",
    "name": "RoomImageCreate",
    "version": "201601.0.0",
    "description": "<p>This method allows you to create or remove room type images on myallocator.com. Please note that you can only send a single RoomImageCreate or RoomImageRemove</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>RoomId for which the image is uploaded for</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Data",
            "description": "<p>Base64 encoded raw image data</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomImageCreate>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <CreateRoomImage>\n   <RoomImages>\n     <RoomImage>\n       <RoomId>5532</RoomId>\n       <Filename>double-room.jpg</Filename>\n       <Data>oAAAANSUhEUgAAG2QAABPqCAYAAA[...]</Data>\n     </RoomImage>\n   </RoomImages>\n </CreateRoomImage>\n</RoomImageCreate>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomImages\": [\n      {\n        \"RoomId\": 5532,\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\"\n      }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomImageCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomImages\": [\n      {\n        \"RoomId\": 5532,\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\"\n      }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Data",
            "description": "<p>Base64 encoded raw image data</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<CreateRoomImageResponse>\n  <Success>true</Success>\n  <RoomImages>\n    <RoomImage>\n      <RoomImageId>423</RoomImageId>\n      <SavedFilename>576421558171c7f5054966d6b637c37e.jpg</SavedFilename>\n    </RoomImage>\n  </RoomImage>\n</CreateRoomImageResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n  \"Method\": \"RoomImageCreate\",\n  \"RoomImage\": {\n    \"RoomImageId\": 423,\n    \"SavedFilename\": \"576421558171c7f5054966d6b637c37e.jpg\"\n  },\n  \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageList",
    "title": "RoomImageList",
    "name": "RoomImageList",
    "version": "201601.0.0",
    "description": "<p>Returns a list of uploaded images by room type.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomImageList>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n</RoomImageList>",
        "type": "json"
      },
      {
        "title": "JSON Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomImageList -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room image ID which will reference the room image.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room that the image is stored for</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "SavedFilename",
            "description": "<p>Filename in our system</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomImageListResponse>\n <RoomImages>\n   <RoomImage>\n     <ImageId>343</ImageId>\n     <RoomId>49</RoomId>\n     <SavedFilename>d4790aaafdf4512dad0c4f2eafe72946.png</SavedFilename>\n   </RoomImage>\n\n   <RoomImage>\n     <ImageId>344</ImageId>\n     <RoomId>49</RoomId>\n     <SavedFilename>a92714654b7486ba6ca010f23bf4c0b6.jpg</SavedFilename>\n   </RoomImage>\n  </RoomImages>\n</RoomImageListResponse>",
          "type": "json"
        },
        {
          "title": "JSON Response",
          "content": "{\n    \"RoomImages\" : [\n        {\n            \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=64CC674C-5AFC-11E5-8C0B-1DCDF6E4DDB5.jpg\",\n            \"RoomId\" : \"23651\",\n            \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=64CC674C-5AFC-11E5-8C0B-1DCDF6E4DDB5.jpg\",\n            \"ImageId\" : \"3221\",\n            \"SavedFilename\" : \"64CC674C-5AFC-11E5-8C0B-1DCDF6E4DDB5.jpg\"\n        },\n        {\n            \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=AF559588-5B04-11E5-A038-10A36E043024.jpg\",\n            \"RoomId\" : \"22905\",\n            \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=AF559588-5B04-11E5-A038-10A36E043024.jpg\",\n            \"ImageId\" : \"3222\",\n            \"SavedFilename\" : \"AF559588-5B04-11E5-A038-10A36E043024.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageRemove",
    "title": "RoomImageRemove",
    "name": "RoomImageRemove",
    "version": "201601.0.0",
    "description": "<p>Remove a room type image</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImageId",
            "description": "<p>ID of image to be removed.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room ID of which the image is assigned to</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON Request (single room image)",
          "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImage\":{ \"RoomImageId\":### }\n}",
          "type": "json"
        },
        {
          "title": "JSON Request (multiple room images)",
          "content": "{\n    \"Auth/UserId\":\"\",\n    \"Auth/Userassword\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImages\": [\n        { \"RoomImageId\":##, \"RoomId\":## },\n        { \"RoomImageId\":##, \"RoomId\":## }\n        ]\n}",
          "type": "json"
        },
        {
          "title": "XML Request (single room image)",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomImageRemove>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <RemoveRoomImages>\n   <RoomImages>\n     <RoomImage>\n       <RoomImageId>##</RoomImageId>\n       <RoomId>##</RoomId>\n     </RoomImage>\n     <RoomImage>\n       <RoomImageId>##</RoomImageId>\n       <RoomId>##</RoomId>\n     </RoomImage>\n   </RoomImages>\n </RemoveRoomImages>\n</RoomImageRemove>",
          "type": "json"
        },
        {
          "title": "XML Response",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomImageRemoveResponse>\n  <Success>true</Success>\n</RoomImageRemoveResponse>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomImageRemove -d@- <<EOJSON\njson={\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImage\":{ \"RoomImageId\":### }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomList",
    "title": "RoomList",
    "name": "RoomList",
    "version": "201601.0.0",
    "description": "<p>returns a list of configured room types for a property. Formerly GetRoomTypes (v1).</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "XML RoomList Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomList>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com </PropertyId>\n   <VendorId>Your Vendor ID </VendorId>\n   <VendorPassword>Your Vendor Password </VendorPassword>\n </Auth>\n</RoomList>",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "XML": [
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The room type ID which will reference the room type.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>Number of rooms of this type.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of persons that can stay in this room.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Beds",
            "description": "<p>!!Obsolete!! Replaced with Occupancy (see above).</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Gender restriction for shared rooms. MA for males, FE for females, MI if mixed. Always set to &#39;MI&#39; for private rooms.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "DoubleBed",
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false.</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "Ensuite",
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false;</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "PrivateRooms",
            "description": "<p>Whether this room is private or shared/dorm (\\textit{true} or \\textit{false}).</p> "
          },
          {
            "group": "XML",
            "type": "String",
            "optional": false,
            "field": "ICalLink",
            "description": "<p>Link to an ICAL file that will be created on the fly. Can be used with channels that support ICAL imports. Dates with 0 availability will have a BLOCKED event.</p> "
          },
          {
            "group": "XML",
            "type": "Boolean",
            "optional": false,
            "field": "Disabled",
            "description": "<p>Is the room flagged as disabled (no data will be transmitted to OTA&#39;s)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML RoomList v1 Success Response:",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomListResponse>\n <RoomTypes>\n   <RoomType>\n     <Id>59</Id>\n     <Label>1-bed private ensuite</Label>\n     <Units>3</Units>\n     <Occupancy>1</Occupancy>\n     <Beds>1</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>\n     <Disabled>false</Disabled>\n     <ICalLink>https://api.myallocator.com/callback/ota/air/v201506/ical?pid=1&rid=59&hash=726ed</ICalLink>\n   </RoomType>\n\n   <RoomType>\n     <Id>63</Id>\n     <Label>2-bed private</Label>\n     <Units>4</Units>\n     <Occupancy>2</Occupancy>\n     <Beds>2</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>\n     <Disabled>false</Disabled>\n     <ICalLink>https://api.myallocator.com/callback/ota/air/v201506/ical?pid=1&rid=63&hash=foo12</ICalLink>\n   </RoomType>\n\n   <RoomType>\n     <Id>49</Id>\n     <Label>5-bed female shared</Label>\n     <Units>3</Units>\n     <Occupancy>5</Occupancy>\n     <Beds>5</Beds>\n     <Gender>FE</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>false</PrivateRoom>\n     <Disabled>false</Disabled>\n     <ICalLink>https://api.myallocator.com/callback/ota/air/v201506/ical?pid=1&rid=49&hash=9fe41</ICalLink>\n   </RoomType>\n  </RoomTypes>\n</RoomListResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomRemove",
    "title": "RoomRemove",
    "name": "RoomRemove",
    "version": "201601.0.0",
    "description": "<p>Remove a room.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomTypeIdId",
            "description": "<p>of room to be removed.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON Request (Remove single room)",
          "content": "{\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\",\n\t\"Room\":{ \"RoomId\":### }\n}",
          "type": "json"
        },
        {
          "title": "JSON Request (Remove multiple rooms)",
          "content": "{\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\",\n\t\"Rooms\": [\n\t\t{ \"RoomId\":## },\n\t\t{ \"RoomId\":## }\n\t\t]\n}",
          "type": "json"
        },
        {
          "title": "XML Request (Removing a room)",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomRemove>\n <Auth>\n   <UserToken>User token</UserToken>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <RemoveRooms>\n   <RoomTypeIds>\n     <RoomTypeId>35</RoomTypeId>\n     <RoomTypeId>36</RoomTypeId>\n   </RoomTypeIds>\n </RemoveRooms>\n</RoomRemove>",
          "type": "json"
        },
        {
          "title": "XML Response SetRooms (Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomRemoveResponse>\n  <Success>true</Success>\n</RoomRemoveResponse>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomRemove -d@- <<EOJSON\njson={\n\t\"Auth/UserToken\":\"\",\n\t\"Auth/VendorId\":\"\",\n\t\"Auth/VendorPassword\":\"\",\n\t\"Room\":{ \"RoomId\":### }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomUpdate",
    "title": "RoomUpdate",
    "name": "RoomUpdate",
    "version": "201601.0.0",
    "description": "<p>uses the same parameters (and response) as &quot;RoomCreate&quot;, with the addition of RoomId to specifiy which room to update.</p> ",
    "examples": [
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/RoomUpdate -d@- <<EOJSON\njson={\n...\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/UserCreate",
    "title": "UserCreate",
    "name": "UserCreate",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Requested UserId</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>Password for user</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerFirstName",
            "description": "<p>Customer&#39;s first name (optional).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerLastName",
            "description": "<p>Customer&#39;s family name (optional).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Customer&#39;s email address.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SendWelcome",
            "description": "<p>1|0</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p> "
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "UserId",
            "description": "<p>the MyAllocator UserId of the freshly created user</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>the PMS Auth token (see AssociateUserToPMS)</p> "
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed. Previously known as SetLogin/CreateLogin.</p> ",
    "examples": [
      {
        "title": "XML Request - Creating a customer account",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserCreate>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <UserId>New Customer Id</UserId>\n <UserPassword>New Customer Password</UserPassword>\n <CustomerFirstName>Customer first name</CustomerFirstName>\n <CustomerLastName>Customer family name</CustomerLastName>\n <CustomerEmail>Customer email address</CustomerEmail>\n</UserCreate>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/UserCreate -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"UserId\":\"Requested User ID\",\n  \"UserPassword\":\"New Customer Password\",\n  \"CustomerFirstName\":\"Customer's first name\",\n  \"CustomerLastName\":\"Customer's last name\",\n  \"CustomerEmail\":\"Customer's email address\",\n  \"SendWelcome\":\"1|0\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserCreateResponse>\n  <Success>true</Success>\n</UserCreateResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/UserExists",
    "title": "UserExists",
    "name": "UserExists",
    "version": "201601.0.0",
    "description": "<p>This method checks to see if a User or Email is already registered.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Requested UserId</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Requested Email</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "UserIdExists",
            "description": "<p>0|1</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailExists",
            "description": "<p>0|1</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML UserExists Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<UserExists>\n  <UserIdExists>1</UserIdExists>\n  <EmailExists>1</EmailExists>\n</UserExists>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "XML UserManager Exists Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<UserExists>\n  <Auth>\n    <VendorId>Your Vendor ID</VendorId>\n    <VendorPassword>Your Vendor Password</VendorPassword>\n  </Auth>\n  <Method>Exists</Method>\n  <UserId>requested-username</UserId>\n  <Email>user@domain.com</EmailId>\n</UserExists>",
        "type": "json"
      },
      {
        "title": "JSON UserExists Request",
        "content": "{\n  \"Auth/VendorId\":\"Your Vendor ID\",\n  \"Auth/VendorPassword\":\"Your Vendor Password\",\n  \"UserId\":\"requested-username\",\n  \"Email\":\"user@domain.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/UserExists -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"Your Vendor ID\",\n  \"Auth/VendorPassword\":\"Your Vendor Password\",\n  \"UserId\":\"requested-username\",\n  \"Email\":\"user@domain.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/UserModify",
    "title": "UserModify",
    "name": "UserModify",
    "version": "201601.0.0",
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed. Previously known as SetLogin/CreateLogin.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerFirstName",
            "description": "<p>Customer&#39;s first name (optional).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerLastName",
            "description": "<p>Customer&#39;s family name (optional).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Customer&#39;s email address.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Creating a user account.",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserModify>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <UserId>New Customer Id</UserId>\n <UserPassword>New Customer Password</UserPassword>\n <CustomerFirstName>Customer first name</CustomerFirstName>\n <CustomerLastName>Customer family name</CustomerLastName>\n <CustomerEmail>Customer email address</CustomerEmail>\n</UserModify>",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/UserModify -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"CustomerFirstName\":\"Customer's first name\",\n  \"CustomerLastName\":\"Customer's last name\",\n  \"CustomerEmail\":\"Customer's email address\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserModifyResponse>\n <Success>true</Success>\n</UserModifyResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/VendorSet",
    "title": "VendorSet",
    "name": "VendorSet",
    "version": "201601.0.0",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Callback/URL",
            "description": "<p>Vendor Callback URL</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Callback/Password",
            "description": "<p>Callback Passwords</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Callback/NotifyBooking",
            "description": "<p>Send notifications of Bookings</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>this is a utility which can be used to easily update vendor properties.  most PMS systems will NOT use call on a regular basis.   (Please note: after an update of callback properties old requests which are  already in queue may continue to arrive for up to an hour).</p> <p> set Callback/URL to blank to disable callbacks.</p> ",
    "examples": [
      {
        "title": "XML VendorSet",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<VendorSet>\n    <Auth>\n        <VendorId>Your Vendor ID</VendorId>\n        <VendorPassword>Your Vendor Password</VendorPassword>\n    </Auth>\n    <Callback>\n        <URL>http://www.yourdomain.com/myallocator/callback.cgi</URL>\n        <Password>very secret password</Password>\n        <NotifyBooking>true|false</NotifyBooking>\n    </Callback>\n</VendorSet>",
        "type": "json"
      },
      {
        "title": "JSON VendorSet",
        "content": "{\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Callback/URL\":\"http://www.yourdomain.com/myallocator/callback.cgi\",\n   \"Callback/Password\":\"very secret password\"\n}",
        "type": "json"
      },
      {
        "title": "curl w/ JSON",
        "content": "curl http://api.myallocator.com/pms/v201408/json/VendorSet -d@- <<EOJSON\njson={\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Callback/URL\":\"http://www.yourdomain.com/myallocator/callback.cgi\",\n   \"Callback/Password\":\"very secret password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Channel Codes",
    "name": "Channel_Codes",
    "version": "201601.0.0",
    "description": "<p>For the most up to date information please use the ChannelList API call.</p> <p>We also have prepared the following summary: <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/channel-list.md\">https://github.com/MyAllocator/apidocs/blob/gh-pages/channel-list.md</a></p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "FAQ",
    "name": "FAQ",
    "version": "201601.0.0",
    "description": "<ul> <li><p><em>How should I deal with failed channel updates?</em> If the error is noted as non-fatal on the Error Code page then retry the update after a few minutes. Failing updates are not as rare as you would think because channels do go down and become unresponsive.</p> <p>Fatal errors should not be automatically retried as they need user intervention. Make sure to show the error message to the customer._</p> <ul> <li><em>Are there any limits on how many updates can be send at once?</em></li> </ul> <p>There is (currently) no limit, but you&#39;re strongly advised to split large updates (especially full refreshes) into smaller chunks of 30-60 days. This has the advantage that you can easily re-run failed chunks and it will make debugging problems easier.</p> <ul> <li><p><em>I cannot log in to myallocator with the test credentials. Why?</em> This is to avoid the settings for the test properties from being changed. You can however just register your own test property. Should you need more than the 30-day trial period let us know and we will extend it.</p> </li> <li><p><em>Callback: how do you know which customers belong to us?</em> The first time you send an update on behalf of a customer through our API this customer will be marked as a user of your PMS. From then on you will receive callbacks for this customer.</p> </li> <li><p><em>Can I send updates in parallel?</em> You can for different properties. What you should never do is send an update for a property without waiting for the previous update for this property to succeed/fail. Otherwise you can run into race-conditions where the later update succeeds before the first update, opening up availability on the channel unintentionally.</p> </li> <li><p><em>Why can there be multiple RoomTypeIds for a booking?</em> The same channel room can be assigned to multiple myallocator rooms. For this scenario we send the sum of available rooms/beds and the highest price of any available room that is mapped to this channel room. So the list of RoomTypeIds represents all matching rooms, but it does not mean that all of them were actually booked. Check out the warning on the Automatic Adjustments developer page for more details on how to adjust for this scenario.</p> </li> <li><p><em>Do I need PCI Certification for BookingPaymentDownload?</em> Yes. We require a PCI compliance certificate from you.  Most hostel and small PMS companies (those with less than $10m year in revenue) can use a Level 3 &quot;self&quot; certification.<br>Level 3 PCI Compliance simply requires you attest that you are following secure coding practices in your application, and server hosting environment. In most cases it will require you attain attestation from your server hosting and gateway  vendors to ensure a complete web of trust. More information: <a href=\"http://www.pcicompliance101.net/pci-dss-compliance.htm\">http://www.pcicompliance101.net/pci-dss-compliance.htm</a></p> </li> </ul> </li> <li><p>_For our testing purpose, will you give us an appropriate account?</p> </li> </ul> <p>You are welcome to create a trial account and use that for testing,  if you would like it extended you can talk to your relationship manager.  (devhelp can&#39;t give you a free account, only the relationship manager can do that)</p> <ul> <li>_In some Methods the &#39;PropertyID&#39; is required, where can we get this?</li> </ul> <p>It is returned when a property is created, or via: PropertyList</p> <ul> <li>_In the Method &quot;AssociateUserToPMS&quot; returns the error: &quot;ErrorMsg=Auth/PropertyId or Auth/PropertyToken is required&quot;; neither of these is mentioned in the specs</li> </ul> <p>A single user may have multiple properties associated to them, each property has a unique number called the &quot;PropertyId&quot;</p> <ul> <li>_Some API&#39;s found in the documentation require special vendor permissions. How may we acquiring them?</li> </ul> <p>Speak with your relationship manager, very few integrations need those,  only very deep integrations with thousands of users. It is much better (and more common) to have your user sign up on www.myallocator.com,  create property, setup channels, etc. then provide you with a username+password which you exchange for a UserToken  (that doesn&#39;t expire).</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Global Error Codes",
    "name": "Global_Error_Codes",
    "version": "201601.0.0",
    "description": "<p>Errors are divided into three categories. A global error will have a single  Errors tag with no further encapsulation and only a single Error tag.</p> <p> An API method specific error will be included in the method name. Again, there will only be a single Error  tag. The third type of error is channel specific. The Errors tag is included  in the method name and there may be multiple Error tags.</p> <table> <thead> <tr> <th>Code</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>2</td> <td>Missing authentication tags</td> </tr> <tr> <td>3</td> <td>Invalid user or user password</td> </tr> <tr> <td>4</td> <td>Invalid vendor or vendor password</td> </tr> <tr> <td>5</td> <td>Vendor disabled</td> </tr> <tr> <td>6</td> <td>User has no credit left</td> </tr> <tr> <td>7</td> <td>User has no permission to change availability for this property</td> </tr> <tr> <td>8</td> <td>No such API method</td> </tr> <tr> <td>9</td> <td>Unsupported channel</td> </tr> <tr> <td>10</td> <td>No channels selected</td> </tr> <tr> <td>11</td> <td>No allocations submitted</td> </tr> <tr> <td>12</td> <td>Invalid room type id (does not exist or not assigned to this property)</td> </tr> <tr> <td>13</td> <td>Missing allocation info (price, dates, units)</td> </tr> <tr> <td>14</td> <td>Internal error. Support has been notified!</td> </tr> <tr> <td>15</td> <td>Missing or wrong channel credentials on myallocator.com</td> </tr> <tr> <td>16</td> <td>End date before start date</td> </tr> <tr> <td>17</td> <td>Start date too far in the future (&gt;2 years)</td> </tr> <tr> <td>18</td> <td>Invalid property id</td> </tr> <tr> <td>19</td> <td>Vendor not enabled to use this method</td> </tr> <tr> <td>20</td> <td>Missing required XML fields</td> </tr> <tr> <td>21</td> <td>No applicable dates submitted</td> </tr> <tr> <td>22</td> <td>Invalid update id</td> </tr> <tr> <td>301</td> <td>Invalid characters in new username</td> </tr> <tr> <td>302</td> <td>Username exists already</td> </tr> <tr> <td>303</td> <td>Invalid values (check Breakfast, Currency, ExpiryDate)</td> </tr> <tr> <td>401</td> <td>Invalid date format</td> </tr> <tr> <td>402</td> <td>Missing or invalid search criteri</td> </tr> <tr> <td>450</td> <td>Payment password is invalid</td> </tr> </tbody> </table> <p><em>Channel Specific errors</em></p> <table> <thead> <tr> <th>Code</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>202</td> <td>Channel skipped (not setup)</td> </tr> <tr> <td>203</td> <td>Channel did not respond</td> </tr> <tr> <td>204</td> <td>Channel skipped (no applicable rooms)</td> </tr> <tr> <td>205</td> <td>Incorrect room setup. The room type mapping needs to be updated on myallocator.com.</td> </tr> <tr> <td>206</td> <td>Channel only updates up to a certain period in the future. Some dates were skipped.</td> </tr> <tr> <td>207</td> <td>Skipped room type (not setup with channel)</td> </tr> <tr> <td>208</td> <td>Partial success: ...</td> </tr> <tr> <td>99</td> <td>Check/Display ErrMsg or WarningMsg content</td> </tr> </tbody> </table> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Reporting Issues/Bugs",
    "name": "Reporting_Issues_Bugs",
    "version": "201601.0.0",
    "description": "<p>If you are having an issue with a particular API call please open a ticket by emailing  devhelp@myallocator.com.  Please be sure to ALWAYS include the TicketId.</p> <p>Whenever an error is returned a &quot;TicketId&quot; is also included in the response. Error Tickets are stored for 72 hours and preserve the entire incoming request and outgoing response and a variety of useful internal state information which is indispensable for  determining the cause of any issue.</p> <p>Tickets are <em>always</em> generated on API error responses.</p> <p>Pass Auth/Debug:1 (json) or <Auth><Debug>1</Debug></Auth> (xml) to request a &quot;TicketId&quot; key/node be created and returned for any successful request.</p> <p>Please include a TicketId with any issue you are reporting or requesting help with.</p> <p>PLEASE NOTE: <em>DO</em> <em>NOT</em> send Auth/Debug if it is not likely to be used.  We are setting a recommended threshold of 1,000 error tickets per 24 hour period. If a vendor receives too many errors their token <em>may</em> be suspended. Currently suspensions are done by hand however in the future this may be automated.</p> <p>Auth/Debug tickets count as errors, so use them only when necessary. Additionally Auth/Debug for BookingPaymentDownload will violate PCI Compliance and should never be avoided except under very dire/extreme circumstances.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Sample Booking Data",
    "name": "Sample_Booking_Data",
    "version": "201501.0.0",
    "description": "<p>Sample bookings for a variety of OTA&#39;s.</p> <p>You can find more OTA booking examples here: <a href=\"https://github.com/MyAllocator/bookingsamples/tree/master/2016-02-16\">https://github.com/MyAllocator/bookingsamples/tree/master/2016-02-16</a></p> <p><strong> Mandatory Fields </strong></p> <table> <thead> <tr> <th>Tag</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Channel</td> <td>2-3 letter channel code</td> </tr> <tr> <td>StartDate</td> <td>Date of arrival (YYYY-MM-DD)</td> </tr> <tr> <td>EndDate</td> <td>Date before day of departure (YYYY-MM-DD)</td> </tr> <tr> <td>IsCancellation</td> <td>true or false</td> </tr> <tr> <td>MyallocatorId</td> <td>Booking ID on myallocator.com (hexadecimal number)</td> </tr> <tr> <td>MyallocatorCreationDate</td> <td>Date of booking creation on myallocator.com</td> </tr> <tr> <td>MyallocatorCreationTime</td> <td>Time of booking creation on myallocator.com</td> </tr> <tr> <td>MyallocatorModificationDate</td> <td>Date of booking modification on myallocator.com (in case of a cancellation the modification date is different from the creation date)</td> </tr> <tr> <td>MyallocatorModificationTime</td> <td>Time of booking modification on myallocator.com</td> </tr> <tr> <td>OrderId</td> <td>Booking ID on the channel</td> </tr> <tr> <td>Rooms</td> <td>Room List of booked rooms</td> </tr> <tr> <td>- RoomTypeIds</td> <td>List of booked myallocator.com room IDs. Several channel room can be mapped to one myallocator.com room. If -1 it means that we couldn&#39;t match the channel room to one of our rooms.</td> </tr> <tr> <td>- Units</td> <td>Number of booked rooms (for private rooms) or beds (for shared rooms)</td> </tr> <tr> <td>- StartDate</td> <td>Staying in this room from this date on (YYYY-MM-DD)</td> </tr> <tr> <td>- EndDate</td> <td>Date before day of departure (YYYY-MM-DD)</td> </tr> </tbody> </table> <p><strong> Optional Fields </strong></p> <table> <thead> <tr> <th>Tags</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>OrderSource</td> <td>Which website the booking originates from</td> </tr> <tr> <td>OrderDate</td> <td>The date the booking has been created on the channel</td> </tr> <tr> <td>OrderTime</td> <td>The time the booking has been created on the channel</td> </tr> <tr> <td>OrderAdults</td> <td>Number of adults</td> </tr> <tr> <td>OrderChildren</td> <td>Number of children</td> </tr> <tr> <td>Deposit</td> <td>Amount of money already taken as a deposit</td> </tr> <tr> <td>DepositCurrency</td> <td>Currency of deposit</td> </tr> <tr> <td>Commission</td> <td>Fee taken by the channel</td> </tr> <tr> <td>CommissionCurrency</td> <td>Currency of fee taken by the channel</td> </tr> <tr> <td>CommissionIncludedInTotal</td> <td>Whether the commission is included in the TotalPrice. Can be true or false.</td> </tr> <tr> <td>TotalPrice</td> <td>Total cost of booking</td> </tr> <tr> <td>TotalCurrency</td> <td>Currency for total cost of booking</td> </tr> <tr> <td>PaymentCollect</td> <td>&#39;Channel&#39; or &#39;Property&#39;, indicates who collects the payment from the guest</td> </tr> <tr> <td>Customers</td> <td>/Customer Customer details (can be more than one)</td> </tr> <tr> <td>- CustomerFName</td> <td>First name</td> </tr> <tr> <td>- CustomerLName</td> <td>Family name (or if CustomerFName is empty, both first and last name)</td> </tr> <tr> <td>- CustomerEmail</td> <td>Email address</td> </tr> <tr> <td>- CustomerGender</td> <td>Gender</td> </tr> <tr> <td>- CustomerSmoker</td> <td>Whether customer is a smoker. Can be true or false.</td> </tr> <tr> <td>- CustomerPhone</td> <td>Phone number</td> </tr> <tr> <td>- CustomerPhoneMobile</td> <td>Mobile phone number</td> </tr> <tr> <td>- CustomerFax</td> <td>Fax number</td> </tr> <tr> <td>- CustomerAddress</td> <td>Address</td> </tr> <tr> <td>- CustomerCompany</td> <td>Company name</td> </tr> <tr> <td>- CustomerCompanyDepartment</td> <td>Company deparment name</td> </tr> <tr> <td>- CustomerCity</td> <td>City</td> </tr> <tr> <td>- CustomerState</td> <td>State</td> </tr> <tr> <td>- CustomerPostCode</td> <td>Post code</td> </tr> <tr> <td>- CustomerCountry</td> <td>Address country name (not neccessarily a 2/3-letter code).</td> </tr> <tr> <td>- CustomerNationality</td> <td>Nationality (not neccessarily a 3-letter code)</td> </tr> <tr> <td>- CustomerArrivalTime</td> <td>Time of arrival</td> </tr> <tr> <td>- CustomerNote</td> <td>Note to the property owner</td> </tr> <tr> <td>Rooms</td> <td>Room Room details</td> </tr> <tr> <td>- Price</td> <td>Price for this room for the entire duration of stay (not the daily rate)</td> </tr> <tr> <td>- Currency</td> <td>Currency for the price</td> </tr> <tr> <td>- ChannelRoomType</td> <td>Room type ID on the channel</td> </tr> <tr> <td>- RoomOrderId</td> <td>ID of the channel for that room booking</td> </tr> <tr> <td>- RoomDesc</td> <td>Room description on the channel</td> </tr> <tr> <td>- RateId</td> <td>Rate type ID on the channel</td> </tr> <tr> <td>- RateDesc</td> <td>Rate description on the channel</td> </tr> <tr> <td>- OccupantFName</td> <td>First name of occupant of this room</td> </tr> <tr> <td>- OccupantLName</td> <td>Family name of occupant of this room (or if OccupantFirstName is empty, both first and last name)</td> </tr> <tr> <td>- OccupantSmoker</td> <td>whether occupant is a smoker. Can be true or false.</td> </tr> <tr> <td>- OccupantNote</td> <td>Note to the property owner</td> </tr> <tr> <td>- Occupancy</td> <td>Number of persons this room is booked for</td> </tr> <tr> <td>- Adults</td> <td>Number of adults staying in this room</td> </tr> <tr> <td>- Children</td> <td>Number of children staying in this room</td> </tr> <tr> <td>- Babies</td> <td>Number of babies staying in this room</td> </tr> <tr> <td>- Policy</td> <td>Booking policy the room was booked for</td> </tr> <tr> <td>- Breakfast</td> <td>Wheter breakfast was ordered alogn with the booking. Can be true or false.</td> </tr> </tbody> </table> ",
    "success": {
      "examples": [
        {
          "title": "Complete",
          "content": "\n{\n    IsCancellation => Bool\n    CancellationReason => String\n    OrderId       => String\n    OrderDate     => Date\n    OrderTime     => Time\n    OrderSource   => String\n    OrderSourceId => String\n    OrderCustomers => Int       # Total number of customers\n    OrderAdults   => Int\n    OrderChildren => Int\n    OrderMales    => Int\n    OrderFemales  => Int\n    Commission    => Float\n    CommissionCurrency => String\n    CommissionIncludedInTotal => Bool\n    Deposit       => Float\n    DepositCurrency => String\n    TotalPrice    => Float\n    TotalCurrency => String\n    TotalTaxes    => Float\n    TotalTaxesCurrency => String\n    Balance       => Float\n    BalanceCurrency => String\n    PaymentCollect  => 'Channel' or 'Property'\n\n\n    Customers => [\n        {\n            CustomerTitle => String\n            CustomerFName => String\n            CustomerLName => String\n            CustomerBirthday => Date\n            CustomerEmail => String\n            CustomerPhone => String\n            CustomerPhoneMobile => String\n            CustomerFax   => String\n            CustomerAddress  => String\n            CustomerCompany  => String\n            CustomerCompanyDepartment => String\n            CustomerCity     => String\n            CustomerState    => String\n            CustomerPostCode => String\n            CustomerCountry  => String\n            CustomerNationality => String\n            CustomerArrivalTime => String\n            CustomerNote => String\n            CustomerGender => String (MA/FE/MI if possible, but free text also possible)\n            CustomerSmoker => Bool\n            CustomerAge  => Int\n        }\n    ]\n\n    Rooms => [\n        {\n            StartDate => Date\n            EndDate   => Date\n            Units     => Int\n            Price     => Float\n            Currency  => String\n            ChannelRoomType => ID\n            RoomTypeIds => [\n                ID\n            ]\n            RoomDesc  => String\n            RateType  => ID\n            RateDesc  => String\n            OccupantFName  => String\n            OccupantLName  => String\n            OccupantSmoker => Bool\n            OccupantNote   => String\n            Occupancy      => Int\n            Adults    => Int\n            Children  => Int\n            Babies    => Int\n            RoomOrderId => String\n            Breakfast => ENUM(-1, 0, 1)   # -1 Different settings\n0  No breakfast\n1  With breakfast\n            DayRates => [\n              {\n                Date     => Date\n                Description => String\n                Rate     => Float\n                Currency => String\n                RateId   => ID\n                Commission => Float\n              }\n           ]\n       }\n    ]\n\n\n    PaymentTransactions = [\n      {\n        Provider     => String\n        Amount       => Float\n        Currency     => String\n        Description  => String\n        AuthCode     => String\n        Reference    => String\n        OrderId      => String\n      }\n    ],\n\n    Discounts => [\n        {\n            Discount => Float\n            Currency => String\n            Description => String\n            IncludedInTotal => Bool\n            StartDate => Date\n            EndDate => Date\n        }\n\n    ],\n\n    ExtraServices => [\n        {\n            Description => String ('Extra Bed')\n            Units => Int\n            Price => Float\n            Currency  => String\n            StartDate => Date\n            EndDate   => Date,\n            IncludedInTotal => Bool\n        }\n    ]\n);",
          "type": "json"
        },
        {
          "title": "air (AirBnB)",
          "content": "{\n   \"OrderTime\" : \"00:00:00\",\n   \"MyallocatorCreationDate\" : \"2013-09-23\",\n   \"Customers\" : [\n      {\n         \"CustomerLName\" : \"Read Whittier\",\n         \"CustomerPhone\" : null,\n         \"CustomerEmail\" : null\n      }\n   ],\n   \"MyallocatorModificationDate\" : \"2013-09-23\",\n   \"MyallocatorModificationTime\" : \"18:43:08\",\n   \"PropertyId\" : 1492,\n   \"StartDate\" : \"2013-06-02\",\n   \"EndDate\" : \"2013-06-07\",\n   \"MyallocatorCreationTime\" : \"18:43:08\",\n   \"OrderId\" : \"YQJYEK\",\n   \"IsCancellation\" : false,\n   \"MarkedAsRead\" : false,\n   \"Channel\" : \"air\",\n   \"Version\" : 0,\n   \"Rooms\" : [\n      {\n         \"EndDate\" : \"2013-06-07\",\n         \"RoomTypeIds\" : [\n            7875\n         ],\n         \"Units\" : 1,\n         \"StartDate\" : \"2013-06-02\",\n         \"ChannelRoomType\" : \"https://www.airbnb.com/calendar/ical/266557.ics?s=b360d22cc3697910f8e115f1c14315e6\"\n      }\n   ],\n   \"MyallocatorId\" : \"52408bbc7245adfa420000f9\"\n}",
          "type": "json"
        },
        {
          "title": "ago (Agoda)",
          "content": "{\n   \"TotalPrice\" : \"4800.00\",\n   \"OrderTime\" : \"11:46:00 AM\",\n   \"MyallocatorCreationDate\" : \"2013-02-09\",\n   \"Customers\" : [\n      {\n         \"CustomerLName\" : \"Customer\",\n         \"CustomerNote\" : null,\n         \"CustomerEmail\" : null,\n         \"CustomerSmoking\" : 1,\n         \"CustomerFName\" : \"Happy\",\n         \"CustomerPhone\" : null,\n         \"CustomerCountry\" : \"Thailand\"\n      }\n   ],\n   \"OrderDate\" : \"2013-2-9\",\n   \"OrderAdults\" : \"6\",\n   \"MyallocatorModificationDate\" : \"2013-02-09\",\n   \"MyallocatorModificationTime\" : \"05:05:12\",\n   \"PropertyId\" : 752,\n   \"StartDate\" : \"2014-02-03\",\n   \"EndDate\" : \"2014-02-04\",\n   \"MyallocatorCreationTime\" : \"05:05:12\",\n   \"OrderId\" : \"26777031\",\n   \"IsCancellation\" : false,\n   \"MarkedAsRead\" : false,\n   \"Channel\" : \"ago\",\n   \"TotalCurrency\" : \"THB\",\n   \"Version\" : 0,\n   \"Rooms\" : [\n      {\n         \"EndDate\" : \"2014-02-04\",\n         \"RoomTypeIds\" : [\n            \"3305\"\n         ],\n         \"RoomDesc\" : \"Standard\",\n         \"Units\" : 3,\n         \"StartDate\" : \"2014-2-3\"\n      }\n   ],\n   \"MyallocatorId\" : \"5115d9089984400477490300\",\n   \"OrderChildren\" : \"0\"\n}",
          "type": "json"
        },
        {
          "title": "boo (Booking.com)",
          "content": "{\n   \"CommissionCurrency\" : \"USD\",\n   \"OrderTime\" : \"09:14:30\",\n   \"MyallocatorCreationDate\" : \"2013-02-18\",\n   \"Customers\" : [\n      {\n         \"CustomerLName\" : \"Customer\",\n         \"CustomerCompany\" : \"\",\n         \"CustomerNote\" : \"\",\n         \"CustomerEmail\" : \"\",\n         \"CustomerFName\" : \"Happy\",\n         \"CustomerCity\" : \"Kiev\",\n         \"CustomerPostCode\" : \"01001\",\n         \"CustomerAddress\" : \"5&#47;24 Iryninskaya Str., Apt. 72\",\n         \"CustomerPhone\" : \"+555-867-5309\",\n         \"CustomerCountry\" : \"ua\"\n      }\n   ],\n   \"OrderDate\" : \"2013-02-12\",\n   \"MyallocatorModificationDate\" : \"2013-02-18\",\n   \"MyallocatorModificationTime\" : \"15:22:09\",\n   \"PropertyId\" : \"821\",\n   \"StartDate\" : \"2013-02-12\",\n   \"EndDate\" : \"2013-02-12\",\n   \"MyallocatorCreationTime\" : \"15:22:09\",\n   \"OrderId\" : \"532262656\",\n   \"IsCancellation\" : true,\n   \"MarkedAsRead\" : true,\n   \"Channel\" : \"boo\",\n   \"Commission\" : \"\",\n   \"TotalCurrency\" : \"USD\",\n   \"Version\" : 0,\n   \"Rooms\" : [\n      {\n         \"RoomType\" : -1,\n         \"EndDate\" : \"2013-02-12\",\n         \"RoomTypeIds\" : [\n            -1\n         ],\n         \"RoomDesc\" : \"Cancelled Room\",\n         \"StartDate\" : \"2013-02-12\"\n      }\n   ],\n   \"MyallocatorId\" : \"512247201940e17759000002\",\n   \"ExtraServices\" : []\n}",
          "type": "json"
        },
        {
          "title": "exp (Expedia)",
          "content": "{\n   \"OrderTime\" : \"07:46:00\",\n   \"Customers\" : [\n      {\n         \"CustomerLName\" : \"CUSTOMER\",\n         \"CustomerFName\" : \"HAPPY\",\n         \"CustomerNote\" : \"\",\n         \"CustomerPhone\" : \"555-555-1212\"\n      }\n   ],\n   \"OrderDate\" : \"2013-04-25\",\n   \"MyallocatorModificationDate\" : \"2013-04-25\",\n   \"OrderSource\" : \"Expedia Affiliate Network\",\n   \"EndDate\" : \"2014-04-18\",\n   \"OrderId\" : \"344026786\",\n   \"IsCancellation\" : false,\n   \"Version\" : 0,\n   \"MyallocatorId\" : \"5178e062f370731e6d000eff\",\n   \"OrderChildren\" : \"1\",\n   \"TotalPrice\" : \"379.43\",\n   \"MyallocatorCreationDate\" : \"2013-04-25\",\n   \"OrderAdults\" : \"2\",\n   \"MyallocatorModificationTime\" : \"07:50:59\",\n   \"PropertyId\" : 506,\n   \"StartDate\" : \"2014-04-15\",\n   \"MyallocatorCreationTime\" : \"07:50:59\",\n   \"MarkedAsRead\" : false,\n   \"Channel\" : \"exp\",\n   \"TotalCurrency\" : \"SGD\",\n   \"Rooms\" : [\n      {\n         \"EndDate\" : \"2014-04-18\",\n         \"Currency\" : \"SGD\",\n         \"RoomTypeIds\" : [\n            \"2032\"\n         ],\n         \"Price\" : \"379.43\",\n         \"Units\" : 1,\n         \"StartDate\" : \"2014-04-15\",\n         \"ChannelRoomType\" : \"200248366\"\n      }\n   ],\n   \"ExtraServices\" : [\n      {\n         \"EndDate\" : \"2014-04-18\",\n         \"Units\" : 1,\n         \"StartDate\" : \"2014-04-15\",\n         \"Description\" : \"One Queen and One Sofa Bed\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/BOOKING.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Terminology",
    "name": "Terminology",
    "version": "201601.0.0",
    "description": "<table> <thead> <tr> <th>Term</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Vendor</td> <td>You as the owner and developer of the front desk software.</td> </tr> <tr> <td>User/Customer</td> <td>Someone using your product and who is also registered on myallocator.com.</td> </tr> <tr> <td>Allocation</td> <td>A number indicating how many available beds or rooms there are.</td> </tr> <tr> <td>ARI</td> <td>Availablity (Allocation) along with Rate Information</td> </tr> </tbody> </table> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Version History",
    "name": "Version_History",
    "version": "201601.0.0",
    "description": "<table> <thead> <tr> <th>Date</th> <th>Version</th> <th>Change</th> </tr> </thead> <tbody> <tr> <td>2017-04-12</td> <td>201610.0.2</td> <td>ICalLink field added to call RoomList</td> </tr> <tr> <td>2016-10-09</td> <td>201610.0.1</td> <td>Changes to ARIRules</td> </tr> <tr> <td>2016-05-26</td> <td>201605.0.2</td> <td>New API call: BookingCancel</td> </tr> <tr> <td>2016-05-25</td> <td>201605.0.1</td> <td>Removed CANCEL/UNCANCEL from BookingAction, added more options to BookingList</td> </tr> <tr> <td>2016-03-15</td> <td>201603.0.1</td> <td>New API calls: RatePlanCreate, RatePlanUpdate, RatePlanRemove</td> </tr> <tr> <td>2016-02-04</td> <td>201601.0.2</td> <td>VERSIONED JSON response format PropertyChannelList to include currency (and future fields)</td> </tr> <tr> <td>2016-01-08</td> <td>201601.0.1</td> <td>Fixed documentation for ARIUpdate to include Auth/VendorId Auth/VendorPassword</td> </tr> <tr> <td>2015-10-13</td> <td>201501.0.13</td> <td>Fix BookingList ModificationEndDate so it goes until 11:59pm</td> </tr> <tr> <td>2015-10-01</td> <td>201501.0.12</td> <td>Fix various documentation issues</td> </tr> <tr> <td>2015-07-24</td> <td>201501.0.11</td> <td>added BookingPaymentPasswordValidate</td> </tr> <tr> <td>2015-07-09</td> <td>201501.0.10</td> <td>added IncludeArchived to BookingList</td> </tr> <tr> <td>2015-05-27</td> <td>201501.0.9</td> <td>new BookingList parameters ModificationStartDateTime, ModificationEndDateTime, CreationStartDateTime, CreationEndDateTime</td> </tr> <tr> <td>2015-05-18</td> <td>201501.0.8</td> <td>new BookingAction commands</td> </tr> <tr> <td>2015-03-20</td> <td>201501.0.7</td> <td>Corrected explanation of Units on RoomCreate (thanks Petr T.)</td> </tr> <tr> <td>2015-02-19</td> <td>201501.0.6</td> <td>Add Options.NormalizeToCurrency to BookingList</td> </tr> <tr> <td>2015-02-19</td> <td>201501.0.5</td> <td>Added more documentation to Booking Samples</td> </tr> <tr> <td>2015-02-03</td> <td>201501.0.4</td> <td>Added .Options.IgnoreInvalidRooms to MAAPI</td> </tr> <tr> <td>2015-02-02</td> <td>201501.0.3</td> <td>Improved documentation for multiple overlapping Allocations in ARIUpdate</td> </tr> <tr> <td>2015-01-22</td> <td>201501.0.2</td> <td>Improved documentation with Booking samples</td> </tr> <tr> <td>2015-01-09</td> <td>201501.0.1</td> <td>Initial release of 201601[beta] (new functions: PropertyDetail, ARIRules)</td> </tr> <tr> <td>2015-01-08</td> <td>201408.0.13</td> <td>Corrected validation logic issue with ARIUpdate (properly validates Rooms)</td> </tr> <tr> <td>2015-01-07</td> <td>201408.0.12</td> <td>Corrected issue with AssociateUserToPMS requiring Auth/PropertyId</td> </tr> <tr> <td>2015-01-06</td> <td>201408.0.11</td> <td>Modified FailIfUpdateActive default to &quot;false&quot;</td> </tr> <tr> <td>2015-01-05</td> <td>201408.0.10</td> <td>fixed doc, Price-Weekend is &quot;PriceWeekend&quot;</td> </tr> <tr> <td>2015-01-05</td> <td>201408.0.9</td> <td>added JSON raw input mode - application/json</td> </tr> <tr> <td>2014-12-28</td> <td>201408.0.8</td> <td>added Auth/Debug</td> </tr> <tr> <td>2014-12-28</td> <td>201408.0.7</td> <td>fixed bug in ARIUpdate where zero unit updates would not be applied</td> </tr> <tr> <td>2014-12-26</td> <td>201408.0.6</td> <td>added more documentation to ChannelList and curl example to HelloWorld</td> </tr> <tr> <td>2014-12-24</td> <td>201408.0.5</td> <td>added error logging with ticket responses</td> </tr> <tr> <td>2014-12-23</td> <td>201408.0.4</td> <td>added VendorId to various docs, and propertyid, unified error handling</td> </tr> <tr> <td>2014-12-19</td> <td>201408.0.3</td> <td>fixed bug in RoomCreate (did not return RoomId)</td> </tr> <tr> <td>2014-12-15</td> <td>201408.0.2</td> <td>renamed LoopBookingAction into BookingAction</td> </tr> <tr> <td>2014-12-04</td> <td>201408.0.1</td> <td>initial release of new API</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.2</td> <td>Updated booking information (new: CommissionIncludedInTotal).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.1</td> <td>Updated booking information and updated channel list (new: eb,air, orb, boo, tra).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6</td> <td>New feature Booking Callback and updated channel list (new: max).</td> </tr> <tr> <td>2012-09-20</td> <td>1.5.2</td> <td>Updated channel list (new: exp, ysh, eb). Get/Set property country.</td> </tr> <tr> <td>2012-07-04</td> <td>1.5.1</td> <td>Updated channel list. Added MinStay/MaxStay example.</td> </tr> <tr> <td>2011-09-17</td> <td>1.5</td> <td>New method SetRoomTypes to add/update/remove rooms.</td> </tr> <tr> <td>2011-09-17</td> <td>1.4.1</td> <td>GetBookings: Minor correction regarding the end date. It&#39;s not the departure date but rather the departure date - 1.</td> </tr> <tr> <td>2011-01-15</td> <td>1.4</td> <td>New methods SetAllocation (non-blocking), SetLogin, GetUpdateStatus, GetBookings. Support for MinStay and MaxStay.</td> </tr> <tr> <td>2010-11-09</td> <td>1.3.1</td> <td>Updated channel list. GetRoomTypes: Obsoleted &quot;Ensuite&quot;, &quot;DoubleBed&quot; and &quot;Beds&quot; (replaced by new property &quot;Occupancy&quot;). GetProperties: shows which days are configure for weekends.</td> </tr> <tr> <td>2010-05-30</td> <td>1.3</td> <td>GetRoomTypes includes a room description (Label). Removed need to list channels to update to and ability to exclude channels. Skipped channels now warnings rather than errors.</td> </tr> <tr> <td>2010-05-05</td> <td>1.2</td> <td>Added links to XML samples. New channel: hb</td> </tr> <tr> <td>2010-04-30</td> <td>1.1</td> <td>Changed Room to \\textit{RoomType} to clarify matters</td> </tr> <tr> <td>2010-04-27</td> <td>1.0</td> <td>Initial release</td> </tr> </tbody> </table> <hr> <p>v201601 : ARIRules,  v201408 : new JSON format, all call names switched to NounPronounVerb format. v1 : the original api (which didn&#39;t support versioning)</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "XML v1 Information",
    "name": "XML_v1_Information",
    "version": "201601.0.0",
    "description": "<p>XML v1 is deprecated and this documentation is provided for backward compatibility.</p> <p>If you have specific concerns or things we can do to aid in this process please let us know at devhelp@myallocator.com.  I&#39;ve been on your side of the fence for more than 20 years, I hate when API&#39;s change too!</p> <p>The naming conventions have changed from VerbNoun to NounAdjectiveVerb,  but the data structures themselves have not changed significantly.  SetAllocation is ARIUpdate, but the request/response format for XML is the same.  We went out of our way to make the fewest number of changes possible,  but at the same time to introduce the ability to version and provide backward  compatibility starting with v1.  It&#39;s also worth mentioning all the old call names (SetAllocation) still work,  even though they aren&#39;t in this documentation just to avoid confusion to new developers.</p> <p>There is a v1 URL which runs on the new code base: <a href=\"http://api.myallocator.com/pms/v1/xml\">http://api.myallocator.com/pms/v1/xml</a></p> <p>The new codebase should (in theory) provide full v1 read/write compatibility,  with a few improvements. It should be 98% backward compatible (there some trivial differences in validation logic, but no differences in response/request format).</p> <p>Right now -- api.myallocator.com/ points at a single server running an ancient fork  of the old/original codebase. Requests to api.myallocator.com/pms/<em> are proxied  to the new api servers. At some point (once I get caught up on tickets) we&#39;re going  to turn off the old api server and send all requests to / api.myallocator.com/pms/v1/xml This </em>should* be unnoticeable to you, but you can control when this happens  by moving to <a href=\"http://api.myallocator.com/pms/v1/xml\">http://api.myallocator.com/pms/v1/xml</a> yourself.</p> <p>We will need to this at some point so we can start changing/optimizing internal data  structures, right now we&#39;re writing data in both new format and old format.</p> <p>There is no plan to deprecate v1 entirely in 2015 .. maybe someday, but no plans,  it&#39;s just not that big a deal, so we&#39;re not saying &quot;never&quot;, but we&#39;re saying don&#39;t  stress or feel rushed.</p> <p>The only changes to v1 actually impact all versions.  Specifically SetAllocation with QueryForUpdateStatus:false timeouts will be  decreased from 1 hour, to 30 minutes, to 15 minutes, to 5, and eventually  (hopefully) to 60 seconds so API requests can turn over faster. </p> <p>Certain channels which aren&#39;t live yet (ex: CTrip) require 2 minutes to do an update  and we don&#39;t want people camping on API webserver API connections.</p> <p><strong><em> BUT WAIT !!! BEFORE THAT HAPPENS </em></strong> soon you&#39;ll have the option to  receive callback notifications for both ariupdates, and configuration changes  (in addition to bookings).</p> <p>We&#39;re hoping it will be trivial for most v1 developers to move the code which  processes synchronous ARIUpdates from the HTTP response, into a callback handler on your  web-server, giving us an asynchronous update path and dramatically increasing  the reliability of the API for everybody.</p> <p>Right now it&#39;s very easy for a badly implemented rogue PMS to camp all 150 API  connections (even if it was increased to 5000 it&#39;d be easy to camp them all since the  timeout [1hr] is so large).   This wasn&#39;t as big a deal when we had 10 developers,  now there are over 150 and some of them.</p> <p>It only takes one bad implementation to take the whole system down for everybody.</p> ",
    "error": {
      "examples": [
        {
          "title": "Example: Could not parse XML",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<Errors>\n<Error>\n   <ErrorId>1</ErrorId>\n   <ErrorMsg>Could not parse XML</ErrorMsg>\n </Error>\n</Errors>",
          "type": "json"
        },
        {
          "title": "Example: XML API method specific error",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<GetRoomTypes>\n <Errors>\n   <Error>\n     <ErrorId>3</ErrorId>\n     <ErrorMsg>Invalid user or user password</ErrorMsg>\n   </Error>\n </Errors>\n</GetRoomTypes>",
          "type": "json"
        },
        {
          "title": "Example: XML Channel specific error ",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Errors>\n   <Error channel=\"hc\">\n     <ErrorMsg>\n       Provider not responding. Please try again later.\n     </ErrorMsg>\n   </Error>\n   <Error channel=\"iwb\">\n     <ErrorMsg>\n       Provider not responding. Please try again later.\n     </ErrorMsg>\n   </Error>\n </Errors>\n <Success>false</Success>\n <Warnings></Warnings>\n</SetAllocationResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  }
] });