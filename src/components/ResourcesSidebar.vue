<template>
  <div class="border border-gray-300 p-4">
    <h2 class="uppercase font-medium tracking-wide">Authors</h2>
    <div v-for="(user, index) in users" :class="{'mt-4': index > 0, 'mt-2': index < 1}">
      <label >
        <input type="checkbox" @change="updateCriteria(user, $event)"> {{ user.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesSidebar',
  props: ['users'],
  methods: {
    updateCriteria(user, $event) {
      this.$root.$emit('updateCriteria', user, $event)
    }
  }
}
</script>

<style scoped>

</style>
