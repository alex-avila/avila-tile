<template>
  <div class="featured-works__wrapper">
    <div class="featured-works">
      <div class="title__wrapper">
        <div class="title">
          <h2 class="title__title">Featured Works</h2>
          <span class="title__underline" />
        </div>
      </div>
      <div class="works">
        <div
          v-for="work in [1, 2, 3]"
          :key="work"
          class="work"
        >
          <img
            src="@/assets/tile-sample.jpg"
            alt="Kitchen backsplash"
          >
          <div class="work__info">
            <h3 class="work__title">Kitchen backsplash</h3>
            <p class="work__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
