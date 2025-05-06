import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Blockquotes and Testimonials/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const BlockquoteNoImage = () => (
  <>
    <div className="uds-blockquote accent-maroon uds-content-align">
      <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>
      <blockquote>
        <p>
          We hold these truths to be self-evident, that all men are created
          equal, that they are endowed by their Creator with certain unalienable
          Rights, that among these are Life, Liberty and the pursuit of
          Happiness.
        </p>
        <div className="citation">
          <div className="citation-content">
            <cite className="name">Thomas Jefferson</cite>
            <cite className="description">The Declaration of Independence</cite>
          </div>
        </div>
      </blockquote>
    </div>

    <div className="bg-gray-7">
      <div className="uds-blockquote accent-gold text-white uds-content-align">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Abraham Lincoln Lincoln Lincoln </cite>
              <cite className="description">Gettysburg Address</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </>
);

export const BlockquoteWithImage = () => (
  <>
    <div className="uds-blockquote with-image uds-content-align">
      <img
        src={ imageName.anon }
        alt="Pretend this is Michael M. Crow, President of ASU"
        width="600"
        height="400"
        loading="lazy"
        decoding="async"
      />
      <blockquote>
        <p>
          ASU is a comprehensive public research university, measured not by
          whom we exclude, but rather by whom we include and how they succeed;
          advancing research and discovery of public value; and assuming
          fundamental responsibility for the economic, social, cultural and
          overall health of the communities it serves.
        </p>
        <div className="citation">
          <div className="citation-content">
            <cite className="name">Michael M. Crow</cite>
            <cite className="description">ASU Charter</cite>
          </div>
        </div>
      </blockquote>
    </div>

    <section className="bg-gray-2">
      <div className="uds-blockquote with-image reversed uds-content-align">
        <img
          src={ imageName.anon }
          alt="Pretend this is Michael M. Crow, President of ASU"
          width="300"
          height="300"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <blockquote>
          <p>
            Eight design aspirations guide the ongoing evolution of ASU as a New
            American University. These institutional objectives are integrated
            in innovative ways throughout the university to achieve excellence,
            access and impact.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Michael M. Crow</cite>
              <cite className="description">ASU Charter</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  </>
);

export const BlockquoteNoCitation = () => (
  <>
    <div className="uds-blockquote no-citation with-image uds-content-align">
      <img
        src={ imageName.anon }
        alt="Image of Walt Disney"
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <blockquote>
        <h3>
          <span className="highlight-black">Walt Disney</span>
        </h3>
        <p>Laughter is timeless, imagination has no age, dreams are forever.</p>
      </blockquote>
    </div>

    <div className="bg-gray-7">
      <div className="uds-blockquote no-citation with-image reversed uds-content-align">
        <img
          src={ imageName.anon }
          alt="Image of Walt Disney"
          width="300"
          height="300"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <blockquote>
          <h3>
            <span className="highlight-gold">Walt Disney</span>
          </h3>
          <p className="text-white">
            We keep opening new doors and doing new things, because we’re
            curious and curiosity keeps leading us down new paths.
          </p>
        </blockquote>
      </div>
    </div>
  </>
);

export const BlockquoteAltCitation = () => (
  <>
    <div className="uds-blockquote alt-citation accent-gold uds-content-align">
      <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>
      <blockquote>
        <p>
          Some people want it to happen, some people wish it would happen and
          some people make it happen.
        </p>
        <div className="citation">
          <div className="citation-content">
            <cite className="name">Michael Jordan</cite>
            <cite className="description">NBA Superstar</cite>
          </div>
        </div>
      </blockquote>
    </div>

    <section className="bg-gray-1">
      <div className="uds-blockquote alt-citation accent-maroon uds-content-align">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            Talent wins games, but teamwork and intelligence wins championships.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Michael Jordan</cite>
              <cite className="description">NBA Superstar</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  </>
);

export const BlockquoteAnimated = () => (
  <>
    <div className="uds-blockquoteAnimated accent-maroon uds-content-align">
      <blockquote>
        <h4><strong>The ASU difference:</strong></h4>
        <h2>
          <p>
          We are measured not by whom we exclude, but by <mark className="pen-yellow">whom we include</mark> and
          <mark className="pen-yellow"> how they succeed</mark>
          </p>
        </h2>
        <div className="citation">
          <div className="citation-content">
            <cite className="description">Excerpt from ASU charter</cite>
          </div>
        </div>
      </blockquote>
    </div>

  </>
);
BlockquoteAnimated.parameters = {
  initFunc: {
    disable: false,
  },
};
export const TestimonialsNoImage = () => (
  <>
    <div className="uds-blockquote uds-testimonial accent-gold uds-content-align">
      <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>
      <blockquote>
        <p>
          Computers make excellent and efficient servants, but I have no wish to
          serve under them.
        </p>
        <div className="citation">
          <div className="citation-content">
            <cite className="name">Spock</cite>
            <cite className="description">First officer, USS Enterprise</cite>
          </div>
        </div>
      </blockquote>
    </div>

    <div className="bg-gray-2">
      <div className="uds-blockquote uds-testimonial accent-maroon uds-content-align">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            I could not deprive you of the revelation of all that you could
            accomplish together, of a friendship that will define you both in
            ways you cannot yet realize.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Spock</cite>
              <cite className="description">First officer, USS Enterprise</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </>
);

export const TestimonialsWithImage = () => (
  <>
    <div className="uds-blockquote uds-testimonial with-image alt-citation accent-maroon uds-content-align">
      <img
        src={ imageName.anon }
        alt="Pretend this is Han Solo"
        width="600"
        height="400"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>
      <blockquote>
        <p>
          Hokey religions and ancient weapons are no match for a good blaster at
          your side, kid.
        </p>
        <div className="citation">
          <div className="citation-content">
            <cite className="name">Han Solo</cite>
          </div>
        </div>
      </blockquote>
    </div>

    <div className="bg-gray-7">
      <div className="uds-blockquote uds-testimonial with-image alt-citation accent-gold text-white uds-content-align">
        <img
          src={ imageName.anon }
          alt="Pretend this is Han Solo"
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            I used to wonder about that myself. Thought it was a bunch of
            mumbo-jumbo. A magical power holding together good and evil, the
            dark side and the light? Crazy thing is, it’s true. The Force, the
            Jedi — all of it. It’s all true.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Han Solo</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </>
);
