import { addLinks } from '../components/addLinks';
import { getResume } from '../components/getResume';
import { getHardSkills } from '../components/hardSkills';
import { loadLoader } from '../components/peload';
import { getProjects } from '../components/projects';
import { createSender } from '../components/sendContactMesage';
import { getSoftSkills } from '../components/softSkills';
import apiService from '../services/api-service';
import { aboutRef, avatarRef, introRef, language } from './references';

(async () => {
  const data = await apiService.getInfo();

  avatarRef.setAttribute('src', data.avatar.cut);
  introRef.innerText = data.intro[language];
  aboutRef.innerText = data.about[language];
  addLinks(data);
  getSoftSkills(language);
  getHardSkills();
  getResume();
  loadLoader();
  createSender();
  getProjects();
  apiService.sendStat(apiService.statEnum.opened, language);
})();
