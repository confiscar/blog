import Card from '../../atoms/Card';
import style from './RecentPostCard.module.css';

declare type RecentPostCardProps = {
    title: string,
    date: string
}

const RecentPostCard = ({title, date}: RecentPostCardProps) => {
    const shortTitleLength = 45;
    const shortTitle = title.length > shortTitleLength 
        ? title.slice(0, shortTitleLength - 3).concat('...')
        : title;

    return (
        <Card>
            <div className={style.cardContent}>
                <p className={style.dateText}>{date}</p>
                <p className={style.titleText}>{shortTitle}</p>
            </div>
        </Card>
    );
};

export default RecentPostCard;