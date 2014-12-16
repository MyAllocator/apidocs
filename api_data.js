define({ "api": [
  {
    "group": "Introduction",
    "version": "201408.0.0",
    "type": "",
    "url": "{}",
    "title": "Welcome",
    "name": "Welcome",
    "description": "<p><strong> Usage </strong></p> <p> If you would like to use the myallocator.com PMS API you need to request a vendor ID and password by emailing devhelp@myallocator.com.  The vendor_id + vendor_password will need to be submitted with every request.</p> <p> Your customers need to create an account on myallocator.com before they can use the API (or you need to create one for them).   The credentials (user/password) must be stored by you and sent with each request.</p> <p> <strong> The Basics </strong></p> <p> There are three API methods <em>most</em> systems will use.   The first one is GetProperties, which will return with a list of properties configured on myallocator.com.   You&#39;ll need the PropertyID from GetProperties for the other two methods.</p> <p> The second method is GetRoomTypes, which returns a list of rooms configured on myallocator.com.   These need to be mapped to the rooms in your software.  Finally, and most importantly, SetAllocation uploads availability to the channels.   The customer is required to add all their channel credentials on myallocator.com before being able to update availability.</p> <p> PMS integration guide:  <a href=\"https://docs.google.com/document/d/1_OuI0Z6rTkkuA9xxlJUvhXlazJ9w_iqsp1QzIj4gb2U/edit?usp=sharing\">https://docs.google.com/document/d/1_OuI0Z6rTkkuA9xxlJUvhXlazJ9w_iqsp1QzIj4gb2U/edit?usp=sharing</a></p> <p> <strong> XML vs. JSON Requests  </strong></p> <p> The service URLs are:</p> <ul> <li>JSON - <a href=\"https://api.myallocator.com/pms/v201408/json/MethodName\">https://api.myallocator.com/pms/v201408/json/MethodName</a></li> <li><p>XML - <a href=\"https://api.myallocator.com/pms/v201408/xml/MethodName\">https://api.myallocator.com/pms/v201408/xml/MethodName</a></p> <p>In the URL above the Version is 201408, this version will periodically be changed as new features are added. The json|xml denotes the protocol for how requests/responses will be formatted. </p> <p>MyAllocator can be accessed via REST using eithe a JSON or XML syntax. </p> </li> <li>XML: Requests to our server need to be send using the POST method. The XML string should be stored in a parameter called &#39;xmlRequestString&#39;. Using standard HTML form encoding.</li> <li><p>JSON offers simplified parsing and low transport overhead and is passed in the field &#39;json&#39; using standard HTML form encoding.</p> <p><strong> Using an SDK </strong> Software Development Kits for several popular languages are available at <a href=\"http://github.com/myallocator\">http://github.com/myallocator</a>  If you don&#39;t see your language listed please let us know and we&#39;ll add it. </p> <p><strong> Following Updates </strong> We will announce major releases via github. Please &quot;watch&quot; the apidocs repo.</p> </li> </ul> ",
    "error": {
      "examples": [
        {
          "title": "JSON error response",
          "content": "{\n   \"Error\": {\n       \"Id\": 3,\n       \"Message\": \"Invalid user or user password\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "XML error response",
          "content": " <MethodResponse>\n  <Errors>\n   <Error>\n     <ErrorId>3</ErrorId>\n     <ErrorMsg>Invalid user or user password</ErrorMsg>\n   </Error>\n  </Errors>\n </MethodResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "Introduction"
  },
  {
    "type": "get",
    "url": "/ARIUpdate",
    "title": "ARIUpdate",
    "name": "ARIUpdate",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)# @apiParam (Request) {String} Auth/VendorId            Your Vendor ID</p> "
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
            "description": "<p>If true the call returns immediately, and the caller should use ARIUpdateStatus to query.</p> "
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": ".Options.FailIfUpdateActive",
            "description": "<p>If true the call will fail if another update is currently running (rather than block with potentially old data)</p> "
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
            "field": ".ExcludeChannels",
            "description": "<p>Container node (array) for Channels to be implicitly excluded (useful when Channel Id &#39;all&#39; is in)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".ExcludedChannels.Channel",
            "description": "<p>(XML ONLY) A XML node containing the channel that the customer wants to update. (Use ChannelList for ChannelId&#39;s)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": ".ExcludedChannels.ChannelId",
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
            "optional": false,
            "field": ".Allocations.Allocation.Units",
            "description": "<p>How many beds or rooms should be available on this day. Whether it&#39;s beds or rooms depends on whether the room is a dorm or a private room. To remove allocation set Units to 0.</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": ".Allocations.Allocation.MinStay",
            "description": "<p>Specify the minumum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": ".Allocations.Allocation.MaxStay",
            "description": "<p>Specify the maximum number of days a customer is allowed to stay. Not all channels support this feature. Needs to be 1 or higher. (optional)</p> "
          },
          {
            "group": "Request",
            "type": "Container",
            "optional": false,
            "field": ".Allocations.Allocation.Prices",
            "description": "<p>(XML ONLY) Container for Price nodes.</p> "
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": false,
            "field": ".Allocations.Allocation.Prices.Price",
            "description": "<p>(XML ONLY) Price per person for shared/dorm rooms or per room for private rooms.</p> "
          },
          {
            "group": "Request",
            "type": "Attribute",
            "allowedValues": [
              "\"true\""
            ],
            "optional": false,
            "field": ".Allocations.Allocation.Prices.Price.weekend",
            "description": "<p>(XML ONLY) Price per person for shared/dorm rooms or per room for private rooms. In XML: You can submit two Price tags. The default one and one with the attribute \\textit{weekend=&quot;true&quot;}. If a Price tag with this attribute has been submitted the rate only applies to weekdays set by the customer as weekends (see PropertyList for which days are set as weekend days).</p> "
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": false,
            "field": ".Allocations.Allocation.Price",
            "description": "<p>(JSON ONLY) Price per person for shared/dorm rooms or per room for private rooms.</p> "
          },
          {
            "group": "Request",
            "type": "Currency",
            "optional": false,
            "field": ".Allocations.Allocation.Price-Weekend",
            "description": "<p>(JSON ONLY) price for days marked as &quot;Weekend&quot;</p> "
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
            "description": "<p>Check with the list of errors below. Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the error only applies to a specific channel.</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "Warnings/Warning",
            "description": "<p>Check with the list of errors below. Might contain the attribute it{channel=&quot;..&quot;} to indicate whether the warning only applies to a specific channel.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "XML ARIUpdate Response (Full Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings>\n\t<Warning channel=\"hc\">\n\t  <WarningId>207</WarningId>\n\t  <WarningMsg>\n\t  \tSkipped room type (not setup with channel).\n\t  </WarningMsg>\n\t</Warning>  \n </Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Warning Response (at least one channel succeeded)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>partial</Success>\n <Errors>\n\t<Error channel=\"adv\">\n\t  <ErrorId>15</ErrorId>\n\t  <ErrorMsg>\n\t\t Missing or wrong channel credentials on myallocator.com\n\t  </ErrorMsg>\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Failed Response (all channels came back with errors)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>false</Success>\n <Errors>\n\t<Error channel=\"adv\">\n\t  <ErrorId>15</ErrorId>\n\t  <ErrorMsg>\n\t  \tMissing or wrong channel credentials on myallocator.com\n\t  </ErrorMsg>\t\t\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate Failed update (error before submitting to any channel)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>false</Success>\n <Errors>\n\t<Error\">\n\t  <ErrorId>17</ErrorId>\n\t  <ErrorMsg>\n\t  \tStart date too far in the future (>2 years)\n\t  </ErrorMsg>\t\t\n\t</Error>\n </Errors>\n <Warnings></Warnings>\n</ARIUpdateResponse>",
          "type": "json"
        },
        {
          "title": "XML ARIUpdate QueryForStatus=true",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ARIUpdateResponse>\n <Success>true</Success>\n <Errors></Errors>\n <Warnings></Warnings>\n  <UpdateId>832522158</UpdateId>\n</ARIUpdateResponse>",
          "type": "json"
        }
      ]
    },
    "description": "<p>An allocation sets the number of rooms or beds (depending on whether the  room type is a private room or shared/dorm) available during  any specific time frame. For more details see below.</p> <p> <strong> Pricing </strong>  In both XML and JSON it is possible to submit two Prices.   A default &quot;Weekday&quot; price and one with the attribute it{weekend=&quot;true&quot;}. If a Price tag with this attribute has been submitted the rate only applies to weekdays set by the customer as weekends (see PropertyList for which days are set as weekend days).</p> <p> <strong> Handling Errors &amp; Warnings </strong></p> <p> The response will always include the Success, Errors and Warnings tags. If  Success is set to &quot;true&quot; the Errors tag will be empty. If Success is set to  &quot;partial&quot; or &quot;false&quot; at least one Error tag is included.</p> <p> <strong> Submitting to ALL channels </strong></p> <p> You can also submit to all available channels without specifying explicity which  channels to update. Use the channel code &quot;all&quot; to do this. Channels that are not   set up by the user will be skipped as indicated by a warning. </p> <p> It is also possible to submit to all channels while excluding certain channels.  Add the attribute exclude=&quot;true&quot; to skip a channel. See example below.  Use the channel code &quot;all&quot; to do this.</p> <p> <strong> Running Jobs in the Background (ARIUpdateStatus) </strong></p> <p> You can also run the ARIUpdate update in the background and query  for the updates using ARIUpdateStatus. This enables you  to show the update progress to the user while it&#39;s still running. To enable  this feature you need to add the node QueryForStatus (see example)</p> <p> If QueryForStatus is true then the ARIUpdateResponse will contain the additional parameter UpdateId, which  is needed for ARIUpdateStatus</p> ",
    "examples": [
      {
        "title": "JSON ARIUpdate",
        "content": "{ \n 'Auth/UserId':'your username',\n 'Auth/UserPassword':'your password',\n 'Channels': [ 'hc','iwb' ],\n 'Allocations': [\n\t{\n\t'RoomId':'59',\n\t'StartDate':'2010-06-01',\n\t'EndDate':'2010-06-01',\n\t'Units':'3',\n\t'MinStay':'1',\n\t'MaxStay':'30',\n\t'Price':'20.00',\n\t'Price-Weekend':'20.00',\n\t}\n\t]\n}",
        "type": "json"
      },
      {
        "title": "XML ARIUpdateRequest",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdate>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n\n<Channels>\n\t<Channel>hc</Channel>\n\t<Channel>iwb</Channel>\n </Channels>\n \n <Allocations>\n\t<Allocation>\n\t  <RoomId>59</RoomId>\n\t  <StartDate>2010-06-01</StartDate>\n\t  <EndDate>2010-08-12</EndDate>\n\t  <Units>3</Units>\n\t  <MinStay>1</MinStay>\n\t  <MaxStay>30</MaxStay>\n\t  <Prices>\n\t\t <Price>20.00</Price>\n\t\t <Price weekend=\"true\">25.00</Price>\n\t  </Prices>\n\t</Allocation>\n </Allocations>\n</ARIUpdate>",
        "type": "json"
      },
      {
        "title": "XML Request (Status Check)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdate>\n <Auth>\n\t...\n </Auth>\n \n <Options>\n\t<QueryForStatus>true</QueryForStatus>\n </Options>\n\t \n ...\n</ARIUpdate>",
        "type": "json"
      },
      {
        "title": "XML ARIUpdate (Submit to all channels excluding Gomio and Hostelsclub)",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdate>\n <Auth>\n\t<UserId>Customer User ID</UserId>\n\t<UserPassword>Customer Password</UserPassword>\n\t<PropertyId>Property ID on myallocator.com</PropertyId>\n\t<VendorId>Your Vendor ID</VendorId>\n\t<VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n \n <Channels>\n\t<Channel>all</Channel>\n\t<Channel exclude=\"true\">gom</Channel>\n\t<Channel exclude=\"true\">hc</Channel>\n</Channels>\n \n <Allocations>\n\t...\n </Allocations>\n</ARIUpdate>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/ARIUpdateStatus",
    "title": "ARIUpdateStatus",
    "name": "ARIUpdateStatus",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)# @apiParam (Request) {String} Auth/VendorId            Your Vendor ID</p> "
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
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ARIUpdateStatus>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n \n <UpdateId>832522158</UpdateId>\n</ARIUpdateStatus>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/AssociatePropertyToPMS",
    "title": "AssociatePropertyToPMS",
    "name": "AssociatePropertyToPMS",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>This call is mostly here for future expansion in 2015.  Creates a permanent link between an existing myallocator property and a PMS Vendor.   The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),   then in the background pass the user credentials to AssociatePropertyToPMS and a link will be created.  Any future API calls will not require a Password. </p> <p> NOTE: *Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p> <p> NOTE: Although Auth/UserPassword is identified in this call as <em>required</em> if a prior AssociateUserToPMS call has been made then it is not actually required.</p> ",
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
            "description": "<p>A 48 character shared secret that can be passed in lieu of Auth/UserId Auth/UserPassword</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociatePropertyToPMS",
        "content": "{\n'Auth/UserId':'login on myallocator.com',\n'Auth/UserPassword':'password for myallocator.com',\n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'Auth/PropertyId':'property id from myallocator',\n'PMSPropertyId':'username-on-the-remote-pms-system',\n}",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<AssociatePropertyToPMS>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSPropertyId>username-on-the-remote-pms-system</PMSUserId>\n</AssociatePropertyToPMS>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/AssociateUserToPMS",
    "title": "AssociateUserToPMS",
    "name": "AssociateUserToPMS",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>Creates a permanent link between an existing myallocator user and a PMS Vendor.   The PMS Vendor should securely obtain the users myallocator user-id and password (but do not store them),   then in the background pass the user credentials to AssociateUserToPMS and a link will be created.  Any future API calls will not require UserPassword. </p> <p> NOTE: *Users and Properties created by a PMS Vendor will automatically be linked to that PMS (this call is not necessary)</p> <p> NOTE: Although Auth/UserPassword is identified in this call as <em>required</em> if a prior AssociateUserToPMS call has been made then it is not actually required.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
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
            "description": "<p>Return this to us instead of a Auth/UserId and Auth/UserPassword</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON AssociateUserToPMS",
        "content": "{\n'Auth/UserId':'login on myallocator.com',\n'Auth/UserPassword':'password for myallocator.com',\n'Auth/VendorId':'your vendor id',\n'Auth/VendorPassword':'your vendor password',\n'PMSUserId':'username-on-the-remote-pms-system',\n}",
        "type": "json"
      },
      {
        "title": "XML AssociateUserToPMS",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<AssociateUserToPMS>\n<Auth>\n  <UserId>Customer User ID</UserId>\n  <UserPassword>Customer Password</UserPassword>\n  <VendorId>Your Vendor ID</VendorId>\n  <VendorPassword>Your Vendor Password</VendorPassword>\n</Auth>\n<PMSUserId>username-on-the-remote-pms-system</PMSUserId>\n</AssociateUserToPMS>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "GET",
    "url": "/BookingAction",
    "title": "BookingAction",
    "name": "BookingAction",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>Booking provides the ability to send incremental &#39;intents&#39; which modify a booking.  Currently a limited number of actions are supported, however in the future new actions will be added. Actions are processed in sequence, the first error encountered stops all future actions. After any successful modification to a booking a callback trigger is modified, and the modified timestamp is set.</p> <p>== Supported Actions ==</p> <ul> <li>CANCEL?reason=text</li> <li>UNCANCEL</li> <li>ACK        adds the acknowlegement flags</li> <li>UNACK    removes the acknowledgement flag</li> </ul> ",
    "examples": [
      {
        "title": "JSON Request",
        "content": "{\n\t'Auth/UserToken':'',\n\t'Auth/VendorId':'',\n\t'Auth/VendorPassword':'',\n\t'OrderId':'XXXXX',\n\t'Actions':[\n\t\t'CANCEL?reason=a%20very%20good%20reason',\n\t\t]\n}",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Action",
            "optional": false,
            "field": "CANCEL",
            "description": "<p>changes an order state to cancelled, sets cancellation time.. triggers notification.</p> "
          },
          {
            "group": "Parameter",
            "type": "Action",
            "optional": false,
            "field": ".CANCEL.reason",
            "description": "<p>a brief explantion for why the booking is being cancelled.</p> "
          },
          {
            "group": "Parameter",
            "type": "Action",
            "optional": false,
            "field": "UNCANCEL",
            "description": "<p>removes cancellation flags.</p> "
          },
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
    }
  },
  {
    "type": "get",
    "url": "/BookingList",
    "title": "BookingList",
    "name": "BookingList",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId         Property ID on myallocator.com</p> "
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/BookingPaymentDownload",
    "title": "BookingPaymentDownload",
    "name": "BookingPaymentDownload",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>This call can be used to retrieve credit card details from specific bookings.   This applies only to channels that currently send us the credit card details (booking.com, Expedia, BookNow) and only for bookings that were created after connection with myallocator has been made.</p> <p> This API call is not enabled for vendors by default. You need to send us your PCI compliance certification before this can be done. It&#39;s also neccessary to send along the credit card viewing password (different from the user login). For best practise do not store this password in your system but rather get it from the customer and send it on directly. This way the password will only be in the memory and not as accessible.</p> <p> The credit card viewing password needs to be changed ever 365 by the property. It can happen that the property has reset their password in which case our support team needs to reencrypt the existing details. This is not an automatic process and can take between 1 and 3 business days.</p> <p> Applicable error codes are 26 - 30. Even though logically this would be a GET call, we use POST for this one to prevent the password from going to the webserver log files.</p> <p> Bookings can have multiple credit card details stored within them, as they have been updated by the guest. The response will list credit card details with the most recent credit card first.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/ChannelList",
    "title": "ChannelList",
    "name": "ChannelList",
    "version": "201408.0.0",
    "group": "PMS",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "JSON",
            "description": "<p>ChannelList Response {     &#39;Channels&#39;:{         &#39;cid&#39;:{             &#39;name&#39;:&#39;Name of Channel (ex: Booking.com),             &#39;signupLink&#39;=&gt;&#39;<a href=\"http://domain/url.to.signup\">http://domain/url.to.signup</a>&#39;,             &#39;requireActivation&#39;:&#39;true|false&#39;,             &#39;calendarBased&#39;:&#39;true|false&#39;,             &#39;isLive&#39;=&gt;&#39;true|false&#39;,             &#39;isBeta&#39;=&gt;&#39;true|false&#39;,             &#39;PropertyInput&#39;:[                 { &#39;name&#39;:&#39;field_id&#39;, label=&gt;&#39;Name of Input&#39;, type=&gt;&#39;inputtype&#39; },                 { &#39;name&#39;:&#39;field_two&#39;, label=&gt;&#39;User Prompt&#39;, type=&gt;&#39;inputtype&#39; },                 ]             &#39;RoomInput&#39;:[                 { &#39;name&#39;:&#39;field_id&#39;, label=&gt;&#39;Name of Input&#39;, type=&gt;&#39;inputtype&#39; },                 { &#39;name&#39;:&#39;field_two&#39;, label=&gt;&#39;User Prompt&#39;, type=&gt;&#39;inputtype&#39; },                 ]             }         } }</p> "
          }
        ],
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
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<ChannelListResponse>\n  <Channels>\n    <Channel>\n \t\t<id>boo</id>\n\t\t<name>Booking.com</name>\n\t\t<signupLink>http://www.someurl</signuplink>\n    </Channel>\n</ChannelListResponse>",
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/HelloWorld",
    "title": "HelloWorld",
    "name": "HelloWorld",
    "version": "201408.0.0",
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/LoopARIList",
    "title": "LoopARIList",
    "name": "LoopARIList",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>Displays a range of Availability and Rate information for the Loopback Channel. For now, this dumps all data in the system (for the Property)</p> ",
    "examples": [
      {
        "title": "JSON Request",
        "content": "{\n\t'Auth/UserToken':'',\n\t'Auth/VendorId':'',\n\t'Auth/VendorPassword':''\n}",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/LoopBookingAction",
    "title": "LoopBookingAction",
    "name": "LoopBookingAction",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>See &quot;BookingAction&quot; for how to use this call.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "GET",
    "url": "/LoopBookingCreate",
    "title": "LoopBookingCreate",
    "name": "LoopBookingCreate",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>Create a new booking in the Loopback Channel.  Parameters are optional and if not specified then booking will be populated with DWIW (Do What I Want) style data. See the &quot;BookingList&quot; api call for a complete discussion of Booking related fields.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
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
            "description": "<p>YYYY-MM-DD</p> "
          },
          {
            "group": "Booking",
            "type": "Date",
            "optional": true,
            "field": ".EndDate",
            "description": "<p>YYYY-MM-DD</p> "
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
        "content": "{\n'Auth/VendorId':''\n'Auth/VendorPassword':'',\n'Auth/UserToken':'',\n'Auth/PropertyId':'',\n'Booking':{\n\t'StartDate':'YYYY-MM-DD',\n\t'EndDate':'YYYY-MM-DD',\n\t'RoomId':###,\n\t'Units':##,\n\t'Price':'3.00',\n\t}\n}",
        "type": "json"
      },
      {
        "title": "XML LoopBookingCreate Request",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<LoopBookingCreate>\n<Auth>\n\t<UserId>Customer User ID</UserId>\n\t<UserPassword>Customer Password</UserPassword>\n\t<PropertyId>###</PropertyId>\n</Auth>\n<Booking>\n\t<StartDate>YYYY-MM-DD</StartDate>\n\t<EndDate>YYYY-MM-DD</EndRate>\n</Booking>\n</LoopBookingCreate>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/LoopBookingList",
    "title": "LoopBookingList",
    "name": "LoopBookingList",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>Displays all bookings (or a range) in the Loopback Channel. See BookingList for examples of parameters/incoming calls and output.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyChannelList",
    "title": "PropertyChannelList",
    "name": "PropertyChannelList",
    "version": "201408.0.0",
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
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId         Property ID on myallocator.com</p> "
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
        "title": "XML PropertyChannelList",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyChannelList>\n  <Auth>\n    <UserId>Customer User ID</UserId>\n    <UserPassword>Customer Password</UserPassword>\n    <PropertyId>Property ID on myallocator.com</PropertyId>\n    <VendorId>Your Vendor ID</VendorId>\n    <VendorPassword>Your Vendor Password</VendorPassword>\n  </Auth>\n</PropertyChannelList>",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyCreate",
    "title": "PropertyCreate",
    "name": "PropertyCreate",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
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
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyCreate>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <PropertyName>Name of property</PropertyName>\n <ExpiryDate>2012-05-05</ExpiryDate>\n <Currency>EUR</Currency>\n <Country>DE</Country>\n <Breakfast>IN</Breakfast>\n</PropertyCreate>",
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
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyList",
    "title": "PropertyList",
    "name": "PropertyList",
    "version": "201408.0.0",
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
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId         Property ID on myallocator.com</p> "
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
            "description": "<p>Day &amp; Shows which days are marked as weekend days by the customer on Myallocator. Monday = 1, Sunday = 7. The name of the weekday is also given in the \\textit{name} property. See ARIUpdate for information on when this is used.</p> "
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/PropertyModify",
    "title": "PropertyModify",
    "name": "PropertyModify",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
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
            "description": "<p>Can be IN (included), EX (excluded) or empty.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request - Modifying a property",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<PropertyModify>\n <Auth>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <PropertyName>Name of property</PropertyName>\n <ExpiryDate>2012-05-05</ExpiryDate>\n <Currency>EUR</Currency>\n <Country>DE</Country>\n <Breakfast>IN</Breakfast>\n</PropertyModify>",
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
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomAvailabilityList",
    "title": "RoomAvailabilityList",
    "name": "RoomAvailabilityList",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>This call can be used to query for all data that we hold for a specific property and date range.   The date range can only be 31 days as the maximum. You can query multiple times if you need a longer date range.</p> <p> A MaxStay setting of 0 means &quot;unrestricted&quot;.   The 48 and 49 in the response example below refer to the room ID as returned by GetRooms (XML API).</p> <p> <strong> Compatibility: </strong>    this was formerly available at: <a href=\"https://myallocator.com/en/api/data\">https://myallocator.com/en/api/data</a></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
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
    "success": {
      "examples": [
        {
          "title": "JSON RoomAvailabilityList",
          "content": "    {\n    \"Rooms\": [\n          {\n     \t  \"RoomId\": 48,\n          \"PropertyId\": 1234,\n          \"RoomName\": \"1-person private\",\n          \"Data\": [\n            {\n              \"Date\": \"2014-03-15\",\n              \"Units\": 2,\n              \"Price\": 33,\n              \"MinStay\": 1,\n              \"MaxStay\": 7,\n              \"Closed\": false,\n              \"ClosedForArrival\": false,\n              \"ClosedForDeparture\": false\n            },\n            {\n              \"Date\": \"2014-03-16\",\n              \"Units\": 2,\n              \"Price\": 33,\n              \"MinStay\": 1,\n              \"MaxStay\": 7,\n              \"Closed\": false,\n              \"ClosedForArrival\": false,\n              \"ClosedForDeparture\": false\n            }\n          ]\n        },\n        {\n          \"RoomId\": 49,\n          \"PropertyId\": 1,\n          \"RoomName\": \"5-person male shared\",\n          \"Data\": [\n            {\n              \"Date\": \"2014-03-15\",\n              \"Units\": 0,\n              \"Price\": 0,\n              \"MinStay\": 1,\n              \"MaxStay\": 7,\n              \"Closed\": false,\n              \"ClosedForArrival\": false,\n              \"ClosedForDeparture\": false\n            },\n            {\n              \"Date\": \"2014-03-16\",\n              \"Units\": 0,\n              \"Price\": 0,\n              \"MinStay\": 1,\n              \"MaxStay\": 7,\n              \"Closed\": false,\n              \"ClosedForArrival\": false,\n              \"ClosedForDeparture\": false\n            }\n          ]\n        }\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomCreate",
    "title": "RoomCreate",
    "name": "RoomCreate",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>This method allows you to create, update or remove rooms on myallocator.com. Please note that you can only send a single RoomCreate, RoomUpdate, or RoomRemove</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)# @apiParam (Request) {String} Auth/VendorId            Your Vendor ID</p> "
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "XML Request:",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomCreate>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <CreateRooms>\n \t<RoomTypes>\n     <RoomType>\n       <Label>2-bed private with sea-view</Label>\n       <Units>4</Units>\n       <Occupancy>2</Occupancy>\n       <PrivateRoom>true</PrivateRoom>    \n     </RoomType>\n     <RoomType>\n       <Label>6-bed female dorm</Label>\n       <Units>3</Units>\n       <Occupancy>6</Occupancy>\n       <Gender>FE</Gender>\n       <PrivateRoom>false</PrivateRoom>    \n     </RoomType>\n   </RoomTypes>\n </CreateRooms>\n</RoomCreate>",
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
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<CreateRoomResponse>\n <Success>true</Success>\n <RoomTypeIds>\n \t<RoomTypeId>35</RoomTypeId>\n </RoomTypeIds>\n</CreateRoomResponse>",
          "type": "json"
        },
        {
          "title": "XML Response (success SetRooms response)",
          "content": "<CreateRoomResponse>\n <Success>true</Success>\n <RoomTypeIds>\n \t<RoomTypeId>35</RoomTypeId>\n </RoomTypeIds>\n</CreateRoomResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomList",
    "title": "RoomList",
    "name": "RoomList",
    "version": "201408.0.0",
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
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)@apiParam (Request) {String} Auth/PropertyId         Property ID on myallocator.com</p> "
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
          "title": "XML RoomList v1 Success Response:",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomListResponse>\n <RoomTypes>\n   <RoomType>\n     <Id>59</Id>\n     <Label>1-bed private ensuite</Label>\n     <Units>3</Units>\n     <Occupancy>1</Occupancy>\n     <Beds>1</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>      \n   </RoomType>\n   \n   <RoomType>\n     <Id>63</Id>\n     <Label>2-bed private</Label>\n     <Units>4</Units>\n     <Occupancy>2</Occupancy>\n     <Beds>2</Beds>\n     <Gender>MI</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>true</PrivateRoom>    \n   </RoomType>\n   \n   <RoomType>\n     <Id>49</Id>\n     <Label>5-bed female shared</Label>\n     <Units>3</Units>\n     <Occupancy>5</Occupancy>\n     <Beds>5</Beds>\n     <Gender>FE</Gender>\n     <DoubleBed>false</DoubleBed>\n     <Ensuite>false</Ensuite>\n     <PrivateRoom>false</PrivateRoom>\n   </RoomType>\n  </RoomTypes>\n</RoomListResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomRemove",
    "title": "RoomRemove",
    "name": "RoomRemove",
    "version": "201408.0.0",
    "group": "PMS",
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
          "title": "XML Request (Removing a room)",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<RoomRemove>\n <Auth>\n   <UserId>Customer User ID</UserId>\n   <UserPassword>Customer Password</UserPassword>\n   <PropertyId>Property ID on myallocator.com</PropertyId>\n   <VendorId>Your Vendor ID</VendorId>\n   <VendorPassword>Your Vendor Password</VendorPassword>\n </Auth>\n <RemoveRooms>\n   <RoomTypeIds>\n     <RoomTypeId>35</RoomTypeId>\n     <RoomTypeId>36</RoomTypeId>\n   </RoomTypeIds>\n </RemoveRooms>\n</RoomRemove>",
          "type": "json"
        },
        {
          "title": "XML Response SetRooms (Success)",
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RoomRemoveResponse>\n  <Success>true</Success>\n</RoomRemoveResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/RoomUpdate",
    "title": "RoomUpdate",
    "name": "RoomUpdate",
    "version": "201408.0.0",
    "group": "PMS",
    "description": "<p>uses the same parameters (and response) as &quot;RoomCreate&quot;</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserCreate",
    "title": "UserCreate",
    "name": "UserCreate",
    "version": "201408.0.0",
    "group": "PMS",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserId",
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)# @apiParam (Request) {String} Auth/VendorId            Your Vendor ID</p> "
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
    "description": "<p>This method allows you to create customer accounts on myallocator.com. Before you can use this method we&#39;ll have to explicitly enable you for this functionality, as some aspects with regards to customer payment will need to be discussed.    previously known as SetLogin/CreateLogin</p> ",
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
          "content": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<UserCreateResponse> \n  <Success>true</Success>\n</UserCreateResponse>",
          "type": "json"
        }
      ]
    },
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/UserExists",
    "title": "UserExists",
    "name": "UserExists",
    "version": "201408.0.0",
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
            "description": "<p>Users unique ID     (required with Auth/UserPassword)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserPassword",
            "description": "<p>Users password        (required with Auth/UserId)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "Auth/UserToken",
            "description": "<p>Users auth token (see AssociateUserToPMS call to generate a Token)# @apiParam (Request) {String} Auth/VendorId            Your Vendor ID</p> "
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
        "title": "XML UserManager Exists Request ",
        "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<UserExists>\n  <Auth>\n    <VendorId>Your Vendor ID</VendorId>\n    <VendorPassword>Your Vendor Password</VendorPassword>\n  </Auth>\n  <Method>Exists</Method>\n  <UserId>requested-username</UserId>\n  <Email>user@domain.com</EmailId>\n</UserExists>",
        "type": "json"
      },
      {
        "title": "JSON UserExists Request",
        "content": " {\n  'Auth/VendorId':'Your Vendor ID',\n  'Auth/VendorPassword':'Your Vendor Password',\n  'UserId':'requested-username',\n  'Email':'user@domain.com'\n }",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "get",
    "url": "/VendorSet",
    "title": "VendorSet",
    "name": "VendorSet",
    "version": "201408.0.0",
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
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "PMS"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Channel Codes",
    "group": "_Appendix",
    "version": "201408.0.0",
    "name": "Channel_Codes",
    "description": "<p><strong> This list needs to be automatically updated, it is currently out of date </strong></p> <table> <thead> <tr> <th>Code</th> <th>Full name</th> <th>Updates up to</th> <th>Notes</th> </tr> </thead> <tbody> <tr> <td>all</td> <td>All configured channels</td> <td>see below</td> </tr> <tr> <td>loc</td> <td>myallocator.com only</td> <td>2 years</td> <td>Specify this channel if you <em>only</em> want to update to myallocator.com. Submitting to any other channel will also always save to myallocator.com</td> </tr> <tr> <td>hc</td> <td>Hostelsclub</td> <td>2 years</td> </tr> <tr> <td>hb</td> <td>Hostelbookers</td> <td>1 year</td> <td></td> </tr> <tr> <td>gom</td> <td>Gomio</td> <td>2 years</td> <td></td> </tr> <tr> <td>iwb</td> <td>InstantWorldBooking</td> <td>2 years</td> <td></td> </tr> <tr> <td>rtg</td> <td>RatesToGo</td> <td>variable</td> <td></td> </tr> <tr> <td>adv</td> <td>HotelAdvisor</td> <td>2 years</td> <td></td> </tr> <tr> <td>hrs</td> <td>HRS</td> <td>2 years</td> <td>*not live yet</td> </tr> <tr> <td>hde</td> <td>Hotel.de</td> <td>2 years</td> <td></td> </tr> <tr> <td>esc</td> <td>Escapio</td> <td>2 years</td> <td></td> </tr> <tr> <td>hi</td> <td>HIHostels</td> <td>2 years</td> <td></td> </tr> <tr> <td>rec</td> <td>Reconline (GDS)</td> <td>2 years</td> <td></td> </tr> <tr> <td>bp</td> <td>BudgetPlaces</td> <td>2 years</td> <td></td> </tr> <tr> <td>ct</td> <td>Cultuzz</td> <td>2 years</td> <td></td> </tr> <tr> <td>lmg</td> <td>BookingMarkets/LetMeGo</td> <td>2 years</td> <td></td> </tr> <tr> <td>hw</td> <td>Hostelworld</td> <td>2 years</td> <td></td> </tr> <tr> <td>bb</td> <td>BBPlanet</td> <td>1 year</td> <td></td> </tr> <tr> <td>etb</td> <td>EasyToBook</td> <td>2 years</td> <td></td> </tr> <tr> <td>ini</td> <td>InItalia</td> <td>1 year and 3 months</td> <td></td> </tr> <tr> <td>ago</td> <td>Agoda</td> <td>2 years</td> <td></td> </tr> <tr> <td>max</td> <td>MaxBooking</td> <td>2 years</td> <td></td> </tr> <tr> <td>eb</td> <td>EasyBookings</td> <td>2 years</td> <td></td> </tr> <tr> <td>ysh</td> <td>YourSpainHostel</td> <td>2 years</td> <td></td> </tr> <tr> <td>exp</td> <td>Expedia</td> <td>2 years</td> <td></td> </tr> <tr> <td>eb</td> <td>EasyBookings</td> <td>2 years</td> <td></td> </tr> <tr> <td>air</td> <td>AirBnb</td> <td>2 years</td> <td></td> </tr> <tr> <td>orb</td> <td>Orbitz</td> <td>2 years</td> <td></td> </tr> <tr> <td>rep</td> <td>TravelRepublic</td> <td>2 years</td> <td></td> </tr> <tr> <td>boo</td> <td>Booking.com</td> <td>2 years</td> <td></td> </tr> <tr> <td>(go2)</td> <td>Go2Hostels</td> <td>1 year</td> <td>Channel closed down Jan $1^{st}$ 2011</td> </tr> </tbody> </table> <p>*</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "type": "",
    "url": "{}",
    "title": "FAQ",
    "group": "_Appendix",
    "version": "201408.0.0",
    "name": "FAQ",
    "description": "<ul> <li><p><em>How should I deal with failed channel updates?</em> If the error is noted as non-fatal on the Error Code page then retry the update after a few minutes. Failing updates are not as rare as you would think because channels do go down and become unresponsive.</p> <p>Fatal errors should not be automatically retried as they need user intervention. Make sure to show the error message to the customer._</p> <ul> <li><em>Are there any limits on how many updates can be send at once?</em></li> </ul> <p>There is (currently) no limit, but you&#39;re strongly advised to split large updates (especially full refreshes) into smaller chunks of 30-60 days. This has the advantage that you can easily re-run failed chunks and it will make debugging problems easier.</p> <ul> <li><p><em>I cannot log in to myallocator with the test credentials. Why?</em> This is to avoid the settings for the test properties from being changed. You can however just register your own test property. Should you need more than the 30-day trial period let us know and we will extend it.</p> </li> <li><p><em>Callback: how do you know which customers belong to us?</em> The first time you send an update on behalf of a customer through our API this customer will be marked as a user of your PMS. From then on you will receive callbacks for this customer.</p> </li> <li><p><em>Can I send updates in parallel?</em> You can for different properties. What you should never do is send an update for a property without waiting for the previous update for this property to succeed/fail. Otherwise you can run into race-conditions where the later update succeeds before the first update, opening up availability on the channel unintentionally.</p> </li> <li><p><em>Why can there be multiple RoomTypeIds for a booking?</em> The same channel room can be assigned to multiple myallocator rooms. For this scenario we send the sum of available rooms/beds and the highest price of any available room that is mapped to this channel room. So the list of RoomTypeIds represents all matching rooms, but it does not mean that all of them were actually booked. Check out the warning on the Automatic Adjustments developer page for more details on how to adjust for this scenario.</p> </li> <li><p><em>Do I need PCI Certification for BookingPaymentDownload?</em> Yes. We require a PCI compliance certificate from you.  Most hostel and small PMS companies (those with less than $10m year in revenue) can use a Level 3 &quot;self&quot; certification.<br>Level 3 PCI Compliance simply requires you attest that you are following secure coding practices in your application, and server hosting environment. In most cases it will require you attain attestation from your server hosting and gateway  vendors to ensure a complete web of trust. More information: <a href=\"http://www.pcicompliance101.net/pci-dss-compliance.htm\">http://www.pcicompliance101.net/pci-dss-compliance.htm</a></p> </li> </ul> </li> </ul> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "group": "_Appendix",
    "type": "",
    "url": "{}",
    "title": "Our Todo List",
    "name": "Our_Todo_List",
    "version": "201408.0.0",
    "description": "<p>This API is currently considered &quot;beta&quot; and in active development.<br>It will be suitable for production use by mid December at which point v1 will be considered end of life.</p> <p>This is a list of Errata. This page will list known areas we are working on, if you have a bug please let us know. This is our internal list of stuff we know is broken, it will update throughout the day.</p> <ul> <li>NEED TO REGRESSION TEST v1</li> <li>New PHP SDK needs to be released onto github</li> <li>All calls need stricter incoming type checking, specifically at the container level. </li> <li>ARIUpdates may be slightly delayed (they are running in a staging environment)</li> <li>PMS Property ID cannot be used as an identification.</li> <li>Documentation: needs to be restructured, fix indenting, add Auth/PropertyId, designate container nodes using new syntax</li> <li>Documentation: need to add new error codes, possibly create a severity measure.</li> <li>Documentation: need to make list of channels and capabilities auto update</li> <li>Documentation: need to implement test harness in API + fix API URI parameter strings</li> <li>Documentation: need to fix title bar in API</li> <li>JSON - planning to add _method, _version to the request (which must match URI) in next release 201412</li> <li>Callback notifications for bookings cancelled via the API may be delayed, must be manually dispatched in staging environment.</li> <li>Callbacks need to support versioning</li> <li>propertyTokens are not fully implemented in all calls. </li> <li>If you receive an internal server error, it is not always gracefully handled.</li> <li>Error messaging on ARIUpdates on Channels needs to be improved. (Currently the same as legacy v1 API)</li> <li>ARIUpdate ExcludeChannels is not working in JSON</li> <li>AWS SQS notifications are not available in production (and will likely need some more live testing)</li> <li>v1 compat - Need to discuss issues with overlapping date ranges (currently allowed on v201408, not on v1)</li> <li>ARIUpdate allows negative max stay.</li> <li>Loop Bookings: may not display properly in the interface (some date bug?)</li> <li>Backend: Need to explore internal addState/useState on channels (is this even actually used?)</li> <li>Backend: Need to move channel status logging from mysql to redis</li> <li>Backend: Need to formalize the parameters/objects passed to upload_lt in each channel module for more legible internal codepath</li> <li>Backend: Migrate MyAllocator-&gt;channel_update into the ARIUpdate framework</li> <li>Backend: need to merge channel properties list in MyAllocator.pm into Channels.pm</li> </ul> <p>If you want to see historical (recent) changes to the API our documentation is hosted on github. <a href=\"https://github.com/MyAllocator/apidocs\">https://github.com/MyAllocator/apidocs</a></p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "group": "_Appendix",
    "type": "",
    "url": "{}",
    "title": "Terminology",
    "version": "201408.0.0",
    "name": "Terminology",
    "description": "<table> <thead> <tr> <th>Term</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Vendor</td> <td>You as the owner and developer of the front desk software.</td> </tr> <tr> <td>User/Customer</td> <td>Someone using your product and who is also registered on myallocator.com.</td> </tr> <tr> <td>Allocation</td> <td>A number indicating how many available beds or rooms there are.</td> </tr> <tr> <td>ARI</td> <td>Availablity (Allocation) along with Rate Information</td> </tr> </tbody> </table> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "type": "",
    "url": "{}",
    "title": "Test Accounts",
    "group": "_Appendix",
    "version": "201408.0.0",
    "name": "Test_Accounts",
    "description": "<p>Please contact us for login details to this shared developer account.</p> <p> Properties 63, 64, 64</p> <p> Only the property with ID 63 has rooms setup with the following configuration:</p> <table> <thead> <tr> <th>Units</th> <th>Beds</th> <th>IsPrivate</th> <th>Gender</th> <th>Channels</th> </tr> </thead> <tbody> <tr> <td>3</td> <td>1</td> <td>true</td> <td>n/a &amp; hc, iwb, adv</td> </tr> <tr> <td>3</td> <td>2</td> <td>true</td> <td>n/a &amp; hc, iwb, adv</td> </tr> <tr> <td>3</td> <td>5</td> <td>false</td> <td>males &amp; hc, iwb</td> </tr> <tr> <td>3</td> <td>10</td> <td>false</td> <td>males &amp; hc, iwb</td> </tr> <tr> <td>3</td> <td>10</td> <td>false</td> <td>females &amp; hc, iwb</td> </tr> <tr> <td>3</td> <td>30</td> <td>false</td> <td>mixed &amp; hc, iwb</td> </tr> </tbody> </table> <p> Channels are not specific to rooms. The only reason &#39;adv&#39; is not showing on all rooms is because they don&#39;t support shared accomodation (dormitories).</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "group": "_Appendix",
    "type": "",
    "url": "{}",
    "title": "Version History",
    "name": "Version_History",
    "version": "201408.0.0",
    "description": "<table> <thead> <tr> <th>Date</th> <th>Version</th> <th>Change</th> </tr> </thead> <tbody> <tr> <td>2014-12-15</td> <td>201408.0.2</td> <td>renamed LoopBookingAction into BookingAction</td> </tr> <tr> <td>2014-12-04</td> <td>201408.0.1</td> <td>initial release of new API</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.2</td> <td>Updated booking information (new: CommissionIncludedInTotal).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6.1</td> <td>Updated booking information and updated channel list (new: eb,air, orb, boo, tra).</td> </tr> <tr> <td>2012-10-24</td> <td>1.6</td> <td>New feature Booking Callback and updated channel list (new: max).</td> </tr> <tr> <td>2012-09-20</td> <td>1.5.2</td> <td>Updated channel list (new: exp, ysh, eb). Get/Set property country.</td> </tr> <tr> <td>2012-07-04</td> <td>1.5.1</td> <td>Updated channel list. Added MinStay/MaxStay example.</td> </tr> <tr> <td>2011-09-17</td> <td>1.5</td> <td>New method SetRoomTypes to add/update/remove rooms.</td> </tr> <tr> <td>2011-09-17</td> <td>1.4.1</td> <td>GetBookings: Minor correction regarding the end date. It&#39;s not the departure date but rather the departure date - 1.</td> </tr> <tr> <td>2011-01-15</td> <td>1.4</td> <td>New methods SetAllocation (non-blocking), SetLogin, GetUpdateStatus, GetBookings. Support for MinStay and MaxStay.</td> </tr> <tr> <td>2010-11-09</td> <td>1.3.1</td> <td>Updated channel list. GetRoomTypes: Obsoleted &quot;Ensuite&quot;, &quot;DoubleBed&quot; and &quot;Beds&quot; (replaced by new property &quot;Occupancy&quot;). GetProperties: shows which days are configure for weekends.</td> </tr> <tr> <td>2010-05-30</td> <td>1.3</td> <td>GetRoomTypes includes a room description (Label). Removed need to list channels to update to and ability to exclude channels. Skipped channels now warnings rather than errors.</td> </tr> <tr> <td>2010-05-05</td> <td>1.2</td> <td>Added links to XML samples. New channel: hb</td> </tr> <tr> <td>2010-04-30</td> <td>1.1</td> <td>Changed Room to \\textit{RoomType} to clarify matters</td> </tr> <tr> <td>2010-04-27</td> <td>1.0</td> <td>Initial release</td> </tr> </tbody> </table> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": ""
  },
  {
    "type": "",
    "url": "{}",
    "title": "XML v1 Error Responses",
    "group": "_Appendix",
    "version": "201408.0.0",
    "name": "XML_v1_Error_Responses",
    "description": "<p>XML v1 is deprecated and this documentation is provided for backward compatibility.</p> ",
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
    "groupTitle": ""
  },
  {
    "group": "_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Concepts",
    "version": "201408.0.0",
    "name": "Concepts",
    "description": "<p>Callbacks are the preferred way to receive updates instead of polling.  Callbacks data format matches the BookingList api call. </p> <p> Instead of polling for new bookings every few minutes you should register to receive a booking callback.  With this feature we will send the bookings to your server via HTTP/HTTPS or SQS.   Callbacks are much more efficient than periodically polling ranges of dates via BookingList.</p> ",
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "_Callbacks"
  },
  {
    "group": "_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Delivery Methods",
    "version": "201408.0.0",
    "name": "Delivery_Methods",
    "description": "<p>Callbacks can be delivered via HTTP/HTTPS or AWS SQS.     </p> <p>== AWS SQS Delivery ==  Amazon Web Services (AWS) Simple Queuing Service (SQS) Delivery is an alternative to HTTP/HTTPS.  Maintaining a public URL to receive callbacks is often difficult (especially during development),   AWS SQS is a highly reliable, fault tolerant, low latency approach for receiving near real time Booking updates.   AWS SQS libraries are available in nearly  every language and provide a very straightforward, low latency way to rapidly process incoming data. </p> <p> If you are interested in using non-HTTP/HTTPS delivery callbacks please let us know.  You will need to have your own Amazon Account, just setup a SQS queue and assign read/write permissions to aws account id210409647864.  callback messages can be delivered in XML or JSON.  (We request read permission so we can verify a write during setup).</p> <p><strong> AWS SQS Sample Policy </strong>  { &quot;Version&quot;: &quot;2012-10-17&quot;, &quot;Id&quot;: &quot;Queue1_Policy_UUID&quot;, &quot;Statement&quot;: {          &quot;Sid&quot;:&quot;Queue1_Send_Receive&quot;, &quot;Effect&quot;: &quot;Allow&quot;,          &quot;Principal&quot;: { &quot;AWS&quot;: &quot;210409647864&quot; },          &quot;Action&quot;: [&quot;sqs:SendMessage&quot;,&quot;sqs:ReceiveMessage&quot;],&quot;Resource&quot;: &quot;arn:aws:sqs:*:444455556666:queue1&quot; }}  replace 444455556666:queue1 with your AWS account/Queue Name.</p> <p>== HTTP/HTTPS Delivery ==</p> <p> Send us your endpoint URL (HTTPS strongly recommended) and a password  that we use to authenticate to your API. Whenever we receive a new  booking we will send a POST request to your server with two parameters:</p> <ul> <li><em>booking</em> : contains a JSON-coded string of the booking data.</li> <li><p><em>password</em> : contains a string of a previously agreed on password.</p> <p>If your server doesn&#39;t answer (or doesn&#39;t answer with the correct code,  see below) our system will retry with incremental delays between each try (1, 2, 4, 8, 16, 32 minutes... and so on).</p> <p>The Request format is very similiar to the GetBookings response, but instead of XML it is in JSON format. Additionally it contains a PropertyId field which is the property ID of the myallocator property.</p> <p>Your server needs to respond in the correct format, otherwise we will keep resending the booking. In the response BODY  write a JSON object in the following format:</p> </li> </ul> ",
    "examples": [
      {
        "title": "Example of a JSON booking",
        "content": "{\n  \"Customers\":[\n     {\n        \"CustomerLName\":\"Schmidt\",\n        \"CustomerCompany\":\"\",\n        \"CustomerNote\":\" \",\n        \"CustomerEmail\":\"mo@mx2solutions.co.uk\",\n        \"CustomerFName\":\"Mo\",\n        \"CustomerCity\":\"Stirling\",\n        \"CustomerCountry\":\"GB\"\n     }\n  ],\n  \"IsCancellation\":false,\n  \"OrderAdults\":1,\n  \"OrderChildren\":0,\n  \"OrderDate\":\"2012-09-18\",\n  \"OrderId\":\"13597636\",\n  \"OrderModifDate\":null,\n  \"OrderModifTime\":null,\n  \"OrderSource\":\"booking.com\",\n  \"OrderSourceId\":\"726122988\",\n  \"OrderTime\":\"16:22:14\",\n  \"Rooms\":[\n     {\n        \"EndDate\":\"2012-09-18\",\n        \"Currency\":\"EUR\",\n        \"RoomTypeIds\":[\n           \"832\"\n        ],\n        \"Price\":\"16.80\",\n        \"RoomDesc\":\"3 person mixed shared bed\",\n        \"Units\":\"1\",\n        \"StartDate\":\"2012-09-18\"\n     }\n  ],\n  \"TotalCurrency\":\"EUR\",\n  \"TotalPrice\":\"16.80\",\n  \"MyallocatorId\":\"5058a1bd921f120061010000\",\n  \"Channel\":\"ct\",\n  \"PropertyId\":264,\n  \"StartDate\":\"2012-09-18\",\n  \"EndDate\":\"2012-09-18\",\n  \"MyallocatorCreationDate\":\"2012-09-18\",\n  \"MyallocatorCreationTime\":\"17:32:16\",\n  \"MyallocatorModificationDate\":\"2012-09-18\",\n  \"MyallocatorModificationTime\":\"17:32:16\"\n}",
        "type": "json"
      }
    ],
    "filename": "perllib/MAAPI.pm",
    "groupTitle": "_Callbacks"
  },
  {
    "group": "_Callbacks",
    "type": "",
    "url": "{}",
    "title": "Response Handling",
    "version": "201408.0.0",
    "name": "Response_Format",
    "description": "<p>== Response Format ==  The codes are as follows, the message (msg) is not parsed and can be anything you like   (we still recommend something that describes the error).</p> <table> <thead> <tr> <th>Code</th> <th>Cause</th> </tr> </thead> <tbody> <tr> <td>10</td> <td>Password wrong or not set.</td> </tr> <tr> <td>20</td> <td>Error while parsing JSON structure (including the exception message, for example position of not parsable part)</td> </tr> <tr> <td>21</td> <td>Error while parsing JSON structure (exact reason unknown)</td> </tr> <tr> <td>22</td> <td>Error while parsing JSON content</td> </tr> <tr> <td>30</td> <td>PropertyId is NULL or 0</td> </tr> <tr> <td>31</td> <td>Property not used on your PMS anymore</td> </tr> <tr> <td>35</td> <td>MyallocatorId already existing</td> </tr> <tr> <td>50+</td> <td>Internal error on your side (for debugging)</td> </tr> </tbody> </table> <p> We record every error and can give you more details if needed. The important codes  are really only 10 and 31. The JSON should always be valid and the PropertyId  always included.</p> ",
    "success": {
      "examples": [
        {
          "title": "Example of a successful JSON response",
          "content": "{ \n\t\"success\": true \n}",
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
    "groupTitle": "_Callbacks"
  },
  {
    "type": "",
    "url": "{}",
    "title": ". Version 1 Migration",
    "name": "v1Upgrade",
    "description": "<p>Below is a table if old method to new method names</p> <table> <thead> <tr> <th></th> <th>v1 Method</th> <th>New Method(s)</th> </tr> </thead> <tbody> <tr> <td></td> </tr> </tbody> </table> <p>~;     foreach my $oldmethod (sort keys %MAAPI::Methods) {         my ($func, $props) = $MAAPI::Methods-&gt;{$oldmethod};         next if (not $props-&gt;{&#39;new_method&#39;});         print &quot;| $oldmethod | $props-&gt;{&#39;new_method&#39;}\\n&quot;;         }</p> <pre><code>print q~ </code></pre>",
    "version": "0.0.0",
    "filename": "perllib/MAAPI.pm",
    "group": "_myallocator_perllib_MAAPI_pm",
    "groupTitle": "_myallocator_perllib_MAAPI_pm"
  }
] });