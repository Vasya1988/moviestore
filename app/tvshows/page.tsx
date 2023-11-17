'use client'
import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard/MovieCard";
import { KinopoiskApiGenre } from "../api/Kinopoisk";
import Styles from './Tvshows.module.sass';
import { useGlobalContext } from "../Context/Context";

const Tvshows = () => {
    const {genreName} = useGlobalContext()
    const [apiTvShow, setTvShow] = useState([]);
    useEffect(() => {
        (
            async ()=>{
                const responseApi = await KinopoiskApiGenre(genreName, '', 'tv-series')
                const getTvShow = await responseApi;
                await setTvShow(getTvShow.docs)
            }
        )()
    }, [genreName])
    console.log(apiTvShow)
    return (
        <main className={Styles.TvFrame}>

            {
                apiTvShow && apiTvShow.map((name, index) => <MovieCard key={index} movieApi={name} />)
            }

        </main>
    )
};

export default Tvshows;