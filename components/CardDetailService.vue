<template>
  <div :id="id" class="card-detail-service">
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
    },
    id: {
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
.card-detail-service {
  background: $color-grey;
  width: 100%;
  height: 350px;

  @include media-laptop {
    width: 50%;
  }

  @include media-desktop {
    width: 23%;
  }

  &__img {
    width: 100%;
    height: 85%;
    object-fit: cover;

    @include media-desktop {
      height: 70%;
    }
  }

  &__wrapper-title {
    width: 100%;
    height: 15%;
    @include flex-center;

    @include media-desktop {
      height: 30%;
      padding: 15px;
      @include flex-center;
    }
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif ;
    font-size: 18px;
    color: $button-color-green;
    text-align: center;
  }
}
</style>
