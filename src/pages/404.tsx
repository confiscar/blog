import SplashText from '../components/molecules/SplashText';
import BrokenLinkIcon from '../lib/icons/BrokenLinkIcon';
import copy from '../copy/copy.json';
import styles from './styles/404.module.css';

const fourOhFour = () => (
    <>
        <BrokenLinkIcon className={styles.brokenLinkIcon}/>
        <SplashText padding={false}>{copy[404].warning}</SplashText>
    </>
);

export default fourOhFour;