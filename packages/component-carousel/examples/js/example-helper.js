// @ts-check

const toolBar = `
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <div class="uds-quicklinks uds-quicklinks-expanded-md">
          <div id="collapseExample" class="card card-body collapse">
            <nav class="nav" aria-label="Same Page">
              <a class="nav-link" href="card.html"><span class="fas fa-hand-spock"></span>Card Carousel</a>
              <a class="nav-link" href="testimonial.html"><span class="fas fa-hand-spock"></span>Testimonial Carousel</a>
              <a class="nav-link" href="image.html"><span class="fas fa-hand-spock"></span>Image Carousel</a>
              <a class="nav-link" href="image-gallery.html"><span class="fas fa-hand-spock"></span>Image Gallery Carousel</a>
            </nav>
          </div>
        </div>

      </div>
    </div>
  </div>
`;

function setActivePageLink() {
  const parseLink = url => {
    let index = url.lastIndexOf("/");
    let page = url.substr(index + 1);
    return page;
  };

  let activePage = parseLink(window.location.pathname);

  const links = document.querySelectorAll("a");
  links.forEach(anchor => {
    const linkPage = parseLink(anchor.href);
    if (linkPage === activePage) {
      anchor.classList.add("active");
    }
  });
}

document.body.insertAdjacentHTML("afterbegin", toolBar);
setActivePageLink();
