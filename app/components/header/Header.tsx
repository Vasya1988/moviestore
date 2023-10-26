import Styles from './Header.module.sass';
import '../../globals.sass';
import Logo from '../logo/Logo';
import Navigation from './navigation/Navigation';
import SignIn from '../buttons/signIn/SignIn';

const Header = () => {
    return (
        <div className={'container-header'}>
            <div
                className={Styles.Header}
            >
                <Logo />
                <Navigation />
                <SignIn />
            </div>
        </div>
    )
}

export default Header;