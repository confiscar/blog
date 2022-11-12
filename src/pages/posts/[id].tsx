import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '../../lib/dynamicPosts';
import  Date from '../../components/atoms/Date';
import styles from './posts.module.css';

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return {
            props: {},
        };
    };

    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

const Post = ({ postData }: Record<string, any>) => {
    return (
        <>
            <h1 className={styles.postTitle}>{postData.title}</h1>
            {postData.subtitle && <h2 className={styles.postSubtitle}>{postData.subtitle}</h2>}
            <br />
            <div className={styles.postDate}>
                <Date dateString={postData.date} />
            </div>
            <br />
            <div className={styles.postContainer}>
                <div className={styles.post} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </>
    );
};


export default Post;