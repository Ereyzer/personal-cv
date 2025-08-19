import { language, socialLinkListsRef } from '../config/references';
import apiService from '../services/api-service';

const openLinkListener = e => {
  apiService.sendStat(
    apiService.statEnum[
      `open${e.currentTarget.getAttribute('id').split('-')[2]}`
    ],
    language
  );
};

const updateLinks = (listClone, data) => {
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
  return listClone;
};

export const addLinks = data => {
  for (let i = 0; i < socialLinkListsRef.length; i++) {
    const element = socialLinkListsRef[i];
    element.replaceChildren(
      ...updateLinks(element.cloneNode(true), data).children
    );
    element.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', openLinkListener);
    });
  }
};
