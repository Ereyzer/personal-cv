import apiService from '../services/api-service';
import { avatarRef } from './references';
(async () => {
  const data = await apiService.getInfo();
  avatarRef.setAttribute('src', data.avatar.cut);
})();
