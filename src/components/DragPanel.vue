<script lang="ts">
  import { ref } from 'vue'
  import { Button, FloatingPanel, Overlay, showToast } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [FloatingPanel.name]: FloatingPanel,
      [Overlay.name]: Overlay,
      [showToast.name]: showToast,
    },
    setup() {
      const showPopup = ref(false);
      const anchors = [
        100,
        Math.round(0.4 * window.innerHeight),
        Math.round(0.7 * window.innerHeight),
      ];
      const height = ref(anchors[0]);

      const onCancel = () => alert('cancel');

      return { anchors, height, showPopup, onCancel };
    },
  };
</script>

<template>

  <van-button type="primary" text="DragPanel" @click="showPopup = true;" />

  <van-overlay :show="showPopup" z-index="2005" @click="showPopup = false" />
  <van-floating-panel :show="showPopup" v-model:height="height" :anchors="anchors" class="test" :class="{ aaa: showPopup == true }">
    <div style="text-align: center; padding: 15px; font-size: 2rem;" @cancel="onCancel">
      <p class="cancel">Test {{ height.toFixed(0) }} px</p>
    </div>
  </van-floating-panel>
</template>

<style scoped>
.test {
  display: none;
  z-index: 2006;

  transition: var(--van-popup-transition) !important;
}
[show='true'] {
  display: block;
}
.cancel {
  color:  red;
}
</style>
