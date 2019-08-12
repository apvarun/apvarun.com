<template>
  <div
    class="icon"
    v-on:click="toggleMode"
    v-bind:title="darkModeEnabled ? 'Disable Dark Mode': 'Enable Dark Mode'">
    {{ darkModeEnabled ? '☀️': '🌑' }}
  </div>
</template>

<script>
export default {
  data: () => ({
    darkModeEnabled: false,
  }),
  methods: {
    enableDarkMode: function(){
      document.documentElement.classList.add('dark')
      localStorage.setItem('mode', 'dark')
      this.darkModeEnabled = true
    },
    disableDarkMode: function(){
      document.documentElement.classList.remove('dark')
      localStorage.setItem('mode', 'light')
      this.darkModeEnabled = false
    },
    toggleMode: function() {
      if (this.darkModeEnabled) {
        this.disableDarkMode()
      } else {
        this.enableDarkMode()
      }
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