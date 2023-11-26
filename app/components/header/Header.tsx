import Styles from './Header.module.sass';
import '../../globals.sass';
import Logo from '../logo/Logo';
import Navigation from './navigation/Navigation';
import SignIn from '../buttons/signIn/SignIn';
import Search from '../search/Search';

const Header = () => {
    return (
        <div className={'container-header'}>
            <div
                className={Styles.Header}
            >
                <Logo />
                <Navigation />
                <Search />
                <SignIn />
            </div>
        </div>
    )
}

export default Header;