import { WebStorage } from '../web_storage';

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

  // TODO: redirect!!!
  if (langPrefer.propertyValue === document.children[0].getAttribute('lang')) {
    return;
  }
  if (langPrefer.propertyValue === 'uk') {
    window.location.href += 'uk/index.html';
  } else if (langPrefer.propertyValue === 'en') {
    window.location.href = window.location.origin;
  }
})();

langSwither.addEventListener('click', languageClick);

function languageClick () {
  const linkAttributeValue = langSwither.getAttribute(`${linkAttribute}`);
  langPrefer.propertyValue = linkAttributeValue;
  langPrefer.setItem();
}
