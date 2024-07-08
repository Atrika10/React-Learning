const API_ACCESS_TOKEN = import.meta.env.API_ACCESS_TOKEN;


export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
export const MAIN_BACKGROUND = "https://techovedas.com/wp-content/uploads/2024/04/netflix-octobre-contenus-2022.jpg";
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/96716134?v=4";
export const  API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_ACCESS_TOKEN}`
  }
};