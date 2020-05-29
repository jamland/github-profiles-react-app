const BASE_URL = "https://api.github.com";
const API = {
  SEARCH_USERS: query => `${BASE_URL}/search/users?q=${query}`,
  USER_PROFILE: username => `${BASE_URL}/users/${username}`,
  USER_REPOS: username => `${BASE_URL}/users/${username}/repos`,
};

export default API;
