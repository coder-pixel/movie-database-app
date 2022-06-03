import React, { useState, useEffect } from 'react'
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState("");  // for input value 
    const [results, setResults] = useState([]);  // for storing results from api

    // api fetching
    function getMovie(str){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&query=${str}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
    }


    const onInpValChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        // console.log(query);
        sessionStorage.setItem("userQuery", query);

        // calling api fetching function
        getMovie(e.target.value);
    }

    // retreiving the query on page/component load
    useEffect(() => {
        // console.log("loaded");
        const uQuery = sessionStorage.getItem("userQuery");
        console.log(uQuery);
        setQuery(uQuery);
        getMovie(uQuery);  // on page load/reload  --  calling the func after retreiving the query data to get movie results
    }, [])


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" autoFocus
                            value={query}
                            onChange={onInpValChange}
                        />
                        {/* <div className="btn" onClick={() => getMovie(query)}>Search</div> */}
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.id}><ResultCard movie={movie} /></li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add
