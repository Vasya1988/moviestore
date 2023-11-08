import Styles from './Filter.module.sass';

const Filter = () => {
    return (
        <nav className={Styles.Filter}>
            <ul>
                <li><a>Comedy</a></li>
                <li><a>Thriller</a></li>
                <li><a>Horror</a></li>
                <li><a>Drama</a></li>
                <li><a>Action</a></li>
                <li><a>Animated film</a></li>
                <li><a>Romantic</a></li>
                <li><a>Other</a></li>
            </ul>
        </nav>
    )
}
export default Filter;