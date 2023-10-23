import Styles from './Navigation.module.sass';

const Navigation = () => {
    return (
        <nav
            className={Styles.Navigation}
        >
            <ul>
                <li><a>TV Show</a></li>
                <li><a>Movies</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;