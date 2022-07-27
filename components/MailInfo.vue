<template>
  <a href="https://mail.ru/" class="mail-info">
    <img class="mail-info__icon" src="@/assets/img/mail-icon.svg" alt="">
    <div class="mail-info__block-text">
      <p class="mail-info__address">
        alomya@mail.ru
      </p>
      <p class="mail-info__text">
        Пишите
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.mail-info {
  display: none;

  @include media-desktop {
    color: #000000;
    text-decoration: none;
    @include flex-center;
    @include hover-opacity;
  }

  &__icon {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  &__address {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 15px;
    text-decoration: underline;
    margin: 0 0 5px 0;

    @include media-desktop {
      font-size: 23px;
    }
  }

  &__block-text {
    display: flex;
    flex-direction: column;
  }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 12px;
    margin: 5px 0 0 0;

    @include media-desktop {
      font-size: 18px;
    }
  }

}

</style>
