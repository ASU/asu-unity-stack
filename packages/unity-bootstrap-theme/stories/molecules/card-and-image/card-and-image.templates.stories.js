import { createComponent, createStory } from "../../../helpers/wrapper.js";

const extraOptions = {
  left: {
    name: "Left",
    control: { type: "boolean" },
    defaultValue: true,
  },
};

export default createComponent(
  "Content Sections/Card And Image",
  "Molecules",
  "Templates",
  extraOptions
);

export const LeftFloatedCard = createStory(args => {
  return (
    <div
      class={`uds-card-and-image ${
        args.left ? "" : "uds-card-and-image-right"
      }`}
      style={{
        "background-image":
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    >
      <div class="uds-content-align">
        <div class="uds-card-and-image-container">
          <div class="card card-centered">
            <i class="fas fa-rocket fa-2x card-icon-top"></i>
            <div class="card-header">
              <h3 class="card-title">Headline goes here</h3>
            </div>
            <div class="card-body">
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
            <div class="card-buttons">
              <div class="card-button">
                <a href="#" class="btn btn-dark btn-responsive">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
LeftFloatedCard.args = {
  template: 1,
};

export const RightFloatedCard = createStory(args => {
  return (
    <div
      class={`uds-card-and-image ${
        args.left ? "" : "uds-card-and-image-right"
      }`}
      style={{
        "background-image":
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    >
      <div class="uds-content-align">
        <div class="uds-card-and-image-container">
          <div class="card card-centered">
            <div class="card-header">
              <h3 class="card-title">
                Default card title. Lorem ipsum dolor sit amet.
              </h3>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                eiusmod tempo.
              </p>
            </div>
            <div class="card-buttons">
              <div class="card-button">
                <a href="#" class="btn btn-dark btn-responsive">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
RightFloatedCard.args = {
  template: 1,
  left: false,
};
