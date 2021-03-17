export default { title: 'Components/Blockquotes (Alt)' };

export const blockquoteNoImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote accent-maroon">
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.</p>
            <div class="citation">
              <cite class="name">Thomas Jefferson</cite>
              <cite class="description">The Declaration of Independence</cite>
            </div>
          </blockquote>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->

    <div class="row pt-6">
      <div class="col-md-8">

        <div class="wrapper p-6 bg-gray-7">

          <div class="uds-blockquote accent-gold text-white">
            <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
            </svg>
            <blockquote>
              <p>Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</p>
              <div class="citation">
                <cite class="name">Abraham Lincoln</cite>
                <cite class="description">Gettysburg Address</cite>
              </div>
            </blockquote>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

export const blockquoteWithImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote accent-gold with-image">
          <img src="https://placeimg.com/400/400/any" alt="Pretend this is Michael M. Crow, President of ASU"/>
          <blockquote>
            <p>ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.</p>
            <div class="citation">
              <cite class="name">Michael M. Crow</cite>
              <cite class="description">ASU Charter</cite>
            </div>
          </blockquote>
        </div>

      </div>
    </div>

    <div class="row mt-6">
      <div class="col-md-10">

        <div class="uds-blockquote with-image reversed">
          <img src="https://placeimg.com/300/300/any" alt="Pretend this is Michael M. Crow, President of ASU"/>
          <blockquote>
            <p>Eight design aspirations guide the ongoing evolution of ASU as a New American University. These institutional objectives are integrated in innovative ways throughout the university to achieve excellence, access and impact.</p>
            <div class="citation">
              <cite class="name">Michael M. Crow</cite>
              <cite class="description">ASU Charter</cite>
            </div>
          </blockquote>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

