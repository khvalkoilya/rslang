const BASE_PATH = 'https://afternoon-falls-25894.herokuapp.com';
const WORDS = '/words';
const USERS = '/users';
const SIGNIN = '/signin';
const STATISTIC = '/statistic';
const SETTING = '/setting';
const SEARCH_PARAM_PAGE = 'page=';
const SEARCH_PARAM_GROUP = 'group=';

const URL = {
  words: {
    fn: (page, group) => fetch(`${BASE_PATH}${WORDS}?${SEARCH_PARAM_PAGE}${page}&${SEARCH_PARAM_GROUP}${group}`),
  },
};

export default URL;
