import React from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
 
// importing components
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";

// importing global provider
import { GlobalProvider } from "./context/GlobalState";
import MovieSummary from "./components/MovieSummary";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />

        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="/movie/:id" element={<MovieSummary />} />
          {/* <Route path="/:id" element={<MovieSummary />} /> */}
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
