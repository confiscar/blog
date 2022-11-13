---
title: "Writing a blog in Next.js"
subtitle: "And should you do it?"
# Really important that this is in exactly the format 
# YYYY-MM-DD due to how we sort the dates
date: "2021-02-02"
---

![Svelte vs Next.js](/images/posts/2021-02-02-wrong/New%20Project.jpeg)

# What is Next.js

To put it simply, [Next.js](https://nextjs.org/) is a web framework built on React, specializing in letting you web apps really quickly, taking care of configurations and tooling. It solves problems like static side rendering and page routing for you, which are problems that are quite difficult when tackled alone.

All this together make it a great contender in my mind for a starting point for my blog.

# What I learnt

It honestly was going really smoothly while developing the blog. I mocked up a UI using [Figma](https://www.figma.com/), and started coding away. I only really started noticing the draw backs of using Next.js halfway through the project.

What I learnt was that blogs shouldn't be considered web apps. The reality is, you are not creating a better user experience by making your blog a webapp. Web apps primarily are needed when you have tons of dynamically updating UI elements, or you need to provide a sort of app-like experience, with silkly smooth transitioning between pages.

I started to realise this when I was messing around with [Svelte](https://svelte.dev/). The speed at which these pages I created with Svelte made me double take my choice of using Next.js. I had fell victim to a common pitfall - why are you designing in a framework for web apps if you didn't need a web app in the first place?

Next.js had simply provided me with an easy way of setting up component-based, static website. But it comes with all the bloat of having to build a web app, including the React VDOM and all the mountains and mountains of JS libraries needed to run it. 

# My advice

You really have to think long and hard on whether you truly need a web app experience or not. For most simple pages, you probably won't need that, and are better off using something like Svelte which brings you the power of components without tying you down to a web-app based tooling chain.
