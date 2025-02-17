
import { PagePaths } from "~/routes/config";
import Card from "../components/Card";
import PackageCards from "../components/PackageCards";

const Home = () => {
  return (
    <>
      <div className="uds-hero-sm">
        <img className="hero" src="./assets/img/grey-bg.jpg" />
        <h1>
          <span className="highlight-black">Unity Component Explorer</span>
        </h1>
      </div>
      <div className="container">
        <div className="row my-6">
          <div className="col-md-8">
            <p className="lead">
              A design system enables your product teams to share learnings
              across silos, avoid duplicate work and focus more on user
              experience problems rather than UI problems, complete with
              guidelines, principles, philosophies and code.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-6">
            <Card
              title="Unity Design System UI Kit"
              description="Guidelines, standards, and best-practices for Unity Design System
              across all ASU web projects."
              href="https://zeroheight.com/9f0b32a56"
              linkLabel="Explore the UDS UI Kit"
              />

              <Card
              title="Unity Design System Styles Library"
              description="A community-built design system built with Adobe XD."
              href="https://shared-assets.adobe.com/link/fb14b288-bf63-47e0-5d30-384de5560455"
              linkLabel="View the document"
              />
              <Card
                title="ASU Header"
                description="Guidelines, requirements and best practices for using the ASU
              Branded Header in your site."
                href={PagePaths.HEADERGUIDE + "index.html"}
                isRoute={true}
                linkLabel="View the guide"
                />
            <Card
              title="Google Tag Manager and data layer"
              description="Ensure your site or application has the necessary analytics integrations."
              href={PagePaths.DATALAYERGUIDE + "index.html"}
              isRoute={true}
              linkLabel="GTM and data layer guide"
              />
            <Card
              title="Unity Design System Package Registry"
              description={<>
                <a target="_blank" rel="noreferrer" href="https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry">
                  Learn how to use the private package registry
                </a>{" "}
                to incorporate Unity packages in your site or application. Note:
                You must belong to the ASU GitHub organization to access these
                packages.{" "}
                <a target="_blank" rel="noreferrer" href="https://asu.edu/webservices">
                  Request access to the Unity Design System GitHub Repo
                </a>{" "}
                if you need that.
              </>}
              href="https://github.com/orgs/ASU/packages?repo_name=asu-unity-stack"
              linkLabel="Visit package registry"
              />
              <PackageCards/>
        </div>
      </div>
    </>
  );
};

export default Home;
