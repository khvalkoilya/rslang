import URL from './urlApi';
import { fetchData } from './utillsApi';

class User {
  setData(res) {
    this.data = res;
  }

  async getWordsData(page, group) {
    this.page = page || 0;
    this.group = group || 0;
    fetchData([URL.getWords(this.page, this.group)])
      .then((res) => this.setData(res));
  }
}

export default User;
