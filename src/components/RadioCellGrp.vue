<script lang="ts">
	import { ref } from 'vue'
	import { RadioGroup, Radio, CellGroup, Cell } from 'vant'

	export default {
		components: {
			[RadioGroup.name]: RadioGroup,
			[Radio.name]: Radio,
			[CellGroup.name]: CellGroup,
			[Cell.name]: Cell,
		},
		setup() {
      const checked = ref('1');
      return { checked };
    }
}
</script>
<template>
  <van-radio-group v-model="checked">
    <van-cell-group inset>
      <van-cell title="Radio 1" clickable @click="checked = '1'">
        <template #right-icon>
          <van-radio name="1" />
        </template>
      </van-cell>
      <van-cell title="Radio 2" clickable @click="checked = '2'">
        <template #right-icon>
          <van-radio name="2" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>
