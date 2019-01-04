<template>
  <section class="container">
    <div class="hero">
      <div class="hero__overlay" />
      <img
        src="@/assets/background-large.jpg"
        alt=""
      >
    </div>
    <div>
      <h1 class="title">Avila Tile</h1>
    </div>
  </section>
</template>

<style>
.container {
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero {
  position: absolute;
  height: 100vh;
  top: 0;
  overflow: hidden;
  z-index: -1;
}

.hero img {
  max-width: none;
  height: 100%;
  position: relative;
  z-index: -1;
}

.hero__overlay {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}

.title {
  font-family: 'Futura', 'Avenir', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.links {
  padding-top: 15px;
}
</style>
