/**
 * Created by ctestama on 3/21/18.
 */
import { Component } from "react";
import ASUNav from './components/ASUNav'
import ASUFooter from './components/ASUFooter'
import ASUHeaderContainer from "./components/ASUHeaderContainer";
import ASUHeader from "./components/ASUHeader";

const initASUHeader = (asu_header, element) => {
    element ? ReactDOM.render(<ASUHeaderContainer headerObj={asu_header} />, element) : false;
};

module.exports = {
    initASUHeader,
    ASUHeaderContainer,
    ASUHeader,
    ASUNav,
    ASUFooter
};