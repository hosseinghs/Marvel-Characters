<script setup lang="ts">
import { spidermain } from '~/mock'

definePageMeta({
  layout: 'default'
})

const currentPage = ref(1)

const { pending } = await useFetch('/api/marvel/characters?limit=10', {
  server: false,
  watch: [currentPage]
})

const onCharacterClick = () => {
  navigateTo({
    name: 'character-id',
    params: {
      id: 1
    }
  })
}

</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <template v-if="pending">
        loading...
      </template>
      <template v-else>
        <!-- v-for over data -->
        <CharactersCard
          v-for="i in 12"
          :key="i"
          class="col-span-12 md:col-span-1"
          :name="spidermain.name"
          :image="spidermain.image"
          @click="onCharacterClick"
        />
      </template>

    </div>
    <div class="text-center">
      <CommonPagination
        v-model:current-page="currentPage"
        :total-pages="10"
        :max-visible="10"
        :disabled="pending"
      />
    </div>
  </div>
</template>