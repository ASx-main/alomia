<template>
  <button class="button" :class="rootClasses">
    <span class="button-text" :class="textClasses">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonOrder',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    rootClasses () {
      return {
        green: this.color === 'green',
        yellow: this.color === 'yellow'
      }
    },
    textClasses () {
      return {
        white: this.color === 'green',
        black: this.color === 'yellow'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 50px;
  padding: 22px;
  border-style: none;
  cursor: pointer;
  @include hover-opacity;

  &.green {
    background-color: $button-color-green;
  }

  &.yellow {
    background-color: $button-color-yellow;
  }

  &-text {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 18px;

    &.white {
      color: white;
    }

    &.black {
      color: black
    }
  }
}
</style>
