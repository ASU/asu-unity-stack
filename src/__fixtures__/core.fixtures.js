import {
    ASUFooter,
    ASUHeader,
    ASUHeaderContainer,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox
} from '../core/core';

import navtree from '../core/components/ASUNav.json';

const ASUHeaderObj = {};

ASUHeaderObj.site_menu = {
    json: [
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
    ]
};

ASUHeaderObj.site_title = {title: "ASU Custom Site Title", parent_org: "ASU Custom Parent Org", site_url: "https://asu.edu", parent_org_url: "https://uto.asu.edu"};

export default [
    {
        component: ASUFooter,
        props: {
            test: 'nonempty'
        },
        name: 'normal'
    },
    {
        component: ASUHeaderContainer,
        props: {
            headerObj: ASUHeaderObj
        },
        name: 'normal'
    },
    {
        component: ASUHeader,
        props: {
            headerObj: ASUHeaderObj
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