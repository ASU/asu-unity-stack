import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
This is an easier component for non-storybook example pages to load
as it takes care of the router wrapper, which is also present
in Storybook's settings (.storybook/preview.js).
*/
import { WebDirectory } from ".";

const WebDirectoryComponent = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WebDirectory {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { WebDirectoryComponent };
