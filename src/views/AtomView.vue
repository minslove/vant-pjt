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
  import DatePicker from '../components/DatePicker.vue'
  import DragPanel from '../components/DragPanel.vue'
  import SwipeTabs from '../components/SwipeTabs.vue'
</script>

<template>
    <DragPanel />
    <br>
    <br>
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
    <BottomSheet><template #title>design BottomSheet</template></BottomSheet>
    <br>
    <br>
    <br>
    <br>
    <DatePicker><template #month>DatePicker</template></DatePicker>
    <br>
    <br>
    <br>
</template>

<style></style>
