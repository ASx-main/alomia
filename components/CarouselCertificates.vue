<template>
  <div class="carousel-certificates">
    <client-only>
      <carousel>
        <slide>
          <!--          <img :src="getImg" alt="">-->
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>

export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    getImg () {
      return require(`@/assets/img/${this.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
