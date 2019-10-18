/**
 * Created by ctestama on 4/25/18.
 */
const Item = ({ id, body }) => (`
    <div>
        <div id=${id}>${body}</div>
    </div>  
`);

const ComponentPage =  ({ title, props}) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
      <style>
        #main-content {
            height: 1200px;
        }
      </style>
        <script src="//cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,es6,Array.prototype.includes"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/custom-elements-es5-adapter.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/webcomponents-sd-ce.js"></script>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="/webcomponents/webcomponents.development.js"></script>
    </head>
    <body>
        <asu-unity-component name="ASUBrandHeader" props='${props}'></asu-unity-component>
        <div id="main-content"> </div>
    </body>
    <footer>
    </footer>
  </html>
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
        ReactDOM.hydrate(React.createElement(ASUBrandHeader, ASUHeader), document.getElementById("asu-header-container"));
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
        ReactDOM.hydrate(React.createElement(ASUBrandHeader, ASUHeader), document.getElementById("asu-header-container"));
    </script>
    
    <footer>
        ${footer}
    </footer>
  </html>
`);

export {Item, FullPageSSR, FullPageSSRProd, ComponentPage};