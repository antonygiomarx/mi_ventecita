const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const setSessionToLocalStorage = (logged) => {
  const { localStorage } = window;

  localStorage.setItem("isLogged", logged);
};

const getSessionFromLocalStorage = () => {
  const { localStorage } = window;

  return localStorage.getItem("isLogged");
};
export {
  getBase64 as default,
  setSessionToLocalStorage,
  getSessionFromLocalStorage,
};
