import {
  softSkillsListRef,
  softSkillsPaginationRef
} from '../config/references';
import apiService from '../services/api-service';
import { SessionStorage } from '../services/session-storage';
import { HandlePaginationClass } from './pagination';

const image = new URL('../../images/svg/Frame.svg', import.meta.url);

const sessionStorage = new SessionStorage({ propertyName: 'softSkills' });

export async function getSoftSkills (language) {
  let perPage;
  let page;
  let data = [];
  let totalPages = 1;
  let hasNextPage = false;
  let hasPrevPage = false;

  if (!sessionStorage.propertyValue) {
    perPage = 6;
    page = 1;
    sessionStorage.propertyValue = { perPage, page };
    sessionStorage.setItem();
  } else {
    perPage = sessionStorage.propertyValue.perPage;
    page = sessionStorage.propertyValue.page;
  }
  ({ data, totalPages, hasNextPage, hasPrevPage } = await handleGetSoftSkills(
    language.toUpperCase()
  )(perPage, page));

  if (data.length < 1) return;

  softSkillsListRef.append(...createSoftSkillsList(data));

  if (totalPages < 2) return;
  const pagination = new HandlePaginationClass({
    hasPrevPage,
    hasNextPage,
    totalPages,
    page,
    perPage,
    paginationRef: softSkillsPaginationRef,
    sessionStorage,
    apiGetItems: handleGetSoftSkills(language.toUpperCase()),
    ItemsListRef: softSkillsListRef,
    createItemsList: createSoftSkillsList
  });
  pagination.handlePagination();
}

function createSoftSkillsList (data) {
  const items = data.map(({ _id, title, text }) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'offer-item');
    li.setAttribute('offer-id', _id);
    li.innerHTML = `<div class="skill-card">
    <div class="skill-icon">
    <img src="${image}" alt="defoult skill logo" />;
    </div>
    <h4 class="skill-title">${title}</h4>
    <p class="skill-text">
      ${text}
    </p>
  </div>`;
    return li;
  });
  return items;
}

function handleGetSoftSkills (lang) {
  return async (perPage, page) => {
    return await apiService.getSoftSkills(lang, perPage, page);
  };
}
