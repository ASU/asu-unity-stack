import config, {Alert} from "./alerts.templates.stories.js";

export default ({
  title: "Atoms/Alerts",
});

export const Example = () => <>
  <Alert type="alert-warning" dismissable={true}/>
  <Alert type="alert-success" dismissable={true}/>
  <Alert type="alert-info"/>
  <Alert type="alert-danger" dismissable={true}/>
</>
Example.parameters = config.parameters;
