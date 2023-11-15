import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";
import React, {ReactNode} from "react";

const headers = {headers: {"X-API-KEY": 'DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S'}};

// Request to receive a random movie
// Запрос на получение случайного фильма
export const KinopoiskApiRandom = async () => {

    // Important. The API key must be in the headers
    // Обязательно должен быть ключ в headers

    const getFetch = await fetch('https://api.kinopoisk.dev/v1.3/movie/random', headers)

    let response = await getFetch.json()

    return response
    
}

// Request to receive movies by genre
// Запрос на получение фильмов по жанрам
export const KinopoiskApiGenre = async (genre?: string, year?: string, tvshows?: string) => {

    const getGenre = genre && `genres.name=${genre}`;
    const getYears = year && `year=${year}`;
    const getTvshow = tvshows && `type=${tvshows}` // tv-series

    const getFetch = await fetch(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=12&${getTvshow}&${getGenre}&${getYears}`, headers);

    let response = await getFetch.json();
    
    // await console.log('resp --> ', response)
    return response

}

KinopoiskApiGenre()


