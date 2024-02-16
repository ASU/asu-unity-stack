import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default {
  title: "Design/Alignment",
};

export const TemporaryStory = createStory(
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="bg-gray-4" style={{ height: "300px" }}>
          &nbsp;
        </div>
      </div>
      <div className="col">
        <div className="bg-gray-2" style={{ height: "300px" }}>
          &nbsp;
        </div>
      </div>
      <div className="col">
        <div className="bg-gray-4" style={{ height: "300px" }}>
          &nbsp;
        </div>
      </div>
      <div className="col">
        <div className="bg-gray-2" style={{ height: "300px" }}>
          &nbsp;
        </div>
      </div>
    </div>
  </div>
);
