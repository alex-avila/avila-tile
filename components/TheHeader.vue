<template>
  <header
    :class="[
      'header',
      {'is-static': isStatic},
      {'is-landing-page': $route.path === '/'}
    ]"
  >
    <nav class="nav">
      <div class="nav__wrapper">
        <nuxt-link
          class="nav__logo"
          to="/"
        >
          Avila Tile
        </nuxt-link>
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
            to="/"
            @click.native="closeMenu"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/about"
            @click.native="closeMenu"
          >
            About
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
            @click.native="closeMenu"
          >
            Portfolio
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
            @click.native="closeMenu"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
            @click.native="closeMenu"
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
    },

    closeMenu() {
      this.toggleMenu(false, 250)
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/styles/components/the-header'
</style>
