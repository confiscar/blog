import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import { allowedHighlightedClasses } from './constants';

const postsDirectory = path.join(process.cwd(), 'posts');
const recipesDirectory = path.join(process.cwd(), 'recipes');

const getDataFunction = (directory: string) => (
    async (id: string | string[] | undefined) => {
        const fullPath = path.join(directory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const processedContent = await unified()
            .use(remarkParse)
            .use(remarkBreaks)
            .use(remarkRehype)
            .use(rehypeSanitize, {
                ...defaultSchema,
                attributes: {
                    ...defaultSchema.attributes,
                    code: [
                        ...(defaultSchema.attributes?.code || []),
                        // List of all allowed languages:
                        ...allowedHighlightedClasses
                    ]
                }
            })
            .use(rehypeHighlight)
            .use(rehypeStringify)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id, 
            contentHtml,
            ...matterResult.data,
        };
    }
);

const getIdsFunction = (directory: string) => (
    () => {
        const fileNames = fs.readdirSync(directory);
        return fileNames.map((fileName) => (
            {
                params: {
                    id: fileName.replace(/\.md$/, ''),
                }
            }
        ));
    }
);

const getSortedDataFunction = (directory: string) => (
    () => {
        const fileNames = fs.readdirSync(directory);
        const allData = fileNames.map((fileName): Record<string, any> => {
            const id = fileName.replace(/\.md$/, '');
            const fullPath = path.join(directory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            return {
                id,
                ...matterResult.data
            };
        });
        return allData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
    }
);

const getAllPostIds = getIdsFunction(postsDirectory);
const getPostData = getDataFunction(postsDirectory);
const getSortedPostsData = getSortedDataFunction(postsDirectory);
const getAllRecipeIds = getIdsFunction(recipesDirectory);
const getRecipeData = getDataFunction(recipesDirectory);
const getSortedRecipesData = getSortedDataFunction(recipesDirectory);

export {
    getAllPostIds,
    getPostData,
    getSortedPostsData,
    getAllRecipeIds,
    getRecipeData,
    getSortedRecipesData
};