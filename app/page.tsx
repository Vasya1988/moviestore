'use client'
import React, { ReactNode, useEffect, useState } from "react";
import Styles from './Home.module.sass';
import Play from "./components/buttons/play/Play";
import { KinopoiskApiRandom, KinopoiskApiGenre } from "./api/Kinopoisk";
import Title from "./components/title/Title";
import MovieCard from "./components/movieCard/MovieCard";
import { useGlobalContext } from "./Context/Context";
import OpenCard from "./components/openCard/OpenCard";


export default function Home() {
  const [movieApi, setmovieApi] = useState(Object);
  const [year, setYear] = useState('...');
  interface GenreProps {
    name: string, 
    poster: {url: string},
    description: string,
    year: string,
    countries: [item: {name: string}]
  }
  const [genres, setGenres] = useState<GenreProps[]>([])
  const {isCardOpen, setIsCardOpen} = useGlobalContext();
  const [movieFlag, setMovieFlag] = useState({flag: false, item: 0})

  async function responseApi() {

    const result = await KinopoiskApiRandom()
    const movieYear: { year?: string } = result
    const genres = await KinopoiskApiGenre();
    const getGenres = genres.docs;
    console.log(getGenres)
    setGenres(getGenres)
    await setmovieApi(result)
    await setYear(`${movieYear?.year}`)

  }

  useEffect(() =>{console.log(genres)},[genres])

  const handleScroll = async () => {
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const currentScrollHeight = scrollTop + windowHeight;
    
    if (currentScrollHeight === scrollHeight) {
      const genres = await KinopoiskApiGenre(undefined, undefined, undefined, 8);
      const getGenres = genres.docs;
      
      console.log('HANDLE --> ', getGenres)
      // setGenres(prev => prev.concat(getGenres))
      setGenres(prev => [...prev, getGenres])
      console.log('GENRES --> ', genres)
    }
  }
  
  useEffect(() => {
    responseApi();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  // console.log('result ', movieApi)
  // console.log('Genres -->  ', movieFlag.item && genres[movieFlag.item].name)
  // console.log('fff')
  return (
    <main className={'container-home'}>
      <div
        className={Styles.Home}
        style={{ backgroundImage: `url(${movieApi && movieApi.backdrop?.url})` }}
      >
        <div className={'opacity'}>
          <div className={Styles.info}>
            <h1>Welcome to The Movie Store!</h1>
            <span className={Styles.description}>Movies, TV Shows and more.</span>
            <Title
              movieName={movieApi.name}
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
   

      <div className={Styles.randomMovie}>
            {
              genres && genres.map((movie, index) => {
                return <MovieCard eventClick={() => {
                  setIsCardOpen(true);
                  setMovieFlag({flag: true, item: index});
                  document.body.style.overflow='hidden';
                }} key={index} movieApi={movie} />
              })
            }
      </div>
      {
        movieFlag.flag ? <OpenCard 
        name={genres[movieFlag.item].name}
        imageLInk={genres[movieFlag.item].poster?.url} 
        description={genres[movieFlag.item].description} 
        year={genres[movieFlag.item].year} 
        countries={genres[movieFlag.item].countries.map(item => item.name)}
        /> 
    : false
      }
    </main>
  );
}
