import { getSoftSkills } from '../components/softSkills';
import apiService from '../services/api-service';
import {
  aboutRef,
  avatarRef,
  // facebookRef,
  // githubRef,
  // instagramRef,
  introRef,
  language
  // linkedinRef,
  // telegramRef,
} from './references';
(async () => {
  const data = await apiService.getInfo();
  console.log(data);

  avatarRef.setAttribute('src', data.avatar.cut);
  introRef.innerText = data.intro[language];
  aboutRef.innerText = data.about[language];
  // data.linkedin && linkedinRef.setAttribute('href', data.linkedin);
  // data.facebook && facebookRef.setAttribute('href', data.facebook);
  // data.instagram && instagramRef.setAttribute('href', data.instagram);
  // data.phone && telegramRef.setAttribute('href', data.phone);
  // data.github && githubRef.setAttribute('href', data.github);
  getSoftSkills(language);
})();
