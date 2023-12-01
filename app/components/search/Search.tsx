'use client'
import Styles from './Search.module.sass';
import ChangeHandler from './SearchHelper';
import { useGlobalContext } from '../../Context/Context'

const Search = (name: string) => {

    const {searchName} = useGlobalContext()
    console.log(searchName)
    return (
        <div className={Styles.Search}>
            <form onSubmit={(item) => {item.preventDefault(), console.log(item.target[0].value)}} >
                <input type="text" placeholder={'Search...'}/>
            </form>
            
            <button type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" fill='var(--ButtonColor)'></path>
                </svg>
            </button>
            {/* <FontAwesomeIcon icon="fal fa-search" style={{color: "#ebebeb",}} /> */}
        </div>
    )
}
export default Search;