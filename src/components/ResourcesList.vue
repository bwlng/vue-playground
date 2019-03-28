<template>
  <div>
    <div v-for="post in posts">
      <h1 class="font-medium uppercase tracking-wide">{{ post.title }}</h1>
      <div class="text-gray-500">By {{ post.userId }}</div>
      <p class="mt-2">{{ post.body }}</p>
      <hr class="my-3 border-t" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesList',
  props: ['posts'],
}
</script>
