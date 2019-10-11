import React from 'react';
import { storiesOf } from '@storybook/react';
import ASUBrandHeader from './ASUBrandHeader';
import ASUHeaderObj from "./ASUBrandHeaderDefaults";

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


storiesOf('ASUBrandHeader', module)
  .add('basic', () => (
    <ASUBrandHeader {...ASUHeaderObj}/>
  ));

  