<template>
  <Layout>
    <h1 class="page-heading">Blog</h1>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D MMMM YYYY")
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import PostList from "../components/PostList"

export default {
  components: {
    PostList
  },
  metaInfo: {
    title: 'Blog - Varun A P'
  }
}
</script>

<style scoped>
.page-heading {
  text-align: center;
  margin: 5rem;
}
</style>