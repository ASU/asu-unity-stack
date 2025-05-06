import { EventHandler } from "./bootstrap-helper";

// method ot handle the custom behavior of the ranking card
function initRankingCard() {
  const $infoLayer = document.querySelector(".info-layer");
  const $toggleIcon = document.getElementById("dispatch");

  EventHandler.on($toggleIcon, "click", function () {
    $infoLayer?.classList.toggle("active");
  });

};

EventHandler.on(window, 'load.uds.ranking-card', initRankingCard);

export { initRankingCard };
