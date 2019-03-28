<template>
  <div class="border border-gray-300 p-4">
    <h2 class="uppercase font-medium tracking-wide">Authors</h2>
    <template v-if="isProcessing">
      Loading <i class="fas fa-spinner fa-spin" v-if="isProcessing"></i>
    </template>
    <div v-for="(user, index) in users" :class="{'mt-4': index > 0, 'mt-2': index == 0}">
      <label>
        <input type="checkbox" @change="updateCriteria(user, $event)" :checked="user.isSelected"> {{ `User #${user.id}` }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesSidebar',
  props: ['users', 'isProcessing'],
  methods: {
    updateCriteria(user, $event) {
      this.$root.$emit('updateCriteria', user, $event)
    }
  }
}
</script>
