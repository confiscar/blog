import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllRecipeIds, getRecipeData } from '../../lib/dynamicPosts';
import  Date from '../../components/atoms/Date';
import styles from './recipes.module.css';

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
            <h1 className={styles.recipeTitle}>{recipeData.title}</h1>
            <br />
            <div className={styles.recipeDate}>
                <Date dateString={recipeData.date} />
            </div>
            <br />
            <div className={styles.recipeContainer}>
                <div className={styles.recipe} dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
            </div>
        </>
    );
};

export default Recipe;