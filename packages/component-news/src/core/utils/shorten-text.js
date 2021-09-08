// @ts-check

const shortenText = (text, maxLength) => {
  let newText = text;
  if (newText.length > maxLength) {
    newText = newText.substr(0, newText.lastIndexOf(" ", maxLength));
    newText += "...";
  }
  return newText;
};

export { shortenText };
