import React, { Fragment, useEffect } from 'react';
import { wrapper } from "../redux/store";

import { startGetMovieDetails } from "../redux/action";
import MovieDetails from "../components/MovieDetails";



const SingleMovieDetail = () => {
    return (
        <Fragment>
            <MovieDetails />
        </Fragment>
    );
};

export default SingleMovieDetail;

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async ({ params }) => {
    await store.dispatch(startGetMovieDetails(params.id));
});
