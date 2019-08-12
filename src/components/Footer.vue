<template>
  <footer class="footer-container">
    <p class="footnote">{{copyrightText}}</p>
  </footer>
</template>

<script>

export default {
  data: () => ({
    copyrightText: 'Built with Vue and Gridsome'
  })
}
</script>

<style scoped>
.footer-container {
  border-bottom: 1px solid var(--lighter);
  margin: 0 auto 20px;
  padding: 10px;
  max-width: 960px;
}
.footnote {
  color: var(--light);
  font-size: 14px;
  margin: 0;
  text-align: right;
}
</style>
