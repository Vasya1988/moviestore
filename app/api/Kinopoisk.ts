import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";

interface PropsRandom {(): Object}

export const KinopoiskApiRandom: PropsRandom = async () => {

    const getFetch = await fetch('https://api.kinopoisk.dev/v1.3/movie/random', {headers: {"X-API-KEY": 'DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S'}})

    let response = await getFetch.json()

    return response
    
}

interface PropsId {(id: number): Object}

export const KinopoiskApiSearchId: PropsId = async (id) => {
    const getFetch = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {headers: {"X-API-KEY": 'DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S'}})

    let response = await getFetch.json()

    return response
}

