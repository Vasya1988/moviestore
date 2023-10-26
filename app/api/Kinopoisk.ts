import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";

const KinopoiskApi = async () => {
    // const kp = new KinopoiskDev('DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S')

    // const {data} = await kp.movie.getRandom()
    // console.log(data?.backdrop?.url)

    // const result = await data?.backdrop?.url

    const getFetch = await fetch('https://api.kinopoisk.dev/v1.3/movie/random', {headers: {"X-API-KEY": 'DYX5Q1F-MQCMKZ5-HNAM4MQ-B5WBQ3S'}})

    let response = await getFetch.json()

    // console.log('from api kinopoisk', response.backdrop.url)

    return response.backdrop.url === null 
        ? (console.log('null --> ', response.backdrop.url), KinopoiskApi()) 
        : (
            console.log('response -->', response),
            response
        )
    
}

export default KinopoiskApi;

