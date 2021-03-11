const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.spacexdata.com/v4/";
const launches_search_get = "launches/";
const rocket_search_get = "rockets/";
const landpad_search_get = "landpads/";

export const launchesSearchGet = (launchesId = '') =>
  `${base_url}${launches_search_get}${launchesId}`;
export const rocketSearchGet = (rocketId) =>
  `${cors_anywhere}${base_url}${rocket_search_get}${rocketId}`;
export const landpadSearchGet = (landpadId) =>
  `${cors_anywhere}${base_url}${landpad_search_get}${landpadId}`;
