# Global Header Notes #

## Release Notes ##

Individual components within the Web Standards 2.0 Bootstrap library are not typically versioned independently of one another. However, due to the complexity of this particular set of code, it may be beneficial to understand what has changed between major NPM package updates. This becomes particularly relevant when there are both markup changes and CSS changes.

Latest edits.

- NPM Package 1.1.x
- NPM Package 1.0.x

## Sections ##

The global header is composed of two main sections. The grey bar at the top of the page is referred to as the `#header-top` and the main navigation for a site can be found within `#header-main`.

## Header Top ##

Basic Usage

- The links in this area are not intended to be altered and should provide a top-level consistent experience for people looking to navigate the entire ASU domain.
- The first two links on the page are visually hidden but become visible when navigating with a keyboard. Those links are the **Skip to Content** link and the **Report an Accessibility Problem** link.

The markup contains a landmark for developers to target with any relevant JS for the process of logging in / logging out of their specific application. Inject your results into  `div.login-status` and utilize some additional utility classes for consistent formatting:

- `.login-status > a.name` should render with a font weight of 700;
- `.login-status > a.signout` should surround the result with an open and close parenthesis. (Done via pseudo-elements and CSS.)

## Header Main ##

### Anatomy ###

The design of the main header component utilizes a mobile-first design and does not require a separate set of code for both the desktop and the mobile view. This component is a heavily modified version of the default `navbar` component within Bootstrap 4.

The component should toggle between the mobile view and the desktop view at any resolution less than 1260px. This rather high breakpoint was an intensional design decision to prevent menus with a lot of links in the navigation from displaying incorrectly at resolutions between 991px and 1260px.

If this does not apply to your site, the default code can be modified to display the desktop view at resolutions greater than 991px.

The basic markup should resemble the following:

```
<nav class="navbar navbar-expand-xl">
    <a class="navbar-brand" href="#">...</a>
    <button class="navbar-toggler collapsed" type="button">...</button>
    <div class="navbar-container">
        <div class="title subdomain-name">University Technology Office</div>
        <div class="collapse" id="menubar">
            <div class="navbar-nav">
                <a class="nav-link nav-link-home active" href="/">
                    <span class="d-xl-none">Home</span>
                    <span title="Home" class="fas fa-fw fa-home"></span>
                </a>
                ...
            </div><!-- end .navbar-nav -->
            <form class="navbar-site-buttons form-inline">
                ...
            </form>
            <div class="navbar-mobile-footer">...</div>
        </div>
    </div>
</div>
```

### .navbar-brand ###

This contains both the horizontal and vertical logos used in the component.

If you are copy/pasting directly from Storybook, you'll want to change the image `src` attribute to load the files correctly. The relative path to these files will change depending on your configuration, but within the `@asu-design-system` NPM package you can find them at `node_modules/@asu-design-system/bootstrap4-theme/src/img/asu-logo` Those will wind up looking something like this:

-  `<img class="vert" src="{path}/arizona-state-university-logo-vertical.png" alt="Arizona State University" />`
- `<img class="horiz" src="{path}/arizona-state-university-logo.png" alt="Arizona State University" />`

### .navbar-toggler ###

Contains the SVG icons needed for opened and closed state of the mobile menu. No need to alter anything here.

### .navbar-container .title ###

The site name and "parent" site name are represented by altering the contents of the `.title` div in this area. There are two supported configurations of this information. Both the parent titles and the main site titles can be either linked or unlinked in either configuration.

**Title, with parent**

```
<!-- Recommended approach is to provide a link to the parent site only. -->
<div class="title">
  <a href="#" class="unit-name">Ira A. Fulton Schools of Engineering</a>
  <span class="subdomain-name">School of Computing, Informatics, and Decisions Systems Engineering</span>
</div>
```

**Title, no parent**

```
<!-- Linked -->
<div class="title subdomain-name"><a href="#">Landing Page Title</a></div>

<!-- Unlinked -->
<div class="title subdomain-name">University Technology Office</div>
```

### .navbar-nav ###

The contents of this section are the actual navigation links and buttons for your site. Please see the next section for more information about how to build all of the specific features of the menu including the dropdown, mega menus and CTA buttons.

Immediately following `.navbar-nav` should be a link for the home page of the site. In almost every case, this link should look exactly like the following:

```
<a class="nav-link nav-link-home active" href="/">
    <span class="d-xl-none">Home</span>
    <span title="Home" class="fas fa-fw fa-home"></span>
</a>
```

This link provides the markup for the home icon in the desktop view as well as the "home" text and link in the mobile view.

### form.navbar-site-buttons ###

The form element immediately following `.navbar-nav` is the intended container element for the top-level call-to-action buttons that can be found as a part of the menu system. When present, they will always be aligned to the right side of the component and vertically aligned with either the `navbar-nav` element or the site title if the navbar is not present.

