<template>
  <section class="container">
    <div class="hero">
      <div class="hero__overlay" />
    </div>
    <div>
      <h1 class="title">Avila Tile</h1>
    </div>
  </section>
</template>

<style>
.container {
  min-height: calc(100vh - 82px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('../assets/background-large.jpg');
  background-position: center;
  background-size: cover;
  top: 0;
  overflow: hidden;
  z-index: -1;
}

.hero__overlay {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}

.title {
  font-family: 'Staatliches', 'Futura', 'Avenir', 'Source Sans Pro',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
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
