import Header from '../../atoms/Header';
import copy from '../../../copy/copy.json';
import styles from './TechSkills.module.css';

const TechSkills = () => {
    const skills = copy.resume.techSkills;

    return (
        <>
            <Header>{copy.resume.techSkillsHeading}</Header>
            <div className={styles.skillContainer}>
                { skills.map((item, index) => (
                    <p className={styles.skillElement} key={index}>{item}</p> 
                ))}
            </div>
        </>

    );
};

export default TechSkills;