<template>
  <div class="footer-link">
    <a :href="href" class="footer-link__title">
      {{ title }}
    </a>
    <div class="footer-link__links">
      <a
        v-for="link in links"
        :key="link.title"
        :href="link.href"
        class="footer-link__caption"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterLink',
  props: {
    title: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-link {
  display: flex;
  flex-direction: column;
  row-gap: 45px;

  @include media-desktop {
    width: 25%;
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 20px;
    color: $button-color-green;
    text-decoration: none;

    &:hover {
      @include hover-opacity;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__caption {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 20px;
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
      @include hover-opacity;
    }
  }

}

</style>
