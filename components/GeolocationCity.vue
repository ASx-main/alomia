<template>
  <a href="#geolocation" class="geolocation-city">
    <img
      class="geolocation-city__icon"
      src="@/assets/img/svg/geolocation-icon.svg"
      alt="Мы здесь"
    >
    <p class="geolocation-city__address">
      г. Краснодар, хутор Ленина, ул.Уманская, 66
    </p>
  </a>
</template>

<style lang="scss" scoped>
.geolocation-city {
  display: none;
  text-decoration: none;
  color: #000000;

  @include media-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26%;

  }
  &__icon {
    width: 44px;
    height: 40px;
    margin-right: 10px;
  }
  &__address {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 20px;
    margin: 0;
  }
}

</style>
