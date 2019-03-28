<template>
  <div class="border-b">
    <div
      class="flex justify-between items-center py-2 uppercase font-medium tracking-wide cursor-pointer"
      @click="toggle()"
    >
      <slot name="title">Default Title</slot>
      <i class="fas" :class="{ 'fa-plus': true, 'is-open': isOpen }"></i>
    </div>
    <div :class="{ 'pb-4': true }" v-show="isOpen">
      <slot name="description">Default Description</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  data: () => {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = this.isOpen ? false : true
    }
  }
}
</script>

<style scoped>
  .fas {
    transition: transform 300ms;
  }

  .fas.is-open {
    transform: rotate(45deg);
  }
</style>
