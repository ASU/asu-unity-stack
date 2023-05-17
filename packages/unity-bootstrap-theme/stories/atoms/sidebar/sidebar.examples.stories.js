import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Sidebar", "Atoms", "Examples");
import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const Sidebar = createStory(
  <div className="container my-5">
    <div className="row mt-4">
      <div className="col-md-12 pb-4">
        <h1>Take a look at the sidebar</h1>
      </div>
      <div className="col-md-4">
        <h2>Lorem ipsum</h2>
        <div
          className="sidebar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-left"
          aria-expanded="false"
          aria-controls="sidebar-left"
          data-ga-name="onclick"
          data-ga-event="collapse"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="Lorem ipsum"
          data-ga="Select section"
        >
          <p>Select Section</p>
          <span className="fas fa-chevron-up" />
        </div>
        <nav id="sidebar-left" className="sidebar collapse" aria-label="Secondary">
          <div className="nav-link-container">
            <a className="nav-link" href="#">
              Default Link
            </a>
          </div>
          <div className="nav-link-container">
            <a className="nav-link is-active" href="#">
              Active Link
            </a>
          </div>
          <div className="card card-foldable">
            <div className="card-header">
              <a
                id="cardOne"
                className="collapsed nav-link"
                href="#cardBodyOne"
                data-bs-toggle="collapse"
                data-bs-target="#cardBodyOne"
                aria-expanded="false"
                aria-controls="cardBodyOne"
                data-ga-name="onclick"
                data-ga-event="collapse"
                data-ga-type="click"
                data-ga-region="main content"
                data-ga-section="Lorem ipsum"
                data-ga="Expandable link sections"
              >
                Expandable link sections
                <span className="fas fa-chevron-down ms-1"></span>
              </a>
            </div>
            {/* end .card-header */}
            <div
              id="cardBodyOne"
              className="collapse card-body"
              aria-labelledby="cardOne"
              data-bs-parent=".sidebar"
            >
              <a href="#" className="nav-link">
                A Long Link Total that is two or more lines of text
              </a>
              <a href="#" className="nav-link">
                Another link here
              </a>
              <a href="#" className="nav-link is-active">
                One more link
              </a>
            </div>
            {/* end .card-body */}
          </div>
          {/* end .card */}
          <div className="card card-foldable">
            <div className="card-header">
              <a
                id="cardTwo"
                className="collapsed nav-link"
                data-bs-toggle="collapse"
                href="#cardBodyTwo"
                role="button"
                aria-expanded="false"
                aria-controls="cardBodyTwo"
                data-ga-name="onclick"
                data-ga-event="collapse"
                data-ga-type="click"
                data-ga-region="main content"
                data-ga-section="Lorem ipsum"
                data-ga="There should only be one open section at a time."
              >
                There should only be one open section at a time.
                <span className="fas fa-chevron-down ms-1"></span>
              </a>
            </div>
            <div
              id="cardBodyTwo"
              className="collapse card-body"
              aria-labelledby="cardTwo"
              data-bs-parent=".sidebar"
            >
              <a href="#" className="nav-link">
                Work it harder
              </a>
              <a href="#" className="nav-link">
                Make it better
              </a>
              <a href="#" className="nav-link">
                Do it faster
              </a>
              <a href="#" className="nav-link is-active">
                Makes us stronger
              </a>
              <a href="#" className="nav-link">
                More than ever
              </a>
              <a href="#" className="nav-link">
                Hour after
              </a>
              <a href="#" className="nav-link">
                Our work is
              </a>
              <a href="#" className="nav-link">
                Never over
              </a>
            </div>
            {/* end .card-body */}
          </div>
          {/* end .card */}
          <div className="nav-link-container">
            <a className="nav-link" href="#">
              Link between cards
            </a>
          </div>
          <div className="card card-foldable">
            <div className="card-header">
              <a
                id="cardThree"
                className="collapsed nav-link"
                data-bs-toggle="collapse"
                href="#cardBodyThree"
                role="button"
                aria-expanded="false"
                aria-controls="cardBodyThree"
                data-ga-name="onclick"
                data-ga-event="collapse"
                data-ga-type="click"
                data-ga-region="main content"
                data-ga-section="Lorem ipsum"
                data-ga="There be gold inside"
              >
                There be gold inside
                <span className="fas fa-chevron-down ms-1"></span>
              </a>
            </div>
            <div
              id="cardBodyThree"
              className="collapse card-body"
              aria-labelledby="cardThree"
              data-bs-parent=".sidebar"
            >
              <a href="#" className="nav-link">
                Crow's nest square-rigged hands chase
              </a>
              <a href="#" className="nav-link">
                Davy Jones' Locker belaying pin Sail ho mizzen
              </a>
              <a href="#" className="nav-link">
                Lugger to go on account loaded to the gunwalls lad
              </a>
              <a href="#" className="nav-link is-active">
                Skysail fluke overhaul hardtack
              </a>
              <a href="#" className="nav-link">
                Sloop flogging chase guns lee
              </a>
            </div>
            {/* end .card-body */}
          </div>
          {/* end .card */}
          <div className="nav-link-container">
            <a className="nav-link" href="#">
              Default Link
            </a>
          </div>
          <div className="nav-link-container">
            <a className="nav-link" href="#">
              Last Link
            </a>
          </div>
        </nav>
        {/* end .sidebar */}
      </div>
      {/* end .col */}
      <div className="col-md-8 mt-2">
        <p>
          This story isn't about the page content itself. Rather, you should
          focus your attention on the sidebar navigation element to the left.
        </p>
        <p>
          Foldable cards can be mixed in with static navigation links to create
          a section of content which behaves like an accordion and reveals
          navigation items which are nested two levels deep.
        </p>
        <h2>Ligula aenean leo porttitor eu conseq</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa
          <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede{" "}
          <a className="external ext" href="#">
            link
          </a>
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <h2>Aenean commodo ligula eget dolor aenean massa</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <ul className="uds-list">
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Aenean massa cum sociis natoque penatibus.</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu. In <em>em</em>
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam{" "}
          <a className="external ext" href="#">
            link
          </a>
          dictum felis eu pede mollis pretium.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
      {/* end .col */}
    </div>
    {/* end .row */}
  </div>,
  { initFunc }
);
