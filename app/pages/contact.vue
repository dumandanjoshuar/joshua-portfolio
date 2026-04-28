<script setup lang="ts">
const { data: page } = await useAsyncData('contact-page', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

const contactLinks = computed(() => [
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    to: `mailto:${global.email}`,
    target: '_self'
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    to: global.linkedin,
    target: '_blank'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: global.github,
    target: '_blank'
  }
])

useSeoMeta({
  title: `${page.value.contact.title} - Joshua Dumandan`,
  ogTitle: `${page.value.contact.title} - Joshua Dumandan`,
  description: page.value.contact.description,
  ogDescription: page.value.contact.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.contact.title"
      :description="page.contact.description"
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
      <div class="rounded-xl border border-default bg-elevated/50 p-6 sm:p-8">
        <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 class="text-xl font-medium text-highlighted sm:text-2xl">
              Let's connect
            </h2>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              I am open to frontend, full-stack, and junior-to-mid developer opportunities.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 lg:justify-end">
            <UButton
              v-for="link in contactLinks"
              :key="link.label"
              v-bind="link"
              color="neutral"
              variant="outline"
              class="rounded-full"
            />

            <UButton
              :to="global.resumeUrl"
              target="_blank"
              download
              color="primary"
              icon="i-lucide-download"
              label="Resume"
              class="rounded-full"
            />
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
