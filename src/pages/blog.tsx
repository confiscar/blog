import type { NextPage } from 'next';
import Link from 'next/link';
import SplashText from '../components/molecules/SplashText';
import BackgroundBubble from '../components/molecules/BackgroundBubble';
import { getSortedPostsData } from '../lib/dynamicPosts';
import styles from './styles/Index.module.css';



const Blog: NextPage<Record<string, any>> = ( { allPostsData }) => {
  const getTextRandomly = () => {
    const texts = [
      'Ramblings of my tech journey.',
      'Pick a card, any card.',
      'Tech is cool until you use Jira.',
    ];

    return texts[Math.floor(Math.random() * texts.length)];
  };

  return (
    <>
      <div className={styles.container}>
        <SplashText padding>{getTextRandomly()}</SplashText>
        <ul>
          {allPostsData.map(({ id, date, title }: Record<string, any>) => (
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
