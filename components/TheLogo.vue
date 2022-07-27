<template>
  <a href="#">
    <img
      class="logo"
      src="@/assets/img/logo.jpg"
      alt="Логотип"
    >
  </a>
</template>

<style lang="scss" scoped>
.logo {
  width: 50px;
  height: 50px;

  @include media-desktop {
    width: 90px;
    height: 90px;
  }
}

</style>
