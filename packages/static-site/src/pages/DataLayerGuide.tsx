import { FC } from "react";
import { Link } from "react-router-dom";
import { PagePaths } from "~/routes/config";

const gtmCodes = {
  universal: "GTM-KDWN8Z",
  etDev: "GTM-PX7M299",
  etQA: "GTM-W3FGR6T",
  etProd: "GTM-WPVTBHL",
};

const GtmCodeExample: FC<{ gtmCode: string }> = ({ gtmCode }) => {
  /**
   * TODO: Could this head and body snippet be in one shared place?
   * That way the code could be used in actual code as well as documentation.
   */

  const headScript = `
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${gtmCode}');</script>
  <!-- End Google Tag Manager -->`;
  const bodyScript = `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmCode}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;

  return (
    <>
      <p>
        Paste this code as high in the <strong>{`<head>`}</strong> tag of the
        page as possible.
      </p>
      <pre>
        <code>{headScript}</code>
      </pre>
      <p>
        Additionally, paste this code immediately after the opening{" "}
        <strong>{`<body>`}</strong> tag.
      </p>
      <pre>
        <code>{bodyScript}</code>
      </pre>
    </>
  );
};

const DataLayerGuide = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Google Tag Manager (GTM) and data layer</h1>
          <p>On this page:</p>
          <ul>
            <li>
              <a href="#gtm">
                Adding the Google Tag Manager to your site or application
              </a>
            </li>
            <li>
              <a href="#datalayer">
                Adding the data layer to your site or application
              </a>
            </li>
          </ul>

          <a id="gtm"></a>
          <h2>Google Tag Manager</h2>
          <p>
            Before implementing Google Tag Manager yourself, please review the{" "}
            <Link to={PagePaths.HEADERGUIDE}>options for obtaining the ASU Header</Link>. Some
            options provide the ASU Google Tag Manager code automatically
            bundled.
          </p>

          <h3>Benefits of Becoming part of GTM Product Community:</h3>
          <ul>
            <li>
              Receive consultation/assistance with GTM implementation and
              maintenance
            </li>
            <li>
              Receive information on any changes being made to Enterprise UTO
              GTM and how any changes might affect your site
            </li>
            <li>Provide feedback for any changes submitted</li>
            <li>
              Become a member of the larger GTM community as a member of a
              private slack channel to keep up with all the latest GTM news
            </li>
            <li>
              Coming Soon — Link to Service Now Request to register site –
              https://asu.service-now.com/xxxxxxx
            </li>
          </ul>

          <h3>Best Practices for Implementing GTM</h3>
          <p>Install on test site first</p>
          <ul>
            <li>Confirm data is being collected properly through GA</li>
            <li>
              Confirm any PII data is being redacted by javascript variables in
              GTM
            </li>
            <ul>
              <li>PII Data variables accounted for in javascript include:</li>
              <ul>
                <li>E-mail</li>
                <li>Phone number</li>
                <li>First name, last name</li>
                <li>Passwords</li>
                <li>Zip codes</li>
                <li>ASURITE IDs</li>
              </ul>
              <li>Insure NO PII is being exposed on your site!</li>
            </ul>
            <li>
              Confirm GTM functioning properly in test environment and nothing
              is breaking
            </li>
            <li>Reach out to UTO GTM Team if you need assistance</li>
            <li>If all looks well — deploy to prod!</li>
            <li>Check in prod to insure everything is working correctly</li>
          </ul>

          <p>
            To implement Google Tag Manager, insert the appropriate snippets
            found below within the body tag of your HTML as close to the top of
            the page as possible. Further details can be found in the
            <a href="https://developers.google.com/tag-manager/quickstart">
              Google Tag Manager Quickstart Guide
            </a>
            .
          </p>

          <p>Most ASU sites should implement the ASU Universal GTM.</p>

          <p>
            Enterprise sites should implement the ASU Enterprise QA GTM on their
            &quot;DEV&quot; environment, and the ASU Enterprise Production GTM on their
            &quot;QA&quot; and &quot;Production&quot; environments. This may be configured using
            environmental variables. Each environment has its own GTM ID
            associated with it and care must be taken to use the appropriate GTM
            ID for each application environment.
          </p>

          <p>
            Some units have their own GTM IDs. When multiple GTM IDs need to be
            used in a single site or application, follow the guidance on
            <a href="https://developers.google.com/tag-manager/devguide#multiple-containers">
              Multiple Containers on a Page
            </a>
            .
          </p>

          <h3>ASU universal GTM code</h3>
          <GtmCodeExample gtmCode={gtmCodes.universal} />

          <h3>ET Enterprise Webapp Development GTM</h3>
          <GtmCodeExample gtmCode={gtmCodes.etDev} />

          <h3>ET Enterprise Webapp QA GTM</h3>
          <GtmCodeExample gtmCode={gtmCodes.etQA} />

          <h3>ET Enterprise Webapp Production GTM</h3>
          <GtmCodeExample gtmCode={gtmCodes.etProd} />

          <a id="datalayer"></a>
          <h2>Adding the data layer</h2>

          <p>
            The data layer is an object used by Google Tag Manager to pass
            information to Google Analytics based on click and change events
            associated with tags in your site or application. If you are using
            the Unity Bootstrap Theme (`unity-bootstrap-theme` package), you
            will get the data layer attributes without additional effort if you
            copy the Unity markup. You must first enable GTM and the data layer,
            as described, below.
          </p>

          <p>
            Follow the instructions for
            <a href="https://developers.google.com/tag-platform/tag-manager/web/datalayer">
              creating the Data Layer
            </a>{" "}
            after setting up Google Tag Manager in your site or web application.
          </p>

          <p>
            Ensure your markup includes appropriate `data-ga` and `data-ga-*`
            attributes for your purpose. The Unity Bootstrap Theme
            (`unity-bootstrap-theme`) includes these attributes in its reference
            code. The values of these attributes are used when the data layer
            event is submitted for click or change events on the tag, but to
            enable that to happen, you must first...
          </p>

          <p>
            Add event listeners to your code to capture click and change events
            related to your `data-ga` attributes and to push that event to the
            data layer. As a help to get you started, the
            `unity-bootstrap-theme` package&apos;s `dist/js/data-layer.js` file can
            serve as a starting point or as a reference for implementing your
            own data layer push code.
          </p>

          <p>
            You should be initilaizing the GA push events and header scroll
            behavior similar to the following code snippet if you implement the
            Bootstrap header: <br />
          </p>
          <pre>
            <code>
              {`
            <script type="text/javascript" src="example/path/to/@asu/unity-bootstrap-theme/js/data-layer.js"></head> </script></head>
            <script type="text/javascript" src="./@asu/unity-bootstrap-theme/js/global-header.js"></head> </script></head>
            `}
            </code>
          </pre>
          <p>
            Then, the following code should be placed towards the bottom of your
            html doc or deferred. This initializes the data layer and the global
            header classes
          </p>
          <pre>
            {" "}
            <code>
              {`
            <script></head>
              window.initDataLayer();
              window.initGlobalHeader();
            </script></head>
            `}
            </code>{" "}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DataLayerGuide;
