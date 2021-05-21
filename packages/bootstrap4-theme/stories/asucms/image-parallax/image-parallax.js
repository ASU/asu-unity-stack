// Helpers

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

const image_resizer = (image) => {
  const container = image.parentNode;
  const image_starting_width = image.width;
  const image_starting_height = image.height;

  // First, we want the image to be the width of the screen.
  let size_change_factor = window.innerWidth / image_starting_width;

  // Second, if this is too short to allow parallax, given
  // the size of the container, we scale it up further to
  // allow MAGIC_PARALLAX_FACTOR amount of parallax. If
  // we do this we'll also need to shift it left to re-center the image.
  // TODO: Allow the parallax factor to be set as a property of
  // the parallax-container div;
  let new_left_pos = 0;
  let new_height = image_starting_height * size_change_factor;
  let new_width = image_starting_width * size_change_factor;

  if(new_height < container.offsetHeight * MAGIC_PARALLAX_FACTOR){
    size_change_factor = (container.offsetHeight * MAGIC_PARALLAX_FACTOR) / new_height;

    new_height *= size_change_factor;
    new_width *= size_change_factor;
    new_left_pos = ((new_width - container.offsetWidth) / 2) * -1;
  }
  image.style.height = new_height + 'px';
  image.style.left = new_left_pos + 'px';
};

const manage_image_sizes = () => {
  document.querySelectorAll('.parallax-container img').forEach((image, i) => {
    if(image.complete){
      image_resizer(image);
    } else {
      image.onload = () => image_resizer(image);
    }
  });
};

// Window management
window.addEventListener('DOMContentLoaded', function () {
  manage_image_sizes();
});

window.addEventListener('resize', function() {
  manage_image_sizes();
});

window.addEventListener("scroll", scrollHandler );


