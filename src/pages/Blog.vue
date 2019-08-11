<template>
  <Layout>
    <h1 class="page-heading">Blog</h1>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      <Pager :info="$page.allPost.pageInfo" :linkClass="'page-link'"/>
    </section>
  </Layout>
</template>

<page-query>
query Blog($page: Int) {
  allPost(perPage: 5, , page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D MMMM YYYY")
        path
        excerpt
        featuredImage
      }
    }
  }
}
</page-query>

<script>
import PostList from "../components/PostList"
import { Pager } from 'gridsome'

export default {
  components: {
    PostList,
    Pager
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
.page-link {
  padding: 10px 20px;
  margin: 2px 5px;
  border-radius: 2px;
  border: 1px solid #F0F0F0;
  text-decoration: none;
  transition: 200ms ease-in all;
}
.page-link.active, .page-link:hover {
  background-color: #F0F0F0;
  color: black;
}
nav {
  text-align: center;
}
</style>