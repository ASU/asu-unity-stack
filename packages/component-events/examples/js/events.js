// @ts-check

const toolBar = `
      <div class="test-toolbar row">
        <div class="col-md-12">
          <div class="uds-quicklinks uds-quicklinks-expanded-md">
            <div id="collapseExample" class="card">
              <nav class="nav" aria-label="Same Page">
                <a class="nav-link" href="cardsGridEvents.html">Cards Grid</a>
                <a class="nav-link" href="cardsListEvents.html">Cards List</a>
              </nav>
            </div>
          </div>
        </div>
    </div>
  `;

const style = `
    <style>
     .test-toolbar a:not(.active) {
        color: black;
      }
      .test-toolbar a.active {
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

document.head.insertAdjacentHTML("beforeend", style);
document.querySelector(".container").insertAdjacentHTML("afterbegin", toolBar);
setActivePageLink();
