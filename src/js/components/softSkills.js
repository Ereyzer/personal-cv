import { softSkillsListRef } from '../config/references';
import apiService from '../services/api-service';

const image = new URL('../../images/svg/Frame.svg', import.meta.url);

export async function getSoftSkills (language) {
  const softSkills = await apiService.getSoftSkills(language.toUpperCase());

  const items = softSkills.map(({ _id, title, text }) => {
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
  softSkillsListRef.append(...items);
}
