<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()

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

const hasPlaceholderContact = computed(() => {
  return [global.email, global.linkedin, global.github].some(value => value.includes('your-') || value.includes('example.com'))
})
</script>

<template>
  <UPageSection
    id="contact"
    :ui="{
      container: 'py-12 sm:py-16'
    }"
  >
    <div class="rounded-xl border border-default bg-elevated/50 p-6 sm:p-8">
      <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 class="text-xl font-medium text-highlighted sm:text-2xl">
            {{ page.contact.title }}
          </h2>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            {{ page.contact.description }}
          </p>
          <p
            v-if="hasPlaceholderContact"
            class="mt-3 text-sm text-warning"
          >
            {{ page.contact.note }}
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
</template>
