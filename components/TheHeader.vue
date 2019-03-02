<template>
  <header
    :class="[
      'header',
      {'is-static': isStatic}
    ]"
  >
    <nav class="nav">
      <div class="nav__wrapper">
        <div class="nav__logo">Avila Tile</div>
        <div
          class="menu-icon"
          @click="toggleMenu(true)"
        >
          MENU
        </div>
        <div :class="['nav__links', {'is-visible': isMenuShown}]">
          <span
            class="nav__close"
            @click="toggleMenu(false, 250)"
          >
            Close
          </span>
          <nuxt-link
            class="nav__link"
            to="/about"
          >
            About
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >
            Portfolio
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >
            Contact
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    isMenuShown: false,
    isStatic: false
  }),

  methods: {
    toggleMenu(isShown, isStaticTimeout) {
      this.isMenuShown = isShown

      // This is to wait for the transition of the menu hiding
      setTimeout(() => {
        this.isStatic = isShown
      }, isStaticTimeout)
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/styles/components/the-header'
</style>
