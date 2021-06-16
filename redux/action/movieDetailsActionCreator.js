import * as moviesActionTypes from '../actionTypes/moviesActionTypes';
import axios from "axios";

const API_KEY = '5b60634c88e3a63ddc13d2adf9161ea0';

const getMovieDetails = (action) => {
    return {
        type: moviesActionTypes.GET_MOVIE_DETAILS,
        payload: action
    }
};

const getMovieDetailsError = (action) => {
    return {
        type: moviesActionTypes.GET_MOVIE_DETAILS_ERROR,
        payload: action
    }
};

export const startGetMovieDetails = (id) => {
    return async (dispatch) =>{
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
            const { data } = await axios.get(url);
            dispatch(getMovieDetails(data))

        } catch (error) {
            if (error.response) {
                dispatch(getMovieDetailsError(error.response.data.error));
            } else {
                dispatch(getMovieDetailsError(error))
            }
        }
    }
};