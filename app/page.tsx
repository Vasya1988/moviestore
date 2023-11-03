'use client'
import React, { ReactNode, useEffect, useState } from "react";
import Styles from './Home.module.sass';
import Play from "./components/buttons/play/Play";
import { KinopoiskApiRandom, KinopoiskApiSearchId } from "./api/Kinopoisk";
import Title from "./components/title/Title";
import {  } from './HomeHelper'
import MovieCard from "./components/movieCard/MovieCard";

export default function Home({children}: {children: ReactNode}) {
  const [movieApi, setmovieApi] = useState(Object);
  const [year, setYear] = useState('...');
  const [randomMovie, setRandomMovie] = useState([]);



  useEffect(() => {
    async function responseApi () {
      const result = await KinopoiskApiRandom()
      const movieYear: {year?: string} = result
      await setmovieApi(result)
      await setYear(`${movieYear?.year}`)

    }
    responseApi()

  }, []);

  console.log('result ', movieApi)
  return (
    <main className={'container-home'}>
      
      <div
        className={Styles.Home}
        style={{ backgroundImage: `url(${movieApi.backdrop?.url})` }}
      >
        <div className={'opacity'}>
          <div className={Styles.info}>
            <h1>Welcome to The Movie Store!</h1>
            <span className={Styles.description}>Movies, TV Shows and more.</span>
            <Title 
              movieName={movieApi.name} 
              genre={
                movieApi.genres?.map(
                  (item: { name: string }) => item.name).join(', ')
                }
            />
            <span className={Styles.genres}> {
              movieApi.genres?.map(
                (item: { name: string }) => item.name).join(', ')
            }</span>
            <span className={Styles.year}>{year}</span>

            <Play />
          </div>
        </div>
      </div>
      {children}

      <div className={Styles.randomMovie}>
        {}
      </div>
    </main>
  );
}
