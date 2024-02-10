## Components

<dl>
<dt><a href="#FacultyRankTabPanels">FacultyRankTabPanels()</a> : <code>Object</code></dt>
<dd><p>Prop types for FacultyRankTabPanels component.</p>
</dd>
<dt><a href="#ProfileCard">ProfileCard(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>React component for displaying a user&#39;s profile card.</p>
</dd>
<dt><a href="#ResultCard">ResultCard(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>React component for displaying a search result card.</p>
</dd>
<dt><a href="#SearchPage">SearchPage(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>React component for the ASU search page.</p>
</dd>
<dt><a href="#ASUSearchResultsList">ASUSearchResultsList(props, term, sort, type, engine, titleText, showSearchMessage, seeAllResultsText, itemsPerPage, onExpandClick, GASource, setPromotedResult, hidePaginator, registerResults, filters, loggedIn, profilesToFilterOut, display, appPathFolder, localSection, rankGroup, icon)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>React component for displaying search results.</p>
</dd>
<dt><a href="#WebDirectory">WebDirectory(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>React component for displaying web directory search results.</p>
</dd>
<dt><a href="#FilterComponent">FilterComponent()</a> : <code>Object</code></dt>
<dd><p>Prop types for FilterComponent component.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FiltersData">FiltersData</a> : <code>Object</code></dt>
<dd><p>Data object representing the filters for faculty rank.</p>
</dd>
</dl>

<a name="FacultyRankTabPanels"></a>

## FacultyRankTabPanels() : <code>Object</code>
Prop types for FacultyRankTabPanels component.

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| deptIds | <code>string</code> | The department IDs. |
| API_URL | <code>string</code> | The API URL. |
| searchApiVersion | <code>string</code> | The search API version. |
| searchType | <code>string</code> | The type of search. |
| appPathFolder | <code>string</code> | The application path folder. |
| display | <code>Object</code> | Display settings. |
| display.defaultSort | <code>string</code> | The default sorting option. |
| display.doNotDisplayProfiles | <code>string</code> | Profiles not to display. |
| display.profilesPerPage | <code>string</code> | Number of profiles to display. |
| display.usePager | <code>string</code> | Whether to use pagination. |
| filters | <code>Object</code> | Filters for the search. |
| filters.employee | <code>string</code> | Employee filter. |
| filters.expertise | <code>string</code> | Expertise filter. |
| filters.title | <code>string</code> | Title filter. |
| filters.campuses | <code>string</code> | Campuses filter. |
| alphaFilter | <code>string</code> | Whether to enable the alpha filter. |

<a name="ProfileCard"></a>

## ProfileCard(props) ⇒ <code>JSX.Element</code>
React component for displaying a user's profile card.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The ProfileCard component.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>Object</code> |  | The props for configuring the profile card. |
| props.name | <code>string</code> |  | The name of the user. |
| [props.matchedAffiliationTitle] | <code>string</code> |  | The matched affiliation title of the user. |
| [props.matchedAffiliationDept] | <code>string</code> |  | The matched affiliation department of the user. |
| [props.imgURL] | <code>string</code> |  | The URL of the user's profile image. |
| [props.profileURL] | <code>string</code> |  | The URL of the user's profile page. |
| [props.email] | <code>string</code> |  | The email address of the user. |
| [props.telephone] | <code>string</code> |  | The telephone number of the user. |
| [props.addressLine1] | <code>string</code> |  | The first line of the user's address. |
| [props.addressLine2] | <code>string</code> |  | The second line of the user's address. |
| [props.shortBio] | <code>string</code> |  | A short biography of the user. |
| [props.facebookLink] | <code>string</code> |  | The Facebook profile link of the user. |
| [props.linkedinLink] | <code>string</code> |  | The LinkedIn profile link of the user. |
| [props.twitterLink] | <code>string</code> |  | The Twitter profile link of the user. |
| [props.website] | <code>string</code> |  | The user's website link. |
| [props.size] | <code>string</code> | <code>&quot;\&quot;default\&quot;&quot;</code> | The size of the profile card (e.g., "default", "large", "small", "micro"). |
| [props.fill] | <code>boolean</code> | <code>false</code> | Whether to fill in missing data in the card. |
| [props.logClick] | <code>function</code> |  | A function to log clicks on profile card elements. |
| [props.GASource] | <code>string</code> |  | The Google Analytics source for tracking events. |

<a name="ResultCard"></a>

## ResultCard(props) ⇒ <code>JSX.Element</code>
React component for displaying a search result card.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The ResultCard component.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>Object</code> |  | The props for configuring the result card. |
| props.id | <code>string</code> |  | The ID of the result. |
| props.name | <code>string</code> |  | The name of the result. |
| props.area | <code>string</code> |  | The area of the result. |
| props.description | <code>string</code> |  | The description of the result. |
| props.cookieTrail | <code>Array.&lt;string&gt;</code> |  | An array representing the cookie trail of the result. |
| props.link | <code>string</code> |  | The link associated with the result. |
| [props.fill] | <code>boolean</code> | <code>false</code> | Whether to fill in missing data in the card. |
| props.logClick | <code>function</code> |  | A function to log clicks on result card elements. |
| props.GASource | <code>string</code> |  | The Google Analytics source for tracking events. |
| props.requestId | <code>string</code> |  | The request ID associated with the query. |
| [props.localSection] | <code>boolean</code> \| <code>null</code> | <code></code> | The local section information. |

<a name="SearchPage"></a>

## SearchPage(props) ⇒ <code>JSX.Element</code>
React component for the ASU search page.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The SearchPage component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props for configuring the search page. |
| props.API_URL | <code>string</code> | The API URL for the search functionality. |
| props.searchApiVersion | <code>string</code> | The version of the search API. |
| props.loggedIn | <code>boolean</code> | Indicates whether the user is logged in. |
| props.deptAdmin | <code>boolean</code> | Indicates whether the user is a department admin. |
| props.profileURLBase | <code>string</code> | The base URL for user profiles. |
| props.appPathFolder | <code>string</code> | The folder path for the application. |

<a name="ASUSearchResultsList"></a>

## ASUSearchResultsList(props, term, sort, type, engine, titleText, showSearchMessage, seeAllResultsText, itemsPerPage, onExpandClick, GASource, setPromotedResult, hidePaginator, registerResults, filters, loggedIn, profilesToFilterOut, display, appPathFolder, localSection, rankGroup, icon) ⇒ <code>JSX.Element</code>
React component for displaying search results.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The ASUSearchResultsList component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props for configuring the ASUSearchResultsList component. |
| term | <code>string</code> | The search term. |
| sort | <code>string</code> | The sorting option. |
| type | <code>string</code> | The type of results must be 'micro', 'preview', or 'full'. |
| engine | <code>Object</code> | The search engine configuration. |
| titleText | <code>string</code> | The title text for the search results. |
| showSearchMessage | <code>boolean</code> | Indicates whether to show a search message. |
| seeAllResultsText | <code>string</code> | The text for seeing all results. |
| itemsPerPage | <code>number</code> | The number of items per page. |
| onExpandClick | <code>function</code> | Callback function for expanding results. |
| GASource | <code>string</code> | The Google Analytics source for tracking. |
| setPromotedResult | <code>function</code> | Callback function for setting promoted results. |
| hidePaginator | <code>boolean</code> | Indicates whether to hide the paginator. |
| registerResults | <code>function</code> | Callback function for registering results. |
| filters | <code>Object</code> | Filters for the search. |
| loggedIn | <code>boolean</code> | Indicates whether the user is logged in. |
| profilesToFilterOut | <code>Array</code> | Profiles to filter out from the results. |
| display | <code>string</code> | Display options for the results. |
| appPathFolder | <code>string</code> | The base path for the application folder. |
| localSection | <code>boolean</code> | Indicates whether the results belong to a local section. |
| rankGroup | <code>string</code> | The rank group for the results. |
| icon | <code>Array</code> | Icon information for the results. |

<a name="WebDirectory"></a>

## WebDirectory(props) ⇒ <code>JSX.Element</code>
React component for displaying web directory search results.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The WebDirectory component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props for configuring the WebDirectory component. |
| props.searchType | <code>string</code> | The type of web directory search (e.g., 'departments', 'people'). |
| props.ids | <code>string</code> | The IDs used for searching (e.g., department IDs, ASURITE IDs). |
| props.deptIds | <code>string</code> | The department IDs for searching. |
| props.API_URL | <code>string</code> | The API URL for performing the search. |
| props.searchApiVersion | <code>string</code> | The version of the search API to use. |
| props.profileURLBase | <code>string</code> | The base URL for profile links. |
| props.appPathFolder | <code>string</code> | The base path for the application folder. |
| props.display | <code>object</code> | Display options for the search results. |
| props.filters | <code>Object</code> | Filters for the search. |
| props.alphaFilter | <code>string</code> | Indicates whether to enable alpha filtering. |

<a name="FilterComponent"></a>

## FilterComponent() : <code>Object</code>
Prop types for FilterComponent component.

**Kind**: global function  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| filterLabel | <code>string</code> |  | The label for the filter. |
| [choices] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | An array of choices for the filter. |
| [onChoose] | <code>function</code> | <code>() &#x3D;&gt; {}</code> | A callback function triggered when a choice is selected. |
| [resetFilters] | <code>function</code> | <code>() &#x3D;&gt; {}</code> | A callback function triggered to reset the filters. |

<a name="FiltersData"></a>

## FiltersData : <code>Object</code>
Data object representing the filters for faculty rank.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 1 | <code>string</code> | Filter for Faculty. |
| 2 | <code>string</code> | Filter for Academic Professionals. |
| 3 | <code>string</code> | Filter for Fixed-Term Faculty and Academic Professionals. |

