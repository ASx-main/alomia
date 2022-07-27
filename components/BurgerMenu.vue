<template>
  <div class="burger-menu">
    <button class="burger-menu__btn" v-on="$listeners">
      <img class="burger-menu__icon" src="@/assets/img/menu.svg" alt="Меню">
    </button>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu'
}
</script>

<style lang="scss" scoped>
.burger-menu {

  &__btn {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: none;
    padding: 0;
    background-color: #FFFFFF;
    cursor: pointer;
    @include hover-opacity;
  }

  &__icon {
    width: 45px;
  }

}

</style>
