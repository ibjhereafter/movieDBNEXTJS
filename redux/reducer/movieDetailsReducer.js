import * as moviesActionTypes from '../actionTypes/moviesActionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    movieDetail: {}
};

const movieDetailsReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case moviesActionTypes.GET_MOVIE_DETAILS:
            return {
                loading: false,
                error: false,
                errorMessage: '',
                movieDetail: action.payload
            };

        case moviesActionTypes.GET_MOVIE_DETAILS_ERROR:
            return {
                loading: false,
                error: true,
                errorMessage: action.payload,
                movieDetail: {}
            }
        default:
            return state;
    }
};

export default movieDetailsReducer;