<template>
  <section class="detail-services">
    <h4 class="detail-services__title">
      НАШИ УСЛУГИ
    </h4>
    <CardDetailService
      v-for="card in cardsDetailServices"
      :key="card.title"
      :title="card.title"
      :img="card.img"
    />
  </section>
</template>

<script>

import { cardsDetailServices } from '@/data/cardsDetailServices'

export default {
  name: 'DetailServices',
  data () {
    return {
      cardsDetailServices
    }
  }

}
</script>

<style lang="scss" scoped>
  .detail-services {
    display: flex;
    flex-direction: column;
  }
</style>
