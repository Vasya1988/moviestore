import Styles from './Movie.module.sass';
import Title from '../components/title/Title';
import Filter from '../components/filter/Filter';

const MovieLayout = (
    {children,}: {children: React.ReactNode}
) => {
    return(
        <main className='container'>
            <div
                className={Styles.Movie}
            >
                <div className={Styles.Title}>
                    <Title movieName={'Hello from movie page'} />
                </div>
                <div className={Styles.Nav}>
                    <Filter />
                </div>
                <div className={Styles.Children}>
                    { children }
                </div>
            </div>
        </main>
    )
}
export default MovieLayout;