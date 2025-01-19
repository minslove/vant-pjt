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
    const checked = ref('1')
    return { checked }
  },
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

<style>
/* <template>
  <div class="pub">
    <h1>action- data binding 페이지</h1>
    <VanButton type="primary" @click="show = true">{{ checked.value }}</VanButton>
    <VanPopup position="bottom" round v-model:show="show">
      <ul class="test">
        <li v-for="(item, i) in radioList" :key="i">
          <label :for="item.key">{{ item.value }}</label>
          <input type="radio" :id="item.key" name="" :value="item" v-model="checked" @click="show = false">
        </li>
      </ul>
    </VanPopup>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);
const radioList = [
  {
    key: '00',
    value: '10세미만',
  },
  {
    key: '01',
    value: '20세미만',
  },
  {
    key: '02',
    value: '30세미만',
  },
];
const checked = ref(radioList[0]);
</script> */
</style>
