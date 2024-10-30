import "bootstrap/dist/js/bootstrap.esm";
import {initDataLayer} from "./data-layer";
import {initGlobalHeader} from "./global-header";
import { initVideo } from "../../stories/atoms/video/video";
import { initModals } from "../../stories/atoms/modals/modals";
import { initializeFixedTable } from "../../stories/molecules/tables/tables";
import { initBanner } from "../../stories/molecules/banners/banner";
import { initCalendar } from "../..//stories/molecules/calendar/calendar";
import { initializeAnchorMenu } from "../../stories/atoms/anchor-menu/anchor-menu";
// TODO: Add blockquopte from updated unity-bootstrap-theme
// import { initializeBlockquoteAnimation } from "../../stories/atoms/blockquote/blockquote-animated";
import { initFooterGA } from "../../stories/organisms/global-footer/global-footer";
import { initTabs } from "../../stories/molecules/tabbed-panels/tabbed-panels"
import {initImageParallax} from "../../stories/molecules/image-parallax/image-parallax";

document.addEventListener('DOMContentLoaded', () => {
 const initFunctions = [
   initDataLayer,
   initGlobalHeader,
   initVideo,
   initModals,
   initializeFixedTable,
   initBanner,
   initCalendar,
   initializeAnchorMenu,
   // initializeBlockquoteAnimation
   initFooterGA,
   initTabs,
   initImageParallax,
 ];
 const uninitializedFunctions = [];
 for (let i = 0; i < initFunctions.length; i++) {

  try {
    initFunctions[i]();
  } catch (e) {
      uninitializedFunctions.push(initFunctions[i]);
    }
 };
  if (uninitializedFunctions.length > 0) {
    console.log('The following functions failed to initialize: ', uninitializedFunctions);
  }
});
