<template>
  <section class="the-certificates">
    <div class="the-certificates__content">
      <h4 class="the-certificates__title">
        СЕРТИФИКАТЫ
      </h4>
      <CarouselCertificates
        v-for="doc in docCertificates"
        :key="doc.img"
        :img="doc.img"
      />
    </div>
  </section>
</template>

<script>
import { docCertificates } from '@/data/docСertificates'
export default {
  data () {
    return {
      docCertificates
    }
  }
}
</script>

<style lang="scss" scoped>
.the-certificates {
  position: relative;
  background-image: url("~/assets/img/the-certificat-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.7);
  }

  &__content {
    position: relative;
    z-index: 1;
  }
}

</style>
