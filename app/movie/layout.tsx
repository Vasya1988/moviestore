'use client'
import Styles from './Movie.module.sass';
import Title from '../components/title/Title';
import Filter from '../components/filter/Filter';
import React, { useEffect, useState, ReactNode, useContext } from 'react';
import { useGlobalContext } from '../Context/Context';
import { changeName } from './movieHelper';



const MovieLayout = (
    {children,}: {children: React.ReactNode}
) => {

    const {genreName} = useGlobalContext();
    const resultName = changeName(genreName)

    return(
        <main className='container'>
            <div
                className={Styles.Movie}
            >
                <div className={'Title'}>
                    <Title movieName={resultName ||'Choose a genre'} />
                </div>
                <div className={Styles.Nav}>
                    <Filter test={()=>{}} active={resultName}/>
                </div>
                <div className='Children'>
                    { children } 
                </div>
            </div>
        </main>
    )
}
export default MovieLayout;