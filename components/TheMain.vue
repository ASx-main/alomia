<template>
  <main class="main">
    <BannerBlock />
    <GeneralServices />
    <InfoCompany />
    <DetailServices />
    <GeneralAdvantages />
    <TheCertificates />
  </main>
</template>

<script>
import BannerBlock from '~/components/BannerBlock.vue'
import GeneralServices from '~/components/GeneralServiсes.vue'
import InfoCompany from '~/components/InfoCompany.vue'
import DetailServices from '~/components/DetailServices.vue'
import GeneralAdvantages from '~/components/GeneralAdvantages.vue'
import TheCertificates from '@/components/TheCertificates'

export default {
  components: {
    BannerBlock,
    GeneralServices,
    InfoCompany,
    DetailServices,
    GeneralAdvantages,
    TheCertificates
  }
}
</script>

<style lang="scss" scoped>

</style>
