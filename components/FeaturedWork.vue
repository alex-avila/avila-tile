<template>
  <div class="featured-work__wrapper">
    <div class="featured-work">
      <div class="title__wrapper">
        <div class="title">
          <h2 class="title__title">Featured Work</h2>
          <span class="title__underline" />
        </div>
      </div>
      <div class="works">
        <div
          v-for="{ src } in featuredWork"
          :key="src"
          class="work"
        >
          <img
            :src="src"
            class="work__image"
            alt="Kitchen backsplash"
          >
          <!-- <div class="work__info">
            <h3 class="work__title">Kitchen backsplash</h3>
            <p class="work__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> -->
        </div>
      </div>
      <div
        v-if="hasMoreImages"
        class="see-more__wrapper"
      >
        <v-button
          to=""
          class="see-more"
          ghost
        >
          Load more
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import featuredWork from '@/mixins/featuredWork'
import VButton from './VButton.vue'

export default {
  components: {
    VButton
  },

  mixins: [featuredWork]
}
</script>


<style lang="sass" scoped>
@import '../assets/styles/components/featured-work.sass'
</style>
