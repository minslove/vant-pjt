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
  <div>
    <van-button type="primary" title="Show popup" @click="showPopup">Popup</van-button>

    <van-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ padding: '64px', height: '30%' }"
      >Content</van-popup
    >
  </div>
</template>

<style></style>
