/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBase64 = (img: any, callback: any): void => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const setSessionToLocalStorage = (logged: string): void => {
  const { localStorage } = window;

  localStorage.setItem("isLogged", logged);
};

const getSessionFromLocalStorage = (): string | null => {
  const { localStorage } = window;

  return localStorage.getItem("isLogged");
};
export {
  getBase64 as default,
  setSessionToLocalStorage,
  getSessionFromLocalStorage,
};
