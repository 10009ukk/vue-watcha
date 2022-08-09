<template>
  <watcha-layout>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contents">About</router-link>
    </nav>
    <router-view/>
  </watcha-layout>
</template>

<script>
import WatchaLayout from './layout/index.vue'

export default {
    components: {
      WatchaLayout
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
