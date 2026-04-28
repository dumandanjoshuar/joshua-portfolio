<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})

const { data: homePage } = await useAsyncData('about-home', () => {
  return queryCollection('index').first()
})

if (!page.value || !homePage.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

const links = [
  {
    label: 'View Projects',
    to: '/projects',
    icon: 'i-lucide-folder-open',
    color: 'primary' as const,
    size: 'lg' as const
  },
  {
    label: 'Download Resume',
    to: global.resumeUrl,
    icon: 'i-lucide-download',
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'lg' as const,
    target: '_blank' as const,
    download: true
  },
  {
    label: 'Contact Me',
    to: '/contact',
    icon: 'i-lucide-mail',
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'lg' as const
  }
]

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page && homePage">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="links"
      orientation="horizontal"
      :ui="{
        container: 'py-18 sm:py-22 lg:py-24 lg:grid lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-start lg:gap-12',
        wrapper: 'text-left',
        headline: 'justify-start',
        title: 'mx-0 max-w-2xl text-left',
        description: 'mx-0 mt-4 max-w-2xl text-left text-base leading-7',
        links: 'justify-start'
      }"
    >
      <template #headline>
        <UBadge
          color="neutral"
          variant="subtle"
          class="gap-2"
        >
          <span class="size-2 rounded-full bg-primary" />
          About
        </UBadge>
      </template>

      <template #links>
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <UButton
            v-for="link in links"
            :key="link.label"
            v-bind="{ ...link, class: 'rounded-full' }"
          />
        </div>
      </template>

      <div class="rounded-2xl border border-default bg-elevated/50 p-6 shadow-lg shadow-neutral-950/5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-lg font-semibold text-highlighted">
              Joshua Dumandan
            </p>
            <p class="mt-1 text-sm text-muted">
              Full-stack Web Developer
            </p>
          </div>

          <div class="flex size-12 items-center justify-center rounded-xl border border-default bg-default text-sm font-semibold text-highlighted">
            JD
          </div>
        </div>

        <div class="mt-6 space-y-3">
          <div class="flex items-center gap-3 rounded-xl border border-default bg-default/70 px-4 py-3">
            <UIcon
              name="i-lucide-map-pinned"
              class="size-4 text-primary"
            />
            <span class="text-sm text-muted">Based in</span>
            <span class="ml-auto text-sm font-medium text-highlighted">Philippines</span>
          </div>

          <div class="flex items-center gap-3 rounded-xl border border-default bg-default/70 px-4 py-3">
            <UIcon
              name="i-lucide-code-2"
              class="size-4 text-primary"
            />
            <span class="text-sm text-muted">Main stack</span>
            <span class="ml-auto text-sm font-medium text-highlighted">Laravel + Vue</span>
          </div>

          <div class="flex items-center gap-3 rounded-xl border border-default bg-default/70 px-4 py-3">
            <UIcon
              name="i-lucide-arrow-right-left"
              class="size-4 text-primary"
            />
            <span class="text-sm text-muted">Background</span>
            <span class="ml-auto text-sm font-medium text-highlighted">Ops to Tech</span>
          </div>
        </div>

        <div class="mt-6 border-t border-default pt-5">
          <p class="text-sm font-medium text-highlighted">
            What I work on
          </p>
          <p class="mt-2 text-sm leading-6 text-muted">
            Frontend implementation, backend changes, API integrations, database updates, bug fixing, and day-to-day product work that supports real internal workflows.
          </p>
        </div>
      </div>
    </UPageHero>

    <UPageSection
      :ui="{
        container: 'pt-0! pb-14'
      }"
    >
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)]">
        <div class="rounded-2xl border border-default bg-elevated/30 p-6 sm:p-8">
          <p class="text-sm font-medium text-highlighted">
            My background
          </p>

          <MDC
            :value="page.content"
            class="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-highlighted"
          />
        </div>

        <div class="space-y-4">
          <div class="rounded-2xl border border-default bg-elevated/30 p-6">
            <p class="text-sm font-medium text-highlighted">
              What I bring
            </p>

            <div class="mt-4 grid gap-3">
              <div
                v-for="point in homePage.about.points"
                :key="point"
                class="flex gap-3 rounded-xl border border-default bg-default/70 p-4"
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

          <div class="rounded-2xl border border-default bg-elevated/30 p-6">
            <p class="text-sm font-medium text-highlighted">
              Earlier foundation
            </p>
            <p class="mt-3 text-sm leading-6 text-muted">
              My bootcamp training included building a full-stack ecommerce project using MERN technologies, which helped me build a broader full-stack foundation before moving into my current Laravel and Vue work.
            </p>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
