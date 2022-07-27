<template>
  <div class="banner">
    <div class="banner__content">
      <h3 class="banner__caption">
        АССОЦИАЦИЯ "ДЕЗИНФЕКЦИЯ И ПЕСТ-КОНТРОЛЬ"
      </h3>
      <img class="banner__blazon" src="@/assets/img/blazon.jpg" alt="">
      <h1 class="banner__caption-main">
        УНИЧТОЖЕНИЕ НАСЕКОМЫХ И ГРЫЗУНОВ
      </h1>
      <div class="banner__advantage">
        <div
          v-for="advantage in advantages"
          :key="advantage"
          class="banner__advantage-caption-wrapper"
        >
          <h4
            class="banner__advantage-caption"
          >
            {{ advantage }}
          </h4>
        </div>
      </div>
      <h3 class="banner__slogan">
        ИЗБАВЬТЕСЬ ОТ ВРЕДИТЕЛЕЙ ПРЯМО СЕЙЧАС
      </h3>
      <h3 class="banner__caption-consultation">
        Консультация и обследование бесплатно
      </h3>
      <ButtonOrder
        text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
        class="banner__button-consultation"
      />
    </div>
  </div>
</template>

<script>
import ButtonOrder from '@/components/ButtonOrder.vue'

export default {
  components: {
    ButtonOrder
  },
  data () {
    return {
      advantages: [
        'Гарантия качества',
        'Избавим от вредителей за 1 час',
        'Безопасно для детей и животных',
        'Соответствует правилам СанПина',
        'Результат сразу после обработки'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  padding: 30px 0;

  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("~/assets/img/banner-img.jpg");

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
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }

  &__caption {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 15px;
    color: #FFFFFF;
    margin: 25px;

    @include media-desktop {
      font-size: 23px;
      margin: 50px auto 15px auto;
    }
  }

  &__blazon {
    width: 80px;

    @include media-desktop {
      width: 100px;
    }
  }

  &__caption-main {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 25px;
    color: $button-color-yellow;
    text-align: center;
    margin: 35px 25px;

    @include media-desktop {
      font-size: 35px;
    }
  }

  &__advantage {
    font-family: 'Montserrat-Medium', sans-serif;
    font-size: 18px;
    color: #FFFFFF;

    @include media-desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 50px;
      text-align: center;
      margin: 20px 50px;
    }
  }

  &__advantage-caption-wrapper {
    @include media-desktop {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: solid #FFFFFF 1px;
      padding: 30px;
    }
  }

  &__slogan {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 17px;
    color: $color-bright-green;
    margin: 20px 20px 0 20px;
  }

  &__caption-consultation {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
  }
}
</style>
