<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 z-10 max-w-[calc(100vw-1rem)] -translate-x-1/2 transform">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="overflow-x-auto rounded-full border border-muted/50 bg-muted/80 px-2 shadow-lg shadow-neutral-950/5 backdrop-blur-sm sm:px-4"
      :ui="{
        link: 'px-2 py-1 text-sm',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
