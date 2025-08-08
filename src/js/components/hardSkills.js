import { hardSkillsListRef } from '../config/references';
import apiService from '../services/api-service';

export async function getHardSkills () {
  const skills = await apiService.getHardSkills();

  const list = skills.map(({ _id, title, image }) => {
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

  hardSkillsListRef.append(...list);
}
