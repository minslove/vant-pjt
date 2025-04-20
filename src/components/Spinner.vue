<template>
  <div class="spinner">
    <img src="../assets/images/spinner.gif" alt="Loading..." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingSpinner',
})
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
  }
}
</style>
