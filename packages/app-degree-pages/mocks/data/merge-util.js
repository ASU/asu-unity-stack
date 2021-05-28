const fs = require("fs");

const INPUT_FILE = "./input.json";
const INPUT_FILE_2 = "./degree-search.json";
const OUTPUT_FILE = `${INPUT_FILE_2}.new.json`;

// function formatData(rawData) {
//   return JSON.parse(rawData);
// }

const inpuntJson = JSON.parse(fs.readFileSync(INPUT_FILE));
const data = JSON.parse(fs.readFileSync(INPUT_FILE_2));

const key = "AcadPlan";

const programs = data.programs.map((p, index) => {
  const newAttrValue = inpuntJson.programs[index][key];
  return { ...p, [key]: newAttrValue };
});

const newData = {
  ...data,
  programs,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newData, null, 4));
