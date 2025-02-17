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
<dt><a href="#ImageComponentProps">ImageComponentProps</a> : <code>Object</code></dt>
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
<dt><a href="#CarouselItem">CarouselItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Props">Props</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ButtonProps">ButtonProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TagsProps">TagsProps</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CardItem">CardItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CardCarouselType">CardCarouselType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ImageItem">ImageItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ImageCarouselType">ImageCarouselType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ImageGalleryCarouselItem">ImageGalleryCarouselItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ImageGalleryCarouselType">ImageGalleryCarouselType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestimonialItem">TestimonialItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestimonialCarouselType">TestimonialCarouselType</a> : <code>Object</code></dt>
<dd></dd>
</dl>

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
| [image] | <code>string</code> | 
| [imageAltText] | <code>string</code> | 
| title | <code>string</code> | 
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
| [showBorders] | <code>boolean</code> | 
| [cardLink] | <code>string</code> | 

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

<a name="ImageComponentProps"></a>

## ImageComponentProps : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| src | <code>string</code> | 
| alt | <code>string</code> | 
| [cssClasses] | <code>Array.&lt;string&gt;</code> | 
| [loading] | <code>&quot;lazy&quot;</code> \| <code>&quot;eager&quot;</code> | 
| [decoding] | <code>&quot;sync&quot;</code> \| <code>&quot;async&quot;</code> \| <code>&quot;auto&quot;</code> | 
| [fetchPriority] | <code>&quot;auto&quot;</code> \| <code>&quot;high&quot;</code> \| <code>&quot;low&quot;</code> | 
| [width] | <code>string</code> | 
| [height] | <code>string</code> | 
| [dataTestId] | <code>string</code> | 
| [cardLink] | <code>string</code> | 
| [title] | <code>string</code> | 
| [caption] | <code>string</code> | 
| [captionTitle] | <code>string</code> | 
| [border] | <code>bool