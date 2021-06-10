const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const setSessionToLocalStorage = (logged: string) => {
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
