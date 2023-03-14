import ExternalLink from '../components/atoms/ExternalLink';
import Header from '../components/atoms/Header';
import NavbarLogo from '../components/molecules/NavbarLogo';
import Profile from '../components/organisms/Profile';
import BulletPointList from '../components/molecules/BulletPointList';
import TechSkills from '../components/organisms/TechSkills';
import copy from '../copy/copy.json';
import styles from './styles/Resume.module.css';

const ContactMeBody = () => (
  <div className={styles.contactBody}>
    Through <ExternalLink className={styles.blueLink} href={copy.links.linkedin}>LinkedIn</ExternalLink> or <ExternalLink className={styles.blueLink} href={copy.links.emailLink}>Email</ExternalLink>. Based in London.
  </div>
);

const Resume = () => {
  return (
    <>
      <NavbarLogo title={copy.resume.pageTitle}/>
      <Profile />
      <Header>{copy.resume.contactHeading}</Header>
      <ContactMeBody />
      <TechSkills />
      <BulletPointList title={copy.resume.experienceHeading} list={copy.resume.experience} />
      <BulletPointList title={copy.resume.educationHeading} list={copy.resume.education} />
      <BulletPointList title={copy.resume.certificationsHeading} list={copy.resume.certifications} />
    </>
  );
};

export default Resume;