## Components

<dl>
<dt><a href="#ListingPage">ListingPage(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#DetailPage">DetailPage(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AnchorMenuProps">AnchorMenuProps</a> : <code>Object</code></dt>
<dd><p>This type set the <code>url</code> and <code>isActive</code> optional</p>
</dd>
<dt><a href="#BreadcrumbItem">BreadcrumbItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#IntroContentProps">IntroContentProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ProgramDescriptionProps">ProgramDescriptionProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#RequiredCoursesProps">RequiredCoursesProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AtAGlanceProps">AtAGlanceProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ApplicationRequirementsProps">ApplicationRequirementsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ChangeMajorRequirementsProps">ChangeMajorRequirementsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#NextStepsProps">NextStepsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AffordingCollegeProps">AffordingCollegeProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FlexibleDegreeOptionItem">FlexibleDegreeOptionItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FlexibleDegreeOptionsProps">FlexibleDegreeOptionsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ExampleCareersProps">ExampleCareersProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AttendOnlineProps">AttendOnlineProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ProgramContactInfoProps">ProgramContactInfoProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#HideProp">HideProp</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ProgramDetailDataSource">ProgramDetailDataSource</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#DetailPageProps">DetailPageProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#IntroContentProps">IntroContentProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ProgramListDataSource">ProgramListDataSource</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#GridListProps">GridListProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ActionUrlProps">ActionUrlProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ListingPageProps">ListingPageProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#tagHeadings">tagHeadings</a> : <code>&quot;h1&quot;</code> | <code>&quot;h2&quot;</code> | <code>&quot;h3&quot;</code> | <code>&quot;h4&quot;</code> | <code>&quot;h5&quot;</code> | <code>&quot;h6&quot;</code></dt>
<dd></dd>
<dt><a href="#ContentItem">ContentItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SectionContentItem">SectionContentItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#LinkItem">LinkItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CardItem">CardItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#OverlapContentImage">OverlapContentImage</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TableProps">TableProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ColumSettings">ColumSettings</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="ListingPage"></a>

## ListingPage(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | [<code>ListingPageProps</code>](#ListingPageProps) | 

<a name="DetailPage"></a>

## DetailPage(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | [<code>DetailPageProps</code>](#DetailPageProps) | 

<a name="AnchorMenuProps"></a>

## AnchorMenuProps : <code>Object</code>
This type set the `url` and `isActive` optional

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [atAGlance] | <code>boolean</code> | 
| [applicationRequirements] | <code>boolean</code> | 
| [changeMajorRequirements] | <code>boolean</code> | 
| [nextSteps] | <code>boolean</code> | 
| [affordingCollege] | <code>boolean</code> | 
| [flexibleDegreeOptions] | <code>boolean</code> | 
| [careerOutlook] | <code>boolean</code> | 
| [exampleCareers] | <code>boolean</code> | 
| [customizeYourCollegeExperience] | <code>boolean</code> | 
| [globalOpportunity] | <code>boolean</code> | 
| [attendOnline] | <code>boolean</code> | 
| [programContactInfo] | <code>boolean</code> | 
| [externalAnchors] | <code>Array.&lt;AnchorMenuItem&gt;</code> | 

<a name="BreadcrumbItem"></a>

## BreadcrumbItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [url] | <code>string</code> | 
| text | <code>string</code> | 
| [isActive] | <code>boolean</code> | 

<a name="IntroContentProps"></a>

## IntroContentProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hideMarketText] | <code>boolean</code> | 
| [hideProgramDesc] | <code>boolean</code> | 
| [hideRequiredCourses] | <code>boolean</code> | 
| [contents] | [<code>Array.&lt;ContentItem&gt;</code>](#ContentItem) | 
| [video] | <code>VideoItem</code> | 
| [image] | <code>ImageItem</code> | 
| [breadcrumbs] | [<code>Array.&lt;BreadcrumbItem&gt;</code>](#BreadcrumbItem) | 

<a name="ProgramDescriptionProps"></a>

## ProgramDescriptionProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| content | [<code>ContentItem</code>](#ContentItem) | 

<a name="RequiredCoursesProps"></a>

## RequiredCoursesProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| concurrentDegreeMajorMaps | <code>string</code> | 
| onlineMajorMapURL | <code>string</code> | 
| majorMapOnCampusArchiveURL | <code>string</code> | 

<a name="AtAGlanceProps"></a>

## AtAGlanceProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hide] | <code>boolean</code> | 
| [offeredBy] | [<code>LinkItem</code>](#LinkItem) | 
| [locations] | [<code>Array.&lt;LinkItem&gt;</code>](#LinkItem) | 
| [firstRequirementMathCourse] | <code>string</code> | 
| [mathIntensity] | <code>string</code> | 
| [timeCommitment] | <code>string</code> | 

<a name="ApplicationRequirementsProps"></a>

## ApplicationRequirementsProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| graduateRequirements | <code>string</code> | 
| additionalRequirements | <code>string</code> | 
| transferRequirements | <code>string</code> | 

<a name="ChangeMajorRequirementsProps"></a>

## ChangeMajorRequirementsProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [contents] | [<code>Array.&lt;ContentItem&gt;</code>](#ContentItem) | 

<a name="NextStepsProps"></a>

## NextStepsProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hide] | <code>boolean</code> | 
| [cards] | [<code>Array.&lt;CardItem&gt;</code>](#CardItem) | 

<a name="AffordingCollegeProps"></a>

## AffordingCollegeProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [cards] | [<code>Array.&lt;CardItem&gt;</code>](#CardItem) | 

<a name="FlexibleDegreeOptionItem"></a>

## FlexibleDegreeOptionItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| url | <code>string</code> | 

<a name="FlexibleDegreeOptionsProps"></a>

## FlexibleDegreeOptionsProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| acceleratedLinks | [<code>Array.&lt;FlexibleDegreeOptionItem&gt;</code>](#FlexibleDegreeOptionItem) | 
| concurrentLinks | [<code>Array.&lt;FlexibleDegreeOptionItem&gt;</code>](#FlexibleDegreeOptionItem) | 

<a name="ExampleCareersProps"></a>

## ExampleCareersProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| tableData | [<code>Array.&lt;TableProps&gt;</code>](#TableProps) | 

<a name="AttendOnlineProps"></a>

## AttendOnlineProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hide] | <code>boolean</code> | 
| [image] | <code>ImageItem</code> | 
| [contents] | [<code>Array.&lt;SectionContentItem&gt;</code>](#SectionContentItem) | 

<a name="ProgramContactInfoProps"></a>

## ProgramContactInfoProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hide] | <code>boolean</code> | 
| [department] | [<code>LinkItem</code>](#LinkItem) | 
| [asuOfficeLoc] | <code>string</code> | 
| [email] | [<code>LinkItem</code>](#LinkItem) | 
| [phone] | <code>string</code> | 

<a name="HideProp"></a>

## HideProp : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hide] | <code>boolean</code> | 

<a name="ProgramDetailDataSource"></a>

## ProgramDetailDataSource : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [endpoint] | <code>string</code> | 
| [method] | <code>string</code> | 
| [init] | <code>&quot;true&quot;</code> \| <code>&quot;false&quot;</code> | 
| [cert] | <code>&quot;true&quot;</code> \| <code>&quot;false&quot;</code> | 
| [fields] | <code>string</code> | 
| acadPlan | <code>string</code> | 

<a name="DetailPageProps"></a>

## DetailPageProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [appPathFolder] | <code>string</code> | 
| dataSource | [<code>ProgramDetailDataSource</code>](#ProgramDetailDataSource) | 
| [anchorMenu] | [<code>AnchorMenuProps</code>](#AnchorMenuProps) | 
| [hero] | <code>HeroProps</code> | 
| [introContent] | [<code>IntroContentProps</code>](#IntroContentProps) | 
| [programDescription] | [<code>ProgramDescriptionProps</code>](#ProgramDescriptionProps) | 
| [requiredCoursesProps] | [<code>RequiredCoursesProps</code>](#RequiredCoursesProps) | 
| [atAGlance] | [<code>AtAGlanceProps</code>](#AtAGlanceProps) | 
| [applicationRequirements] | [<code>HideProp</code>](#HideProp) | 
| [changeMajorRequirements] | [<code>HideProp</code>](#HideProp) | 
| [nextSteps] | [<code>NextStepsProps</code>](#NextStepsProps) | 
| [affordingCollege] | [<code>HideProp</code>](#HideProp) | 
| [flexibleDegreeOptions] | [<code>HideProp</code>](#HideProp) | 
| [careerOutlook] | <code>CareerOutlookProps</code> | 
| [exampleCareers] | [<code>HideProp</code>](#HideProp) | 
| [globalOpportunity] | <code>GlobalOpportunityProps</code> | 
| [attendOnline] | [<code>AttendOnlineProps</code>](#AttendOnlineProps) | 
| [programContactInfo] | [<code>ProgramContactInfoProps</code>](#ProgramContactInfoProps) | 

<a name="IntroContentProps"></a>

## IntroContentProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [applyNowUrl] | <code>string</code> | 
| [type] | <code>&quot;text&quot;</code> \| <code>&quot;text-media&quot;</code> \| <code>&quot;text-image-overlay&quot;</code> \| <code>&quot;text-photo-grid&quot;</code> | 
| [image] | <code>ImageItem</code> | 
| [video] | <code>VideoItem</code> | 
| [header] | [<code>ContentItem</code>](#ContentItem) | 
| [title] | [<code>ContentItem</code>](#ContentItem) | 
| [contents] | [<code>Array.&lt;ContentItem&gt;</code>](#ContentItem) | 
| [photoGrid] | <code>Object</code> | 
| [photoGrid.images] | <code>Array.&lt;ImageItem&gt;</code> | 

<a name="ProgramListDataSource"></a>

## ProgramListDataSource : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [endpoint] | <code>string</code> | 
| [method] | <code>string</code> | 
| [init] | <code>&quot;true&quot;</code> \| <code>&quot;false&quot;</code> | 
| [cert] | <code>&quot;true&quot;</code> \| <code>&quot;false&quot;</code> | 
| [fields] | <code>string</code> | 
| [program] | <code>string</code> | 
| [collegeAcadOrg] | <code>string</code> | 
| [departmentCode] | <code>string</code> | 
| [showInactivePrograms] | <code>boolean</code> \| <code>&quot;true&quot;</code> \| <code>&quot;false&quot;</code> | 

<a name="GridListProps"></a>

## GridListProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| dataSource | [<code>ProgramListDataSource</code>](#ProgramListDataSource) | 
| [settings] | [<code>ColumSettings</code>](#ColumSettings) | 

<a name="ActionUrlProps"></a>

## ActionUrlProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [applyNowUrl] | <code>string</code> | 
| [majorInfoUrl] | <code>string</code> | 

<a name="ListingPageProps"></a>

## ListingPageProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [appPathFolder] | <code>string</code> | 
| [actionUrls] | [<code>ActionUrlProps</code>](#ActionUrlProps) | 
| [hideCollegeSchool] | <code>boolean</code> | 
| [hasSearchBar] | <code>boolean</code> | 
| [hasFilters] | <code>boolean</code> | 
| [hero] | <code>HeroProps</code> | 
| [introContent] | [<code>IntroContentProps</code>](#IntroContentProps) | 
| [programList] | [<code>GridListProps</code>](#GridListProps) | 

<a name="tagHeadings"></a>

## tagHeadings : <code>&quot;h1&quot;</code> \| <code>&quot;h2&quot;</code> \| <code>&quot;h3&quot;</code> \| <code>&quot;h4&quot;</code> \| <code>&quot;h5&quot;</code> \| <code>&quot;h6&quot;</code>
**Kind**: global typedef  
<a name="ContentItem"></a>

## ContentItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| text | <code>string</code> | 
| [cssClass] | <code>Array.&lt;string&gt;</code> | 
| [component] | [<code>tagHeadings</code>](#tagHeadings) | 

<a name="SectionContentItem"></a>

## SectionContentItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| content | <code>string</code> | 

<a name="LinkItem"></a>

## LinkItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| url | <code>string</code> | 
| text | <code>string</code> | 

<a name="CardItem"></a>

## CardItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| icon | <code>Array.&lt;string&gt;</code> | 
| title | <code>string</code> | 
| content | <code>string</code> | 
| buttonLink | <code>ButtonProps</code> | 

<a name="OverlapContentImage"></a>

## OverlapContentImage : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [hide] | <code>boolean</code> |  |
| [headingTag] | <code>string</code> |  |
| [title] | <code>string</code> |  |
| [contentDirection] | <code>&quot;left&quot;</code> \| <code>&quot;right&quot;</code> |  |
| [contents] | [<code>Array.&lt;ContentItem&gt;</code>](#ContentItem) |  |
| [image] | <code>ImageItem</code> |  |
| [contentChildren] | <code>JSX.Element</code> | }} |

<a name="TableProps"></a>

## TableProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| career | [<code>LinkItem</code>](#LinkItem) | 
| growth | <code>number</code> | 
| medianSalary | <code>string</code> | 
| brightOutlook | <code>boolean</code> | 
| greenOccupation | <code>boolean</code> | 

<a name="ColumSettings"></a>

## ColumSettings : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [hideCollegeSchool] | <code>boolean</code> | 

