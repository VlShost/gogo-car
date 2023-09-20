import axios from 'axios';

axios.defaults.baseURL = 'https://650564b4ef808d3c66effc0d.mockapi.io';

export const getAdverts = async page => {
  try {
    const path = `/adverts?completed=false&page=${page}&limit=8`;
    const res = await axios.get(path);
    return res.data;
  } catch (e) {
    return console.log(e.message);
  }
};
