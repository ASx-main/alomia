<template>
  <div :class="rootClasses" class="drawer">
    <img class="drawer__icon-close" src="@/assets/img/svg/close.svg" alt="Закрыть" @click="close">
    <div class="drawer__content">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheDrawer',
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    rootClasses () {
      return {
        show: this.isShow,
        hide: !this.isShow
      }
    }
  },
  methods: {
    close () {
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 50px;
  position: absolute;
  top: calc(0px - 20px);
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 500px grey;
  transition: right 500ms ease, height 500ms;

  &.show {
    right: 0;
  }

  &.hide {
    right: -100%;
    height: 0;
  }

  &__icon-close {
    align-self: flex-end;
    cursor: pointer;

    @include active-opacity;
  }

  &__content {
    height: 100%;
  }
}

</style>
