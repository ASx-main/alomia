<template>
  <header class="header">
    <div class="header__desktop">
      <TheLogo />
      <GeolocationCity />
      <MailInfo />
      <NumberCall />
      <BurgerMenu class="header__burger-menu" @click="onClickBurger" />
      <ButtonOrder href="#request" class="header__button-order" text="ОСТАВИТЬ ЗАЯВКУ" />
    </div>
    <NavigationMenu class="nav-menu" />
  </header>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'
import TheLogo from '@/components/TheLogo.vue'
import NumberCall from '@/components/NumberCall.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import GeolocationCity from '@/components/GeolocationCity.vue'
import MailInfo from '@/components/MailInfo.vue'
import ButtonOrder from '@/components/ButtonOrder.vue'

export default {
  components: {
    TheLogo,
    NumberCall,
    BurgerMenu,
    GeolocationCity,
    MailInfo,
    ButtonOrder,
    NavigationMenu
  },
  methods: {
    onClickBurger () {
      this.$emit('on-click-burger-menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #FFFFFF;
  padding: 20px;
  border-bottom: solid 0.5px #000000;

  &__desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @include media-desktop {
    margin: 50px 50px 0 50px;
  }

  &__button-order {
    display: none;
    @include media-desktop {
      @include flex-center
    }
  }

  &__burger-menu {
    @include media-desktop {
      display: none;
    }
  }
}

</style>
