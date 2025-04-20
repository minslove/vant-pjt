<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>
    <div class="details">
      <h2>
        <slot name="heading" />
      </h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: center;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h2,
h2 a {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.7;
  color: var(--color-heading);
}
</style>
