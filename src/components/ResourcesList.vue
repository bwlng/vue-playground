<template>
  <div>
    <div class="bg-gray-200 p-4 mb-4 rounded text-center" v-show="isProcessing">
      Loading <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div v-for="post in posts">
      <h1 class="font-medium uppercase tracking-wide">{{ post.title }}</h1>
      <div class="text-gray-500">By User #{{ post.userId }}</div>
      <p class="mt-2">{{ post.body }}</p>
      <hr class="my-3 border-t" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesList',
  props: ['posts', 'users', 'isProcessing'],
}
</script>
