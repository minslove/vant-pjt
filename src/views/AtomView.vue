<script setup lang="ts">
  import BottomSheet from '../components/BottomSheet.vue'
  // import SelectOption from '../components/--SelectOption.vue'
  import DatePicker from '../components/DatePicker.vue'
  import SwichButton from '../components/SwichButton.vue'
  import SwipeTabs from '../components/SwipeTabs.vue'
  import Popover from '../components/Popover.vue'
</script>

<template>
  <BottomSheet><template #month>BottomSheet</template></BottomSheet>
  <br>
  <!-- <SelectOption><template #month>SelectOption</template></SelectOption> -->
  <br>
  <DatePicker><template #month>Date Picker</template></DatePicker>
  <br>
  <SwichButton>SwichButton</SwichButton>
  <br>
  <SwipeTabs />
  <br>
  <Popover />
</template>

<style></style>
