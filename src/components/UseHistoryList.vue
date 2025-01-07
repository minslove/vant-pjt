<script setup lang="ts">
  import UseHistory from '../components/UseHistory.vue'
</script>

<template>
  <UseHistory>
    <template #title>결제내역명 결제내역명 결제내역명 결제내역명 결제내역명</template>
    <template #price>1,001,000원</template>
    <template #infoL>
        <p><span>2024.12.31</span></p>
        <p><span>할부(1/3)</span></p>
        <p><span>수수료 1,000원</span></p>
        <p><span>etc</span></p>
    </template>
    <template #infoR>
        <p>
          <span>바로낸 금액</span>
          <span>30,000원</span>
        </p>
    </template>
  </UseHistory>
</template>

<style>
</style>
