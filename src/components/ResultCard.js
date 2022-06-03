import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
// import MovieSummary from './MovieSummary';

const ResultCard = ({ movie }) => {

    // consuming context
    const { watchlist, addMovieToWatchList, watched, removeMovieFromWatchList, addMovieToWatchedList, removeMovieFromWatchedList } = useContext(GlobalContext);
    // console.log(watchlist);
    // console.log(watched);

    // checking that the movie selected is not already present in the watchlist array
    let storedMovieInWatchlist = watchlist.find((obj) => obj.id === movie.id);  // if movie present then will return the object(movie object), otherwise null (means new movie)
    let alreadyInWatchlist = storedMovieInWatchlist ? true : false; // if there's something in storedMovie then it's true otherwise false

    let storedMovieInWatched = watched.find((obj) => obj.id === movie.id);  // if movie present then will return the object(movie object), otherwise null (means new movie)
    let alreadyInWatched = storedMovieInWatched ? true : false; // if there's something in storedMovie then it's true otherwise false

    // let onClickCheck = false;
    // const redirectToMovie = (movie) => {
    //     console.log("ss");
    //     onClickCheck = !onClickCheck;
    //     console.log("after clicked: " + onClickCheck);
    // }

    // console.log(movie)

    return (
        <div className="result-card">

            {/* {onClickCheck ? <MovieSummary movie={movie} /> : null } */}
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                <div className="poster-wrapper">
                    {movie.poster_path ?
                        (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        )
                        :
                        (
                            <div className="filler-poster"></div>
                        )
                    }
                </div>
            </Link>

            <div className="info">
                <div className="header">
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                        <h3 className="title">{movie.title}</h3>
                    </Link>
                    <div className="heading-options">
                        <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</h4>

                    </div>
                </div>

                <div className="controls">

                    {/* first checking if the given movie is present in the "watched" array or not, if yes then render "✔️watched", 
                otherwise if it's availaible in the "watchlist" array or not, if yes, render "remove from watchlist" else render "add to watchlist" and "⭐Add to watched" */}
                    {/* {alreadyInWatched ? 
                    (
                        <button className="btn"
                            onClick={() => removeMovieFromWatchedList(movie.id)}
                        >
                            <i className="fas fa-check-double" title='Watched'></i>
                        </button>
                    )
                    :
                    (
                        alreadyInWatchlist ? 
                        (
                            <button className="btn"
                                // disabled={watchlistDisabled}
                                onClick={() => removeMovieFromWatchList(movie.id)}
                            >
                                <i className="fas fa-plus" style={{color: "red"}} title='Remove From Watchlist'></i>
                            </button>
                        )
                        :
                        (
                            <>
                                <button className="btn"
                                    onClick={() => addMovieToWatchList(movie)}
                                >
                                    <i className="fas fa-plus" title='Add To Watchlist'></i>
                                </button>
                                <button className="btn"
                                    onClick={() => addMovieToWatchedList(movie)}
                                >
                                    <i className="fas fa-check" title='Add To Watched'></i>
                                </button>
                            </>
                        )
                    )
                } */}

                    {alreadyInWatched ?
                        (
                            <>
                                <button className="btn"
                                    onClick={() => addMovieToWatchList(movie)}
                                >
                                    <i className="far fa-star" title='Add To Watchlist'></i>
                                </button>

                                <button className="btn"
                                    onClick={() => removeMovieFromWatchedList(movie.id)}
                                >
                                    <i className="far fa-eye-slash" style={{ color: "red" }} title='Watched'></i>
                                </button>
                            </>
                        )
                        :
                        (
                            alreadyInWatchlist ?
                                (
                                    <>
                                        <button className="btn"
                                            // disabled={watchlistDisabled}
                                            onClick={() => removeMovieFromWatchList(movie.id)}
                                        >
                                            <i className="fas fa-star" style={{ color: "gold" }} title='Add To Watchlist'></i>
                                        </button>

                                        <button className="btn"
                                            onClick={() => addMovieToWatchedList(movie)}
                                        >
                                            <i className="fas fa-eye" title='Add To Watched'></i>
                                        </button>

                                    </>
                                )
                                :
                                (
                                    <>
                                        <button className="btn"
                                            onClick={() => addMovieToWatchList(movie)}
                                        >
                                            <i class="far fa-star" ></i>
                                        </button>


                                        <button className="btn"
                                            onClick={() => addMovieToWatchedList(movie)}
                                        >
                                            <i className="fas fa-eye" title='Add To Watched'></i>
                                        </button>


                                    </>
                                )
                        )
                    }

                </div>
            </div>
        </div>



    )
}

export default ResultCard
