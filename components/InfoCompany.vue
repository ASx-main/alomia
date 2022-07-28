<template>
  <section class="info-company">
    <div class="info-company__content">
      <h4 class="info-company__title">
        ООО АЛОМИЯ ЦЕНТР ДЕЗИНФЕКЦИИ
      </h4>
      <p class="info-company__text">
        Главная задача СЭС службы при проведении дезинфекции, дезинсекции и дератизации, независимо от того,
        квартира это или предприятие, это не только эстетика, но и сохранение Вашего здоровья, так как насекомые и
        грызуны могут быть переносчиками многих инфекционных заболеваний. Выбирайте только профессионалов.
        <br>
        <br>
        Мы предоставляем гарантию качества на все наши услуги, работаем по договору, с физическими и юридическими лицами.
        Наш специалист осуществит бесплатный выезд на осмотр места, составит список работ и озвучит цену.
      </p>
    </div>
    <div class="info-company__img">
      <div class="info-company__desktop-img">
        <img class="info-company__deratation-img" src="@/assets/img/info-company-deratation-img.jpg" alt="">
      </div>

      <div class="info-company__mobile-img">
        <img class="info-company__fire-img" src="@/assets/img/info-company-fire-img.jpg" alt="">
        <img class="info-company-pest-img" src="@/assets/img/info-company-pest-img.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info-company {
  display: flex;
  flex-direction: column;
  align-self: center;
  background: $color-grey;
  padding-top: 50px;

  @include media-desktop {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  &__content {
    padding: 0 50px 50px 50px;
  }

  &__title {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 23px;
    color: $button-color-green;
    margin-bottom: 30px;
  }

  &__text {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 18px;
    line-height: 35px;
  }

  &__img {
    @include media-desktop {
      @include flex-center;
    }
  }

  &__desktop-img {
    display: none;

    @include media-desktop {
      display: block;
    }
  }
}

</style>
