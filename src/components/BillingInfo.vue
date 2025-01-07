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
    <div class="billing-info">
        <div class="left">
            <div class="top">
                <span class="toolip-title">10월 21일 낼 카드값</span>
                <button type="button" @click="showPopup" class="ico ico-tooltip"></button>
                <van-popup v-model:show="showBottom">test</van-popup>
            </div>
            <div class="end">
                <span class="price-title">320,400원</span>
                <van-tag round type="primary">에정</van-tag>
            </div>
        </div>
        <div class="right">
            <div>
                <van-button color="#7232dd" plain>상세보기</van-button>
            </div>
        </div>
    </div>
</template>

<style>
/* 청구 정보 */
.billing-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.billing-info .top {
    margin-bottom: 8px;
}
.billing-info .left .end .price-title {
  font-size: 2.6rem;
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
