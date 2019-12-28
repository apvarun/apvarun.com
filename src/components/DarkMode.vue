<template>
  <div
    class="icon"
    v-on:click="toggleMode"
    v-bind:title="darkModeEnabled ? 'Disable Dark Mode' : 'Enable Dark Mode'"
  >
    {{ darkModeEnabled ? '☀️' : '🌑' }}
  </div>
</template>

<script>
export default {
  data: () => ({
    darkModeEnabled: process.isClient
      ? window.matchMedia('(prefers-color-scheme: dark)').matches || false
      : false,
  }),
  methods: {
    enableDarkMode: function() {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('nodark')
      localStorage.setItem('mode', 'dark')
      this.darkModeEnabled = true
    },
    disableDarkMode: function() {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('nodark')
      localStorage.setItem('mode', 'light')
      this.darkModeEnabled = false
    },
    toggleMode: function() {
      console.log(this.darkModeEnabled)
      if (this.darkModeEnabled) {
        this.disableDarkMode()
      } else {
        this.enableDarkMode()
      }
      console.log(this.darkModeEnabled)
    },
  },
  beforeMount: function() {
    if (localStorage.getItem('mode') === 'dark') {
      this.enableDarkMode()
    }
  },
}
</script>

<style>
.icon {
  padding: 0 10px;
  font-size: 1.6rem;
  cursor: pointer;
  user-select: none;
}
@media only screen and (max-width: 480px) {
  .icon {
    padding: 0 5px;
  }
}
</style>
