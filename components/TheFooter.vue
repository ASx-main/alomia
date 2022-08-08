<template>
  <footer class="footer">
    <FooterContactInfo class="footer__contact" />
    <FooterLink
      v-for="link in linkExtermination"
      :key="link.title"
      :title="link.title"
      :links="link.links"
      :href="link.href"
    />
  </footer>
</template>

<script>
import FooterContactInfo from '@/components/FooterContactInfo.vue'
import FooterLink from '@/components/FooterLink.vue'
import { linkExtermination } from '@/data/linkExtermination.js'

export default {
  components: {
    FooterContactInfo,
    FooterLink
  },
  data () {
    return {
      linkExtermination
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #3A3A3A;
  display: flex;
  flex-direction: column;
  align-items: normal;
  padding: 50px;
  row-gap: 50px;

  @include media-desktop {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 15px;
  }

  &__contact {
    width: 25%;
  }
}

</style>
