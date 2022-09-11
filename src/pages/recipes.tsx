import type { NextPage } from 'next';
import Link from 'next/link';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import SplashText from '../components/molecules/SplashText';
import { getSortedRecipesData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';

const Recipes: NextPage<Record<string, any>> = ({ allRecipesData }) => {
  return (
    <>
      <div className={styles.container}>
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