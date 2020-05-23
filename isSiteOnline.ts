export function isSiteOnline(url: string, callback: (online: boolean) => void) {
  const qualifiedUrl = qualifyUrl(url);
  const origin = getOrigin(qualifiedUrl);
  checkSiteStatus(origin, callback);
}

function checkSiteStatus(url: string, callback: (online: boolean) => void) {
  const timer = setTimeout(function(){
      // timeout after 5 seconds
      callback(false);
  },5000)

  const img = document.createElement("img");
  img.onload = function() {
      clearTimeout(timer);
      callback(true);
  }

  img.onerror = function() {
      clearTimeout(timer);
      callback(false);
  }

  img.src = url+"/favicon.ico";
}

function qualifyUrl(url: string) {
  return !url.includes('http')
    ? 'http://' + url
    : url;
}

function getOrigin(url: string) {
  const urlObj = new URL(url);
  return urlObj.origin;
}

export function isValidUrl(url: string) {
  try {
    const qualify = qualifyUrl(url);
    new URL(qualify)

    return true;
  } catch {
    return false;
  }
}