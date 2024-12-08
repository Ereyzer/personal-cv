import { debounce } from './trottle-debounce';
const tabletWidth = window.matchMedia('(min-width: 768px)');

if (tabletWidth.matches) {
  tabletVersion();
} else {
  mobileVersion();
}

function mobileVersion () {
  const navLists = document.querySelector('div.modal-menu nav ul');
  const chosenCls = 'hundred';

  navLists.addEventListener('click', (e) => {
    const liArr = [...e.currentTarget.children];
    if (liArr.includes(e.target.parentNode)) {
      for (const elem of liArr) {
        if (!elem.classList.contains(chosenCls)) continue;
        elem.classList.remove(chosenCls);
      }
      e.target.parentNode.classList.add(chosenCls);
    }
  });
}

function tabletVersion () {
  const mainElem = document.querySelector('main');
  const sections = {
    home: 'home',
    about: 'about',
    offer: 'offer',
    skills: 'skills',
    portfolio: 'portfolio'
  };

  document.addEventListener(
    'scroll',
    debounce(lisenerEnv(sections, mainElem), 300)
  );
}

function lisenerEnv (sections, mainElem) {
  const viewportHeight = window.visualViewport.height;
  let oldScroll = window.scrollY || 0;

  const selectors = Object.values(sections).reduce((prev, key, i) => {
    prev[i] = {
      selector: mainElem.children[key],
      value: 0,
      menuItem: document.querySelector(`div.header-nav a[href="#${key}"]`)
        .parentNode
    };
    return prev;
  }, []);

  return () =>
    selectors.forEach(({ selector, value, menuItem }, index, arr) => {
      const { top: t, bottom: b } = selector.getBoundingClientRect();

      if (!(t - viewportHeight < 0 && b > 0)) {
        if (value !== 0) {
          menuItem.style.backgroundSize = '0%';
          arr[index].value = 0;
        }
        oldScroll = window.scrollY;
        return;
      }

      let percentOfElemInView = 0;
      const partOfElenInView = viewportHeight - t;

      if (partOfElenInView > viewportHeight) {
        percentOfElemInView =
          b <= viewportHeight
            ? Math.round(b / (selector.clientHeight / 100))
            : 100;
      } else {
        percentOfElemInView =
          partOfElenInView <= selector.clientHeight
            ? Math.round(partOfElenInView / (selector.clientHeight / 100))
            : 100;
      }

      if (value === percentOfElemInView) return;

      const newScroll = window.scrollY;

      switch (index) {
        case arr.length - 1:
          menuItem.style.backgroundPositionX = 'left';
          break;
        case 0:
          menuItem.style.backgroundPositionX = 'right';
          break;

        default:
          if (newScroll < oldScroll) {
            // up
            menuItem.style.backgroundPositionX =
              arr[index + 1].value > 0 ? 'right' : 'left';
          } else {
            // down
            menuItem.style.backgroundPositionX =
              index > 0 && arr[index - 1].value > 0 ? 'left' : 'right';
          }
          break;
      }

      menuItem.style.backgroundSize = `${percentOfElemInView}%`;

      arr[index].value = percentOfElemInView;
      oldScroll = newScroll;
    });
}
