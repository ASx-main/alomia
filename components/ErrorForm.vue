<template>
  <div class="error-form">
    <span class="error-form__title">
      К сожалению, при отправке данных произошла ошибка.
      Перезагрузите страницу и попробуйте снова.
    </span>
  </div>
</template>

<style lang="scss" scoped>
.error-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 16px;
    color: $error-color
  }
}
</style>
