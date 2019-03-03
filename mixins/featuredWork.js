export default {
  data() {
    return {
      featuredWork: [
        {
          src: this.getFeaturedImage('70s')
        },
        {
          src: this.getFeaturedImage('checkers')
        },
        {
          src: this.getFeaturedImage('checkers2')
        },
        {
          src: this.getFeaturedImage('white-backsplash')
        },
        // {
        //   src: this.getFeaturedImage('white-tile')
        // },
        {
          src: this.getFeaturedImage('wood-tile')
        }
      ]
    }
  },

  methods: {
    getFeaturedImage(image) {
      return require(`@/assets/images/featured-work/${image}.jpg`)
    }
  }
}
