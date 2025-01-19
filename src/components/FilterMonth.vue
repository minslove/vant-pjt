<script lang="ts">
  import { ref } from 'vue'
  import { Popup } from 'vant'
  import RadioCell from '@/components/RadioCell.vue'

  export default {
    components: {
      [Popup.name]: Popup,
      RadioCell
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
    <button type="button" @click="showPopup" class="select-button">
      <span class="title">10월<i class="ico ico-select"></i></span>
    </button>
    <van-popup
        v-model:show="showBottom"
        round
        position="bottom"
        class="bottom-sheet"
        style="max-height: 60%;"
    >
        <div class="drag-button"><i></i></div>
        <RadioCell />
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
.select-button .title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-heading);
}
.ico {
    display: inline-block;
}
.ico-select {
    width: 2rem;
    height: 2rem;
    background: url('../assets/images/ico-selcet.png') no-repeat 0 2px;
    background-size: 100%;
}
.ico-tooltip {
    width: 1.4rem;
    height: 1.4rem;
    background: url('../assets/images/ico-tooltip.png') no-repeat;
    background-size: 100%;
}
.ico-go {
    width: 1.4rem;
    height: 1.4rem;
    background: url('../assets/images/ico-go.png') no-repeat;
    background-size: 100%;
}
.title + .ico {
    margin-left: 2px;
}
</style>
