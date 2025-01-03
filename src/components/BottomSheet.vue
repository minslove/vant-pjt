<script lang="ts">
  import { ref } from 'vue'
  import { Button, Popup } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Popup.name]: Popup,
    },
    setup() {
      const showBottom = ref(false)
      const showPopup = () => {
        showBottom.value = true
      }
      return {
        showBottom,
        showPopup,
      }
    },
  }
</script>

<template>
  <van-button type="primary" title="Show popup" @click="showPopup">
    <slot name="month"></slot>
  </van-button>
  <van-popup
    v-model:show="showBottom"
    round
    position="bottom"
    :style="{ padding: '64px', height: '30%' }"
    >Content</van-popup
  >
</template>

<style></style>
