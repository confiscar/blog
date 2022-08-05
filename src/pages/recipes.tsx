import type { NextPage } from 'next';
import Link from 'next/link';
import { getSortedRecipesData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';

const Recipes: NextPage = ({ allRecipesData }) => {
  return (
    <div className={styles.container}>
      <h1> Recipes </h1>
      <p> Here&apos;s a collection of cool recipes I discovered, for your (and my) convenience </p>
      <ul>
        {allRecipesData.map(({ id, date, title }) => (
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