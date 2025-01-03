<script lang="ts">
import { ref } from 'vue'
// import { Button, Popup } from 'vant'

export default {
  components: {
    // [Button.name]: Button,
    // [Popup.name]: Popup,
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
    카드값명세서
  </div>
</template>

<style></style>
