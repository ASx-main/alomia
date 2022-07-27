<template>
  <div class="index">
    <TheHeader @on-click-burger-menu="onClickBurgerMenu" />

    <TheDrawer :is-show.sync="isShowDrawer">
      <ul v-for="link in links" :key="link" class="index__list">
        <li class="index__li" @click="closeDrawer">
          <a class="index__link">{{ link }}</a>
        </li>
      </ul>
    </TheDrawer>

    <TheMain />
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'
import TheDrawer from '~/components/TheDrawer.vue'
import TheMain from '~/components/TheMain.vue'

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    TheDrawer,
    TheMain
  },
  data () {
    return {
      isShowDrawer: false,
      links: [
        'ГЛАВНАЯ',
        'О КОМПАНИИ',
        'УСЛУГИ',
        'КОНТАКТЫ'
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

    @include active-opacity;
  }
}
</style>
