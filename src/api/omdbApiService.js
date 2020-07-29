import axios from 'axios';

const API_BASE_URL = 'http://www.omdbapi.com';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const fetchApi = async ({ url, method = 'GET', reqData = {} }) => {
  try {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY || null;
    if (apiKey) {
      const options = { url, method };
      options.params = { ...reqData, apiKey };
      try {
        const { data, status } = await axios.request(options);
        const parsedResponse = data.Response
          ? JSON.parse(data.Response.toLowerCase())
          : false;

        data.Response = parsedResponse;
        data.Status = parsedResponse ? status : 400;

        return data;
      } catch (err) {
        console.error('API request failed', err.message);
      }
    } else {
      throw new Error(
        'No OMDb API key specified in .env file under REACT_APP_OMDB_API_KEY key.'
      );
    }
  } catch (err) {
    console.error('Something went wrong', err);
  }
};

export const fetchSearchMovies = async ({
  query,
  type = 'movie',
  page = 1,
}) => {
  try {
    const { Search, Response, Status, totalResults, Error } = await fetchApi({
      url: `/?s=${query}*&t=${type}&page=${page}`,
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
      url: `/?i=${id}`,
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
