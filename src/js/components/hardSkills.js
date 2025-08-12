import {
  hardSkillsListRef,
  hardSkillsPaginationRef
} from '../config/references';
import apiService from '../services/api-service';
import { SessionStorage } from '../services/session-storage';
import { HandlePaginationClass } from './pagination';

const sessionStorage = new SessionStorage({ propertyName: 'hardSkills' });

export async function getHardSkills () {
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

  ({ data, totalPages, hasNextPage, hasPrevPage } =
    await apiService.getHardSkills(perPage, page));

  if (data.length < 1) return;

  hardSkillsListRef.append(...createHardSkillsList(data));

  if (totalPages < 2) return;
  const pagination = new HandlePaginationClass({
    hasPrevPage,
    hasNextPage,
    totalPages,
    page,
    perPage,
    paginationRef: hardSkillsPaginationRef,
    sessionStorage,
    apiGetItems: apiService.getHardSkills,
    ItemsListRef: hardSkillsListRef,
    createItemsList: createHardSkillsList
  });
  pagination.handlePagination();
}

function createHardSkillsList (data) {
  const list = data.map(({ _id, title, image }) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'offer-item');
    li.setAttribute('hard-skill-id', _id);
    li.innerHTML = `<div class="hard-skill-card">
  <figure>
    <img src="${image}" alt="${title} icon" />
    <figcaption>${title}</figcaption>
  </figure>
</div>`;
    return li;
  });
  return list;
}
