---
title: "Github powered comment section" 
subtitle: "Using Giscus!"
# Really important that this is in exactly the format 
# YYYY-MM-DD due to how we sort the dates
date: "2023-03-20"
---

> TL;DR Using giscus to add a comment section to your blog, is great if you need a low maintenance, low complexity solution for a tech-oriented blog.

If you scroll down a little ↓ you'll likely spot that there is a github themed comment section attached to all the posts on this blog. The comment section is powered by [giscus](https://github.com/giscus/giscus), an awesome little script/github bot that turns Gitub Discussions into a sort of database for your comments.

It has its own [React/Svelte component](https://github.com/giscus/giscus-component), which means you literally just have to fill in some fields and create a repo to contain your comments, and you will be good to go.

## Set-up

The component in my repository looks something like this:

```jsx
const Comments = () => (
    <div className={styles.comments}>
        <Giscus
            id="comments"
            repo="<fill-in>/comments"
            repoId="<fill-in>"
            category="Announcements"
            categoryId="<fill-in>"
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
```

To get those values to fill in, you can follow [their guide here](https://giscus.app/). It takes like 2 minutes, and once you fill in the values, it should work straight out of the box.

Visitors will be prompted to allow giscus to post on their behalf, and their comments will be stored in the discussion thread you pointed to. 



 