<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>타이틀 은나 1</h1>
      </nav>
    </div>
    <div class="publish-list">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/atom">Atom</RouterLink>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* delete */
nav {
  text-align: center;
}
.publish-list {
  position: absolute;
  right: 0;
  top: 0;
}
a {
  font-size: 1.4rem;
  margin-left: 5px;
}
</style>
