<template>
  <div class="flex items-center justify-center" aria-label="Pagination">
    <ul class="inline-flex -space-x-px">
      <li>
        <button
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <
        </button>
      </li>
      <li v-for="page in pagesToShow" :key="'page-' + page">
        <button
          v-if="typeof page === 'number'"
          class="px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          :class="page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
        <span
          v-else
          class="px-3 py-2 leading-tight border border-gray-300 bg-white text-gray-500 select-none"
        >
          {{ page }}
        </span>
      </li>
      <li>
        <button
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          >
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