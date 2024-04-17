import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Content Sections/Card And Image/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    left: {
      name: "Left",
      control: { type: "boolean" },
    },
  },
  args: {left: true},
};

export const LeftFloatedCard = ({left}) => {
  return (
    <div
      className={`uds-card-and-image ${
        left ? "" : "uds-card-and-image-right"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    >
      <div className="uds-content-align">
        <div className="uds-card-and-image-container">
          <div className="card card-centered">
            <i className="fas fa-rocket fa-2x card-icon-top"></i>
            <div className="card-header">
              <h3 className="card-title">Headline goes here</h3>
            </div>
            <div className="card-body">
              <p>
                The tuition refund policy does not apply to medical and
                compassionate withdrawls. Partial tuition adjustments or
                nonrefundable credits may be granted in these cases. Each
                request will be determined by individual circumstances on a
                case-by-case basis, and is an option only if approved within two
                years of the end of the semester. For specific semester or
                session deadlines, please refer to Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Enim saepe dolor obcaecati tempore
                doloribus laudantium temporibus in consequatur fugit voluptate
                nostrum a, aliquam beatae sed ab cupiditate provident ipsa
                neque. Voluptatem voluptates odio voluptate quia? Eum vitae quam
                ex odio nesciunt velit sequi nulla architecto culpa, cum
                deserunt atque officia perferendis consequuntur quod ipsa ipsam
                illo voluptatibus quis, saepe voluptate? Dolor laboriosam dolore
                quos veritatis consequatur architecto, mollitia quam delectus
                aperiam dolorum consectetur exercitationem, quisquam expedita
                perferendis quia amet corporis fugiat cupiditate nam porro
                minima iure. Tenetur incidunt quo quisquam. Illum tempore
                voluptate quo eius ab.
              </p>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a href="#" className="btn btn-dark btn-responsive">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RightFloatedCard = ({left}) => {
  return (
    <div
      className={`uds-card-and-image ${
        left ? "" : "uds-card-and-image-right"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    >
      <div className="uds-content-align">
        <div className="uds-card-and-image-container">
          <div className="card card-centered">
            <div className="card-header">
              <h3 className="card-title">
                Default card title. Lorem ipsum dolor sit amet.
              </h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                eiusmod tempo.
              </p>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a href="#" className="btn btn-dark btn-responsive">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
RightFloatedCard.args = {
  left: false,
};
