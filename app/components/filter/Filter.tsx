import Styles from './Filter.module.sass';
import { FilterList } from './FilterHelper';

const Filter = () => {
    return (
        <nav className={Styles.Filter}>
            <ul>
                { FilterList.map((name) => <li><a>{name}</a></li>)}
            </ul>
        </nav>
    )
}
export default Filter;