import axios from 'axios';
import { API } from '../constants';

axios.defaults.baseURL = API.baseUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const fetchApi = async ({ url, method = 'GET', params = {} }) => {
  try {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY || null;

    if (apiKey) {
      const options = { url, method };
      options.params = { ...params, apiKey };

      try {
        const { data, status } = await axios.request(options);
        const parsedResponse = data.Response
          ? JSON.parse(data.Response.toLowerCase())
          : false;

        data.Response = parsedResponse;
        data.Status = parsedResponse ? status : 400;

        return data;
      } catch (err) {
        throw new Error(`API request failed: ${err.messagee}`);
      }
    } else {
      throw new Error(
        'No OMDb API key specified in .env file under REACT_APP_OMDB_API_KEY key.'
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const fetchSearchMovies = async ({
  query,
  type = 'movie',
  page = 1,
}) => {
  try {
    const { Search, Response, Status, totalResults, Error } = await fetchApi({
      url: `/`,
      params: {
        s: `${query}*`,
        t: type,
        page: page,
      },
    });
    const hasNextPage =
      totalResults && parseInt(totalResults) > Search.length * page
        ? true
        : false;

    if (Response) {
      return {
        status: Status,
        data: [...Search],
        nextPage: hasNextPage ? page + 1 : null,
        prevPage: page !== 1 ? page - 1 : null,
      };
    } else {
      return { status: Status, data: [], error: Error };
    }
  } catch (err) {
    console.log('Request for searchMovies has failed.', err.message);
  }
};

export const fetchMovieById = async ({ id }) => {
  try {
    const { Response, Status, Error, ...data } = await fetchApi({
      url: `/`,
      params: {
        i: id,
      },
    });

    if (Response) {
      return {
        status: Status,
        data: data,
      };
    } else {
      return { status: Status, data: [], error: Error };
    }
  } catch (err) {
    console.log('Request for searchMovies has failed.', err.message);
  }
};
