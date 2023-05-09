# Upgrading to the Unity Bootstrap 5 Theme (`unity-bootstrap-theme`)

## Who this document is for

CMS maintainers and application developers who have been using the Unity Bootstrap 4 Theme (package name `bootstrap4-theme`).

## Purpose of this document

To describe the effort necessary to move from the `bootstrap4-theme` package to the `unity-bootstrap-theme` package.

## Official Bootstrap 5 migration documentation

[Migrating to v5](https://getbootstrap.com/docs/5.1/migration/)

## Steps to upgrade to the Unity Bootstrap 5 Theme

### Remove `bootstrap4-theme` package
`yarn remove @asu/bootstrap4-theme`

### Add `unity-bootstrap-theme` package
`yarn add @asu/unity-bootstrap-theme`

You may want to specify a release tag.

### Add new peerDependency for fontawesome
Will vary from project to project - some CMS's supply FontAwesome as part of the application, while standalone applicaitons will want to add the requirement to their application, like so:
`yarn add @fortawesome/fontawesome-free^5.15.3`

### Replace include/require/imports in your application with the new package.
Note the updated CSS files in `dist/`. There are more options so don't have to include CSS you don't use.

* `dist/css/unity-bootstrap-theme.bundle.css` - base theme with header and footer CSS
* `dist/css/unity-bootstrap-theme.css` - base theme without header and footer CSS
* `dist/css/unity-bootstrap-header.css` (optional) - header CSS only - don't use if using the Unity `component-header` React component
* `dist/css/unity-bootstrap-footer.css` (optional) - footer CSS only - don't use if using the Unity `component-footer` React component

Note: the optional header and footer CSS require the base theme file to be included. If you want a truly standalone header with no other CSS dependencies, use the React version.

See README.md for more details about using and extending the Unity Bootstrap 5 theme in your application.

### ensure fontawesome is included/required/imported

### update Unity design component markup used by your application. Most design components' markup changed little or not at all in this update. A few to pay close attention to are:
TODO X
TODO Y
TODO Z

### Update Unity design component tag attributes to comply with Bootstrap 5 conventions. Details follow:
Regex of tag attribute changes:
* change `data-(toggle|parent|target|dismiss)?=` to `data-bs-$1=`
* change `mr-\d` to `me-$1`
* change `ml-\d` to `ms-$1`
* change `sr-only` to `visually-hidden`
* change `badge-gray-2` to `text-bg-gray-2` (may be other variations)

New class pattern .text-bg-{color} used in badges

Please note: these replacements encompass the Unity Bootstrap usage of the core Bootstrap attributes. If your application makes use of other Bootstrap classes and conventions, please refer to the official Bootstrap migration documentation linked above to ensure your application is fully updated for Bootstrap 5 when you switch to the `unity-bootstrap-theme`.

