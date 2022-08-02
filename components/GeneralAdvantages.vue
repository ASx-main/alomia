<template>
  <section class="general-advantages">
    <div class="general-advantages__content">
      <h4 class="general-advantages__title">
        ПОЧЕМУ НУЖНО ВЫБРАТЬ ИМЕННО НАС?
      </h4>
      <div class="general-advantages__card">
        <CardGeneralAdvantage
          v-for="card in cardsAdvantages"
          :key="card.title"
          :title="card.title"
          :text="card.text"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardGeneralAdvantage from '@/components/CardGenaralAdvantade.vue'
import { cardsAdvantages } from '@/data/cardsAdvantages'

export default {
  components: {
    CardGeneralAdvantage
  },
  data () {
    return {
      cardsAdvantages
    }
  }
}
</script>

<style lang="scss" scoped>
.general-advantages {
  background-image: url("~/assets/img/general-advantage-background.jpg");
  position: relative;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  padding: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    row-gap: 35px;

    @include media-desktop {
      row-gap: 60px;
    }

  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 23px;
    color: #FFFFFF;

    @include media-desktop {
      text-align: center;
    }
  }

  &__card {
    @include media-desktop {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      row-gap: 60px;
    }
  }
}
</style>
