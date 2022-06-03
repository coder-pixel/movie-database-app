import React, { useContext } from 'react'
import { Link } from "react-router-dom"; 
import RecommendationCardWatchlist from './RecommendationCardWatchlist';

const CardInfoUI = ({ movie }) => {
   
    return (
            <div className="recommendedMovieArrayWrapper">
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                    <div className='recommendationCard'>
                        {/* <RecommendationCardWatchlist movieId={movieId}/> */}

                        <div className="recommendationCard-image">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        </div>
                        <div className="recommendationCard-info">
                            <h2>{movie.title}<span>({movie.media_type})</span></h2>
                            <p>{movie.vote_average} <span><i class="fas fa-user"></i> {movie.vote_count}</span></p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </Link>

                <RecommendationCardWatchlist movie={movie} />
                {/* <span className='recommendationCard-watchlist'>
                    {alreadyInWatchlist ?
                        (
                            <button className="btn-rec"
                                // disabled={watchlistDisabled}
                                onClick={() => {
                                    setMovieId(movie.id)
                                    removeMovieFromWatchList(movie.id)
                                }}
                            >
                                <i className="fas fa-star" style={{ color: "#fff" }} title='Add To Watchlist'></i>
                            </button>
                        )
                        :
                        (
                            <button className="btn-rec"
                                onClick={() => {
                                    setMovieId(movie.id);
                                    addMovieToWatchList(movie);
                                }}
                            >
                                <i class="far fa-star" style={{ color: "#fff" }}></i>
                            </button>
                        )
                    }
                </span> */}
            </div>        
        )
}


export default CardInfoUI
