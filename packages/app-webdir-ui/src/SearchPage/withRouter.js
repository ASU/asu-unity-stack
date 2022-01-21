import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SearchPage } from ".";

const iSearchApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { iSearchApp };
