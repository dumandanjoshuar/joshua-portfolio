<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed left-1/2 top-2 z-20 w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] -translate-x-1/2 transform sm:top-4 sm:w-auto">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="no-scrollbar overflow-x-auto rounded-full border border-default/70 bg-default/85 px-1.5 py-1.5 shadow-lg shadow-neutral-950/5 backdrop-blur sm:px-3"
      :ui="{
        root: 'min-w-max gap-1',
        link: 'rounded-full px-3 py-2 text-sm whitespace-nowrap transition-colors',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
