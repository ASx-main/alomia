<template>
  <div class="card-general-advantage">
    <h4 class="card-general-advantage__title">
      {{ title }}
    </h4>
    <p class="card-general-advantage__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-general-advantage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 25px;

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
  }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 30px;
  }
}

</style>
