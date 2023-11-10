'use client'
import Styles from './Movie.module.sass';
import Title from '../components/title/Title';
import { useState, useEffect } from 'react';
import { KinopoiskApiGenre } from '../api/Kinopoisk';
import MovieCard from '../components/movieCard/MovieCard';

const Movie = ({children}: {children: React.ReactNode}) => {
    const [apiGenre, setApiGenre] = useState([])
    useEffect(() => {
        (async () => {
            const responseApi = await KinopoiskApiGenre();
            const getApiGenre = await responseApi;
            await setApiGenre(getApiGenre.docs)
            console.log('Genre --> ', apiGenre)
        })()
    }, [])

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