<script lang="ts">
  import { ref } from 'vue'
  import { Button, Popup, DatePicker } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Popup.name]: Popup,
      [DatePicker.name]: DatePicker,
    },
    setup() {
      const showBottom = ref(false)
      const showPopup = () => {
        showBottom.value = true
      }
      const currentDate = ref(['2021', '01', '01']);
      return {
        showBottom,
        showPopup,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 5, 1),
        currentDate,
    };
    },
  }
</script>

<template>
  <van-button type="primary" title="Show popup" @click="showPopup">
    <slot name="month"></slot>
  </van-button>
  <van-popup
    v-model:show="showBottom"
    round
    position="bottom"
    :style="{ padding: '0', height: '60%' }"
    >

    <van-date-picker
      v-model="currentDate"
      title="Choose Date"
      :min-date="minDate"
      :max-date="maxDate"
    />

    </van-popup
  >
</template>

<style></style>
