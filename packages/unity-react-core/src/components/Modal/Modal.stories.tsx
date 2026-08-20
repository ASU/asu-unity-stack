import React from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    open: false,
    setOpen: undefined, //Untested. Could potentially be used as a custom react js useState setter function for handling the modal open state value
    // openModalInput: ( //Untested with react js as it requires a custom useState which would violate the rules of hooks if defined here. Using a custom JSX input option will replace the default button allowing any type of custom input options for handling the modal
    //   <button
    //     autoFocus
    //     // inert={isBootstrap ? undefined : open ?? false} // React js may require a custom React.useState open state value to disable the button when the modal opens
    //     type="button"
    //     // onClick={setOpen(true)} // React js would require a custom React.useState setOpen function
    //     id="openModalButton" // This id value is necessary for bootstrap but not React.
    //     className={`btn btn-dark`}
    //   >
    //     testing custom button
    //   </button>
    // ),
    openModalButtonClassName: "btn-dark",
    openModalButtonText: "Show modal",
    children: (
      <>
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
        </p>
        <button type="button" className="btn btn-primary">
          button
        </button>
      </>
    ),
  },
};

//@ts-ignore
const modalTemplate = args => <Modal {...args} />;

export const Overview = {
  render: modalTemplate.bind({}),
  name: "Modal",
};
