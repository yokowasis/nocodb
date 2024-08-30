<template>
  <div class="gallery-new2">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <!-- Use the prop here -->
  </div>
</template>

<script>
export default {
  name: 'GalleryNew2',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.gallery-new2 {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
