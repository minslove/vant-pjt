<script lang="ts">
  import { ref } from 'vue'
  import { Button, Popup, FloatingPanel, CellGroup, Cell } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Popup.name]: Popup,
      [FloatingPanel.name]: FloatingPanel,
      [CellGroup.name]: CellGroup,
      [Cell.name]: Cell,
    },
    setup() {
      const showPicker = ref(false);
      const anchors = [
        100,
        Math.round(0.4 * window.innerHeight),
        Math.round(0.7 * window.innerHeight),
      ];
      const height = ref(anchors[0]);
      const duration = 0;

      return { anchors, height, showPicker, duration };
    },
  };
</script>

<template>
  <van-button type="primary" title="Show popup"
    @click="showPicker = true"
  ><slot name="floating"></slot></van-button>

  <van-popup v-model:show="showPicker" round position="bottom">

    <van-floating-panel v-model:height="height" :anchors="anchors" :content-draggable="false" :duration="duration">
      <p>Panel Show Height {{ height.toFixed(0) }} px</p>
    </van-floating-panel>

  </van-popup>
</template>

<style></style>
