<template>
  <div>
    <div class="flex flex-wrap">
      <template v-for="(user, index) in users">
        <div class="bg-gray-500 p-1 rounded-sm mb-2 mr-2" v-if="user.isSelected">
          {{ `User #${user.id}` }} <button @click.prevent="remove(user)"><i class="fas fa-times text-sm"></i></button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesCriteria',
  props: ['users'],
  methods: {
    remove(user) {
      this.$root.$emit('removeCriteria', user)
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

/*
  .show-toggle-enter-active, .show-toggle-leave-active {
    transition: .5s;
    transition-property: opacity, max-height;
  }
  .show-toggle-enter, .show-toggle-leave-to {
    opacity: 0;
  }
*/
</style>
