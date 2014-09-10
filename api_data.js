define({ api: [
  {
    "group": "@Introduction",
    "type": "",
    "url": "{}",
    "title": "Welcome",
    "description": "<p><strong> BETA NOTICE </strong> Welcome developers! This documentation references our new BETA api which will go live 9/10/2014. Please use <a href=\"http://beta.myallocator.com\">http://beta.myallocator.com</a> -- INSTEAD of <a href=\"http://api.myallocator.com\">http://api.myallocator.com</a></p><p> please note: the BETA API <em>may</em> be down for short periods of time, if you have any questions please contact devhelp@myallocator.com OR submit an issue here:  <a href=\"https://github.com/myallocator/apidocs/issues\">https://github.com/myallocator/apidocs/issues</a></p><p> <strong> Usage </strong></p><p> If you would like to use the myallocator.com PMS API you need to request a vendor ID and password by emailing devhelp@myallocator.com. The vendor_id + vendor_password will need to be submitted with every request.</p><p> Your customers need to create an account on myallocator.com before they can use the API (or you need to create one for them).  The credentials (user/password) must be stored by you and sent with each request.</p><p> <strong> The Basics </strong></p><p> There are three API methods <em>most</em> systems will use.  The first one is GetProperties, which will return with a list of properties configured on myallocator.com.  You&#39;ll need the PropertyID from GetProperties for the other two methods.</p><p> The second method is GetRoomTypes, which returns a list of rooms configured on myallocator.com.  These need to be mapped to the rooms in your software. Finally, and most importantly, SetAllocation uploads availability to the channels.  The customer is required to add all their channel credentials on myallocator.com before being able to update availability.</p><p> <strong> XML vs. JSON Requests  </strong></p><p> The service URL is <a href=\"http://api.myallocator.com/pms/v201408/(json|xml)/MethodName\">http://api.myallocator.com/pms/v201408/(json|xml)/MethodName</a>    In the URL above the Version is 201408, this version will periodically be changed as new features are added. The (json|xml) denotes the protocol (xml/json) for how requests/responses will be formatted.</p><p> MyAllocator can be accessed via REST using eithe a JSON or XML syntax. </p><ul><li>XML: Requests to our server need to be send using the POST method. The XML string should be stored in a parameter called &#39;xmlRequestString&#39;. Using standard HTML form encoding.</li><li><p>JSON offers simplified parsing and low transport overhead and is passed in the field &#39;json&#39; using standard HTML form encoding.</p><p><strong> Using an SDK </strong> Software Development Kits for several popular languages are available at <a href=\"http://github.com/myallocator\">http://github.com/myallocator</a>If you don&#39;t see your language listed please let us know and we&#39;ll add it. </p><p><strong> Following Updates </strong>We will announce major releases via github. Please &quot;watch&quot; the apidocs repo.</p></li></ul>",
    "error": {
      "examples": [
        {
          "title": "JSON error response",
          "content": "JSON error response\n{\n  \"Error\": {\n      \"Id\": 3,\n      \"Message\": \"Invalid user or user password\"\n  }\n}\n",
          "type": "json"
        },
        {
          "title": "XML error response",
          "content": "XML error response\n<MethodResponse>\n <Errors>\n  <Error>\n    <ErrorId>3</ErrorId>\n    <ErrorMsg>Invalid user or user password</ErrorMsg>\n  </Error>\n </Errors>\n</MethodResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "group": "Callbacks",
    "groupDescription": "<p>Instead of polling for new bookings every few minutes you can also use our booking callback. With this feature we will send the bookings to your server at a URL you provide to us.</p>",
    "type": "",
    "url": "{}",
    "title": "Bookings",
    "description": "<p>The codes are as follows, the message (msg) is not parsed and can be anything you like  (we still recommend something that describes the error).</p><table><thead><tr><th>Code</th><th>Cause</th></tr></thead><tbody><tr><td>10</td><td>Password wrong or not set.</td></tr><tr><td>20</td><td>Error while parsing JSON structure (including the exception message, for example position of not parsable part)</td></tr><tr><td>21</td><td>Error while parsing JSON structure (exact reason unknown)</td></tr><tr><td>22</td><td>Error while parsing JSON content</td></tr><tr><td>30</td><td>PropertyId is NULL or 0</td></tr><tr><td>31</td><td>Property not used on your PMS anymore</td></tr><tr><td>35</td><td>MyallocatorId already existing</td></tr><tr><td>50+</td><td>Internal error on your side (for debugging)</td></tr></tbody></table><p> We record every error and can give you more details if needed. The important codes are really only 10 and 31. The JSON should always be valid and the PropertyId always included.</p>",
    "examples": [
      {
        "title": "Example of a JSON booking",
        "content": "Example of a JSON booking\n{\n \"Customers\":[\n    {\n       \"CustomerLName\":\"Schmidt\",\n       \"CustomerCompany\":\"\",\n       \"CustomerNote\":\" \",\n       \"CustomerEmail\":\"mo@mx2solutions.co.uk\",\n       \"CustomerFName\":\"Mo\",\n       \"CustomerCity\":\"Stirling\",\n       \"CustomerCountry\":\"GB\"\n    }\n ],\n \"IsCancellation\":false,\n \"OrderAdults\":1,\n \"OrderChildren\":0,\n \"OrderDate\":\"2012-09-18\",\n \"OrderId\":\"13597636\",\n \"OrderModifDate\":null,\n \"OrderModifTime\":null,\n \"OrderSource\":\"booking.com\",\n \"OrderSourceId\":\"726122988\",\n \"OrderTime\":\"16:22:14\",\n \"Rooms\":[\n    {\n       \"EndDate\":\"2012-09-18\",\n       \"Currency\":\"EUR\",\n       \"RoomTypeIds\":[\n          \"832\"\n       ],\n       \"Price\":\"16.80\",\n       \"RoomDesc\":\"3 person mixed shared bed\",\n       \"Units\":\"1\",\n       \"StartDate\":\"2012-09-18\"\n    }\n ],\n \"TotalCurrency\":\"EUR\",\n \"TotalPrice\":\"16.80\",\n \"MyallocatorId\":\"5058a1bd921f120061010000\",\n \"Channel\":\"ct\",\n \"PropertyId\":264,\n \"StartDate\":\"2012-09-18\",\n \"EndDate\":\"2012-09-18\",\n \"MyallocatorCreationDate\":\"2012-09-18\",\n \"MyallocatorCreationTime\":\"17:32:16\",\n \"MyallocatorModificationDate\":\"2012-09-18\",\n \"MyallocatorModificationTime\":\"17:32:16\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example of a successful JSON response",
          "content": "Example of a successful JSON response\n",
          "type": " \"success\": true "
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example of an unsuccessful JSON response",
          "content": "Example of an unsuccessful JSON response\n{\n \"error\":{\n    \"code\":31,\n    \"msg\":\"Could not find property on this system for myallocator PropertyId: 603\"\n },\n \"success\":false\n}\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "get",
    "url": "/AssociateUserToPMS",
    "title": "AssociateUserToPMS",
    "name": "AssociateUserToPMS",
    "group": "PMS",
    "description": "<p>Creates a permanent link between an existing myallocator user and a PMS Vendor.  The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),  then in the background pass the user credentials to AssociateUserToPMS and a link will be created. Any future API calls will not require UserPassword. </p><p> NOTE: *Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p><p> NOTE: Although Auth/UserPassword is identified in this call as <em>required</em> if a prior AssociateUserToPMS call has been made then it is not actually required.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": false,
            "description": "<p>Users unique ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": false,
            "description": "<p>Users password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": true,
            "description": "<p>PropertyId (use 0 for all)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PMSUserId",
            "optional": true,
            "description": "<p>The Unique UserId on the PMS (for reference 128 character max) - will be included in callbacks</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PMSPropertyId",
            "optional": true,
            "description": "<p>The Unique UserId on the PMS (for reference 128 cahracter max) - will be included in callbacks (only stored if Auth/PropertyId was set)</p>"
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
            "field": "secret",
            "optional": false,
            "description": "<p>A 48 character shared secret reserve for future HMAC Public calls (<a href=\"http://tools.ietf.org/html/rfc2104\">http://tools.ietf.org/html/rfc2104</a>). *NOTE: It is not necessary to store this unless you actually plan to use it - because the token can be reset by simply calling AssociateUserToPMS.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociateUserToPMS",
        "content": "JSON AssociateUserToPMS\n{\n'Auth/UserId':'login on myallocator.com',\n'Auth/UserPassword':'password for myallocator.com',\n'Auth/PropertyId':0,\n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'PMSUserId':'username-on-the-remote-pms-system',\n'PMSPropertyId':'propertyid-on-the-remote-pms-system',\n}\n",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "XML AssociateUserToPMS\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomList>\n<Auth>\n <UserId>Customer User ID</UserId>\n <UserPassword>Customer Password</UserPassword>\n <PropertyId>Property ID on myallocator.com</PropertyId>\n <VendorId>Your Vendor ID</VendorId>\n <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSUserId>username-on-the-remote-pms-system</PMSUserId>\n<PMSPropertyId>propertyid-on-the-remote-pms-system</PMSPropertyId>\n</RoomList>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/BookingList",
    "title": "BookingList",
    "name": "BookingList",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ArrivalStartDate",
            "optional": true,
            "description": "<p>Query for date of arrival (first day of staying).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ArrivalEndDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CreationStartDate",
            "optional": true,
            "description": "<p>Query for date of the booking creation on myallocator.com.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ModifcationStartDate",
            "optional": true,
            "description": "<p>Query for date of the book modification on myallocator.com. A modification can occur if the booking has been cancelled.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ModifcationEndDate",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>This method allows you to query for bookings made to a specific property by booking date, modification date or arrival date.</p><p> It is important to know that not every booking that is returned through the API neccessarily resulted in an adjustment of the other channels. If the booking is not mapped to any rooms on our system, or if the channel has just been setup, the adjustment will not be carried out. The requests consists of search criteria by date. Only specify the StartDate/EndDate of one criteria. note: formerly BookingList (v1).</p><p> <strong> Data Formatting </strong> Different channels return a different amount of information about a booking, therefore many fields are optional.</p>",
    "examples": [
      {
        "title": "XML Example of querying for bookings",
        "content": "XML Example of querying for bookings\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<BookingList>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<!-- NOTE: Arrival, Creation, Modification cannot *actually* be used together -->\n<ArrivalStartDate>2010-01-01</ArrivalStartDate>\n<ArrivalEndDate>2013-01-01</ArrivalEndDate>\n<CreationStartDate>2010-01-01</CreationStartDate>\n<CreationEndDate>2013-01-01</CreationEndDate>\n<ModifcationStartDate>2010-01-01</ModifcationStartDate>\n<ModifcationEndDate>2013-01-01</ModifcationEndDate>\n</BookingList>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Querying for bookings",
          "content": "Response - Querying for bookings\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<BookingListResponse>\n<Bookings>\n  <Booking>\n    <Channel>hb</Channel>\n    <StartDate>2012-01-01</StartDate>\n    <EndDate>2012-01-03</EndDate>\n    <IsCancellation>false</IsCancellation>\n    <MyallocatorId>4d7e47e467458b927c000000</MyallocatorId>\n    <MyallocatorCreationDate>2011-03-14</MyallocatorCreationDate>\n    <MyallocatorCreationTime>16:52:52</MyallocatorCreationTime>      \n    <MyallocatorModificationDate>2011-03-14</MyallocatorModificationDate>\n    <MyallocatorModificationTime>16:52:52</MyallocatorModificationTime>\n    <OrderId>1234</OrderId>\n    <OrderDate>2011-11-11</OrderDate>      \n    <OrderTime>11:11:00</OrderTime>\n    <OrderSource>Hostelbookers.com</OrderSource>\n    <OrderAdults>2</OrderAdults>\n    <OrderChildren>2</OrderChildren>\n    <Deposit>12.00</Deposit>\n    <TotalPrice>82.00</TotalPrice>\n    <TotalCurrency>GBP</TotalCurrency>\n     <Customers>\n      <Customer>\n        <CustomerFName>John</CustomerFName>\n        <CustomerLName>Smith</CustomerLName>\n        <CustomerAddress>522 Main Rd</CustomerAddress>\n        <CustomerArrivalTime>13:00</CustomerArrivalTime>\n        <CustomerEmail>john@googlemail.com</CustomerEmail>\n        <CustomerNationality>UK</CustomerNationality>\n        <CustomerPhone>+44 1234567890</CustomerPhone>\n        <CustomerCompany>Johnston Ltd.</CustomerCompany>\n        <CustomerCity>Stirling</CustomerCity>\n        <CustomerState>Stirlingshire</CustomerState>\n        <CustomerPostCode>FK8 2HE</CustomerPostCode>\n        <CustomerCountry>UK</CustomerCountry>\n        <CustomerNote>Bringing a dog</CustomerNote>\n      </Customer>\n    </Customers>\n     <Rooms>\n      <Room>\n        <StartDate>2012-01-01</StartDate>\n        <EndDate>2012-01-03</EndDate>\n        <Price>40.00</Price>\n        <Currency>GBP</Currency>\n        <RoomTypeIds>\n          <RoomTypeId>117</RoomTypeId>\n        </RoomTypeIds>\n        <RoomDesc>2 peoples (1Double bed)</RoomDesc>\n        <Units>2</Units>\n      </Room>\n      <Room>\n        <StartDate>2012-01-02</StartDate>\n        <EndDate>2012-01-02</EndDate>\n        <Price>42.00</Price>\n        <Currency>GBP</Currency>\n        <RoomTypeIds>\n          <RoomTypeId>119</RoomTypeId>\n        </RoomTypeIds>          \n        <RoomDesc>Dormitory Room</RoomDesc>\n        <Units>4</Units>\n      </Room>\n    </Rooms>\n   </Booking>\n</Bookings>\n</BookingListResponse>\n",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "Channel",
            "optional": false,
            "description": "<p>2-3 letter channel code</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "StartDate",
            "optional": false,
            "description": "<p>Date of arrival (YYYY-MM-DD)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "EndDate",
            "optional": false,
            "description": "<p>Date before day of departure (YYYY-MM-DD)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "IsCancellation",
            "optional": false,
            "description": "<p>\\textit{true} or \\textit{false}</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "MyallocatorId",
            "optional": false,
            "description": "<p>Booking ID on myallocator.com (hexadecimal number)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "MyallocatorCreationDate",
            "optional": false,
            "description": "<p>Date of booking creation on myallocator.com</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "MyallocatorCreationTime",
            "optional": false,
            "description": "<p>Time of booking creation on myallocator.com</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "MyallocatorModificationDate",
            "optional": false,
            "description": "<p>Date of booking modification on myallocator (in case of a cancellation the modification date is different from the creation date)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "MyallocatorModificationTime",
            "optional": false,
            "description": "<p>Time of booking modification on myallocator.com</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderId",
            "optional": false,
            "description": "<p>Booking ID on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Rooms/Room",
            "optional": false,
            "description": "<p>List of booked room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "RoomTypeId",
            "optional": false,
            "description": "<p>&amp; List of booked myallocator.com room IDs. Several channel room can mapped to one myallocator.com room. If \\textit{-1} it means that we couldn&#39;t match the channel room to one of our rooms.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Units",
            "optional": false,
            "description": "<p>Number of booked rooms (for private rooms) or beds (for shared rooms</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderSource",
            "optional": false,
            "description": "<p>Which website the booking originates from</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderDate",
            "optional": false,
            "description": "<p>The date the booking has been created on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderTime",
            "optional": false,
            "description": "<p>The time the booking has been created on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderAdults",
            "optional": false,
            "description": "<p>Number of adults</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OrderChildren",
            "optional": false,
            "description": "<p>Number of children</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Deposit",
            "optional": false,
            "description": "<p>Amount of money already taken as a deposit</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "DepositCurrency",
            "optional": false,
            "description": "<p>Currency of deposit</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Commission",
            "optional": false,
            "description": "<p>Fee taken by the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CommissionCurrency",
            "optional": false,
            "description": "<p>Currency of fee taken by the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CommissionIncludedInTotal",
            "optional": false,
            "description": "<p>Whether the commission is included in the TotalPrice. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "TotalPrice",
            "optional": false,
            "description": "<p>Total cost of booking</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "TotalCurrency",
            "optional": false,
            "description": "<p>Currency for total cost of booking</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Customers/Customer",
            "optional": false,
            "description": "<p>Customer details (can be more than one)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerFName",
            "optional": false,
            "description": "<p>First name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerLName",
            "optional": false,
            "description": "<p>Family name (or if CustomerFName is empty, both first and last name)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerEmail",
            "optional": false,
            "description": "<p>Email address</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerGender",
            "optional": false,
            "description": "<p>Gender</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerSmoker",
            "optional": false,
            "description": "<p>Whether customer is a smoker. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerPhone",
            "optional": false,
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerPhoneMobile",
            "optional": false,
            "description": "<p>Mobile phone number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerFax",
            "optional": false,
            "description": "<p>Fax number</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerAddress",
            "optional": false,
            "description": "<p>Address</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerCompany",
            "optional": false,
            "description": "<p>Company name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerCompanyDepartment",
            "optional": false,
            "description": "<p>Company deparment name</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerCity",
            "optional": false,
            "description": "<p>City</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerState",
            "optional": false,
            "description": "<p>State</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerPostCode",
            "optional": false,
            "description": "<p>Post code</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerCountry",
            "optional": false,
            "description": "<p>Address country name (not neccessarily a 2/3-letter code).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerNationality",
            "optional": false,
            "description": "<p>Nationality (not neccessarily a 3-letter code)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerArrivalTime",
            "optional": false,
            "description": "<p>Time of arrival</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CustomerNote",
            "optional": false,
            "description": "<p>Note to the property owner</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Price",
            "optional": false,
            "description": "<p>Price for this room and stay</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Currency",
            "optional": false,
            "description": "<p>Currency for the price</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "RoomDesc",
            "optional": false,
            "description": "<p>Room description on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "RateDesc",
            "optional": false,
            "description": "<p>Rate description on the channel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Occupancy",
            "optional": false,
            "description": "<p>Number of persons this room is booked for</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OccupantFName",
            "optional": false,
            "description": "<p>First name of occupant of this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OccupantLName",
            "optional": false,
            "description": "<p>Family name of occupant of this room (or if OccupantFName is empty, both first and last name)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OccupantSmoker",
            "optional": false,
            "description": "<p>whether occupant is a smoker. Can be \\textit{true} or \\textit{false}.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "OccupantNote",
            "optional": false,
            "description": "<p>Note to the property owner</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Adults",
            "optional": false,
            "description": "<p>Number of adults staying in this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Children",
            "optional": false,
            "description": "<p>Number of children staying in this room</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Breakfast",
            "optional": false,
            "description": "<p>Wheter breakfast was ordered alogn with the booking. Can be \\textit{true} or \\textit{false}.\\</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/ChannelList",
    "title": "ChannelList",
    "name": "ChannelList",
    "group": "PMS",
    "description": "<p>Use this to get a list of available channels.</p>",
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "Channels",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML ChannelList Request",
        "content": "XML ChannelList Request\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ChannelList>\n</ChannelList>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/ChannelMappingList",
    "title": "ChannelMappingList",
    "name": "ChannelMappingList",
    "group": "PMS",
    "description": "<p>Lists the channel details associated with a property. Formerly (v1) GetProperties</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML ChannelMappingList",
        "content": "XML ChannelMappingList\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<ChannelMappingList>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n</ChannelMappingList>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/GetPaymentsForBooking",
    "title": "GetPaymentsForBooking",
    "name": "GetPaymentsForBooking",
    "group": "PMS",
    "description": "<p>This call can be used to retrieve credit card details from specific bookings. This applies only to channels that currently send us the credit card details (booking.com, Expedia, BookNow) and only for bookings that were created after connection with myallocator has been made.</p><p> This API call is not enabled for vendors by default. You need to send us your PCI compliance certification before this can be done. It&#39;s also neccessary to send along the credit card viewing password (different from the user login). For best practise do not store this password in your system but rather get it from the customer and send it on directly. This way the password will only be in the memory and not as accessible.</p><p> The credit card viewing password needs to be changed ever 365 by the property. It can happen that the property has reset their password in which case our support team needs to reencrypt the existing details. This is not an automatic process and can take between 1 and 3 business days.</p><p> Applicable error codes are 26 - 30. Even though logically this would be a GET call, we use POST for this one to prevent the password from going to the webserver log files.</p><p> Bookings can have multiple credit card details stored within them, as they have been updated by the guest. The response will list credit card details with the most recent credit card first.</p><p> <strong> Compatibility </strong> <a href=\"https://myallocator.com/en/api/cc\">https://myallocator.com/en/api/cc</a></p><p> PropertyId, MyallocatorId, CreditCardPassword</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CreditCardPassword",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "BookingId",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON GetPaymentsForBooking",
          "content": "JSON GetPaymentsForBooking\n  {\n      \"CreditCards\": [\n          {\n              \"CardType\": \"VI\",\n              \"CardNumber\": \"4111111111111111\",\n              \"CardCVV\": \"123\",\n              \"CardExpiryYear\": \"2018\",\n              \"CardExpiryMonth\": \"11\",\n              \"CardHolderName\": \"Martin Seamus McFly\"\n          },\n          {\n              \"CardType\": \"VI\",\n              \"CardNumber\": \"4123123412341234\",\n              \"CardCVV\": \"234\",\n              \"CardExpiryYear\": \"2013\",\n              \"CardExpiryMonth\": \"12\",\n              \"CardHolderName\": \"Emmett Lathrop Brown\"\n          }\n      ]\n  }\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/GetUpdateStatus",
    "title": "GetUpdateStatus",
    "name": "GetUpdateStatus",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "description": "<p>Use this GetUpdateStatus to query for the status of a SetAllocation update. It will list the results by channel. Big updates are split into several parts which is reflected in the Parts and ActivePart parameter.</p>",
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "Parts",
            "optional": false,
            "description": "<p>A big update can be split into smaller parts. This can be used as a progress indicator. 0 parts mean that the update is completed (or aborted due to an error).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "ActivePart",
            "optional": false,
            "description": "<p>The current part number being submitted to the channel.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML GetUpdateStatus Request",
        "content": "XML GetUpdateStatus Request\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<GetUpdateStatus>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<UpdateId>832522158</UpdateId>\n</GetUpdateStatus>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/HelloWorld",
    "title": "HelloWorld",
    "name": "HelloWorld",
    "group": "PMS",
    "description": "<table><thead><tr><th>Call</th><th>Notes + Authentication Requirements</th></tr></thead><tbody><tr><td>Hello</td><td>No Authentication Required</td></tr><tr><td>HelloVendor</td><td>Requires <em>VALID</em> Vendor Credentials</td></tr><tr><td>HelloUser</td><td>Requires <em>VALID</em> User Credentials</td></tr><tr><td>HelloUserVendor</td><td>Requires <em>VALID</em> User <em>AND</em> Vendor Credentials</td></tr></tbody></table><p> This method is diagnostic in nature, it is intended to provide a simple echo/response &quot;My First API call&quot;, <em>IT HAS NO PURPOSE</em> besides simply returning whatever parameters you send it (no authentication required).</p>",
    "examples": [
      {
        "title": "XML Hello Request",
        "content": "XML Hello Request\nGET /pms/v201408/xml/Hello\nHTTP/1.1 200 OK\nContent-Type: text/xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Hello>\n<hello>world</hello>\n</Hello>\n",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "JSON Hello Request\nGET /pms/v201408/json/Hello\nContent-Type: application/json\n",
        "type": " 'hello':'world' "
      },
      {
        "title": "JSON HelloVendor Request",
        "content": "JSON HelloVendor Request\nGET /pms/v201408/json/HelloVendor\nContent-Type: application/json\n{ \n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'hello':'world' \n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/PropertyList",
    "title": "PropertyList",
    "name": "PropertyList",
    "group": "PMS",
    "description": "<p>Users on myallocator.com might have more than one property attached to their username. This request lists which properties are associated with the customer and provides a property ID, needed to update the availability of this property.This request was formerly known as GetProperties (v1)</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML PropertyList Request",
        "content": "XML PropertyList Request\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyList>\n<Auth>\n<UserId>Customer User ID</UserId>\n<UserPassword>Customer Password</UserPassword>\n<VendorId>Your Vendor ID</VendorId>\n<VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n</PropertyList>\n",
        "type": "json"
      },
      {
        "title": "JSON PropertyList Request",
        "content": "JSON PropertyList Request\n{}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "Id",
            "optional": false,
            "description": "<p>The property ID which will reference the property.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Name",
            "optional": false,
            "description": "<p>The name of this property as set by the customer.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Breakfast",
            "optional": false,
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Currency",
            "optional": false,
            "description": "<p>3-letter currency code of the default currency set by the customer according to ISO 4217. Informational.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "<p>2-letter country code of the country the property is situated in according to ISO 3166-1 alpha-2 standard. Might be empty as it wasn&#39;t recorded for early customers. Informational.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "PaidUntil",
            "optional": false,
            "description": "<p>Usage of myallocator.com paid for until this date. Informational. Format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Weekend",
            "optional": false,
            "description": "<p>Day &amp; Shows which days are marked as weekend days by the customer on Myallocator. Monday = 1, Sunday = 7. The name of the weekday is also given in the \\textit{name} property. See SetAllocation for information on when this is used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "XML PropertyList Response Success",
          "content": "XML PropertyList Response Success\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyListResponse>\n<Properties>\n  <Property>\n    <Id>19</Id>\n    <Name>Property 1</Name>\n    <Breakfast></Breakfast>\n    <Currency>GBP</Currency>\n    <Country>GB</Country>\n    <PaidUntil>2011-11-11</PaidUntil>\n    <Weekend>\n      <Day name=\"Friday\">5</Day>\n      <Day name=\"Saturday\">6</Day>\n    </Weekend>\n  </Property>\n  \n  <Property>\n    <Id>13</Id>\n    <Name>Property 2</Name>\n    <Breakfast>IN</Breakfast>\n    <Currency>EUR</Currency>\n    <Country>DE</Country>\n    <PaidUntil>2011-11-11</PaidUntil>\n    <Weekend>\n    </Weekend>\n  </Property>\n  \n  <Property>\n    <Id>15</Id>\n    <Name>Property 3</Name>\n    <Breakfast>EX</Breakfast>\n    <Currency>GBP</Currency>\n    <Country>GB</Country>\n    <PaidUntil>2011-11-11</PaidUntil>\n    <Weekend>\n      <Day name=\"Friday\">5</Day>\n      <Day name=\"Saturday\">6</Day>\n      <Day name=\"Sunday\">7</Day>\n    </Weekend>\n  </Property>\n</Properties>\n</PropertyListResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/RoomAvailabilityList",
    "title": "RoomAvailabilityList",
    "name": "RoomAvailabilityList",
    "group": "PMS",
    "description": "<p>This call can be used to query for all data that we hold for a specific property and date range.  The date range can only be 31 days as the maximum. You can query multiple times if you need a longer date range.</p><p> A MaxStay setting of 0 means &quot;unrestricted&quot;.  The 48 and 49 in the response example below refer to the room ID as returned by GetRooms (XML API).</p><p> <strong> Compatibility: </strong>  this was formerly available at: <a href=\"https://myallocator.com/en/api/data\">https://myallocator.com/en/api/data</a></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "field": "StartDate",
            "optional": false,
            "description": "<p>(YYYY-MM-DD)</p>"
          },
          {
            "group": "Request",
            "type": "Date",
            "field": "EndDate",
            "optional": false,
            "description": "<p>(YYYY-MM-DD)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON RoomAvailabilityList",
          "content": "JSON RoomAvailabilityList\n  {\n  \"Rooms\": [\n        {\n   \t  \"RoomId\": 48,\n        \"PropertyId\": 1234,\n        \"RoomName\": \"1-person private\",\n        \"Data\": [\n          {\n            \"Date\": \"2014-03-15\",\n            \"Units\": 2,\n            \"Price\": 33,\n            \"MinStay\": 1,\n            \"MaxStay\": 7,\n            \"Closed\": false,\n            \"ClosedForArrival\": false,\n            \"ClosedForDeparture\": false\n          },\n          {\n            \"Date\": \"2014-03-16\",\n            \"Units\": 2,\n            \"Price\": 33,\n            \"MinStay\": 1,\n            \"MaxStay\": 7,\n            \"Closed\": false,\n            \"ClosedForArrival\": false,\n            \"ClosedForDeparture\": false\n          }\n        ]\n      },\n      {\n        \"RoomId\": 49,\n        \"PropertyId\": 1,\n        \"RoomName\": \"5-person male shared\",\n        \"Data\": [\n          {\n            \"Date\": \"2014-03-15\",\n            \"Units\": 0,\n            \"Price\": 0,\n            \"MinStay\": 1,\n            \"MaxStay\": 7,\n            \"Closed\": false,\n            \"ClosedForArrival\": false,\n            \"ClosedForDeparture\": false\n          },\n          {\n            \"Date\": \"2014-03-16\",\n            \"Units\": 0,\n            \"Price\": 0,\n            \"MinStay\": 1,\n            \"MaxStay\": 7,\n            \"Closed\": false,\n            \"ClosedForArrival\": false,\n            \"ClosedForDeparture\": false\n          }\n        ]\n      }\n    }\n  }\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/RoomList",
    "title": "RoomList",
    "name": "RoomList",
    "group": "PMS",
    "description": "<p>returns a list of configured room types for a property. Formerly GetRoomTypes (v1).</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML RoomList Request",
        "content": "XML RoomList Request\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomList>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n</RoomList>\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "XML": [
          {
            "group": "XML",
            "type": "String",
            "field": "Id",
            "optional": false,
            "description": "<p>The room type ID which will reference the room type.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Units",
            "optional": false,
            "description": "<p>Number of rooms of this type.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Occupancy",
            "optional": false,
            "description": "<p>Number of persons that can stay in this room.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Beds",
            "optional": false,
            "description": "<p>!!Obsolete!! Replaced with Occupancy (see above).</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Gender",
            "optional": false,
            "description": "<p>Gender restriction for shared rooms. MA for males, FE for females, MI if mixed. Always set to &#39;MI&#39; for private rooms.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "DoubleBed",
            "optional": false,
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Ensuite",
            "optional": false,
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false;</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "PrivateRooms",
            "optional": false,
            "description": "<p>Whether this room is private or shared/dorm (\\textit{true} or \\textit{false}).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "XML RoomList Success Response:",
          "content": "XML RoomList Success Response:\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomListResponse>\n<RoomTypes>\n  <RoomType>\n    <Id>59</Id>\n    <Label>1-bed private ensuite</Label>\n    <Units>3</Units>\n    <Occupancy>1</Occupancy>\n    <Beds>1</Beds>\n    <Gender>MI</Gender>\n    <DoubleBed>false</DoubleBed>\n    <Ensuite>false</Ensuite>\n    <PrivateRoom>true</PrivateRoom>      \n  </RoomType>\n  \n  <RoomType>\n    <Id>63</Id>\n    <Label>2-bed private</Label>\n    <Units>4</Units>\n    <Occupancy>2</Occupancy>\n    <Beds>2</Beds>\n    <Gender>MI</Gender>\n    <DoubleBed>false</DoubleBed>\n    <Ensuite>false</Ensuite>\n    <PrivateRoom>true</PrivateRoom>    \n  </RoomType>\n  \n  <RoomType>\n    <Id>49</Id>\n    <Label>5-bed female shared</Label>\n    <Units>3</Units>\n    <Occupancy>5</Occupancy>\n    <Beds>5</Beds>\n    <Gender>FE</Gender>\n    <DoubleBed>false</DoubleBed>\n    <Ensuite>false</Ensuite>\n    <PrivateRoom>false</PrivateRoom>\n  </RoomType>\n</RoomTypes>\n</RoomListResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/SetAllocation",
    "title": "SetAllocation",
    "name": "SetAllocation",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Channels/Channel",
            "optional": false,
            "description": "<p>A list of channels that the customer wants to update. See below for channel codes.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Allocations/Allocation",
            "optional": false,
            "description": "<p>Individual allocations. There can be as many as you like, but a the date ranges should never overlap (within one room id).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "RoomTypeId",
            "optional": false,
            "description": "<p>Room type id as returned by RoomList.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "StartDate/EndDate",
            "optional": false,
            "description": "<p>Format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Units",
            "optional": false,
            "description": "<p>How many beds or rooms should be available on this day. Whether it&#39;s beds or rooms depends on whether the room is a dorm or a private room. To remove allocation set Units to 0.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MinStay",
            "optional": false,
            "description": "<p>Specify the minumum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MaxStay",
            "optional": false,
            "description": "<p>Specify the maximum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Prices/Price",
            "optional": false,
            "description": "<p>Price per person for shared/dorm rooms or per room for private rooms. You can submit two Price tags. The default one and one with the attribute \\textit{weekend=&quot;true&quot;}. If a Price tag with this attribute has been submitted the rate only applies to weekdays set by the customer as weekends (see PropertyList for which days are set as weekend days).</p>"
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
            "field": "Success",
            "optional": false,
            "description": "<p>Can be \\textit{true} (all channel updates succeeded), \\textit{partial} (not all channels succeeded) or \\textit{false} (all channel updates failed).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Errors/Error",
            "optional": false,
            "description": "<p>Check with the list of errors below. Might contain the attribute \\textit{channel=&quot;..&quot;} to indicate whether the error only applies to a specific channel.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "Warnings/Warning",
            "optional": false,
            "description": "<p>Check with the list of errors below. Might contain the attribute \\textit{channel=&quot;..&quot;} to indicate whether the warning only applies to a specific channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "XML SetAllocation Response (Full Success)",
          "content": "XML SetAllocation Response (Full Success)\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Success>true</Success>\n<Errors></Errors>\n<Warnings>\n  <Warning channel=\"hc\">\n    <WarningId>207</WarningId>\n    <WarningMsg>\n    \tSkipped room type (not setup with channel).\n    </WarningMsg>\n  </Warning>  \n</Warnings>\n</SetAllocationResponse>\n",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Warning Response (at least one channel succeeded)",
          "content": "XML SetAllocation Warning Response (at least one channel succeeded)\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Success>partial</Success>\n<Errors>\n  <Error channel=\"adv\">\n    <ErrorId>15</ErrorId>\n    <ErrorMsg>\n      Missing or wrong channel credentials on myallocator.com\n    </ErrorMsg>\n  </Error>\n</Errors>\n<Warnings></Warnings>\n</SetAllocationResponse>\n",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Failed Response (all channels came back with errors)",
          "content": "XML SetAllocation Failed Response (all channels came back with errors)\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Success>false</Success>\n<Errors>\n  <Error channel=\"adv\">\n    <ErrorId>15</ErrorId>\n    <ErrorMsg>\n    \tMissing or wrong channel credentials on myallocator.com\n    </ErrorMsg>      \n  </Error>\n</Errors>\n<Warnings></Warnings>\n</SetAllocationResponse>\n",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Failed update (error before submitting to any channel)",
          "content": "XML SetAllocation Failed update (error before submitting to any channel)\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Success>false</Success>\n<Errors>\n  <Error\">\n    <ErrorId>17</ErrorId>\n    <ErrorMsg>\n    \tStart date too far in the future (>2 years)\n    </ErrorMsg>      \n  </Error>\n</Errors>\n<Warnings></Warnings>\n</SetAllocationResponse>\n",
          "type": "json"
        },
        {
          "title": "XML SetAllocation QueryForStatus=true",
          "content": "XML SetAllocation QueryForStatus=true\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Success>true</Success>\n<Errors></Errors>\n<Warnings></Warnings>\n<UpdateId>832522158</UpdateId>\n</SetAllocationResponse>\n",
          "type": "json"
        }
      ]
    },
    "description": "<p>An allocation sets the number of rooms or beds (depending on whether the room type is a private room or shared/dorm) available during any specific time frame. For more details see below.</p><p> <strong> Handling Errors &amp; Warnings </strong></p><p> The response will always include the Success, Errors and Warnings tags. If Success is set to &quot;true&quot; the Errors tag will be empty. If Success is set to &quot;partial&quot; or &quot;false&quot; at least one Error tag is included.</p><p> <strong> Submitting to ALL channels </strong></p><p> You can also submit to all available channels without specifying explicity which channels to update. Use the channel code &quot;all&quot; to do this. Channels that are not  set up by the user will be skipped as indicated by a warning. </p><p> It is also possible to submit to all channels while excluding certain channels. Add the attribute exclude=&quot;true&quot; to skip a channel. See example below. Use the channel code &quot;all&quot; to do this.</p><p> <strong> Running Jobs in the Background (GetUpdateStatus) </strong></p><p> You can also run the SetAllocation update in the background and query for the updates using GetUpdateStatus. This enables you to show the update progress to the user while it&#39;s still running. To enable this feature you need to add the node QueryForStatus (see example)</p><p> If QueryForStatus is true then the SetAllocationResponse will contain the additional parameter UpdateId, which is needed for GetUpdateStatus</p>",
    "examples": [
      {
        "title": "XML SetAllocationRequest",
        "content": "XML SetAllocationRequest\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<Channels>\n  <Channel>hc</Channel>\n  <Channel>iwb</Channel>\n</Channels>\n<Allocations>\n  <Allocation>\n    <RoomTypeId>59</RoomTypeId>\n    <StartDate>2010-06-01</StartDate>\n    <EndDate>2010-08-12</EndDate>\n    <Units>3</Units>\n    <MinStay>1</MinStay>\n    <MaxStay>30</MaxStay>\n    <Prices>\n      <Price>20.00</Price>\n      <Price weekend=\"true\">25.00</Price>\n    </Prices>\n  </Allocation>\n</Allocations>\n</SetAllocation>\n",
        "type": "json"
      },
      {
        "title": "XML Request (Status Check)",
        "content": "XML Request (Status Check)\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n<Auth>\n  ...\n</Auth>\n<Options>\n  <QueryForStatus>true</QueryForStatus>\n</Options>\n...\n</SetAllocation>\n",
        "type": "json"
      },
      {
        "title": "XML SetAllocation (Submit to all channels excluding Gomio and Hostelsclub)",
        "content": "XML SetAllocation (Submit to all channels excluding Gomio and Hostelsclub)\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<Channels>\n  <Channel>all</Channel>\n  <Channel exclude=\"true\">gom</Channel>\n  <Channel exclude=\"true\">hc</Channel>\n</Channels>\n<Allocations>\n  ...\n</Allocations>\n</SetAllocation>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/SetRoomTypes",
    "title": "SetRoomTypes",
    "name": "SetRoomTypes",
    "group": "PMS",
    "description": "<p>This method allows you to create, update or remove rooms on myallocator.com.Please note that you can only send a single CreateRoomsOR UpdateRooms OR RemoveRooms.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Label",
            "optional": false,
            "description": "<p>String that describes the room, usually provided by the customer. If omitted, a label will automatically be created from the other properties. (optional)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Units",
            "optional": false,
            "description": "<p>How many rooms of this type there are. This option doesn&#39;t actually limit how many rooms can be set as available, it&#39;s only informational.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Occupancy",
            "optional": false,
            "description": "<p>Number of many people that can stay in this room.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PrivateRoom",
            "optional": false,
            "description": "<p>\\textit{true} if it&#39;s a private room, \\textit{false} for dormitories.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Gender",
            "optional": false,
            "description": "<p>Only needed for dormitories. \\textit{MA} for males, \\textit{FE} for females, \\textit{MI} if mixed.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "RoomTypeIdId",
            "optional": false,
            "description": "<p>of room to be removed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request:",
        "content": "XML Request:\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SetRoomTypes>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<CreateRooms>\n\t<RoomTypes>\n    <RoomType>\n      <Label>2-bed private with sea-view</Label>\n      <Units>4</Units>\n      <Occupancy>2</Occupancy>\n      <PrivateRoom>true</PrivateRoom>    \n    </RoomType>\n    <RoomType>\n      <Label>6-bed female dorm</Label>\n      <Units>3</Units>\n      <Occupancy>6</Occupancy>\n      <Gender>FE</Gender>\n      <PrivateRoom>false</PrivateRoom>    \n    </RoomType>\n  </RoomTypes>\n</CreateRooms>\n</SetRoomTypes>\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "XML": [
          {
            "group": "XML",
            "type": "String",
            "field": "Id",
            "optional": false,
            "description": "<p>The room type ID which will reference the room type.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Units",
            "optional": false,
            "description": "<p>Number of rooms of this type.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Occupancy",
            "optional": false,
            "description": "<p>Number of persons that can stay in this room.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Beds",
            "optional": false,
            "description": "<p>!!Obsolete!! Replaced with Occupancy (see above).</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Gender",
            "optional": false,
            "description": "<p>Gender restriction for shared rooms. MA for males, FE for females, MI if mixed. Always set to &#39;MI&#39; for private rooms.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "DoubleBed",
            "optional": false,
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false.</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "Ensuite",
            "optional": false,
            "description": "<p>!!Obsolete!! Option removed from Myallocator. Now always defaults to false;</p>"
          },
          {
            "group": "XML",
            "type": "String",
            "field": "PrivateRooms",
            "optional": false,
            "description": "<p>Whether this room is private or shared/dorm (\\textit{true} or \\textit{false}).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response (creating a room):",
          "content": "XML Response (creating a room):\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetRoomTypesResponse>\n<Success>true</Success>\n<RoomTypeIds>\n\t<RoomTypeId>35</RoomTypeId>\n\t<RoomTypeId>36</RoomTypeId>\n</RoomTypeIds>\n</SetRoomTypesResponse>\n",
          "type": "json"
        },
        {
          "title": "XML Response (success SetRooms response)",
          "content": "XML Response (success SetRooms response)\n<SetRoomTypesResponse>\n<Success>true</Succes s>\n<RoomTypeIds>\n\t<RoomTypeId>35</RoomTypeId>\n\t<RoomTypeId>36</RoomTypeId>\n</RoomTypeIds>\n</SetRoomTypesResponse>\n",
          "type": "json"
        },
        {
          "title": "XML Request (Removing a room)",
          "content": "XML Request (Removing a room)\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SetRoomTypes>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<RemoveRooms>\n  <RoomTypeIds>\n    <RoomTypeId>35</RoomTypeId>\n    <RoomTypeId>36</RoomTypeId>\n  </RoomTypeIds>\n</RemoveRooms>\n</SetRoomTypes>\n",
          "type": "json"
        },
        {
          "title": "XML Response SetRooms (Success)",
          "content": "XML Response SetRooms (Success)\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetRoomTypesResponse>\n<Success>true</Success>\n</SetRoomTypesResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/UserLogin",
    "title": "UserLogin",
    "name": "UserLogin",
    "group": "PMS",
    "description": "<p><strong> EXPERIMENTAL </strong></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": false,
            "description": "<p>Users unique ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": false,
            "description": "<p>Users password</p>"
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
            "field": "session",
            "optional": false,
            "description": "<p>a session token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML UserLogin Request",
        "content": "XML UserLogin Request\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserLogin>\n<Auth>\n <UserId>Customer User ID</UserId>\n <UserPassword>Customer Password</UserPassword>\n</Auth>\n</UserLogin>\n",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "JSON Hello Request\nContent-Type: application/json\n{ \n'Auth/UserId':'your username',\n'Auth/UserPassword':'your password'\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/UserPasswordRecover",
    "title": "UserPasswordRecover",
    "name": "UserPasswordRecover",
    "group": "PMS",
    "description": "<p><strong> EXPERIMENTAL </strong></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": false,
            "description": "<p>Users unique ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": false,
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML UserPasswordRecover Request",
        "content": "XML UserPasswordRecover Request\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserPasswordRecover>\n<Auth>\n <UserId>Customer User ID</UserId>\n <UserPassword>Customer Password</UserPassword>\n</Auth>\n</UserPasswordRecover>\n",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "JSON Hello Request\nContent-Type: application/json\n{ \n'Auth/UserId':'your username',\n'Auth/UserPassword':'your password'\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorPropertyCreate",
    "title": "VendorPropertyCreate",
    "name": "VendorPropertyCreate",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/PropertyId",
            "optional": false,
            "description": "<p>Property ID on myallocator.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PropertyName",
            "optional": false,
            "description": "<p>Name of hotel/hostel/B\\&amp;B/...</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ExpiryDate",
            "optional": false,
            "description": "<p>Day on which the login to myallocator.com expires. No availability update (even through the API) can be made after this date. Format: YYYY-MM-DD. \\</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Currency",
            "optional": false,
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property located in.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Breakfast",
            "optional": false,
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com.Before you can use this method we&#39;ll have to explicitly enable you forthis functionality, as some aspects with regards to customer payment will needto be discussed.    previously known as SetLogin/CreateLogin</p>",
    "examples": [
      {
        "title": "XML Request - Creating a NEW property (and attaching it to a user account)",
        "content": "XML Request - Creating a NEW property (and attaching it to a user account)\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<VendorPropertyCreate>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<UserId>UserId</UserId>\n<PropertyName>Name of property</PropertyName>\n<ExpiryDate>2012-05-05</ExpiryDate>\n<Currency>EUR</Currency>\n<Country>DE</Country>\n<Breakfast>IN</Breakfast>\n</VendorPropertyCreate>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "Response - Updating a login and property\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserPropertyResponse> \n<Success>true</Success>\n<PropertyId>1234</PropertyId>\n</UserPropertyResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorPropertyModify",
    "title": "VendorPropertyModify",
    "name": "VendorPropertyModify",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PropertyId",
            "optional": false,
            "description": "<p>Requested PropertyId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PropertyName",
            "optional": false,
            "description": "<p>Name of hotel/hostel/B\\&amp;B/...</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ExpiryDate",
            "optional": false,
            "description": "<p>Day on which the login to myallocator.com expires. No availability update (even through the API) can be made after this date. Format: YYYY-MM-DD. \\</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Currency",
            "optional": false,
            "description": "<p>3-letter ISO 4217 currency code. This is the default currency of the property.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "<p>2-letter ISO 3166-1 alpha-2 country code. This is the country the property located in.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Breakfast",
            "optional": false,
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Modifying a property",
        "content": "XML Request - Modifying a property\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<VendorPropertyModify>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<UserId>UserId</UserId>\n<PropertyName>Name of property</PropertyName>\n<ExpiryDate>2012-05-05</ExpiryDate>\n<Currency>EUR</Currency>\n<Country>DE</Country>\n<Breakfast>IN</Breakfast>\n</VendorPropertyModify>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "Response - Updating a login and property\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<VendorPropertyModifyResponse>\n<Success>true</Success>\n<PropertyId>70</PropertyId>\n</VendorPropertyModifyResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorSet",
    "title": "VendorSet",
    "name": "VendorSet",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Callback/URL",
            "optional": false,
            "description": "<p>Vendor Callback URL</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Callback/Password",
            "optional": false,
            "description": "<p>Callback Passwords</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "field": "Success",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>this is a utility which can be used to easily update vendor properties. most PMS systems will NOT use call on a regular basis.  (Please note: after an update of callback properties old requests which are already in queue may continue to arrive for up to an hour).</p><p> set Callback/URL to blank to disable callbacks.</p>",
    "examples": [
      {
        "title": "XML VendorSet",
        "content": "XML VendorSet\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<VendorSet>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<Callback>\n  <URL>http://www.yourdomain.com/myallocator/callback.cgi</URL>\n  <Password>very secret password</Password>\n</Callback>\n</VendorSet>\n",
        "type": "json"
      },
      {
        "title": "JSON VendorSet",
        "content": "JSON VendorSet\n{\n  'Auth/VendorId':'Your Vendor ID',\n  'Auth/VendorPassword':'Your Vendor Password',\n  'Callback/URL':'http://www.yourdomain.com/myallocator/callback.cgi',\n  'Callback/Password':'very secret password',\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorUserCreate",
    "title": "VendorUserCreate",
    "name": "VendorUserCreate",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Email",
            "optional": false,
            "description": "<p>Requested Email</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerFirstName",
            "optional": false,
            "description": "<p>Customer&#39;s first name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerLastName",
            "optional": false,
            "description": "<p>Customer&#39;s family name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerEmail",
            "optional": false,
            "description": "<p>Customer&#39;s email address.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SendWelcome",
            "optional": false,
            "description": "<p>1|0</p>"
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com.Before you can use this method we&#39;ll have to explicitly enable you forthis functionality, as some aspects with regards to customer payment will needto be discussed.    previously known as SetLogin/CreateLogin</p>",
    "examples": [
      {
        "title": "XML Request - Creating a customer account",
        "content": "XML Request - Creating a customer account\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<VendorUserCreate>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<UserId>New Customer Id</UserId>\n<UserPassword>New Customer Password</UserPassword>\n<CustomerFirstName>Customer first name</CustomerFirstName>\n<CustomerLastName>Customer family name</CustomerLastName>\n<CustomerEmail>Customer email address</CustomerEmail>\n</VendorUserCreate>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "Response - Updating a login and property\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<VendorUserCreateResponse> \n<Success>true</Success>\n</VendorUserCreateResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorUserExists",
    "title": "VendorUserExists",
    "name": "VendorUserExists",
    "group": "PMS",
    "description": "<p>This method checks to see if a User or Email is already registered.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Email",
            "optional": false,
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
            "field": "UserIdExists",
            "optional": false,
            "description": "<p>0|1</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "EmailExists",
            "optional": false,
            "description": "<p>0|1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML UserManager Exists Request ",
        "content": "XML UserManager Exists Request \n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<VendorUserExists>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<Method>Exists</Method>\n<UserId>requested-username</UserId>\n<Email>user@domain.com</EmailId>\n</VendorUserExists>\n",
        "type": "json"
      },
      {
        "title": "JSON VendorUserExists Request",
        "content": "JSON VendorUserExists Request\n{\n'Auth/VendorId':'Your Vendor ID',\n'Auth/VendorPassword':'Your Vendor Password',\n'UserId':'requested-username',\n'Email':'user@domain.com'\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "type": "get",
    "url": "/VendorUserModify",
    "title": "VendorUserModify",
    "name": "VendorUserModify",
    "group": "PMS",
    "description": "<p>This method allows you to create customer accounts on myallocator.com.Before you can use this method we&#39;ll have to explicitly enable you forthis functionality, as some aspects with regards to customer payment will needto be discussed.    previously known as SetLogin/CreateLogin</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserId",
            "optional": true,
            "description": "<p>Users unique ID  (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/UserPassword",
            "optional": true,
            "description": "<p>Users password (required if not linked to vendor)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorId",
            "optional": false,
            "description": "<p>Your Vendor ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Auth/VendorPassword",
            "optional": false,
            "description": "<p>Your Vendor Password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>Requested UserId</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Email",
            "optional": false,
            "description": "<p>Requested Email</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerFirstName",
            "optional": false,
            "description": "<p>Customer&#39;s first name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerLastName",
            "optional": false,
            "description": "<p>Customer&#39;s family name (optional).</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CustomerEmail",
            "optional": false,
            "description": "<p>Customer&#39;s email address.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Creating a user account.",
        "content": "XML Request - Creating a user account.\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<VendorUserModify>\n<Auth>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<UserId>New Customer Id</UserId>\n<UserPassword>New Customer Password</UserPassword>\n<CustomerFirstName>Customer first name</CustomerFirstName>\n<CustomerLastName>Customer family name</CustomerLastName>\n<CustomerEmail>Customer email address</CustomerEmail>\n</VendorUserModify>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "Response - Updating a login and property\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<VendorUserModifyResponse> \n<Success>true</Success>\n</VendorUserModifyResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "group": "PMS",
    "groupDescription": "<p>The User-Group description.</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm"
  },
  {
    "group": "Passive_Login",
    "groupDescription": "<p>You can provide direct links to different parts of our website without having the customerlog in. This is useful to directly link to the room and channel setup on myallocator.com.</p>",
    "type": "",
    "url": "{}",
    "title": "/callbacks/plogin.xt",
    "examples": [
      {
        "title": "To do this, send a POST request to this URL:",
        "content": "To do this, send a POST request to this URL:\nhttps://myallocator.com/callbacks/plogin.xt\n",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>The customer id on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "UserPassword",
            "optional": false,
            "description": "<p>The customer password on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "PropertyId",
            "optional": false,
            "description": "<p>The property ID on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "Destination",
            "optional": false,
            "description": "<ul><li><em>room_setup</em> - Setup page for rooms and property settings.</li><li><em>channel_setup</em> - Setup page to map channel rooms to Myallocator rooms</li></ul>"
          }
        ]
      }
    },
    "description": "<p>Please make sure that you send this request using HTTP\\textbf{S}. If you do notstore the plain password in your database you can also let us know which hash algorithm you use.</p>",
    "version": "0.0.0",
    "filename": "htdocs/callbacks/plogin.pm"
  },
  {
    "group": "Passive_Login",
    "groupDescription": "<p>You can provide direct links to different parts of our website without having the customerlog in. This is useful to directly link to the room and channel setup on myallocator.com.</p>",
    "type": "",
    "url": "{}",
    "title": "/callbacks/plogin.xt",
    "examples": [
      {
        "title": "To do this, send a POST request to this URL:",
        "content": "To do this, send a POST request to this URL:\nhttps://myallocator.com/callbacks/plogin.xt\n",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "UserId",
            "optional": false,
            "description": "<p>The customer id on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "UserPassword",
            "optional": false,
            "description": "<p>The customer password on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "PropertyId",
            "optional": false,
            "description": "<p>The property ID on myallocator.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "Destination",
            "optional": false,
            "description": "<ul><li><em>room_setup</em> - Setup page for rooms and property settings.</li><li><em>channel_setup</em> - Setup page to map channel rooms to Myallocator rooms</li></ul>"
          }
        ]
      }
    },
    "description": "<p>Please make sure that you send this request using HTTP\\textbf{S}. If you do notstore the plain password in your database you can also let us know which hash algorithm you use.</p>",
    "version": "0.0.0",
    "filename": "htdocs/callbacks/plogin.pm"
  },
  {
    "group": "_Appendix",
    "type": "",
    "url": "{}",
    "title": "ChangeLog",
    "name": "ChangeLog",
    "description": "<table><thead><tr><th>Date</th><th>Version</th><th>Change</th></tr></thead><tbody><tr><td>2012-10-24</td><td>1.6.2</td><td>Updated booking information (new: CommissionIncludedInTotal).</td></tr><tr><td>2012-10-24</td><td>1.6.1</td><td>Updated booking information and updated channel list (new: eb,air, orb, boo, tra).</td></tr><tr><td>2012-10-24</td><td>1.6</td><td>New feature Booking Callback and updated channel list (new: max).</td></tr><tr><td>2012-09-20</td><td>1.5.2</td><td>Updated channel list (new: exp, ysh, eb). Get/Set property country.</td></tr><tr><td>2012-07-04</td><td>1.5.1</td><td>Updated channel list. Added MinStay/MaxStay example.</td></tr><tr><td>2011-09-17</td><td>1.5</td><td>New method SetRoomTypes to add/update/remove rooms.</td></tr><tr><td>2011-09-17</td><td>1.4.1</td><td>GetBookings: Minor correction regarding the end date. It&#39;s not the departure date but rather the departure date - 1.</td></tr><tr><td>2011-01-15</td><td>1.4</td><td>New methods SetAllocation (non-blocking), SetLogin, GetUpdateStatus, GetBookings. Support for MinStay and MaxStay.</td></tr><tr><td>2010-11-09</td><td>1.3.1</td><td>Updated channel list. GetRoomTypes: Obsoleted &quot;Ensuite&quot;, &quot;DoubleBed&quot; and &quot;Beds&quot; (replaced by new property &quot;Occupancy&quot;). GetProperties: shows which days are configure for weekends.</td></tr><tr><td>2010-05-30</td><td>1.3</td><td>GetRoomTypes includes a room description (Label). Removed need to list channels to update to and ability to exclude channels. Skipped channels now warnings rather than errors.</td></tr><tr><td>2010-05-05</td><td>1.2</td><td>Added links to XML samples. New channel: hb</td></tr><tr><td>2010-04-30</td><td>1.1</td><td>Changed Room to \\textit{RoomType} to clarify matters</td></tr><tr><td>2010-04-27</td><td>1.0</td><td>Initial release</td></tr></tbody></table>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Channel Codes",
    "group": "_Appendix",
    "name": "Channel_Codes",
    "description": "<table><thead><tr><th>Code</th><th>Full name</th><th>Updates up to</th><th>Notes</th></tr></thead><tbody><tr><td>all</td><td>All configured channels</td><td>see below</td></tr><tr><td>loc</td><td>myallocator.com only</td><td>2 years</td><td>Specify this channel if you <em>only</em> want to update to myallocator.com. Submitting to any other channel will also always save to myallocator.com</td></tr><tr><td>hc</td><td>Hostelsclub</td><td>2 years</td></tr><tr><td>hb</td><td>Hostelbookers</td><td>1 year</td><td></td></tr><tr><td>gom</td><td>Gomio</td><td>2 years</td><td></td></tr><tr><td>iwb</td><td>InstantWorldBooking</td><td>2 years</td><td></td></tr><tr><td>rtg</td><td>RatesToGo</td><td>variable</td><td></td></tr><tr><td>adv</td><td>HotelAdvisor</td><td>2 years</td><td></td></tr><tr><td>hrs</td><td>HRS</td><td>2 years</td><td>*not live yet</td></tr><tr><td>hde</td><td>Hotel.de</td><td>2 years</td><td></td></tr><tr><td>esc</td><td>Escapio</td><td>2 years</td><td></td></tr><tr><td>hi</td><td>HIHostels</td><td>2 years</td><td></td></tr><tr><td>rec</td><td>Reconline (GDS)</td><td>2 years</td><td></td></tr><tr><td>bp</td><td>BudgetPlaces</td><td>2 years</td><td></td></tr><tr><td>ct</td><td>Cultuzz</td><td>2 years</td><td></td></tr><tr><td>lmg</td><td>BookingMarkets/LetMeGo</td><td>2 years</td><td></td></tr><tr><td>hw</td><td>Hostelworld</td><td>2 years</td><td></td></tr><tr><td>bb</td><td>BBPlanet</td><td>1 year</td><td></td></tr><tr><td>etb</td><td>EasyToBook</td><td>2 years</td><td></td></tr><tr><td>ini</td><td>InItalia</td><td>1 year and 3 months</td><td></td></tr><tr><td>ago</td><td>Agoda</td><td>2 years</td><td></td></tr><tr><td>max</td><td>MaxBooking</td><td>2 years</td><td></td></tr><tr><td>eb</td><td>EasyBookings</td><td>2 years</td><td></td></tr><tr><td>ysh</td><td>YourSpainHostel</td><td>2 years</td><td></td></tr><tr><td>exp</td><td>Expedia</td><td>2 years</td><td></td></tr><tr><td>eb</td><td>EasyBookings</td><td>2 years</td><td></td></tr><tr><td>air</td><td>AirBnb</td><td>2 years</td><td></td></tr><tr><td>orb</td><td>Orbitz</td><td>2 years</td><td></td></tr><tr><td>rep</td><td>TravelRepublic</td><td>2 years</td><td></td></tr><tr><td>boo</td><td>Booking.com</td><td>2 years</td><td></td></tr><tr><td>(go2)</td><td>Go2Hostels</td><td>1 year</td><td>Channel closed down Jan $1^{st}$ 2011</td></tr></tbody></table>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "FAQ",
    "group": "_Appendix",
    "name": "FAQ",
    "description": "<ul><li><p><em>How should I deal with failed channel updates?</em>If the error is noted as non-fatal on the Error Code page then retry the update after a few minutes. Failing updates are not as rare as you would think because channels do go down and become unresponsive.</p><p>Fatal errors should not be automatically retried as they need user intervention. Make sure to show the error message to the customer._</p></li></ul><ul><li><p><em>Are there any limits on how many updates can be send at once?</em></p><p>There is (currently) no limit, but you&#39;re strongly advised to split large updates (especially full refreshes) into smaller chunks of 30-60 days. This has the advantage that you can easily re-run failed chunks and it will make debugging problems easier.</p></li><li><p><em>I cannot log in to myallocator with the test credentials. Why?</em>This is to avoid the settings for the test properties from being changed. You can however just register your own test property. Should you need more than the 30-day trial period let us know and we will extend it.</p></li><li><p><em>Callback: how do you know which customers belong to us?</em>The first time you send an update on behalf of a customer through our API this customer will be marked as a user of your PMS. From then on you will receive callbacks for this customer.</p></li><li><p><em>Can I send updates in parallel?</em>You can for different properties. What you should never do is send an update for a property without waiting for the previous update for this property to succeed/fail. Otherwise you can run into race-conditions where the later update succeeds before the first update, opening up availability on the channel unintentionally.</p></li><li><p><em>Why can there be multiple RoomTypeIds for a booking?</em>The same channel room can be assigned to multiple myallocator rooms. For this scenario we send the sum of available rooms/beds and the highest price of any available room that is mapped to this channel room. So the list of RoomTypeIds represents all matching rooms, but it does not mean that all of them were actually booked.Check out the warning on the Automatic Adjustments developer page for more details on how to adjust for this scenario.</p></li></ul>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Error Codes",
    "group": "_Appendix",
    "name": "Global_Error_codes",
    "description": "<p>Errors are divided into three categories. A global error will have a single Errors tag with no further encapsulation and only a single Error tag.</p><p> An API method specific error will be included in the method name. Again, there will only be a single Error tag. The third type of error is channel specific. The Errors tag is included in the method name and there may be multiple Error tags.</p><table><thead><tr><th>Code</th><th>Description</th></tr></thead><tbody><tr><td>2</td><td>Missing authentication tags</td></tr><tr><td>3</td><td>Invalid user or user password</td></tr><tr><td>4</td><td>Invalid vendor or vendor password</td></tr><tr><td>5</td><td>Vendor disabled</td></tr><tr><td>6</td><td>User has no credit left</td></tr><tr><td>7</td><td>User has no permission to change availability for this property</td></tr><tr><td>8</td><td>No such API method</td></tr><tr><td>9</td><td>Unsupported channel</td></tr><tr><td>10</td><td>No channels selected</td></tr><tr><td>11</td><td>No allocations submitted</td></tr><tr><td>12</td><td>Invalid room type id (does not exist or not assigned to this property)</td></tr><tr><td>13</td><td>Missing allocation info (price, dates, units)</td></tr><tr><td>14</td><td>Internal error. Support has been notified!</td></tr><tr><td>15</td><td>Missing or wrong channel credentials on myallocator.com</td></tr><tr><td>16</td><td>End date before start date</td></tr><tr><td>17</td><td>Start date too far in the future (&gt;2 years)</td></tr><tr><td>18</td><td>Invalid property id</td></tr><tr><td>19</td><td>Vendor not enabled to use this method</td></tr><tr><td>20</td><td>Missing required XML fields</td></tr><tr><td>21</td><td>No applicable dates submitted</td></tr><tr><td>22</td><td>Invalid update id</td></tr><tr><td>301</td><td>Invalid characters in new username</td></tr><tr><td>302</td><td>Username exists already</td></tr><tr><td>303</td><td>Invalid values (check Breakfast, Currency, ExpiryDate)</td></tr><tr><td>401</td><td>Invalid date forma</td></tr><tr><td>402</td><td>Missing or invalid search criteri</td></tr></tbody></table><p><em>Channel Specific errors</em></p><table><thead><tr><th>Code</th><th>Description</th></tr></thead><tbody><tr><td>202</td><td>Channel skipped (not setup)</td></tr><tr><td>203</td><td>Channel did not respond</td></tr><tr><td>204</td><td>Channel skipped (no applicable rooms)</td></tr><tr><td>205</td><td>Incorrect room setup. The room type mapping needs to be updated on myallocator.com.</td></tr><tr><td>206</td><td>Channel only updates up to a certain period in the future. Some dates were skipped.</td></tr><tr><td>207</td><td>Skipped room type (not setup with channel)</td></tr><tr><td>208</td><td>Partial success: ...</td></tr><tr><td>99</td><td>Check/Display ErrMsg or WarningMsg content</td></tr></tbody></table>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "group": "_Appendix",
    "type": "",
    "url": "{}",
    "title": "Terminology",
    "name": "Terminology",
    "description": "<table><thead><tr><th>Term</th><th>Description</th></tr></thead><tbody><tr><td>Vendor</td><td>You as the owner and developer of the front desk software.</td></tr><tr><td>User/Customer</td><td>Someone using your product and who is also registered on myallocator.com.</td></tr><tr><td>Allocation</td><td>A number indicating how many available beds or rooms there are.</td></tr></tbody></table>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Test Accounts",
    "group": "_Appendix",
    "name": "Test_Accounts",
    "description": "<p>Please contact us for login details to this shared developer account.</p><p> Properties 63, 64, 64</p><p> Only the property with ID 63 has rooms setup with the following configuration:</p><table><thead><tr><th>Units</th><th>Beds</th><th>IsPrivate</th><th>Gender</th><th>Channels</th></tr></thead><tbody><tr><td>3</td><td>1</td><td>true</td><td>n/a &amp; hc, iwb, adv</td></tr><tr><td>3</td><td>2</td><td>true</td><td>n/a &amp; hc, iwb, adv</td></tr><tr><td>3</td><td>5</td><td>false</td><td>males &amp; hc, iwb</td></tr><tr><td>3</td><td>10</td><td>false</td><td>males &amp; hc, iwb</td></tr><tr><td>3</td><td>10</td><td>false</td><td>females &amp; hc, iwb</td></tr><tr><td>3</td><td>30</td><td>false</td><td>mixed &amp; hc, iwb</td></tr></tbody></table><p> Channels are not specific to rooms. The only reason &#39;adv&#39; is not showing on all rooms is because they don&#39;t support shared accomodation (dormitories).</p>",
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "XML v1 Error Responses",
    "group": "_Appendix",
    "name": "XML_v1_Error_Responses",
    "description": "<p>XML v1 is deprecated and this documentation is provided for backward compatibility.</p>",
    "error": {
      "examples": [
        {
          "title": "Example: Could not parse XML",
          "content": "Example: Could not parse XML\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<Errors>\n<Error>\n  <ErrorId>1</ErrorId>\n  <ErrorMsg>Could not parse XML</ErrorMsg>\n</Error>\n</Errors>\n",
          "type": "json"
        },
        {
          "title": "Example: XML API method specific error",
          "content": "Example: XML API method specific error\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<GetRoomTypes>\n<Errors>\n  <Error>\n    <ErrorId>3</ErrorId>\n    <ErrorMsg>Invalid user or user password</ErrorMsg>\n  </Error>\n</Errors>\n</GetRoomTypes>\n",
          "type": "json"
        },
        {
          "title": "Example: XML Channel specific error ",
          "content": "Example: XML Channel specific error \n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n<Errors>\n  <Error channel=\"hc\">\n    <ErrorMsg>\n      Provider not responding. Please try again later.\n    </ErrorMsg>\n  </Error>\n  <Error channel=\"iwb\">\n    <ErrorMsg>\n      Provider not responding. Please try again later.\n    </ErrorMsg>\n  </Error>\n</Errors>\n<Success>false</Success>\n<Warnings></Warnings>\n</SetAllocationResponse>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "htdocs/apidoc.pm"
  }
] });