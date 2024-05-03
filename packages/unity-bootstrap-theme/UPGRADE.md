# Upgrading to the Unity Bootstrap 5 Theme (`unity-bootstrap-theme`)

## Who this document is for

CMS maintainers and application developers who have been using the Unity Bootstrap 4 Theme (package name `bootstrap4-theme`).

## Purpose of this document

To describe the effort necessary to move from the `bootstrap4-theme` package to the `unity-bootstrap-theme` package.

## Official Bootstrap 5 migration documentation

[Migrating to v5](https://getbootstrap.com/docs/5.1/migration/)

## Steps to upgrade to the Unity Bootstrap 5 Theme

### Remove `bootstrap4-theme` package

If using yarn, `yarn remove @asu/bootstrap4-theme`, or if using npm, `npm uninstall @asu/bootstrap4-theme`

### Add `unity-bootstrap-theme` package

If using yarn, `yarn add @asu/unity-bootstrap-theme`, or if using npm, `npm install @asu/unity-bootstrap-theme`

You may want to specify a release tag. Leaving off the tag will install the latest version.

### Add new peerDependency for Font Awesome

How consumers meet this dependency varies from project to project. Some CMS's supply Font Awesome as part of the application, while standalone applications may want to add the requirement using a package manager, for instance:
`yarn add @fortawesome/fontawesome-free^5.15.3` or `npm install @fortawesome/fontawesome-free^5.15.3`

### Replace include/require/imports in your application with the new package.

Note the updated CSS files in `dist/`. There are more options so you don't have to include CSS you don't use.

* `dist/css/unity-bootstrap-theme.bundle.css` - base theme with header and footer CSS
* `dist/css/unity-bootstrap-theme.css` - base theme without header and footer CSS
* `dist/css/unity-bootstrap-header.css` (optional) - header CSS only - don't use if using the Unity `component-header` React component
* `dist/css/unity-bootstrap-footer.css` (optional) - footer CSS only - don't use if using the Unity `component-footer` React component

Note: the optional header and footer CSS require the base theme file to be included. If you want a truly standalone header with no other CSS dependencies, use the React version.

See README.md for more details about using and extending the Unity Bootstrap 5 theme in your application.

### Update Unity component markup used by your application.

Most design components' markup changed little or not at all in this update. A few to pay close attention to are:

#### Accordion markup

- Accordions have deprecated the use of `card-foldable` classes. Instead, use `accordion` as a wrapper class and `accordion-item` for the individual items in the accordion.
- The `card-header` class in accordions has been replaced with `accordion-header` and the `card-header-button` class has been replaced with `accordion-button`.
- The `card-body` class in accordions has been replaced with `accordion-body`.

  This mainly applies to the accordion component that is wrapped in the `accordion` class. See [these examples](https://https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/?path=/story/atoms-accordions-examples--color-accents&globals=backgrounds.grid:false) for the unity markup. *Classes in the footer have also been changed when there are dropdowns present. These are NOT wrapped in an `accordion` class wrapper.*

  This does not apply to the sidebar as we use custom cards for that.

  If using the recommended React packages - `component-header` and `component-footer`, the markup changes are handled for you.

**Accordions require the use of Javascript to function. If using Webspark, this has already been done for you. If using the Unity Bootstrap 5 theme in a standalone application, you will need to import the bundled bootstrap javascript file which is available in `@asu/unity-bootstrap-theme/dist/js/bootstrap.bundle.min.js`**

#### Select Form Element
- Select elements should use class `form-select` instead of `form-control`

### Update Unity design component tag attributes to comply with Bootstrap 5 conventions. Details follow:

Regex of tag attribute changes:
* change `data-(toggle|parent|target|dismiss)?=` to `data-bs-$1=`
* change `mr-\d` to `me-$1`
* change `ml-\d` to `ms-$1`
* change `sr-only` to `visually-hidden` to visually hide an element while still allowing it to be exposed to assistive technologies. If you need an element to appear when focused, use `visually-hidden-focusable`.
* change `badge-gray-2` to `text-bg-gray-2` (may be other variations)

New class pattern .text-bg-{color} used in badges

Please note: these replacements encompass the Unity Bootstrap usage of the core Bootstrap attributes. If your application makes use of other Bootstrap classes and conventions, please refer to the official Bootstrap migration documentation linked above to ensure your application is fully updated for Bootstrap 5 when you switch to the `unity-bootstrap-theme`.
