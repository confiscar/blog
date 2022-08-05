import type { NextPage } from 'next';
import styles from './styles/Index.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1> About </h1>
      <p> Here&apos;s a copy of my CV, and a link to my github (this page is on there).</p>
      <p> I&apos;m currently working as a web engineer at Capital One. Important to note that any opinions on this site are mine alone.</p> 
      <p> You can contact me through email at franciscoc224@[insert google email service].com</p>
    </div>
  );
};

export default About;
