import { colorMode, SCHEMAS, DATA_ATR, bodyElement } from './theme';

let currentTheme = bodyElement.getAttribute(DATA_ATR);
const BUTTON_ID = 'theme-button';
const btns = document.querySelectorAll(`[id="${BUTTON_ID}"]`);
for (const btn of btns) {
  btn.addEventListener('click', () => {
    const color = currentTheme === SCHEMAS.DARK ? SCHEMAS.LIGHT : SCHEMAS.DARK;

    bodyElement.setAttribute(DATA_ATR, color);
    colorMode.propertyValue = color;
    colorMode.setItem();
    currentTheme = color;
  });
}
