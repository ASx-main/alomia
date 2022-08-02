<template>
  <main class="main">
    <BannerBlock />
    <GeneralServices />
    <InfoCompany />
    <DetailServices />
    <GeneralAdvantages />
  </main>
</template>

<script>
import BannerBlock from '~/components/BannerBlock.vue'
import GeneralServices from '~/components/GeneralServiсes.vue'
import InfoCompany from '~/components/InfoCompany.vue'
import DetailServices from '~/components/DetailServices.vue'
import GeneralAdvantages from '~/components/GeneralAdvantages.vue'

export default {
  components: {
    BannerBlock,
    GeneralServices,
    InfoCompany,
    DetailServices,
    GeneralAdvantages
  }
}
</script>

<style lang="scss" scoped>

</style>
