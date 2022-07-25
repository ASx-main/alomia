<template>
  <div class="index">
    <TheHeader @on-click-burger-menu="onClickBurgerMenu" />

    <TheDrawer :is-show.sync="isShowDrawer">
      <div class="some">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
      </div>
    </TheDrawer>
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'
import TheDrawer from '~/components/TheDrawer'

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    TheDrawer
  },
  data () {
    return {
      isShowDrawer: false
    }
  },
  methods: {
    onClickBurgerMenu () {
      this.isShowDrawer = true
    }
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  width: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

img {
  max-width: 100%;
}

.index {
  position: relative;
}

.some {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
