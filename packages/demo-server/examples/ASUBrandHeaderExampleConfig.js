const ASUBrandHeaderExampleConfig = {
  "siteMenu": [
    {
      "title":"Home",
      "path":"http://www.asu.edu/absolute_path"
    },
    {
      "title":"Degree Programs",
      "path":"/absolute_path/page",
      "children": [
        {
          "title":"Admissions",
          "path":"/?url=variable",
          "children": [
            {
              "title":"Student Life",
              "path":"/#hash"
            }
          ]
        },
        {
          "title":"Ross",
          "path":"https://www.asu.edu/"
        }
      ]
    }
  ],
  "logo": {
    "src": "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png",
    "href": "https://www.asu.edu/",
    "alt": "ASU"
  },
  "siteTitle": {
    "title": "ASU Custom Site Title",
    "parentOrg": "ASU Custom Parent Org",
    "siteUrl": "https://asu.edu",
    "parentOrgUrl": "https://uto.asu.edu"
  },
  "login": {
    "loginUrl": "https://weblogin.asu.edu/cgi-bin/login",
    "logoutUrl": "/cas/logout",
    "loggedIn": false
  }
};

export default ASUBrandHeaderExampleConfig;