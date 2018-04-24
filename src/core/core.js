/**
 * Created by ctestama on 3/21/18.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ASUNav from './components/ASUNav'
import ASUFooter from './components/ASUFooter'
import ASUHeaderContainer from "./components/container/ASUHeaderContainer";
//import styles from './css/asu_header.css';

const initASUHeader = (asu_header, element) => {
    element ? ReactDOM.render(<ASUHeaderContainer headerObj={asu_header} />, element) : false;
};

module.exports = {
    initASUHeader,
    ASUHeaderContainer,
    ASUNav,
    ASUFooter
};