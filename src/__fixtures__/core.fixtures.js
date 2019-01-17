import {
    ASUFooter,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUGlobalSearch,
    ASUButton
} from '../core/core';

import navtree from '../core/components/molecules/nav/ASUHeaderMenuDefaults';
import ASUHeaderObj from "../core/components/organisms/headers/ASUBrandHeaderDefaults";
import styles from "../core/components/atoms/buttons/buttons.css";
import Locations from "../core/locations.js";

console.log(Locations, 'THE LOCATIONS');

ASUHeaderObj.siteMenu = [
    {
        title:"Home",
        text: "Home",
        classes: "parent",
        href:"http://www.asu.edu/absolute_path"
    },
    {
        title:"Degree Programs",
        text: "Degree Programs",
        classes: "parent",
        href:"/absolute_path/page",
        subtree: [
            {
                title:"Admissions",
                text:"Admissions",
                href:"/?url=variable",
                subtree: [
                    {
                        title:"Student Life",
                        text:"Student Life",
                        href:"/#hash"
                    }
                ]
            },
            {
                title:"Ross",
                text:"Ross",
                href:"https://www.asu.edu/"
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
    },
    {
        component: ASUButton,
        name: 'CTA Primary Button',
        props: {
          label: 'Primary CTA',
          className: styles.btn + ' ' + styles.btnPrimary,
        }
    },
    {
        component: ASUButton,
        name: 'CTA Primary Button Large',
        props: {
          label: 'Large Primary CTA',
          className: styles.btn + ' ' + styles.btnPrimary + ' ' + styles.btnLg,
        }
    },
    {
        component: ASUButton,
        name: 'CTA Secondary Button',
        props: {
          label: 'Secondary CTA',
          className: styles.btn + ' ' + styles.btnSecondary,
        }
    },
    {
        component: ASUButton,
        name: 'CTA Secondary Button Large',
        props: {
          label: 'Large Secondary CTA',
          className: styles.btn + ' ' + styles.btnSecondary + ' ' + styles.btnLg,
        }
    },
    {
        component: ASUButton,
        name: 'RFI Button',
        props: {
          label: 'RFI, apply, and visit button',
          className: styles.btn + ' ' + styles.btnGold,
        }
    },
    {
        component: ASUButton,
        name: 'RFI Button Large',
        props: {
          label: 'Large RFI, apply, and visit button',
          className: styles.btn + ' ' + styles.btnGold + ' ' + styles.btnLg,
        }
    },
    {
        component: ASUButton,
        name: 'Explore Programs Button',
        props: {
          label: 'Explore programs button',
          className: styles.btn + ' ' + styles.btnBlue,
        }
    },
    {
        component: ASUButton,
        name: 'Explore Programs Button Large',
        props: {
          label: 'Large explore Programs Button',
          className: styles.btn + ' ' + styles.btnBlue + ' ' + styles.btnLg,
        }
    }
];
