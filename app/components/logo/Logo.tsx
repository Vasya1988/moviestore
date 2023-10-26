import Styles from './Logo.module.sass';

const Logo = () => {
    return (
        <div className={Styles.Logo}>
            <img src='movielogo.png' />
        </div>
    )
}
export default Logo;