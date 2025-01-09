<script lang="ts">
  import { ref } from 'vue'
  import { Button, Popup } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Popup.name]: Popup,
    },
    setup() {
      const showBottom = ref(false)
      const showPopup = () => {
        showBottom.value = true
      }
      return {
        showBottom,
        showPopup,
      }
    },
  }
</script>

<template>
    <van-button type="primary" title="Show popup" @click="showPopup">
        <slot name="title"></slot>
    </van-button>
    <van-popup
        v-model:show="showBottom"
        round
        position="bottom"
        class="bottom-sheet"
    >
        <div class="drag-button"><i></i></div>
        <div class="text-sample">
          Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다. Lorem Ipsum은 알려지지 않은 인쇄공이 갤리형 활자를 가져와 섞어서 활자 견본책을 만든 1500년대부터 업계의 표준 더미 텍스트가 되었습니다. 5세기 동안 살아남았을 뿐만 아니라 전자 조판으로의 도약에도 불구하고 본질적으로 변함없이 유지되었습니다. Lorem Ipsum 구절이 포함된 Letraset 시트가 출시된 1960년대에 대중화되었고, 최근에는 Aldus PageMaker와 같은 데스크톱 출판 소프트웨어에 Lorem Ipsum 버전이 포함되면서 대중화되었습니다. END
        </div>
    </van-popup>
</template>

<style scoped>
.bottom-sheet.van-popup--bottom.van-popup--round {
    border-radius: 3rem 3rem 0 0;
    padding-top: 40px;
}
.drag-button {
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
}
.drag-button > i {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 35px;
    height: 5px;
    border-radius: 20px;
    background-color: #ECECEC;
}
</style>
