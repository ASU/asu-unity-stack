export function getQueryParameter(param = "") {
  const href = decodeURI(window.location.href);
  if (href.includes("?")) {
    if (href.split('?').length > 1) {
      let tempArr = href.split('?')[1].split('&');
      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].includes(`${param}=`)) {
          if (tempArr[i].split(`${param}=`).length > 1){
            return tempArr[i].split(`${param}=`)[1];
          }
        }
      }
    }
  }
  return ""
}

export function getHrefArgParameter(param = "") {
  let tempArr = getQueryParameter("args").split(";");
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].includes(`${param}:`)) {
      if (tempArr[i].split(`${param}:`).length > 1){
        return tempArr[i].split(`${param}:`)[1];
      }
    }
  }
}

export function getHrefGlobalParameter(param = "") {
  let tempArr = getQueryParameter("globals").split(";");
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].includes(`${param}:`)) {
      if (tempArr[i].split(`${param}:`).length > 1){
        return tempArr[i].split(`${param}:`)[1];
      }
    }
  }
}

// Usage examples:

// Get the background color value from the args= and bgColor:
// getHrefArgParameter("bgColor");

// Get the background value from globals= and backgrounds.value:
// getHrefGlobalParameter("backgrounds.value");
