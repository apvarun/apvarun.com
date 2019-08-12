<template>
  <Layout>
    <g-link to="/blog" class="back-link">← Back to all posts</g-link>
    <h2 class="title">{{$page.post.title}}</h2>
    <p class="sub-text">Published in {{$page.post.date}} | {{$page.post.timeToRead}}-minute read</p>
    <div class="postContent" v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    date(format: "MMMM YYYY")
    timeToRead
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
.postContent {
  max-width: 100%;
}
.back-link {
  text-decoration: none;
  color: #757575;
}
.back-link:hover {
  color: black;
}
.title {
  margin-bottom: 0;
}
.sub-text {
  margin: 0 0 2rem;
  color: #757575;
}
</style>