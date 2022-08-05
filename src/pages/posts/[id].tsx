import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '../../lib/dynamicPosts';
import  Date from '../../components/atoms/Date';

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
            <h1>{postData.title}</h1>
            <br />
            <h1>{postData.id}</h1>
            <br />
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </>
    );
};


export default Post;