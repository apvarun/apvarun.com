---
title: "Firebase + React : Optimizing For The Real World"
date: "2018-07-25"
featuredImage: "https://cdn-images-1.medium.com/max/2000/1*h-xRzZOCHk8jTlEa8M42GA.png"
---

I started off to build a small web app that showcases the career paths of
developers. As I love the approach React takes for the DOM, it was my only
choice of framework.

For the data part, I decided to use Google’s Firebase. So the structure was
simple. Retrieve the current data from Firebase and display it accordingly using
React.

![](https://cdn-images-1.medium.com/max/2000/1*h-xRzZOCHk8jTlEa8M42GA.png)

I did achieve what I planned but then, something was just not right. The app’s
bundle size was **1.7MB**.

Definitely not right for such a simple app that performs only GET.

And I decided to investigate. From inspecting the packages to finding better
replacements, I was able to reduce my app size from **1.7MB to just 230KB** (_~135KB GZipped_).

Here is what I did.

### Switching to Preact

> [Preact](https://preactjs.com/) is a fast 3kB alternative to React with the same
> ES6 API.

I switched from using React to Preact as both are built using the same concept
of virtual DOM. Since, preact is inspired by react, it is more optimal in using
the DOM. It also has a smaller DOM abstraction layer, making the processing
faster.

As I was using **react-router** to handle url routes, I had to add preact’s
version of the routing component — **preact-router**.

If you are using any other react-dependent libraries, there is **preact-compat**
for you. Preact-compat provides you the API mapping from react to preact.

![](https://cdn-images-1.medium.com/max/1600/1*AUVI8UddvYs-pIpWQ-p7-g.png)

This is my configuration. There is **preact-motion** for to add smooth
transitions and animations as well.

### Using Bundle Analyser

Webpack’s bundle analyser is a great tool to check which package consumes more
space in your bundle.

Chris Bateman’s [Bundle
visualizer](https://chrisbateman.github.io/webpack-visualizer/) can help you
view the webpack stats online.

![](https://cdn-images-1.medium.com/max/1600/1*suUCxct0qIOWySnZf7BD7g.png)

Since I am using Firebase for the webapp, I was using their package installed
via npm.

Know it or not, **Firebase package comes at a huge cost**. It contains
interfaces for all the components that firebase offers, such as database,
storage, cloud functions and more.

As I used only the database from firebase, I modified my import to add only the
firebase-app (code) and firebase-database.

By this time, the bundle size reduced from 1.7MB to 1.1MB.

But that was definitely not enough. And that’s when I started looking at webpack
configurations.

### WebPack Configuration

I added the webpack uglify plugin to cut down on unwanted modules and dead code.

The **webpack.optimize.UglifyJsPlugin** did a pretty neat trick.

In addition to this, I also incorporated the compression plugin for to enable
GZip compression for text files.

![](https://cdn-images-1.medium.com/max/1600/1*2CdlVfV1NWiENNtP3Yfq2w.png)

Even after all this, the bundle size was still at **900KB**.

Firebase was still occupying the major part of the bundle.

### Cloud Functions

It was time I realized that I should drop firebase and go with something linear.
But I was not able to find something better and as simple to use.

Meanwhile, I started to explore about cloud functions that firebase announced in
Google IO 2017.

![](https://cdn-images-1.medium.com/max/2000/1*cnQ9z3c2LsR_HRCKrAq52w.png)

As it was coupled with other firebase services, I could get data from the
realtime database and provide it as a rest API.

A simple node function did the trick.

I was able to get data from the **realtime database via an API**. I also added
cache headers so that I don’t need to run the function on every request.

Response headers were also added to prevent the CORS issues.

Now, I could completely cut off firebase module from my bundle. I added
superagent for faster AJAX calls.

**— The bundle size dropped drastically to less than 300KB.**

But there was one major issue that I had to take care of.

![First render time](https://cdn-images-1.medium.com/max/2000/1*owLzejf9Ron1ahjJjxAi8A.png)

This was completely insane considering that the entire page size along with data
is only **300KB**.

### PureComponent

PureComponent does shallow comparison to decide if the component has to be
re-rendered or not. It ignores the changes inside props or state.

![](https://cdn-images-1.medium.com/max/1600/0*ddMH8PWupfklcnpN.gif)

I updated certain components to be pure as multiple renders were not required.

Luckily, PureComponent is also supported by Preact, with some help from
preact-compat.

— _Yet, the data in the page took a long time to process and render._

### Network Logs

I started examining all the individual steps performed before the data is
rendered properly.

To my surprise, the API hosted with cloud functions was the cause.

![Response from Cloud Function API](https://cdn-images-1.medium.com/max/2000/1*tda0rbzNBnUE_Ggy7V6xTQ.png)

The response from the cloud function took** 4.33 seconds for to receive the
first byte**. And it explained why the first meaningful paint was delayed.

After much reading, I found that cloud functions would be suspended if there was
no activity for a period of time. So if I were to invoke the function once in a
while (_like once in 6 hrs_), then every time it would take as much time to get
the data.

_**Side note:** I think Cloud functions on Firebase is not production ready at this moment._

Finally, I ended up using the [Firebase REST
API](https://firebase.google.com/docs/reference/rest/database/) directly.

By this time, my bundle size has dropped a whooping **92%**, **from 1.7MB to
~135KB GZipped**.

![](https://cdn-images-1.medium.com/max/1600/1*oUpuQ8-HugfkQLDZpMfJ_A.gif)

I was able to get some good scores with Lighthouse as well.

![](https://cdn-images-1.medium.com/max/1600/1*S97ggBFOY0Cz27_KEMVtwg.png)

That’s it! 👍

Originally published at [codeburst.io](https://codeburst.io/firebase-react-optimizing-for-the-real-world-4d9edbbd54c5) on Sep 10, 2017.
