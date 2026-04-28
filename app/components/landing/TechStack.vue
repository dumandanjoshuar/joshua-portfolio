<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="skills"
    :title="page.skills.title"
    :description="page.skills.description"
    :ui="{
      container: 'py-12 sm:py-16 gap-8 sm:gap-10',
      title: 'text-left text-xl sm:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-base text-muted'
    }"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="group in page.skills.groups"
        :key="group.title"
        class="rounded-xl border border-default bg-elevated/40 p-5 transition-colors duration-200 hover:border-primary/40 hover:bg-elevated/70"
      >
        <div class="flex items-start gap-3">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-default bg-default">
            <UIcon
              :name="group.icon"
              class="size-5 text-primary"
            />
          </div>
          <div>
            <h3 class="font-medium text-highlighted">
              {{ group.title }}
            </h3>
            <p class="mt-1 text-sm leading-6 text-muted">
              {{ group.description }}
            </p>
          </div>
        </div>

        <div class="mt-5 flex flex-wrap gap-2">
          <UBadge
            v-for="item in group.items"
            :key="item"
            color="neutral"
            variant="subtle"
            class="rounded-md"
          >
            {{ item }}
          </UBadge>
        </div>
      </article>
    </div>
  </UPageSection>
</template>
