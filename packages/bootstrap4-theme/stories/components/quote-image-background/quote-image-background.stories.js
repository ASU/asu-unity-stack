export default { title: "Components/Content Sections/Quote On Image Background" }

export const Default = () => `
<div class="container">
  <div class="uds-quote-image-background-container">

    <div class="uds-quote-image-background-image-container">
      <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
    </div>

    <div class="uds-quote-image-background-quote-container">
      <div class="uds-blockquote uds-testimonial accent-gold">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
        </svg>
        <blockquote>
          <p>Computers make excellent and efficient servants, but I have no wish to serve under them.</p>
          <div class="citation">
            <cite class="name">Spock</cite>
            <cite class="description">First officer, USS Enterprise</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</div>
`;
