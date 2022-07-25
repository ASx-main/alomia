<template>
  <a href="#">
    <img
      class="logo"
      src="@/assets/img/logo.jpeg"
      alt="Логотип"
    >
  </a>
</template>

<style lang="scss" scoped>
.logo {
  width: 80px;
  height: 80px;

  @include media-desktop {
    width: 120px;
    height: 120px;
  }
}

</style>
