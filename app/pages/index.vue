<script setup lang="ts">
const currentPage = ref(1)
// const { data, error, pending } = await useFetch('/api/marvel/characters?limit=10', {
//     server: false
// })

</script>

<template>
  <div>
    <LayoutHeader />

    <div class="grid grid-cols-4 gap-4">
      <CharactersCard
        v-for="i in 12"
        :key="i"
        class="col-span-12 md:col-span-1"
      />
      <div class="text-center">
        <CommonPagination
          v-model:current-page="currentPage"
          :total-pages="10"
          :max-visible="10"
        />
      </div>
    </div>
  </div>
</template>