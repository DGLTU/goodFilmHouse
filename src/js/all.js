export const numberComma = (num) => {
  const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(comma, ',');
};
export const getOrderNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100000);
  const timestamp = new Date().getTime();
  return `${randomNumber}${timestamp}`;
};
export const getToday = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = (date.getMonth() !== 12) ? date.getMonth() + 1 : date.getMonth();
  const d = date.getDate();
  return `${y}/${m}/${d}`;
};
// eslint-disable-next-line consistent-return
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
export const cleanCookie = () => {
  const cookies = document.cookie.split('; ');
  cookies.forEach((cookie) => {
    const [name] = cookie.split('=');
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/goodFilmHouse;`;
  });
};
