import * as moviesActionTypes from '../actionTypes/moviesActionTypes';
import axios from 'axios';

const API_KEY = '5b60634c88e3a63ddc13d2adf9161ea0';

const getAllMovies = (action) => {
    return {
        type: moviesActionTypes.GET_ALL_MOVIES,
        payload: action
    }
};

const getAllMoviesError = (action) => {
    return {
        type: moviesActionTypes.GET_ALL_MOVIES_ERROR,
        payload: action
    }
};

export const startGetAllMovies = () => {
    return async (dispatch) => {
        try {
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            const { data } = await axios.get(url);
            dispatch(getAllMovies(data.results));
        } catch (error) {
            if (error.response) {
                dispatch(getAllMoviesError(error.response.data.error));
            } else {
                dispatch(getAllMoviesError(error));
            }
        }
    }
};