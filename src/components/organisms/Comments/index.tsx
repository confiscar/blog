import Giscus from '@giscus/react';
import styles from './Comments.module.css';

const Comments = () => (
    <div className={styles.comments}>
        <Giscus
            id="comments"
            repo="confiscar/comments"
            repoId="R_kgDOJCVULg"
            category="Announcements"
            categoryId="DIC_kwDOJCVULs4CUdWg"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
        />
    </div>
);

export default Comments;
