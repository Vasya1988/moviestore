import Title from '../title/Title';
import Styles from './OpenCard.module.sass'

interface movieProps {
    name?: string,
    imageLInk: string,
    description: string,
    year: string,
    countries: []
}
const OpenCard = ({name, imageLInk, description, year, countries}:movieProps) => {
    return (
        <div className={Styles.OpenCard} >
            Hello from OPEN CARD
            <div className={Styles.MovieInfo}>
                <img src={imageLInk}/>
                <div className={Styles.Info}>
                    <Title movieName={name}/>
                    <span>{`${year}, ${countries}`}</span>
                    <span>{description}</span>
                </div>

            </div>
        </div>
    )
}

export default OpenCard;