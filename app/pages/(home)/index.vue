<script setup lang="ts">
import { spidermain } from '~/mock'

definePageMeta({
  layout: 'default'
})

// const { data, error, pending } = await useFetch('/api/marvel/characters?limit=10', {
//   server: false
// })

const currentPage = ref(1)

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
      <CharactersCard
        v-for="i in 12"
        class="col-span-12 md:col-span-1"
        :key="i"
        :name="spidermain.name"
        :image="spidermain.image"
        @click="onCharacterClick"
      />
    </div>
    <div class="text-center">
        <CommonPagination
          v-model:current-page="currentPage"
          :total-pages="10"
          :max-visible="10"
        />
    </div>
  </div>
</template>