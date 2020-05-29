import API from "./endpoints";

const searchForProfiles = async searchQuery => {
  const url = API.SEARCH_USERS(searchQuery);

  return fetch(url);
};

const getUserProfile = async username => {
  const url = API.USER_PROFILE(username);

  return fetch(url);
};

const getUserRepos = async username => {
  const url = API.USER_REPOS(username);

  return fetch(url);
};

export default {
  searchForProfiles,
  getUserProfile,
  getUserRepos,
};
