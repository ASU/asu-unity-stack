// import Banner from "./banner.js";
import { initAnchorMenu } from "./anchor-menu.js";
import { initBlockquoteAnimation } from "./blockquote-animated.js";
import { initCalendar } from "./calendar.js";
import { initCardBodies } from "./card-bodies.js";
import { initRankingCard } from "./card-ranking.js";
import { initChart } from "./charts-and-graphs.js";
import { initDataLayer } from "./data-layer.js";
import { initGlobalHeader } from "./global-header.js";
import { initHeroesVideo } from "./heroes-video.js";
import { initImageParallax } from "./image-parallax.js";
import { initModals } from "./modals.js";
import { initTabbedPanels } from "./tabbed-panels.js";
import { initFixedTable } from "./tables.js";
import { initVideo } from "./video.js";

const unityBootstrap = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu,
  initBlockquoteAnimation,
  initCalendar,
  initChart,
  initDataLayer,
  initFixedTable,
  initGlobalHeader,
  initHeroesVideo,
  initImageParallax,
  initModals,
  initRankingCard,
  initTabbedPanels,
  initVideo,
  initCardBodies,
}

export default unityBootstrap;
