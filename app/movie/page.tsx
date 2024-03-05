'use client'
import Styles from './Movie.module.sass';
import React, { useState, useEffect, ReactNode } from 'react';
import MovieCard from '../components/movieCard/MovieCard';
import { KinopoiskApiGenre } from '../api/Kinopoisk';
import { useGlobalContext } from '../Context/Context';
import OpenCard from '../components/openCard/OpenCard';

const Movie = () => {
    const {genreName} = useGlobalContext()
    const {isCardOpen, setIsCardOpen} = useGlobalContext();
    const [movieFlag, setMovieFlag] = useState({flag: false, item: 0})

    interface ApiProps {
        name: string, 
        poster: {url: string},
        description: string,
        year: string,
        countries: [item: {name: string}]
      }
    const [apiGenre, setApiGenre] = useState<ApiProps[]>([])

    useEffect(() => {
        (async () => {
            const responseApi = await KinopoiskApiGenre(genreName);
            const getApiGenre = await responseApi;
            await setApiGenre(getApiGenre.docs)
            
        })()
    }, [genreName])
    console.log('Genre --> ', apiGenre)
    return (
        <main className='Genre'>
            {
                apiGenre && apiGenre.map((movie, index) => {
                    return <MovieCard eventClick={() => {
                        setIsCardOpen(true);
                        setMovieFlag({flag: true, item: index});
                      }} key={index} movieApi={movie} />
                })
            }

            {
                movieFlag.flag ? <OpenCard
                    name={apiGenre[movieFlag.item].name}
                    imageLInk={apiGenre[movieFlag.item].poster.url}
                    description={apiGenre[movieFlag.item].description}
                    year={apiGenre[movieFlag.item].year}
                    countries={apiGenre[movieFlag.item].countries.map(item => item.name)}
                />
                    : false
            }
        </main>
    )
}

export default Movie;