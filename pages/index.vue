<template>
  <div>
    <transition name="fade">
      <div
        v-if="!finishedSetUp"
        class="loading-overlay"
      />
    </transition>
    <section class="container">
      <div class="hero">
        <div
          ref="hero"
          class="hero__img"
        />
        <div class="hero__overlay" />
      </div>
      <div
        ref="callToAction"
        class="callToAction__wrapper"
      >
        <h1 class="callToAction__text">
          Delivering our best work to your business or residential improvement.
        </h1>
        <v-button class="callToAction__btn">Contact Us</v-button>
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
  },

  data: () => ({
    parallaxSlowDown: 0.25,
    finishedSetUp: false
  }),

  mounted() {
    this.callToActionOffset = this.getYOffset(this.$refs.callToAction)

    this.parallaxThings()

    window.addEventListener('scroll', this.throttle(this.parallaxThings, 5))

    this.finishedSetUp = true
  },

  destroyed() {
    document.removeEventListener(
      'scroll',
      this.throttle(this.parallaxThings, 5)
    )
  },

  methods: {
    getYOffset(elem) {
      const toNum = px => Number(px.split('px')[0])

      const { offsetHeight } = elem
      const { height, paddingTop, paddingBottom } = window.getComputedStyle(
        elem
      )
      return (
        offsetHeight + toNum(height) + toNum(paddingTop) + toNum(paddingBottom)
      )
    },

    fadeCallToAction() {
      const { callToAction } = this.$refs,
        { callToActionOffset } = this,
        { pageYOffset } = window

      const opacity = (callToActionOffset - pageYOffset) / callToActionOffset

      callToAction.style.opacity = opacity < 0 ? 0 : opacity > 0.9 ? 1 : opacity
    },

    parallaxBackground() {
      const { hero } = this.$refs,
        { height } = window.getComputedStyle(hero, '::after'),
        { pageYOffset } = window

      const verticalPosition = pageYOffset / (1 / this.parallaxSlowDown)

      hero.style.backgroundPosition = `center ${verticalPosition}px`
    },

    parallaxThings() {
      this.fadeCallToAction()
      this.parallaxBackground()
    },

    throttle(fn, wait) {
      var time = Date.now()
      return function() {
        if (time + wait - Date.now() < 0) {
          window.requestAnimationFrame(fn)
          time = Date.now()
        }
      }
    }
  }
}
</script>

<style lang="sass">
@import '../assets/styles/pages/landing'
</style>
