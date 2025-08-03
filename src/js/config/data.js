import apiService from '../services/api-service';
import { aboutRef, avatarRef, introRef, language } from './references';
(async () => {
  const data = await apiService.getInfo();
  avatarRef.setAttribute('src', data.avatar.cut);
  introRef.innerText = data.intro[language];
  aboutRef.innerText = data.about[language];
})();
