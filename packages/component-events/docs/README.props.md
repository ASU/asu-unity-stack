## Components

<dl>
<dt><a href="#CardsGridEvents">CardsGridEvents(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#CardsListEvents">CardsListEvents(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
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

