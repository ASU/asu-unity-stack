// Entry point for the homepage vanilla JS.
export { initVideoControls } from "../components/video-control/video-control.js";
export { initHero } from "../components/hero/hero.js";
export { initReimagine } from "../components/reimagine/reimagine.js";
// Quick links (WWWCMS-235) needs no init export: its GA/dataLayer events come from data-ga*
// attributes in the markup, handled by the theme's data-layer.js.
