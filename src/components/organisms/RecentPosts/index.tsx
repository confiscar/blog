import RecentPostCard from '../../molecules/RecentPostCard';
import style from './RecentPosts.module.css';

const RecentPosts = () => (
    <div className={style.RecentPostsContainer}>
        <p className={style.RecentPostsHeader}>Recent</p>
        <RecentPostCard
            title="Brief Introduction to React"
            date="August 02, 2022"
        />
    </div>
);

export default RecentPosts;