<template>
  <header class="header">
    <div class="header__desktop">
      <TheLogo />
      <GeolocationCity />
      <MailInfo />
      <NumberCall />
      <BurgerMenu class="header__burger-menu" />
      <ButtonOrder class="header__button-order" text="ОСТАВИТЬ ЗАЯВКУ" />
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
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;

  &__desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  @include media-desktop {
    margin: 50px;
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
