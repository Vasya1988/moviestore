'use client'
import { useContext, useState } from 'react';
import Styles from './Filter.module.sass';
import { FilterList } from './FilterHelper';
import { useGlobalContext } from '@/app/Context/Context';


const Filter = (props: any) => {
    const {genreName, setGenreName} = useGlobalContext()
    const [showGenre, setShowGenre] = useState('block')
    
    return (
        <nav className={Styles.Filter}>
            <h2 
                className={Styles.GenreMobile}
                onClick={
                    () => {
                        document.querySelector(`.${Styles.GenreList}`)?.classList.toggle(Styles.showGenre)
                        showGenre === 'none' 
                            ? setShowGenre('block')
                            : setShowGenre('none')
                    }
                }
            >
                Choose genre
            </h2>
            <ul className={Styles.GenreList}>
                { FilterList.map((name, index) => 
                    <li 
                        className={name.name === props.active ? 'active' : ''}
                        key={index} 
                        onClick={(event) => {
                            setGenreName(event.currentTarget.dataset.genre); 
                            document.querySelector(`.${Styles.GenreList}`)?.classList.toggle(Styles.showGenre)
                            setShowGenre('none');
                            window.outerWidth <= 468 ? window.scrollTo(0,0) : false
                            }
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