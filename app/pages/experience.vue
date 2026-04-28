<script setup lang="ts">
const { data: page } = await useAsyncData('experience-page', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: `${page.value.experience.title} - Joshua Dumandan`,
  ogTitle: `${page.value.experience.title} - Joshua Dumandan`,
  description: page.value.experience.description,
  ogDescription: page.value.experience.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.experience.title"
      :description="page.experience.description"
      :ui="{
        container: 'py-14 sm:py-18 lg:py-20',
        title: 'mx-0! text-left',
        description: 'mx-0! text-left'
      }"
    />

    <UPageSection
      :ui="{
        container: 'pt-0! pb-14'
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
                  <h2 class="font-medium text-highlighted">
                    {{ experience.role }}
                  </h2>
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
  </UPage>
</template>
