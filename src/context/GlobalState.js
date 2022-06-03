import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// initial value of store
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // saving to local storage
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

    
    // actions
    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    const removeMovieFromWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovieToWatchedList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHEDLIST", payload: movie})
    }
    const removeMovieFromWatchedList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHEDLIST", payload: id})
    }

    return(
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist, 
            watched: state.watched,
            addMovieToWatchList: addMovieToWatchList,
            removeMovieFromWatchList,
            addMovieToWatchedList,
            removeMovieFromWatchedList,
            // dispatch,  //we can directly pass the diaptch function also instead of creating functions for individual actions like addMovieToWatchList()
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

