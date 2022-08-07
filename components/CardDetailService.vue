<template>
  <div class="card-detail-service">
    <img class="card-detail-service__img" :src="getImg" alt="">
    <div class="card-detail-service__wrapper-title">
      <span class="card-detail-service__title">
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDetailService',
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
  width: 100%;
  height: 350px;

  &__img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  &__wrapper-title {
    width: 100%;
    height: 30%;
    @include flex-center;

    @include media-desktop {
      padding: 15px;
      @include flex-center;
    }
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif ;
    font-size: 18px;
    color: $button-color-green;
  }
}
</style>
