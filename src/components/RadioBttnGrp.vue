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
    <van-radio name="1">Radio Button 1</van-radio>
    <van-radio name="2">Radio Button 2</van-radio>
  </van-radio-group>
</template>
