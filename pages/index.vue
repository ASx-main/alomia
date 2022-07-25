<template>
  <TheHeader />
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    TheHeader
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
</style>
