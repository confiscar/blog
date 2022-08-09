import type { NextPage } from 'next';
import Link from 'next/link';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import { getSortedRecipesData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';

const text = 'Here\'s a collection of cool recipes I discovered, for your (and my) convenience';

const Recipes: NextPage<Record<string, any>> = ({ allRecipesData }) => {
  return (
    <>
      <div className={styles.container}>
        <SplashText padding>{text}</SplashText>
        <ul>
          {allRecipesData.map(({ id, date, title }:Record<string, string>) => (
            <li key={id}>
              <Link href={`/recipes/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
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