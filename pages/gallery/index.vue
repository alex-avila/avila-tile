<template>
  <section>
    <main-heading>Gallery</main-heading>
    <div class="gallery__container">
      <div
        v-for="({ src }, i) in galleryImages"
        :key="src + i"
        class="gallery__image-container"
      >
        <img
          :src="src"
          class="gallery__image"
          alt=""
        >
      </div>
    </div>
  </section>
</template>

<script>
import MainHeading from '@/components/MainHeading.vue'

export default {
  components: {
    MainHeading
  },

  data() {
    return {
      galleryImages: [
        { src: this.getImage('70s') },
        { src: this.getImage('blue-bathroom') },
        { src: this.getImage('checkers') },
        { src: this.getImage('checkers2') },
        { src: this.getImage('white-backsplash') },
        { src: this.getImage('white-tile') },
        { src: this.getImage('wood-tile') },
        { src: this.getImage('70s') },
        { src: this.getImage('blue-bathroom') },
        { src: this.getImage('checkers') },
        { src: this.getImage('checkers2') },
        { src: this.getImage('white-backsplash') },
        { src: this.getImage('white-tile') },
        { src: this.getImage('wood-tile') },
        { src: this.getImage('70s') }
      ]
    }
  },

  methods: {
    getImage(image) {
      return require(`@/assets/images/featured-work/${image}.jpg`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/pages/gallery'
</style>
