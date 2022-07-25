<template>
  <div class="geolocation-city">
    <img
      class="geolocation-city__icon"
      src="@/assets/img/geolocation-icon.svg"
      alt="Мы здесь"
    >
    <p class="geolocation-city__address">
      г. Краснодар
    </p>
  </div>
</template>

<style lang="scss" scoped>
.geolocation-city {
  display: none;

  @include media-desktop {
    display: flex;
    justify-content: center;
    align-items: center;

  }
  &__icon {
    width: 44px;
    height: 40px;
    margin-right: 10px;
  }
  &__address {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 23px;
    margin: 0;
  }
}

</style>
