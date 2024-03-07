'use client'
import React from "react";
import Styles from './Tvshows.module.sass';
import Filter from "../components/filter/Filter";
import Title from "../components/title/Title";
import { useGlobalContext } from "../Context/Context";
import { changeName } from "../movie/movieHelper";

const TvshowsLayout = ({ children }: { children: React.ReactNode}) => {

    const {genreName} = useGlobalContext();
    const resultName = changeName(genreName)

    return (
        <main className={Styles.Tvshows}>
            <div className={'Title'}>
                <Title movieName={resultName || 'Choose a genre'} />
            </div>
            <Filter />
            { children }
        </main>
    )
};

export default TvshowsLayout;