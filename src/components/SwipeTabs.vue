<script lang="ts">
    import { ref } from 'vue';
    import { Tabs, Tab } from 'vant';

    export default {
        components: {
            [Tabs.name]: Tabs,
            [Tab.name]: Tab,
        },
        setup() {
            const active = ref(0);
            const activeName = ref('a');
            return { activeName };
        },
    };
</script>

<template>
    <van-tabs v-model:active="activeName" class="tab-swipe">
        <van-tab title="전체" name="a">1</van-tab>
        <van-tab title="일시불" name="b">2</van-tab>
        <van-tab title="할부" name="c">3</van-tab>
        <van-tab title="단기카드대출" name="d">4</van-tab>
        <van-tab title="장기카드대출" name="e">5</van-tab>
        <van-tab title="16666" name="f">6</van-tab>
        <van-tab title="7771" name="g">7</van-tab>
        <van-tab title="1333" name="h">8</van-tab>
        <van-tab title="1888" name="i">9</van-tab>
        <van-tab title="999991" name="j">10</van-tab>
        <van-tab title="10000" name="k">11</van-tab>
        <van-tab title="end" name="l">12</van-tab>
    </van-tabs>
</template>

<style>
.tab-swipe .van-tabs__nav {
    gap: 10px;
    padding: 0 2rem;
}
.tab-swipe .van-tab {
    font-size: 1.3rem;
    font-weight: 700 !important;
    color: var(--color-text3);
    padding: 1rem 1.2rem;
    background-color: var(--vt-c-blkF7);
    border-radius: 3.8rem;
    height: 3.6rem;
    margin-top: 2rem;
}
.tab-swipe .van-tab--grow {
    flex: 0 0 auto;
}
.tab-swipe.van-tabs__nav--line,
.tab-swipe.van-tabs--line .van-tabs__wrap {
    height: 7.6rem;
    padding-bottom: 0;
}
.tab-swipe .van-tab--active {
    background-color: var(--bg-blk);
    color: #fff;
}
.tab-swipe .van-tabs__line {
    display: none;
}
</style>
