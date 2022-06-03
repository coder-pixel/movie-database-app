import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'

import { Link } from "react-router-dom";

const Watched = () => {
    const { watched } = useContext(GlobalContext)
    return (
        <>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">Watched Movies</h1>
                    
                        <div className="count-pill">
                            {watched.length}Movies
                        </div>
                    </div>

                    {watched.length > 0 ?
                        (
                            <div className="movie-grid">
                                {watched.map((watchedMovie) => (
                                    <MovieCard key={watchedMovie.id} movie={watchedMovie} type="watched" />
                                ))}
                            </div>
                        )
                        :
                        (
                            <>
                                <h2 className="no-movies">No movies in your list, add some!</h2>
                                <button className="btn"><Link to="/">Watchlist</Link></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Watched
