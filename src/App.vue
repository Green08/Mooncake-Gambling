<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    document.title = '中秋博饼'
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #0f496f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
