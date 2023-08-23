
export default {
  title: "Design/Alignment",
  parameters: {
    uds: {
      template: {
        include:["x"]
      }
    }
  }
};

const Template = () => (
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

export const Default = Template.bind({});
