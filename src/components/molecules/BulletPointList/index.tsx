import Header from '../../atoms/Header'; 
import styles from './BulletPointList.module.css';

declare type BulletPointListProps = {
    title: string,
    list: {title: string, subtitle: string, sections?: string}[];
}

const BulletPointList = ({ title, list }: BulletPointListProps) => {
    return (
        <>
            <Header>{title}</Header>
            <div className={styles.listContainer}>
                {list.map(({title, subtitle, sections}, index) => (
                    <div key={index}>
                        <p className={styles.title}>{title}</p>                
                        <p className={styles.subtitle}>{subtitle}</p>                
                        { sections && <ul className={styles.listElementsContainer}>
                            { sections.split(/\n/).map((section, index) => (
                                <li className={styles.listElement} key={index}>{section}</li>
                            ))}
                        </ul> }
                        <div className={styles.divider}></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BulletPointList;