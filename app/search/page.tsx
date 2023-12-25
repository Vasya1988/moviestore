'use client'
import Styles from './Search.module.sass';
import { useGlobalContext } from '../Context/Context';
import { useState, useEffect } from 'react';
import { KinopoiskApiSearchName } from '../api/Kinopoisk';
import Link from 'next/link';
import SearchTitleResult from '../components/searchTitleResult/SearchTitleResult';
import { EventClickHandler } from './SearchPageHelper';
import OpenCard from '../components/openCard/OpenCard';
import CloseButton from '../components/buttons/close/Close';

const Search = () => {
    const {searchName} = useGlobalContext()
    console.log('Search name ---->  ', searchName)

    const [movieName, setMovieName] = useState(false)
    const [result, setResult] = useState([])
    const [movieFlag, setMovieFlag] = useState({flag: false, item: 0})

    useEffect(() => {
        (async () => {
            const apiQuery = await movieName && KinopoiskApiSearchName(movieName)
            const response = await apiQuery
            setResult(response.docs)
            console.log('resp ---' , response)
        })();
        
    }, [movieName])
    
    console.log(result)
    return (
        <div className={`container ${Styles.Search}`}>
            <form onSubmit={(item) => {
                item.preventDefault(); 
                setMovieName(item.target[0].value);
                console.log(item.target[0].value)

                }}
                
            >
                <input type="text" placeholder={'Search...'}/>
            </form>
            <Link href={'/'}>
                <CloseButton color='var(--ButtonColor)' />
                
            </Link>
            <ul className={Styles.ListResult}>
                {
                    result && result.map((item: {name?: string, year?: string, countries: []}, index: number) => {
                        return <SearchTitleResult 
                            key={index}
                            name={item.name}
                            year={item.year}
                            countries={item.countries.map((genre: {name: string}) => genre?.name).join(', ')}
                            eventClick={() => setMovieFlag({flag: true, item: index})}
                        />
                    })
                }
            </ul>
            {
                movieFlag.flag ? <OpenCard 
                    name={result[movieFlag.item].name}
                    imageLInk={result[movieFlag.item].poster.url} 
                    description={result[movieFlag.item].description} 
                    year={result[movieFlag.item].year} 
                    countries={result[movieFlag.item].countries.map(item => item.name)}
                    /> 
                : false
            }
            
        </div>
    )
}

export default Search;