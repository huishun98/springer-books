<template>
  <div class="app">
    <Books />
  </div>
</template>

<script>
import Books from './components/Books.vue'

export default {
  name: 'App',
  components: {
    Books
  }
}
</script>

<style>
:root {
  --default-font-size: 14px;
  --dark-color: #343a40;
  --default-box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.25);
}
html {
  scroll-behavior: smooth;
}
.app {
  font-size: var(--default-font-size);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a:hover, .no-dec:hover {
    text-decoration: none;
}
.btn-circle path {
    fill: var(--dark-color);
}
</style>
