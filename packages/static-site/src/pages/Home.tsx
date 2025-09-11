import { PagePaths } from "~/routes/config";
import Card from "../components/Card";
import PackageCards, {
  DeprecatedPackageCards,
} from "../components/PackageCards";
import { Divider } from "@asu/unity-react-core";

const Home = () => {
  return (
    <>
      <div className="uds-hero-sm bg morse-code-black">
        <h1>
          <span className="highlight-gold">Unity Component Explorer</span>
        </h1>
      </div>
      <div className="container">
        <div className="row my-6">
          <div className="col-md-8">
            <p className="lead">
              Unity Design System enables your product teams to share learnings
              across silos, avoid duplicate work and focus more on user
              experience problems rather than UI problems, complete with
              guidelines, principles, philosophies and code.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Divider />
        <h2>Unity Design System (UDS)</h2>
        <div className="row my-6">
          <Card
            title="UDS Guidelines"
            description="Guidelines, standards, and best-practices for Unity Design System
              across all ASU web projects. Seamlessly explore the Design Kit and Code Kit
              in one place."
            href="https://zeroheight.com/9f0b32a56"
            linkLabel="UDS Guidelines"
          />
          <Card
            title="Design Kit"
            description="Design specifications for components provided by the ASU Brand."
            href="https://www.figma.com/design/vhudREMl5qdTxRLZTmttHJ/UDS-Design-Kit--web-only-?node-id=593-23577&p=f&t=ZiUlJTLE1HyXrZrB-0"
            linkLabel="UDS Design Kit"
          />
          <Card
            title="Code Kit"
            description="Npm packages provide React components and Bootstrap HTML examples for implementing UDS components."
            href="#codekit"
            linkLabel="Code Kit section below"
            isRoute={true}
          />
        </div>
      </div>
      <div className="container">
        <h2>Implementing UDS</h2>
        <Divider />
        <div className="row my-6">
          <Card
            title="ASU Header"
            description="Guidelines, requirements and best practices for using the ASU
              Branded Header in your site."
            href={PagePaths.HEADERGUIDE + "index.html"}
            isRoute={true}
            linkLabel="ASU Header Guide"
          />
          <Card
            title="Google Tag Manager and data layer"
            description="Ensure your site or application has the necessary analytics integrations."
            href={PagePaths.DATALAYERGUIDE + "index.html"}
            isRoute={true}
            linkLabel="GTM and Data Layer Guide"
          />
          <Card
            title="Unity Design System Package Registry"
            description={
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry"
                >
                  Learn how to use the private package registry
                </a>{" "}
                to incorporate Unity packages in your site or application. Note:
                You must belong to the ASU GitHub organization to access these
                packages.{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://asu.edu/webservices"
                >
                  Request access to the Unity Design System GitHub Repo
                </a>{" "}
                if you need that.
              </>
            }
            href="https://github.com/orgs/ASU/packages?repo_name=asu-unity-stack"
            linkLabel="Visit package registry"
          />
        </div>
      </div>
      <a id="codekit"></a>
      <div className="container">
        <h2>Npm Packages</h2>
        <Divider />
        <div className="row my-6">
          <PackageCards />
        </div>
      </div>
      <div className="container">
        <h2>Deprecated Packages</h2>
        <Divider />
        <div className="row my-6">
          <DeprecatedPackageCards />
        </div>
      </div>
    </>
  );
};

export default Home;
