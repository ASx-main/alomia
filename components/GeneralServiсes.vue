<template>
  <section class="general-services">
    <div
      v-for="card of cardsServices"
      :key="card.title"
      class="general-services__wrapper-card-services"
    >
      <CardService
        :id="card.id"
        class="general-services__card-services"
        :title="card.title"
        :text="card.text"
        :img="card.img"
      />
    </div>
  </section>
</template>

<script>
import CardService from '@/components/CardService.vue'
import { cardsServices } from '@/data/cardsServices'

export default {
  components: {
    CardService
  },
  data () {
    return {
      cardsServices
    }
  }

}
</script>

<style lang="scss" scoped>
.general-services {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  row-gap: 40px;

  @include media-desktop {
    flex-direction: row;
    margin: 0;
    padding: 70px 50px;
  }

  &__wrapper-card-services {
    height: 750px;

    @include media-desktop {
      height: 1000px;
    }
  }

  &__wrapper-card-services {
    @include media-desktop {
      width: 25%;
    }
  }
}
</style>
