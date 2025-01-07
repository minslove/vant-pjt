<script lang="ts">
  import { ref } from 'vue'
  import { Button, Overlay, FloatingPanel } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Overlay .name]: Overlay,
      [FloatingPanel .name]: FloatingPanel,
    },
    setup() {
      const show = ref(false);
      return { show };
    },
  };
</script>

<template>
  <van-button type="primary" text="DragPanel" @click="show = true" />
  <van-overlay :show="show" @click="show = false">


    <van-floating-panel>
      <van-cell-group>
        <van-cell
          v-for="i in 26"
          :key="i"
          :title="String.fromCharCode(i + 64)"
          size="large"
        />
      </van-cell-group>
    </van-floating-panel>


  </van-overlay>
</template>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  </style>
