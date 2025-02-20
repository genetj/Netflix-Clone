import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/Requests';

function RowList() {
    return (
    <>
        <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies"fetchUrl={requests.fetchHorrorsMovies}/>
        <Row title="Romance Movies"fetchUrl={requests.fetchRomancesMovies}/>
        <Row title="Tv Shows"fetchUrl={requests.fetchTvShow}/>
        <Row title="Documentaries"fetchUrl={requests.fetchDocumentaryMovies}/>
    </>
    );
}

export default RowList
