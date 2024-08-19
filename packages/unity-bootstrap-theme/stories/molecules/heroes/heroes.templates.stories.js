
import React from "react";

import { fullLayoutDecorator } from "../../../../../shared/components/Layout.js";
import cardsImage from "../cards/cards-image.jpg";

const titleArgs = {
  title: {
    name: "Title",
    control: {
      type: "text"
    }
  },
  titleColors: {
    name: "Title Colors",
    options: ["Black Text", "White Text", "Black Background", "Gold Background"],
    mapping: {
      "Black Text": "",
      "White Text": "text-white",
      "Black Background": "text-white highlight-black",
      "Gold Background": "highlight-gold",
    },
    control: {
      type: "radio",
    },
  },
}

const subTitleArgs = {
  subTitle: {
    name: "Sub Title",
    control: {
      type: "text"
    }
  },
  subTitleColors: {
    name: "Sub Title Colors",
    options: ["Black Text", "White Text", "Black Background", "Gold Background"],
    mapping: {
      "Black Text": "",
      "White Text": "text-white",
      "Black Background": "text-white highlight-black",
      "Gold Background": "highlight-gold",
    },
    control: {
      type: "radio",
    },
  },
}


const heroArgTypes = {
  size: {
    name: "Size",
    options: ["Small", "Medium", "Large"],
    mapping: {
      "Small": "uds-hero-sm",
      "Medium": "uds-hero-md",
      "Large": "uds-hero-lg",
    },
    control: {
      type: "radio",
    },
  },
  ...titleArgs,
  ...subTitleArgs,
};

const heroDefaultArgs = {
  title: "Default Title",
  titleColors: "White Text",
  subTitle: "",
  subTitleColors: "White Text",
}

const storyHeroArgTypes = {
  size: {
    name: "Size",
    options: ["Medium", "Large"],
    mapping: {
      "Medium": "uds-story-hero",
      "Large": "uds-story-hero uds-story-hero-lg entry-header",
    },
    control: {
      type: "radio",
    },
  },
};

export default {
  title: "Molecules/Heroes/Templates",
  decorators: [ fullLayoutDecorator ],

};

const Hero = ({size, title, titleColors, subTitle, subTitleColors}) => (
  <div className={`${size} has-btn-row`}>
    <div className="hero-overlay"></div>
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    {subTitle ? (
    <header>
      <p className="hero-subtitle">
        <span className={subTitleColors}>
          {subTitle}
        </span>
      </p>
      <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>
    </header>) :
    (
      <h1>
        <span className={titleColors}>
          {title}
        </span>
      </h1>)
    }
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-default btn-gold"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Call to action button
      </a>
      <a
        href="#"
        className="btn btn-default btn-maroon"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Second Call to action button
      </a>
    </div>
  </div>
);
export const HeroSmall = Hero.bind({});
HeroSmall.args = {
  size: "Small",
  ...heroDefaultArgs,
}
HeroSmall.argTypes = heroArgTypes;

export const HeroMedium = Hero.bind({});
HeroMedium.args = {
  size: "Medium",
  ...heroDefaultArgs,
}

HeroMedium.argTypes = heroArgTypes;
export const HeroLarge = Hero.bind({});
HeroLarge.args = {
  size: "Large",
  ...heroDefaultArgs,
}

HeroLarge.argTypes = heroArgTypes;


const StoryHero = ({size}) => (
<>
  <section className={size}>
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="content">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Current Page</a>
          </li>
        </ol>
      </nav>
      <h1 className="article">
        The answer to the ultimate question of life, the universe, and
        everything
      </h1>
    </div>
  </section>
  <div className="container-xl">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <article>
          <p>
            Cuba Poland worldwide hotel South-America flexibility Amsterdam
            currency. Expedia Moscow St. Petersburg Tripit. Lonely planet
            train airBnB on a shoestring Amsterdam South-America. Hotspots
            flight active lifestyle France activities relaxation car rental
            New York City discount. Maps Australia Tripit translator St.
            Petersburg Russia bus Hungary. Package horse riding itinerary
            foreign flight last minute travel housing euro.
          </p>
          <p>
            Lodge tent rural. Transit relaxation Poland Asia airmiles hotel
            deal things to do Cuba airBnB diary animals package. Rome bunkbeds
            itinerary Pacific. Hitchhiking ticket Pacific France national
            bunkbeds St. Petersburg Hungary. Translator recommendations
            booking discover expedia city trip diary motel chartering guest
            travel. Unique experiences lonely planet guest nighttrain
            couchsurfing horse riding flight China Germany last minute
            overnight.
          </p>
          <p>
            Stay Pacific uncharted relaxation transit tourist attractions
            insurance tent lifestyle booking train hotel. Itinerary exchange
            rate Budapest last minute hotel translation. Earth Cuba booking
            spa place to stay adventure group discount unique experiences
            caravan Moscow gateway package currency kayak. Lonely planet
            housing Barcelona. Australia private jet city trip taxi translator
            cab active lifestyle airBnB explore South-America caravan tour
            operator.
          </p>
        </article>
      </div>
    </div>
  </div>
</>
);

export const StoryHeroMedium = StoryHero.bind({});
StoryHeroMedium.args = {
  size: "Medium",
};
StoryHeroMedium.argTypes = storyHeroArgTypes;
export const StoryHeroLarge = StoryHero.bind({});
StoryHeroLarge.args = {
  size: "Large",
};
StoryHeroLarge.argTypes = storyHeroArgTypes;

