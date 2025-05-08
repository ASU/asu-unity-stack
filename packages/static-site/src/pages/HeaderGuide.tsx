import { Link } from "react-router-dom";
import { PagePaths } from "~/routes/config";
import { getRelativePath } from "~/utils/baseUrl";

const HeaderGuide = () => {
  return (
    <div className="container my-6">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4">ASU Header Guide</h1>

          <p>
            Testing data shows that users see asu.edu as one website. The ASU
            global header should appear on every subdomain and page of asu.edu
            to ensure and optimal user experience as they navigate across
            asu.edu.
          </p>

          <h2>The ASU Header is delivered in five ways</h2>

          <h3>Components Header</h3>
          <p>
            <strong>Preferred:</strong> Intended for use within platforms and
            applications, this header variant is built using React as a peer
            dependency and can be implemented using the{" "}
            <a
              href={getRelativePath("@asu/component-header-footer/index.html")}
            >
              @asu/component-header-footer
            </a>{" "}
            package. This version of the header does not bundle Cookie Consent
            or Google Tag Manager. Site developers using this header should read
            the{" "}
            <Link to={PagePaths.DATALAYERGUIDE}>GTM and Data Layer guide </Link>
          </p>

          <h3>ASUThemes component header - No longer available</h3>

          <h3>Integrated CMS header modules and plugins</h3>
          <p>
            CMS modules and plugins providing the ASU header should implement it
            using the{" "}
            <a
              href={getRelativePath("@asu/components-header-footer/index.html")}
            >
              @asu/components-header
            </a>{" "}
            package and should also implement the Google Tag Manager code.
            Modules and plugins should provide configurability so that Cookie
            Consent can be disabled for sites that are not public-facing, and
            configurability so GTM can be disabled and so multiple Google Tag
            Manager IDs may be used. Additional GTM IDs should be additive and
            not overwrite the ASU Universal GTM ID. Header modules and plugins
            are to be shipped with their respective CMS platform distributions.
          </p>

          <h3>Unity Bootstrap Theme header</h3>
          <p>
            Primarily used as a reference point, the Bootstrap header provided
            via the{" "}
            <a href={getRelativePath("@asu/unity-bootstrap-theme/index.html")}>
              @asu/unity-bootstrap-theme
            </a>{" "}
            package is a plain HTML and CSS Web Standards 2 header
            implementation built without embedded components for Cookie Consent
            and Google Tag Manager. Site developers should add Google Tag
            Manager code snippets to their sites. See{" "}
            <Link to={PagePaths.DATALAYERGUIDE}>GTM info</Link>
          </p>

          <h2>Notes on additional requirements for sites using the header</h2>

          <p>
            In addition to the header, ASU sites must, as a general rule also
            include the GTM code snippet in their site.
          </p>

          <h2>Google Tag Manager (GTM)</h2>
          <p>
            See the{" "}
            <Link to={PagePaths.DATALAYERGUIDE}>
              Google Tag Manager (GTM) and Data Layer
            </Link>{" "}
            page for details on using Google Tag Manager in your site or
            application.
          </p>

          <h2>Installing Unity components from the Unity package registry</h2>

          <p>
            <a href="https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry">
              Learn how to use the private package registry
            </a>{" "}
            and begin using Unity packages in your ASU site or application.{" "}
            <a href="https://github.com/orgs/ASU/packages?repo_name=asu-unity-stack">
              Visit the page for the @asu package you wish to use
            </a>{" "}
            to find further instructions on how to install and implement the
            package for your site or application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderGuide;
