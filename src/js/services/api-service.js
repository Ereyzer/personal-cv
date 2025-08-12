import { BASE_API_URL } from '../config/constants';

class ApiService {
  #BASE_API_URL;

  constructor () {
    this.#BASE_API_URL = BASE_API_URL;
    this.getInfo = this.#errorHAndler(this.getInfo);
    this.getSoftSkills = this.#errorHAndler(this.getSoftSkills);
    this.getHardSkills = this.#errorHAndler(this.getHardSkills);
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
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => data.data);
    return response;
  }

  async getSoftSkills (lang, perPage = 100, page = 1) {
    const url =
      this.#BASE_API_URL +
      `/admin/softSkills/${lang}?perPage=${perPage}&page=${page}`;

    const response = await fetch(url, { mode: 'cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
    return response;
  }

  async getHardSkills (perPage = 100, page = 1) {
    const url =
      this.#BASE_API_URL + `/admin/hardSkills?perPage=${perPage}&page=${page}`;

    const response = await fetch(url, { mode: 'cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
    return response;
  }

  async getResume () {
    const url = BASE_API_URL + '/admin/info/resume';
    const response = await fetch(url, { mode: 'cors' })
      .then(async response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        const contentDisposition = response.headers.get('Content-Disposition');
        let originalFileName = 'default_filename.pdf';

        if (contentDisposition) {
          // Use a regular expression to extract the filename from the header value
          const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
          if (filenameMatch && filenameMatch[1]) {
            originalFileName = filenameMatch[1];
          }
        }
        return { file: await response.blob(), originalFileName };
      })
      .catch(e => {
        console.log('get Resume error');

        console.log(e);
      });
    return response;
  }
}

const apiService = new ApiService();
export default apiService;
