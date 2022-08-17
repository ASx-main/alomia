<template>
  <a href="#banner" class="logo">
    <img
      class="logo-img"
      src="@/assets/img/logo.jpg"
      alt="Логотип"
    >
    <span class="logo__name-company">
      Аломия
    </span>
  </a>
</template>

<style lang="scss" scoped>
.logo {
  @include media-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    color: #000000;
    text-decoration: none;
  }

  .logo__name-company {
    display: none;
    @include media-desktop {
      display: block;
      font-family: 'Montserrat-Regular', sans-serif;
      color: #000000;
      font-size: 23px;
    }
  }

  .logo-img {
    width: 50px;
    height: 50px;

    @include media-desktop {
      width: 90px;
      height: 90px;
    }
}

}

</style>
