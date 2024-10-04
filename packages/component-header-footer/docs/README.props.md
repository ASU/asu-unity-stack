## Components

<dl>
<dt><a href="#Button">Button(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#DropdownItem">DropdownItem(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#NavLinkIcon">NavLinkIcon(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
<dt><a href="#NavItem">NavItem(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Logo">Logo</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Button">Button</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#NavTreeProps">NavTreeProps</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#HeaderProps">HeaderProps</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Button"></a>

## Button(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>ButtonProps</code> | 

<a name="DropdownItem"></a>

## DropdownItem(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>DropdownItemProps</code> | 

<a name="NavLinkIcon"></a>

## NavLinkIcon(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="NavItem"></a>

## NavItem(props) ⇒ <code>JSX.Element</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="Logo"></a>

## Logo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| alt | <code>string</code> | 
| title | <code>string</code> | 
| src | <code>string</code> | 
| mobileSrc | <code>string</code> | 
| brandLink | <code>string</code> | 

<a name="Button"></a>

## Button : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| href | <code>string</code> | 
| [color] | <code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;light&quot;</code> \| <code>&quot;dark&quot;</code> | 
| text | <code>string</code> | 
| [classes] | <code>string</code> | 
| [onClick] | <code>function</code> | 
| [onFocus] | <code>function</code> | 

<a name="NavTreeProps"></a>

## NavTreeProps : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| [href] | <code>string</code> | 
| [text] | <code>string</code> | 
| [type] | <code>string</code> | 
| [selected] | <code>boolean</code> | 
| [items] | <code>Array.&lt;object&gt;</code> | 
| [buttons] | [<code>Array.&lt;Button&gt;</code>](#Button) | 
| [class] | <code>string</code> | 
| [onClick] | <code>function</code> | 

<a name="HeaderProps"></a>

## HeaderProps : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isPartner | <code>boolean</code> |  |
| navTree | [<code>Array.&lt;NavTreeProps&gt;</code>](#NavTreeProps) |  |
| [title] | <code>string</code> |  |
| [baseUrl] | <code>string</code> |  |
| [parentOrg] | <code>string</code> |  |
| [parentOrgUrl] | <code>string</code> |  |
| partnerLogo | [<code>Logo</code>](#Logo) |  |
| logo | [<code>Logo</code>](#Logo) |  |
| loggedIn | <code>boolean</code> |  |
| userName | <code>string</code> |  |
| loginLink | <code>string</code> |  |
| [onLoginClick] | <code>function</code> |  |
| logoutLink | <code>string</code> |  |
| [onLogoutClick] | <code>function</code> |  |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) |  |
| breakpoint | <code>&quot;Lg&quot;</code> \| <code>&quot;Xl&quot;</code> |  |
| animateTitle | <code>boolean</code> |  |
| expandOnHover | <code>boolean</code> |  |
| mobileNavTree | [<code>Array.&lt;NavTreeProps&gt;</code>](#NavTreeProps) |  |
| searchUrl | <code>string</code> |  |
| site | <code>string</code> |  |
| renderDiv | <code>string</code> | Can be either "true" or "false". |

