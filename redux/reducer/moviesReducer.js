import * as moviesActionTypes from '../actionTypes/moviesActionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    movies: []
};

const movieReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case moviesActionTypes.GET_ALL_MOVIES:
            return {
                loading: false,
                error: false,
                errorMessage: '',
                movies: action.payload
            };

        case moviesActionTypes.GET_ALL_MOVIES_ERROR:
            return {
                loading: false,
                error: true,
                errorMessage: action.payload,
                movies: []
            }

        default:
            return state;
    }
};

export default movieReducer;
