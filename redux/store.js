import { applyMiddleware, createStore } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import rootReducer from './reducer/index';
import thunk from "redux-thunk";

//######################################################################

const bindMiddleWare = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
};

//######################################################################


const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    } else {
        return rootReducer(state, action)
    }
};

//######################################################################

const initStore = () => {
    return createStore(reducer, bindMiddleWare([thunk]));
};

//######################################################################

export const wrapper = createWrapper(initStore);