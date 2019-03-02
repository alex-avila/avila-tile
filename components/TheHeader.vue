<template>
  <header
    :class="[
      'header',
      {'is-static': isStatic},
      {'is-landing-page': $route.path === '/'}
    ]"
  >
    <nav class="nav">
      <div class="nav__wrapper default-wrapper">
        <nuxt-link
          class="nav__logo"
          to="/"
        >
          Avila Tiling
        </nuxt-link>
        <menu-icon
          class="icon menu-icon"
          @click.native="toggleMenu(true)"
        />
        <div :class="['nav__links', {'is-visible': isMenuShown}]">
          <close-icon
            class="icon nav__close"
            @click.native="toggleMenu(false, 250)"
          />
          <nuxt-link
            class="nav__link nav__link--home"
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
import MenuIcon from '@/assets/icons/MenuIcon.vue'
import CloseIcon from '@/assets/icons/CloseIcon.vue'

export default {
  components: {
    MenuIcon,
    CloseIcon
  },

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
