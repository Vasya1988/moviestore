'use client'
import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard/MovieCard";
import { KinopoiskApiGenre } from "../api/Kinopoisk";
import Styles from './Tvshows.module.sass';
import { useGlobalContext } from "../Context/Context";
import OpenCard from "../components/openCard/OpenCard";

const Tvshows = () => {
    const {genreName} = useGlobalContext()
    interface TvProps {
        name: string, 
        poster: {url: string},
        description: string,
        year: string,
        countries: [item: {name: string}]
    }
    const [apiTvShow, setTvShow] = useState<TvProps[]>([]);
    const {isCardOpen, setIsCardOpen} = useGlobalContext();
    const [movieFlag, setMovieFlag] = useState({flag: false, item: 0})

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
                apiTvShow && apiTvShow.map((name, index) => <MovieCard eventClick={() => {
                    setIsCardOpen(true);
                    setMovieFlag({flag: true, item: index});
                  }} key={index} movieApi={name} />)
            }

            {
                movieFlag.flag ? <OpenCard
                    name={apiTvShow[movieFlag.item].name}
                    imageLInk={apiTvShow[movieFlag.item].poster.url}
                    description={apiTvShow[movieFlag.item].description}
                    year={apiTvShow[movieFlag.item].year}
                    countries={apiTvShow[movieFlag.item].countries.map(item => item.name)}
                />
                    : false
            }

        </main>
    )
};

export default Tvshows;