<template>
  <div>
    <section class="container">
      <div
        ref="hero"
        class="hero"
      >
        <div class="hero__overlay" />
      </div>
      <div
        ref="callToAction"
        class="callToAction__wrapper"
      >
        <h1 class="callToAction__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <v-button class="callToAction__btn">Contact Us</v-button>
      </div>
    </section>
    <featured-works />
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue'
import FeaturedWorks from '@/components/FeaturedWorks.vue'

export default {
  components: {
    VButton,
    FeaturedWorks
  },

  data: () => ({
    parallaxSlowDown: 1.33
  }),

  mounted() {
    this.callToActionOffset = this.getYOffset(this.$refs.callToAction)

    window.addEventListener('scroll', this.throttle(this.parallaxThings, 5))
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
        { height } = window.getComputedStyle(hero),
        { pageYOffset } = window

      const verticalPosition = pageYOffset / this.parallaxSlowDown

      hero.style.backgroundPosition = `center -${verticalPosition}px`
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
@import '../assets/sass/landing'
</style>
