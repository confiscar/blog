import type { NextPage } from 'next';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import PostList from '../components/organisms/PostList';
import Header from '../components/atoms/Header';
import formatDate from '../lib/formatDate';
import copy from '../copy/copy.json';
import styles from './styles/Index.module.css';
import ExternalLink from '../components/atoms/ExternalLink';
import ImageCard from '../components/molecules/ImageCard/ImageCard';

const About: NextPage = () => {
  const getProjectsList = () => (
    [
      {
        title: 'Just this blog for now :^)',
        link: 'https://www.confiscar.github.io'  
      },
    ]
  );

  return (
    <>
      <div className={styles.container}>
        <SplashText>{copy.about.splashText}</SplashText>
      </div>
      <PostList CardComponent={ImageCard} title={copy.about.cardListHeading} itemList={getProjectsList()} nCol={1} />
      <Header>Curated Articles</Header>
      <div style={{textAlign: 'center', fontSize: '1.2rem', paddingBottom: '0.5rem'}}>
        <ExternalLink href="https://experimentalhistory.substack.com/p/excuse-me-but-why-are-you-eating">Excuse me but why are you eating so many frogs - Adam Mastroianni</ExternalLink>
      </div>
      <BackgroundBubble />
    </>
  );
};

export default About;
