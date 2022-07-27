<template>
  <div class="card-service">
    <img class="card-service__img" :src="getImg" alt="Картинка">
    <span class="card-service__title">{{ title }}</span>
    <p class="card-service__text">
      {{ text }}
    </p>
    <img class="card-service__check-icon" src="@/assets/img/svg/check.svg" alt="Картинка">
  </div>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    getImg () {
      return require(`@/assets/img/${this.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-service {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  text-align: center;
  margin: 0 50px;
  border: solid $button-color-green 1px;

    &__title {
      font-family: 'Montserrat-SemiBold', sans-serif;
      font-size: 18px;
      margin: 20px auto;
    }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 16px;
    line-height: 35px;
    margin: 0 20px;
  }

  &__check-icon {
    margin: 45px 20px 20px auto;
    width: 50px;
  }
}

</style>
