define({ api: [
  {
    "type": "get",
    "url": "/AssociateUserToPMS",
    "title": "AssociateUserToPMS",
    "name": "AssociateUserToPMS",
    "group": "PMS",
    "description": "<p>Creates a permanent link between an existing myallocator user and a PMS Vendor.   The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),   then in the background pass the user credentials to AssociateUserToPMS and a link will be created.  Any future API calls will not require UserPassword. </p> <p> NOTE: *Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p> <p> NOTE: Although Auth/UserPassword is identified in this call as <em>required</em> if a prior AssociateUserToPMS call has been made then it is not actually required.</p> ",
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
            "optional": true,
            "field": "Auth/PropertyId",
            "description": "<p>PropertyId (use 0 for all)</p> "
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
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PMSPropertyId",
            "description": "<p>The Unique UserId on the PMS (for reference 128 cahracter max) - will be included in callbacks (only stored if Auth/PropertyId was set)</p> "
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
            "field": "secret",
            "description": "<p>A 48 character shared secret reserve for future HMAC Public calls (<a href=\"http://tools.ietf.org/html/rfc2104\">http://tools.ietf.org/html/rfc2104</a>). *NOTE: It is not necessary to store this unless you actually plan to use it - because the token can be reset by simply calling AssociateUserToPMS.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociateUserToPMS",
        "content": "{\n'Auth/UserId':'login on myallocator.com',\n'Auth/UserPassword':'password for myallocator.com',\n'Auth/PropertyId':0,\n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'PMSUserId':'username-on-the-remote-pms-system',\n'PMSPropertyId':'propertyid-on-the-remote-pms-system',\n}",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomList>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <PropertyId>Property ID on myallocator.com</PropertyId>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSUserId>username-on-the-remote-pms-system</PMSUserId>\n<PMSPropertyId>propertyid-on-the-remote-pms-system</PMSPropertyId>\n</RoomList>",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
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
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "ModifcationStartDate",
            "description": "<p>Query for date of the book modification on myallocator.com.  A modification timestamp will occur if the booking has been cancelled or changes. When a new Booking is received the ModificationDate will be initially set to the creation date.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ModifcationEndDate",
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
          }
        ]
      }
    },
    "description": "<p>This method allows you to query for bookings made to a specific property  by booking date, modification date or arrival date.</p> <p> It is important to know that not every booking that is returned through  the API neccessarily resulted in an adjustment of the other channels. If the  booking is not mapped to any rooms on our system, or if the channel  has just been setup, the adjustment will not be carried out.  The requests consists of search criteria by date. Only specify the  StartDate/EndDate of one criteria.  note: formerly BookingList (v1).</p> <p> <strong> Data Formatting </strong>  Different channels return a different amount of information about a booking, therefore many fields are optional.</p> <p><strong> Best Pratices </strong></p> <ul> <li>Callbacks are the fastest, best, and preferred way of receiving Booking data. </li> <li>Every effort will be made to synchronize the callback data format and this format. (You can/should use the same data parsing code)</li> <li>BookingList method should only be used as a backup to correct errors or lost callbacks. Or to periodically verify integrity of data. </li> <li>Always use ModificationStartDate ModificationEndDate in production. </li> <li>There a revision counter (Version) which will be present when a modification has been made. However if a change/cancellation is received then the modification date will also be different from the creation date)</li> <li>Do not frequently poll this API, one call, per property, every 30 minutes is considered &quot;Acceptable Usage&quot;.</li> </ul> ",
    "examples": [
      {
        "title": "XML Example of querying for bookings",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<BookingList>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <!-- NOTE: Arrival, Creation, Modification cannot *actually* be used together -->\n <ArrivalStartDate>2010-01-01</ArrivalStartDate>\n <ArrivalEndDate>2013-01-01</ArrivalEndDate>\n <CreationStartDate>2010-01-01</CreationStartDate>\n <CreationEndDate>2013-01-01</CreationEndDate>\n <ModifcationStartDate>2010-01-01</ModifcationStartDate>\n <ModifcationEndDate>2013-01-01</ModifcationEndDate>\n</BookingList>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Querying for bookings",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<BookingListResponse>\n <Bookings>\n   <Booking>\n     <Channel>hb</Channel>\n     <StartDate>2012-01-01</StartDate>\n     <EndDate>2012-01-03</EndDate>\n     <IsCancellation>false</IsCancellation>\n     <MyallocatorId>4d7e47e467458b927c000000</MyallocatorId>\n     <MyallocatorCreationDate>2011-03-14</MyallocatorCreationDate>\n     <MyallocatorCreationTime>16:52:52</MyallocatorCreationTime>      \n     <MyallocatorModificationDate>2011-03-14</MyallocatorModificationDate>\n     <MyallocatorModificationTime>16:52:52</MyallocatorModificationTime>\n     <OrderId>1234</OrderId>\n     <OrderDate>2011-11-11</OrderDate>      \n     <OrderTime>11:11:00</OrderTime>\n     <OrderSource>Hostelbookers.com</OrderSource>\n     <OrderAdults>2</OrderAdults>\n     <OrderChildren>2</OrderChildren>\n     <Deposit>12.00</Deposit>\n     <TotalPrice>82.00</TotalPrice>\n     <TotalCurrency>GBP</TotalCurrency>\n\n     <Customers>\n       <Customer>\n         <CustomerFName>John</CustomerFName>\n         <CustomerLName>Smith</CustomerLName>\n         <CustomerAddress>522 Main Rd</CustomerAddress>\n         <CustomerArrivalTime>13:00</CustomerArrivalTime>\n         <CustomerEmail>john@googlemail.com</CustomerEmail>\n         <CustomerNationality>UK</CustomerNationality>\n         <CustomerPhone>+44 1234567890</CustomerPhone>\n         <CustomerCompany>Johnston Ltd.</CustomerCompany>\n         <CustomerCity>Stirling</CustomerCity>\n         <CustomerState>Stirlingshire</CustomerState>\n         <CustomerPostCode>FK8 2HE</CustomerPostCode>\n         <CustomerCountry>UK</CustomerCountry>\n         <CustomerNote>Bringing a dog</CustomerNote>\n       </Customer>\n     </Customers>\n\n     <Rooms>\n       <Room>\n         <StartDate>2012-01-01</StartDate>\n         <EndDate>2012-01-03</EndDate>\n         <Price>40.00</Price>\n         <Currency>GBP</Currency>\n         <RoomTypeIds>\n           <RoomTypeId>117</RoomTypeId>\n         </RoomTypeIds>\n         <RoomDesc>2 peoples (1Double bed)</RoomDesc>\n         <Units>2</Units>\n       </Room>\n       <Room>\n         <StartDate>2012-01-02</StartDate>\n         <EndDate>2012-01-02</EndDate>\n         <Price>42.00</Price>\n         <Currency>GBP</Currency>\n         <RoomTypeIds>\n           <RoomTypeId>119</RoomTypeId>\n         </RoomTypeIds>          \n         <RoomDesc>Dormitory Room</RoomDesc>\n         <Units>4</Units>\n       </Room>\n     </Rooms>\n\n   </Booking>\n </Bookings>\n</BookingListResponse>",
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
            "description": "<p>2-3 letter channel code</p> "
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
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/BookingPaymentDownload",
    "title": "BookingPaymentDownload",
    "name": "BookingPaymentDownload",
    "group": "PMS",
    "description": "<p>This call can be used to retrieve credit card details from specific bookings.   This applies only to channels that currently send us the credit card details (booking.com, Expedia, BookNow) and only for bookings that were created after connection with myallocator has been made.</p> <p> This API call is not enabled for vendors by default. You need to send us your PCI compliance certification before this can be done. It&#39;s also neccessary to send along the credit card viewing password (different from the user login). For best practise do not store this password in your system but rather get it from the customer and send it on directly. This way the password will only be in the memory and not as accessible.</p> <p> The credit card viewing password needs to be changed ever 365 by the property. It can happen that the property has reset their password in which case our support team needs to reencrypt the existing details. This is not an automatic process and can take between 1 and 3 business days.</p> <p> Applicable error codes are 26 - 30. Even though logically this would be a GET call, we use POST for this one to prevent the password from going to the webserver log files.</p> <p> Bookings can have multiple credit card details stored within them, as they have been updated by the guest. The response will list credit card details with the most recent credit card first.</p> <p> <strong> Compatibility </strong>  <a href=\"https://myallocator.com/en/api/cc\">https://myallocator.com/en/api/cc</a></p> <p> PropertyId, MyallocatorId, CreditCardPassword</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "type": "String",
            "optional": false,
            "field": "CreditCardPassword",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "BookingId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "JSON BookingPaymentDownload",
          "content": "   {\n       \"Payments\": [\n           {\n               \"CardType\": \"VI\",\n               \"CardNumber\": \"4111111111111111\",\n               \"CardCVV\": \"123\",\n               \"CardExpiryYear\": \"2018\",\n               \"CardExpiryMonth\": \"11\",\n               \"CardHolderName\": \"Martin Seamus McFly\"\n           },\n           {\n               \"CardType\": \"VI\",\n               \"CardNumber\": \"4123123412341234\",\n               \"CardCVV\": \"234\",\n               \"CardExpiryYear\": \"2013\",\n               \"CardExpiryMonth\": \"12\",\n               \"CardHolderName\": \"Emmett Lathrop Brown\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/ChannelList",
    "title": "ChannelList",
    "name": "ChannelList",
    "group": "PMS",
    "description": "<p>Use this to get a list of available channels.</p> ",
    "success": {
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
      },
      "examples": [
        {
          "title": "XML ChannelList Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ChannelListResponse>\n <Channels>\n   <Channel>\n\t\t<id>boo</id>\n\t\t<name>Booking.com</name>\n\t\t<signupLink>http://www.someurl</signuplink>\n   </Channel>\n</ChannelListResponse>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "XML ChannelList Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ChannelList>\n</ChannelList>",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/ChannelMappingList",
    "title": "ChannelMappingList",
    "name": "ChannelMappingList",
    "group": "PMS",
    "description": "<p>Lists the channel details associated with a property. Formerly (v1) GetProperties</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
        "title": "XML ChannelMappingList",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<ChannelMappingList>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n</ChannelMappingList>",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
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
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
    "description": "<p>Use this GetUpdateStatus to query for the status of a SetAllocation update. It  will list the results by channel. Big updates are split into several  parts which is reflected in the Parts and ActivePart parameter.</p> ",
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
          "title": "XML GetUpdateStatus Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<GetUpdateStatusResponse>\n <Channels>\n   <Channel code=\"gom\">\n     <ActivePart>3</ActivePart>\n     <Parts>3</Parts>\n     <Warnings></Warnings>\n     <Errors></Errors>\n     <Success>false</Success>\n   </Channel>\n   <Channel code=\"hc\">\n     <ActivePart>3</ActivePart>\n     <Parts>0</Parts>\n     <Errors></Errors>\n     <Success>true</Success>\n     <Warnings>\n       <Warning>\n         <WarningId>207</WarningId>\n         <WarningMsg>Skipped room type (not setup with channel).</WarningMsg>\n       </Warning>\n     </Warnings>\n   </Channel>\n   <Channel code=\"iwb\">\n     <ActivePart>0</ActivePart>\n     <Errors>\n       <ErrorId>15</ErrorId>\n       <ErrorMsg>Missing or wrong channel credentials on myallocator.com</ErrorMsg>\n     </Errors>\n     <Parts>0</Parts>\n     <Success>false</Success>\n     <Warnings>\n     </Warnings>\n   </Channel>\n</GetUpdateStatusResponse>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "XML GetUpdateStatus Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<GetUpdateStatus>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n \n <UpdateId>832522158</UpdateId>\n</GetUpdateStatus>",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/HelloWorld",
    "title": "HelloWorld",
    "name": "HelloWorld",
    "group": "PMS",
    "description": "<table> <thead> <tr> <th>Call</th> <th>Notes + Authentication Requirements</th> </tr> </thead> <tbody> <tr> <td>Hello</td> <td>No Authentication Required</td> </tr> <tr> <td>HelloVendor</td> <td>Requires <em>VALID</em> Vendor Credentials</td> </tr> <tr> <td>HelloUser</td> <td>Requires <em>VALID</em> User Credentials</td> </tr> <tr> <td>HelloUserVendor</td> <td>Requires <em>VALID</em> User <em>AND</em> Vendor Credentials</td> </tr> </tbody> </table> <p> This method is diagnostic in nature, it is intended to provide a simple echo/response &quot;My First API call&quot;,  <em>IT HAS NO PURPOSE</em> besides simply returning whatever parameters you send it (no authentication required).</p> ",
    "examples": [
      {
        "title": "XML Hello Request",
        "content": "GET /pms/v201408/xml/Hello\nHTTP/1.1 200 OK\nContent-Type: text/xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Hello>\n <hello>world</hello>\n</Hello>",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "GET /pms/v201408/json/Hello\nContent-Type: application/json\n{ 'hello':'world' }",
        "type": "json"
      },
      {
        "title": "JSON HelloVendor Request",
        "content": "GET /pms/v201408/json/HelloVendor\nContent-Type: application/json\n{ \n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'hello':'world' \n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyCreate",
    "title": "PropertyCreate",
    "name": "PropertyCreate",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "UserId",
            "description": "<p>Requested UserId</p> "
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
            "field": "ExpiryDate",
            "description": "<p>Day on which the login to myallocator.com expires. No availability update (even through the API) can be made after this date. Format: YYYY-MM-DD. \\</p> "
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
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be (excluded) or empty.</p> "
          }
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed. Previously known as SetLogin/CreateLogin</p> ",
    "examples": [
      {
        "title": "XML Request - Creating a NEW property (and attaching it to a user account)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyCreate>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <UserId>UserId</UserId>\n <PropertyName>Name of property</PropertyName>\n <ExpiryDate>2012-05-05</ExpiryDate>\n <Currency>EUR</Currency>\n <Country>DE</Country>\n <Breakfast>IN</Breakfast>\n</PropertyCreate>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserPropertyResponse> \n <Success>true</Success>\n <PropertyId>1234</PropertyId>\n</UserPropertyResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyList",
    "title": "PropertyList",
    "name": "PropertyList",
    "group": "PMS",
    "description": "<p>Users on myallocator.com might have more than one property attached to their username.  This request lists which properties are associated with the customer and provides a property ID, needed to update the availability of this property. This request was formerly known as GetProperties (v1)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
        "title": "XML PropertyList Request",
        "content": " <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n <PropertyList>\n <Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n  </Auth>\n </PropertyList>",
        "type": "json"
      },
      {
        "title": "JSON PropertyList Request",
        "content": " {}",
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
            "field": "PaidUntil",
            "description": "<p>Usage of myallocator.com paid for until this date. Informational. Format: YYYY-MM-DD.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Weekend",
            "description": "<p>Day &amp; Shows which days are marked as weekend days by the customer on Myallocator. Monday = 1, Sunday = 7. The name of the weekday is also given in the \\textit{name} property. See SetAllocation for information on when this is used.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML PropertyList Response Success",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<PropertyListResponse>\n  <Properties>\n    <Property>\n      <Id>19</Id>\n      <Name>Property 1</Name>\n      <Breakfast></Breakfast>\n      <Currency>GBP</Currency>\n      <Country>GB</Country>\n      <PaidUntil>2011-11-11</PaidUntil>\n      <Weekend>\n        <Day name=\"Friday\">5</Day>\n        <Day name=\"Saturday\">6</Day>\n      </Weekend>\n    </Property>\n    \n    <Property>\n      <Id>13</Id>\n      <Name>Property 2</Name>\n      <Breakfast>IN</Breakfast>\n      <Currency>EUR</Currency>\n      <Country>DE</Country>\n      <PaidUntil>2011-11-11</PaidUntil>\n      <Weekend>\n      </Weekend>\n    </Property>\n    \n    <Property>\n      <Id>15</Id>\n      <Name>Property 3</Name>\n      <Breakfast>EX</Breakfast>\n      <Currency>GBP</Currency>\n      <Country>GB</Country>\n      <PaidUntil>2011-11-11</PaidUntil>\n      <Weekend>\n        <Day name=\"Friday\">5</Day>\n        <Day name=\"Saturday\">6</Day>\n        <Day name=\"Sunday\">7</Day>\n      </Weekend>\n    </Property>\n  </Properties>\n</PropertyListResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyModify",
    "title": "PropertyModify",
    "name": "PropertyModify",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "PropertyId",
            "description": "<p>Requested PropertyId</p> "
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
            "field": "ExpiryDate",
            "description": "<p>Day on which the login to myallocator.com expires. No availability update (even through the API) can be made after this date. Format: YYYY-MM-DD. \\</p> "
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
            "type": "String",
            "optional": false,
            "field": "Breakfast",
            "description": "<p>Can be \\textit{IN} (included), \\textit{EX} (excluded) or empty.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Modifying a property",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyModify>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <UserId>UserId</UserId>\n <PropertyName>Name of property</PropertyName>\n <ExpiryDate>2012-05-05</ExpiryDate>\n <Currency>EUR</Currency>\n <Country>DE</Country>\n <Breakfast>IN</Breakfast>\n</PropertyModify>",
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
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomAvailabilityList",
    "title": "RoomAvailabilityList",
    "name": "RoomAvailabilityList",
    "group": "PMS",
    "description": "<p>This call can be used to query for all data that we hold for a specific property and date range.   The date range can only be 31 days as the maximum. You can query multiple times if you need a longer date range.</p> <p> A MaxStay setting of 0 means &quot;unrestricted&quot;.   The 48 and 49 in the response example below refer to the room ID as returned by GetRooms (XML API).</p> <p> <strong> Compatibility: </strong>   this was formerly available at: <a href=\"https://myallocator.com/en/api/data\">https://myallocator.com/en/api/data</a></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
    "success": {
      "examples": [
        {
          "title": "JSON RoomAvailabilityList",
          "content": "   {\n   \"Rooms\": [\n         {\n    \t  \"RoomId\": 48,\n         \"PropertyId\": 1234,\n         \"RoomName\": \"1-person private\",\n         \"Data\": [\n           {\n             \"Date\": \"2014-03-15\",\n             \"Units\": 2,\n             \"Price\": 33,\n             \"MinStay\": 1,\n             \"MaxStay\": 7,\n             \"Closed\": false,\n             \"ClosedForArrival\": false,\n             \"ClosedForDeparture\": false\n           },\n           {\n             \"Date\": \"2014-03-16\",\n             \"Units\": 2,\n             \"Price\": 33,\n             \"MinStay\": 1,\n             \"MaxStay\": 7,\n             \"Closed\": false,\n             \"ClosedForArrival\": false,\n             \"ClosedForDeparture\": false\n           }\n         ]\n       },\n       {\n         \"RoomId\": 49,\n         \"PropertyId\": 1,\n         \"RoomName\": \"5-person male shared\",\n         \"Data\": [\n           {\n             \"Date\": \"2014-03-15\",\n             \"Units\": 0,\n             \"Price\": 0,\n             \"MinStay\": 1,\n             \"MaxStay\": 7,\n             \"Closed\": false,\n             \"ClosedForArrival\": false,\n             \"ClosedForDeparture\": false\n           },\n           {\n             \"Date\": \"2014-03-16\",\n             \"Units\": 0,\n             \"Price\": 0,\n             \"MinStay\": 1,\n             \"MaxStay\": 7,\n             \"Closed\": false,\n             \"ClosedForArrival\": false,\n             \"ClosedForDeparture\": false\n           }\n         ]\n       }\n     }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomList",
    "title": "RoomList",
    "name": "RoomList",
    "group": "PMS",
    "description": "<p>returns a list of configured room types for a property. Formerly GetRoomTypes (v1).</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
        "title": "XML RoomList Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomList>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n</RoomList>",
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
          }
        ]
      },
      "examples": [
        {
          "title": "XML RoomList Success Response:",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomListResponse>\n <RoomTypes>\n   <RoomType>\n     <Id>59</Id>\n     <Label>1-bed private ensuite</Label>\n     <Units>3</Units>\n     <Occupancy>1</Occupancy>\n     <Beds>1</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>      \n   </RoomType>\n   \n   <RoomType>\n     <Id>63</Id>\n     <Label>2-bed private</Label>\n     <Units>4</Units>\n     <Occupancy>2</Occupancy>\n     <Beds>2</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>    \n   </RoomType>\n   \n   <RoomType>\n     <Id>49</Id>\n     <Label>5-bed female shared</Label>\n     <Units>3</Units>\n     <Occupancy>5</Occupancy>\n     <Beds>5</Beds>\n     <Gender>FE</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>false</PrivateRoom>\n   </RoomType>\n </RoomTypes>\n</RoomListResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
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
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "Channels/Channel",
            "description": "<p>A list of channels that the customer wants to update. See below for channel codes.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Allocations/Allocation",
            "description": "<p>Individual allocations. There can be as many as you like, but a the date ranges should never overlap (within one room id).</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RoomTypeId",
            "description": "<p>Room type id as returned by RoomList.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "StartDate/EndDate",
            "description": "<p>Format: YYYY-MM-DD.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Units",
            "description": "<p>How many beds or rooms should be available on this day. Whether it&#39;s beds or rooms depends on whether the room is a dorm or a private room. To remove allocation set Units to 0.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MinStay",
            "description": "<p>Specify the minumum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MaxStay",
            "description": "<p>Specify the maximum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Prices/Price",
            "description": "<p>Price per person for shared/dorm rooms or per room for private rooms. You can submit two Price tags. The default one and one with the attribute \\textit{weekend=&quot;true&quot;}. If a Price tag with this attribute has been submitted the rate only applies to weekdays set by the customer as weekends (see PropertyList for which days are set as weekend days).</p> "
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
            "description": "<p>Can be \\textit{true} (all channel updates succeeded), \\textit{partial} (not all channels succeeded) or \\textit{false} (all channel updates failed).</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Errors/Error",
            "description": "<p>Check with the list of errors below. Might contain the attribute \\textit{channel=&quot;..&quot;} to indicate whether the error only applies to a specific channel.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Warnings/Warning",
            "description": "<p>Check with the list of errors below. Might contain the attribute \\textit{channel=&quot;..&quot;} to indicate whether the warning only applies to a specific channel.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML SetAllocation Response (Full Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings>\n   <Warning channel=\"hc\">\n     <WarningId>207</WarningId>\n     <WarningMsg>\n     \tSkipped room type (not setup with channel).\n     </WarningMsg>\n   </Warning>  \n </Warnings>\n</SetAllocationResponse>",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Warning Response (at least one channel succeeded)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Success>partial</Success>\n <Errors>\n   <Error channel=\"adv\">\n     <ErrorId>15</ErrorId>\n     <ErrorMsg>\n       Missing or wrong channel credentials on myallocator.com\n     </ErrorMsg>\n   </Error>\n </Errors>\n <Warnings></Warnings>\n</SetAllocationResponse>",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Failed Response (all channels came back with errors)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Success>false</Success>\n <Errors>\n   <Error channel=\"adv\">\n     <ErrorId>15</ErrorId>\n     <ErrorMsg>\n     \tMissing or wrong channel credentials on myallocator.com\n     </ErrorMsg>      \n   </Error>\n </Errors>\n <Warnings></Warnings>\n</SetAllocationResponse>",
          "type": "json"
        },
        {
          "title": "XML SetAllocation Failed update (error before submitting to any channel)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Success>false</Success>\n <Errors>\n   <Error\">\n     <ErrorId>17</ErrorId>\n     <ErrorMsg>\n     \tStart date too far in the future (>2 years)\n     </ErrorMsg>      \n   </Error>\n </Errors>\n <Warnings></Warnings>\n</SetAllocationResponse>",
          "type": "json"
        },
        {
          "title": "XML SetAllocation QueryForStatus=true",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetAllocationResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings></Warnings>\n <UpdateId>832522158</UpdateId>\n</SetAllocationResponse>",
          "type": "json"
        }
      ]
    },
    "description": "<p>An allocation sets the number of rooms or beds (depending on whether the  room type is a private room or shared/dorm) available during  any specific time frame. For more details see below.</p> <p> <strong> Handling Errors &amp; Warnings </strong></p> <p> The response will always include the Success, Errors and Warnings tags. If  Success is set to &quot;true&quot; the Errors tag will be empty. If Success is set to  &quot;partial&quot; or &quot;false&quot; at least one Error tag is included.</p> <p> <strong> Submitting to ALL channels </strong></p> <p> You can also submit to all available channels without specifying explicity which  channels to update. Use the channel code &quot;all&quot; to do this. Channels that are not   set up by the user will be skipped as indicated by a warning. </p> <p> It is also possible to submit to all channels while excluding certain channels.  Add the attribute exclude=&quot;true&quot; to skip a channel. See example below.  Use the channel code &quot;all&quot; to do this.</p> <p> <strong> Running Jobs in the Background (GetUpdateStatus) </strong></p> <p> You can also run the SetAllocation update in the background and query  for the updates using GetUpdateStatus. This enables you  to show the update progress to the user while it&#39;s still running. To enable  this feature you need to add the node QueryForStatus (see example)</p> <p> If QueryForStatus is true then the SetAllocationResponse will contain the additional parameter UpdateId, which  is needed for GetUpdateStatus</p> ",
    "examples": [
      {
        "title": "JSON SetAllocation",
        "content": "{ \n 'Auth/UserId':'your username',\n 'Auth/UserPassword':'your password'\n\t'Channels': [ 'hc','iwb' ],\n 'Allocations: [\n\t\t{\n\t\t'RoomTypeId':'59',\n\t\t'StartDate':'2010-06-01',\n\t\t'EndDate':'2010-06-01',\n\t\t'Units':'3',\n\t\t'MinStay':'1',\n\t\t'MaxStay':'30',\n\t\t'Price':'20.00',\n\t\t'Price-Weekday':'15.00',\n\t\t'Price-Weekend':'20.00',\n\t\t}\n ]\n}",
        "type": "json"
      },
      {
        "title": "XML SetAllocationRequest",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n \n <Channels>\n   <Channel>hc</Channel>\n   <Channel>iwb</Channel>\n </Channels>\n \n <Allocations>\n   <Allocation>\n     <RoomTypeId>59</RoomTypeId>\n     <StartDate>2010-06-01</StartDate>\n     <EndDate>2010-08-12</EndDate>\n     <Units>3</Units>\n     <MinStay>1</MinStay>\n     <MaxStay>30</MaxStay>\n     <Prices>\n       <Price>20.00</Price>\n       <Price weekend=\"true\">25.00</Price>\n     </Prices>\n   </Allocation>\n </Allocations>\n</SetAllocation>",
        "type": "json"
      },
      {
        "title": "XML Request (Status Check)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n <Auth>\n   ...\n </Auth>\n \n <Options>\n   <QueryForStatus>true</QueryForStatus>\n </Options>\n \n ...\n</SetAllocation>",
        "type": "json"
      },
      {
        "title": "XML SetAllocation (Submit to all channels excluding Gomio and Hostelsclub)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<SetAllocation>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n \n <Channels>\n   <Channel>all</Channel>\n   <Channel exclude=\"true\">gom</Channel>\n   <Channel exclude=\"true\">hc</Channel>\n </Channels>\n \n <Allocations>\n   ...\n </Allocations>\n</SetAllocation>",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/SetRoomTypes",
    "title": "SetRoomTypes",
    "name": "SetRoomTypes",
    "group": "PMS",
    "description": "<p>This method allows you to create, update or remove rooms on myallocator.com. Please note that you can only send a single CreateRooms OR UpdateRooms OR RemoveRooms.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "optional": true,
            "field": "RoomId",
            "description": "<p>Room</p> "
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
            "description": "<p>How many rooms of this type there are. This option doesn&#39;t actually limit how many rooms can be set as available, it&#39;s only informational.</p> "
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
            "description": "<p>\\textit{true} if it&#39;s a private room, \\textit{false} for dormitories.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Gender",
            "description": "<p>Only needed for dormitories. \\textit{MA} for males, \\textit{FE} for females, \\textit{MI} if mixed.</p> "
          },
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
    "examples": [
      {
        "title": "XML Request:",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SetRoomTypes>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <CreateRooms>\n \t<RoomTypes>\n     <RoomType>\n       <Label>2-bed private with sea-view</Label>\n       <Units>4</Units>\n       <Occupancy>2</Occupancy>\n       <PrivateRoom>true</PrivateRoom>    \n     </RoomType>\n     <RoomType>\n       <Label>6-bed female dorm</Label>\n       <Units>3</Units>\n       <Occupancy>6</Occupancy>\n       <Gender>FE</Gender>\n       <PrivateRoom>false</PrivateRoom>    \n     </RoomType>\n   </RoomTypes>\n </CreateRooms>\n</SetRoomTypes>",
        "type": "json"
      },
      {
        "title": "JSON Request:",
        "content": "{\n\t'Rooms': [\n\t\t{\n\t\t\t'RoomId':1234,\n\t\t\t'PMSRoomId':'IdOfRoomOnPMS',\n\t\t\t'Label':'Name of Room',\n\t\t\t'Units':2,\n\t\t\t'Occupancy':4,\n\t\t\t'PrivateRoom':true,\n\t\t\t'Gender':'MI',\n\t\t},\n\t\t{\n\t\t\t'RoomId':1234,\n\t\t\t'PMSRoomId':'IdOfRoomOnPMS',\n\t\t\t'Label':'Name of Room',\n\t\t\t'Units':2,\n\t\t\t'Occupancy':4,\n\t\t\t'PrivateRoom':true,\n\t\t\t'Gender':'MI',\t\t\n\t\t}\n\t\t]\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "XML Response (creating a room):",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetRoomTypesResponse>\n <Success>true</Success>\n <RoomTypeIds>\n \t<RoomTypeId>35</RoomTypeId>\n \t<RoomTypeId>36</RoomTypeId>\n </RoomTypeIds>\n</SetRoomTypesResponse>",
          "type": "json"
        },
        {
          "title": "XML Response (success SetRooms response)",
          "content": "<SetRoomTypesResponse>\n <Success>true</Success>\n <RoomTypeIds>\n \t<RoomTypeId>35</RoomTypeId>\n \t<RoomTypeId>36</RoomTypeId>\n </RoomTypeIds>\n</SetRoomTypesResponse>",
          "type": "json"
        },
        {
          "title": "XML Request (Removing a room)",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SetRoomTypes>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <RemoveRooms>\n   <RoomTypeIds>\n     <RoomTypeId>35</RoomTypeId>\n     <RoomTypeId>36</RoomTypeId>\n   </RoomTypeIds>\n </RemoveRooms>\n</SetRoomTypes>",
          "type": "json"
        },
        {
          "title": "XML Response SetRooms (Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<SetRoomTypesResponse>\n  <Success>true</Success>\n</SetRoomTypesResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserCreate",
    "title": "UserCreate",
    "name": "UserCreate",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "Email",
            "description": "<p>Requested Email</p> "
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
        ]
      }
    },
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed.     previously known as SetLogin/CreateLogin</p> ",
    "examples": [
      {
        "title": "XML Request - Creating a customer account",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserCreate>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <UserId>New Customer Id</UserId>\n <UserPassword>New Customer Password</UserPassword>\n <CustomerFirstName>Customer first name</CustomerFirstName>\n <CustomerLastName>Customer family name</CustomerLastName>\n <CustomerEmail>Customer email address</CustomerEmail>\n</UserCreate>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserCreateResponse> \n <Success>true</Success>\n</UserCreateResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserExists",
    "title": "UserExists",
    "name": "UserExists",
    "group": "PMS",
    "description": "<p>This method checks to see if a User or Email is already registered.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "Email",
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
          "title": "XML GetUpdateStatus Response",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<UserExists>\n <UserIdExists>1</UserIdExists>\n <EmailExists>1</EmailExists>\n</UserExists>",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "XML UserManager Exists Request ",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<UserExists>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <Method>Exists</Method>\n <UserId>requested-username</UserId>\n <Email>user@domain.com</EmailId>\n</UserExists>",
        "type": "json"
      },
      {
        "title": "JSON UserExists Request",
        "content": "{\n 'Auth/VendorId':'Your Vendor ID',\n 'Auth/VendorPassword':'Your Vendor Password',\n 'UserId':'requested-username',\n 'Email':'user@domain.com'\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserLogin",
    "title": "UserLogin",
    "name": "UserLogin",
    "group": "PMS",
    "description": "<p><strong> EXPERIMENTAL </strong></p> ",
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
            "field": "session",
            "description": "<p>a session token</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML UserLogin Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserLogin>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n</Auth>\n</UserLogin>",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "Content-Type: application/json\n{ \n 'Auth/UserId':'your username',\n 'Auth/UserPassword':'your password'\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserModify",
    "title": "UserModify",
    "name": "UserModify",
    "group": "PMS",
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed.     previously known as SetLogin/CreateLogin</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID  (required if not linked to vendor)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password (required if not linked to vendor)</p> "
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
            "field": "Email",
            "description": "<p>Requested Email</p> "
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
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response - Updating a login and property",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserModifyResponse> \n <Success>true</Success>\n</UserModifyResponse>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
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
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<VendorSet>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <Callback>\n   <URL>http://www.yourdomain.com/myallocator/callback.cgi</URL>\n   <Password>very secret password</Password>\n </Callback>\n</VendorSet>",
        "type": "json"
      },
      {
        "title": "JSON VendorSet",
        "content": "{\n   'Auth/VendorId':'Your Vendor ID',\n   'Auth/VendorPassword':'Your Vendor Password',\n   'Callback/URL':'http://www.yourdomain.com/myallocator/callback.cgi',\n   'Callback/Password':'very secret password',\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserPasswordRecover",
    "title": "UserPasswordRecover",
    "name": "UserPasswordRecover",
    "group": "PMS_apiDescription____EXPERIMENTAL___",
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML UserPasswordRecover Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<UserPasswordRecover>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n</Auth>\n</UserPasswordRecover>",
        "type": "json"
      },
      {
        "title": "JSON Hello Request",
        "content": "Content-Type: application/json\n{ \n 'Auth/UserId':'your username',\n 'Auth/UserPassword':'your password'\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS_apiDescription____EXPERIMENTAL___"
  }
] });