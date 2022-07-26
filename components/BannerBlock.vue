<template>
  <div class="banner">
    <div class="banner__opacity">
      <h1> hello world</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 81vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("~/assets/img/banner-img.jpg");

  &__opacity {
    background: rgba(0, 0, 0, 0.65);
    height: 81vh;
  }
}
</style>
