<template>
  <div class="default">
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheHeader }
}
</script>


<style lang="sass">
@import '../assets/styles/layout/default'
</style>
