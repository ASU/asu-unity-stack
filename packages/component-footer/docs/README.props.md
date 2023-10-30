## Components

<dl>
<dt><a href="#ColumnSection">ColumnSection(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#Social">Social(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Link">Link</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Column">Column</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Social">Social</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Contact">Contact</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ASUFooter">ASUFooter</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="ColumnSection"></a>

## ColumnSection(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="Social"></a>

## Social(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="Link"></a>

## Link : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| url | <code>string</code> | 
| title | <code>string</code> | 
| text | <code>string</code> | 

<a name="Column"></a>

## Column : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| links | [<code>Array.&lt;Link&gt;</code>](#Link) | 

<a name="Social"></a>

## Social : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| logoUrl | <code>string</code> | 
| unitLogo | <code>string</code> | 
| [mediaLinks] | <code>object</code> | 
| [mediaLinks.facebook] | <code>string</code> | 
| [mediaLinks.twitter] | <code>string</code> | 
| [mediaLinks.instagram] | <code>string</code> | 
| [mediaLinks.linkedIn] | <code>string</code> | 
| [mediaLinks.youtube] | <code>string</code> | 

<a name="Contact"></a>

## Contact : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| contactLink | <code>string</code> | 
| [contributionLink] | <code>string</code> | 
| [columns] | [<code>Array.&lt;Column&gt;</code>](#Column) | 

<a name="ASUFooter"></a>

## ASUFooter : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| social | [<code>Social</code>](#Social) | 
| contact | [<code>Contact</code>](#Contact) | 

