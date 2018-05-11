import {ASUHeaderContainer, ASUFooter, ASUNav, ASUHeader} from './core/core';


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
        component: ASUHeaderContainer,
        props: {
            headerObj: ASUHeaderObj
        }
    },
    {
        component: ASUHeader,
        props: {
            headerObj: ASUHeaderObj
        }
    },
    {
        component: ASUNav,
        props: {
            headerObj: ASUHeaderObj
        },
    },
    {
        component: ASUFooter,
        name: 'ASUFooter',
        props: {
        }
    }
];