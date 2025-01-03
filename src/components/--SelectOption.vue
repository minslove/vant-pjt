<script lang="ts">
  import { ref } from 'vue'
  import { Button, Popup, DropdownMenu, DropdownItem  } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
      [Popup.name]: Popup,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem,
    },
    setup() {
      const showBottom = ref(false)
      const showPopup = () => {
        showBottom.value = true
      }


      const value1 = ref(0);
      const value2 = ref('a');
      const option1 = [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 },
      ];
      const option2 = [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
      ];

      return {
        showBottom,
        showPopup,

        value1,
        value2,
        option1,
        option2,
      }
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

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    </van-popup
  >
</template>

<style></style>
