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
      <van-cell title="Radio 3" clickable @click="checked = '3'">
        <template #right-icon>
          <van-radio name="3" />
        </template>
      </van-cell>
      <van-cell title="Radio 4" clickable @click="checked = '4'">
        <template #right-icon>
          <van-radio name="4" />
        </template>
      </van-cell>
      <van-cell title="Radio 5" clickable @click="checked = '5'">
        <template #right-icon>
          <van-radio name="5" />
        </template>
      </van-cell>
      <van-cell title="Radio 6" clickable @click="checked = '6'">
        <template #right-icon>
          <van-radio name="6" />
        </template>
      </van-cell>
      <van-cell title="Radio 7" clickable @click="checked = '7'">
        <template #right-icon>
          <van-radio name="7" />
        </template>
      </van-cell>
      <van-cell title="Radio 8" clickable @click="checked = '8'">
        <template #right-icon>
          <van-radio name="8" />
        </template>
      </van-cell>
      <van-cell title="Radio 9" clickable @click="checked = '9'">
        <template #right-icon>
          <van-radio name="9" />
        </template>
      </van-cell>
      <van-cell title="Radio 10" clickable @click="checked = '10'">
        <template #right-icon>
          <van-radio name="10" />
        </template>
      </van-cell>
      <van-cell title="Radio 11" clickable @click="checked = '11'">
        <template #right-icon>
          <van-radio name="11" />
        </template>
      </van-cell>
      <van-cell title="Radio 12" clickable @click="checked = '12'">
        <template #right-icon>
          <van-radio name="12" />
        </template>
      </van-cell>
      <van-cell title="Radio 13" clickable @click="checked = '13'">
        <template #right-icon>
          <van-radio name="13" />
        </template>
      </van-cell>
      <van-cell title="Radio 14" clickable @click="checked = '14'">
        <template #right-icon>
          <van-radio name="14" />
        </template>
      </van-cell>
      <van-cell title="Radio 15" clickable @click="checked = '15'">
        <template #right-icon>
          <van-radio name="15" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>
