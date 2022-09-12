import Card from '../../atoms/Card';
import style from './PostCard.module.css';

declare type PostCardProps = {
    item: { title: string, date: string, link: string }
}

const PostCard = ({ item }: PostCardProps) => {
    return (
        <a className="clearLinkDecoration" href={item.link}>
            <Card>
                <div className={style.cardContent}>
                    <p className={style.dateText}>{item.date}</p>
                    <p className={style.titleText}>{item.title}</p>
                </div>
            </Card>
        </a>
    );
};

export default PostCard;