<script lang="ts">
  import { ref } from 'vue'
  import { Button, FloatingPanel, Overlay } from 'vant'

  export default {
    components: {
      [Button .name]: Button,
      [FloatingPanel .name]: FloatingPanel,
      [Overlay .name]: Overlay,
    },
    setup() {
      const showPopup = ref(false);
      const anchors = [
        100,
        Math.round(0.4 * window.innerHeight),
        Math.round(0.7 * window.innerHeight),
      ];
      const height = ref(anchors[0]);

      const modalShow = () => {
        // alert('test');
        document.body.classList.add('van-overflow-hidden');
      };

      return { anchors, height, showPopup, modalShow };
    },
  };
</script>

<template>

  <van-button type="primary" text="test DragPanel" @click="showPopup = true;" />

  <van-overlay :show="showPopup" z-index="2005" @click="showPopup = false" />
  <van-floating-panel :show="showPopup" v-model:height="height" :anchors="anchors" class="test" :class="{ aaa: showPopup == true }">
    <div class="text-sample">
      <p> {{ height.toFixed(0) }} px</p>
      Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다. Lorem Ipsum은 알려지지 않은 인쇄공이 갤리형 활자를 가져와 섞어서 활자 견본책을 만든 1500년대부터 업계의 표준 더미 텍스트가 되었습니다. 5세기 동안 살아남았을 뿐만 아니라 전자 조판으로의 도약에도 불구하고 본질적으로 변함없이 유지되었습니다. Lorem Ipsum 구절이 포함된 Letraset 시트가 출시된 1960년대에 대중화되었고, 최근에는 Aldus PageMaker와 같은 데스크톱 출판 소프트웨어에 Lorem Ipsum 버전이 포함되면서 대중화되었습니다. END
    </div>
  </van-floating-panel>
</template>

<style>
.test {
  display: none;
  z-index: 2006;

  transition: var(--van-popup-transition) !important;
}
[show='true'] {
  display: block;
}
.text-sample {
  font-size: 1.4rem;
  font-weight: 400;
}
.van-floating-panel__content {
  /* min-height: 300px; */
  /* overflow-y: auto; */
}
</style>
