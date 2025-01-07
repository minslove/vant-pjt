<script setup lang="ts">
  import RadioCellGrp from '../components/RadioCellGrp.vue'
  import RadioBttnGrp from '../components/RadioBttnGrp.vue'
  import CheckboxGrp from '../components/CheckboxGrp.vue'
  import MonthSelect from '../components/MonthSelect.vue'
  import BillingInfo from '../components/BillingInfo.vue'
  import AccountInfo from '../components/AccountInfo.vue'
  import SectionGroup from '../components/SectionGroup.vue'
  import SwichPanelGroup from '../components/SwichPanelGroup.vue'
  import UseHistoryList from '../components/UseHistoryList.vue'
  import BottomSheet from '../components/BottomSheet.vue'
  import SelectOption from '../components/--SelectOption.vue'
  import DatePicker from '../components/DatePicker.vue'
  import FloatingPanel from '../components/FloatingPanel.vue'
  import DragPanel from '../components/DragPanel.vue'
  import SwichButton from '../components/SwichPanel.vue'
  import SwipeTabs from '../components/SwipeTabs.vue'
  import Popover from '../components/Popover.vue'
</script>

<template>
    <RadioCellGrp />
    <br>
    <br>
    <RadioBttnGrp />
    <br>
    <br>
    <CheckboxGrp />
    <br>
    <br>
    <MonthSelect><template #title>10월</template></MonthSelect>
    <br>
    <br>
    <BillingInfo />
    <br>
    <br>
    <AccountInfo />
    <br>
    <br>
    <SectionGroup />
    <br>
    <br>
    <SwichPanelGroup />
    <br>
    <br>
    <SwipeTabs />
    <br>
    <br>
    <UseHistoryList />
    <br>
    <br>
    <BottomSheet><template #title>BottomSheet</template></BottomSheet>
    <br>
    <br>
    <DatePicker><template #month>10월</template></DatePicker>
    <br>
    <br>
    <SelectOption><template #month>SelectOption</template></SelectOption>
    <br>
    <br>
    <FloatingPanel><template #floating>FloatingPanel</template></FloatingPanel>
    <br>
    <br>
    <DragPanel>DragPanel</DragPanel>
    <br>
    <br>
    <Popover />
    <br>
    <br>
    <SwichButton />
    <br>
    <br>
    <br>
</template>

<style></style>
