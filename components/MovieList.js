import styles from '../styles/MovieList.module.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";

import Link from "next/link";

const MovieList = (props) => {
    const { movies } = props;

    const movieList = movies.map((movie) => {
        return (
            <Fragment key={movie.id}>
                <div className="col-sm-12 col-md-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <Link href={`/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.overview} className={`${styles.cursorPointer} card-img-bottom`}/>
                            </Link>
                            <Link href={`/${movie.id}`}>
                                <h5 className={`${styles.cursorPointer} card-title`}>{movie.title}</h5>
                            </Link>
                            <div>{movie.release_date}</div>
                            <div>{movie.vote_average}</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    });

    return (
        <Fragment>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5">{movieList}</div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps)(MovieList);
