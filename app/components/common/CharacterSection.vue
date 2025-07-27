<script setup lang="ts">
import { characters } from '~/mock'
import CharacterCard from '~/components/characters/Card.vue'

defineProps<{ title: string }>()
</script>

<template>
  <section class="my-8">
    <h2 class="text-white text-2xl font-bold mb-4">{{ title }}</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-12 md:col-span-1">
        <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :name="character.name"
          :image="character.image"
          class="border border-white rounded-lg px-2 mb-4"
        />
      </div>
    </div>
  </section>
</template>