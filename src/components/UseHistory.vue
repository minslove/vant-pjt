<script lang="ts">
</script>

<template>
  <div class="usage-history">
    <ul>
        <li class="left title ellipsis"><slot name="title">결제내역명 노출</slot></li>
        <li class="right price"><slot name="price">금액 노출</slot></li>
    </ul>
    <ul>
        <li class="left info"><slot name="infoL">부가정보</slot></li>
        <li class="right info"><slot name="infoR">추가정보</slot></li>
    </ul>
  </div>
</template>

<style>
/* 명세서 리스트, 이용내역 리스트 */
.usage-history {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 2rem 2.4rem;
}
.usage-history ul {
    display: flex;
    justify-content: space-between;
    gap: 4%;
}
.usage-history ul .left {
    width: 60%;
}
.usage-history ul .right {
    text-align: right;
}
.usage-history ul li > p {
    display: inline-block;
}
.usage-history ul li > p::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0px 5px -2px;
    background-color: #ccc;
}
.usage-history ul li > p:last-child:after {
    display: none;
}
.usage-history ul li > p > span {
    display: inline-block;
    line-height: 1.6;
    margin-left: 2px;
}
.usage-history ul li > p > span:first-child {
    margin-left: 0;
}
.usage-history ul .title {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-heading);
}
.usage-history ul .price {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-heading);
}
.usage-history ul .info {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-text2);
}
/* etc */
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
</style>
