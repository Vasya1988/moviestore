import { KinopoiskApiRandom } from "./api/Kinopoisk";

export const getRandomId = () => {
    return Math.floor(Math.random(298) * 99999999)
}

export const MovieRandomArray: any = [];

export const showRandomMovie = async () => {
    const array = []
    const amountCards: number = 8;
    for (let i = 0; i < amountCards; i++) {
        let result = await KinopoiskApiRandom()
        await array.push(result)
        if (i === amountCards) MovieRandomArray.push(array)
    }
    console.log(array.length)
    return array
};
// showRandomMovie()



