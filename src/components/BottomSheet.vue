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
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
        sdfasdf<br>
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
