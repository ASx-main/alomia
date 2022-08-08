<template>
  <div :id="id" class="card-service">
    <img class="card-service__img" :src="getImg" alt="Картинка">
    <div class="card-service__content">
      <span class="card-service__title">{{ title }}</span>
      <p class="card-service__text">
        {{ text }}
      </p>
      <img class="card-service__check-icon" src="@/assets/img/svg/check.svg" alt="Картинка">
    </div>
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
    },
    id: {
      type: String,
      default: ''
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
  text-align: center;
  border: solid $button-color-green 1px;
  height: 100%;
  row-gap: 50px;

  &__img {
    min-height: 35%;
    max-height: 35%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    height: 65%;
    padding: 0 30px 30px;
  }

  &__title {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 18px;
    margin: 0 auto 20px auto;
  }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 16px;
    line-height: 35px;
  }

  &__check-icon {
    width: 50px;
    align-self: flex-end;
    margin-top: auto;
  }
}

</style>
