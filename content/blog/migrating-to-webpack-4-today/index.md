---
title: "Migrating to Webpack 4 today"
date: "2018-07-26"
excerpt: "Today, I made a switch to Webpack 4 from version 3 for a project I am working
on. And my first impression? Its definitely fast! Here are the changes I made for the switch."
coverImage: 
---

![](https://cdn-images-1.medium.com/max/1500/1*oJj7VCITmRw4VLRm_ud8Sw.png)

Today, I made a switch to Webpack 4 from version 3 for a project I am working
on. And my first impression?** Its definitely fast!**

The change brought down my build time from 13s to 7s, which is more than **40%
reduction**.

![](https://zippy.gfycat.com/UncomfortableHonoredAmericanwarmblood.gif)

In the process, I did have some hiccups which I would be discussing below.
Before getting to it, let me just go over the new additions to webpack in
version 4 that actually matters.

**1. Speed** — The entire webpack community has been drooling over this. Version
4 drastically reduces the build time for any kind of projects.

If you are already excited, don’t wait. Here is what you need to do.😁

`yarn add webpack webpack-cli --dev`

**2. Zero Configuration** — Webpack now comes with defaults for entry and
output, which helps in using the bundler with no config file.

The default entry point is **./src/index.js**. Create a file there and you are
ready to go. The output files are emitted to **./dist**.

**3. Modes** —Introduced to improve the default bundle outputs. There are two
types of modes (development and production) which can be passed as props when
running webpack.

> The development mode is optimized for build time where as the production mode
> optimizes the output bundles.

The webpack 4 also has support for WebAssembly and Module Types

---

Without further due, here are the steps I followed for migration.

### Upgrading the version

You need to upgrade the webpack version using the package manager of your
choice.

`yarn add webpack webpack-cli --dev`

If you already have a lock file, you need to use **yarn upgrade** to update
the version.

In case you are wondering why webpack-cli package is required, v3 adds this
package automatically. With version 4, the cli is a separate package which you
can install manually. It is responsible for adding the command line support for
webpack.

### Mode

As I mentioned earlier, from version 4, it is necessary to specify the mode
explicitly for running webpack. Otherwise you would end up with this.

![](https://cdn-images-1.medium.com/max/1600/1*sSG5Rew_lLbdVALxJv73Ww.png)

Specify the mode as production or development for the scripts that run webpack
in your package.json file.

Alternatively, you can specify the same in your webpack config file by setting
the mode option.

`webpack --mode development / webpack --mode production`

**There is a ‘none’ mode as well just in case you don’t want to use the default
configurations.**

### Plugins

— The **html-webpack-plugin** that you are using(most probably) isn’t compatible
with version 4.

The plugin developers have already added support and so you can pull in the same
from NPM. The latest version at the time of writing this post (version 3.1.0)
works like a charm.

— **extract-text-webpack-plugin**? Sorry to say, I was not able to get it to
work with webpack 4.

Fortunately, there is **mini-css-extract-plugin** which is maintained by the
Webpack team that can help you extract CSS to a separate file(s).

`yarn add -D mini-css-extract-plugin`

---

With these changes, I was able to spin up the development server and everything
worked well.

Great. Let me check the production build. What could go wrong with it after all?

And then I get this.

![](https://cdn-images-1.medium.com/max/1600/1*iwNBW_atJCvauSSvW2Sd6g.png)

🙄

---

The **UglifyJsPlugin** for production builds had to be moved from plugins to
optimization in the config. Here is how I refactored it:

![Using UglifyJs plugin with Webpack 4](https://cdn-images-1.medium.com/max/1600/1*XX8FrHPb6DWPX1Vnpb02kg.png)

#### Quick note:

In case you are using the **CommonsChunkPlugin plugin**, it has been deprecated.
But, there is a built-in replacement in Webpack 4.

You can use the **optimization.splitChunks** API to generate shared chunks. And
it is also enabled by default. It allows you to specify configurations if you
have multiple endpoints in your application.

---

Yay, I was finally able to move my project to Webpack 4.🙌

### The future ?

This release of webpack is just a step towards a much better and faster bundler.
Things like multi-threading, persistent caching, HTML entry points etc [are
coming](https://twitter.com/TheLarkInn/status/965112759854641153) in version 5
of webpack.

What is in it for us? Just focus on your application logic ✌️ and let webpack
sweat it.😉

Originally published at [codeburst.io](https://codeburst.io/migrating-to-webpack-4-today-d564b453a3ba5) on Mar 24, 2018.
