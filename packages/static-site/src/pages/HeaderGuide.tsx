import {Link} from "react-router-dom";
import { PagePaths } from "~/routes/config";
import { getRelativePath } from "~/utils/baseUrl";

const HeaderGuide = () => {
  return (
    <div className="container my-6">
    <div className="row">
      <div className="col-12">
          <h1 className="display-4">ASU Header Guide</h1>

          <p>Testing data shows that users see asu.edu as one website. The ASU global header
            should appear on every subdomain and page of asu.edu to ensure and optimal
            user experience as they navigate across asu.edu.</p>

          <h2>The ASU Header is delivered in five ways</h2>

          <h3>Components Header</h3>
          <p><strong>Preferred:</strong> Intended for use within platforms and applications, this
            header variant is built using React as a peer dependency and can be implemented
            using the <a href={getRelativePath("@asu/component-header/index.html")}>
              @asu/component-header</a> package. This version of
            the header does not bundle Cookie Consent or Google Tag Manager.
            Site developers using this header must implement Cookie Consent
            using the @asu/component-cookie-consent package themselves for
            public-facing sites. Similarly, site developers should add Google
            Tag Manager code snippets to their sites. See below for guidance in
            both cases and instructions for installing packages.</p>

          <h3>Components Library Header - deprecated and no longer maintained</h3>
          <p><strong>Deprecated in favor of Component Header:</strong>
            Intended for use within platforms and applications, this
            header variant is built using Preact and can be implemented
            using the <a href={getRelativePath("@asu/components-library/index.html")}>
              @asu/components-library</a> package. This version of
            the header does not bundle Cookie Consent or Google Tag Manager.
            Site developers using this header must implement Cookie Consent
            using the @asu/component-cookie-consent package themselves for
            public-facing sites. Similarly, site developers should add Google
            Tag Manager code snippets to their sites. See below for guidance in
            both cases and instructions for installing packages.</p>

          <h3>ASUThemes component header - deprecated and no longer maintained</h3>
          <p>The ASU Web Standards 2.0 header is made available through
            ASUThemes for use in ASU enterprise apps. It is no longer
            maintained and sites should transition to use of another option.
            This option is an alternative packaging of the deprecated
            Components Library header. Note: this version of the header bundles
            the ASU Cookie Consent but does not provide Google Tag Manager
            code. Read below about how to implement GTM on enterprise sites.
          </p>

          <h3>Integrated CMS header modules and plugins</h3>
          <p>CMS modules and plugins providing the ASU header should implement
            it using the <a href={getRelativePath("@asu/components-header/index.html")}>
              @asu/components-header</a> package and should also
            bundle the Component Cookie Consent component, and Google Tag
            Manager code. Modules and plugins should provide configurability so
            that Cookie Consent can be disabled for sites that are not
            public-facing, and configurability so GTM can be disabled and so
            multiple Google Tag Manager IDs may be used. Additional GTM IDs
            should be additive and not overwrite the ASU Universal GTM ID.
            Header modules and plugins are to be shipped with their respective
            CMS platform distributions.</p>

          <h3>Unity Bootstrap Theme header</h3>
          <p>Primarily used as a reference point, the Bootstrap header
            provided via the <a href={getRelativePath("@asu/unity-bootstrap-theme/index.html")}>
              @asu/unity-bootstrap-theme</a> package is a plain HTML and
            CSS Web Standards 2 header implementation built without embedded
            components for Cookie Consent and Google Tag Manager. Site
            developers using this header must implement Component Cookie Consent
            using the @asu/component-cookie-consent package themselves for
            public-facing sites. Similarly, site developers should add Google
            Tag Manager code snippets to their sites. See below for guidance
            in both cases.</p>

          <h2>Notes on additional requirements for sites using the header</h2>

          <p>In addition to the header, ASU sites must, as a general rule
            implement the Web Standards 2 Cookie Consent component for GDPR
            compliance and include appropriate Google Tag Manager code. Read
            further for options and guidance on how to implement these in your
            application or site.</p>

          <h2>Cookie Consent (GDPR compliance)</h2>
          <p>Before implementing Cookie Consent yourself, please review the
            options for obtaining the ASU Header. Some options provide the
            Cookie Consent component automatically bundled.</p>

          <p>If you need to install the Cookie Consent component yourself,
            please see the section &quot;Installing Unity components from
            the Unity package registry.&quot;</p>

          <h2>Google Tag Manager (GTM)</h2>
          <p>See the <Link to={PagePaths.DATALAYERGUIDE}>Google Tag Manager (GTM) and Data
          Layer</Link> page for details on using Google Tag Manager in your site
          or application.</p>

          <h2>Installing Unity components from the Unity package registry</h2>

          <p><a href="https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry">
            Learn how to use the private package registry</a> and begin using
              Unity packages in your ASU site or application. <a href="https://github.com/orgs/ASU/packages?repo_name=asu-unity-stack">
              Visit the page for the @asu package you wish to use</a> to
            find further instructions on how to install and
            implement the package for your site or application.</p>

        </div>
    </div>
    </div>
  );
};

export default HeaderGuide;
