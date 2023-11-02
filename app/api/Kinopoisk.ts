import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";

interface PropsKinopoiskApi {(): Object}

const KinopoiskApi: PropsKinopoiskApi = async () => {

    const getFetch = await fetch('https://api.kinopoisk.dev/v1.3/movie/random', {headers: {"X-API-KEY": 'DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S'}})

    let response = await getFetch.json()

    return response
    
}

export default KinopoiskApi;

