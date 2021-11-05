## Components

<dl>
<dt><a href="#CardsGridEvents">CardsGridEvents(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#CardsListEvents">CardsListEvents(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ArticleProps">ArticleProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CardProps">CardProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FeedHeader">FeedHeader</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FeedCtaButton">FeedCtaButton</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FeedCardButton">FeedCardButton</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#DataSource">DataSource</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FeedType">FeedType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#HeroProps">HeroProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ButtonProps">ButtonProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ButtonIconOnlyProps">ButtonIconOnlyProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TagsProps">TagsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#BreadcrumbProps">BreadcrumbProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ImageProps">ImageProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ContentProps">ContentProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AccordionCard">AccordionCard</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AccordionProps">AccordionProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ReactMouseEvent">ReactMouseEvent</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#AccordionCardItemProps">AccordionCardItemProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AnchorMenuItem">AnchorMenuItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AnchorMenuProps">AnchorMenuProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PageChangeEvent">PageChangeEvent</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#PaginationProps">PaginationProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PageItemProps">PageItemProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestimonialStyle">TestimonialStyle</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestimonialQuote">TestimonialQuote</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestimonialProps">TestimonialProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#VideoProps">VideoProps</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="CardsGridEvents"></a>

## CardsGridEvents(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | [<code>FeedType</code>](#FeedType) | 

<a name="CardsListEvents"></a>

## CardsListEvents(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | [<code>FeedType</code>](#FeedType) | 

<a name="ArticleProps"></a>

## ArticleProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>&quot;event&quot;</code> \| <code>&quot;news&quot;</code> | 
| [articleUrl] | <code>string</code> | 
| [publicationDate] | <code>string</code> | 
| [title] | <code>string</code> | 
| [body] | <code>string</code> | 
| [authorEmail] | <code>string</code> | 
| [authorName] | <code>string</code> | 
| [authorPhone] | <code>string</code> | 
| [authorTitle] | <code>string</code> | 
| [breadcrumbs] | [<code>Array.&lt;BreadcrumbProps&gt;</code>](#BreadcrumbProps) | 
| [calendarUrl] | <code>string</code> | 
| [eventLocation] | <code>string</code> | 
| [eventTime] | <code>string</code> | 
| [headerImageUrl] | <code>string</code> | 
| [registrationUrl] | <code>string</code> | 
| [zoomUrl] | <code>string</code> | 

<a name="CardProps"></a>

## CardProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [type] | <code>string</code> | 
| [horizontal] | <code>boolean</code> | 
| [clickable] | <code>boolean</code> | 
| [clickHref] | <code>string</code> | 
| [image] | <code>string</code> | 
| [imageAltText] | <code>string</code> | 
| [title] | <code>string</code> | 
| [icon] | <code>Array.&lt;string&gt;</code> | 
| [body] | <code>string</code> | 
| [eventLocation] | <code>string</code> | 
| [eventTime] | <code>string</code> | 
| [linkLabel] | <code>string</code> | 
| [linkUrl] | <code>string</code> | 
| [buttons] | [<code>Array.&lt;ButtonProps&gt;</code>](#ButtonProps) | 
| [eventFormat] | <code>&quot;stack&quot;</code> \| <code>&quot;inline&quot;</code> | 
| [width] | <code>&quot;25%&quot;</code> \| <code>&quot;50%&quot;</code> \| <code>&quot;75%&quot;</code> \| <code>&quot;100%&quot;</code> | 
| [tags] | [<code>Array.&lt;TagsProps&gt;</code>](#TagsProps) | 

<a name="FeedHeader"></a>

## FeedHeader : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [color] | <code>&quot;white&quot;</code> \| <code>&quot;dark&quot;</code> | 
| [text] | <code>string</code> | 

<a name="FeedCtaButton"></a>

## FeedCtaButton : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [color] | <code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;gray&quot;</code> \| <code>&quot;dark&quot;</code> | 
| [text] | <code>string</code> | 
| [url] | <code>string</code> | 

<a name="FeedCardButton"></a>

## FeedCardButton : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [color] | <code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;gray&quot;</code> \| <code>&quot;dark&quot;</code> | 
| [text] | <code>string</code> | 
| [size] | <code>&quot;default&quot;</code> \| <code>&quot;small&quot;</code> \| <code>&quot;medium&quot;</code> \| <code>&quot;large&quot;</code> | 

<a name="DataSource"></a>

## DataSource : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [url] | <code>string</code> | 
| [filters] | <code>string</code> | 

<a name="FeedType"></a>

## FeedType : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [header] | [<code>FeedHeader</code>](#FeedHeader) | 
| [ctaButton] | [<code>FeedCtaButton</code>](#FeedCtaButton) | 
| [cardButton] | [<code>FeedCardButton</code>](#FeedCardButton) | 
| [dataSource] | [<code>DataSource</code>](#DataSource) | 
| [maxItems] | <code>number</code> | 

<a name="HeroProps"></a>

## HeroProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [hide] | <code>boolean</code> |  |
| [image] | [<code>ImageProps</code>](#ImageProps) |  |
| [title] | [<code>ContentProps</code>](#ContentProps) |  |
| [subTitle] | [<code>ContentProps</code>](#ContentProps) |  |
| [contents] | [<code>Array.&lt;ContentProps&gt;</code>](#ContentProps) |  |
| [contentsColor] | <code>&quot;white&quot;</code> \| <code>&quot;black&quot;</code> |  |
| [type] | <code>&quot;heading-hero&quot;</code> \| <code>&quot;story-hero&quot;</code> | defaut value is "heading-hero" |

<a name="ButtonProps"></a>

## ButtonProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [label] | <code>string</code> | 
| [ariaLabel] | <code>string</code> | 
| [block] | <code>boolean</code> | 
| [disabled] | <code>boolean</code> | 
| [element] | <code>any</code> | 
| [href] | <code>string</code> | 
| [icon] | <code>Array.&lt;string&gt;</code> | 
| [innerRef] | <code>any</code> | 
| [classes] | <code>Array.&lt;string&gt;</code> | 
| [onClick] | <code>function</code> | 
| [size] | <code>&quot;default&quot;</code> \| <code>&quot;small&quot;</code> \| <code>&quot;xsmall&quot;</code> | 
| [color] | <code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;gray&quot;</code> \| <code>&quot;dark&quot;</code> | 
| [target] | <code>&quot;\_blank&quot;</code> \| <code>&quot;\_self&quot;</code> \| <code>&quot;\_top&quot;</code> \| <code>&quot;\_parent&quot;</code> | 

<a name="ButtonIconOnlyProps"></a>

## ButtonIconOnlyProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| icon | <code>Array.&lt;string&gt;</code> | 
| [color] | <code>string</code> | 
| [innerRef] | <code>React.RefObject</code> | 
| [onClick] | <code>function</code> | 
| [size] | <code>&quot;large&quot;</code> \| <code>&quot;small&quot;</code> | 

<a name="TagsProps"></a>

## TagsProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [label] | <code>string</code> | 
| [ariaLabel] | <code>string</code> | 
| [color] | <code>string</code> | 
| [disabled] | <code>boolean</code> | 
| [href] | <code>string</code> | 
| [onClick] | <code>function</code> | 
| [element] | <code>JSX.Element</code> \| <code>string</code> | 
| [innerRef] | <code>React.RefObject</code> | 

<a name="BreadcrumbProps"></a>

## BreadcrumbProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| url | <code>string</code> | 
| active | <code>boolean</code> | 

<a name="ImageProps"></a>

## ImageProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| url | <code>string</code> | 
| [altText] | <code>string</code> | 
| [cssClass] | <code>Array.&lt;string&gt;</code> | 
| [size] | <code>&quot;small&quot;</code> \| <code>&quot;medium&quot;</code> \| <code>&quot;large&quot;</code> | 

<a name="ContentProps"></a>

## ContentProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| text | <code>string</code> | 
| [maxWidth] | <code>string</code> | 
| [cssClass] | <code>Array.&lt;string&gt;</code> | 
| [color] | <code>&quot;black&quot;</code> \| <code>&quot;white&quot;</code> | 
| [highlightColor] | <code>&quot;gold&quot;</code> \| <code>&quot;black&quot;</code> \| <code>&quot;white&quot;</code> | 

<a name="AccordionCard"></a>

## AccordionCard : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [color] | <code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;gray&quot;</code> \| <code>&quot;dark&quot;</code> | 
| [content] | <code>Object</code> | 
| [content.icon] | <code>string</code> | 
| content.header | <code>string</code> | 
| content.body | <code>string</code> | 

<a name="AccordionProps"></a>

## AccordionProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| cards | [<code>Array.&lt;AccordionCard&gt;</code>](#AccordionCard) | 
| [openedCard] | <code>number</code> | 

<a name="ReactMouseEvent"></a>

## ReactMouseEvent ⇒ <code>void</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| event | <code>React.MouseEvent.&lt;HTMLAnchorElement, MouseEvent&gt;</code> | 
| id | <code>number</code> | 

<a name="AccordionCardItemProps"></a>

## AccordionCardItemProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| item | [<code>AccordionCard</code>](#AccordionCard) | 
| openCard | <code>number</code> | 
| onClick | [<code>ReactMouseEvent</code>](#ReactMouseEvent) | 

<a name="AnchorMenuItem"></a>

## AnchorMenuItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| text | <code>string</code> | 
| targetIdName | <code>string</code> | 
| [icon] | <code>Array.&lt;string&gt;</code> | 

<a name="AnchorMenuProps"></a>

## AnchorMenuProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| items | [<code>Array.&lt;AnchorMenuItem&gt;</code>](#AnchorMenuItem) | 
| firstElementId | <code>string</code> | 
| [focusFirstFocusableElement] | <code>boolean</code> | 

<a name="PageChangeEvent"></a>

## PageChangeEvent ⇒ <code>void</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 
| pages | <code>number</code> | 

<a name="PaginationProps"></a>

## PaginationProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>string</code> | 
| background | <code>string</code> | 
| [currentPage] | <code>number</code> | 
| [totalPages] | <code>number</code> | 
| [showFirstButton] | <code>boolean</code> | 
| [showLastButton] | <code>boolean</code> | 
| [totalNumbers] | <code>number</code> | 
| onChange | [<code>PageChangeEvent</code>](#PageChangeEvent) | 

<a name="PageItemProps"></a>

## PageItemProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [isClickeable] | <code>boolean</code> | 
| [disabled] | <code>boolean</code> | 
| [pageLinkIcon] | <code>boolean</code> | 
| [selectedPage] | <code>boolean</code> | 
| [onClick] | <code>function</code> | 
| children | <code>React.ReactNode</code> | 

<a name="TestimonialStyle"></a>

## TestimonialStyle : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [containerCssClass] | <code>Array.&lt;string&gt;</code> | 
| [titleCssClass] | <code>Array.&lt;string&gt;</code> | 
| [contentCssClass] | <code>Array.&lt;string&gt;</code> | 

<a name="TestimonialQuote"></a>

## TestimonialQuote : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| content | <code>string</code> | 
| [title] | <code>string</code> | 
| cite | <code>Object</code> | 
| cite.name | <code>string</code> | 
| [cite.description] | <code>string</code> | 

<a name="TestimonialProps"></a>

## TestimonialProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| imageSource | <code>string</code> | 
| imageAltText | <code>string</code> | 
| quote | [<code>TestimonialQuote</code>](#TestimonialQuote) | 
| itemStyle | [<code>TestimonialStyle</code>](#TestimonialStyle) | 

<a name="VideoProps"></a>

## VideoProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [type] | <code>&quot;youtube&quot;</code> \| <code>&quot;video&quot;</code> | 
| url | <code>string</code> | 
| [vttUrl] | <code>string</code> | 
| [title] | <code>string</code> | 
| [caption] | <code>string</code> | 
| [className] | <code>string</code> | 

