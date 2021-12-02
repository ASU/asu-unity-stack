import ProfilePicTwo from "./test-image-2.png";
import ProfilePicOne from "./test-image.png";

export const getTestCards = (num = 15) => {
  return Array.from(Array(num)).map((x, idx) => {
    if (idx % 2 === 0) {
      return {
        id: idx.toString(),
        imgURL: ProfilePicOne,
        name: "Christine Wilkinson",
        titles: [{ name: "Regents Professor", org: "ASU" }],
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
    }
    return {
      id: idx.toString(),
      imgURL: ProfilePicTwo,
      name: "Michael Crow",
      titles: [{ name: "Sr VP/Sec of Univ & Asc Prof", org: "ASU" }],
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
