import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { startGetAllMovies } from "../redux/action";

import { wrapper } from "../redux/store";
import { store } from "next/dist/build/output/store";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
      <Fragment>
        <MovieList />
      </Fragment>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async () => {
    await store.dispatch(startGetAllMovies());
});

