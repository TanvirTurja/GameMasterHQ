<template>
  <div v-if="showModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div class="relative max-w-3xl w-full">
      <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl focus:outline-none">&times;</button>
      <img :src="selectedImage" alt="Full screen" class="max-w-full max-h-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    selectedImage: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
/* Your styles for the modal component go here */
</style>
