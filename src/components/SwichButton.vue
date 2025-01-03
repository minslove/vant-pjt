<script lang="ts">
  import { ref } from 'vue'
  import { Switch, Cell } from 'vant'

  export default {
    components: {
      [Cell.name]: Cell,
      [Switch.name]: Switch,
    },
    setup() {
      const checked = ref(true);
      return { checked };
    },
  };
</script>

<template>
  <van-cell center title="Title">
    <template #right-icon>
      <van-switch v-model="checked" />
    </template>
  </van-cell>
</template>

<style></style>
