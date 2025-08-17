import { language, portfolioSectionRef } from '../config/references';
import apiService from '../services/api-service';
import { SessionStorage } from '../services/session-storage';
import { HandlePaginationClass } from './pagination';

const sessionStorage = new SessionStorage({ propertyName: 'portfolio' });
const portfolioListRef = portfolioSectionRef.querySelector('ul');
const portfolioPaginationRef = portfolioSectionRef.querySelector(
  '#portfolio-pagination'
);

const defImgUrl = new URL('../../images/png/def.jpeg', import.meta.url);

export const getProjects = async () => {
  let perPage;
  let page;
  let data = [];
  let totalPages = 1;
  let hasNextPage = false;
  let hasPrevPage = false;

  if (!sessionStorage.propertyValue) {
    perPage = window.matchMedia('(min-width: 768px)').matches ? 6 : 4;
    page = 1;
    sessionStorage.propertyValue = { perPage, page };
    sessionStorage.setItem();
  } else {
    perPage = sessionStorage.propertyValue.perPage;
    page = sessionStorage.propertyValue.page;
  }

  ({ data, totalPages, hasNextPage, hasPrevPage } =
    await apiService.getProjects(language, perPage, page));

  if (data.length < 1) return;
  portfolioListRef.replaceChildren(...(await createPortfolioList(data)));

  if (totalPages < 2) return;
  const pagination = new HandlePaginationClass({
    hasPrevPage,
    hasNextPage,
    totalPages,
    page,
    perPage,
    paginationRef: portfolioPaginationRef,
    sessionStorage,
    apiGetItems: handleGetProjects(language),
    ItemsListRef: portfolioListRef,
    createItemsList: createPortfolioList
  });
  pagination.handlePagination();
};

async function createPortfolioList (data) {
  const list = data.map(
    async ({ _id, title, image, description, link, github, technology }) => {
      const skills = await apiService.getHardSkillsByIdList(technology);
      const skillTitles = skills.data.map(skill => skill.title);

      const li = document.createElement('li');
      li.setAttribute('class', 'portfolio-list-item');
      li.setAttribute('project-id', _id);
      li.innerHTML = `
     <div> 
     <div class="img-block">
        <img src="${image.url || defImgUrl}" alt="${image.name} icon" />
      </div>
      <h3>${title || 'project name'}</h3>
      <p>${description || 'description fo project'}</p>
      <p>${skillTitles.join(', ')}</p>
      </div>
      <div class="project-links">
        <a href="${link}" target="_blank">link to project</a>
        <a href="${github}" target="_blank">link to github</a>
      </div>`;
      return li;
    }
  );
  return await Promise.all(list);
}

function handleGetProjects (lang) {
  return async (perPage, page) => {
    return await apiService.getProjects(lang, perPage, page);
  };
}
