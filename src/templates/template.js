/**
 * Created by ctestama on 4/25/18.
 */
const Item = ({ id, body }) => (`
    <div>
        <div id=${id}>${body}</div>
    </div>  
`);

const FullPageSSR =  ({ header, footer, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
      <style>
        #main-content {
            height: 1200px;
        }
        </style>
    </head>
    <body>
      <div>${header}</div>
      <div id="main-content"> </div>
    </body>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="/core/core.development.js"></script>
    <script>
        var ASUHeader = {};
    
        ASUHeader.site_menu = {
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
        
        console.log(ASUnity, 'ASUNITY');
    
        ASUHeader.site_title = {title: "ASU Custom Site Title", parent_org: "ASU Custom Parent Org", site_url: "https://asu.edu", parent_org_url: "https://uto.asu.edu"};
        
        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUHeaderContainer, {headerObj: ASUHeader}), document.getElementById("asu-header-container"));
    </script>
    
    <footer>
        ${footer}
    </footer>
  </html>
`);

export {Item, FullPageSSR};