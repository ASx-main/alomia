<template>
  <div class="index">
    <TheHeader @on-click-burger-menu="onClickBurgerMenu" />

    <TheDrawer :is-show.sync="isShowDrawer">
      <ul v-for="link in links" :key="link.title" class="index__list">
        <li class="index__li" @click="closeDrawer">
          <a :href="link.href" class="index__link">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </TheDrawer>

    <TheMain />

    <TheFooter />
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'
import TheDrawer from '~/components/TheDrawer.vue'
import TheMain from '~/components/TheMain.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    TheDrawer,
    TheMain,
    TheFooter
  },
  data () {
    return {
      isShowDrawer: false,
      links: [
        {
          title: 'ГЛАВНАЯ',
          href: '#main'
        },
        {
          title: 'О КОМПАНИИ',
          href: '#advantages'
        },
        {
          title: 'УСЛУГИ',
          href: '#services'
        },
        {
          title: 'КОНТАКТЫ',
          href: '#contact'
        }
      ]
    }
  },
  methods: {
    onClickBurgerMenu () {
      this.isShowDrawer = true
    },
    closeDrawer () {
      this.isShowDrawer = false
    }
  }
}
</script>

<style lang="scss">
.index {
  position: relative;

  &__list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 23vh;
    list-style-type: none;
  }

  &__link {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 18px;
    color: $button-color-green;
    text-decoration: none;

    @include active-opacity;
  }
}
</style>
