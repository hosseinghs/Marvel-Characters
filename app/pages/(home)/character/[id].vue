<script setup lang="ts">
const CharactersDetail = defineAsyncComponent(() => import('@/components/characters/Detail.vue'))
const CharacterSection = defineAsyncComponent(() => import('@/components/common/CharacterSection.vue'))
</script>

<template>
  <div>
    <CharactersDetail />
    <CharacterSection title="Series" />
    <CharacterSection title="Comics" />
  </div>
</template>