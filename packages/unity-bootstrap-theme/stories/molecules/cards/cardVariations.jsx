import cardsImage from "./cards-image.jpg";

export const horizontalCardsMap = ({ type = "", numCards = 1 }) => {
  let arr = new Array(numCards).fill("x");

  const commonTemplate = (
    <div className="uds-card-arrangement">
      <div className="uds-card-arrangement-card-container">
        {arr.map((x, i) => (
          <div
            key={i}
            className={`card ${type && `card-${type}`} card-horizontal`}
          >
            <img
              className="card-img-top"
              src={cardsImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-content-wrapper">
              <div className="card-header">
                <h3 className="card-title">
                  <a href="#">Card default title</a>
                </h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  eiusmod tempo.
                </p>
              </div>
              <div className="card-buttons">
                <div className="card-button">
                  <a
                    href="#"
                    className="btn btn-dark"
                    data-ga="Button link here"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="card default title"
                  >
                    Button link here
                  </a>
                </div>
              </div>
              {/* Additional details specific to 'event' type */}
              {type === "event" && (
                <div className="card-event-details">
                  <div className="card-event-icons">
                    <div>
                      <i className="far fa-calendar"></i>
                    </div>
                    <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
                  </div>
                  <div className="card-event-icons">
                    <div>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>Downtown Phoenix campus</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return commonTemplate;
};
