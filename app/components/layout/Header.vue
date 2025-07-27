<script setup lang="ts">
const onLogoClick = () => navigateTo('/')
</script>

<template>
  <header class="bg-gradient-to-l from-[rgba(0,0,0,1)] to-[rgba(90,90,90,1)]">
    <div>
      <div class="inline-block px-4 py-2 rounded-lg text-white bg-[#DC2626]" @click="onLogoClick">
        Logo
      </div>
    </div>
  </header>
</template>