import type { NextPage } from 'next';
import styles from './styles/Index.module.css';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import PostCard from '../components/molecules/PostCard';
import PostList from '../components/organisms/PostList';
import { getSortedPostsData } from '../lib/dynamicPosts';
import formatDate from '../lib/formatDate';
import config from '../../blog.config';
import copy from '../copy/copy.json';

const Index: NextPage<Record<string, any>> = ({ allPostsData }) => {
  const getRecentPostsList = () => {
    return allPostsData
      .slice(0, config.maxRecentPosts)
      .map(
        ({ id, title, date }: Record<string, any>) => {
          return {
            title,
            date: formatDate(date),
            link: `/posts/${id}`
          };
        });
  };

  return (
    <div className={styles.container}>
      <SplashText>{copy.home.intro}</SplashText>
      <PostList CardComponent={PostCard} title={copy.home.cardListHeading} itemList={getRecentPostsList()}/>
      <BackgroundBubble />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
};

export default Index;
