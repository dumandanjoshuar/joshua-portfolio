<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('landing-projects', () => {
  return queryCollection('projects').all()
})

const projectUrl = (url?: string) => {
  return url && url !== '#' ? url : undefined
}
</script>

<template>
  <UPageSection
    id="projects"
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: 'py-12 sm:py-16 gap-8 sm:gap-10',
      title: 'text-left text-xl sm:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-base text-muted'
    }"
  >
    <div class="grid gap-4">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index }"
        :in-view-options="{ once: true }"
      >
        <article class="group grid overflow-hidden rounded-xl border border-default bg-elevated/40 transition-colors duration-200 hover:border-primary/40 hover:bg-elevated/70 md:grid-cols-[220px_1fr]">
          <img
            :src="project.image.src"
            :alt="project.image.alt"
            width="440"
            height="320"
            class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] md:h-full"
            loading="lazy"
          >

          <div class="p-5">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div class="flex gap-3">
                <div class="flex size-11 shrink-0 items-center justify-center rounded-lg border border-default bg-default">
                  <UIcon
                    :name="project.icon"
                    class="size-5 text-primary"
                  />
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-medium text-highlighted">
                      {{ project.title }}
                    </h3>
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
    </div>

    <div class="mt-6">
      <UButton
        to="/projects"
        color="neutral"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
        label="View Projects Page"
        class="rounded-full"
      />
    </div>
  </UPageSection>
</template>
