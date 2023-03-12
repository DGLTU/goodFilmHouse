import axios from 'axios';

const baseURL = 'https://goodfilmhousedb.onrender.com';

export const logIn = async (data) => {
  const config = {
    baseURL,
    url: '/login',
    method: 'post',
    data,
  };
  const res = await axios(config);
  document.cookie = `token=${res.data.accessToken}`;
  document.cookie = `id=${res.data.user.id}`;
  document.cookie = `role=${res.data.user.role}`;
  return res;
};
export const signUp = async (data) => {
  const config = {
    baseURL,
    url: '/signup',
    method: 'post',
    data,
  };
  const res = await axios(config);
  document.cookie = `token=${res.data.accessToken}`;
  document.cookie = `id=${res.data.user.id}`;
  document.cookie = `role=${res.data.user.role}`;
  return res;
};
export const getMovies = async (arg = 'default') => {
  let filter = '';
  if (arg === 'default') {
    filter = '';
  } else if (arg === 'today') {
    filter = '?_embed=showtimeList';
  } else {
    filter = `?id=${arg}`;
  }
  const config = {
    baseURL,
    method: 'get',
    url: `/movies${filter}`,
  };
  const res = await axios(config);
  return res;
};
export const getShowTimeList = async (arg = 'default') => {
  let filter = '';
  if (arg === 'default') {
    filter = '';
  } else if (arg === 'today') {
    filter = '?date=today';
  } else {
    filter = `?id=${arg}`;
  }
  const config = {
    baseURL,
    method: 'get',
    url: `/showtimeList${filter}`,
  };
  const res = await axios(config);
  return res;
};
export const getOrder = async (id) => {
  const config = {
    baseURL,
    method: 'get',
    url: `/order?orderNumber=${id}`,
  };
  const res = await axios(config);
  return res;
};

export const postOrder = async (data) => {
  const config = {
    baseURL,
    method: 'post',
    data,
    url: '/order',
  };
  const res = await axios(config);
  return res;
};
export const getArticles = async (id = 'default') => {
  const filter = (id === 'default') ? '' : id;
  const config = {
    baseURL,
    url: `/articles/${filter}`,
    method: 'get',
  };
  const res = await axios(config);
  return res;
};
