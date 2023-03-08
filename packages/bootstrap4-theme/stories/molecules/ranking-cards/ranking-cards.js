// method ot handle the custom behavior of the ranking card
export const rankingFunc = () => {
  const accordion = document.getElementById('dispatch');
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');
  });
};
