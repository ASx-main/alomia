<template>
  <section class="application-form">
    <div class="application-form__content">
      <div class="application-form__content-text">
        <span class="application-form__text">
          ДОВЕРЯЙТЕ ТОЛЬКО ПРОФЕССИОНАЛАМ!
        </span>
        <span class="application-form__text">
          РАБОТАЕМ КРУГЛОСУТОЧНО - 24/7
        </span>
        <span class="application-form__text">
          ВЫЕЗД БЕСПЛАТНО В ДЕНЬ ОБРАЩЕНИЯ
        </span>
      </div>
      <div class="application-form__phone">
        <a href="tel:+79280361012" class="application-form__link">
          <img
            src="@/assets/img/svg/phone-white-icon.svg"
            alt="Телефон"
            class="application-form__phone-icon"
          >
          <span class="application-form__number">
            +7 (928) 036 10 12
          </span>
        </a>
      </div>
    </div>

    <TheForm id="request" class="application-form__form-block" />
  </section>
</template>

<script>
import TheForm from '@/components/TheForm.vue'

export default {
  name: 'BlockApplicationForm',
  components: {
    TheForm
  }
}
</script>

<style lang="scss" scoped>
.application-form {
  background-color: $button-color-green;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  row-gap: 50px;

  @include media-desktop {
    align-items: center;
    row-gap: 70px;
  }

  &__content-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    @include media-desktop {
      row-gap: 40px;
      align-items: normal;
    }
  }

  &__content {
    display: flex;
    width: 100%;
    row-gap: 30px;
    flex-direction: column;

    @include media-desktop {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 60%;
    }

  }

  &__text {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    column-gap: 20px;
  }

  &__phone-icon {
    width: 30px;
    height: 30px;

    @include media-desktop {
      width: 50px;
      height: 50px;
    }
  }

  &__number {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 23px;
    color: #FFFFFF;

    @include media-desktop {
      font-family: "Montserrat-SemiBold", sans-serif;
    }
  }

  &__form-block {
    @include media-desktop {
      width: 60%;
    }
  }
}

</style>
