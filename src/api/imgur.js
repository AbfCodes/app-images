import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '615c76b9a64c721';
const ROOT_URL = 'https://api.imgur.com';
// 8422dc97742fd588b6057969abbaa0f82cb2aeb1

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
