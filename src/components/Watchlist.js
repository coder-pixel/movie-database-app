import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

import { Link } from "react-router-dom";

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">My Watchlist</h1>

                        <div className="count-pill">
                            {watchlist.length}Movies
                        </div>
                    </div>

                    {watchlist.length > 0 ?
                        (
                            <div className="movie-grid">
                                {watchlist.map((watchlistMovie) => (
                                    <MovieCard key={watchlistMovie.id} movie={watchlistMovie} type="watchlist" />
                                ))}
                            </div>
                        )
                        :
                        (
                            <>
                                <h2 className="no-movies">No movies in your list, add some!</h2>
                                <button className="btn"><Link to="/add">Add</Link></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Watchlist
