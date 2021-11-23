import ProfilePic from "../assets/test-image.png";

export const dataConverter = data => {
  return data.map(datum => {
    return {
      id: datum.id.raw,
      imgURL: ProfilePic,
      name: datum.title.raw,
      title: "Regents Professor",
      email: "email@asu.edu",
      telephone: "555-555-5555",
      addressLink: "asu.edu",
      addressLine1: "1234 Address St.",
      addressLine2: "Tempte, AZ 12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis",
      facebookLink: "https://facebook.com",
      linkedinLink: "https://linkedin.com",
      twitterLink: "https://twitter.com",
    };
  });
};
