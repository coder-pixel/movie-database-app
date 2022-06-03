import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const RecommendationCardWatchlist = ({ movie }) => {
    const { watchlist, watched, addMovieToWatchList, removeMovieFromWatchList, removeMovieFromWatchedList } = useContext(GlobalContext);

    let storedMovieInWatchlist = watchlist.find((obj) => obj.id === movie.id);  // if movie present then will return the object(movie object), otherwise null (means new movie)
    let alreadyInWatchlist = storedMovieInWatchlist ? true : false;
    
    let storedMovieInWatched = watched.find((obj) => obj.id === movie.id);  // if movie present then will return the object(movie object), otherwise null (means new movie)
    let alreadyInWatched = storedMovieInWatched ? true : false;
    
    return (
            <span className='recommendationCard-watchlist'>
                {alreadyInWatchlist ?
                    (
                        <button className="btn"
                            // disabled={watchlistDisabled}
                            onClick={() => {
                                // setMovieId(movie.id)
                                removeMovieFromWatchList(movie.id)
                            }}
                        >
                            <i className="fas fa-star" style={{ color: "#fff" }} title='In Watchlist'></i>
                        </button>
                    )
                    :
                    (   
                        alreadyInWatched ? 
                        (
                            <button className="btn"
                                onClick={() => {
                                    // setMovieId(movie.id)
                                    removeMovieFromWatchedList(movie.id)
                                }}
                            >
                                <i class="fas fa-check" style={{ color: "#fff" }} title='Watched'></i>
                            </button>
                        )
                        :
                        (
                            <button className="btn"
                                onClick={() => {
                                    // setMovieId(movie.id)
                                    addMovieToWatchList(movie)
                                }}
                            >
                                <i class="far fa-star" style={{ color: "#fff" }} title='Add To Watchlist'></i>
                            </button>
                        )
                    )
                }
            </span>
    )
}

export default RecommendationCardWatchlist
