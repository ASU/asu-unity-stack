// @ts-check
import React from "react";

// Component

const Success = () => {
  return (
    <>
      <h3>Success</h3>
      <div>success message goes here...</div>
    </>
  );
};

// Step configs

const successForm = {
  component: Success,
  validationSchema: {},

  initialValues: {},
};

export { successForm };
