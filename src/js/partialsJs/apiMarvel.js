import axios from 'axios';
import getHash from '../helpers/getHash';

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = 'efe513042744199e2ee71f94d9988717';
const PRIVATE_KEY = '5488535f3958164a14b37ef40df2b28b6e569641';
const timeStamp = 1;

const axiosInst = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: PUBLIC_KEY,
    hash: getHash({ timeStamp, PRIVATE_KEY, PUBLIC_KEY }),
    ts: timeStamp,
  },
});

export const api = {
  getCharacters: async ({
    limit = 60,
    offset = 0,
    nameStartsWith = '',
    comics = '',
    orderBy = '',
    modifiedSince = '',
  }) => {
    try {
      const response = await axiosInst.get('/characters', {
        params: {
          ...(limit && { limit }),
          ...(offset && { offset }),
          ...(nameStartsWith && { nameStartsWith }),
          ...(comics && { comics }),
          ...(orderBy && { orderBy }),
          ...(modifiedSince && { modifiedSince }),
        },
      });
      const data = response.data.data;

      return data;
    } catch (error) {
      return { error: error.message };
    }
  },

  getComics: async ({
    limit = 20,
    offset = 0,
    startYear = 0,
    format = '',
    title = '',
    titleStartsWith = '',
    orderBy = '',
    dateDescriptor = '',
  }) => {
    try {
      const response = await axiosInst.get('/comics', {
        params: {
          ...(limit && { limit }),
          ...(offset && { offset }),
          ...(startYear && { startYear }),
          ...(titleStartsWith && { titleStartsWith }),
          ...(format && { format }),
          ...(title && { title }),
          ...(orderBy && { orderBy }),
          ...(dateDescriptor && { dateDescriptor }),
        },
      });
      const data = response.data.data;
      return data;
    } catch (error) {
      return { error: error.message };
    }
  },

  getCharactersById: async ({ characterId }) => {
    try {
      const response = await axiosInst.get(`/characters/${characterId}`);
      const data = response.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
  getComicById: async ({ comicId }) => {
    try {
      const response = await axiosInst.get(`/comics/${comicId}`);
      const data = response.data.data.results;
      return data;
    } catch (error) {
      return { error: error.message };
    }
  },

  getSeriesById: async ({ seriesId }) => {
    try {
      const res = await axiosInst.get(`/series/${seriesId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      return { error: error.message };
    }
  },

  getCreatorsById: async ({ creatorId }) => {
    try {
      const res = await axiosInst.get(`/creators/${creatorId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      return { error: error.message };
    }
  },
};
