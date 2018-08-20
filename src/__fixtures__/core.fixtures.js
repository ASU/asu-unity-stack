import {
    ASUFooter,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUGlobalSearch
} from '../core/core';

import navtree from '../core/components/ASUNavDefaultTree';
import ASUHeaderObj from "../core/components/ASUBrandHeaderDefaults";

ASUHeaderObj.siteMenu = [
    {
        title:"Home",
        path:"http://www.asu.edu/absolute_path"
    },
    {
        title:"Degree Programs",
        path:"/absolute_path/page",
        children: [
            {
                title:"Admissions",
                path:"/?url=variable",
                children: [
                    {
                        title:"Student Life",
                        path:"/#hash"
                    }
                ]
            },
            {
                title:"Ross",
                path:"https://www.asu.edu/"
            }
        ]
    },
];

ASUHeaderObj.siteTitle = {
    siteTitle: "ASU Custom Site Title",
    siteUrl: "https://asu.edu",
    parentOrg: "ASU Custom Parent Org",
    parentOrgUrl: "https://uto.asu.edu"
};


export default [
    {
        component: ASUFooter,
        props: {
        },
        name: 'todo'
    },
    {
        component: ASUBrandHeader,
        props: ASUHeaderObj,
        name: 'normal'
    },
    {
        component: ASUBrandHeader,
        props: ASUHeaderObj,
        state: {
          renderClient: false
        },
        name: 'pre-rendered'
    },
    {
        component: ASULink,
        props: {
            href: "https://www.asu.edu"
        },
        children: (
            "ASU Link Text"
        ),
        name: 'normal'
    },
    {
        component: ASULogin,
        props: {

        },
        state: {
            loggedIn: true
        },
        name: 'logged in'
    },
    {
        component: ASULogin,
        props: {

        },
        state: {
            loggedIn: false
        },
        name: 'logged out'
    },
    {
        component: ASUNav,
        props: {
            nav: navtree
        },
        name: 'normal'
    },
    {
        component: ASUGlobalSearch,
        props: {
            drupal: true
        },
        name: 'normal'
    }
];