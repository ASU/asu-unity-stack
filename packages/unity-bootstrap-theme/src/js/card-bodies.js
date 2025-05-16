import { EventHandler } from "./bootstrap-helper";

function initCardBodies() {

  const cardBodies = document.querySelectorAll('.card-body');
  cardBodies.forEach((cardBody, index) => {
    const paragraph = cardBody.querySelector('div p');
    const originalText = paragraph.textContent;
    const style = window.getComputedStyle(cardBody);
    const lineClamp = parseInt(style.webkitLineClamp || style.lineClamp);
    const lineHeight = parseFloat(style.lineHeight);
    const fontSize = parseFloat(style.fontSize);
    const actualLineHeight = isNaN(lineHeight) ? parseFloat(style.lineHeight) * fontSize : lineHeight;
    const maxHeight = lineClamp * actualLineHeight;

    if (paragraph.offsetHeight >= maxHeight) {
      let visibleText = '';
      const words = originalText.split(' ');
      let visibleWordCount = 0;
      let tempText = '';
      while (visibleWordCount < words.length && getTextHeight(tempText + (tempText ? ' ' : '') + words[visibleWordCount], paragraph) <= maxHeight) {
        tempText += (tempText ? ' ' : '') + words[visibleWordCount];
        visibleWordCount++;
      }
      visibleText = tempText + '...';

      const visibleTextElementId = `visible-text-${Math.random().toString(36).substring(7)}`;
      const visibleTextElement = document.createElement('div');
      visibleTextElement.id = visibleTextElementId;
      visibleTextElement.textContent = visibleText;
      visibleTextElement.style.position = 'absolute';
      visibleTextElement.style.left = '-9999px';
      visibleTextElement.style.top = '-9999px';
      visibleTextElement.setAttribute('aria-hidden', 'true');

      cardBody.appendChild(visibleTextElement);

      paragraph.setAttribute('aria-describedby', visibleTextElementId);
    }
  });


};

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
