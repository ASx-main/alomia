<template>
  <div class="successful-bid">
    <span class="successful-bid__title">
      Заявка отправлена успешно! <br>
      Мы перезвоним Вам в ближайшее время!
    </span>
  </div>
</template>

<style lang="scss" scoped>
.successful-bid {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 16px;
    color: $button-color-green;
  }
}
</style>
