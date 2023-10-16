// method ot handle the custom behavior of the ranking card
export const rankingFunc = () => {
  const $infoLayer = document.querySelector(".info-layer");
  const $toggleIcon = document.getElementById("dispatch");

  $toggleIcon.addEventListener("click", function () {
    $infoLayer.classList.toggle("active");
  });

  if(typeof window.googleAnalytics === "function") { window.googleAnalytics(); }
};
