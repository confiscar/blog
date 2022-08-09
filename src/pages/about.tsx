import type { NextPage } from 'next';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import styles from './styles/Index.module.css';

const topText = 'Any opinions expressed on my page are mine alone.';
const bottomText = `You can contact me at ${process.env.email}@[insert google email service].com`;

const About: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <SplashText padding>{topText}</SplashText>
        <SplashText>{bottomText}</SplashText>
      </div>
      <BackgroundBubble />
    </>
  );
};

export default About;
