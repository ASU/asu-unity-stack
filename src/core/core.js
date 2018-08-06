/**
 * Created by ctestama on 3/21/18.
 */
import { Component, React } from "react";
import ASUNav from './components/ASUNav'
import ASUFooter from './components/ASUFooter'
import ASUBrandHeader from './components/ASUBrandHeader';
import ASUHeader from './components/ASUHeader';
import ASULink from './components/ASULink';
import ASUSearchBox from './components/ASUSearchBox';
import ASULogin from './components/ASULogin';
import AsuButton from './components/atoms/buttons/AsuButton';
import AsuRfiLargeButton from './components/atoms/buttons/AsuRfiLargeButton';

const initASUHeader = (asu_header, element) => {
    element ? ReactDOM.render(<ASUHeaderContainer headerObj={asu_header} />, element) : false;
};

module.exports = {
    initASUHeader,
    ASUFooter,
    ASUHeader,
    ASUBrandHeader,
    ASULink,
    ASULogin,
    ASUNav,
    ASUSearchBox,
    AsuButton,
    AsuRfiLargeButton,
};
