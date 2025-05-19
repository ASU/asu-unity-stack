import { EventHandler } from "./bootstrap-helper";

/**
 * Initializes the card body elements by applying text truncation if the content exceeds
 * a specified height based on the CSS line-clamp and line-height properties. Adds
 * accessible text for truncated content.
 *
 * @return {void} This function does not return any value.
 */
function initCardBodies() {

  const cardBodies = document.querySelectorAll('.card-body');
  cardBodies.forEach((cardBody, index) => {
    const paragraph = cardBody.querySelector('div p');
    const originalText = paragraph.textContent;
    const style = window.getComputedStyle(cardBody);

    // Get the number of lines allowed (line clamp), usually set via CSS like -webkit-line-clamp
    const lineClamp = parseInt(style.webkitLineClamp || style.lineClamp);

    // Get the line height and font size from the styles
    const lineHeight = parseFloat(style.lineHeight);
    const fontSize = parseFloat(style.fontSize);

    // Calculate the actual line height. If lineHeight is not a number, estimate using fontSize
    const actualLineHeight = isNaN(lineHeight) ? parseFloat(style.lineHeight) * fontSize : lineHeight;

    // Calculate the maximum height allowed for the paragraph (lines × line height)
    const maxHeight = lineClamp * actualLineHeight;

    // Check if the paragraph exceeds the maximum allowed height
    if (paragraph.offsetHeight >= maxHeight) {
      let visibleText = '';
      const words = originalText.split(' ');
      let visibleWordCount = 0;
      let tempText = '';

      // Add words one by one until the text height exceeds the max allowed height
      while (visibleWordCount < words.length && getTextHeight(tempText + (tempText ? ' ' : '') + words[visibleWordCount], paragraph) <= maxHeight) {
        tempText += (tempText ? ' ' : '') + words[visibleWordCount];
        visibleWordCount++;
      }
      visibleText = tempText + '...';

      // Create a new hidden element to store the truncated text
      const visibleTextElementId = `visible-text-${Math.random().toString(36).substring(7)}`;
      const visibleTextElement = document.createElement('div');
      visibleTextElement.id = visibleTextElementId;
      visibleTextElement.textContent = visibleText;
      visibleTextElement.style.position = 'absolute';
      visibleTextElement.style.top = '0';
      visibleTextElement.style.zIndex = '-1';

      // Add the hidden element to the DOM
      cardBody.appendChild(visibleTextElement);

      paragraph.setAttribute('aria-describedby', visibleTextElementId);

      // Hide the original paragraph from screen readers
      paragraph.setAttribute('aria-hidden', 'true');
    }
  });


}

/**
 * Calculates the rendered height of a given text when styled and constrained
 * within the dimensions and styles of the specified HTML element.
 *
 * @param {string} text - The text content whose height is to be measured.
 * @param {HTMLElement} element - The element used to derive styling and width constraints.
 * @return {number} The height in pixels of the rendered text.
 */
function getTextHeight(text, element) {
  const tempElement = document.createElement(element.tagName);
  tempElement.style.font = window.getComputedStyle(element).font;
  tempElement.style.width = window.getComputedStyle(element).width;
  tempElement.style.whiteSpace = 'pre-wrap';
  tempElement.textContent = text;
  document.body.appendChild(tempElement);
  const height = tempElement.offsetHeight;
  document.body.removeChild(tempElement);
  return height;
}

EventHandler.on(window, 'load.uds.card-bodies', initCardBodies);

export { initCardBodies };
