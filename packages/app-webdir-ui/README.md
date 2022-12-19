# App Webdir UI
This package is intended to provde the components needed for Search, the
designs for which can be found [here](https://xd.adobe.com/view/41641639-f009-41e2-802c-6859906edb2c-1437/grid/).

In practice, only two components will ever be used, to wit `SearchPage` and `WebDirectoryComponent`, the rest are to be used within those components.
Let's take them one at a time.

## `SearchPage`
The `SearchPage` component can take two props, `searchURL` and `loggedIn`.
- `searchURL` is a string that tells the component where to search. The endpoint names
will be appended to this. For example, by providing the URL "https://dev-asu-isearch.ws.asu.edu/api/v1/, the staff data will be found at https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-profiles/faculty-staff.
- `loggedIn` is a boolean that tells the component if the user is currently logged in. In
practice this simply controls whether the admin buttons are displayed.

To see an example of how to use this page, take a look at `examples/index.html`.
You can also see the storybook example at `src/SearchPage/index.stories.js`.

## `WebDirectoryComponent`
This component is a bit more complicated. It's props, `searchType`, `ids`, and `searchURL`, dictate which of three different scenarios is active.

- `searchType` can be one of three different values:
  - departments
  - people
  - people_departments
- `ids` is either a lit of comma-separated ids (when `searchType` is 'departments) or
a list of objects containing `asuriteid` and `dept` pairs (when `searchType` is 'people' or 'people_departments')
- `searchURL` is a string that tells the component where to search. The endpoint names
will be appended to this. For example, by providing the URL "https://dev-asu-isearch.ws.asu.edu/api/v1/, the data will be found at https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-departments/profiles.


Here's some examples of the props:

```
Scenario 1 - Display Web Directory for departments:
      webdirUI.initWebDirectory({
        targetSelector: "#searchPageContainer",
        props: {
          searchType: 'departments',
          ids: ['1457', '1374'],
          searchURL="https://dev-asu-isearch.ws.asu.edu/api/v1/"
          filters: {...},
        },
      });
```
```
Scenario 2 - Display Web Directory for people:
      webdirUI.initWebDirectory({
        targetSelector: "#searchPageContainer",
        props: {
          searchType: 'people',
          ids: [{asuriteid: 123, dept: 1457}, {asuriteid: 456, dept: 1374}],
          searchURL="https://dev-asu-isearch.ws.asu.edu/api/v1/"
          filters: {...},
        },
      });
```
```
Scenario 3 - Display Web Directory for people and departments:
      webdirUI.initWebDirectory({
        targetSelector: "#searchPageContainer",
        props: {
          searchType: 'people_departments',
          ids: [{asuriteid: 123, dept: 1457}, {asuriteid: 456, dept: 1374}],
          searchURL="https://dev-asu-isearch.ws.asu.edu/api/v1/"
          filters: {...},
        },
      });
```

To see an example of how to use this page, take a look at `examples/web-directory.html`.
You can also see the storybook example at `src/WebDirectoryComponent/index.stories.js`.

