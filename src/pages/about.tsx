import type { NextPage } from 'next';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import PostList from '../components/organisms/PostList';
import LinkList from '../components/organisms/LinkList';
import copy from '../copy/copy.json';
import styles from './styles/Index.module.css';
import ImageCard from '../components/molecules/ImageCard';

const About: NextPage = () => {
  const getProjectsList = () => (
    [
      {
        title: 'Just this blog for now :^)',
        link: 'https://fcaeiro.com'  
      },
    ]
  );

  const getCuratedArticles = () => (
    [
      {
        title: 'Excuse me but why are you eating so many frogs - Adam Mastroianni',
        link: 'https://experimentalhistory.substack.com/p/excuse-me-but-why-are-you-eating'  
      }
    ]
  );

  return (
    <>
      <div className={styles.container}>
        <SplashText>{copy.about.splashText}</SplashText>
      </div>
      <PostList CardComponent={ImageCard} title={copy.about.cardListHeading} itemList={getProjectsList()} nCol={1} />
      <LinkList title={copy.about.curatedArticlesHeading} itemList={getCuratedArticles()} />
      <BackgroundBubble />
    </>
  );
};

export default About;
