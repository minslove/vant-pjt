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
  <van-cell center title="title" class="swich-panel">
    <template #right-icon>
      <van-switch v-model="checked" />
    </template>
  </van-cell>
</template>

<style>
.swich-panel {
    padding: 1.2rem 0;
}
.van-cell__title {
    font-size: 1.5rem;
    color: var(--color-heading);
    margin-left: 2.4rem;
}
.van-switch {
    font-size: 2.4rem;
    background: #E6E6E6;
    margin-right: 2.4rem;
}
.van-switch--on {
    background: #FFE300;
}
.van-cell:after {
    left: 0;
    right: 0;
    border-bottom-color: #ddd;
}
</style>
