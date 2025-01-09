<script setup lang="ts">
  import RadioButton from '../components/RadioButton.vue'
  import Checkbox from '../components/Checkbox.vue'
  import FilterMonth from '../components/FilterMonth.vue'
  import BillingInfo from '../components/BillingInfo.vue'
  import AccountInfo from '../components/AccountInfo.vue'
  import SectionGroup from '../components/SectionGroup.vue'
  import SwichPanelGroup from '../components/SwichPanelGroup.vue'
  import UseHistoryList from '../components/UseHistoryList.vue'
  import BottomSheet from '../components/BottomSheet.vue'
  import DatePicker from '../components/DatePicker.vue'
  import SwipeTabs from '../components/SwipeTabs.vue'
</script>

<template>
  <BottomSheet><template #title>BottomSheet Sample</template></BottomSheet>
  <FilterMonth><template #title>10월</template></FilterMonth>
  <DatePicker><template #month>DatePicker</template></DatePicker>
    <br>
    <br>
    <br>
    <RadioButton />
    <br>
    <br>
    <Checkbox />
    <br>
    <br>
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
    <br>
    <br>
</template>

<style>
</style>
