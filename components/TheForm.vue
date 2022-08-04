<template>
  <form class="the-form">
    <span class="the-form__title">
      ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ
    </span>

    <div class="the-form__inputs">
      <input type="text" placeholder="Имя" class="the-form__input">
      <input type="number" placeholder="Телефон" class="the-form__input">
    </div>

    <div class="the-form__button-block">
      <ButtonOrder text="ОСТАВИТЬ ЗАЯВКУ" color="yellow" />
      <span class="the-form__text">
        Ваши данные не будут переданы третьим лицам
      </span>
    </div>
  </form>
</template>

<script>
import ButtonOrder from '@/components/ButtonOrder.vue'

export default {
  components: {
    ButtonOrder
  }
}
</script>

<style lang="scss" scoped>
.the-form {
  background: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  padding: 50px 25px;

  @include media-desktop {
    padding: 50px 100px;
  }

  &__title {
    text-align: center;
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 16px;
    color: $button-color-green;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &__input {
    border: none;
    border-bottom: solid 1px $button-color-green;
    width: 100%;
    padding-bottom: 10px;

    &::placeholder {
      font-family: 'Montserrat-Regular', sans-serif;
      font-size: 18px;
      color: $button-color-green;
    }

    &:focus {
      outline: none;
    }
  }

  &__button-block {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    text-align: center;
  }
}

</style>
