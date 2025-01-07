<script lang="ts">
	import { ref } from 'vue'
	import { Popup, Button, Tag } from 'vant'

	export default {
		components: {
			[Popup.name]: Popup,
			[Button.name]: Button,
			[Tag.name]: Tag,
		},
		setup() {
			const showBottom = ref(false)
			const showPopup = () => {
            showBottom.value = true
        }
        return {
            showBottom,
            showPopup,
        }
    },
}
</script>

<template>
    <div class="divider-h1"><slot name="divider"><!-- section간 구분선(굵은회색라인) --></slot></div>
    <ul class="account-info f14">
        <li>
            <span class="title">결제계좌</span>
            <span class="right">카카오뱅크 33330*******832</span>
        </li>
        <li>
            <div>
                <span class="toolip-title bold heading">결제일</span>
                <button type="button" @click="showPopup" class="ico ico-tooltip"></button>
                <van-popup v-model:show="showBottom">test</van-popup>
            </div>
            <span class="right">매달 21일</span>
        </li>
    </ul>
</template>

<style>
/* 청구 정보 */
.account-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.account-info > li {
  display: flex;
  justify-content: space-between;
}
.account-info .title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-heading);
}
/* tooltip */
.toolip-title {
    font-size: 1.4rem;
    font-weight: 400;
    vertical-align: middle;
}
/* font */
.heading {
    font-weight: 700;
    color: var(--color-heading);
}
.f14 {font-size: 1.4rem;}
.normal {font-weight: var(--fw-normal);}
.bold {font-weight: var(--fw-bold);}
/* icon */
.ico-tooltip {
    width: 1.4rem;
    height: 1.4rem;
    background: url('../assets/images/ico-tooltip.png') no-repeat;
    background-size: 100%;
    margin-left: 4px;
}
.ico-go {
    width: 1.4rem;
    height: 1.4rem;
    background: url('../assets/images/ico-go.png') no-repeat;
    background-size: 100%;
}
</style>
