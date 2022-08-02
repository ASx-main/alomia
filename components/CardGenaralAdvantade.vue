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

  @include media-desktop {
    row-gap: 30px;
    width: calc((100%/ 3) - 30px * 2);
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 18px;
    color: #FFFFFF;

    @include media-desktop {
      font-size: 20px;
    }
  }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 30px;

    @include media-desktop {
      font-size: 18px;
    }
  }
}

</style>
