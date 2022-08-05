import type { NextPage } from 'next';
import styles from './styles/Index.module.css';

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1> Hey, my name is Fran </h1>
      <p> I&apos;m a software engineer who loves to build stuff. I also like cooking. </p>
      <h2> Blog </h2>
    </div>
  );
};

export default Index;
