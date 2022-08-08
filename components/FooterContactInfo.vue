<template>
  <div id="contact" class="footer-contact-info">
    <h4 class="footer-contact-info__title">
      ИНФОРМАЦИЯ
    </h4>
    <div class="footer-contact-info__content">
      <span class="footer-contact-info__caption">
        ООО АЛОМИЯ ЦЕНТР ДЕЗИНФЕКЦИИ
      </span>
      <span class="footer-contact-info__caption">
        АССОЦИАЦИЯ "ДЕЗИНФЕКЦИЯ И ПЕСТ-КОНТРОЛЬ"
      </span>

      <div class="footer-contact-info__phone">
        <a href="tel:+79615994369" class="footer-contact-info__link">
          <img
            src="@/assets/img/svg/phone-white-icon.svg"
            alt="Телефон"
            class="footer-contact-info__icon"
          >
          <span class="footer-contact-info__number">
            +7 (928) 036 10 12
          </span>
        </a>
      </div>
      <div class="footer-contact-info__mail">
        <a href="https://mail.ru/" class="footer-contact-info__link">
          <img
            src="@/assets/img/svg/footer-mail-icon.svg"
            alt="Телефон"
            class="footer-contact-info__icon"
          >
          <span class="footer-contact-info__number">
            alomya@mail.ru
          </span>
        </a>
      </div>
      <div class="footer-contact-info__icon-social">
        <a href="#" class="footer-contact-info__link-social">
          <img src="@/assets/img/svg/footer-vk-icon.svg" alt="" class="footer-contact-info__icon">
        </a>
        <a href="#">
          <img src="@/assets/img/svg/footer-instagram-icon.svg" alt="" class="footer-contact-info__icon">
        </a>
        <a href="#">
          <img src="@/assets/img/svg/footer-tg-icon.svg" alt="" class="footer-contact-info__icon">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-contact-info {
  display: flex;
  flex-direction: column;
  row-gap: 45px;

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 18px;
    color: $button-color-green;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &__caption {
    font-family: 'Montserrat-Medium', sans-serif;
    font-size: 17px;
    color: #FFFFFF;
  }

  &__phone {
    display: flex;
    flex-direction: row;
  }

  &__icon {
    width: 30px;
    height: 30px;
  }

  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    column-gap: 15px;
  }

  &__number {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 18px;
    color: #FFFFFF;

    &:hover {
      @include hover-opacity;
    }
  }

  &__icon-social {
    display: flex;
    column-gap: 20px;
  }

  &__icon {
    &:hover {
      @include hover-opacity;
    }
  }
}

</style>
