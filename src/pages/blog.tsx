import type { NextPage } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';

const Blog: NextPage = ( { allPostsData }) => {
  return (
    <div className={styles.container}>
      <h1> Recent articles </h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
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

export default Blog;
