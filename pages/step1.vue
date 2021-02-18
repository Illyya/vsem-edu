<template>
  <section class="stock-master-step-1">
    <AppTitleH2
      :msg-title-h2="msgTitleH2"
      class="stock-master-step-1__title-2"
    />

    <form action="#" class="stock-master-step-1__form form">
      <div class="form__first-order">
        <p class="form__option-header">Что даем за первый заказ?</p>
        <fieldset class="form__fieldset border-gray-with-radius">
          <div class="form__row-inp-lab">
            <input
              id="discount"
              v-model="isPresent"
              type="radio"
              name="first-order"
              value="discount"
              class="form__input-radio"
            />
            <label for="discount" class="form__label">Скидка</label>
          </div>
          <div class="form__row-inp-lab">
            <input
              id="present"
              v-model="isPresent"
              type="radio"
              name="first-order"
              value="present"
              class="form__input-radio"
            />
            <label for="present" class="form__label">Подарок</label>
          </div>
        </fieldset>
      </div>
      <template v-if="isPresent == 'present'">
        <div class="form__gift">
          <p class="form__option-header">Выберите подарок из списка</p>
          <select
            class="form__select border-gray-with-radius"
            name="selected-gift"
          >
            <option class="form__option" value="gift-1">
              Выберите подарок
            </option>
            <option class="form__option" value="gift-1">Подарок 1</option>
            <option class="form__option" value="gift-2">Подарок 2</option>
            <option class="form__option" value="gift-3">Подарок 3</option>
          </select>
        </div>
      </template>
      <template v-else>
        <div class="form__amount-of-discount">
          <p class="form__option-header">Размер скидки</p>
          <input
            v-model="amountOfDiscount"
            type="text"
            placeholder="30%"
            class="form__input-text border-gray-with-radius"
          />
        </div>
      </template>
      <div class="form__your-promo-code">
        <div class="form__row-inp-lab">
          <input
            id="promo-code"
            v-model="yourPromoCode"
            type="checkbox"
            name="promo-code"
            class="form__input-checkbox"
          />
          <label for="promo-code" class="form__label">Свой промокод</label>
        </div>
        <input
          v-if="yourPromoCode"
          v-model="promoCode"
          type="text"
          placeholder="TestPromo"
          class="form__input-promo-code border-gray-with-radius"
        />
      </div>
      <div class="form__btns">
        <NuxtLink to="/">
          <AppButton
            :btn-msg="btnMsg1"
            class="form__btn form__btn_back border-gray-with-radius"
          />
        </NuxtLink>
        <NuxtLink to="/step2">
          <AppButton :btn-msg="btnMsg2" class="form__btn form__btn_further" />
        </NuxtLink>
      </div>
    </form>
  </section>
</template>

<script>
import AppTitleH2 from '@/components/AppTitleH2'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppTitleH2,
    AppButton,
  },
  data() {
    return {
      msgTitleH2: 'Мастер акций — Шаг 1/2',
      isPresent: 'discount',
      amountOfDiscount: '',
      yourPromoCode: true,
      promoCode: '',
      btnMsg1: 'Назад',
      btnMsg2: 'Далее',
    }
  },
}
</script>

<style lang="scss">
.stock-master-step-1 {
  width: 400px;

  &__title-2 {
    margin-bottom: 32px;
  }

  &__form {
  }
}
.form {
  &__first-order {
    margin-bottom: 16px;

    .form__row-inp-lab:first-of-type {
      margin-bottom: 20px;
    }
  }

  &__option-header {
    margin: 0 0 16px 16px;
  }

  &__fieldset {
  }

  &__row-inp-lab {
  }

  &__input-radio {
  }

  &__label {
    cursor: pointer;
  }

  &__gift {
  }

  &__select {
    width: 100%;
  }

  &__option {
  }

  &__amount-of-discount {
    .form__input-text {
      width: 100%;
    }
  }

  &__input-text {
  }

  &__your-promo-code {
    .form__row-inp-lab {
      padding: 20px;
    }
  }

  &__input-checkbox {
  }

  &__input-promo-code {
    width: 100%;
    margin-bottom: 20px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    padding: 14px 71px;
    &_back {
      color: #798389;
      background-color: #ffffff;
    }

    &_further {
      height: 100%;
    }
  }
}
</style>
