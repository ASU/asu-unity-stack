import { storiesOf } from '@storybook/html';

storiesOf('Components/Person Profile', module)
  .addParameters({
    happo: false,
  })

  .add(
    'Person Profile',
    () => `
    <div class='container-xl'>
      <div class='row'>
        <div class='col pl-0 pr-0'>
          <div class="uds-person-profile"> <!-- Component Start -->
            <img class='profile-img' src='https://placeimg.com/300/300/people' alt='John Smith' />
            <div class='person'>
              <h3 class='person-name'>John Smith</h3>
              <h5 class='person-profession'>Regents Professor</h5>
              <ul class='person-contact-info'>
                <li><a href="mailto:email@asu.edu">email@asu.edu</a></li>
                <li><a href="tel:555-555-5555">555-555-5555</a></li>
                <li><a href="#">1234 Address St. Tempe, AZ 12345</a></li>
              </ul>
              <p class='person-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis, et dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit amet.</p>
              <ul class='person-social-medias'>
                <li><a href="#"><span class='fab fa-facebook-square'/></a></li>
                <li><a href="#"><span class='fab fa-linkedin'/></a></li>
                <li><a href="#"><span class='fab fa-twitter-square'/></a></li>
              </ul>
            </div>
          </div> <!-- Component End -->
        </div>
      </div>
    </div>
    `
  );
