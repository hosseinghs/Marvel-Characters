<script setup lang="ts">
// can make more properties for NuxtImg dynamic! anywho...
interface IProps {
  name: string;
  image: string;
  sizes?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  sizes: '100vw sm:50vw md:80vw',
})
</script>

<template>
  <div class="card p-4 cursor-pointer">
    <div class="character-img">
      <NuxtImg
        :alt="props.name"
        :sizes="props.sizes"
        loading="lazy"
        format="webp"
        class="w-full h-[300px] rounded-lg"
        :src="props.image"
      />
    </div>
    <div class="character-name text-white mt-2">
      {{ props.name }}
    </div>
  </div>
</template>