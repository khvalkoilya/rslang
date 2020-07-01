import URL from './urlApi';
import { fetchData } from './utilsApi';

class User {
  constructor(email, password) {
    this.page = 0;
    this.group = 0;
    this.user = {
      email,
      password,
    };
  }

  setData(res) {
    this.data = res;
  }

  getWordsData(page = this.page, group = this.group) {
    this.page = page;
    this.group = group;
    fetchData([URL.getWords(this.page, this.group)])
      .then((res) => this.setData(res));
  }

  setUser(res) {
    this.idUser = res.userId;
    this.tokenUser = res.token;
  }

  async createUser() {
    await fetchData([URL.userApi.createUser, URL.userApi.headerUser(this.user)]);
    const res = await fetchData([URL.userApi.loginUser, URL.userApi.headerUser(this.user)]);
    this.setUser(res);
  }

  loginUser() {
    fetchData([URL.userApi.loginUser, URL.userApi.headerUser(this.user)])
      .then((res) => this.setUser(res));
  }
}

export default User;
