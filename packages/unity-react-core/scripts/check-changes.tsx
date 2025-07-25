import React from "react";
import { AnchorMenu } from "../src/components/AnchorMenu/AnchorMenu";
import { Article } from "../src/components/Article/Article.jsx";
import { Accordion } from "../src/components/Accordion/Accordion.jsx";
import { Card } from "../src/components/Card/Card.jsx";
import { Pagination } from "../src/components/Pagination/Pagination.jsx"
import { Breadcrumbs } from "../src/components/Breadcrumbs/Breadcrumbs"
import { getBootstrapHTML } from '../src/components/GaEventWrapper/useBaseSpecificFramework.js';

const fs = require('fs');
const path = require('path');

function convertToHTML(OLD_DATE){

/**
 * 2. OJAS TODO: Use a hashmap or object, {}, have each component have it's own key with values
 * You only have to have one or two for now. We can add more laterr
 * Example:
 * const componentMap = {
 *   Pagination: {
 *      reactComponent: Pagination, // This is the Pagination we have imported at the top of the file
 *      props: {
 *.       type: "default",
          background: "white",
          totalPages: 4,
          onChange: () => null
 *        }
 *   }
 */
  const componentMap = {
    Accordion: {
      reactComponent: Accordion,
      props: {
        cards: [
               {
                 content: {
                   header: "Accordion Card 1",
                   body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
                 },
               },
               {
                 content: {
                   header: "Accordion Card 2",
                   body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
                 },
               },
               {
                 content: {
                   header: "Accordion Card 3, opened card",
                   body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
                 },
               },
             ],
             openedCard: 3,
      }
    },
  }


/**
  3.OJAS TODO: Create function that iterates through the componentMap and generates the HTML for each component
  and instead of writing individual html of each component, we can create a temporary object and then write that to the file. Using a try catch here would be good so we can log any errors

FUNCTION generateAllComponents()
    // DECLARE an empty object to store component HTML and metadata
    DECLARE emptyObjectToWriteTo AS {}

    // ITERATE over each entry in the componentMap
    FOR EACH componentName, component IN componentMap
        // Generate HTML for the current component
        // This is conceptually similar to <Pagination {...component.props} /> in a React context
        DECLARE html AS RESULT OF getBootstrapHTML(CreateElement(component.reactComponent, component.props))

        // Store the generated HTML and its size in the temporary object
        SET emptyObjectToWriteTo[componentName] TO {
            html: html,
            // We can use this as an easy way to check for changes in the future without having to parse the html
            size: LENGTH(html)
        }
    END FOR

    // At this point, 'emptyObjectToWriteTo' holds all the generated HTML and sizes.
    RETURN emptyObjectToWriteTo
END FUNCTION
*/

function generateAllComponents(){
  const emptyObjectToWriteTo = {};

    for(const[key, value] of Object.entries(componentMap)){
     try{
       const html = getBootstrapHTML(React.createElement(value.reactComponent, value.props));
       emptyObjectToWriteTo[key] = {
         html: html,
         size: html.length
       };
     } catch(error){
       emptyObjectToWriteTo[key] = {
         html: null,
         size: 0
       };
      }
  }
  return emptyObjectToWriteTo;
}

/*
  * 4. OJAS TODO: Write the results of generateAllComponents to a file.
  * Same as below but since you ahve all the component data in a single hash map, you can just name it `components-${DATE_TIMESTAMP}.json`
  *
  * Exmaple:
  * const results = generateAllComponent()
  *
  * Make sure you serialize(make data easy to store and read) the data before writing it to the file using JSON.stringify
  */

const fileName = `components-${OLD_DATE}.json`;
const filePath = path.join(__dirname, fileName);
const result = generateAllComponents()

fs.writeFileSync(filePath, JSON.stringify(result), 'utf8');
}
const args = process.argv.slice(0);
if (args[2]) {
convertToHTML(args[2]);
};
