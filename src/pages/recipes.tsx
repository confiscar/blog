import type { NextPage } from 'next';
import Link from 'next/link';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import PostCard from '../components/molecules/PostCard';
import SplashText from '../components/molecules/SplashText';
import PostList from '../components/organisms/PostList';
import { getSortedRecipesData } from '../lib/dynamicPosts';
import formatDate from '../lib/formatDate';
import styles from './styles/Index.module.css';

const Recipes: NextPage<Record<string, any>> = ({ allRecipesData }) => {
  const getAllRecipesList= () => {
    return allRecipesData 
      .map(
        ({ id, title, date }: Record<string, any>) => {
          return {
            title,
            date: formatDate(date),
            link: `/recipes/${id}`
          };
        });
  };

  return (
    <>
      <div className={styles.container}>
        <PostList CardComponent={PostCard} itemList={getAllRecipesList()} nCol={1} />
      </div>
      <BackgroundBubble />
    </>
  );
};

export const getStaticProps = async () => {
  const allRecipesData = getSortedRecipesData();
  return {
    props: {
      allRecipesData
    }
  };
};

export default Recipes;