const extraOptions = {
  bgColor: {
    name: "Color",
    options: [null, "bg-gray-1", "bg-gray-2", "bg-dark"],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        null: "None",
        "bg-gray-1": "bg-gray-1",
        "bg-gray-2": "bg-gray-2",
        "bg-dark": "bg-dark",
      },
    },
  },
};

export const TabbedPanels = (args) => {
  return (
    <div className={args.bgColor}>
      <h2>Tabbed panels</h2>
      <nav
        className={`uds-tabbed-panels uds-content-align ${args.bgColor === "bg-dark" ? "uds-tabbed-panels-dark" : ""
          }`}
      >
        <div
          className="nav nav-tabs"
          id="nav-tab"
          role="tablist"
          data-scroll-position="0"
        >
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Home long tab"
          >
            Home long tab
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Profile long tab"
          >
            Profile long tab
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Contact us is a long tab"
          >
            Contact us is a long tab
          </a>
          <a
            className="nav-item nav-link"
            id="nav-another-tab"
            data-bs-toggle="tab"
            href="#nav-another"
            role="tab"
            aria-controls="nav-another"
            aria-selected="false"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Another tab, long tab"
          >
            Another tab, long tab
          </a>
          <a
            className="nav-item nav-link"
            id="nav-another-2-tab"
            data-bs-toggle="tab"
            href="#nav-another-2"
            role="tab"
            aria-controls="nav-another-2"
            aria-selected="false"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Another tab, 5th tab"
          >
            Another tab, 5th tab
          </a>
          <a
            className="nav-item nav-link"
            id="nav-another-3-tab"
            data-bs-toggle="tab"
            href="#nav-another-3"
            role="tab"
            aria-controls="nav-another-3"
            aria-selected="false"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga="Another tab, 6th tab"
          >
            Another tab, 6th tab
          </a>
        </div>
        <a
          className="scroll-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-scroll="prev"
          tabIndex="-1"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga="left chevron"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="scroll-control-next"
          href="#carouselExampleControls"
          role="button"
          data-scroll="next"
          tabIndex="-1"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga="right chevron"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade show active ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          TAB 1. <a href="#">This is an ordinary paragraph</a> that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div
          className={`tab-pane fade ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          TAB 2. This is an ordinary paragraph that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div
          className={`tab-pane fade ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabIndex="0"
        >
          TAB 3. This is an ordinary paragraph that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div
          className={`tab-pane fade ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-another"
          role="tabpanel"
          aria-labelledby="nav-another-tab"
          tabIndex="0"
        >
          TAB 4. This is an ordinary paragraph that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div
          className={`tab-pane fade ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-another-2"
          role="tabpanel"
          aria-labelledby="nav-another-2-tab"
          tabIndex="0"
        >
          TAB 5. This is an ordinary paragraph that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div
          className={`tab-pane fade ${args.bgColor === "bg-dark" ? "text-white" : ""
            }`}
          id="nav-another-3"
          role="tabpanel"
          aria-labelledby="nav-another-3-tab"
          tabIndex="0"
        >
          TAB 6. This is an ordinary paragraph that is long enough to wrap to
          multiple lines so that you can see how spacing looks. At vero eos et
          accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
      </div>
    </div>
  );
}

export default {
  title: "Molecules/Tabbed Panels",
  component: TabbedPanels,
  argTypes: {...extraOptions},
  parameters: {
    initFunc: {
      disable: false,
    },
  },
};
