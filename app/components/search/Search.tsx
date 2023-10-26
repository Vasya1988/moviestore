import Styles from './Search.module.sass';

const Search = () => {
    return (
        <div className={Styles.Search}>
            <input type="text" placeholder={'Search...'}/>
            <button type='submit'></button>
        </div>
    )
}
export default Search;