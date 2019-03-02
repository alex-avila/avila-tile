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
          v-for="work in [1, 2, 3]"
          :key="work"
          class="work"
        >
          <img
            class="work__image"
            src="@/assets/images/tile-sample.jpg"
            alt="Kitchen backsplash"
          >
          <div class="work__info">
            <h3 class="work__title">Kitchen backsplash</h3>
            <p class="work__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="see-more__wrapper">
        <v-button
          to=""
          class="see-more"
          ghost
        >
          Gallery ➡️
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from './VButton.vue'

export default {
  components: {
    VButton
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/styles/components/featured-work.sass'
</style>
