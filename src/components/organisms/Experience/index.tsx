import Header from '../../atoms/Header';
import copy from '../../../copy/copy.json';
import styles from './Experience.module.css';

const Experience = () => {
    const experience = copy.resume.experience;

    return (
        <>
            <Header>{copy.resume.experienceHeading}</Header>
            <div className={styles.experienceContainer}>
                {experience.map(({jobTitle, date, descriptions}, index) => (
                    <div key={index}>
                        <p className={styles.jobTitle}>{jobTitle}</p>                
                        <p className={styles.dates}>{date}</p>                
                        <ul className={styles.descriptionContainer}>
                            { descriptions.split(/\n/).map((description, index) => (
                                <li className={styles.descriptionElement} key={index}>{description}</li>
                            ))}
                        </ul>
                        <div className={styles.divider}></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Experience;