Use the medium sized buttons for this application. A maximum of two buttons are allowed.

```
<form class="navbar-site-buttons form-inline">
  <a href="#" class="btn btn-md btn-maroon">CTA Button 1</a>
  <a href="#" class="btn btn-md btn-dark">CTA Button 2</a>
  <!-- <a href="#" class="btn btn-md btn-gold">Gold button is OK</a> -->
</form>
```

### .navbar-mobile-footer ###

This section of the header markup houses the footer at the bottom of the mobile menu. The links in this section are generally the same set of links found in the `#top-header` section. But the links are duplicated in the markup for simplicity and accessibility purposes.

The structure of this element looks like this:
```
<div class="navbar-mobile-footer">
  <form class="navbar-mobile-search" action="https://search.asu.edu/search">
    ...
  </form>
  <div class="nav-grid">
    ...
    <div class="nav-link login-status">
      ...
    </div>
  </div>
</div>
```

Just like the `#top-header` element, the mobile footer contains a targetable landmark for various applications to return a logged in / logged out status. Inject your results into  `.navbar-mobile-footer .login-status`.
```
<!-- Logged in -->
Sparky<a class="signout" href="https://webapp4.asu.edu/myasu/Signout">Sign Out</a>

<!-- Logged out. (This is the normal format of links in this area.) -->
<a class="nav-link" href="https://weblogin.asu.edu/cgi-bin/login">Sign in</a>
```

`.navbar-mobile-footer .login-status .signout` will wrap the result in parenthesis (via CSS psudo-elements) and provide a small left margin as a spacer for any leading text.

## Navbar Options ##

The list of links within the navbar breaks from the normal tradition of a cumbersome unordered list of links for accessibility purposes and code readability. There are three basic structures for links within the navbar.

### Basic Links ###

The most basic representation of a link uses the default Bootstrap class.

```
<a class="nav-link" href="#">Tour</a>
```

### Dropdown Menus ###

The anatomy of a dropdown menu breaks somewhat from you would find in Bootstrap to allow for a couple of customizations within our design system. A single dropdown menu looks like this.

The maximum number of links recommended in any one column is eight.

```
<div class="nav-item dropdown">
  <a class="nav-link" href="#" id="dropdown-one-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
    <span class="fa fa-chevron-down"></span>
  </a>
  <div class="dropdown-menu dropdown-columns" aria-labelledby="dropdown-one-col">
    <div class="dropdown-col">
      <a class="dropdown-item" href="#">Navigation Link</a>
      <a class="dropdown-item" href="#">Another Link</a>
      <a class="dropdown-item" href="#">Third</a>
    </div>
  </div>
</div>
```

The two column dropdown variant adds a second `.dropdown-col` to the `.dropdown-columns` container above. Our design system only allows for a maximum of two columns of links in this type of dropdown menu. (For more than three columns, use a mega menu.)

```
<div class="nav-item dropdown">
  <a class="nav-link" href="#" id="dropdown-one-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
    <span class="fa fa-chevron-down"></span>
  </a>
  <div class="dropdown-menu dropdown-columns" aria-labelledby="dropdown-one-col">
    <div class="dropdown-col">
      <a class="dropdown-item" href="#">Link</a>
      <a class="dropdown-item" href="#">Link</a>
    </div>
    <div class="dropdown-col">
      <a class="dropdown-item" href="#">Link</a>
      <a class="dropdown-item" href="#">Link</a>
    </div>
  </div>
</div>
```

### Dropdown headers and buttons ###

Dropdown columns can also optionally include headers at the top of each column as well as a call to action button at the base of each column.

- Column headers are `<h3>` tags
- CTA buttons are of the `btn-small` variety.
- All button colors are allowed in this context.

```
<div class="dropdown-col">
  <h3>Column Header</h3>
  <a class="dropdown-item" href="#">Link</a>
  <a class="dropdown-item" href="#">Link</a>
  <a href="#" class="btn btn-sm btn-dark">Action</a>
</div>
```

### Mega menus ###

In the default Boostrap menu system a "mega menu" is not a defined element. The markup in use within our component takes advantage of a few utility classes and the default Bootstrap row and column system to provide consistency with the normal layout grid.

- Use a mega menu for when you need at least three columns of links under one menu item.
- It is recommended that all columns within a mega menu include column headers for better visual navigation within a mobile device context.
- Just like with a traditional dropdown menu, the recommended maximum number of individual links in one column is eight.

