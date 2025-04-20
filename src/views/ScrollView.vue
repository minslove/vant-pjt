<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const sections = ref([
      { title: '섹션 1', content: '1' },
      { title: '섹션 2', content: '2' },
      { title: '섹션 3', content: '3' },
      { title: '섹션 4', content: '4' },
      { title: '섹션 5', content: '5' },
    ])
    return { sections }
  },
})
</script>

<template>
  <div class="container">
    <button class="pdf">PDF</button>
    <section v-for="(section, index) in sections" :key="index" :id="`section-${index}`">
      <header class="sticky-header">{{ section.title }}</header>
      <div class="content">
        <p>{{ section.content }}</p>
      </div>
    </section>
    <button class="next">next</button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.pdf {
  position: fixed;
  top: 0;
  right: 10px;
  background: red;
  padding: 10px;
  z-index: 2000;
}
.next {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: red;
  padding: 10px;
  z-index: 2000;
}
.sticky-header {
  position: sticky;
  top: 0;
  left: 0;
  background: #003142;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 1000;
}
.content {
  padding: 20px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
