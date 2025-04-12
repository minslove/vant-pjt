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
    const result = ref('')
    const showPicker = ref(false)
    const pickerValue = ref<string[]>([])
    const onConfirm = ({ selectedValues }) => {
      result.value = selectedValues.join('/')
      pickerValue.value = selectedValues
      showPicker.value = false
    }

    return {
      result,
      pickerValue,
      onConfirm,
      showPicker,
    }
  },
}
</script>

<template>
  <van-button title="Show popup" @click="showPicker = true"><slot name="month"></slot> </van-button>
  <van-popup v-model:show="showPicker" round destroy-on-close position="bottom">
    <van-date-picker
      :model-value="pickerValue"
      :show-toolbar="false"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
</template>

<style></style>
