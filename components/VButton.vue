<template>
  <button :class="['button', {'button--ghost': ghost}]">
    <span :class="{'hover-gradient': !ghost}"/>
    <div class="text">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    ghost: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/styles/components/buttons'
</style>
