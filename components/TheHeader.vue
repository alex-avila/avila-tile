<template>
  <header>
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
            @click="toggleMenu(false)"
          >Close</span>
          <nuxt-link
            class="nav__link"
            to="/"
          >About</nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >Portfolio</nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >Blog</nuxt-link>
          <nuxt-link
            class="nav__link"
            to="/"
          >Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    isMenuShown: false
  }),

  methods: {
    toggleMenu(isShown) {
      this.isMenuShown = isShown
    }
  }
}
</script>


<style lang="sass" scoped>
.nav
  padding: 1em
  color: white

.nav__wrapper
  height: 50px
  max-width: 1000px
  margin: auto
  display: flex
  justify-content: space-between

.nav__logo
  letter-spacing: 3px
  text-transform: uppercase
  font-weight: 700

.menu-icon
  cursor: pointer

  @media (min-width: 560px)
    display: none

.nav__links
  display: flex
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  height: 100%
  width: 100%
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)
  background-blend-mode: multiply;
  color: white
  flex-direction: column
  align-items: center
  justify-content: center
  transform: translateY(-100%)
  opacity: 0;
  transition: all 0.33s ease-in-out

  &.is-visible
    opacity: 1;
    transform: translateY(0)

  @media (min-width: 560px)
    transition: none
    transform: translateY(0)
    display: block
    opacity: 1
    position: relative
    background: transparent
    height: auto
    width: auto

.nav__close
  position: absolute
  top: 1em
  right: 1em
  cursor: pointer

  @media (min-width: 560px)
    display: none

.nav__link
  display: inline
  text-decoration: none
  color: white
  padding: 1em
  font-weight: 600

  @media (min-width: 560px)
    padding: 0

  &:not(:last-child)
    @media (min-width: 560px)
      margin-right: 1em
  
  &:visited
    color: white

  &:hover
    border-bottom: none;
</style>
