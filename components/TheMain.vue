<template>
  <main class="main">
    <BannerBlock />
    <GeneralServices />
    <InfoCompany />
    <DetailServices />
    <main />
  </main>
</template>

<script>
import BannerBlock from '@/components/BannerBlock.vue'
import GeneralServices from '~/components/GeneralServiсes.vue'
import InfoCompany from '~/components/InfoCompany.vue'

export default {
  components: {
    BannerBlock,
    GeneralServices,
    InfoCompany
  }
}
</script>

<style lang="scss" scoped>

</style>
