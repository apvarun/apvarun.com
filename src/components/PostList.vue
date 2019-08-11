<template>
  <g-link :to="post.path" class="card-container">
    <div class="post-card">
      <p class="date" v-html="post.date" />
      <h1 class="title" v-html="post.title" />
      <p class="excerpt" v-html="post.excerpt" />
      <span> {{post.timeToRead}} min read </span>  &nbsp;
      <g-link :to="post.path" class="read">→</g-link>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.card-container {
  text-decoration: none;
  color: inherit;
}
.post-card {
  padding: 20px 15px;
  border-radius: 5px;
  /* box-shadow: 0 5px 40px 0 rgba(0,0,0,.04); */
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  margin-bottom: 15px;
  border-bottom: 1px solid #F0F0F0;
}
.post-card:hover {
  box-shadow: 0 5px 40px 0 rgba(0,0,0,.08);
}
/* .line {
  background-color: #F0F0F0;
  border: none;
  height: 1px;
} */
.date {
  margin: 0;
  color: #757575;
}
.title {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>