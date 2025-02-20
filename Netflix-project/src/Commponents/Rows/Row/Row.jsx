import React from 'react'
import axios from "../../../utils/Axios";
import YouTube from "react-youtube";
import movietrailers from "movie-trailer"
import "./Row.css";
import { useState } from 'react';
import { useEffect } from 'react';
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovie] = useState([]);
  const [trailerurl, settrailerurl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setmovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerurl) {
    settrailerurl("");
    } else {
      movietrailers(movie?.title || movie?.name || movie.original_name).then(
        (url) => {
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams);
          console.log(urlparams.get("v"));
          settrailerurl(urlparams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row

// import React, { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "../../../utils/Axios";
// import movieTrailer from "movie-trailer";
// import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const base_url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(fetchUrl);
//         console.log(request);
//         setMovie(request.data.results);
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//         (url) => {
//           console.log(url);
//           const urlParams = new URLSearchParams(new URL(url).search);
//           console.log(urlParams);
//           console.log(urlParams.get("v"));
//           setTrailerUrl(urlParams.get("v"));
//         }
//       );
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "15px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// };

// export default Row;
