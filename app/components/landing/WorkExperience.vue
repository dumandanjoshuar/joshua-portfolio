<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="experience"
    :title="page.experience.title"
    :description="page.experience.description"
    :ui="{
      container: 'py-12 sm:py-16 gap-8 sm:gap-10',
      title: 'text-left text-xl sm:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-base text-muted'
    }"
  >
    <div class="grid gap-4">
      <Motion
        v-for="(experience, index) in page.experience.items"
        :key="experience.role"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index }"
        :in-view-options="{ once: true }"
      >
        <article class="rounded-xl border border-default bg-elevated/40 p-5 transition-colors duration-200 hover:border-primary/40 hover:bg-elevated/70">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-3">
              <div class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-default bg-default">
                <UIcon
                  :name="experience.icon"
                  class="size-5 text-primary"
                />
              </div>
              <div>
                <h3 class="font-medium text-highlighted">
                  {{ experience.role }}
                </h3>
                <p class="text-sm text-muted">
                  {{ experience.company }}
                </p>
              </div>
            </div>
            <UBadge
              color="neutral"
              variant="subtle"
              class="w-fit"
            >
              {{ experience.date }}
            </UBadge>
          </div>

          <p class="mt-4 text-sm leading-6 text-muted">
            {{ experience.summary }}
          </p>

          <ul class="mt-4 grid gap-2">
            <li
              v-for="point in experience.points"
              :key="point"
              class="flex gap-2 text-sm leading-6 text-muted"
            >
              <UIcon
                name="i-lucide-dot"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>
      </Motion>
    </div>
  </UPageSection>
</template>
