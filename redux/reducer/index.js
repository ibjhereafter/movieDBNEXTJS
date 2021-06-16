import { combineReducers } from "redux";

import movieReducer from "./moviesReducer";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer
});

export default rootReducer;