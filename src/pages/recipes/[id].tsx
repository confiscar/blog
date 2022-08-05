import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllRecipeIds, getRecipeData } from '../../lib/dynamicPosts';
import  Date from '../../components/atoms/Date';

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return {
            props: {},
        };
    };

    const recipeData = await getRecipeData(params.id);
    return {
        props: {
            recipeData,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllRecipeIds();
    return {
        paths,
        fallback: false,
    };
};

const Recipe = ({ recipeData }: Record<string, any>) => {
    return (
        <>
            <h1>{recipeData.title}</h1>
            <br />
            <h1>{recipeData.id}</h1>
            <br />
            <Date dateString={recipeData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
        </>
    );
};

export default Recipe;