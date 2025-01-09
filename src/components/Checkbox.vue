<script lang="ts">
	import { ref } from 'vue'
	import { Checkbox, CheckboxGroup } from 'vant'

	export default {
		components: {
			[Checkbox.name]: Checkbox,
			[CheckboxGroup.name]: CheckboxGroup,
		},
		setup() {
      const checked = ref([]);
      return { checked };
    }
}
</script>
<template>
  <van-checkbox-group v-model="checked" direction="horizontal">
    <van-checkbox name="a">Checkbox a</van-checkbox>
    <van-checkbox name="b">Checkbox b</van-checkbox>
  </van-checkbox-group>
</template>
