<template>
  <header>
    <nav class="nav">
      <div class="nav__wrapper">
        <div class="nav__logo">Avila Tile</div>
        <div class="nav__links">
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


<style lang="sass" scoped>
.nav
  padding: 1em
  color: white

.nav__wrapper
  max-width: 1000px
  margin: auto
  display: flex
  justify-content: space-between

.nav__logo
  letter-spacing: 3px
  text-transform: uppercase
  font-weight: 600

.nav__link
  display: inline
  text-decoration: none
  color: white
  border-bottom: 1px solid white;

  &:not(:last-child)
    margin-right: 1em
  
  &:visited
    color: white

  &:hover
    border-bottom: none;
</style>
