// @ts-check

/**
 * @typedef {import('.').TestimonialItem} TestimonialItem
 */

const testimonialNoCitation = [
  {
    id: 1,
    quote: {
      title: "Walt Disney",
      content:
        "Laughter is timeless, imagination has no age, dreams are forever.",
    },
    imageSource: `https://placeimg.com/300/300/nature`,
    imageAltText: `Image of Walt Disney`,
  },
  {
    id: 2,
    quote: {
      title: "Walt Disney",
      content: `We keep opening new doors and doing new things,
      because we’recurious and curiosity keeps leading us down new paths.`,
    },
    imageSource: `https://placeimg.com/300/300/nature`,
    imageAltText: `Image of Walt Disney`,
  },
];

const testimonialAltCitation = [
  {
    quote: {
      content: `Some people want it to happen, some people wish it would happen and some people make it happen.`,
      cite: {
        name: `Michael Jordan`,
        description: `NBA Superstar`,
      },
    },
  },
  {
    quote: {
      content: `Talent wins games, but teamwork and intelligence wins championships.`,
      cite: {
        name: `Michael Jordan`,
        description: `NBA Superstar`,
      },
    },
  },
];

const testimonialNoImage = [
  {
    id: 1,
    quote: {
      content: `Computers make excellent and efficient servants, but I have no wish to serve under them.`,
      cite: {
        name: `Spock`,
        description: `First officer, USS Enterprise`,
      },
    },
  },
  {
    id: 2,
    quote: {
      content: `I could not deprive you of the revelation of all that you could accomplish together, of a friendship that will define you both in ways you cannot yet realize.`,
      cite: {
        name: `Spock`,
        description: `First officer, USS Enterprise`,
      },
    },
  },
];

const testimonialWithImage = [
  {
    id: 1,
    quote: {
      content: `I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.`,
      cite: {
        name: `Han Solo`,
      },
    },
    imageSource: `https://placeimg.com/400/400/tech`,
    imageAltText: `Pretend this is Han Solo`,
  },
  {
    id: 2,
    quote: {
      content: `Hokey religions and ancient weapons are no match for a good blaster at your side, kid.`,
      cite: {
        name: `Han Solo`,
      },
    },
    imageSource: `https://placeimg.com/400/400/arch`,
    imageAltText: `Pretend this is Han Solo`,
  },
];

const testimonialNoImage2 = [
  {
    id: 1,
    quote: {
      content: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`,
      cite: {
        name: `Thomas Jefferson`,
        description: `The Declaration of Independence`,
      },
    },
  },
  {
    id: 2,
    quote: {
      content: `Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.`,
      cite: {
        name: `Abraham Lincoln`,
        description: `Gettysburg Address`,
      },
    },
  },
];

const testimonialWithImage2 = [
  {
    id: 1,
    quote: {
      content: `ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.`,
      cite: {
        name: `Michael M. Crow`,
        description: `ASU Charter`,
      },
    },
    imageSource: `https://placeimg.com/400/400/any`,
    imageAltText: `Pretend this is Michael M. Crow, President of ASU`,
  },
  {
    id: 2,
    quote: {
      content: `Eight design aspirations guide the ongoing evolution of ASU as a New American University. These institutional objectives are integrated in innovative ways throughout the university to achieve excellence, access and impact.`,
      cite: {
        name: `Michael M. Crow`,
        description: `ASU Charter`,
      },
    },
    imageSource: `https://placeimg.com/300/300/any`,
    imageAltText: `Pretend this is Michael M. Crow, President of ASU`,
  },
];

export {
  testimonialNoImage,
  testimonialWithImage,
  testimonialNoImage2,
  testimonialWithImage2,
  testimonialNoCitation,
  testimonialAltCitation,
};
