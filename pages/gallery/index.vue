<template>
  <div>
    <section>
      <main-heading>Gallery</main-heading>
      <div class="gallery__container">
        <div
          v-for="({ src }, i) in galleryImages"
          :key="src + i"
          class="gallery__image-container"
          @click="viewImage(src)"
        >
          <img
            :src="src"
            class="gallery__image"
            alt=""
          >
        </div>
      </div>
    </section>
    <transition name="slide-up">
      <view-image-modal
        v-if="showModal"
        :image="modalImage"
        @close-modal="closeImageModal"
      />
    </transition>
  </div>
</template>

<script>
import MainHeading from '@/components/MainHeading.vue'
import ViewImageModal from '@/components/ViewImageModal.vue'

export default {
  components: {
    MainHeading,
    ViewImageModal
  },

  data() {
    return {
      galleryImages: [
        { src: this.getImage('70s') },
        { src: this.getImage('blue-bathroom') },
        { src: this.getImage('blur-on-blue-tiles') },
        { src: this.getImage('bnw-pattern-floor') },
        { src: this.getImage('bnw-pattern') },
        { src: this.getImage('checkers') },
        { src: this.getImage('checkers2') },
        { src: this.getImage('diagonal') },
        { src: this.getImage('toilette') },
        { src: this.getImage('white-backsplash') },
        { src: this.getImage('white-tile') },
        { src: this.getImage('wood-tile') },
        { src: this.getImage('work-in-progress') },
        { src: this.getImage('working') }
      ],

      showModal: false,

      modalImage: ''
    }
  },

  methods: {
    getImage(image) {
      return require(`@/assets/images/featured-work/${image}.jpg`)
    },

    viewImage(image) {
      this.modalImage = image
      this.showModal = true
    },

    closeImageModal() {
      this.showModal = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/pages/gallery'
</style>
