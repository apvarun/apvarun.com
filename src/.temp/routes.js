export default [
  {
    path: "/blog/firebase-graphql-engine-auth",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/gravity/github/apvarun.com/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gravity/github/apvarun.com/src/pages/Index.vue")
  },
  {
    path: "/work",
    component: () => import(/* webpackChunkName: "page--src--pages--work-vue" */ "/Users/gravity/github/apvarun.com/src/pages/Work.vue")
  },
  {
    path: "/blog/2018-year-goals",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/gravity/github/apvarun.com/src/pages/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/firebase-react-optimizing-for-the-real-world",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/migrating-to-webpack-4-today",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/lets-talk-about-css-subgrids",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/start-using-parcel-bundler",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gravity/github/apvarun.com/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/gravity/github/apvarun.com/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/gravity/github/apvarun.com/node_modules/gridsome/app/pages/404.vue")
  }
]

