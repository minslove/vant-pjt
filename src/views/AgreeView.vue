<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const sections = ref([
      { title: '섹션 1', content: '첫 번째 섹션입니다.' },
      { title: '섹션 2', content: '두 번째 섹션입니다.' },
      { title: '섹션 3', content: '세 번째 섹션입니다.' },
      { title: '섹션 4', content: '네 번째 섹션입니다.' },
      { title: '섹션 5', content: '다섯 번째 섹션입니다.' },
    ])

    const currentIndex = ref(0)
    const currentHeader = ref(sections.value[0].title)
    const sectionRefs = ref<HTMLElement[]>([])

    const nextSection = () => {
      if (currentIndex.value < sections.value.length - 1) {
        currentIndex.value++
        scrollToSection(currentIndex.value)
      }
    }

    const scrollToSection = (index: number) => {
      const section = document.getElementById(`section-${index}`)
      section?.scrollIntoView({ behavior: 'smooth' })
    }

    const observeSections = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = sectionRefs.value.findIndex((el) => el === entry.target)
              currentHeader.value = sections.value[index].title
            }
          })
        },
        { threshold: 0.5 },
      )

      sectionRefs.value.forEach((section) => observer.observe(section))
    }

    onMounted(() => {
      sectionRefs.value = Array.from(document.querySelectorAll('section'))
      observeSections()
    })

    return { sections, nextSection, currentHeader }
  },
})
</script>

<template>
  <div class="container">
    <header class="fixed-header">{{ currentHeader }}</header>
    <section
      v-for="(section, index) in sections"
      :key="index"
      :id="'section-' + index"
      ref="sections"
    >
      <h2>{{ section.title }}</h2>
      <p>{{ section.content }}</p>
    </section>
    <button @click="nextSection">다음 섹션</button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.fixed-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #003142;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
}
</style>
