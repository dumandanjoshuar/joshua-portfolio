<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="about"
    :title="page.about.title"
    :ui="{
      container: 'py-10 sm:py-14 gap-6 sm:gap-8',
      title: 'text-left text-xl sm:text-2xl font-medium'
    }"
  >
    <div class="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
      <MDC
        :value="page.about.description"
        unwrap="p"
        class="max-w-3xl space-y-4 text-sm leading-7 text-muted sm:text-base"
      />

      <div class="grid gap-3">
        <div
          v-for="point in page.about.points"
          :key="point"
          class="flex gap-3 rounded-lg border border-default bg-elevated/40 p-4 transition-colors hover:border-primary/40 hover:bg-elevated/70"
        >
          <UIcon
            name="i-lucide-check"
            class="mt-0.5 size-4 shrink-0 text-primary"
          />
          <p class="text-sm leading-6 text-muted">
            {{ point }}
          </p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
