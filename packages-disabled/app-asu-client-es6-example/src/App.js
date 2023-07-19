// @ts-check
import React from 'react'
// base components
import { Footer, Navbar } from "./core/components";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import routes from "./core/routes";
import { Home, List, Search, Create } from "./core/pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={routes.HOME} element={<Home/>}/>
          <Route path={routes.LIST} element={<List/>}/>
          <Route path={routes.SEARCH} element={<Search/>}/>
          <Route path={routes.CREATE} element={<Create/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
