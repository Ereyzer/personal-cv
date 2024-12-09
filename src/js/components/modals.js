import { Changer } from '../changer_class';

const menu = new Changer({
  button: 'modal-menu-button',
  changeNode: 'modal-menu-overlay',
  classForChange: 'is-open'
});
menu.addLisener('click');

const contact = new Changer({
  button: 'modal-contact-button',
  changeNode: 'modal-contact-overlay',
  classForChange: 'is-open'
});
contact.closeOnOverlay = function () {
  this.changeNode[0].addEventListener('click', (e) => {
    if (e.currentTarget === e.target) {
      this.addClass();
    }
  });
};
contact.addLisener('click');
contact.closeOnOverlay();
