import Card from '../../atoms/Card';
import config from '../../../../blog.config';
import style from './PostCard.module.css';

declare type PostCardProps = {
    item: { title: string, date: string, link: string }
}

const PostCard = ({ item }: PostCardProps) => {
    const shortTitleLength = config.postTitleCardMaxChar;
    const shortTitle = item.title.length > shortTitleLength 
        ? item.title.slice(0, shortTitleLength - 3).concat('...')
        : item.title;

    return (
        <a className="clearLinkDecoration" href={item.link}>
            <Card>
                <div className={style.cardContent}>
                    <p className={style.dateText}>{item.date}</p>
                    <p className={style.titleText}>{shortTitle}</p>
                </div>
            </Card>
        </a>
    );
};

export default PostCard;