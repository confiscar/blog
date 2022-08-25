import type { NextPage } from 'next';
import styles from './styles/Index.module.css';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import RecentPosts from '../components/organisms/RecentPosts';
import copy from '../copy/copy.json';

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <SplashText>{copy.home.intro}</SplashText>
      <RecentPosts/>
      <BackgroundBubble />
    </div>
  );
};

export default Index;
