<script lang="ts">
  import { ref } from 'vue';
  import { Tabs, Tab } from 'vant';

  export default {
    components: {
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
    },
    setup() {
      const active = ref(0);
      return { active };
    },
  };
</script>

<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="index in 12" :title="'Tab ' + index">
      content of tab {{ index }}
    </van-tab>
  </van-tabs>
</template>

<style></style>
