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
        ЧЛЕНЫ АССОЦИАЦИИ "ДЕЗИНФЕКЦИЯ И ПЕСТ-КОНТРОЛЬ"
      </span>
      <div id="geolocation" class="footer-contact-info__geolocation">
        <span class="footer-contact-info__caption">
          АДРЕС: <br> Г. КРАСНОДАР, УЛ. УМАНСКАЯ, 66
        </span>
        <img src="@/assets/img/maps.jpg" alt="карта">
      </div>

      <div class="footer-contact-info__phone">
        <a href="tel:+79280361012" class="footer-contact-info__link">
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
        <a href="mailto:alomya@mail.ru" class="footer-contact-info__link">
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
        <a href="https://vk.com/pest_control_alomya" target="_blank" class="footer-contact-info__link-social">
          <img src="@/assets/img/svg/footer-vk-icon.svg" alt="" class="footer-contact-info__icon">
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=79280361012&text=Здравствуйте%2C+у+меня+есть+вопрос">
          <img src="@/assets/img/svg/footer-wp-icon.svg" alt="" class="footer-contact-info__icon">
        </a>
        <a target="_blank" href="tg://resolve?domain=@alomya">
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

  @include media-desktop {
    width: 40%;
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 16px;
    color: $button-color-green;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  &__caption {
    font-family: 'Montserrat-Medium', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
  }

  &__geolocation {
    display: flex;
    flex-direction: column;
    align-self: center;
    row-gap: 15px;
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
    font-size: 16px;
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
