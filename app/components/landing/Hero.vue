<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    orientation="horizontal"
    :title="page.title"
    :description="page.description"
    :links="page.hero.links"
    :ui="{
      container: 'py-18 sm:py-24 lg:py-28 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-12',
      wrapper: 'text-left',
      headline: 'justify-start',
      title: 'mx-0 max-w-2xl text-left',
      description: 'mx-0 max-w-2xl text-left',
      links: 'justify-start gap-2 flex-wrap'
    }"
  >
    <template #headline>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(8px)' }"
        :animate="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.45 }"
      >
        <UBadge
          color="neutral"
          variant="subtle"
          class="gap-2"
        >
          <span class="size-2 rounded-full bg-primary" />
          {{ page.hero.eyebrow }}
        </UBadge>
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(8px)' }"
        :animate="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.45, delay: 0.2 }"
        class="flex flex-wrap items-center gap-2"
      >
        <UButton
          v-for="link in page.hero.links"
          :key="link.label"
          v-bind="link"
        />
      </Motion>

      <Motion
        v-if="footer?.links?.length"
        :initial="{ opacity: 0, transform: 'translateY(8px)' }"
        :animate="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.45, delay: 0.3 }"
        class="mt-4 flex items-center gap-1"
      >
        <UButton
          v-for="(link, index) in footer.links"
          :key="index"
          v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
        />
      </Motion>
    </template>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(12px)' }"
      :animate="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.55, delay: 0.15 }"
      class="w-full"
    >
      <div class="relative mx-auto max-w-md overflow-hidden rounded-lg border border-default bg-elevated/60 shadow-lg shadow-neutral-950/5 backdrop-blur">
        <img
          :src="page.hero.image.src"
          :alt="page.hero.image.alt"
          width="640"
          height="480"
          class="aspect-[4/3] w-full object-cover"
          loading="eager"
        >

        <div class="flex items-center justify-between border-b border-default px-4 py-3">
          <div class="flex items-center gap-2">
            <span class="size-2.5 rounded-full bg-error" />
            <span class="size-2.5 rounded-full bg-warning" />
            <span class="size-2.5 rounded-full bg-success" />
          </div>
          <span class="text-xs text-muted">portfolio.vue</span>
        </div>

        <div class="space-y-3 p-4 text-sm">
          <div class="flex items-center gap-3 rounded-md bg-default/70 px-3 py-2">
            <UIcon
              name="i-lucide-code-2"
              class="size-4 text-primary"
            />
            <span class="text-muted">stack</span>
            <span class="ml-auto text-highlighted">Laravel + Vue</span>
          </div>
          <div class="flex items-center gap-3 rounded-md bg-default/70 px-3 py-2">
            <UIcon
              name="i-lucide-database"
              class="size-4 text-primary"
            />
            <span class="text-muted">systems</span>
            <span class="ml-auto text-highlighted">APIs + MySQL</span>
          </div>
          <div class="flex items-center gap-3 rounded-md bg-default/70 px-3 py-2">
            <UIcon
              name="i-lucide-sparkles"
              class="size-4 text-primary"
            />
            <span class="text-muted">workflow</span>
            <span class="ml-auto text-highlighted">AI-assisted</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 px-4 pb-4">
          <UBadge
            v-for="highlight in page.hero.highlights"
            :key="highlight"
            color="neutral"
            variant="outline"
            class="rounded-md"
          >
            {{ highlight }}
          </UBadge>
        </div>
      </div>
    </Motion>
  </UPageHero>
</template>
