import type { NextPage } from 'next';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import PostCard from '../components/molecules/PostCard';
import SplashText from '../components/molecules/SplashText';
import PostList from '../components/organisms/PostList';
import Header from '../components/atoms/Header';
import formatDate from '../lib/formatDate';
import copy from '../copy/copy.json';
import styles from './styles/Index.module.css';
import ExternalLink from '../components/atoms/ExternalLink';

const About: NextPage = () => {
  const getProjectsList = () => (
    [
      {
        title: 'DevBlog',
        date: formatDate('2020-01-01'),
        link: 'https://www.google.com'  
      },
      {
        title: 'Library',
        date: formatDate('2020-01-01'),
        link: 'https://www.google.com'  
      }
    ]
  );
  return (
    <>
      <div className={styles.container}>
        <SplashText>{copy.about.splashText}</SplashText>
      </div>
      <PostList CardComponent={PostCard} title={copy.about.cardListHeading} itemList={getProjectsList()} nCol={1} />
      <Header>Curated Articles</Header>
      <div style={{textAlign: 'center', fontSize: '1.2rem', paddingBottom: '0.5rem'}}>
        <ExternalLink href="https://www.google.com">Don&apos;t eat frogs.</ExternalLink>
      </div>
      <div style={{textAlign: 'center', fontSize: '1.2rem', paddingBottom: '0.5rem'}}>
      <ExternalLink href="https://www.google.com">Software engineering in a nutshell</ExternalLink>
      </div>
      <div style={{textAlign: 'center', fontSize: '1.2rem', paddingBottom: '0.5rem'}}>
        <ExternalLink href="https://www.google.com">How are microcontrollers made?</ExternalLink>
      </div>
      <BackgroundBubble />
    </>
  );
};

export default About;
