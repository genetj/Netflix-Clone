// import React from 'react'
const API_KEY = import.meta.env.VITE_API_KEY;

    const requests = {
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomancesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
      fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en_US`,
    };



export default requests
