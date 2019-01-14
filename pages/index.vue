<template>
  <section class="container">
    <div class="hero">
      <div class="hero__overlay" />
    </div>
    <div class="callToAction__wrapper">
      <h1 class="callToAction__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sem
        suscipit.
      </h1>
      <v-button class="callToAction__btn">Contact Us</v-button>
    </div>
  </section>
</template>

<script>
import VButton from '@/components/VButton.vue'

export default {
  components: {
    VButton
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/landing'
</style>
