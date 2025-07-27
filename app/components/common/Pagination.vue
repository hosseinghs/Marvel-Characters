<template>
  <div class="flex items-center justify-center -mx-2" aria-label="Pagination">
    <ul class="flex items-center bg-[#23262b] border border-gray-600 rounded-lg px-4 py-2 gap-1 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2">
      <li>
        <button
          class="text-gray-400 hover:text-white px-2 py-1 disabled:opacity-40"
          :disabled="currentPage === 1"
          @click="currentPage = 1"
        >
          «
        </button>
      </li>
      <li>
        <button
          class="text-gray-400 hover:text-white px-2 py-1 disabled:opacity-40"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <
        </button>
      </li>
      <li v-for="page in pagesToShow" :key="'page-' + page">
        <button
          v-if="typeof page === 'number'"
          class="mx-1 w-8 h-8 flex items-center justify-center text-base transition"
          :class="page === currentPage
            ? 'bg-red-600 text-white rounded-full font-bold shadow'
            : 'text-gray-400 hover:text-white'"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
        <span
          v-else
          class="mx-1 w-8 h-8 flex items-center justify-center text-gray-500 select-none"
        >
          {{ page }}
        </span>
      </li>
      <li>
        <button
          class="text-gray-400 hover:text-white px-2 py-1 disabled:opacity-40"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          >
        </button>
      </li>
      <li>
        <button
          class="text-gray-400 hover:text-white px-2 py-1 disabled:opacity-40"
          :disabled="currentPage === totalPages"
          @click="currentPage = totalPages"
        >
          »
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const currentPage = defineModel<number>('currentPage', { required: true })

interface IProps {
    justify?: 'center' | 'start' | 'end'
    totalPages: number
    maxVisible: number
}

const props = withDefaults(defineProps<IProps>(), {
  justify: 'center',
})

const pagesToShow = computed(() => {
  const { totalPages, maxVisible } = props
  if (totalPages <= maxVisible) return Array.from({ length: totalPages }, (_, i) => i + 1)
  const pages = []
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = start + maxVisible - 1
  if (end > totalPages) {
    end = totalPages
    start = end - maxVisible + 1
  }
  if (start > 1) {
    pages.push(1)
    if (start > 2) pages.push('...')
  }
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push('...')
    pages.push(totalPages)
  }
  return pages
})
</script>