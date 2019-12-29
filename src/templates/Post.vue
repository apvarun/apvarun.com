<template>
  <Layout>
    <fragment>
      <g-link to="/blog" class="back-link">← Back to all posts</g-link>
      <h2 class="title">{{ $page.post.title }}</h2>
      <p class="sub-text">
        Published in {{ $page.post.date }} | {{ $page.post.timeToRead }}-minute
        read
      </p>
      <div class="postContent" v-html="$page.post.content" />
    </fragment>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    date(format: "MMMM YYYY")
    timeToRead
    excerpt
    fileInfo {
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title + " - Varun's Blog",
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.excerpt,
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title + " - Varun's Blog",
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.excerpt,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://apvarun.com/' + this.$page.post.fileInfo.path,
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.post.title + " - Varun's Blog",
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: this.$page.post.excerpt,
        },
        {
          key: 'twitter:url',
          property: 'twitter:url',
          content: 'https://apvarun.com/' + this.$page.post.fileInfo.path,
        },
      ],
    }
  },
}
</script>

<style scoped>
.postContent {
  max-width: 100%;
}
.back-link {
  text-decoration: none;
  color: var(--light);
}
.back-link:hover {
  color: var(--text-color);
}
.title {
  margin-bottom: 0;
}
.sub-text {
  margin: 0 0 2rem;
  color: var(--light);
}
</style>
