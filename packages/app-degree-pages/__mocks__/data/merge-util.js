const fs = require("fs");

const INPUT_FILE = "./input.json";
const INPUT_FILE_2 = "./degree-search.json";
const OUTPUT_FILE = `${INPUT_FILE_2}.new.json`;

// function formatData(rawData) {
//   return JSON.parse(rawData);
// }

const inpuntJson = JSON.parse(fs.readFileSync(INPUT_FILE));
const data = JSON.parse(fs.readFileSync(INPUT_FILE_2));

const keys = ["EmailAddr"];

const programs = data.programs.map((p, index) => {
  const inputValaues = {};
  keys.forEach(key => {
    const newAttrValue = inpuntJson.programs[index][key];
    inputValaues[key] = newAttrValue;
  });
  return { ...p, ...inputValaues };
});

const newData = {
  ...data,
  programs,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newData, null, 4));
