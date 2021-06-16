import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";

import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";

const MovieDetails = (props) => {
    const { movieDetail } = props;

    const movieGenre = () => {
        if (movieDetail.title) {
            return (
                <Fragment>
                    {
                        movieDetail.genres.map((genre) => {
                            return (
                                <span key={genre.id}>{genre.name} | </span>
                            )
                        })
                    }
                </Fragment>
            )
        }

    }

    const movieDetails = () => {
        if (movieDetail.title) {
            return (
                <Fragment>
                    <div className="row">
                        <div className="col-md-3">
                            <Image
                                width={350}
                                height={500}
                                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                                alt={movieDetail.overview}
                            />
                        </div>

                        <div className="col-md-6">
                            <h1 className="fw-bold">
                                {movieDetail.title}
                                <span>({movieDetail.release_date.substring(0, 4)})</span>
                            </h1>
                            <p><small>{movieGenre()}</small></p>
                            <hr/>
                            <div className="lead fw-bold">{movieDetail.overview}</div>
                            <hr/>
                            <div className="fw-bold">Runtime: {movieDetail.runtime} mins.</div>
                            <hr/>
                            <div className="fw-bold">Release Date: {movieDetail.release_date}</div>
                            <hr/>

                            <div className="fw-bold">Average Rating: {movieDetail.vote_average}</div>
                            <hr/>

                            {
                                movieDetail.homepage ?
                                    (<div className="fw-bold mb-2">Website: <Link href={movieDetail.homepage}>{movieDetail.homepage}</Link>
                                    </div>) : null
                            }

                        </div>

                        <div className="col-md-3">
                            <Link href={'/'}>
                                <button className="btn btn-secondary">ADD COMMENT</button>
                            </Link>
                        </div>
                    </div>

                </Fragment>
            )
        }

    }

    return (
        <Fragment>
            <Head>
                <title>{movieDetail.title}</title>
            </Head>

            {
                movieDetail.title ? <div className="container">{movieDetails()}</div> : null
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        movieDetail: state.movieDetails.movieDetail
    }
}

export default connect(mapStateToProps)(MovieDetails);
