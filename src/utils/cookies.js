const win = typeof window === 'undefined' ? 'undefined' : window;
let doc;

if (win === 'undefined') {
  doc = 'undefined';
} else {
  doc = typeof win.document === 'undefined' ? 'undefined' : win.document;
}

export function createCookie(name, value, days) {
  if (doc === 'undefined') {
    return;
  }
  let expires;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  else expires = '';
  doc.cookie = name + '=' + value + expires + '; path=/';
}

export function readCookie(name) {
  if (doc === 'undefined') {
    return null;
  }
  const nameEQ = name + '=';
  const cookies = doc.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
  }
  return null;
}

export function eraseCookie(name) {
  createCookie(name, '', -1);
}
