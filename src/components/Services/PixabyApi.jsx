import axios from 'axios';

export const fetchPhotos = async (querry, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '30379658-c35fb17314acd2b2cacdcf3a4',
      q: querry,
      page: page,
      safesearch: true,
    },
  };

  return await axios.get(`${BASE_URL}`, options);
};
