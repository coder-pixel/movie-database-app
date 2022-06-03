import React, { useEffect, useState } from 'react'
import CardInfoUI from './CardInfoUI';

const Trending = () => {
    const [showTrendingMovie, setShowTrendingMovie] = useState(true);
    const [showWeek, setShowWeek] = useState(true);

    const [trendingList, setTrendingList] = useState([]);

    const getTrendingMovies = () => {
        fetch(`https://api.themoviedb.org/3/trending/${showTrendingMovie ? "movie" : "tv"}/${showWeek ? "week" : "day"}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                // console.log(res.results.slice(0,10));
                setTrendingList(res.results.slice(0, 10))
                console.log(trendingList);
            })
            .catch((err) => console.log(err))
    }

    // useEffect(()=> {
    //     getTrendingMovies();
    // }, [])
    useEffect(() => {
        getTrendingMovies();
    }, [showTrendingMovie, showWeek])

    return (
        <div className='trending-wrapper'>
            <h1>{showWeek ? "This Week's" : "Today' s"} Top 10 Trending {showTrendingMovie ? "Movies" : "Shows"}</h1>

            <div className="trending-btns">
                <div className="trending-btn-grp">
                    <button className={showTrendingMovie ? "active-btn btn" : "btn"} onClick={() => setShowTrendingMovie(true)}>movie</button>
                    <button className={showTrendingMovie ? "btn" : "active-btn btn"} onClick={() => setShowTrendingMovie(false)}>show</button>
                </div>
                <div className="trending-btn-grp">
                    <button className={showWeek ? "active-btn btn" : "btn"} onClick={() => setShowWeek(true)}>Week</button>
                    <button className={showWeek ? "btn" : "active-btn btn"} onClick={() => setShowWeek(false)}>Day</button>
                </div>
            </div>

            <div className="trending-container">
                {
                    trendingList.map((itm) => {
                        {/* return <MovieCard key={itm.id} movie={itm} type="trending" /> */}
                        return <CardInfoUI movie={itm} />
                    })
                }
                {/* {showTrendingMovie ?
                    (   
                        trendingList.map((itm) => {
                            return <MovieCard key={itm.id} movie={itm} type="watchlist" />
                        })
                    )
                    :
                    (
                        trendingList.map((itm) => {
                            return <MovieCard key={itm.id} movie={itm} type="watchlist" />
                        })
                    )
                } */}
            </div>
        </div>
    )
}

export default Trending
