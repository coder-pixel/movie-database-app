import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { GlobalContext } from '../context/GlobalState';
import Watched from './Watched';
const Header = () => {

    const { watchlist, watched } = useContext(GlobalContext);

    // console.log(watchlist ? true : false)
    return (
        <>
            <header>
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">WatchList</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/" activeClassName='active'>WatchList {watchlist.length > 0 ? <i class="fas fa-star" style={{ color: "gold" }}></i> : <i class="fas fa-star"></i>}</Link>
                        </li>
                        <li>
                            <Link to="/watched" activeClassName='active'>Watched {watched.length > 0 ? <i class="fas fa-eye-slash" style={{ color: "red" }}></i> : <i class="fas fa-eye"></i>}</Link>
                        </li>
                        <li>
                            <Link to="/trending" activeClassName='active'>Trending <i class="fas fa-fire"></i></Link>
                        </li>
                        <li>
                            <Link to="/add" activeClassName="active" className="btn">+ Add</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
