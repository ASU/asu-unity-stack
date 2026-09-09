# App Webdir UI
This package is intended to provde the components needed for Search, the
designs for which can be found [here](https://xd.adobe.com/view/41641639-f009-41e2-802c-6859906edb2c-1437/grid/).

In practice, only two components of this package are intended for use `SearchPage` and `WebDirectoryComponent`, the rest are to be used within those components.

## Shared Props
Used by `SearchPage` and `WebDirectoryComponent`

| Prop Name | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `API_URL` | string | URL endpoint for searching. | - |
| `searchApiVersion` | string | API version string for constructing the API URL. | - | false |

**Full API URL format:**

`{{API_URL}}{{searchApiVersion}}endpoint/path/with?parameters`.

**Example result:**

`https://asuapp2dev.prod.acquia-sites.com/api/v1/webdir-profiles/faculty-staff`


## `SearchPage`
The `SearchPage` component has 3 props: `API_URL`, `searchApiVersion`, and `loggedIn`.

| Prop Name | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `API_URL` | string | See [Shared Props](#shared-props) section| - |
| `searchApiVersion` | string | See [Shared Props](#shared-props) section| - |
| `loggedIn` | boolean | Indicates whether the user is currently logged in. Controls whether admin buttons are displayed. | false |

To see an example of how to use this page, take a look at the storybook example at `src/SearchPage/index.stories.js`.

## `WebDirectoryComponent`

The `WebDirectoryComponent` supports multiple display scenarios based on `searchType` and ID inputs.

| Prop Name | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `API_URL` | string | See [Shared Props](#shared-props) section| - |
| `searchApiVersion` | string | See [Shared Props](#shared-props) section| - |
| `searchType` | string | Search mode. Supported values: `departments`, `faculty_rank`, `people`, `people_departments`. | - |
| `ids` | string | Comma-separated IDs. For `people` and `people_departments`, pass pairs in `asurite:dept` format (example: `jdoe:1234,asmith:5678`). | - |
| `deptIds` | string | Comma-separated department IDs. Used by `departments` and `faculty_rank`. | - |
| `profileURLBase` | string | Base URL used for profile links. | `https://search.asu.edu` |
| `appPathFolder` | string | Optional app path folder used in generated links. | - |
| `display` | object | Display config (pager, sort, profiles per page, grid mode, profile exclusions). | - |
| `filters` | object | Filters sent with requests (employee, expertise, title, campuses). | - |
| `alphaFilter` | string | Enables last-initial filter UI when set to `"true"`. | `"false"` |

Examples of props:

```javascript
// Scenario 1 - Display Web Directory for departments
{
  searchType: "departments",
  deptIds: "1457,1374",
  ids: "",
  API_URL: "https://asuapp2dev.prod.acquia-sites.com/",
  searchApiVersion: "api/v1/",
  filters: {},
}
```

```javascript
// Scenario 2 - Display Web Directory for people
{
  searchType: "people",
  ids: "jdoe:1457,asmith:1374",
  deptIds: "",
  API_URL: "https://asuapp2dev.prod.acquia-sites.com/",
  searchApiVersion: "api/v1/",
  filters: {},
}
```

```javascript
// Scenario 3 - Display Web Directory for people and departments
{
  searchType: "people_departments",
  ids: "jdoe:1457,asmith:1374",
  deptIds: "",
  API_URL: "https://asuapp2dev.prod.acquia-sites.com/",
  searchApiVersion: "api/v1/",
  filters: {},
}
```

```javascript
// Scenario 4 - Departments view with custom display options and employee/title filters
{
  searchType: "departments",
  deptIds: "1457,1374",
  ids: "",
  API_URL: "https://asuapp2dev.prod.acquia-sites.com/",
  searchApiVersion: "api/v1/",
  display: {
    defaultSort: "last_name",
    profilesPerPage: "12",
    usePager: "1",
    grid: "true",
    doNotDisplayProfiles: "jdoe,asmith",
  },
  filters: {
    employee: "1",
    title: "Professor",
  },
  alphaFilter: "true",
}
```

```javascript
// Scenario 5 - Faculty rank view with expertise/campus filters and compact list display
{
  searchType: "faculty_rank",
  deptIds: "1457",
  ids: "",
  API_URL: "https://asuapp2dev.prod.acquia-sites.com/",
  searchApiVersion: "api/v1/",
  display: {
    defaultSort: "people_order",
    profilesPerPage: "6",
    usePager: "0",
    grid: "false",
  },
  filters: {
    expertise: "Data Science",
    campuses: "Tempe",
  },
  alphaFilter: "false",
}
```

Display behavior note:

- For `departments`, `people`, and `people_departments`, rendering goes through `ASUSearchResultsList`, so options like `profilesPerPage`, `usePager`, `defaultSort`, and `doNotDisplayProfiles` are applied there.
- For `faculty_rank`, rendering goes through `FacultyRankTabPanels`. Grid mode and filter inputs still apply, but list-specific behavior may differ from non-`faculty_rank` modes.

To see an example of how to use this page, take a look at the storybook example at `src/WebDirectoryComponent/index.stories.js`.
