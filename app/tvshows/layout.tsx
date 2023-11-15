import React from "react";
import Styles from './Tvshows.module.sass';
import Filter from "../components/filter/Filter";

const TvshowsLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <main className={Styles.Tvshows}>
            <Filter />
            { children }
        </main>
    )
};

export default TvshowsLayout;