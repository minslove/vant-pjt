<script setup lang="ts">
  import SectionGroup from '../components/SectionGroup.vue'
  import SwichPanelGroup from '../components/SwichPanelGroup.vue'
  import UseHistoryList from '../components/UseHistoryList.vue'
  import BottomSheet from '../components/BottomSheet.vue'
  // import SelectOption from '../components/--SelectOption.vue'
  import DatePicker from '../components/DatePicker.vue'
  import FloatingPanel from '../components/FloatingPanel.vue'
  import SwichButton from '../components/SwichPanel.vue'
  import SwipeTabs from '../components/SwipeTabs.vue'
  import Popover from '../components/Popover.vue'
</script>

<template>
    <SectionGroup />
    <SwichPanelGroup />
    <UseHistoryList />
    <SwipeTabs />
    <br>
    <br>
    <br>
    <br>
    <BottomSheet><template #month>BottomSheet</template></BottomSheet>
    <br>
    <!-- <SelectOption><template #month>SelectOption</template></SelectOption> -->
    <br>
    <DatePicker><template #month>Date Picker</template></DatePicker>
    <br>
    <br>
    <FloatingPanel><template #floating>FloatingPanel</template></FloatingPanel>
    <br>
    <SwichButton>SwichButton</SwichButton>
    <br>
    <br>
    <Popover />
</template>

<style></style>
