import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending  = async configParams => {
    const { data } = await axios.get('trending/all/day', {
        params: {
            api_key: '342c44e6506dd01a98601164ba137553',
            ...configParams,
        }
    });
    return data.results;
}

export const fetchMovieDetails  = async (movie_id) => {
    const { data } = await axios.get(`movie/${movie_id}`, {
        params: {
            api_key: '342c44e6506dd01a98601164ba137553',
        }
    });
    return data;
}

export const fetchMovieCredits  = async (movie_id) => {
    const { data } = await axios.get(`movie/${movie_id}/credits`, {
        params: {
            api_key: '342c44e6506dd01a98601164ba137553',
        }
    });
    return data.cast;
}

export const fetchMovieReviews  = async (movie_id) => {
    const { data } = await axios.get(`movie/${movie_id}/reviews`, {
        params: {
            api_key: '342c44e6506dd01a98601164ba137553',
        }
    });
    return data.results;
}

export const fetchMovieSearch  = async (query) => {
    const { data } = await axios.get(`search/movie`, {
        params: {
            api_key: '342c44e6506dd01a98601164ba137553',
            query, 
        }
    });
    return data.results;
}