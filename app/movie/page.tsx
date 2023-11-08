import Styles from './Movie.module.sass';
import Title from '../components/title/Title';

const Movie = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='container'>
            { children }
        </main>
    )
}

export default Movie;