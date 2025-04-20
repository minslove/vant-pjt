<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Spinner from '../components/Spinner.vue'

export default defineComponent({
  components: { Spinner },
  setup() {
    const loading = ref(true)
    const newsData = ref([])

    const fetchData = async () => {
      loading.value = true
      try {
        const response = await fetch('./data/top.json')
        newsData.value = await response.json()
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchData)

    return {
      loading,
      newsData,
    }
  },
})
</script>
<template>
  <div>
    <header>
      <h1>FE POST</h1>
      <p>빠른 프론트엔드 소식</p>
    </header>
    <main class="content">
      <section class="top-news-section">
        <h2>Top News</h2>
        <article id="topNewsList">
          <Spinner v-if="loading" />
          <div v-else>
            <ul>
              <li v-for="news in newsData" :key="news">{{ news.title }}</li>
            </ul>
          </div>
        </article>
      </section>
      <aside>
        <section class="latest-section">
          <h3>최신 글</h3>
          <ul class="latest-news-list">
            <Spinner v-if="loading" />
          </ul>
        </section>
        <section class="support-section">
          <h3>Support</h3>
          <div class="github-support">
            <a>
              <svg viewBox="0 0 16 16" width="16" height="16" class="heart" aria-hidden="true">
                <path fill-rule="evenodd"></path>
              </svg>
              GibHub Sponsors
            </a>
          </div>
        </section>
      </aside>
    </main>
    <footer>fe-post.com &copy; 2020-2021 FE POST</footer>
  </div>
</template>

<style lang="scss" scoped>
header {
  color: #003142;
  text-align: center;
  padding: 10px 50px;
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6;
  }
}
.content {
  display: flex;
  max-width: 1250px;
  margin: auto;
  padding: 50px;
  color: #000000;
  border: 1px solid red;
  .top-news-section {
    width: 75%;
    padding: 10px;
    h2 {
      font-size: 36px;
    }
  }
  aside {
    width: 25%;
    margin: 10px;
    padding: 20px;
    border-left: 1px solid #5a6268;
  }
}
footer {
  text-align: center;
  padding-bottom: 50px;
  color: #969696;
}
</style>
