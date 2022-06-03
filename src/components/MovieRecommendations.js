import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";

import CardInfoUI from './CardInfoUI';
import RecommendationCardWatchlist from './RecommendationCardWatchlist';

const MovieRecommendations = ({ movieId }) => {
    // const [itmId, setItmId] = useState();

    const [recommendedMovieArray, setRecommendedMovieArray] = useState([]);
    const [recommendedMovie, setRecommendedMovie] = useState([]);

    const getRecommendations = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
            .then((res) => res.json())
            .then((data) => {
                setRecommendedMovieArray(data.results);
                data.results.map((mov) => {
                    setRecommendedMovie(mov);
                })
                // setRecommendedMovie(data);
            })
            .catch((err) => console.log(err))

        // to auto scroll the page to top on new movie page load
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour in place of 'smooth' */
        });
    }

    useEffect(() => {
        getRecommendations(movieId);
    }, [movieId])

    console.log(recommendedMovieArray)
    // console.log(recommendedMovie)

    return (

        <>
            {/* <h1>d</h1> */}
            {recommendedMovieArray ?
                (
                    recommendedMovieArray.map((mov) => {
                        return <CardInfoUI movie={mov} />
                    })
                )
                :
                (
                    null
                )
            }
        </>
    )
}

export default MovieRecommendations