The three column variant of a mega menu looks like this:
```
<div class="nav-item dropdown megamenu">
  <a class="nav-link" href="#" id="megamenu-three-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Mega Menu (3 col)
    <span class="fa fa-chevron-down"></span>
  </a>
  <div class="dropdown-menu" aria-labelledby="megamenu-three-col">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <h3>Column one</h3>
          <a class="dropdown-item" href="#">Link</a>
          <a class="dropdown-item" href="#">Link</a>
        </div>
        <div class="col-lg">
          <h3>Column two</h3>
          <a class="dropdown-item" href="#">Link</a>
          <a class="dropdown-item" href="#">Link</a>
        </div>
        <div class="col-lg">
          <h3>Column three</h3>
          <a class="dropdown-item" href="#">Link</a>
          <a class="dropdown-item" href="#">Link</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Adding more columns ###

To extend the menu to the four and five column variants, add another `<div class="col-lg"></div>` to the designated row and fill it with your favorite links. Serve chilled with an olive or two as a garnish.

The mega menu system has also been tested with two and six column variations, although neither of these appear as options in the design document.

### Mega menu button options ###

Call to action buttons can be included within a mega menu in one of two locations. Actions that correspond with a list of links contained within one column can be placed inline with the corresponding column.

The markup for this resembles the markup for dropdown menus and follows the same rules.

- Buttons are of the `btn-small` variety.
- All button colors are allowed in this context.
- One button per column.

```
<div class="col-lg">
  <h3>Column three</h3>
  <a class="dropdown-item" href="#">Link</a>
  <a class="dropdown-item" href="#">Link</a>
  <a href="#" class="btn btn-sm btn-dark">Column action</a>
</div>
```

It is also possible to define a set of call to action buttons that correspond to the entire collection of links in the mega menu option. These buttons are added to the markup in a separate designated `.row .with-buttons` following the main row for the link columns.

The same rules apply for the button sizes and alllowed colors. A maximum of two buttons should be used in this space.
```
<div class="dropdown-menu" aria-labelledby="dont-forget-aria-rules">
  <div class="container">
    <div class="row">
      ...
      <div class="col-lg">
        <h3>Column four</h3>
        <a class="dropdown-item" href="#">Link</a>
        <a class="dropdown-item" href="#">Link</a>
      </div>
      ...
    </div>
    <div class="row with-buttons">
      <div class="col-lg-12">
        <a href="#" class="btn btn-sm btn-gold">Mega menu action</a>
        <a href="#" class="btn btn-sm btn-gold">Secondary action</a>
      </div>
    </div>
  <div>
</div>
```

## No navigation and CTA only variations ##

For the purposes of creating landing pages with minimal visual navigation, the `#header-main` header element can be altered to display the title vertically centered within the container.

The key here is to add the utility class of `.no-links` to the `.navbar-container` element.

Even if there are no links present with in the desktop version of the navigation, it is still important to include the markup for the mobile menu, as the links in the mobile menu footer are intended to be "universal."

```
<!-- No links, no buttons -->
<div class="navbar-container no-links">
  <div class="title subdomain-name"><a href="#">Landing Page Title</a></div>
  <div class="collapse navbar-collapse w-100 justify-content-between" id="menubar">
    <div class="navbar-mobile-footer">
      ...
    </div>
  </div>
</div>
```


```
<!-- No links, buttons included -->
<div class="navbar-container no-links">
  <div class="title subdomain-name"><a href="#">Landing Page Title</a></div>
  <div class="collapse navbar-collapse w-100 justify-content-between" id="menubar">
    <form class="navbar-site-buttons form-inline">
      <a href="#" class="btn btn-md btn-maroon">CTA Button 1</a>
      <a href="#" class="btn btn-md btn-dark">CTA Button 2</a>
    </form>
    <div class="navbar-mobile-footer">
      ...
    </div>
  </div>
</div>
```

## Altering the default mobile breakpoint

By default, the Boostrap 4 version of the ASU header uses the XL breakpoint to trigger the mobile vs desktop view of the component. This means that users with resolutions of 1260px and below will experience the mobile menu.

If you have a limited number of top level items in the navigation of your menu, you can change this behavior by altering the markup for the header as well as the media queries in the SASS files to use the `lg` breakpoints instead.

### Markup changes

There are four changes in the markup needed to alter the behavior.

First, look for for two instances of Bootstrap containers that have been set to the xl breakpoint.

- The first is at `#wrapper-header-top div.container-xl`
- The other is at `#wrapper-header-main div.container-xl`.
- Change both containers to `container-lg` or your breakpoint of choice.

Second, if your header contains a navigation bar, it also needs to be set to display the mobile view at the correct breakpoint.

- Locate `.navbar-expand-xl` and change it to `.navbar-expand-lg` or your breakpoint of choice.

Last, the text for the home icon also toggles on and off based on the breakpoint.

- Find `<span class="d-xl-none">Home</span>` and change the class for the `<span>` element to be `d-lg-none` instead.

### SASS Changes

The SASS partial file called `_global-header.scss` contains the markup needed to render both the desktop and mobile view of the header components. Sections 4 and 7 contain the collection of rules that are wrapped in two media queries. Those media queries need to reference the new breakpoint.

