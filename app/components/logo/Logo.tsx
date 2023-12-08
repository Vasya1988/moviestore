import Styles from './Logo.module.sass';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className={Styles.Logo}>
            <Link href={'/'}>
                <img src='movielogo.png' />
            </Link>
            
        </div>
    )
}
export default Logo;