# [@asu/component-news-v2.0.0](https://github.com/asu/asu-unity-stack/compare/@asu/component-news-v1.1.2...@asu/component-news-v2.0.0) (2023-05-23)


### Features

* **unity-bootstrap-theme:** MAIN migration to BS5 PR ([#992](https://github.com/asu/asu-unity-stack/issues/992)) ([8c74ce4](https://github.com/asu/asu-unity-stack/commit/8c74ce4dc65278839b207b9ae895ea76e8e2195d))


### BREAKING CHANGES

* **unity-bootstrap-theme:** New BS5 theme is used

* fix(app-webdir-ui): replaced old bs4 stylesheet in storybook

Added Added sass loader in storybook webpack to show updated bs5 styles

* fix(component-footer): changed classes to new accordion

* fix(unity-bootstrap-theme): fixed styles for global footer

* fix(unity-bootstrap-theme): fixed breakpoints for footer

* fix(asu-unity-stack): sitename position in header

* fix(unity-bootstrap-theme): update accordion classes in bs5 footer, fix story widths

* fix(unity-bootstrap-theme): ensure padding is included with header/footer styles

* chore(component-events): update SB images

* chore(asu-unity-stack): change script for package.json

* fix(unity-bootstrap-theme): fixed mobile styles for accordions

fix(unity-bootstrap-theme): fixed overflow on accordion headers for small mobile

* fix(unity-bootstrap-theme): add missing foldable card accordion wrapper

* docs(unity-bootstrap-theme): updated accordion upgrade guide

* docs(unity-bootstrap-theme): fix typo

* fix(unity-bootstrap-theme): remove opcity rule for <hr/> elemtns

By default BS5 adds a rule to apply opacity

* fix(unity-bootstrap-theme): anchor menu story wasn't showing header and hero component

* fix(unity-bootstrap-theme): change className to class for Calendar Code

It only looks like JSX

* docs(unity-bootstrap-theme): add comments to a strange use case

* fix(unity-bootstrap-theme): added mt-3 class on accordion stories and removed card class

* fix: update Jenkinsfile to node 18.16
