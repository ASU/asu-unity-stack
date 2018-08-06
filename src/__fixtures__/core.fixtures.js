import {
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox,
    AsuButton,
    AsuRfiLargeButton,
} from '../core/core';

import navtree from '../core/components/ASUNavDefaultTree';
import ASUHeaderObj from "../core/components/ASUBrandHeaderDefaults";
import styles from "../core/components/atoms/buttons/AsuButtons.css";

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
        component: ASUSearchBox,
        props: {
            drupal: true
        },
        name: 'normal'
    },
    {
        component: AsuButton,
        name: 'CTA Primary Button',
        props: {
          label: 'Primary CTA',
          className: styles.btn + ' ' + styles.btnPrimary,
        }
    },
    {
        component: AsuButton,
        name: 'CTA Primary Button Large',
        props: {
          label: 'Large Primary CTA',
          className: styles.btn + ' ' + styles.btnPrimary + ' ' + styles.btnLg,
        }
    },
    {
        component: AsuButton,
        name: 'CTA Secondary Button',
        props: {
          label: 'Secondary CTA',
          className: styles.btn + ' ' + styles.btnSecondary,
        }
    },
    {
        component: AsuButton,
        name: 'CTA Secondary Button Large',
        props: {
          label: 'Large Secondary CTA',
          className: styles.btn + ' ' + styles.btnSecondary + ' ' + styles.btnLg,
        }
    },
    {
        component: AsuButton,
        name: 'RFI Button',
        props: {
          label: 'RFI, apply, and visit button',
          className: styles.btn + ' ' + styles.btnGold,
        }
    },
    {
        component: AsuButton,
        name: 'RFI Button Large',
        props: {
          label: 'Large RFI, apply, and visit button',
          className: styles.btn + ' ' + styles.btnGold + ' ' + styles.btnLg,
        }
    },
    {
        component: AsuButton,
        name: 'Explore Programs Button',
        props: {
          label: 'Explore programs button',
          className: styles.btn + ' ' + styles.btnBlue,
        }
    },
    {
        component: AsuButton,
        name: 'Explore Programs Button Large',
        props: {
          label: 'Large explore Programs Button',
          className: styles.btn + ' ' + styles.btnBlue + ' ' + styles.btnLg,
        }
    }
];
