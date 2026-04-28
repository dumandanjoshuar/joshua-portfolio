<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="border-default pt-12 sm:border-x sm:pt-14">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
