---
title: "Creating a blog in Next.js"
subtitle: "And what I would do differently"
# Really important that this is in exactly the format 
# YYYY-MM-DD due to how we sort the dates
date: "2022-11-13"
---

> **TL;DR** *Meta-frameworks are good for quickly bringing up an idea, at the cost of delegating some design decisions. Svelte could have been a way to achieve faster speeds, but I don't really regret it. And using (mostly) vanilla CSS can become a mess quickly if not managed well, calls for using some more high-level libraries like tail-wind to simplify this process.*

Throughout this year it was my mission to create a blog, as a challenge to compile all the knowledge I gained doing web development, as well as to create a place to express myself. 

Here are a few things I learnt along the way:

# Figma

Honestly such an awesome tool. [Figma](https://www.figma.com/) is a browser-based UI design tool that really made it easy for me to mock something up for my blog. A [25-min youtube tutorial](https://www.youtube.com/watch?v=FTFaQWZBqQ8) combined with some previous knowledge of design using Illustrator and Photoshop, sent me on my way to being comfortable with starting to design the different pages I had in mind. 

![Figma example](/images/posts/2021-02-02-nextjs-blog/figma-example.png)

This was my first time designing a UI, there's obviously a ton of things I could have done better. 

I think one of the main ones would be to think about accessibility a little more, taking account contrast and font sizes. All-in-all, I'm happy with it, and would 100% recommend Figma.

# Next.js

Finding the right meta-framework that I wanted to work with was difficult, as there were a lot of pros and cons to take into account. Did I need a meta-framework?

One can argue that probably not, realistically I could have done this in vanilla js, but I wanted to use this blog as a way of learning about meta-frameworks. I've never used a one, CRA being the closest thing to one that I've used. Svelte with no meta-kit on top seems like a decent alternative to programming vanilla, offering speed and DX at the cost of some minimal overhead.

The decision was between SvelteKit and Next.js. They both roughly do the same thing, SvelteKit offering a little bit more speed out of the box, at the cost of not being part of the React ecosystem. They both are also strongly opinionated about different things.

I ended up using Next.js for a couple of reasons:
* Already knew React
* Larger ecosystem 
* Really nice tutorials on markdown blogs readily available
* Somewhat speedier than just using React

# What would I have done differently?

I think the main thing I'm regretting right now is not using something like [tail-wind](https://tailwindcss.com/) or some CSS-in-JS library for organising my css files. 

One thing I didn't do a lot at work was CSS, so it was more of a challenge to find out what the pain points in working with vanilla CSS was. I still opted to use CSS modules to have *some* type of scoping, but I still found it somewhat messy having `.module.css` files thrown all over the place.