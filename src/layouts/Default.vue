<template>
  <div class="layout-container">
    <NavBar />
    <div class="layout">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style scoped>
.layout {
  max-width: 960px;
  margin: 4rem auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
