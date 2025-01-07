<script lang="ts">
</script>

<template>
    <div class="divider"><slot name="divider"><!-- section간 구분선(굵은회색라인) --></slot></div>
    <div class="title-h3">
        <h3><slot name="h3">타이틀</slot></h3>
        <div class="commt"><slot name="commt">부연설명</slot></div>
    </div>
</template>

<style>
/* section */
.divider {
    width: 100%;
    height: 12px;
    background-color: var(--bg-line);
}
.divider-h1 {
    width: 100%;
    height: 1px;
    background-color: var(--bg-line2);
}
.title-h3 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 4rem 2.4rem 2rem;
}
h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-heading);
}
.commt {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-text);
    line-height: 1.6;
}
</style>
