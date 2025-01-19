<script lang="ts">
	import { ref } from 'vue'
	import { RadioGroup, Radio } from 'vant'

	export default {
		components: {
			[RadioGroup.name]: RadioGroup,
			[Radio.name]: Radio,
		},
		setup() {
      const checked = ref('1');
      return { checked };
    }
}
</script>
<template>
  <van-radio-group v-model="checked" direction="horizontal">
    <van-radio name="1" class="radio-item">Radio Button 1</van-radio>
    <van-radio name="2" class="radio-item">Radio Button 2</van-radio>
  </van-radio-group>
</template>
<style>
.radio-item .van-icon {
  display: none;
}
.radio-item[aria-checked='true'] {
  border: 1px solid blue;
}
</style>
