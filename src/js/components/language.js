import { WebStorage } from '../web_storage';
import { language, location } from '../config/references';
import path from 'path';

const langPrefer = new WebStorage({
  propertyName: 'lang-prefer'
});

const linkAttribute = 'lang-switch-tablet';
const langSwither = window.matchMedia('(min-width: 768px)').matches
  ? document.querySelector(`[${linkAttribute}]`)
  : null;

(() => {
  if (!langPrefer.propertyValue) {
    return;
  }

  console.log('test', location);
  if (langPrefer.propertyValue === language) {
    const text = `${location.pathname}`;

    const p = path.join(
      text.split('/').reduce((prevValue, value) => {
        console.log('1 prevValue: ', prevValue);
        console.log('1 value: ', value);

        if (value !== 'index.html') {
          prevValue += value;
        }
        return prevValue;
      }, '/')
    );
    console.log(p);

    window.history.pushState(null, null, p + location.hash);
    return;
  }

  if (langPrefer.propertyValue === 'uk') {
    window.location.href += 'uk/';
  } else if (langPrefer.propertyValue === 'en') {
    window.location.href = window.location.origin;
  }
})();

langSwither.addEventListener('click', languageClick);

function languageClick (e) {
  const linkAttributeValue = langSwither.getAttribute(`${linkAttribute}`);

  langPrefer.propertyValue = linkAttributeValue;
  langPrefer.setItem();
}
