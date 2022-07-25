<template>
  <div>
    <button class="burger-menu__btn">
      <img class="burger-menu__icon" src="@/assets/img/menu.svg" alt="Меню">
    </button>
  </div>
</template>

<script>
export default {
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
  }

  &__icon {
    width: 45px;
  }

}

</style>
