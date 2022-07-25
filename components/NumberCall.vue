<template>
  <a href="tel:+79615994369" class="number-call">
    <img
      class="number-call__icon"
      src="@/assets/img/call.svg"
      alt="Вызов"
    >
    <div class="number-call__text">
      <p class="number-call__number">
        +7 (928) 036 10 12
      </p>
      <p class="number-call__up">
        Звоните
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.number-call {
  color: #000000;
  text-decoration: none;
  @include flex-center;
  @include hover-opacity;

  &__icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    @include media-desktop {
      width: 50px;
      height: 50px;
    }
  }

  &__text {
    @include flex-center-column
  }

  &__number {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 15px;
    margin: 0 0 5px 0;
    text-decoration: underline;

    @include media-desktop {
      font-size: 23px;
    }
  }

  &__up {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 12px;
    margin: 5px 0 0 0;

    @include media-desktop {
      font-size: 18px;
    }
  }
}

</style>
