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
            return { active, activeName };
        },
    };
</script>

<template>
    <!-- <van-tabs v-model:active="active" class="tab-swipe">
        <van-tab v-for="index in 8" :title="'Tab ' + index">
            content of tab {{ index }}
        </van-tab>
    </van-tabs> -->
    <van-tabs v-model:active="activeName" class="tab-swipe">
        <van-tab title="1" name="a">content of tab 1</van-tab>
        <van-tab title="12" name="b">content of tab 2</van-tab>
        <van-tab title="13" name="c">content of tab 3</van-tab>
        <van-tab title="14" name="d">content of tab 1</van-tab>
        <van-tab title="1555" name="e">content of tab 2</van-tab>
        <van-tab title="16666" name="f">content of tab 3</van-tab>
        <van-tab title="7771" name="g">content of tab 1</van-tab>
        <van-tab title="1333" name="h">content of tab 2</van-tab>
        <van-tab title="1888" name="i">content of tab 3</van-tab>
        <van-tab title="999991" name="j">content of tab 1</van-tab>
        <van-tab title="10000" name="k">content of tab 2</van-tab>
        <van-tab title="111" name="l">content of tab 3</van-tab>
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
