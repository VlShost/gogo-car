import axios from 'axios';

axios.defaults.baseURL = 'https://650564b4ef808d3c66effc0d.mockapi.io';

export const getAdverts = async () => {
  try {
    const res = await axios.get('/adverts');
    return res.data;
  } catch (e) {
    return console.log(e.message);
  }
};
