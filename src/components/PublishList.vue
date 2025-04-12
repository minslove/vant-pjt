<script setup lang="ts">
import PublishMenu from './PublishMenu.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <PublishMenu>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading><RouterLink to="/statement">DatePicker</RouterLink></template>
  </PublishMenu>

  <PublishMenu>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading><RouterLink to="/board">Board</RouterLink></template>
  </PublishMenu>

  <PublishMenu>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>이용내역</template>
  </PublishMenu>

  <PublishMenu>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>카드 관리 - 간편결제 등록</template>
  </PublishMenu>

  <PublishMenu>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>카드 배송현황 조회 - 배송중</template>
  </PublishMenu>

  <PublishMenu>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>약관 동의</template>
  </PublishMenu>
</template>
