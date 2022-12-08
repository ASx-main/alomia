<template>
  <main class="main">
    <BannerBlock />
    <GeneralServices />
    <InfoCompany />
    <DetailServices />
    <GeneralAdvantages />
    <TheCertificates />
    <BlockApplicationForm />
  </main>
</template>

<script>
import BannerBlock from '@/components/BannerBlock.vue'
import GeneralServices from '@/components/GeneralServices.vue'
import InfoCompany from '@/components/InfoCompany.vue'
import DetailServices from '@/components/DetailServices.vue'
import GeneralAdvantages from '@/components/GeneralAdvantages.vue'
import TheCertificates from '@/components/TheCertificates'
import BlockApplicationForm from '@/components/BlockApplicationForm.vue'

export default {
  name: 'TheMain',
  components: {
    BannerBlock,
    GeneralServices,
    InfoCompany,
    DetailServices,
    GeneralAdvantages,
    TheCertificates,
    BlockApplicationForm
  }
}
</script>

<style lang="scss" scoped>

</style>
