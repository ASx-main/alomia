<template>
  <div class="card-detail-service">
    <img class="card-detail-service__img" :src="getImg" alt="">
    <span class="card-detail-service__title">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DetailServices',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
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
.card-detail-service {
  background: $color-grey;

  &__title {
    font-family: 'Montserrat-Bold', sans-serif ;
    font-size: 18px;
    color: $button-color-green;
    padding: 35px 0;
  }

  &__img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
}
</style>
