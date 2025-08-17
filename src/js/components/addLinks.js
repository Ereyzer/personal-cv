import { socialLinkListRef } from '../config/references';

export const addLinks = data => {
  const listClone = socialLinkListRef.cloneNode(true);

  if (data.linkedin) {
    const linkedinRef = listClone.querySelector('#social-link-linkedin');
    linkedinRef.setAttribute('href', data.linkedin);
  }
  if (data.facebook) {
    const facebookRef = listClone.querySelector('#social-link-facebook');
    facebookRef.setAttribute('href', data.facebook);
  }
  if (data.instagram) {
    const instagramRef = listClone.querySelector('#social-link-instagram');
    instagramRef.setAttribute('href', data.instagram);
  }
  if (data.github) {
    const githubRef = listClone.querySelector('#social-link-github');
    githubRef.setAttribute('href', data.github);
  }
  if (data.phone) {
    const telegramRef = listClone.querySelector('#social-link-telegram');
    telegramRef.setAttribute('href', `https://t.me/${data.phone}`);
  }
  socialLinkListRef.replaceChildren(...listClone.children);
};
