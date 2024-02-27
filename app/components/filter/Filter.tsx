'use client'
import { useContext, useState } from 'react';
import Styles from './Filter.module.sass';
import { FilterList } from './FilterHelper';
import { useGlobalContext } from '@/app/Context/Context';


const Filter = (props: any) => {
    const {genreName, setGenreName} = useGlobalContext()
    const [showGenre, setShowGenre] = useState('none')
    
    return (
        <nav className={Styles.Filter}>
            <h2 
                className={Styles.GenreMobile}
                onClick={
                    () => {
                        showGenre === 'none' 
                            ? setShowGenre('block')
                            : setShowGenre('none')
                    }
                }
            >
                Choose genre
            </h2>
            <ul style={{display: showGenre}}>
                { FilterList.map((name, index) => 
                    <li 
                        className={name.name === props.active ? 'active' : ''}
                        key={index} 
                        onClick={(event) => {
                            setGenreName(event.currentTarget.dataset.genre); 
                            setShowGenre('none'); 
                            window.scrollTo(0,0)}
                        } 
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