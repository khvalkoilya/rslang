import URL from '../variables/UrlApi';

const data = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export class User {
  constructor(page, group) {
    this.page = page || 0;
    this.group = group || 0;
  }

  setData(res) {
    this.data = res;
  }

  async getWordsData() {
    data([URL.getWords(this.page, this.group)])
      .then((res) => this.setData(res));
  }
}

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
