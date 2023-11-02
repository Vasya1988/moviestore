import Styles from './Title.module.sass';

interface PropsTitle {tag?: '', movieName?: String, genre?: String, year?: string}

const Title = ({tag, movieName, genre, year}:PropsTitle) => {

    const Tag = tag || 'h2';

    return (
        <div className={Styles.Title} >
            <Tag 
                className={Styles.name}
            >
                { movieName }
                <span className={Styles.time}>{ year }</span>
            </Tag>
        </div>
    )
}

export default Title;