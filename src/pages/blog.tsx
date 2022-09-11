import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import { getSortedPostsData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';
import copy from '../copy/copy.json';
import type { NextPage } from 'next';
import formatDate from '../lib/formatDate';
import PostCard from '../components/molecules/PostCard';
import PostList from '../components/organisms/PostList';

const Blog: NextPage<Record<string, any>> = ({ allPostsData }) => {
  const getSplashTextRandomly = () => {
    return copy.blog.splashTexts[Math.floor(Math.random() * copy.blog.splashTexts.length)];
  };
  
  const getAllPostsList = () => {
    return allPostsData
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
    <>
      <div className={styles.container}>
        <SplashText padding>{getSplashTextRandomly()}</SplashText>
      </div>
      <PostList CardComponent={PostCard} itemList={getAllPostsList()}/>
      <BackgroundBubble />
    </>
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

export default Blog;
