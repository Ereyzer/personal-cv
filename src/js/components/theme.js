import { WebStorage } from '../web_storage';

export const SCHEMAS = {
  DARK: 'dark',
  LIGHT: 'light'
};

export const DATA_ATR = 'data-theme';

export const colorMode = new WebStorage({
  propertyName: 'color-mode'
});
export const bodyElement = document.querySelector('body');
