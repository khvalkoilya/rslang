import URL from '../variables/UrlApi';

const data = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export class User {
  setData(res) {
    this.data = res;
  }

  async getWordsData(page, group) {
    this.page = page || 0;
    this.group = group || 0;
    data([URL.getWords(this.page, this.group)])
      .then((res) => this.setData(res));
  }
}

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
