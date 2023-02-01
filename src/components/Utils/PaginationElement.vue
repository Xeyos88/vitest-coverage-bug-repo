<script setup lang="ts">
import { ref, watch } from 'vue'
import { isUndefined } from 'lodash'

const props = defineProps<{
  pageCount: number
  pages: number
  lengths?: Array<number>
}>()

const current = ref(1)

const emits = defineEmits<{
  (e: 'update:length', value: number): void
}>()

const sizes = ref<Array<{ label: string; value: number }>>([])
if (!isUndefined(props.lengths)) {
  sizes.value = props.lengths.map((el) => {
    return { label: el.toString(), value: el }
  })
}
if (sizes.value.length > 0) {
  sizes.value[sizes.value.length - 1].label = 'ALL'
}

const length = ref(sizes.value[0] ? sizes.value[0].value : 0)

watch(
  () => length.value,
  (newLength: number) => {
    current.value = 1
    emits('update:length', newLength)
  }
)
</script>

<template>
  <div class="pagination flex items-center">
    <span v-if="props.lengths" class="ml-2">
      <div class="w-12">
        <select name="length" v-model="length">
          <option v-for="opt in sizes" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
    </span>
  </div>
</template>
<style scoped>
.pagination {
  @apply m-1 text-[var(--color-text-opposite)];
  :first-child > button {
    @apply border-l border-[var(--color-border-opposite)];
  }
  button {
    @apply border-y border-[var(--color-border-opposite)] w-7;
  }
  span > button {
    @apply border-r border-[var(--color-border-opposite)] bg-[var(--color-w)];
  }
  /*:last-child > button {
    @apply rounded-r;
  }*/
  button {
    &.selected {
      @apply border-y-2 border-x-2 border-[var(--color-border-bw)];
    }
    &.pre-selected {
      @apply border-r-0 border-[var(--color-border-bw)];
    }
  }
  .no-click {
    @apply cursor-auto;
    svg {
      @apply opacity-20;
    }
  }
  select {
    @apply h-[27.5px] border border-[var(--color-border-opposite)];
  }
}
</style>
