<template>
  <g-link :to="post.path" class="card-container">
    <div class="post-card" v-bind:class="{ fullWidth: !post.featuredImage }">
      <g-image v-if="post.featuredImage" v-bind:src="post.featuredImage" v-bind:alt="post.title"/>
      <div>
        <p class="date" v-html="post.date" />
        <h1 class="title" v-html="post.title" />
        <p class="excerpt" v-html="post.excerpt" />
        <span> {{post.timeToRead}} min read </span>  &nbsp;
        <g-link :to="post.path" class="read">→</g-link>
      </div>
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
  border-bottom: 1px solid var(--lighter);
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
}
.post-card.fullWidth {
  grid-template-columns: 1fr;
}
.post-card:hover {
  box-shadow: var(--default-box-shadow);
}
/* .line {
  background-color: var(--lighter);
  border: none;
  height: 1px;
} */
.date {
  margin: 0;
  color: var(--light);
}
.title {
  margin-top: 0;
  margin-bottom: 10px;
}
img {
  min-height: 200px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media only screen and (max-width: 480px) {
  .post-card {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  img {
    width: auto;
    height: auto;
    min-height: auto;
  }
}
</style>