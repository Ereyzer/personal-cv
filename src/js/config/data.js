import { addLinks } from '../components/addLinks';
import { getResume } from '../components/getResume';
import { getHardSkills } from '../components/hardSkills';
import { getSoftSkills } from '../components/softSkills';
import apiService from '../services/api-service';
import { aboutRef, avatarRef, introRef, language } from './references';
(async () => {
  const data = await apiService.getInfo();
  console.log(data);

  avatarRef.setAttribute('src', data.avatar.cut);
  introRef.innerText = data.intro[language];
  aboutRef.innerText = data.about[language];
  addLinks(data);
  getSoftSkills(language);
  getHardSkills();
  getResume();
})();
