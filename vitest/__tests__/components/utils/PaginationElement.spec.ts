import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PaginationElement from '@/components/Utils/PaginationElement.vue'

describe('Test PaginationElement component', () => {
  const wrapper = mount(PaginationElement, {
    props: {
      pageCount: 1,
      pages: 2,
      lengths: [5, 10, 20, 100],
    },
  })

  it('should pagination emits events', async () => {
    wrapper.vm.length = 20
    wrapper.vm.$emit('update:length', 20)
    expect(wrapper.emitted()['update:length']).toBeTruthy()
  })
})
