import Title from '../title/Title';
import Styles from './OpenCard.module.sass'
import CloseButton from '../buttons/close/Close';
import { useGlobalContext } from '@/app/Context/Context';
import { useEffect } from 'react';

interface movieProps {
    name?: string,
    imageLInk: string,
    description: string,
    year: string,
    countries: []
}
const OpenCard = ({name, imageLInk, description, year, countries}:movieProps) => {
    const {isCardOpen, setIsCardOpen} = useGlobalContext();

    console.log('open --> ', isCardOpen)
    return (
        isCardOpen ? <div className={Styles.OpenCard} >
            <div className={Styles.MovieInfo}>
                <img src={imageLInk}/>
                <div className={Styles.Info}>
                    <Title movieName={name}/>
                    <span>{`${year}, ${countries}`}</span>
                    <span className={Styles.Description} >{description}</span>
                </div>
                <CloseButton 
                    func={
                        () => {
                            isCardOpen ? setIsCardOpen(false) : isCardOpen
                        }
                    } 
                    color={'var(--ButtonColor)'}
                    styles={{cursor: 'pointer'}}
                />
            </div>
        </div> : ''
    )
}

export default OpenCard;