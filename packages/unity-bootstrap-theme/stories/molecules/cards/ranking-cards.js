import { googleAnalytics } from "@asu/unity-bootstrap-theme/js/data-layer.js";

// method ot handle the custom behavior of the ranking card
export const rankingFunc = () => {
  const $infoLayer = document.querySelector(".info-layer");
  const $toggleIcon = document.getElementById("dispatch");
alert('hey');

  $toggleIcon.addEventListener("click", function () {
    $infoLayer.classList.toggle("active");
  });

  googleAnalytics();
};
