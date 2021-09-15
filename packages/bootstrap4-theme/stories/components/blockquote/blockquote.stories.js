import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Blockquotes and Testimonials');

export const BlockquoteNoImage = createStory(
  <div>
    <div class="uds-blockquote accent-maroon">
      <svg
        title="Open quote"
        role="presentation"
        viewBox="0 0 302.87 245.82"
      >
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>
      <blockquote>
        <p>
          We hold these truths to be self-evident, that all men are
          created equal, that they are endowed by their Creator with
          certain unalienable Rights, that among these are Life, Liberty
          and the pursuit of Happiness.
        </p>
        <div class="citation">
          <cite class="name">Thomas Jefferson</cite>
          <cite class="description">The Declaration of Independence</cite>
        </div>
      </blockquote>
    </div>

    <div class="p-md-4 bg-gray-7">
      <div class="uds-blockquote accent-gold text-white">
        <svg
          title="Open quote"
          role="presentation"
          viewBox="0 0 302.87 245.82"
        >
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            Four score and seven years ago our fathers brought forth upon
            this continent, a new nation, conceived in Liberty, and
            dedicated to the proposition that all men are created equal.
          </p>
          <div class="citation">
            <cite class="name">Abraham Lincoln</cite>
            <cite class="description">Gettysburg Address</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
);

export const BlockquoteWithImage = createStory(
  <div>
    <div class="uds-blockquote with-image">
      <img
        src="https://placeimg.com/600/400/any"
        alt="Pretend this is Michael M. Crow, President of ASU"
      />
      <blockquote>
        <p>
          ASU is a comprehensive public research university, measured not
          by whom we exclude, but rather by whom we include and how they
          succeed; advancing research and discovery of public value; and
          assuming fundamental responsibility for the economic, social,
          cultural and overall health of the communities it serves.
        </p>
        <div class="citation">
          <cite class="name">Michael M. Crow</cite>
          <cite class="description">ASU Charter</cite>
        </div>
      </blockquote>
    </div>

    <section class="bg-gray-2 my-12 py-4">
      <div class="uds-blockquote with-image reversed uds-content-align">
        <img
          src="https://placeimg.com/300/300/any"
          alt="Pretend this is Michael M. Crow, President of ASU"
        />
        <blockquote>
          <p>
            Eight design aspirations guide the ongoing evolution of ASU as
            a New American University. These institutional objectives are
            integrated in innovative ways throughout the university to
            achieve excellence, access and impact.
          </p>
          <div class="citation">
            <cite class="name">Michael M. Crow</cite>
            <cite class="description">ASU Charter</cite>
          </div>
        </blockquote>
      </div>
    </section>
  </div>
);

export const BlockquoteNoCitation = createStory(
  <div>
    <div class="container mt-8">
      <div class="row">
        <div class="col-md-8">
          <div class="uds-blockquote no-citation with-image">
            <img
              src="https://placeimg.com/300/300/nature"
              alt="Image of Walt Disney"
            />
            <blockquote>
              <h3>
                <span class="highlight-black">Walt Disney</span>
              </h3>
              <p>
                Laughter is timeless, imagination has no age, dreams are
                forever.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-12">
      <div class="row">
        <div class="col-md-8 ">
          <div class="p-md-4 bg-gray-7">
            <div class="uds-blockquote no-citation with-image reversed">
              <img
                src="https://placeimg.com/300/300/tech"
                alt="Image of Walt Disney"
              />
              <blockquote>
                <h3>
                  <span class="highlight-gold">Walt Disney</span>
                </h3>
                <p class="text-white">
                  We keep opening new doors and doing new things, because we’re
                  curious and curiosity keeps leading us down new paths.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BlockquoteAltCitation = createStory(
  <div>
    <div class="container mt-8">
      <div class="row">
        <div class="col-md-8">
          <div class="uds-blockquote alt-citation accent-gold">
            <svg
              title="Open quote"
              role="presentation"
              viewBox="0 0 302.87 245.82"
            >
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
            </svg>
            <blockquote>
              <p>
                Some people want it to happen, some people wish it would happen
                and some people make it happen.
              </p>
              <div class="citation">
                <cite class="name">Michael Jordan</cite>
                <cite class="description">NBA Superstar</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-gray-1 mt-8 p-md-4">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="uds-blockquote alt-citation accent-maroon">
              <svg
                title="Open quote"
                role="presentation"
                viewBox="0 0 302.87 245.82"
              >
                <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
              </svg>
              <blockquote>
                <p>
                  Talent wins games, but teamwork and intelligence wins
                  championships.
                </p>
                <div class="citation">
                  <cite class="name">Michael Jordan</cite>
                  <cite class="description">NBA Superstar</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const TestimonialsNoImage = createStory(
  <div>
    <div class="container mt-8">
      <div class="row">
        <div class="col-md-6">
          <div class="uds-blockquote uds-testimonial accent-gold">
            <svg
              title="Open quote"
              role="presentation"
              viewBox="0 0 302.87 245.82"
            >
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
            </svg>
            <blockquote>
              <p>
                Computers make excellent and efficient servants, but I have no
                wish to serve under them.
              </p>
              <div class="citation">
                <cite class="name">Spock</cite>
                <cite class="description">First officer, USS Enterprise</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-6">
      <div class="row">
        <div class="col-md-8">
          <div class="p-md-4 bg-gray-2">
            <div class="uds-blockquote uds-testimonial accent-maroon">
              <svg
                title="Open quote"
                role="presentation"
                viewBox="0 0 302.87 245.82"
              >
                <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
              </svg>
              <blockquote>
                <p>
                  I could not deprive you of the revelation of all that you
                  could accomplish together, of a friendship that will define
                  you both in ways you cannot yet realize.
                </p>
                <div class="citation">
                  <cite class="name">Spock</cite>
                  <cite class="description">First officer, USS Enterprise</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialsWithImage = createStory(
  <div class="container mt-8">
    <div class="row">
      <div class="col-md-6">
        <div class="uds-blockquote uds-testimonial with-image alt-citation accent-maroon">
          <img
            src="https://placeimg.com/600/400/arch"
            alt="Pretend this is Han Solo"
          />
          <svg
            title="Open quote"
            role="presentation"
            viewBox="0 0 302.87 245.82"
          >
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
          </svg>
          <blockquote>
            <p>
              Hokey religions and ancient weapons are no match for a good
              blaster at your side, kid.
            </p>
            <div class="citation">
              <cite class="name">Han Solo</cite>
            </div>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="row mt-6">
      <div class="col-md-8">
        <div class="p-md-4 bg-gray-7">
          <div class="uds-blockquote uds-testimonial with-image alt-citation accent-gold text-white">
            <img
              src="https://placeimg.com/400/400/tech"
              alt="Pretend this is Han Solo"
            />
            <svg
              title="Open quote"
              role="presentation"
              viewBox="0 0 302.87 245.82"
            >
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
            </svg>
            <blockquote>
              <p>
                I used to wonder about that myself. Thought it was a bunch of
                mumbo-jumbo. A magical power holding together good and evil, the
                dark side and the light? Crazy thing is, it’s true. The Force,
                the Jedi — all of it. It’s all true.
              </p>
              <div class="citation">
                <cite class="name">Han Solo</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
);
