// @ts-check

const toolBar = `
    <div class="row">
      <div class="col-md-12">

        <div class="uds-quicklinks uds-quicklinks-expanded-md">
          <div id="collapseExample" class="card">
            <nav class="nav" aria-label="Same Page">
              <a class="nav-link" href="degree-page.html">
                <span class="fas fa-hand-spock"></span>
                  Degree Page
                </a>
            </nav>
          </div>
        </div>

      </div>
  </div>
`;

const style = `
  <style>
    a:not(.active) {
      color: black;
    }
    a.active {
      font-weight: bold;
    }
  </style>
`;

function setActivePageLink() {
  const parseLink = url => {
    const index = url.lastIndexOf("/");
    const page = url.substr(index + 1);
    return page;
  };

  const activePage = parseLink(window.location.pathname);

  const links = document.querySelectorAll("a");
  links.forEach(anchor => {
    const linkPage = parseLink(anchor.href);
    if (linkPage === activePage) {
      anchor.classList.add("active");
    }
  });
}

// document.head.insertAdjacentHTML("beforeend", style);
// document.querySelector(".container").insertAdjacentHTML("afterbegin", toolBar);
setActivePageLink();
