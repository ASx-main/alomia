<template>
  <div class="carousel-certificates">
    <client-only>
      <carousel :per-page="perPage" pagination-color="#5CB85C">
        <slide v-for="img of images" :key="img.src">
          <img class="carousel-certificates__img" :src="getImg(img.src)" alt="Сертификат">
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import screenResolutions from '@/constants/screenResolutions'

export default {
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      perPage: 1
    }
  },
  mounted () {
    if (screen.width >= screenResolutions.desktop) {
      this.perPage = 3
    }
  },
  methods: {
    getImg (src) {
      return require(`@/assets/img/${src}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-certificates {
  width: 100%;

  &__img {
    width: 80%;
    height: 90%;

    @include media-desktop {
      width: 75%;
    }
  }

  .VueCarousel-slide {
    display: flex;
    justify-content: center;
  }
}
</style>
