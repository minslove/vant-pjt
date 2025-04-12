<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>타이틀</h1>
      </nav>
    </div>
    <div class="item-list">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/atom">Atom</RouterLink>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid var(--color-border);
  .wrapper {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    nav {
      h1 {
        font-weight: 700;
        color: var(--color-heading);
      }
    }
  }
  .item-list {
    position: absolute;
    right: 10px;
    top: 17px;
  }
  a {
    font-size: 1.2rem;
    margin-left: 5px;
  }
}
</style>
