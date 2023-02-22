import copy from '../../../copy/copy.json';
import style from './LinkList.module.css';
import Header from '../../atoms/Header';
import ExternalLink from '../../atoms/ExternalLink';


declare type Item = {
    title: string,
    link: string
}

declare type LinkListProps = {
    title?: string,
    itemList: Item[],
}

const EmptyList = () => (<p>{copy.about.emptyCuratedArticles}</p>);

const LinkList = ({ title, itemList }: LinkListProps) => {
    return (
        <div className={style.LinkListContainer}>
            { typeof(title) !== 'undefined' ? <Header>{title}</Header> : <div className={style.ComponentSeperation}></div>}
            <div className={style.LinkContainer}>
                { itemList.length === 0 
                    ? <EmptyList />
                    : itemList.map((item, index) => (
                        <div className={index !== 0 ? style.LinkRowSeperation : ''} key={index}>
                            <ExternalLink href={item.link}>{item.title}</ExternalLink>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default LinkList;