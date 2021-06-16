import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Head from "next/head";
import { startGetAllMovies } from "../redux/action";

import { wrapper } from "../redux/store";
import { store } from "next/dist/build/output/store";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
      <Fragment>
          <Head>
              <title>movieNerds</title>
          </Head>
        <MovieList />
      </Fragment>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async () => {
    await store.dispatch(startGetAllMovies());
});

