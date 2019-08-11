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
  border-bottom: 1px solid #F0F0F0;
  margin: 0 auto;
  padding: 10px 0;
  max-width: 800px;
}
.footnote {
  color: #757575;
  font-size: 14px;
  margin: 0;
  text-align: right;
}
</style>
