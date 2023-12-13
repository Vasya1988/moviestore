import Styles from './SearchTitleResult.module.sass';

interface result {
    name?: string,
    year?: string,
    keys?: number,
    countries?: Object
}
const SearchTitleResult = ( {name, year, keys, countries}: result) => {
    return (
        <li className={Styles.Result} key={keys}>
            <a href='#'>{`${name}`}</a>
            <span>{`${year}, ${countries}`}</span>
        </li>
    )
}
export default SearchTitleResult;