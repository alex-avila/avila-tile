<template>
  <div class="view-image-modal">
    <button
      class="close-icon"
      @click="$emit('close-modal')"
    >
      <close-icon />
    </button>
    <div class="image__container">
      <img
        :src="image"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/icons/CloseIcon.vue'

export default {
  components: {
    CloseIcon
  },

  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/components/view-image-modal'
</style>
