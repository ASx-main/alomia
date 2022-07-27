<template>
  <main class="main">
    <BannerBlock />
    <GeneralServices />
  </main>
</template>

<script>
import BannerBlock from '@/components/BannerBlock.vue'
import GeneralServices from '~/components/GeneralServiсes.vue'

export default {
  components: {
    BannerBlock,
    GeneralServices
  }
}
</script>

<style lang="scss" scoped>

</style>
