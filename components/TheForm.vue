<template>
  <form
    class="the-form"
    @submit.prevent="getData({name, phone})"
  >
    <span class="the-form__title">
      ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ
    </span>

    <div class="the-form__inputs">
      <input
        v-model="name"
        type="text"
        placeholder="Имя"
        class="the-form__input"
      >
      <span
        v-if="errorName"
        class="the-form__error"
      >
        Некорректно указаны данные. Укажите данные в формате *Иванов Иван*
      </span>

      <input
        v-model="phone"
        v-mask="phoneMask"
        type="text"
        placeholder="Телефон"
        class="the-form__input"
      >
      <span
        v-if="errorPhone"
        class="the-form__error"
      >
        Некорректно указаны данные. Укажите данные в формате *+7 (999) 999-99-99*
      </span>
    </div>

    <div class="the-form__button-block">
      <ButtonOrder
        text="ОСТАВИТЬ ЗАЯВКУ"
        color="yellow"
        :disabled="disabledButton"
        class="the-form__button"
      />
      <span class="the-form__text">
        Ваши данные не будут переданы третьим лицам
      </span>
      <div>
        <input
          id="personal"
          v-model="checkPersonal"
          type="checkbox"
          class="the-form__input-personal"
        >
        <label class="the-form__text">
          Нажимая кнопку оставить заявку, вы соглашаетесь с условиями
          <a target="_blank" class="the-form__link" href="/pdf/private-policy.pdf">
            об обработке персональных данных.
          </a>
        </label>
      </div>
    </div>
    <SuccessfulBid v-if="success" />
    <ErrorForm v-if="errorForm" />
  </form>
</template>

<script>
import ButtonOrder from '@/components/ButtonOrder.vue'
import SuccessfulBid from '@/components/SuccessfulBid.vue'
import ErrorForm from '@/components/ErrorForm.vue'

export default {
  name: 'TheForm',
  components: {
    ButtonOrder,
    SuccessfulBid,
    ErrorForm
  },
  data () {
    return {
      name: '',
      phone: '',
      validationName: '^[А-Яа-яЁё\\s]+$',
      errorName: false,
      errorPhone: false,
      disabledButton: true,
      phoneMask: '+7 (###) ###-##-##',
      success: false,
      errorForm: false,
      checkPersonal: false
    }
  },
  watch: {
    disabledButton: {
      handler () {
        this.disabledButton = !(this.name && this.phone && this.checkPersonal)
      },
      immediate: true
    },
    checkPersonal: {
      handler () {
        this.disabledButton = !this.checkPersonal
      },
      immediate: true
    },
    name () {
      if (this.name.match(this.validationName) === null) {
        this.errorName = true
        this.disabledButton = true
      } else {
        this.errorName = false
      }
      if (this.name.length === 0) {
        this.errorName = false
        this.disabledButton = true
      }
    },
    phone () {
      if (this.phone.length < this.phoneMask.length) {
        this.errorPhone = true
        this.disabledButton = true
      } else {
        this.errorPhone = false
        this.disabledButton = false
      }
      if (this.phone.length === 0 && !this.checkPersonal) {
        this.errorPhone = false
        this.disabledButton = true
      }
    }
  },
  methods: {
    async getData ({ name, phone }) {
      try {
        await this.$axios.post('/api/telegram/sendMessage', {
          name,
          phone
        })
        this.success = true
        this.disabledButton = true
        this.resetForm()
      } catch (e) {
        this.success = false
        this.errorForm = true
      }
    },
    resetForm () {
      this.name = ''
      this.phone = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.the-form {
  background: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  padding: 50px 25px;

  @include media-desktop {
    padding: 50px 100px;
  }

  &__title {
    text-align: center;
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 16px;
    color: $button-color-green;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &__input {
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 18px;
    border: none;
    border-bottom: solid 1px $button-color-green;
    width: 100%;
    padding-bottom: 10px;

    &::placeholder {
      font-family: 'Montserrat-Regular', sans-serif;
      font-size: 18px;
      color: $button-color-green;
    }

    &:focus {
      outline: none;
    }
  }

  &__input-personal {
    width: 17px;
    height: 17px;
  }

  &__error {
    color: $error-color;
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 14px;
  }

  &__button-block {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__button {
    &:disabled {
      opacity: 50%;
      cursor: not-allowed;
    }
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    text-align: center;
  }

  &__link {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-size: 12px;
    color: $button-color-green;
  }
}

</style>
