import Styles from './SearchTitleResult.module.sass';

interface result {
    name?: string,
    year?: string,
    keys?: number,
    countries?: Object,
    eventClick?: ()=>{}
}
const SearchTitleResult = ( {name, year, keys, countries, eventClick}: result) => {
    return (
        <li className={Styles.Result} key={keys}>
            <a href='#' onClick={eventClick}>{`${name}`}</a>
            <span>{`${year}, ${countries}`}</span>
        </li>
    )
}
export default SearchTitleResult;