define({ "api": [
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "i - Getting Started",
    "name": "i___Getting_Started",
    "version": "201804.0.1",
    "description": "<p>Welcome PMS vendors!</p> <p>If you would like to use the myallocator.com PMS API please request a vendor id+password here: <a href=\"https://www.myallocator.com/become-partner/\">https://www.myallocator.com/become-partner/</a></p> <p>The vendor_id + vendor_password will need to be submitted with every request, except HelloWorld (for testing).</p> <p>Be sure to register your vendor account with the email address of which you prefer to receive notifications. We will send application update notifications and action required requests to this address.</p> <p>Your customers must create an account on myallocator.com before they can use the API (or you need to create one for them). The myallocator user credentials (user/password) are needed to create an association between your PMS and the property. They should not be stored in your system.</p> <p>Request API Vendor Credentials: <a href=\"https://www.myallocator.com/become-partner/\">https://www.myallocator.com/become-partner/</a></p> <p>PMS PHP SDK (Recommended if using PHP): <a href=\"https://github.com/MyAllocator/myallocator-pms-php\">https://github.com/MyAllocator/myallocator-pms-php</a></p> <p><strong>Online Travel Agencies/Booking Websites</strong></p> <p>This API is for PMS vendors.</p> <p>If you are an OTA or booking website, this is NOT the API you are looking for.</p> <p>Please review our Build2Us OTA facing API documentation &amp; licensing: <a href=\"https://myallocator.github.io/build2us-apidocs/index.html\">https://myallocator.github.io/build2us-apidocs/index.html</a></p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "ii - Data Formats",
    "name": "ii___Data_Formats",
    "version": "201804.0.1",
    "description": "<p>The API operates with the JSON data format.</p> <p>The service URL is: https://api.myallocator.com/pms/v201804.0.1/json/MethodName</p> <p>In the URL above the Version is v201804.0.1, this version will periodically be changed as new features are added.</p> <p>Myallocator can be accessed via REST by either sending the payload as part of a HTML form, or by placing the JSON in the request body.</p> <p>JSON (form): Offers simplified parsing and low transport overhead and is passed in the field 'json' using standard HTML form encoding (application/x-www-form- urlencoded). In this example data such as space must be encoded to '+' or %20.</p> <p>JSON (raw): Set the HTTP header Content-Type: application/json and pass a raw UTF8 encoded json body.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "iii - Vendor Tokens",
    "name": "iii___Vendor_Tokens",
    "version": "201804.0.1",
    "description": "<p>Most API calls require that the user is authenticated. The <code>Hello*</code> family of calls exist for testing purposes and do not require authentication (although they will also work in an authenticated session). This is done with a <strong>user token</strong> that represents the access rights of a specific user, who in turn has access to one or more properties. To obtain this token the customer needs to be directed to the <a href=\"https://inbox.myallocator.com/en/manage/vendors\">&quot;PMS Connections&quot; page</a> which can be found within the MANAGE area of the myallocator inbox. There the customer needs to select your PMS:</p> <img src=\"img/pms_connections_add.png\" style=\"width:100%;margin: 20px 0;\" /> <p>Once your PMS is selected and added, the page will show a token:</p> <img src=\"img/pms_connections_token.png\" style=\"width:100%;margin: 20px 0;\" /> <p>This token will need to be copied to your PMS. Include the token with each API call inside the <code>Auth/UserToken</code> field.</p> <p>An alternative way to obtain the token is with the <code>AssociateUserToPMS</code> API method, but it requires special permissions. For details, see the section about this API method.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "1_Introduction",
    "type": "",
    "url": "{}",
    "title": "iv - Developer Support",
    "name": "iv___Developer_Support",
    "version": "201804.0.1",
    "description": "<p>You may contact us for developer support via email: <a href=\"mailto:devhelp@myallocator.com\">devhelp@myallocator.com</a></p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "1_Introduction"
  },
  {
    "group": "2_Booking_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Concepts",
    "name": "Concepts",
    "version": "201804.0.1",
    "description": "<p>Callbacks are the preferred way to access booking data (instead of polling). Callbacks data format matches the BookingList api call.</p> <p>Instead of polling for new bookings every few minutes you should register to receive a booking callback. With this feature we will send the bookings to your server via HTTP/HTTPS.</p> <p>Callbacks are easier for us and you! You don't have to develop a mechanism to regularly download bookings.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "2_Booking_Callbacks"
  },
  {
    "group": "2_Booking_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Delivery Method",
    "name": "Delivery_Method",
    "version": "201804.0.1",
    "description": "<p>Callbacks are delivered via HTTP/HTTPS.</p> <p>Configure a URL endpoint (HTTPS strongly recommended) and password via the the VendorSet API method that we can use to authenticate to your API. Whenever we receive a new booking we will send a POST request to your server with two parameters:</p> <ul> <li><em>booking</em> : contains a JSON-coded string of the booking data.</li> <li><em>password</em> : contains a string of a previously agreed on password.</li> </ul> <p>If your server doesn't answer (or doesn't answer with the correct code, see below) our system will retry with incremental delays between each try (1, 2, 4, 8, 16, 32 minutes... and so on).</p> <p>The Request format is the same as the BookingList response. Additionally it contains a PropertyId field which is the property ID of the myallocator property.</p> <p>Your server needs to respond in the correct format, otherwise we will keep resending the booking. In the response BODY write a JSON object in the following format:</p>",
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
    "version": "201804.0.1",
    "description": "<p>== Response Format == The codes are as follows, the message (msg) is not parsed and can be anything you like (we still recommend something that describes the error).</p> <table> <thead> <tr> <th>Code</th> <th>Cause</th> </tr> </thead> <tbody> <tr> <td>10</td> <td>Password wrong or not set.</td> </tr> <tr> <td>20</td> <td>Error while parsing JSON structure (including the exception message, for example position of not parsable part)</td> </tr> <tr> <td>21</td> <td>Error while parsing JSON structure (exact reason unknown)</td> </tr> <tr> <td>22</td> <td>Error while parsing JSON content</td> </tr> <tr> <td>30</td> <td>PropertyId is NULL or 0</td> </tr> <tr> <td>31</td> <td>Property not used on your PMS anymore</td> </tr> <tr> <td>35</td> <td>MyallocatorId already existing</td> </tr> <tr> <td>40</td> <td>Request a retry (vendor currently unable to process booking notification)</td> </tr> <tr> <td>50+</td> <td>Internal error on your side (for debugging)</td> </tr> </tbody> </table> <p>We record every error and can give you more details if needed. The important codes are really only 10 and 31. The JSON should always be valid and the PropertyId always included.</p> <p>The RUID is an unique identifier for each response that you can reference to us to receive support on a specific request/response.</p>",
    "success": {
      "examples": [
        {
          "title": "Example of a successful JSON response",
          "content": "{\n    \"Success\": true,\n    \"RUID\": \"9C811B86-3684-11E8-B30E-E1EA2FB2D601\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example of an unsuccessful JSON response",
          "content": "{\n  \"Success\": false,\n  \"Errors\": [\n      {\n          \"ErrorMsg\": \"Invalid vendor or vendor password\",\n          \"ErrorTicket\": \"19B1242A-3671-11E8-B788-483030B2D601\",\n          \"ErrorId\": 4\n      }\n  ],\n  \"RUID\": \"9C811B86-3684-11E8-B30E-E1EA2FB2D602\"\n}",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Container",
            "optional": false,
            "field": "ARIRules",
            "description": "<p>List of all existing ARIRules</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>True unless authentication failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response",
          "content": "{\n    \"Success\": true,\n    \"ARIRules\": [\n        {\n            \"StartDate\": \"2018-04-01\",\n            \"EndDate\": \"2020-04-01\",\n            \"Verb\": \"BLOCK\",\n            \"RoomId\": 5996,\n            \"DaysOfWeek\": \"any\",\n            \"Channel\": \"exp\",\n            \"PMSRuleId\": \"some id\",\n            \"RatePlanId\": 0\n        }\n    ],\n    \"RUID\": \"90AAE394-9667-11E8-93D9-D7FBDD922BDC\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Lists all existing ARIRules. See ARIRulesUpdate for more details.</p>",
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/ARIRulesList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"Your vendor ID\",\n  \"Auth/VendorPassword\":\"Your vendor password\",\n  \"Auth/PropertyId\": \"Property ID on myallocator\",\n}\nEOJSON",
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
    "version": "201804.0.1",
    "description": "<p>The ARI rules allow a PMS to communicate channel business logic to myallocator, so auto-adjustments can be safely made by myallocator.</p> <p>The only verb supported as an ARI rule at this time is &quot;BLOCK&quot; which clears the inventory for a specific channel (*). This can be used to make a channel appear as though it's disabled without actually disabling it.</p> <p>A rule can be set for all channels (not overridable) by specifying 'all' as a channel ID. The rule will be in effect also for new channel connections.</p> <p>The ARI rules for a property can be viewed using ARIRulesList or by going into inbox.myallocator.com | Manage | Rules. Each ARI rule must have a unique &quot;PMSRuleId&quot; that corresponds to the rule ID in your system and is used to identify the rule for a property.</p> <p>When new rules are sent or removed a corresponding ARIUpdate is created for the channel and date ranges specified. The UpdateId is returned in the response and can be viewed using ARIUpdateStatus.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>User's auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/Quiet",
            "description": "<p>Suppress output of all rules</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/NoUpdate",
            "description": "<p>Suppress outbound updates of rules to the remote channel (should be used for testing only)</p>"
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "ARIRules",
            "description": "<p>ARIRules to set (array)</p>"
          }
        ],
        "ARIRules": [
          {
            "group": "ARIRules",
            "type": "String",
            "optional": false,
            "field": ".ARIRules.Channel",
            "description": "<p>Channel to set a rule for</p>"
          },
          {
            "group": "ARIRules",
            "type": "Date",
            "optional": false,
            "field": ".ARIRules.StartDate",
            "description": "<p>Date that the rule starts (YYYY-MM-DD)</p>"
          },
          {
            "group": "ARIRules",
            "type": "Date",
            "optional": false,
            "field": ".ARIRules.EndDate",
            "description": "<p>Date that the rule starts (YYYY-MM-DD)</p>"
          },
          {
            "group": "ARIRules",
            "type": "String",
            "optional": false,
            "field": ".ARIRules.PMSRuleId",
            "description": "<p>Rule ID</p>"
          },
          {
            "group": "ARIRules",
            "type": "Integer",
            "optional": false,
            "field": ".ARIRules.RatePlanId",
            "description": "<p>RatePlan that will be assoiated with this rule</p>"
          },
          {
            "group": "ARIRules",
            "type": "Integer",
            "optional": false,
            "field": ".ARIRules.RoomId",
            "description": "<p>Room ID for this rule</p>"
          },
          {
            "group": "ARIRules",
            "type": "String",
            "allowedValues": [
              "\"BLOCK\""
            ],
            "optional": false,
            "field": ".ARIRules.Verb",
            "description": "<p>Rule action; only BLOCK is supported now</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Container",
            "optional": false,
            "field": "ARIRules",
            "description": "<p>List of all existing ARIRules</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"Success\": true,\n    \"ARIRules\": [\n        {\n            \"StartDate\": \"2018-04-01\",\n            \"EndDate\": \"2020-04-01\",\n            \"Verb\": \"BLOCK\",\n            \"RoomId\": 49281,\n            \"DaysOfWeek\": \"any\",\n            \"Channel\": \"loop\",\n            \"PMSRuleId\": \"my-unique-id\",\n            \"RatePlanId\": 0\n        }\n    ],\n    \"RUID\": \"90AAE394-9667-11E8-93D9-D7FBDD922BDC\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ARIRulesUpdate",
        "content": "{\n    \"Auth/VendorId\": \"Your Vendor ID\",\n    \"Auth/VendorPassword\": \"Your Vendor Password\",\n    \"Auth/UserToken\": \"User Authentication Token\",\n    \"Auth/PropertyId\": \"Property ID on myallocator\",\n\n    \"ARIRules\": [\n        {\n            \"Channel\": \"exp\",\n            \"StartDate\": \"2018-04-01\",\n            \"EndDate\": \"2020-04-01\",\n            \"PMSRuleId\": \"my-unique-id\",\n            \"RatePlanId\": 0,\n            \"RoomId\": \"49281\",\n            \"Verb\": \"BLOCK\"\n        }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/ARIRulesUpdate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\": \"Your Vendor ID\",\n    \"Auth/VendorPassword\": \"Your Vendor Password\",\n    \"Auth/UserToken\": \"User Authentication Token\",\n    \"Auth/PropertyId\": \"Property ID on myallocator\",\n\n    \"ARIRules\": [\n        {\n            \"Channel\": \"exp\",\n            \"StartDate\": \"2018-04-01\",\n            \"EndDate\": \"2020-04-01\",\n            \"PMSRuleId\": \"my-unique-id\",\n            \"RatePlanId\": 0,\n            \"RoomId\": \"49281\",\n            \"Verb\": \"BLOCK\"\n        }\n    ]\n}\nEOJSON",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Options",
            "description": "<p>Container node (Hash) containing a list of channels to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.QueryForStatus",
            "description": "<p>Default: false; If true the call returns immediately, and the caller should use ARIUpdateStatus to query. We strongly recommend setting this to &quot;true&quot;.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.IgnoreInvalidRooms",
            "description": "<p>Default: false, If true AND Invalid RoomId's are specified then a warning will be returned (otherwise the entire call will fail)</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": ".Options.loop_delay",
            "description": "<p>Intentionally make the 'loop' channel take loop_delay seconds (useful for testing with QueryForStatus)</p>"
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Channels",
            "description": "<p>Container node (array) containing a list of channels to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Channels.ChannelId",
            "description": "<p>The ChannelId of the channel to be updated. ex: &quot;loop&quot; for Loop</p>"
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Allocations",
            "description": "<p>Container node (array) containing a list</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Allocations.Allocation",
            "description": "<p>Individual allocations. There can be as many as you like, but a the date ranges should never overlap (within one room id).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Allocation.RoomId",
            "description": "<p>Room type id as returned by RoomList.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".Allocation.RatePlanId",
            "description": "<p>Rateplan ID as returned by RatePlanList. Defaults to 0. Unless you implemented experimental rateplan support you likely don't need this.</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": ".Allocation.StartDate",
            "description": "<p>Format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": ".Allocation.EndDate",
            "description": "<p>Format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": ".Allocations.Allocation.Units",
            "description": "<p>How many beds or rooms should be available on this day. Whether it's beds or rooms depends on whether the room is a dorm or a private room. To remove allocation set Units to 0.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": ".Allocations.Allocation.MinStay",
            "description": "<p>Specify the minumum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": ".Allocations.Allocation.MaxStay",
            "description": "<p>Specify the maximum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 0 or higher. 0 means &quot;unlimited&quot;. (optional)</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": ".Allocations.Allocation.Closed",
            "description": "<p>Room is not available during this time</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": ".Allocations.Allocation.ClosedForArrival",
            "description": "<p>Arrivals are not allowed on this day.</p>"
          },
          {
            "group": "Request",
            "type": "Bollean",
            "optional": true,
            "field": ".Allocations.Allocation.ClosedForDeparture",
            "description": "<p>Departures are not allowed on this day.</p>"
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": true,
            "field": ".Allocations.Allocation.Price",
            "description": "<p>Price per person for shared/dorm rooms or per room for private rooms.</p>"
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": true,
            "field": ".Allocations.Allocation.PriceSingle",
            "description": "<p>Single use rate. Only applicable to private rooms with more than one bed.</p>"
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
            "description": "<p>Can be it{true} (all channel updates succeeded), it{partial} (not all channels succeeded) or it{false} (all channel updates failed).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Errors/Error",
            "description": "<p>Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the error only applies to a specific channel.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Warnings/Warning",
            "description": "<p>Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the warning only applies to a specific channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"Success\": true,\n    \"UpdateId\": 1066832352,\n    \"Messages\": [\n        {\n            \"msg\": \"QueryForStatus mode enabled (will not wait)\",\n            \"id\": 99,\n            \"type\": \"info\"\n        }\n    ],\n    \"Errors\": [],\n    \"Channels\": {\n        \"boo\": {\n            \"parts\": 2\n        },\n        \"exp\": {\n            \"parts\": 3\n        }\n    },\n    \"Options\": {\n        \"QueryForStatus\": \"true\"\n    },\n\n    \"RUID\": \"1A2DDA3E-966A-11E8-830F-F807DE922BDC\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>An allocation sets various attributes, each optional, for a specific time frame:</p> <ul> <li>Rates</li> <li>Restrictions</li> <li>Number of private rooms available</li> <li>Number of beds available in a dormitory</li> </ul> <p>For more detail see below.</p> <p><strong>Errors &amp; Warnings</strong></p> <p>The response will always include the Success, Errors and Warnings fields.  If Success is set to &quot;true&quot; the Errors field will be empty. If Success is set to &quot;partial&quot; or &quot;false&quot; the Error field will include at least one item describing what failed.</p> <p><strong>Sending Overlapping Ranges &amp; Partial updates</strong></p> <p>Overlapping date ranges are explicitly allowed in the request body of a single ARI update. They are applied in the order they're listed in the request, so conflicts are resolved by simply sequentially applying each update in turn, overriding any attributes which may have been set by a previous update in the list.</p> <p>Some fields are optional such as Units, MinStay, MaxStay and Price so it's possible to send one date range describing pricing and another describing availability. See above for the full list of which fields are optional.</p> <p><strong>Sending ARI Updates to All Channels</strong></p> <p>You can also send ARI updates to all channels configured for a property without specifying each one individually by using the virtual channel code &quot;all&quot;. Channels that are  not set up by the user will be skipped as indicated by a warning.</p> <p>One or more channels can be excluded from the update by prefixing it with a minus sign (-). For examble a series of &quot;all&quot;, &quot;-exp&quot;, &quot;-boo&quot; would update all channels for the property except booking.com (boo) and Expedia (exp).</p> <p><strong>Running Jobs in the Background (ARIUpdateStatus)</strong></p> <p>Although it's possible send an ARIUpdate request which will not return a response until all of the updates have been sent to all of the named channels, the request may time out if there are a lot of channels or if some of them are slow. For this reason we recommend that the QueryForStatus flag be set to true which will cause the request to return immediately with an update ID. This ID can be used with ARIUpdateStatus to poll myallocator for the status of the update without the risk of an running into a network time out.</p> <p>If QueryForStatus is true then the ARIUpdateResponse will contain the additional parameter UpdateId, which is needed for ARIUpdateStatus.</p> <p>It is extremely likely that blocking updates will be phased out in favour of QueryForStatus so we highly recommend that you send only non-blocking ARIUpdate requests and poll myallocator using ARIUpdateStatus.</p> <p><strong>Date Limits</strong></p> <p>You can update a property's availability in myallocator for 4 years into the future. Setting availability and rates for the full four years is encouraged to improve a property's ranking in the channels. Channels which do not support 4 years of ARI will be updated to their individual limit and the remainder will be ignored.</p>",
    "examples": [
      {
        "title": "ARIUpdate",
        "content": "{\n  \"Auth/VendorId\": \"Your Vendor ID\",\n  \"Auth/VendorPassword\": \"Your Vendor Password\",\n  \"Auth/UserToken\": \"User Authentication Token\",\n  \"Auth/PropertyId\": \"Property ID on myallocator\",\n\n  \"Channels\": [\n    \"exp\",\n    \"boo\"\n  ],\n  \"Allocations\": [\n    {\n      \"RoomId\": \"59\",\n      \"StartDate\": \"2020-12-02\",\n      \"EndDate\": \"2020-12-13\",\n      \"Price\": 88,\n      \"PriceSingle\": 77,\n      \"Units\": 3,\n      \"ClosedForArrival\": false,\n      \"ClosedForArrival\": false,\n      \"ClosedForDeparture\": false,\n      \"MinStay\": \"2\",\n      \"MaxStay\": \"10\"\n    },\n    {\n      \"RoomId\": \"59\",\n      \"StartDate\": \"2021-12-16\",\n      \"EndDate\": \"2021-12-17\",\n      \"Units\": 3\n    }\n  ],\n  \"Options\": {\n    \"QueryForStatus\": true\n  }\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/ARIUpdate -d@- <<EOJSON\njson={\n  \"Auth/VendorId\": \"Your Vendor ID\",\n  \"Auth/VendorPassword\": \"Your Vendor Password\",\n  \"Auth/UserToken\": \"User Authentication Token\",\n  \"Auth/PropertyId\": \"Property ID on myallocator\",\n\n  \"Channels\": [\n    \"all\",\n    \"-boo\"\n  ],\n  \"Allocations\": [\n    {\n      \"RoomId\": \"59\",\n      \"StartDate\": \"2020-12-02\",\n      \"EndDate\": \"2020-12-13\",\n      \"Price\": 88,\n      \"PriceSingle\": 77,\n      \"Units\": 3,\n      \"ClosedForArrival\": false,\n      \"ClosedForDeparture\": false,\n      \"MinStay\": \"2\",\n      \"MaxStay\": \"10\"\n    },\n    {\n      \"RoomId\": \"59\",\n      \"StartDate\": \"2021-12-16\",\n      \"EndDate\": \"2021-12-17\",\n      \"Units\": 3\n    }\n  ],\n  \"Options\": {\n    \"QueryForStatus\": true\n  }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Success with warning",
          "content": "{\n    \"Success\": false,\n    \"Errors\": [\n        {\n            \"msg\": \"ARIUpdate contains no channels to update\",\n            \"err\": 1012\n        }\n    ],\n    \"Messages\": [],\n    \"Options\": {\n        \"QueryForStatus\": \"true\"\n    },\n\n    \"RUID\": \"13641036-966C-11E8-892C-D219DE922BDC\"\n}",
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
    "url": "/ARIUpdateStatus",
    "title": "ARIUpdateStatus",
    "name": "ARIUpdateStatus",
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "UpdateId",
            "description": "<p>UpdateId as returned by ARIUpdate</p>"
          }
        ]
      }
    },
    "description": "<p>Use this ARIUpdateStatus to query for the status of a ARIUpdate. It will list the results by channel. Big updates are split into several parts which is reflected in the Parts and ActivePart parameter.</p>",
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "parts",
            "description": "<p>A big update can be split into smaller parts. This can be used as a progress indicator. 0 parts mean that the update is completed (or aborted due to an error).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_part",
            "description": "<p>The current part number being submitted to the channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"Success\": true,\n    \"Channels\": {\n        \"loop\": {\n            \"active_part\": 1,\n            \"parts\": 2,\n            \"@Warnings\": [\n                [\n                    207,\n                    null,\n                    \"Room \\\"[Single Room]\\\" skipped (not mapped).\"\n                ]\n            ],\n            \"success\": 0,\n            \"error\": null\n        },\n        \"air\": {\n            \"active_part\": 0,\n            \"parts\": 0,\n            \"@Warnings\": [],\n            \"success\": 1,\n            \"error\": null\n        }\n    },\n    \"RUID\": \"DAC625E2-966C-11E8-BC96-3C22DE922BDC\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ARIUpdateStatus",
        "content": "{\n  \"Auth/VendorId\":\"Your Vendor ID\",\n  \"Auth/VendorPassword\":\"Your Vendor Password\",\n  \"Auth/UserToken\":\"User token\",\n  \"Auth/PropertyId\":\"Property ID on myallocator\",\n  \"UpdateId\":106502342\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/ARIUpdateStatus -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"UpdateId\":106502342\n}\nEOJSON",
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
    "version": "201804.0.1",
    "description": "<p>List of all supported amenities and their channel support</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/AmenityList -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      },
      {
        "title": "AmenityList Response",
        "content": "{\n    \"Amenities\": [\n        {\n            \"id\": \"251\",\n            \"description\": \"Private plunge pool\",\n            \"level\": \"room\",\n            \"ChannelSupport\": [\n                {\n                    \"cid\": \"exp\",\n                    \"ota_amenity_id\": \"4525\"\n                },\n                {\n                    \"cid\": \"ta\",\n                    \"ota_amenity_id\": \"SWIMMING_POOL\"\n                }\n            ]\n        },\n        {\n            \"id\": \"252\",\n            \"description\": \"Separate dining area\",\n            \"level\": \"property\",\n            \"ChannelSupport\": [\n                {\n                    \"cid\": \"exp\",\n                    \"ota_amenity_id\": \"6732\"\n                }\n            ]\n        }\n    ]\n}",
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
    "version": "201804.0.1",
    "description": "<p>This method can be used to obtain a <code>UserToken</code> for authentication. <strong>By default this call is not available and needs to be enabled for your PMS from our connectivity department.</strong> Copying the user token from the <a href=\"https://inbox.myallocator.com/en/manage/vendors\">&quot;PMS Connections&quot; page</a> on the myallocator website is the preferred and default way to obtain the token. The <code>AssociateUserToPMS</code> call is only applicable for systems where the customer does not have access to the myallocator website.</p> <p>If this call has been enabled then the username and password for the property's myallocator account can be included in a form in the PMS. <strong>The myallocator username and password is not to be saved/stored in your system and should not be included in any logging output in your system!</strong> Only the token should be stored.</p> <p>With the correct username/password this call will grant you access to properties currently associated with the user. Should the user create new properties you'll need to call this API method again.</p> <p>Note that the user can revoke access for your PMS through the myallocator website for one or all properties. If access has been revoked it can only be enabled again through the myallocator website.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserId",
            "description": "<p>Username on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserPassword",
            "description": "<p>Password on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PMSUserId",
            "description": "<p>The Unique UserId on the PMS (for reference 128 character max) - will be included in callbacks</p>"
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
            "description": "<p>Use this token to access other API calls</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "AssociateUserToPMS",
        "content": "{\n  \"Auth/UserId\":\"username for myallocator\",\n  \"Auth/UserPassword\":\"password for myallocator\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"PMSUserId\":\"username-on-the-remote-pms-system\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/AssociateUserToPMS -d@- <<EOJSON\njson={\n  \"Auth/UserId\":\"username for myallocator\",\n  \"Auth/UserPassword\":\"password for myallocator\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"PMSUserId\":\"username-on-the-remote-pms-system\"\n}\nEOJSON",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property Id associated to user.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MyAllocatorId",
            "description": "<p>Query for a specific myallocator booking id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CancellationReason",
            "description": "<p>Give a reason for the cancellation</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to cancel a booking both in myallocator and the channel. Only very few channels support this, check the 'api_cancellation' flag on the ChannelList call to see which channels support this.</p> <p>If automatic adjustments are enabled, cancelling a booking will trigger updates to all configured channels. Depending on the cancellation setting it may or may not restore availability.</p>",
    "examples": [
      {
        "title": "Example of cancelling a booking",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\",\n    \"CancellationReason\":\"Guest's flight was cancelled\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/BookingCancel -d@- <<EOJSON\njson=\n{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n\n    \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\",\n    \"CancellationReason\":\"Guest's flight was cancelled\"\n}\nEOJSON",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ArrivalStartDate",
            "description": "<p>Query for date of arrival (first day of staying).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ArrivalEndDate",
            "description": "<p>Required if ArrivalStartDate is used.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationStartDate",
            "description": "<p>Query by booking modification date. If the booking has not been modified the creation date is used. Timezone used is UTC. The date corresponds to the date the booking was modified/created on myallocator and not neccessarily on the channel, although it should be equal for most cases.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationEndDate",
            "description": "<p>Required if ModificationStartDate is used. We recommend to add one day to the end date for regular booking imports, to make up for time differences between your and our server.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationStartDate",
            "description": "<p>Query by booking creation date. Timezone used is UTC. The date corresponds to the date the booking was created on myallocator and not neccessarily on the channel, although it should be equal for most cases. Important: We strongly recommend to use ModificationStartDate / ModificationEndDate instead of CreationStartDate/CreationEndDate to regular booking retrievals!</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationEndDate",
            "description": "<p>Required if CreationStartDate is used.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationStartDateTime",
            "description": "<p>Same as CreationStartDate but uses YYYY-MM-DD hh:mm:ss format. Timezone is UTC.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreationEndDateTime",
            "description": "<p>Same as CreationEndDate but uses YYYY-MM-DD hh:mm:ss format. Timezone is UTC.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationStartDateTime",
            "description": "<p>Same as ModificationStartDate but uses YYYY-MM-DD hh:mm:ss format. Timezone is UTC.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModificationEndDateTime",
            "description": "<p>Same as ModificationEndDate but uses YYYY-MM-DD hh:mm:ss format. Timezone is UTC. We recommend adding 5 minutes to the end date to make up for time differences between your and our server.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "OrderId",
            "description": "<p>Query for a specific order ID (assigned by channel). Be aware that order IDs are not guaranteed to be unique across different channels! Using BookingId below is strongly recommended for individual booking retrievals.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "BookingId",
            "description": "<p>Query for a specific booking id (also known as &quot;MyAllocatorId&quot;)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CreditCardPassword",
            "description": "<p>Password to decrypt booking credit card details. Also requires Options/IncludePaymentData option to be true.</p>"
          },
          {
            "group": "Request",
            "type": "CurrencyCode",
            "optional": true,
            "field": "Options/NormalizeToCurrency",
            "description": "<p>Converts the booking prices into a single currency (at current exchange rates)</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeArchived",
            "description": "<p>Bookings are archived a few months after their departure date, this will include historical data, <em>at this time only compatible with Arrival</em>Date)</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludePaymentData",
            "description": "<p>Include decrypted credit card details for returned bookings. The CreditCardPassword parameter must also be included and the vendor must be configured as PCI compliant.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Limit",
            "description": "<p>Limit results to this number of bookings</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Skip",
            "description": "<p>For use in conjunction with Limit, offsets the result count</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/Acknowledged",
            "description": "<p>If true returns only bookings acknowleged by the customer on the myallocator UI. If false only returns bookings that are not acknowleged.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/Read",
            "description": "<p>If true returns only bookings looked at by the customer on the myallocator UI. If false only returns bookings that are not looked at.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SearchQuery",
            "description": "<p>Filter by bookings matching this search query (fields searched: Customer first and last name, customer email address, OrderId and BookingId)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SortBy",
            "description": "<p>Sort ascending by 'ArrivalDate', 'CreationDate' or 'ModificationDate' (equals CreationDate if never modified)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Options/SortByDesc",
            "description": "<p>Sort descending by 'ArrivalDate', 'CreationDate' or 'ModificationDate' (equals CreationDate if never modified)</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeCount",
            "description": "<p>Include the count for how many bookings match the search (not taking limit into account)</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeNotes",
            "description": "<p>Include notes added by the hotel on the myallocator inbox</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Options/IncludeVersionData",
            "description": "<p>Includes an additional array with details of previous versions of this booking (only when modifications exist). Cannot be used together with Version parameter.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "Options/Version",
            "description": "<p>Return older version of booking. Version 0 is the initial booking, Version 1 second oldest and so on. Without this option we always return the most recent.</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to query for bookings made to a specific property by booking date, modification date or arrival date.</p> <p>It is important to know that not every booking that is returned through the API neccessarily resulted in an adjustment of the other channels. If the booking is not mapped to any rooms on our system, or if the channel has just been setup, the adjustment will not be carried out. The requests consists of search criteria by date. Only specify the StartDate/EndDate of one criteria. note: formerly BookingList (v1).</p> <p>** Data Formatting ** Different channels return a different amount of information about a booking, therefore many fields are optional. (Sorry this isn't more useful, we're working on addressing this)</p> <p>** Best Pratices **</p> <ul> <li>Callbacks are the fastest, best, and preferred way of receiving Booking data.</li> <li>Every effort will be made to synchronize the callback data format and this format. (You can/should use the same data parsing code)</li> <li>BookingList method should only be used as a backup to correct errors or lost callbacks. Or to periodically verify integrity of data.</li> <li>Always use ModificationStartDate ModificationEndDate in production.</li> <li>If a change/cancellation is received then the modification date will also be different from the creation date)</li> <li>Do not frequently poll this API, one call, per property, every 30 minutes is considered &quot;Acceptable Usage&quot;.</li> <li>It is acceptable use for a PMS to burst on this API when initially pulling down data for an existing MA client.</li> </ul>",
    "examples": [
      {
        "title": "Example of quering for bookings",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"ModificationStartDate\":\"2010-01-01\",\n    \"ModificationEndDate\":\"2010-01-02\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/BookingList -d@- <<EOJSON\njson=\n{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"ModificationStartDate\":\"2010-01-01\",\n    \"ModificationEndDate\":\"2010-01-02\"\n}\nEOJSON",
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
            "field": "Channel",
            "description": "<p>2-4 letter channel code</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "StartDate",
            "description": "<p>Date of arrival (YYYY-MM-DD)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EndDate",
            "description": "<p>Date before day of departure (YYYY-MM-DD)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "IsCancellation",
            "description": "<p>\\textit{true} or \\textit{false}</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorId",
            "description": "<p>Booking ID on myallocator (hexadecimal number)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorCreationDate",
            "description": "<p>Date of booking creation on myallocator</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorCreationTime",
            "description": "<p>Time of booking creation on myallocator</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorModificationDate",
            "description": "<p>Date of booking modification on myallocator (in case of a cancellation the modification date is different from the creation date)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MyallocatorModificationTime",
            "description": "<p>Time of booking modification on myallocator</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>Booking ID on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Rooms/Room",
            "description": "<p>List of booked room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomTypeId",
            "description": "<p>&amp; List of booked myallocator room IDs. Several channel room can mapped to one myallocator room. If \\textit{-1} it means that we couldn't match the channel room to one of our rooms.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>Number of booked rooms (for private rooms) or beds (for shared rooms</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderSource",
            "description": "<p>Which website the booking originates from</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderDate",
            "description": "<p>The date the booking has been created on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderTime",
            "description": "<p>The time the booking has been created on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderAdults",
            "description": "<p>Number of adults</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OrderChildren",
            "description": "<p>Number of children</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Deposit",
            "description": "<p>Amount of money already taken as a deposit</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "DepositCurrency",
            "description": "<p>Currency of deposit</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Commission",
            "description": "<p>Fee taken by the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CommissionCurrency",
            "description": "<p>Currency of fee taken by the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CommissionIncludedInTotal",
            "description": "<p>Whether the commission is included in the TotalPrice. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TotalPrice",
            "description": "<p>Total cost of booking</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TotalCurrency",
            "description": "<p>Currency for total cost of booking</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CancellationFee",
            "description": "<p>Fee charged from guest after booking is cancelled</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Customers/Customer",
            "description": "<p>Customer details (can be more than one)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerFName",
            "description": "<p>First name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerLName",
            "description": "<p>Family name (or if CustomerFName is empty, both first and last name)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerGender",
            "description": "<p>Gender</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerSmoker",
            "description": "<p>Whether customer is a smoker. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPhone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPhoneMobile",
            "description": "<p>Mobile phone number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerFax",
            "description": "<p>Fax number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerAddress",
            "description": "<p>Address</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCompany",
            "description": "<p>Company name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCompanyDepartment",
            "description": "<p>Company deparment name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCity",
            "description": "<p>City</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerState",
            "description": "<p>State</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerPostCode",
            "description": "<p>Post code</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerCountry",
            "description": "<p>Address country name (not neccessarily a 2/3-letter code).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerNationality",
            "description": "<p>Nationality (not neccessarily a 3-letter code)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerArrivalTime",
            "description": "<p>Time of arrival</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CustomerNote",
            "description": "<p>Note to the property owner</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Price",
            "description": "<p>Price for this room and stay</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency for the price</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomDesc",
            "description": "<p>Room description on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RateDesc",
            "description": "<p>Rate description on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of persons this room is booked for</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantFName",
            "description": "<p>First name of occupant of this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantLName",
            "description": "<p>Family name of occupant of this room (or if OccupantFName is empty, both first and last name)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantSmoker",
            "description": "<p>whether occupant is a smoker. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "OccupantNote",
            "description": "<p>Note to the property owner</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Adults",
            "description": "<p>Number of adults staying in this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Children",
            "description": "<p>Number of children staying in this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Wheter breakfast was ordered alogn with the booking. Can be \\textit{true} or \\textit{false}.\\</p>"
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
    "version": "201804.0.1",
    "description": "<p>This call can be used to retrieve credit card details from specific bookings. This applies only to channels that currently send us the credit card details and only for bookings that were created after connection with myallocator has been made.</p> <p>This API call is not enabled for vendors by default. You need to send us your PCI compliance certification before this can be done. It's also neccessary to send along the credit card viewing password (different from the user login). For best practise do not store this password in your system but rather get it from the customer and send it on directly. This way the password will only be in the memory and not as accessible.</p> <p>The credit card viewing password needs to be changed ever 365 days by the property. It can happen that the property has reset their password in which case our support team needs to reencrypt the existing details. This is not an automatic process and can take between 1 and 3 business days.</p> <p>Applicable error codes are 26 - 30. Even though logically this would be a GET call, we use POST for this one to prevent the password from going to the webserver log files.</p> <p>Bookings can have multiple credit card details stored within them, as they have been updated by the guest. The response will list credit card details with the most recent credit card first.</p> <p>All instances of credit card details do not contain all fields. We pass along the fields we receive from channels. Check the appendix for card codes.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
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
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
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
            "description": "<p>OrderId from the OTA    (required if no MyAllocatorId)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MyAllocatorId",
            "description": "<p>ID assigned by myallocator (required if no OrderId)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Version",
            "description": "<p>Returns credit card details from a specific version of the booking. Without this parameter the most recent details are returned.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "BookingPaymentDownload",
          "content": "{\n    \"Payments\": [\n         {\n             \"CardNumber\": \"4111111111111111\",\n             \"CardHolderName\": \"Martin Seamus McFly\",\n             \"CardCVV\": \"123\",\n             \"CardExpiryMonth\": \"11\",\n             \"CardExpiryYear\": \"2018\",\n             \"CardHolderAddress\": \"100 Easy St.\",\n             \"CardHolderCity\": \"Mountain View\",\n             \"CardHolderState\": \"CA\",\n             \"CardHolderPostCode\": \"94043\",\n             \"CardHolderCountry\": \"US\"\n         },\n         {\n             \"CardNumber\": \"4111111111111111\",\n             \"CardHolderName\": \"Emmett Lathrop Brown\",\n             \"CardCVV\": \"123\",\n             \"CardExpiryMonth\": \"11\",\n             \"CardExpiryYear\": \"2018\",\n             \"CardHolderAddress\": \"101 Easy St.\",\n             \"CardHolderCity\": \"Mountain View\",\n             \"CardHolderState\": \"CA\",\n             \"CardHolderPostCode\": \"94043\",\n             \"CardHolderCountry\": \"US\"\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/BookingPaymentDownload -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator\",\n    \"CreditCardPassword\":\"some_password\",\n    \"MyAllocatorId\": \"some_ma_id\"\n}\nEOJSON",
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
    "version": "201804.0.1",
    "description": "<p>This call can be used to check credit card password.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Required to download a Booking.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
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
        "title": "Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator\",\n    \"CreditCardPassword\":\"some_password\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/BookingPaymentPasswordValidate -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator\",\n    \"CreditCardPassword\":\"some_password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n \"Success\": true,\n \"PasswordValid\": false,\n \"ErrorMsg\":\"Reason why password was invalid\"\n}",
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
    "url": "/BookingRemovePII",
    "title": "BookingRemovePII",
    "name": "BookingRemovePII",
    "version": "201804.0.1",
    "description": "<p>Deletes personally identifiable information (PII) from a booking, like the guest name or email address. This cannot be undone. Only allows removal once the guest has left or the booking is cancelled.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MyAllocatorId",
            "description": "<p>Myallocator ID of the booking</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>True if call was successful</p>"
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "Errors",
            "description": "<p>Array with errors when Success flag is false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success)",
          "content": "{\n    \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Request",
        "content": "{\n  \"Auth/VendorId\": \"\",\n  \"Auth/VendorPassword\": \"\",\n  \"Auth/UserToken\":\"\",\n  \"Auth/PropertyId\":\"\",\n  \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/BookingRemovePII -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"MyAllocatorId\":\"57333cd36dbf9a4f114dd781\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Response (invalid booking)",
          "content": "{\n    \"Errors\": [\n        {\n            \"ErrorTicket\": \"D13BAC04-1234-5678-804B-F5140B37646E\",\n            \"ErrorMsg\": \"No such booking id\",\n            \"ErrorId\": \"30\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Response (booking not departed or cancelled)",
          "content": "{\n    \"Errors\": [\n        {\n            \"ErrorId\": \"8020\",\n            \"ErrorMsg\": \"Guest details cannot be removed if the booking is not cancelled or the guest not yet departed.\",\n            \"ErrorTicket\": \"D13BAC04-1234-5678-804B-F5140B37646E\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Bookings.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/ChannelList",
    "title": "ChannelList",
    "name": "ChannelList",
    "version": "201903.0.1",
    "description": "<p>Dumps information about all known channels, their status, and supported fields.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "List",
            "optional": true,
            "field": "Channels",
            "description": "<p>Query specific channels instead of all of them. If such channels aren't present, an error is thrown.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "Extended",
            "description": "<p>If true, return more details. Currently those would include Capabilities, ChannelExtra, HasExternalId, and Messages</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "Channels",
            "description": "<p>Information about available channels. The key is 2-4 letter channel id (cid). The values are hashes/objects.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Channel/cid",
            "description": "<p>Unique channel ID</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Channel/name",
            "description": "<p>Name for the channel</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Channel/isLive",
            "description": "<p>true when the channel is in production</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Channel/isBeta",
            "description": "<p>true when the channel is in production but not yet stable</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Channel/hidden",
            "description": "<p>true when the channel is in development</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/ChannelList -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n   \"Channels\" : {\n      \"bd\" : {\n         \"RoomInput\" : [\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_type\",\n               \"type\" : \"text\"\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_type\",\n               \"type\" : \"text\"\n            }\n         ],\n         \"isLive\" : true,\n         \"isBeta\" : true,\n         \"name\" : \"BestDay\",\n         \"isCalendarBased\" : false,\n         \"signupLink\" : \"http://extranetbeta.bestday.com/HOME/REGISTER\",\n         \"isLockedLogin\" : false,\n         \"PropertyInput\" : [\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_id\",\n               \"type\" : \"text\",\n               \"label\" : \"User ID\",\n               \"validate\" : 1\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_password\",\n               \"type\" : \"text\",\n               \"label\" : \"Password\"\n            },\n            {\n               \"length\" : 256,\n               \"name\" : \"bd_propid\",\n               \"type\" : \"text\",\n               \"label\" : \"Property ID\"\n            }\n         ]\n      },\n      \"rec\" : {\n         \"RoomInput\" : [\n            {\n               \"length\" : 50,\n               \"name\" : \"rec_type\",\n               \"type\" : \"text\"\n            },\n            {\n               \"name\" : \"rec_rate\",\n               \"type\" : \"integer\"\n            }\n         ],\n         \"isLive\" : true,\n         \"isBeta\" : false,\n         \"name\" : \"Reconline\",\n         \"isCalendarBased\" : false,\n         \"signupLink\" : \"http://www.reconline.com/e/hotels.html\",\n         \"isLockedLogin\" : true,\n         \"PropertyInput\" : [\n            {\n               \"activation\" : 1,\n               \"name\" : \"rec_id\",\n               \"label\" : \"Hotel ID\",\n               \"validate\" : 1\n            },\n            {\n               \"activation\" : 1,\n               \"stored\" : 0,\n               \"name\" : \"rec_city\",\n               \"label\" : \"City\"\n            }\n         ]\n      }\n    }\n}",
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
    "url": "/HelloWorld",
    "title": "HelloWorld",
    "name": "HelloWorld",
    "version": "201804.0.1",
    "description": "<table> <thead> <tr> <th>Call</th> <th>Notes + Authentication Requirements</th> </tr> </thead> <tbody> <tr> <td>HelloWorld</td> <td>No Authentication Required</td> </tr> <tr> <td>HelloUser</td> <td>Requires <em>VALID</em> User Credentials</td> </tr> <tr> <td>HelloVendor</td> <td>Requires <em>VALID</em> Vendor Credentials</td> </tr> <tr> <td>HelloVendorUser</td> <td>Requires <em>VALID</em> User <em>AND</em> Vendor Credentials</td> </tr> </tbody> </table> <p>This method is diagnostic in nature, it is intended to provide a simple echo/response &quot;My First API call&quot;, <em>IT HAS NO PURPOSE</em> besides simply returning whatever parameters you send it (no authentication required). (Note: HelloVendor and HelloVendorUser return a &quot;callback_delay&quot; parameter which should be zero, any positive number indicates a problem [check your server logs])</p>",
    "examples": [
      {
        "title": "Hello Request",
        "content": "GET /pms/v201804/json/HelloWorld\nContent-Type: application/json\n{ \"hello\":\"world\" }",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/HelloWorld -d 'json={\"Hello\":\"World\"}'",
        "type": "json"
      },
      {
        "title": "HelloVendor Request",
        "content": "GET /pms/v201804/json/HelloWorld\nContent-Type: application/json\n{\n    \"Auth/VendorId\":\"your vendor id\",\n    \"Auth/VendorPassword\":\"your vendor password\",\n    \"hello\":\"world\",\n    \"callback_delay\":0\n}",
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
    "version": "201804.0.1",
    "description": "<p>Lists the channel details associated with a property.</p> <p>Note the version of this call. Previous versions would always return all properties even when the property ID was specified.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator. If not provided, all properties for given user will be returned.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyChannelList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID on myallocator\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Properties\" : [\n      {\n         \"Channels\" : {\n            \"enbc\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"bd\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"eb\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"Enabled\"\n            },\n            \"mal\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"oa\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"enz\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"NotSetup\"\n            },\n            \"wix\" : {\n               \"currency\" : \"GBP\",\n               \"status\" : \"HasErrors\"\n               \"lasterror\" : \"Invalid credentials\"\n            },\n            ...\n         },\n         \"PropertyId\" : 1234\n      }\n   ],\n   \"Success\" : true\n}\n\n=pod",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyName",
            "description": "<p>Name of hotel/hostel/B&amp;B/...</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Timezone",
            "description": "<p>Timezone the property is located in. Check Appendix for valid values. Defaults to UTC.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>Phone numer for the property with international country code (eg. +44 350 5697864)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Fax",
            "description": "<p>Fax numer for the property with international country code (eg. +44 350 5697864)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MinLengthOfStay",
            "description": "<p>Default minimum length of stay. Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MaxLengthOfStay",
            "description": "<p>Default maximum length of stay. Defaults for 0, which means no maximum stay.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "AddressLine1",
            "description": "<p>First address line of the property (usually the street name and house number)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "AddressLine2",
            "description": "<p>Second address line of the property (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>City or locality the property is located in</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PostCode",
            "description": "<p>Post Code (ZIP) of the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "State",
            "description": "<p>State of the property (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property is located in.</p>"
          },
          {
            "group": "Request",
            "type": "Decimal",
            "optional": true,
            "field": "Latitude",
            "description": "<p>Geographic latitude of the property, given as decimal degrees. Positive for north, negative for south. Example: 32.70954</p>"
          },
          {
            "group": "Request",
            "type": "Decimal",
            "optional": true,
            "field": "Longitude",
            "description": "<p>Geographic longitude of the property, given as decimal degrees. Positive for east, negative for west. Example: -117.15292</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAddressLine1",
            "description": "<p>First address line of the company or property owner (usually the street name and house number)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAddressLine2",
            "description": "<p>Second address line of the company or property owner (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCity",
            "description": "<p>City or locality the company or property owner is located in</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoicePostCode",
            "description": "<p>Post Code (ZIP) of the company or property owner</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceState",
            "description": "<p>State of the company or property owner (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCountry",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the the company or property owner is located in.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCompanyName",
            "description": "<p>Name of the company owning the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceMainContactName",
            "description": "<p>Name of the main contact for the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAccountManagerName",
            "description": "<p>Name of the account manager responsible for the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceVatID",
            "description": "<p>Tax ID for the property</p>"
          },
          {
            "group": "Request",
            "type": "URL",
            "optional": true,
            "field": "Website",
            "description": "<p>Homepage of the property</p>"
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "optional": true,
            "field": "Breakfast",
            "description": "<p>Can be IN (included), EX (excluded) or empty (not applicable). Defaults to &quot;not applicable&quot;.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE). Defaults to 0.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Defaults to default user email.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Defaults to default user email.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Defaults to default user email.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "TermsAccepted",
            "description": "<p>Indicate which version of the myallocator terms and conditions have been accepted (through a checkbox). Specify the version as a YYYYMM date string (eg. 201805).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "TermsAcceptedByIP",
            "description": "<p>The (public) IP address of the property owner that accepted the terms and conditions. Mandatory if TermsAccepted is specified.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "PropertyId",
            "description": "<p>Myallocator PropertyId of the freshly created property (store this to reference the property in other calls)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "propertyToken",
            "description": "<p>Obsolete field. Please ignore.</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator. Before you can use this method we'll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed. Previously known as SetLogin/CreateLogin</p>",
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyCreate -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"PropertyName\":\"Example Hostel\",\n  \"Currency\":\"USD\",\n  \"AddressLine1\":\"Main St\",\n  \"AddressLine2\":\"Main Building\",\n  \"City\":\"San Diego\",\n  \"PostCode\":\"92101\",\n  \"State\":\"CA\",\n  \"Country\":\"us\",\n  \"Timezone\":\"UTC\",\n  \"Phone\":\"+1 123456789\",\n  \"Fax\":\"+2 987654332\",\n  \"MinLengthOfStay\":\"2\",\n  \"MaxLengthOfStay\":\"0\",\n  \"Latitude\":\"10.123\",\n  \"Longitude\":\"55.111\",\n  \"Breakfast\":\"IN\",\n  \"Website\":\"https://myallocator.com\",\n  \"EmailDefault\":\"contact@example.com\",\n  \"EmailChannelBooking\":\"booking@example.com\",\n  \"EmailBookNow\":\"booknow@example.com\",\n  \"InvoiceAddressLine1\":\"invoice street 1\",\n  \"InvoiceAddressLine2\":\"invoice street 2\",\n  \"InvoiceCity\":\"invoice city\",\n  \"InvoicePostCode\":\"invoice zip\",\n  \"InvoiceState\":\"invoice state\",\n  \"InvoiceCountry\":\"de\",\n  \"InvoiceCompanyName\":\"invoice company name\",\n  \"InvoiceMainContactName\":\"invoice main contact name\",\n  \"InvoiceAccountManagerName\":\"invoice account manager name\",\n  \"InvoiceVatID\":\"invoice vat id\"\n  \"BookingAdjust\":\"0|1\",\n  \"BookingAdjustCancellation\":\"0|1\",\n  \"BookingAdjustModification\":\"0|1\",\n  \"BookingDownload\":\"0|1\",\n  \"EmailDefault\":\"contact@example.com\",\n  \"EmailChannelBooking\":\"booking@example.com\",\n  \"EmailBookNow\":\"booknow@example.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyFullRefresh",
    "title": "PropertyFullRefresh",
    "name": "PropertyFullRefresh",
    "version": "201804.0.1",
    "description": "<p>Force updating all channels connected to given property.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "List",
            "optional": false,
            "field": "List",
            "description": "<p>optional. List of specific channels. By default all connected channels will be updated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>always true if call was successful</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "UpdateIds",
            "description": "<p>identifiers of update jobs that have been created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PropertyFullRefresh Response",
          "content": "{\n    \"Error\": {},\n    \"UpdateIds\": {\n        \"exp\": [\n            108\n        ],\n        \"loop\": [\n            107\n        ]\n    },\n    \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "PropertyFullRefresh Request",
        "content": "{\n  \"Auth/VendorId\": \"{{auth.vendor.id}}\",\n  \"Auth/VendorPassword\": \"{{auth.vendor.password}}\",\n  \"Auth/UserToken\":\"{{auth.user.token}}\",\n  \"Auth/PropertyId\":\"{{auth.property.id}}\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/FullRefresh -d@- <<EOJSON\njson={\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\":\"\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MyAllocator/API/Method/FullRefresh.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageCreate",
    "title": "PropertyImageCreate",
    "name": "PropertyImageCreate",
    "version": "201804.0.1",
    "description": "<p>This method allows you to upload property images.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "PropertyImages",
            "description": "<p>List of PropertyImage objects for upload.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "PropertyImage",
            "description": "<p>A single property image to be uploaded.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/Data",
            "description": "<p>Base64 encoded raw image data</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PropertyImage/Description",
            "description": "<p>Description of the image to show on a channel (max. 2000 characters)</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "PropertyImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top. Defaults to 0.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request:",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n      {\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Spa\",\n        \"SortOrder\": 10\n      }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyImageCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n      {\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Spa\",\n        \"SortOrder\": 10\n      }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the upload was succesful</p>"
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "PropertyImages",
            "description": "<p>Array containing PropertyImage objects</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "PropertyImage",
            "description": "<p>Object containing more details about the upload image(s)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/ImageId",
            "description": "<p>The image ID which will reference the property image</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/SavedFilename",
            "description": "<p>Filename in our system</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "PropertyImage/URL",
            "description": "<p>Publicly accessible URL to the full resolution image</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "PropertyImage/Thumbnail",
            "description": "<p>Publicly accessible URL to the thumbnail</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "PropertyImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"Success\": true,\n    \"Method\": \"PropertyImageCreate\",\n    \"PropertyImages\": [\n        {\n            \"URL\": \"https://inbox.myallocator.com/n/user_image.xt?pid=1&img=66F96776-...-0DEB0D339365.png\",\n            \"Thumbnail\": \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=1&img=66F96776-...-0DEB0D339365.png\",\n            \"SavedFilename\": \"66F96776-72E7-11E8-9F02-0DEB0D339365.png\",\n            \"ImageId\": \"41222\",\n            \"Description\": \"Reception Area\"\n        }\n    ],\n    \"RUID\": \"66FACBCA-72E7-11E8-9F02-0DEB0D339365\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageList",
    "title": "PropertyImageList",
    "name": "PropertyImageList",
    "version": "201804.0.1",
    "description": "<p>Returns a list of uploaded images for the property-level.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyImageList -d@- <<EOJSON\njson=\n{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the call was succesful (should always be true)</p>"
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "PropertyImages",
            "description": "<p>Array containing PropertyImage objects</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "PropertyImage",
            "description": "<p>Object containing more details about the images</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/ImageId",
            "description": "<p>The image ID which will reference the property image</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/SavedFilename",
            "description": "<p>Filename in our system</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "PropertyImage/URL",
            "description": "<p>Publicly accessible URL to the full resolution image</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "PropertyImage/Thumbnail",
            "description": "<p>Publicly accessible URL to the thumbnail</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "PropertyImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"PropertyImages\" : [\n    {\n      \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=01D0FAB8-...-3120FD8AEA94.jpg\",\n      \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=01D0FAB8-...-3120FD8AEA94.jpg\",\n      \"ImageId\" : \"343\",\n      \"SavedFilename\" : \"01D0FAB8-5BF6-11E5-8767-3120FD8AEA94.jpg\",\n      \"Description\":\"The Spa\",\n      \"SortOrder\": 100\n    },\n    {\n      \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=4257D9FE-...-DDCC3C83E8DD.jpg\",\n      \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=4257D9FE-...-DDCC3C83E8DD.jpg\",\n      \"ImageId\" : \"466\",\n      \"SavedFilename\" : \"4257D9FE-687A-11E5-B908-DDCC3C83E8DD.jpg\",\n      \"Description\":\"The Lobby\",\n      \"SortOrder\": 200\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageRemove",
    "title": "PropertyImageRemove",
    "name": "PropertyImageRemove",
    "version": "201804.0.1",
    "description": "<p>Remove a property image.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "PropertyImages",
            "description": "<p>List of PropertyImage objects. If absent all property images are removed.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "PropertyImage",
            "description": "<p>A single property image to be removed.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PropertyImage/PropertyImageId",
            "description": "<p>ID of image to be removed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request (remove single property image)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImage\":{ \"PropertyImageId\": \"1234\" }\n}",
        "type": "json"
      },
      {
        "title": "Request (remove multiple property images)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n        { \"PropertyImageId\": \"1234\" },\n        { \"PropertyImageId\": \"1234\" }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "Request (remove all property images)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyImageRemove -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImage\":{ \"PropertyImageId\": \"1234\" }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the removal was succesful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"Success\": true,\n    \"Method\": \"PropertyImageRemove\",\n    \"RUID\": \"9C3F6798-72E5-11E8-BE3D-19DB0D339365\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyImageUpdate",
    "title": "PropertyImageUpdate",
    "name": "PropertyImageUpdate",
    "version": "201804.0.1",
    "description": "<p>Update the description and/or sort order of a property image.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "PropertyImages",
            "description": "<p>List of PropertyImage objects.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "PropertyImage",
            "description": "<p>A single property image to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PropertyImage/PropertyImageId",
            "description": "<p>ID of image to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PropertyImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "PropertyImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top. Defaults to 0.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request (update single property image)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImage\":{ \"PropertyImageId\": \"1234\", \"Description\": \"The garden\", \"SortOrder\": 1 }\n}",
        "type": "json"
      },
      {
        "title": "Request (update multiple property images)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImages\": [\n        { \"PropertyImageId\": \"1234\", \"Description\": \"The garden\" },\n        { \"PropertyImageId\": \"1235\", \"Description\": \"View of the lobby\", \"SortOrder\": 2 }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyImageUpdate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"PropertyImage\":{ \"PropertyImageId\": \"1234\", \"Description\": \"The garden\", \"SortOrder\": 1 }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the update was succesful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"Success\": true,\n    \"RUID\": \"B4FC792C-6A40-11E8-A1C4-C85D2E42BFE4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/PropertyList",
    "title": "PropertyList",
    "name": "PropertyList",
    "version": "201804.0.1",
    "description": "<p>Users on myallocator might have more than one property attached to their username. This request lists which properties are associated with the customer and provides a property ID, needed to update the availability of this property. This request was formerly known as GetProperties (v1)</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": "Options",
            "description": "<p>Container node (Hash) containing list of options</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.ExpiresSoon",
            "description": "<p>Default: 0, If 1 the call returns properties expiring within the next week.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "PropertyList Request",
        "content": "{\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Auth/UserToken\":\"User token\",\n   \"Options\": {\n       \"ExpiresSoon\": 0\n   }\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyList -d\n    'json={\"Auth/VendorId\":\"\", \"Auth/VendorPassword\":\"\", \"Auth/UserToken\":\"\"}'",
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
            "description": "<p>The property ID which will reference the property.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>The name of this property as set by the customer.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>3-letter currency code of the default currency set by the customer according to ISO 4217. Informational.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>2-letter country code of the country the property is situated in according to ISO 3166-1 alpha-2 standard. Might be empty as it wasn't recorded for early customers. Informational.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Billing",
            "description": "<p>The property's billing status (trial, active, disabled, expires_soon).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Weekend",
            "description": "<p>Obsolete, not used. Please ignore.</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled).</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE).</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled).</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Uses default user* email if not configured.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Uses default user* email if not configured.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Uses default user* email if not configured.</p>"
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
    "url": "/PropertyUpdate",
    "title": "PropertyUpdate",
    "name": "PropertyUpdate",
    "version": "201806.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Your PropertyId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PropertyName",
            "description": "<p>Name of hotel/hostel/B&amp;B/...</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Currency",
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Timezone",
            "description": "<p>Timezone the property is located in. Check Appendix for valid values. Defaults to UTC.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Phone",
            "description": "<p>Phone numer for the property with international country code (eg. +44 350 5697864)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Fax",
            "description": "<p>Fax numer for the property with international country code (eg. +44 350 5697864)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MinLengthOfStay",
            "description": "<p>Default minimum length of stay. Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MaxLengthOfStay",
            "description": "<p>Default maximum length of stay. Defaults for 0, which means no maximum stay.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "AddressLine1",
            "description": "<p>First address line of the property (usually the street name and house number)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "AddressLine2",
            "description": "<p>Second address line of the property (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "City",
            "description": "<p>City or locality the property is located in</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PostCode",
            "description": "<p>Post Code (ZIP) of the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "State",
            "description": "<p>State of the property (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Country",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property is located in.</p>"
          },
          {
            "group": "Request",
            "type": "Decimal",
            "optional": true,
            "field": "Latitude",
            "description": "<p>Geographic latitude of the property, given as decimal degrees. Positive for north, negative for south. Example: 32.70954</p>"
          },
          {
            "group": "Request",
            "type": "Decimal",
            "optional": true,
            "field": "Longitude",
            "description": "<p>Geographic longitude of the property, given as decimal degrees. Positive for east, negative for west. Example: -117.15292</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAddressLine1",
            "description": "<p>First address line of the company or property owner (usually the street name and house number)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAddressLine2",
            "description": "<p>Second address line of the company or property owner (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCity",
            "description": "<p>City or locality the company or property owner is located in</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoicePostCode",
            "description": "<p>Post Code (ZIP) of the company or property owner</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceState",
            "description": "<p>State of the company or property owner (if applicable)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCountry",
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the the company or property owner is located in.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceCompanyName",
            "description": "<p>Name of the company owning the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceMainContactName",
            "description": "<p>Name of the main contact for the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceAccountManagerName",
            "description": "<p>Name of the account manager responsible for the property</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "InvoiceVatID",
            "description": "<p>Tax ID for the property</p>"
          },
          {
            "group": "Request",
            "type": "URL",
            "optional": true,
            "field": "Website",
            "description": "<p>Homepage of the property</p>"
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "optional": true,
            "field": "Breakfast",
            "description": "<p>Can be IN (included), EX (excluded) or empty (not applicable). Defaults to &quot;not applicable&quot;.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjust",
            "description": "<p>The state of booking auto-adjust config (0 = disabled, 1 = enabled). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjustCancellation",
            "description": "<p>The state of booking auto-adjust cancellation config (0 = HOLD, 1 = RESTORE). Defaults to 0.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingAdjustModification",
            "description": "<p>Whether to adjust for modifications (0 = disabled, 1 = enabled). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "BookingDownload",
            "description": "<p>The state of channel booking download config (0 = do not download, 1 = download). Defaults to 1.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailDefault",
            "description": "<p>The default property email address. Defaults to default user email.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailChannelBooking",
            "description": "<p>The email address used when forwarding channel booking emails. Defaults to default user email.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EmailBookNow",
            "description": "<p>The email address used when forwarding booknow booking emails. Defaults to default user email.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "PropertyId",
            "description": "<p>Property ID as passed in</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "Property",
            "description": "<p>Changes as they have been applied</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyUpdate -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"Auth/PropertyId\": 12345,\n  \"PropertyName\":\"Example Hostel\",\n  \"Currency\":\"USD\",\n  \"AddressLine1\":\"Main St\",\n  \"AddressLine2\":\"Main Building\",\n  \"City\":\"San Diego\",\n  \"PostCode\":\"92101\",\n  \"State\":\"CA\",\n  \"Country\":\"us\",\n  \"Timezone\":\"UTC\",\n  \"Phone\":\"+1 123456789\",\n  \"Fax\":\"+2 987654332\",\n  \"MinLengthOfStay\":\"2\",\n  \"MaxLengthOfStay\":\"0\",\n  \"Latitude\":\"10.123\",\n  \"Longitude\":\"55.111\",\n  \"Breakfast\":\"IN\",\n  \"Website\":\"https://myallocator.com\",\n  \"EmailDefault\":\"contact@example.com\",\n  \"EmailChannelBooking\":\"booking@example.com\",\n  \"EmailBookNow\":\"booknow@example.com\",\n  \"InvoiceAddressLine1\":\"invoice street 1\",\n  \"InvoiceAddressLine2\":\"invoice street 2\",\n  \"InvoiceCity\":\"invoice city\",\n  \"InvoicePostCode\":\"invoice zip\",\n  \"InvoiceState\":\"invoice state\",\n  \"InvoiceCountry\":\"de\",\n  \"InvoiceCompanyName\":\"invoice company name\",\n  \"InvoiceMainContactName\":\"invoice main contact name\",\n  \"InvoiceAccountManagerName\":\"invoice account manager name\",\n  \"InvoiceVatID\":\"invoice vat id\"\n  \"BookingAdjust\":\"0|1\",\n  \"BookingAdjustCancellation\":\"0|1\",\n  \"BookingAdjustModification\":\"0|1\",\n  \"BookingDownload\":\"0|1\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomAvailabilityList",
    "title": "RoomAvailabilityList",
    "name": "RoomAvailabilityList",
    "version": "201804.0.1",
    "description": "<p>This call can be used to query for all data that we hold for a specific property and date range. The date range can only be 31 days as the maximum. You can query multiple times if you need a longer date range.</p> <p>A MaxStay setting of 0 means &quot;unrestricted&quot;. The 48 and 49 in the response example below refer to the room ID as returned by RoomList.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
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
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": "StartDate",
            "description": "<p>(YYYY-MM-DD)</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "optional": false,
            "field": "EndDate",
            "description": "<p>(YYYY-MM-DD)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "RoomAvailabilityList Request",
        "content": "{\n  \"Auth/VendorId\":\"\"\n  \"Auth/VendorPassword\":\"\",\n  \"Auth/UserToken\":\"\",\n  \"Auth/PropertyId\":\"\",\n  \"StartDate\":\"2015-01-01\",\n  \"EndDate\":\"2017-01-01\",\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomAvailabilityList -d@- <<EOJSON\njson=\n{\n  \"Auth/VendorId\":\"\",\n  \"Auth/VendorPassword\":\"\",\n  \"Auth/UserToken\":\"\",\n  \"Auth/PropertyId\":\"\",\n  \"StartDate\":\"2015-01-01\",\n  \"EndDate\":\"2017-01-01\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "RoomAvailabilityList",
          "content": "{\n    \"Rooms\": [\n        {\n            \"Data\": [\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-15\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 33,\n                    \"Units\": 2\n                },\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-16\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 33,\n                    \"Units\": 2\n                }\n            ],\n            \"PropertyId\": 1234,\n            \"RatePlanId\": 0,\n            \"RoomId\": 48,\n            \"RoomName\": \"1-person private\",\n            \"isPrivate\": true\n        },\n        {\n            \"Data\": [\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-15\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 0,\n                    \"Units\": 0\n                },\n                {\n                    \"Closed\": false,\n                    \"ClosedForArrival\": false,\n                    \"ClosedForDeparture\": false,\n                    \"Date\": \"2014-03-16\",\n                    \"MaxStay\": 7,\n                    \"MinStay\": 1,\n                    \"Price\": 0,\n                    \"Units\": 0\n                }\n            ],\n            \"PropertyId\": 1,\n            \"RatePlanId\": 0,\n            \"RoomId\": 49,\n            \"RoomName\": \"5-person male shared\",\n            \"isPrivate\": false\n        }\n    ]\n}",
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
    "version": "201804.0.1",
    "description": "<p>This method allows you to create rooms on myallocator.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "ValidateOnly",
            "description": "<p>if true, the RoomCreate/RoomUpdate will not save changes, but will return errors (if any) - useful to validate user does not exceed billing requirements.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "AuthorizeBilling",
            "description": "<p>if true, the RoomCreate/RoomUpdate automatically approve any increase in billing due to changes in Room Geometry.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>How many rooms of this type there are. The Units parameter is very important because it actually limits the number of rooms that can be allocated. If you send more rooms via PMS it will save max the set Units value. If you use web interface it will not allow you to set more units as well. And the auto adjustment is working with this limit as well.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of many people that can stay in this room.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PrivateRoom",
            "description": "<p>string/scalar 'true' if it's a private room, 'false' for dormitories.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Only needed for dormitories. 'MA' for males, 'FE' for females, 'MI' if mixed.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "isDisabled",
            "description": "<p>is the room currently disabled (not being transmitted to channels)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Label",
            "description": "<p>Short string that describes the room for displaying purposes. If omitted, a label will automatically be created from the room characteristics.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Description",
            "description": "<p>Longer description of the room which describes a room to a potential guest.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "Rooms",
            "description": "<p>List of rooms created</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator\",\n    \"ValidateOnly\":false,\n    \"AuthorizeBilling\":true,\n    \"Rooms\": [\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Double Room\",\n            \"Description\": \"Double room with a view over the ocean\",\n            \"Units\":4,\n            \"Occupancy\":2,\n            \"PrivateRoom\":\"true\",\n            \"Gender\":\"MI\"\n        },\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Female dorm\",\n            \"Units\":3,\n            \"Occupancy\":6,\n            \"PrivateRoom\":\"false\",\n            \"Gender\":\"FE\"\n        }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator\",\n    \"ValidateOnly\":false,\n    \"AuthorizeBilling\":true,\n    \"Rooms\": [\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Double Room\",\n            \"Units\":4,\n            \"Occupancy\":2,\n            \"PrivateRoom\":\"true\",\n            \"Gender\":\"MI\"\n        },\n        {\n            \"PMSRoomId\":\"IdOfRoomOnPMS\",\n            \"Label\":\"Female dorm\",\n            \"Units\":3,\n            \"Occupancy\":6,\n            \"PrivateRoom\":\"false\",\n            \"Gender\":\"FE\"\n        }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
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
    "version": "201804.0.1",
    "description": "<p>This method allows you to upload room type images.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "RoomImages",
            "description": "<p>List of RoomImage objects for upload.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "RoomImage",
            "description": "<p>A single room image to be uploaded.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImage/RoomId",
            "description": "<p>Room ID of which the image will be assigned to.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImage/Filename",
            "description": "<p>Will be replaced by us with a random string, but the extension is taken from this filename</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImage/Data",
            "description": "<p>Base64 encoded raw image data</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "RoomImage/Description",
            "description": "<p>Description of the image to show on a channel (max. 2000 characters)</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "RoomImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top. Defaults to 0.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Single file upload",
        "content": "{\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/UserToken\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"RoomImage\": {\n        \"RoomId\": 5532,\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Bedroom\",\n        \"SortOrder\": 100\n    }\n}",
        "type": "json"
      },
      {
        "title": "Multiple file upload",
        "content": "{\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/UserToken\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"RoomImages\": [\n      {\n        \"RoomId\": 5532,\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Bedroom\"\n      },\n      {\n        \"RoomId\": 5535,\n        \"Filename\": \"twin-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Twin Room\",\n        \"SortOrder\": 200\n      }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomImageCreate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/UserToken\":\"\",\n    \"Auth/PropertyId\":\"\",\n    \"RoomImages\": [\n      {\n        \"RoomId\": 5532,\n        \"Filename\": \"double-room.jpg\",\n        \"Data\": \"oAAAANSUhEUgAAG2QAABPqCAYAAA[...]\",\n        \"Description\": \"The Bedroom\",\n        \"SortOrder\": 1\n      }\n    ]\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the upload was succesful</p>"
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "RoomImages",
            "description": "<p>Array containing RoomImage objects</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "RoomImage",
            "description": "<p>Object containing more details about the upload image(s)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/ImageId",
            "description": "<p>The room image ID which will reference the room image.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/RoomId",
            "description": "<p>Room that the image is stored for</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/SavedFilename",
            "description": "<p>Filename in our system</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "RoomImage/URL",
            "description": "<p>Publicly accessible URL to the full resolution image</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "RoomImage/Thumbnail",
            "description": "<p>Publicly accessible URL to the thumbnail</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "RoomImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"RUID\": \"64839402-6A41-11E8-B636-E5F0F1510551\",\n    \"Method\": \"RoomImageCreate\",\n    \"RoomImages\": [\n        {\n            \"RoomId\": 5532,\n            \"URL\": \"https://inbox.myallocator.com/n/user_image.xt?pid=1&img=64801BCE-...-E5F0F1510551.jpg\",\n            \"SavedFilename\": \"64801BCE-...-E5F0F1510551.jpg\",\n            \"ImageId\": \"41214\",\n            \"Thumbnail\": \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=1&img=64801BCE-...-E5F0F1510551.jpg\",\n            \"Description\": \"The Bedroom\",\n            \"SortOrder\": 0\n        },\n        {\n            \"RoomId\": 5535,\n            \"URL\": \"https://inbox.myallocator.com/n/user_image.xt?pid=1&img=6481C9D8-...-E5F0F1510551.jpg\",\n            \"SavedFilename\": \"6481C9D8-...-E5F0F1510551.jpg\",\n            \"ImageId\": \"41215\",\n            \"Thumbnail\": \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=1&img=6481C9D8-...-E5F0F1510551.jpg\",\n            \"Description\": \"The Twin Room\",\n            \"SortOrder\": 1\n        }\n    ],\n    \"Success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageList",
    "title": "RoomImageList",
    "name": "RoomImageList",
    "version": "201804.0.1",
    "description": "<p>Returns a list of uploaded images by room type.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomImageList -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the call was succesful (should always be true)</p>"
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "RoomImages",
            "description": "<p>Array containing RoomImage objects</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "RoomImage",
            "description": "<p>Object containing more details about the images</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/ImageId",
            "description": "<p>The image ID which will reference the room image</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/RoomId",
            "description": "<p>Room that the image is stored for</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/SavedFilename",
            "description": "<p>Filename in our system</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "RoomImage/URL",
            "description": "<p>Publicly accessible URL to the full resolution image</p>"
          },
          {
            "group": "Response",
            "type": "URL",
            "optional": false,
            "field": "RoomImage/Thumbnail",
            "description": "<p>Publicly accessible URL to the thumbnail</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "RoomImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "RoomImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"RoomImages\" : [\n        {\n            \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=64CC674C-...1DCDF6E4DDB5.jpg\",\n            \"RoomId\" : \"23651\",\n            \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=64CC674C-...-1DCDF6E4DDB5.jpg\",\n            \"ImageId\" : \"3221\",\n            \"SavedFilename\" : \"64CC674C-5AFC-11E5-8C0B-1DCDF6E4DDB5.jpg\",\n            \"Description\" : \"The bedroom\",\n            \"SortOrder\" : 400\n        },\n        {\n            \"URL\" : \"https://inbox.myallocator.com/n/user_image.xt?pid=4304&img=AF559588-...-10A36E043024.jpg\",\n            \"RoomId\" : \"22905\",\n            \"Thumbnail\" : \"https://inbox.myallocator.com/n/user_image_tb.xt?pid=4304&img=AF559588-...-10A36E043024.jpg\",\n            \"ImageId\" : \"3222\",\n            \"SavedFilename\" : \"AF559588-5B04-11E5-A038-10A36E043024.jpg\",\n            \"Description\" : \"The kitchen\",\n            \"SortOrder\" : 600\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageRemove",
    "title": "RoomImageRemove",
    "name": "RoomImageRemove",
    "version": "201804.0.1",
    "description": "<p>Remove a room type image</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "RoomImages",
            "description": "<p>List of RoomImage objects. If absent all room images are removed.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "RoomImage",
            "description": "<p>A single room image to be removed.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "RoomImage/RoomImageId",
            "description": "<p>ID of image to be removed.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "RoomImage/RoomId",
            "description": "<p>Room ID of which the image is assigned to. Not optional if RoomImageId is given.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request (remove single room image)",
          "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImage\":{ \"RoomImageId\":123, \"RoomId\":456 }\n}",
          "type": "json"
        },
        {
          "title": "Request (remove multiple room images)",
          "content": "{\n    \"Auth/UserId\":\"\",\n    \"Auth/Userassword\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImages\": [\n        { \"RoomImageId\":123, \"RoomId\":456 },\n        { \"RoomImageId\":789, \"RoomId\":234}\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Request (remove all room images)",
          "content": "{\n    \"Auth/UserId\":\"\",\n    \"Auth/Userassword\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\"\n}",
          "type": "json"
        },
        {
          "title": "Response",
          "content": "{\n    \"Method\": \"RoomImageRemove\",\n    \"Success\": true,\n    \"RUID\": \"D2CD386C-72E5-11E8-BE3D-19DB0D339365\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the removal was succesful</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomImageRemove -d@- <<EOJSON\njson={\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"RoomImage\":{ \"RoomImageId\":123, \"RoomId\":456 }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomImageUpdate",
    "title": "RoomImageUpdate",
    "name": "RoomImageUpdate",
    "version": "201804.0.1",
    "description": "<p>Update the description and/or sort order of a room image.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": true,
            "field": "RoomImages",
            "description": "<p>List of RoomImage objects.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": true,
            "field": "RoomImage",
            "description": "<p>A single room image to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImage/RoomId",
            "description": "<p>Room ID of which the image will be assigned to.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomImage/RoomImageId",
            "description": "<p>ID of image to be updated.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "RoomImage/Description",
            "description": "<p>Image description as provided by the customer</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "RoomImage/SortOrder",
            "description": "<p>Number indicating the displayed sort order. Lower numbers means further left/top. Defaults to 0.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request (update single room image)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomImage\":{ \"RoomImageId\": \"1234\", \"Description\": \"Twin room\", \"SortOrder\": 5 }\n}",
        "type": "json"
      },
      {
        "title": "Request (update multiple room images)",
        "content": "{\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomImages\": [\n        { \"RoomImageId\": \"1234\", \"Description\": \"Twin room\" },\n        { \"RoomImageId\": \"1234\", \"Description\": \"Double room with a view\", \"SortOrder\": 6 }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomImageUpdate -d@- <<EOJSON\njson={\n    \"Auth/VendorId\":\"Your Vendor ID\",\n    \"Auth/VendorPassword\":\"Your Vendor Password\",\n    \"Auth/UserToken\":\"User token\",\n    \"Auth/PropertyId\":\"Property ID on myallocator.com\",\n    \"RoomImage\":{ \"RoomImageId\": \"1234\", \"Description\": \"Twin room\", \"SortOrder\": 1 }\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>Whether the update was succesful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"Success\": true,\n    \"RUID\": \"B4FC792C-6A40-11E8-A1C4-C85D2E42BFE4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MyAllocator/API/Method/Media.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/RoomList",
    "title": "RoomList",
    "name": "RoomList",
    "version": "201804.0.1",
    "description": "<p>returns a list of configured room types for a property. Formerly GetRoomTypes (v1).</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomList -d@- <<EOJSON\njson={\n  \"Auth/UserToken\":\"User's auth token\",\n  \"Auth/PropertyId\":\"Property ID on myallocator\",\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\"\n}\nEOJSON",
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
            "description": "<p>The room type ID which will reference the room type.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>Number of rooms of this type.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Occupancy",
            "description": "<p>Number of persons that can stay in this room.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Beds",
            "description": "<p>!!Obsolete!! Replaced with Occupancy (see above).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Gender restriction for shared rooms. MA for males, FE for females, MI if mixed. Always set to 'MI' for private rooms.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "DoubleBed",
            "description": "<p>!!Obsolete!! Option removed from myallocator. Now always defaults to false.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Ensuite",
            "description": "<p>!!Obsolete!! Option removed from myallocator. Now always defaults to false;</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "PrivateRooms",
            "description": "<p>Whether this room is private or shared/dorm (\\textit{true} or \\textit{false}).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ICalLink",
            "description": "<p>Link to an ICAL file that will be created on the fly. Can be used with channels that support ICAL imports. Dates with 0 availability will have a BLOCKED event.</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Disabled",
            "description": "<p>Is the room flagged as disabled (no data will be transmitted to OTA's)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n    \"Success\": true,\n    \"RoomTypes\": [\n        {\n            \"Gender\": \"MI\",\n            \"Occupancy\": 1,\n            \"Description\": \"Longer description about the room\",\n            \"Label\": \"Short room name\",\n            \"Disabled\": \"false\",\n            \"ICalLink\": \"https://api.myallocator.com/callback/ota/air/v201804/ical?pid=1&rid=63&hash=foo12\",\n            \"Units\": 2,\n            \"RoomId\": 45844,\n            \"PrivateRoom\": \"true\",\n            \"PMSRoomId\": null\n        },\n        {\n            \"Gender\": \"MI\",\n            \"Occupancy\": 2,\n            \"Description\": \"yet another description of another room\",\n            \"Label\": \"test\",\n            \"Disabled\": \"true\",\n            \"ICalLink\": \"https://api.myallocator.com/callback/ota/air/v201804/ical?pid=1&rid=49&hash=9fe41\",\n            \"Units\": 1,\n            \"RoomId\": 45841,\n            \"PrivateRoom\": \"true\",\n            \"PMSRoomId\": null\n        },\n    ]\n}",
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
    "version": "201804.0.1",
    "description": "<p>Remove a room.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Id of room to be removed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request (Remove single room)",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\": \"\",\n    \"Room\":{ \"RoomId\":### }\n}",
        "type": "json"
      },
      {
        "title": "Request (Remove multiple rooms)",
        "content": "{\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\": \"\",\n    \"Rooms\": [\n        { \"RoomId\":## },\n        { \"RoomId\":## }\n        ]\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomRemove -d@- <<EOJSON\njson={\n    \"Auth/UserToken\":\"\",\n    \"Auth/VendorId\":\"\",\n    \"Auth/VendorPassword\":\"\",\n    \"Auth/PropertyId\": \"\",\n    \"Room\":{ \"RoomId\": 30421 }\n}\nEOJSON",
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
    "version": "201804.0.1",
    "description": "<p>Uses the same parameters (and response) as &quot;RoomCreate&quot;, with the addition of RoomId to specifiy which room to update.</p>",
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/RoomUpdate -d@- <<EOJSON\njson={\n...\n}\nEOJSON",
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
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>Password for user</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerFirstName",
            "description": "<p>Customer's first name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerLastName",
            "description": "<p>Customer's family name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Customer's email address.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SendWelcome",
            "description": "<p>1|0</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>true|false</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "UserId",
            "description": "<p>Myallocator UserId of the freshly created user</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>User token for authentication purposes</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator. Before you can use this method we'll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed.</p>",
    "examples": [
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/UserCreate -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"your vendor id\",\n  \"Auth/VendorPassword\":\"your vendor password\",\n  \"UserId\":\"Requested User ID\",\n  \"UserPassword\":\"New Customer Password\",\n  \"CustomerFirstName\":\"Customer's first name\",\n  \"CustomerLastName\":\"Customer's last name\",\n  \"CustomerEmail\":\"Customer's email address\",\n  \"SendWelcome\":\"1|0\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MyAllocator/API/Method/UserManage.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/UserExists",
    "title": "UserExists",
    "name": "UserExists",
    "version": "201804.0.1",
    "description": "<p>This method checks to see if a User or Email is already registered.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Requested Email</p>"
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
            "description": "<p>0|1</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EmailExists",
            "description": "<p>0|1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "UserExists Request",
        "content": "{\n  \"Auth/VendorId\":\"Your Vendor ID\",\n  \"Auth/VendorPassword\":\"Your Vendor Password\",\n  \"UserId\":\"requested-username\",\n  \"Email\":\"user@domain.com\"\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/UserExists -d@- <<EOJSON\njson={\n  \"Auth/VendorId\":\"Your Vendor ID\",\n  \"Auth/VendorPassword\":\"Your Vendor Password\",\n  \"UserId\":\"requested-username\",\n  \"Email\":\"user@domain.com\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MyAllocator/API/Method/UserManage.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/UserUpdate",
    "title": "UserUpdate",
    "name": "UserUpdate",
    "version": "201806.0.1",
    "description": "<p>This method allows vendors to change a myallocator user's first name, last name and general contact email address.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>User's auth token (see section <code>iii - Vendor tokens</code>)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CustomerFirstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CustomerLastName",
            "description": "<p>User's family name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "    curl https://api.myallocator.com/pms/v201804/json/UserUpdate -d@- <<EOJSON\n    json={\n      \"Auth/UserToken\"      : \"User's auth token\",\n      \"Auth/VendorId\"       : \"Your vendor id\",\n      \"Auth/VendorPassword\" : \"Your vendor password\",\n      \"CustomerFirstName\"   : \"Customer's first name\",\n      \"CustomerLastName\"    : \"Customer's last name\",\n      \"CustomerEmail\"       : \"Customer's email address\"\n    }\nEOJSON",
        "type": "json"
      }
    ],
    "filename": "perllib/MyAllocator/API/Method/UserManage.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "3_API_Methods",
    "type": "POST",
    "url": "/VendorSet",
    "title": "VendorSet",
    "name": "VendorSet",
    "version": "201804.0.1",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Callback/URL",
            "description": "<p>Vendor Callback URL</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Callback/Password",
            "description": "<p>Callback Passwords</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "Callback/NotifyBooking",
            "description": "<p>Send notifications of Bookings</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Callback/URL",
            "description": "<p>Callback URL that was set</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Callback/Password",
            "description": "<p>Callback password that was set</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "Callback/NotifyBooking",
            "description": "<p>Whether we are not sending callbacks for bookings or not.</p>"
          }
        ]
      }
    },
    "description": "<p>Use this call if you're using booking callbacks to set the callback URL and password. Most PMS systems will NOT use call on a regular basis. Note: after an update of callback properties old requests which are already in queue may continue to arrive for up to an hour.</p> <p>Set Callback/NotifyBooking to false to disable callbacks.</p>",
    "examples": [
      {
        "title": "VendorSet",
        "content": "{\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Callback/URL\":\"http://www.yourdomain.com/myallocator/callback.cgi\",\n   \"Callback/Password\":\"very secret password\",\n   \"Callback/NotifyBooking\":true\n}",
        "type": "json"
      },
      {
        "title": "curl",
        "content": "curl https://api.myallocator.com/pms/v201804/json/VendorSet -d@- <<EOJSON\njson={\n   \"Auth/VendorId\":\"Your Vendor ID\",\n   \"Auth/VendorPassword\":\"Your Vendor Password\",\n   \"Callback/URL\":\"http://www.yourdomain.com/myallocator/callback.cgi\",\n   \"Callback/Password\":\"very secret password\"\n}\nEOJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"Success\": true,\n    \"Callback/URL\": \"http://www.yourdomain.com/myallocator/callback.cgi\",\n    \"Callback/NotifyBooking\": true,\n    \"Callback/Password\": \"very secret password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "3_API_Methods"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Card Codes",
    "name": "Card_Codes",
    "version": "201804.0.1",
    "description": "<p>Check <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/card-list.md\">this document on Github</a> for the complete list of debit and credit cards.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Channel Codes",
    "name": "Channel_Codes",
    "version": "201804.0.1",
    "description": "<p>For the most up to date information please use the ChannelList API call.</p> <p>We also have prepared a <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/channel-list.md\">summary on Github</a></p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Country Codes",
    "name": "Country_Codes",
    "version": "201804.0.1",
    "description": "<p>Check <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/country-list.md\">this document on Github</a> for the complete list.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Currency Codes",
    "name": "Currency_Codes",
    "version": "201804.0.1",
    "description": "<p>Check <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/currency-list.md\">this document on Github</a> for the complete list.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "FAQ",
    "name": "FAQ",
    "version": "201804.0.1",
    "description": "<p>This section contains frequently asked questions.</p> <ul> <li><strong>How should I deal with failed channel updates?</strong> If the error is noted as non-fatal on the Error Code page then retry the update after a few minutes. Failing updates are not as rare as you would think because channels do go down and become unresponsive. Fatal errors should not be automatically retried as they need user intervention. Make sure to show the error message to the customer.</li> <li><strong>Are there any limits on how many updates can be send at once?</strong> There is (currently) no limit, but you're strongly advised to split large updates (especially full refreshes) into smaller chunks of 30-60 days. This has the advantage that you can easily re-run failed chunks and it will make debugging problems easier.</li> <li><strong>I cannot log in to myallocator with the test credentials. Why?</strong> This is to avoid the settings for the test properties from being changed. You can however just register your own test property. Should you need more than the 30-day trial period let us know and we will extend it.</li> <li><strong>Callback: how do you know which customers belong to us?</strong> The first time you send an update on behalf of a customer through our API this customer will be marked as a user of your PMS. From then on you will receive callbacks for this customer.</li> <li><strong>Callback: why do I not receive any bookings?</strong> Make sure the property is associated with your vendor account. You can check this by going to the <a href=\"https://inbox.myallocator.com/en/manage/vendors\">&quot;PMS Connections&quot; page</a> inside the myallocator website for the property in question to check that your PMS is listed. Also make sure to set your callback URL with the <em>VendorSet</em> call <strong>and</strong> set <em>Callback/NotifyBooking</em> to true.</li> <li><strong>Callback: how do I test the callback?</strong> You can use the free BookNow widget inside the myallocator website. Add availability and rates, go to MANAGE, enable BookNow and then create bookings through the preview.</li> <li><strong>Can I send updates in parallel?</strong> You can for different properties. What you should never do is send an update for a property without waiting for the previous update for this property to succeed/fail. Otherwise you can run into race-conditions where the later update succeeds before the first update, opening up availability on the channel unintentionally.</li> <li><strong>Why can there be multiple RoomTypeIds for a booking?</strong> The same channel room can be assigned to multiple myallocator rooms. For this scenario we send the sum of available rooms/beds and the highest price of any available room that is mapped to this channel room. So the list of RoomTypeIds represents all matching rooms, but it does not mean that all of them were actually booked. Check out the warning on the Automatic Adjustments developer page for more details on how to adjust for this scenario.</li> <li><strong>Do I need PCI Certification for BookingPaymentDownload?</strong> Yes. We require a PCI compliance certificate from you. Most hostel and small PMS companies (those with less than $10m year in revenue) can use a Level 3 &quot;self&quot; certification. Level 3 PCI Compliance simply requires you attest that you are following secure coding practices in your application, and server hosting environment. In most cases it will require you attain attestation from your server hosting and gateway vendors to ensure a complete web of trust. <a href=\"http://www.pcicompliance101.net/pci-dss-compliance.htm\">Click for more information</a>.</li> <li><strong>For our testing purpose, will you give us an appropriate account?</strong> You are welcome to create a trial account and use that for testing, if you would like it extended you can talk to your relationship manager. (devhelp can't give you a free account, only the relationship manager can do that)</li> <li><strong>In some Methods the <em>PropertyId</em> is required, where can we get this?</strong> It is returned when a property is created, or via: PropertyList</li> <li><strong>Some API calls found in the documentation require special vendor permissions. How may we acquiring them?</strong> Speak with your relationship manager, very few integrations need those, only very deep integrations with thousands of users. It is much better (and more common) to have your user sign up on www.myallocator.com, create property, setup channels, etc. then provide you with a username+password which you exchange for a UserToken (that doesn't expire).</li> <li><strong>What API calls should absolutely be implemented?</strong> The minimum we recommend to integrate is <em>RoomList</em>, <em>ARIUpdate</em> and <em>ARIUpdateStatus</em>. If you don't use booking callbacks (which you really should) you also need <em>BookingList</em>. <em>PropertyList</em> is highly recommended to retrieve the <em>PropertyId</em> for the properties that each user has.</li> </ul>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Global Error Codes",
    "name": "Global_Error_Codes",
    "version": "201804.0.1",
    "description": "<p>Errors are divided into three categories. A global error will have a single Errors tag with no further encapsulation and only a single Error tag.</p> <p>An API method specific error will be included in the method name. Again, there will only be a single Error tag. The third type of error is channel specific. The Errors tag is included in the method name and there may be multiple Error tags.</p> <table> <thead> <tr> <th>Code</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>2</td> <td>Missing authentication tags</td> </tr> <tr> <td>3</td> <td>Invalid user or user password</td> </tr> <tr> <td>4</td> <td>Invalid vendor or vendor password</td> </tr> <tr> <td>5</td> <td>Vendor disabled</td> </tr> <tr> <td>6</td> <td>User has no credit left</td> </tr> <tr> <td>7</td> <td>User has no permission to change availability for this property</td> </tr> <tr> <td>8</td> <td>No such API method</td> </tr> <tr> <td>9</td> <td>Unsupported channel</td> </tr> <tr> <td>10</td> <td>No channels selected</td> </tr> <tr> <td>11</td> <td>No allocations submitted</td> </tr> <tr> <td>12</td> <td>Invalid room type id (does not exist or not assigned to this property)</td> </tr> <tr> <td>13</td> <td>Missing allocation info (price, dates, units)</td> </tr> <tr> <td>14</td> <td>Internal error. Support has been notified!</td> </tr> <tr> <td>15</td> <td>Missing or wrong channel credentials on myallocator.com</td> </tr> <tr> <td>16</td> <td>End date before start date</td> </tr> <tr> <td>17</td> <td>Start date too far in the future (&gt;4 years)</td> </tr> <tr> <td>18</td> <td>Invalid property id</td> </tr> <tr> <td>19</td> <td>Vendor not enabled to use this method</td> </tr> <tr> <td>20</td> <td>Missing required fields</td> </tr> <tr> <td>21</td> <td>No applicable dates submitted</td> </tr> <tr> <td>22</td> <td>Invalid update id</td> </tr> <tr> <td>23</td> <td>Unsupported Metasearch engine</td> </tr> <tr> <td>24</td> <td>Invalid data format</td> </tr> <tr> <td>301</td> <td>Invalid characters in new username</td> </tr> <tr> <td>302</td> <td>Username exists already</td> </tr> <tr> <td>303</td> <td>Invalid values (check Breakfast, Currency, ExpiryDate)</td> </tr> <tr> <td>401</td> <td>Invalid date format</td> </tr> <tr> <td>402</td> <td>Missing or invalid search criteria</td> </tr> <tr> <td>450</td> <td>Payment password is invalid</td> </tr> <tr> <td>555</td> <td>Invalid JSON passed</td> </tr> <tr> <td>666</td> <td>Internal Processing Error</td> </tr> </tbody> </table> <p><em>Channel Specific errors and warnings</em></p> <table> <thead> <tr> <th>Code</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>202</td> <td>Channel skipped (not setup)</td> </tr> <tr> <td>203</td> <td>Channel did not respond</td> </tr> <tr> <td>204</td> <td>Channel skipped (no applicable rooms)</td> </tr> <tr> <td>205</td> <td>Incorrect room setup. The room type mapping needs to be updated on myallocator.com.</td> </tr> <tr> <td>206</td> <td>Channel only updates up to a certain period in the future. Some dates were skipped.</td> </tr> <tr> <td>207</td> <td>Skipped room type (not setup with channel)</td> </tr> <tr> <td>208</td> <td>Partial success: ...</td> </tr> <tr> <td>209</td> <td>No channels are setup, only myallocator database was updated</td> </tr> <tr> <td>99</td> <td>Check/Display ErrMsg or WarningMsg content</td> </tr> </tbody> </table>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Reporting Issues/Bugs",
    "name": "Reporting_Issues_Bugs",
    "version": "201804.0.1",
    "description": "<p>If you are having an issue with a particular API call please open a ticket by emailing devhelp@myallocator.com. Please be sure to ALWAYS include the request ID (RUID).</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Terminology",
    "name": "Terminology",
    "version": "201804.0.1",
    "description": "<table> <thead> <tr> <th>Term</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Vendor</td> <td>You as the owner and developer of the front desk software.</td> </tr> <tr> <td>User/Customer</td> <td>Someone using your product and who is also registered on myallocator.com.</td> </tr> <tr> <td>Allocation</td> <td>A number indicating how many available beds or rooms there are.</td> </tr> <tr> <td>ARI</td> <td>Availablity (Allocation) along with Rate Information</td> </tr> </tbody> </table>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Timezone Codes",
    "name": "Timezone_Codes",
    "version": "201804.0.1",
    "description": "<p>Check <a href=\"https://github.com/MyAllocator/apidocs/blob/gh-pages/timezone-list.md\">this document on Github</a> for the complete list.</p>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "group": "4_Appendix",
    "type": "",
    "url": "{}",
    "title": "Version History",
    "name": "Version_History",
    "version": "201804.0.1",
    "description": "<table> <thead> <tr> <th>Date</th> <th>Version</th> <th>Change</th> </tr> </thead> <tbody> <tr> <td>2019-03-12</td> <td>201903.0.1</td> <td>ChannelList: use boolean values for is_beta, is_live, is_calendar_based, locked_login, api_cancellation, hidden</td> </tr> <tr> <td>2018-12-31</td> <td>201812.0.1</td> <td>New API calls: TaxCreate, TaxList, TaxMeta, TaxRemove, TaxUpdate (calls not yet available)</td> </tr> <tr> <td>2018-06-07</td> <td>201806.0.1</td> <td>Renamed PropertyModify/UserModify to PropertyUpdate/UserUpdate for consistency. Old API calls will keep working.</td> </tr> <tr> <td>2018-04-02</td> <td>201804.0.1</td> <td>Success flag guaranteed to be returned in every response</td> </tr> <tr> <td>2018-03-20</td> <td>201803.0.2</td> <td>Unique request ID (RUID) included in every response</td> </tr> <tr> <td>2018-03-08</td> <td>201803.0.1</td> <td>ARI updates 4 years into the future now possible</td> </tr> <tr> <td>2018-02-12</td> <td>201802.0.1</td> <td>New API calls: MetaSearch, MetaSearchList</td> </tr> <tr> <td>2018-01-24</td> <td>201801.0.2</td> <td>Simplified token usage</td> </tr> <tr> <td>2018-01-22</td> <td>201801.0.1</td> <td>PropertyChannelList able to limit by property ID</td> </tr> <tr> <td>2017-04-12</td> <td>201710.0.1</td> <td>New API call: PropertyChannelImportARI</td> </tr> <tr> <td>2017-04-12</td> <td>201610.0.2</td> <td>ICalLink field added to call RoomList</td> </tr> <tr> <td>2016-10-09</td> <td>201610.0.1</td> <td>Changes to ARIRules</td> </tr> <tr> <td>2016-05-26</td> <td>201605.0.2</td> <td>New API call: BookingCancel</td> </tr> <tr> <td>2016-05-25</td> <td>201605.0.1</td> <td>Removed CANCEL/UNCANCEL from BookingAction, added more options to BookingList</td> </tr> <tr> <td>2016-03-15</td> <td>201603.0.1</td> <td>New API calls: RatePlanCreate, RatePlanUpdate, RatePlanRemove</td> </tr> <tr> <td>2016-02-04</td> <td>201601.0.2</td> <td>VERSIONED JSON response format PropertyChannelList to include currency (and future fields)</td> </tr> <tr> <td>2016-01-08</td> <td>201601.0.1</td> <td>Fixed documentation for ARIUpdate to include Auth/VendorId Auth/VendorPassword</td> </tr> <tr> <td>2015-10-13</td> <td>201501.0.13</td> <td>Fix BookingList ModificationEndDate so it goes until 11:59pm</td> </tr> <tr> <td>2015-10-01</td> <td>201501.0.12</td> <td>Fix various documentation issues</td> </tr> <tr> <td>2015-07-24</td> <td>201501.0.11</td> <td>added BookingPaymentPasswordValidate</td> </tr> <tr> <td>2015-07-09</td> <td>201501.0.10</td> <td>added IncludeArchived to BookingList</td> </tr> <tr> <td>2015-05-27</td> <td>201501.0.9</td> <td>new BookingList parameters ModificationStartDateTime, ModificationEndDateTime, CreationStartDateTime, CreationEndDateTime</td> </tr> <tr> <td>2015-05-18</td> <td>201501.0.8</td> <td>new BookingAction commands</td> </tr> <tr> <td>2015-03-20</td> <td>201501.0.7</td> <td>Corrected explanation of Units on RoomCreate (thanks Petr T.)</td> </tr> <tr> <td>2015-02-19</td> <td>201501.0.6</td> <td>Add Options.NormalizeToCurrency to BookingList</td> </tr> <tr> <td>2015-02-19</td> <td>201501.0.5</td> <td>Added more documentation to Booking Samples</td> </tr> <tr> <td>2015-02-03</td> <td>201501.0.4</td> <td>Added .Options.IgnoreInvalidRooms to MAAPI</td> </tr> <tr> <td>2015-02-02</td> <td>201501.0.3</td> <td>Improved documentation for multiple overlapping Allocations in ARIUpdate</td> </tr> <tr> <td>2015-01-22</td> <td>201501.0.2</td> <td>Improved documentation with Booking samples</td> </tr> <tr> <td>2015-01-09</td> <td>201501.0.1</td> <td>Initial release of 201601[beta] (new functions: ARIRules)</td> </tr> <tr> <td>2015-01-08</td> <td>201408.0.13</td> <td>Corrected validation logic issue with ARIUpdate (properly validates Rooms)</td> </tr> <tr> <td>2015-01-07</td> <td>201408.0.12</td> <td>Corrected issue with AssociateUserToPMS requiring Auth/PropertyId</td> </tr> <tr> <td>2015-01-06</td> <td>201408.0.11</td> <td>Modified FailIfUpdateActive default to &quot;false&quot;</td> </tr> <tr> <td>2015-01-05</td> <td>201408.0.10</td> <td>fixed doc, Price-Weekend is &quot;PriceWeekend&quot;</td> </tr> <tr> <td>2015-01-05</td> <td>201408.0.9</td> <td>added JSON raw input mode - application/json</td> </tr> <tr> <td>2014-12-28</td> <td>201408.0.8</td> <td>added Auth/Debug</td> </tr> <tr> <td>2014-12-28</td> <td>201408.0.7</td> <td>fixed bug in ARIUpdate where zero unit updates would not be applied</td> </tr> <tr> <td>2014-12-26</td> <td>201408.0.6</td> <td>added more documentation to ChannelList and curl example to HelloWorld</td> </tr> <tr> <td>2014-12-24</td> <td>201408.0.5</td> <td>added error logging with ticket responses</td> </tr> <tr> <td>2014-12-23</td> <td>201408.0.4</td> <td>added VendorId to various docs, and propertyid, unified error handling</td> </tr> <tr> <td>2014-12-19</td> <td>201408.0.3</td> <td>fixed bug in RoomCreate (did not return RoomId)</td> </tr> <tr> <td>2014-12-15</td> <td>201408.0.2</td> <td>renamed LoopBookingAction into BookingAction</td> </tr> <tr> <td>2014-12-04</td> <td>201408.0.1</td> <td>initial release of new API</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.2</td> <td>Updated booking information (new: CommissionIncludedInTotal).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.1</td> <td>Updated booking information and updated channel list (new: eb,air, orb, boo, tra).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6</td> <td>New feature Booking Callback and updated channel list (new: max).</td> </tr> <tr> <td>2012-09-20</td> <td>1.5.2</td> <td>Updated channel list (new: exp, ysh, eb). Get/Set property country.</td> </tr> <tr> <td>2012-07-04</td> <td>1.5.1</td> <td>Updated channel list. Added MinStay/MaxStay example.</td> </tr> <tr> <td>2011-09-17</td> <td>1.5</td> <td>New method SetRoomTypes to add/update/remove rooms.</td> </tr> <tr> <td>2011-09-17</td> <td>1.4.1</td> <td>GetBookings: Minor correction regarding the end date. It's not the departure date but rather the departure date - 1.</td> </tr> <tr> <td>2011-01-15</td> <td>1.4</td> <td>New methods SetAllocation (non-blocking), SetLogin, GetUpdateStatus, GetBookings. Support for MinStay and MaxStay.</td> </tr> <tr> <td>2010-11-09</td> <td>1.3.1</td> <td>Updated channel list. GetRoomTypes: Obsoleted &quot;Ensuite&quot;, &quot;DoubleBed&quot; and &quot;Beds&quot; (replaced by new property &quot;Occupancy&quot;). GetProperties: shows which days are configure for weekends.</td> </tr> <tr> <td>2010-05-30</td> <td>1.3</td> <td>GetRoomTypes includes a room description (Label). Removed need to list channels to update to and ability to exclude channels. Skipped channels now warnings rather than errors.</td> </tr> <tr> <td>2010-05-05</td> <td>1.2</td> <td>Added links to XML samples. New channel: hb</td> </tr> <tr> <td>2010-04-30</td> <td>1.1</td> <td>Changed Room to \\textit{RoomType} to clarify matters</td> </tr> <tr> <td>2010-04-27</td> <td>1.0</td> <td>Initial release</td> </tr> </tbody> </table>",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "4_Appendix"
  },
  {
    "examples": [
      {
        "title": "MetaSearchList",
        "content": "curl https://api.myallocator.com/pms/v201804/json/MetaSearchList -d@- <<ENDJSON\njson={\n    \"Auth/UserToken\": \"qRlscFEnhHG5OsCH/nYX1rfx+JCjIpMPDjF3XqmGV52V8/6Ec9IsX1+uzEo0+g8X\",\n    \"Auth/VendorPassword\": \"QLXAyVvfFbInVuMhNHDNhEoY\",\n    \"Auth/VendorId\": \"rtest\"\n}\nENDJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "MetaSearchList Request",
          "content": "{\n   \"MetaSearches\" : [\n      {\n         \"name\" : \"Trivago\",\n         \"id\" : \"triv\",\n         \"is_hidden\": false\n      },\n      {\n         \"name\" : \"TripAdvisor\",\n         \"id\" : \"ta\",\n         \"is_hidden\": false\n      }\n   ],\n   \"Success\" : true\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "perllib/MyAllocator/API/Method/MetaSearch.pm",
    "group": "_myallocator_perllib_MyAllocator_API_Method_MetaSearch_pm",
    "groupTitle": "_myallocator_perllib_MyAllocator_API_Method_MetaSearch_pm",
    "name": ""
  },
  {
    "description": "<p>Lists the metasearch details associated with a property.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/PropertyId",
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorId",
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Auth/VendorPassword",
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "PropertyMetaSearchList",
        "content": "curl https://api.myallocator.com/pms/v201804/json/PropertyMetaSearchList -d@- <<ENDJSON\njson={\n    \"Auth/UserToken\": \"qRlscFEnhHG5OsCH/nYX1rfx%2BJCjIpMPDjF3XqmGV52V8/6Ec9IsX1%2BuzEo0%2Bg8X\",\n    \"Auth/VendorPassword\": \"3b3fc25143604b20557737b44253febc\",\n    \"Auth/VendorId\": \"rtest\",\n    \"Auth/PropertyId\": \"7\"\n}\nENDJSON",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "PropertyMetaSearchList Request",
          "content": "{\n   \"MetaSearches\" : [\n      {\n         \"name\" : \"Trivago\",\n         \"id\" : \"triv\"\n      },\n      {\n         \"name\" : \"TripAdvisor\",\n         \"id\" : \"ta\"\n      }\n   ],\n   \"Success\" : true\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "perllib/MyAllocator/API/Method/MetaSearch.pm",
    "group": "_myallocator_perllib_MyAllocator_API_Method_MetaSearch_pm",
    "groupTitle": "_myallocator_perllib_MyAllocator_API_Method_MetaSearch_pm",
    "name": ""
  }
] });
