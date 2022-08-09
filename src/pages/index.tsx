import type { NextPage } from 'next';
import styles from './styles/Index.module.css';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';

const introText = [`Hi, I'm Fran. I'm a software engineer who likes building stuff. I'm into
cooking, music production and video games.`, 'I also like writing.'];

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <SplashText padding>{introText[0]}</SplashText>
      <SplashText>{introText[1]}</SplashText>
      <BackgroundBubble />
    </div>
  );
};

export default Index;
