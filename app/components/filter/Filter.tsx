'use client'
import { useContext } from 'react';
import Styles from './Filter.module.sass';
import { FilterList } from './FilterHelper';
import { useGlobalContext } from '@/app/Context/Context';


const Filter = (props: any) => {
    const {genreName, setGenreName} = useGlobalContext()
    
    return (
        <nav className={Styles.Filter}>
            <h2 className={Styles.GenreMobile}> Choose genre</h2>
            <ul>
                { FilterList.map((name, index) => 
                    <li 
                        className={name.name === props.active ? 'active' : ''}
                        key={index} 
                        onClick={(event) => {setGenreName(event.currentTarget.dataset.genre)}} 
                        data-genre={name.genre}>
                            <a>{name.name}</a>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}
export default Filter;