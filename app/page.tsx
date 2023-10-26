'use client'
import React, { ReactNode, useEffect, useState } from "react";
import Style from './Home.module.sass';
import Play from "./components/buttons/play/Play";
import HelperHome from "./Home";
import KinopoiskApi from "./api/Kinopoisk";

export default function Home({children}: {children: ReactNode}) {
  const [movieApi, setmovieApi] = useState(Object)
  useEffect(() => {
    async function responseApi () {
      const res = await KinopoiskApi()
      return setmovieApi(res)
    }
    responseApi()
    
  }, [])
  console.log('result ', movieApi.backdrop?.url)
  return (
    <main className={'container-home'}>
      
      <div
        className={Style.Home}
        style={{ backgroundImage: `url(${movieApi.backdrop?.url})` }}
      >
        <div className={'opacity'}>
          <div className={Style.info}>
            <h1>Welcome to The Movie Store!</h1>
            <span>Movies, TV Shows and more.</span>
            <Play />
          </div>
        </div>
      </div>
      
      {children}
    </main>
  )
}
