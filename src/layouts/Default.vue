<template>
  <fragment>
    <NavBar />
    <div class="layout">
      <slot/>
    </div>
    <Footer />
  </fragment>
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

<style>
.layout {
  max-width: 760px;
  margin: 4rem auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
