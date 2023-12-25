import Title from '../title/Title';
import Styles from './OpenCard.module.sass'
import CloseButton from '../buttons/close/Close';
import { DeleteCard } from './OpenCardHelper';

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
            <div className={Styles.MovieInfo}>
                <img src={imageLInk}/>
                <div className={Styles.Info}>
                    <Title movieName={name}/>
                    <span>{`${year}, ${countries}`}</span>
                    <span className={Styles.Description} >{description}</span>
                </div>
                <CloseButton func={(event:any) => DeleteCard(event)} color={'var(--ButtonColor)'} />
            </div>
        </div>
    )
}

export default OpenCard;