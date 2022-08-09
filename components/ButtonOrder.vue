<template>
  <component :is="componentName" :href="href" class="button" :class="rootClasses">
    <span class="button-text" :class="textClasses">
      {{ text }}
    </span>
  </component>
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
    },
    href: {
      type: String,
      default: ''
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
    },
    componentName () {
      if (this.href !== '') {
        return 'a'
      }

      return 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  align-self: center;
  border-radius: 50px;
  padding: 22px;
  border-style: none;
  cursor: pointer;
  text-decoration: none;
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
    text-align: center;

    &.white {
      color: white;
    }

    &.black {
      color: black
    }
  }
}
</style>
