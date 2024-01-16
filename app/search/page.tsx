'use client'
import Styles from './Search.module.sass';
import { useGlobalContext } from '../Context/Context';
import { useState, useEffect, FormEvent } from 'react';
import { KinopoiskApiSearchName } from '../api/Kinopoisk';
import Link from 'next/link';
import SearchTitleResult from '../components/searchTitleResult/SearchTitleResult';
import OpenCard from '../components/openCard/OpenCard';
import CloseButton from '../components/buttons/close/Close';

const Search: React.FC = () => {
    const {searchName} = useGlobalContext()
    console.log('Search name ---->  ', searchName)

    const [movieName, setMovieName] = useState<string>('')
    interface ResultProps {
        name: string, 
        poster: {url: string},
        description: string,
        year: string,
        countries: [item: {name: string}]
    }
    const [result, setResult] = useState<ResultProps[]>([])
    const [movieFlag, setMovieFlag] = useState({flag: false, item: 0})
    const {isCardOpen, setIsCardOpen} = useGlobalContext();

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
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setMovieName((event.target as HTMLFormElement).querySelector('input')?.value || '');
                console.log((event.target as HTMLFormElement).querySelector('input')?.value || '')
                }
            }
                
            >
                <input type="text" placeholder={'Search...'}/>
            </form>
            <Link href={'/'}>
                <CloseButton color='var(--ButtonColor)' />
                
            </Link>
            <ul className={Styles.ListResult}>
                {
                    result && result.map((item, index) => {
                        return <SearchTitleResult 
                            key={index}
                            name={item.name}
                            year={item.year}
                            countries={item.countries.map((genre: {name: string}) => genre?.name).join(', ')}
                            eventClick={
                                () => {
                                    setIsCardOpen(true);
                                    setMovieFlag({flag: true, item: index});
                                }
                            }
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