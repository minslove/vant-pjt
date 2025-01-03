<script lang="ts">
  import { ref } from 'vue'
  import { Field, Switch } from 'vant'

  export default {
    components: {
      [Field.name]: Field,
      [Switch.name]: Switch,
    },
    setup() {
      const checked = ref(false);
      return { checked };
    },
  };
</script>

<template>
  <van-field name="switch" label="Switch">
    <template #input>
      <van-switch v-model="checked" />
    </template>
  </van-field>
</template>

<style></style>
