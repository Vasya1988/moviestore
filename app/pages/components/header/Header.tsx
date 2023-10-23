import Styles from './Header.module.sass';
import Logo from '../logo/Logo';
import Navigation from './navigation/Navigation';

const Header = () => {
    return (
        <div
            className={Styles.Header}
        >
            <Logo />
            <Navigation />
        </div>
    )
}

export default Header;