import React, { ReactNode } from 'react';
import Styles from './MovieCard.module.sass';
import Title from '../title/Title';

const MovieCard = ({movieApi}: {movieApi?: Object}) => {
    const api: {
        name?: string,
        year?: string,
        rating?: string,
        poster?: {url: string}
    } = movieApi || {}
    console.log(api)
    return (
        <div className={Styles.MovieCardFrame}>
            <div>
                <img className={Styles.poster} src={`${api.poster?.url}`} />
            </div>
            <div className={Styles.name}>
                <Title tag={'span'} movieName={api.name} />
                <span className={Styles.year}> { api.year } </span>
            </div>
            <div>

            </div>
        </div>
    )
}
export default MovieCard;