import {
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox
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
    title: "ASU Custom Site Title",
    parentOrg: "ASU Custom Parent Org",
    siteUrl: "https://asu.edu",
    parentOrgUrl: "https://uto.asu.edu"
};


export default [
    {
        component: ASUFooter,
        props: {
            test: 'nonempty'
        },
        name: 'normal'
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
        name: 'dehydrated'
    },
    {
        component: ASUHeader,
        props: {
            logo: ASUHeaderObj.logo
        },
        name: 'normal'
    },
    {
        component: ASULink,
        props: {

        },
        name: 'normal'
    },
    {
        component: ASULogin,
        props: {

        },
        name: 'normal'
    },
    {
        component: ASUNav,
        props: {
            nav: navtree
        },
        name: 'normal'
    },
    {
        component: ASUSearchBox,
        props: {
            drupal: true
        },
        name: 'normal'
    }
];