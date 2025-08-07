import { BASE_API_URL } from '../config/constants';

class ApiService {
  #BASE_API_URL;

  constructor () {
    this.#BASE_API_URL = BASE_API_URL;
    this.getInfo = this.#errorHAndler(this.getInfo);
    this.getSoftSkills = this.#errorHAndler(this.getSoftSkills);
  }

  #errorHAndler (func) {
    return async (...args) => {
      try {
        return await func.apply(this, args);
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  }

  async getInfo () {
    const url = this.#BASE_API_URL + '/admin/info';

    const response = await fetch(url, {
      mode: 'cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((data) => data.data);
    return response;
  }

  async getSoftSkills (lang, perPage = 100, page = 1) {
    const url =
      this.#BASE_API_URL +
      `/admin/softSkills/${lang}?perPage=${perPage}&page=${page}`;

    const response = await fetch(url, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => data.data);
    return response;
  }
}

const apiService = new ApiService();
export default apiService;
