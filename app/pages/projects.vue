<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

const { global } = useAppConfig()

const projectUrl = (url?: string) => {
  return url && url !== '#' ? url : undefined
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        container: 'py-14 sm:py-18 lg:py-20',
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div
          v-if="page.links"
          class="flex flex-wrap items-center gap-2"
        >
          <UButton
            v-bind="page.links[0]"
          />
          <UButton
            :to="`mailto:${global.email}`"
            v-bind="page.links[1]"
          />
        </div>
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: 'pt-0! pb-14'
      }"
    >
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <article class="group grid overflow-hidden rounded-xl border border-default bg-elevated/40 transition-colors duration-200 hover:border-primary/40 hover:bg-elevated/70 lg:grid-cols-[280px_1fr]">
          <img
            :src="project.image.src"
            :alt="project.image.alt"
            width="560"
            height="420"
            class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] lg:h-full"
            loading="lazy"
          >

          <div class="p-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div class="flex gap-3">
                <div class="flex size-11 shrink-0 items-center justify-center rounded-lg border border-default bg-default">
                  <UIcon
                    :name="project.icon"
                    class="size-5 text-primary"
                  />
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h2 class="font-medium text-highlighted">
                      {{ project.title }}
                    </h2>
                    <UBadge
                      color="neutral"
                      variant="outline"
                      class="rounded-md"
                    >
                      {{ project.status }}
                    </UBadge>
                  </div>
                  <p class="mt-1 text-sm text-muted">
                    {{ project.role }} - {{ project.date }}
                  </p>
                </div>
              </div>

              <UButton
                v-if="projectUrl(project.url)"
                :to="projectUrl(project.url)"
                target="_blank"
                color="neutral"
                variant="ghost"
                trailing-icon="i-lucide-arrow-up-right"
                label="Open"
                class="w-fit rounded-full"
              />
            </div>

            <p class="mt-4 max-w-3xl text-sm leading-6 text-muted">
              {{ project.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <UBadge
                v-for="tag in project.tags"
                :key="tag"
                color="neutral"
                variant="subtle"
                class="rounded-md"
              >
                {{ tag }}
              </UBadge>
            </div>

            <div class="mt-5 grid gap-2 lg:grid-cols-3">
              <div
                v-for="highlight in project.highlights"
                :key="highlight"
                class="rounded-md border border-default bg-default/70 p-3 text-sm leading-6 text-muted"
              >
                {{ highlight }}
              </div>
            </div>
          </div>
        </article>
      </Motion>
    </UPageSection>
  </UPage>
</template>
