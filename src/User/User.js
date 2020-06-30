import URL from './urlApi';
import { fetchData } from './utilsApi';

class User {
  constructor() {
    this.page = 0;
    this.group = 0;
  }

  setData(res) {
    this.data = res;
  }

  async getWordsData(page, group) {
    this.page = page || this.page;
    this.group = group || this.group;
    fetchData([URL.getWords(this.page, this.group)])
      .then((res) => this.setData(res));
  }
}

export default User;
