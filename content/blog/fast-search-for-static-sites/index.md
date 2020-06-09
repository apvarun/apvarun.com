---
title: "Fast Search for Static Sites (JAMStack)"
date: "2020-06-07"
excerpt: ""
coverImage: "/blog/jamstack-search.png"
---

## The JAMStack revolution is already here!

If you are into frontend, you might have already heard about this, The JAMStack. From the time [Netlify](https://netlify.com) popularized the concept and with the push from the [Gatsby](https://www.gatsbyjs.org/) community, people have started using this extensively. This is nice considering the benefits that come along.

- ✔️ Faster Page loading
- ✔️ No more server-side rendering (no need to maintain FE setup)
- ✔️ Developer Experience

Overall, it is an advancement to the entire web, reaching far more countries and devices.

### Ok. So?

I've built a bunch of JAMStack sites (mostly for fun, some for work) using various tools and frameworks like Gatsby, Sapper, Hugo, VuePress and more. Among those sites, only a few actually conceptualize JAMStack's potential. I mean, anyone can build a 5 page website with just HTML, CSS and maybe a bit of JS. We did that for years without any of the tools that we have at our disposal.

In this article, let's uncover more about a crucial part of any large website ▶️ `SEARCH` ◀

I explored most of the things stated below while I was building [Confs.space](https://confs.space) over a few weekends.

How is this site different? Let's take a look at the stats:

- 📺 Hosts 120+ Conferences
- 🎤 3000+ talks
- 🖨 Generates 4000+ Pages

The above metric is something to keep in mind while we go over the topic.

## Adding Search

When you have a site that has so much content, it is important to provide the ability to find what the user is interested in. And search is a quick and accustomed way of doing so.

With this thought, I started looking at how I can do it effectively as there is so much data.

Tech stack and the considerations before implementing search:

- → Hugo static site generator (template based)
- → JavaScript, for few operations like persisting darkmode, toggling menu, etc.
- → Hosted on Vercel's `now` (Brings in the possibility of having a serverless function)
- → Content is stored as markdown files
- → Performance should not degrade (this is personal 😛)

## Available Options

With all this in mind, the most obvious thought was that it might need some form of backend setup to have an effective search. I've also heard about [Algolia](https://www.algolia.com), which offers site-wide discoverability services.

At the same time, I explored options for some form of client side search as well.

### Breaking it down

Let's breakdown the things that would be required for each of the options.

**Option 1:** Custom Backend

a) Require to setup the entire flow, reading data from repository to searching it effectively

b) Need separate hosting (Serverless might not make the cut when there is a cold start)

c) Full customizability - total control over the implementation

d) Maintenance effort

**Option 2:** Third-party services

a) Setup some CI like Github Actions to update committed data to third-party's index for the site

b) Searching would involve API calls to the third-party service

c) Add custom javascript code to the site (usually adds between 25kb and 75kb of additional JS on load)

d) No need to worry about scaling (this is probably the reason third-party search providers exists)

e) Cost

**Option 3:** Client-side search

I came across two contenders for client-side search: [Lunr](https://lunrjs.com) and [Fuse.js](https://fusejs.io).

a) Requires a search index to be generated - either during runtime or build time (pre-computed index)

b) Effectiveness depends on the library - mostly does fuzzy search

c) No additional API calls (for any number of searches), can make the search feel quick (UX)

d) Adds ~10kb additional load to the page

## Implementation

Finally, I decided to go with a client side implementation as it's of least effort. Also, with hugo, generating additional file(s) for the index is a breeze (just adds a few milliseconds to the build).

In the first version of search for `confs.space`, I decided to go with [Lunrjs](https://lunrjs.com/guides/index_prebuilding.html). It was quite straight forward to implement as the index only includes a bunch of JSON objects with fields required for the search.

Added the following lines for generating the index:

```
{{- $.Scratch.Add "index" slice -}}
{{- range where .Site.Pages ".Params.template" "==" "talk" -}}
{{- $.Scratch.Add "index" (dict "title" .Title "ref" .Params.url "tags" .Params.tags) -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

For confs.space, in order to allow for searching videos, I needed to include all talks to the search index. The above code adds the title and tags of the videos for providing appropriate suggestions.

> Scratch in Hugo is much like a state. The content is added to the state as `dict`, then JSON stringified and added to the page.

### But..

Although I set it up quickly, there were issues with fuzzy search. Even after exhausting combinations, I was not able to get accurate results. It seemed to have an issue with field weights.

So, I decided to try [Fuse.js](https://fusejs.io). It didn't require any change for the index generation. Only the JS code had to be changed. As I hoped, the search was perfect.

PS: Fusejs is lighter than lunr, just ~4Kb.

## Optimization

Now that the functionality is as expected, I wanted to improve the user experience.

You might wonder what more can be improved. Surprisingly, there are some crucial things to consider.

### 1 - Size of the index

Since there are a huge number of videos, the size of the generated index is quite large. Loading this index for all the users would result in an overhead.

**Fix:** Since the index is required only for the users who perform the search, the index is only loaded when the search field is in focus. The index is then used to initialize Fuse.

**Improvement:** It is possible to split the index into multiple smaller indices based on categories. Doing so will enable users to search with a specific category while loading smaller data.

### 2 - Search page

By moving the search to client side, there is no way of indexing search pages (since the results are dynamic). Because of this, the search results need to be loaded without any delay in UI. [Easy if the page was pre-rendered]

**Partial Fix:** For now, I haven't added any pagination for searches and limited the search results to be a maximum of 30 videos in length. And this result is then dynamically added/modified in the DOM (not quite ideal in the virtual DOM world but gets the job done).

Since the index is already loaded, the search experience feels quite snappy (try at [Confs.space](https://confs.space)).

## To Conclude

> Client-side search is actually considerable for JAMStack sites based on the scale

For [Confs.space](https://confs.space), I might have to look at a different solution as site's content increases, next step being [splitting of index](#1---size-of-the-index) into smaller chunks.

I'll soon be making the source of confs.space open and so I'd be able to use Algolia under its open source initiative.

*If you have any questions or suggestions, I'd love to hear them.*

---

**Disclaimer:** The article in no way is opposing the use of Lunr. It's just that I had troubles with getting it to work.

