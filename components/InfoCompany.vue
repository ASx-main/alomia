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
        Наш специалист осуществит бесплатный выезд на Ваше предприятие для проведения обследования объекта
        и согласования необходимых видов мероприятий
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

  @include media-desktop {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 50px;
    column-gap: 50px;
  }

  &__content {
    padding: 50px;

    @include media-desktop {
      padding: 0;
      width: 30%;
    }
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
      display: flex;
      column-gap: 20px;
      width: 60%;
    }
  }

  &__desktop-img {
    display: none;

    @include media-desktop {
      display: block;
      width: 60%;
    }
  }

  &__mobile-img {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @include media-desktop {
      width: 40%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }

  &__deratation-img {
    height: 100%;
    object-fit: cover;
  }
}

</style>
