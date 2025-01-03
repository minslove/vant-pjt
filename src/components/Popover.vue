<script lang="ts">
  import { ref } from 'vue';
  import { Popover, Button } from 'vant';

  export default {
    components: {
      [Popover.name]: Popover,
      [Button.name]: Button,
    },
    setup() {
      const showPopover = ref(false);
      const actions = [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ];

      return {
        actions,
        showPopover,
      };
    },
  };
</script>

<template>
  <van-popover
  v-model:show="showPopover"
  :actions="actions"
  actions-direction="horizontal"
>
  <template #reference>
    <van-button type="primary">Tooltip</van-button>
  </template>
</van-popover>
</template>

<style></style>
