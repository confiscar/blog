import Image from 'next/image';
import Card from '../../atoms/Card';
import style from './ImageCard.module.css';

declare type RecipeCardProps = {
    item: { title: string, link: string, cardImage?: string }
}

const defaultCardHeader = '/images/default-card-header.png';
const cardHeight = 180;
const cardWidth = 438;

const RecipeCard = ({ item }: RecipeCardProps) => {
    return (
        <a className="clearLinkDecoration" href={item.link}>
            <Card w={cardWidth} h={cardHeight}>
                <Image className={style.cardHeaderImage} width={cardWidth} height={cardHeight/1.6} src={item.cardImage || defaultCardHeader} alt="" />
                <div className={style.cardContent}>
                    <p className={style.titleText}>{item.title}</p>
                </div>
            </Card>
        </a>
    );
};

export default RecipeCard;