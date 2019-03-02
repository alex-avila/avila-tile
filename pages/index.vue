<template>
  <div>
    <section class="container">
      <div class="hero">
        <div class="hero__img" />
        <div class="hero__overlay" />
      </div>
      <div class="callToAction__wrapper">
        <h1 class="callToAction__text">
          Delivering our best work to your business or residential improvement.
        </h1>
        <v-button class="callToAction__btn">☎️ Contact Us</v-button>
      </div>
    </section>
    <featured-work />
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue'
import FeaturedWork from '@/components/FeaturedWork.vue'

export default {
  components: {
    VButton,
    FeaturedWork
  }
}
</script>

<style lang="sass">
@import '../assets/styles/pages/landing'
</style>
