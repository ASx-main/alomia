<template>
  <section class="detail-services">
    <h4 class="detail-services__title">
      НАШИ УСЛУГИ
    </h4>
    <div class="detail-services__cards">
      <CardDetailService
        v-for="card in cardsDetailServices"
        :id="card.id"
        :key="card.title"
        :title="card.title"
        :img="card.img"
        class="detail-services__card"
      />
    </div>
  </section>
</template>

<script>
import CardDetailService from '@/components/CardDetailService'
import { cardsDetailServices } from '@/data/cardsDetailServices'

export default {
  name: 'DetailServices',
  components: {
    CardDetailService
  },
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
    align-items: center;
    padding: 50px 0;

    @include media-desktop {
      padding: 50px;
    }

    &__title {
      font-family: 'Montserrat-Bold', sans-serif;;
      color: $button-color-green;
      font-size: 20px;
      padding: 50px 0;
    }

    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 35px;
      width: 100%;

      @include media-desktop {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
        column-gap: 10px;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include media-desktop {
        width: 23%;
        text-align: center;
      }
    }
  }
</style>
