<template>
  <div class="nav-menu">
    <ul class="nav-menu__list">
      <li class="nav-menu__item">
        <a class="nav-menu__link" href="#banner"> ГЛАВНАЯ</a>
      </li>
      <li>
        <a class="nav-menu__link" href="#advantages"> О КОМПАНИИ</a>
      </li>
      <li>
        <a class="nav-menu__link" href="#services"> УСЛУГИ</a>
      </li>
      <li>
        <a class="nav-menu__link" href="#contact"> КОНТАКТЫ</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav-menu {
  display: none;

  @include media-desktop {
    display: block;
    border-top: solid 1px #000000;
    padding: 0;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 40px;
  }

  &__link {
    font-family: 'Montserrat-SemiBold', sans-serif;
    color: $button-color-green;
    text-decoration: none;
    font-size: 20px;

    @include hover-opacity
  }
}

</style>
