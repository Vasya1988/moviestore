'use client'
import Styles from './Movie.module.sass';
import React, { useState, useEffect, ReactNode } from 'react';
import MovieCard from '../components/movieCard/MovieCard';
import { KinopoiskApiGenre } from '../api/Kinopoisk';
import { useGlobalContext } from '../Context/Context';

const Movie = ({children}: {children: React.ReactNode}) => {
    const {genreName} = useGlobalContext()

    const [apiGenre, setApiGenre] = useState([])
    useEffect(() => {
        (async () => {
            const responseApi = await KinopoiskApiGenre(genreName);
            const getApiGenre = await responseApi;
            await setApiGenre(getApiGenre.docs)
            
        })()
    }, [genreName])
    console.log('Genre --> ', apiGenre)
    return (
        <main className={Styles.Genre}>
            {
                apiGenre && apiGenre.map((movie, index) => {
                    return <MovieCard key={index} movieApi={movie} />
                })
            }
        </main>
    )
}

export default Movie;