const MAGIC_PARALLAX_FACTOR = 1.2;

const scrollHandler = () => {
  document.querySelectorAll('.parallax-container').forEach((container) => {
    const the_image = container.querySelector("img");

    const default_position = container.offsetHeight - the_image.height * MAGIC_PARALLAX_FACTOR;
    const distance_to_travel = window.innerHeight + container.offsetHeight;
    const top_of_container = container.getBoundingClientRect().top;
    const amount_of_distance_travelled = window.innerHeight - top_of_container;
    const portion_of_container_scrolled = amount_of_distance_travelled / distance_to_travel;

    if(portion_of_container_scrolled < 0){
      the_image.style.top = default_position + 'px';
    } else if(portion_of_container_scrolled > 1){
      the_image.style.top = '0';
    } else {
      const correct_position = default_position * (1 - portion_of_container_scrolled);
      the_image.style.top = correct_position + 'px';
    }
  });
};
window.addEventListener("scroll", scrollHandler );

const image_resizer = (image) => {
  console.log({image});
  const container = image.parentNode;
  if(image.height < container.offsetHeight * MAGIC_PARALLAX_FACTOR){
    const relativeSize = (container.offsetHeight * MAGIC_PARALLAX_FACTOR) / image.height;
    console.log('set to ');
    console.log(relativeSize);
    console.log(image.height);
    console.log(image.width);
    console.log(container.offsetHeight);
    const new_width = image.width * relativeSize;

    //height gets auto adjusted
    image.style.width = new_width + 'px';
    //const new_left_pos = ((new_width - window.innerWidth) / 2) * -1;
    image.style.left = new_left_pos + 'px';
  } else {
    image.style.width = '100%';
    image.style.height = 'auto';
  }
};
window.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll('.parallax-container img').forEach((image, i) => {
    if(image.complete){
      image_resizer(image);
    } else {
      image.onload = () => image_resizer(image);
    }
  });
});

