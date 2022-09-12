import type { NextPage } from 'next';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import ImageCard from '../components/molecules/ImageCard/ImageCard';
import PostList from '../components/organisms/PostList';
import { getSortedRecipesData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';

const Recipes: NextPage<Record<string, any>> = ({ allRecipesData }) => {
  const getAllRecipesList= () => {
    return allRecipesData 
      .map(
        ({ id, title, cardImage }: Record<string, any>) => {
          return {
            title,
            link: `/recipes/${id}`,
            cardImage
          };
        });
  };

  return (
    <>
      <div className={styles.container}>
        <PostList CardComponent={ImageCard} itemList={getAllRecipesList()} nCol={1} />
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