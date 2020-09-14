import { CONSTANTS } from "../Utilities/CONSTANTS";

//Appends query params to API url based upon filer selection
export function modifyURL(filterObj) {
  let updatedUrl = CONSTANTS.BASE_URL;
  if (filterObj) {
    for (let key in filterObj) {
      if (key && filterObj[key]) {
        updatedUrl += `&${key}=${filterObj[key]}`;
      }
    }
  }
  return updatedUrl;
}

//Appends query params to page url based upon filer selection
export function setUpdatedQueryUrl(paramData) {
  let queryString = "";
  for (let key in paramData) {
    if (paramData[key] !== "") {
      queryString += `?${key}=${paramData[key]}`;
    }
  }
  return queryString;
}

//Fetces current query paramets from browser url
export function getParams(url) {
  const params = {};
  const parser = document.createElement("a");
  parser.href = url;
  const query = parser.search.substring(1);
  const vars = query.length ? query.split("?") : [];
  if (vars.length) {
    for (let i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  }
}

//Sets url cretaed from setUpdatedQueryUrl in browser
export function setUpdatedQueryUrlInBrowser(paramData) {
  var newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    setUpdatedQueryUrl(paramData);
  window.history.pushState({ path: newurl }, "", newurl);
}

//Makes selected btn active/inactive
export function setActiveStyles(activeBtn, parent) {
  activeBtn.classList.contains("active")
    ? activeBtn.classList.remove("active")
    : activeBtn.classList.add("active");
  for (let i = 0; i < parent.childNodes.length; i++) {
    if (
      parent.childNodes[i].nodeName.toLowerCase() === "button" &&
      parent.childNodes[i].innerText !== activeBtn.innerText
    ) {
      parent.childNodes[i].classList.remove("active");
    }
  }
};
