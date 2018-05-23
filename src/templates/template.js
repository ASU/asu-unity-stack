/**
 * Created by ctestama on 4/25/18.
 */
const Item = ({ id, body }) => (`
    <div>
        <div id=${id}>${body}</div>
    </div>  
`);

const FullPageSSR =  ({ header, footer, title, props}) => (`
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
        var ASUHeader = ${props};
        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUBrandHeader, {headerObj: ASUHeader}), document.getElementById("asu-header-container"));
    </script>
    
    <footer>
        ${footer}
    </footer>
  </html>
`);

const FullPageSSRProd =  ({ header, footer, title, props}) => (`
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
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="/core/core.production.js"></script>
    <link rel="stylesheet" type="text/css" href="/core/core.production.css">
    <script>
        var ASUHeader = ${props};
        ReactDOM.hydrate(React.createElement(ASUnity.core.ASUBrandHeader, {headerObj: ASUHeader}), document.getElementById("asu-header-container"));
    </script>
    
    <footer>
        ${footer}
    </footer>
  </html>
`);

export {Item, FullPageSSR, FullPageSSRProd};