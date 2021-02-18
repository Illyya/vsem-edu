<template>
  <section class="stock-master-step-2">
    <AppTitleH2
      :msg-title-h2="msgTitleH2"
      class="stock-master-step-2__title-2"
    />

    <article
      class="stock-master-step-2__promotion-card promotion-card border-gray-with-radius"
    >
      <div class="promotion-card__img">
        <img src="@/assets/img/check-mark.svg" alt="Галочка" />
      </div>
      <p class="promotion-card__text">Акция успешно запущена!</p>
      <p class="promotion-card__text">
        <span class="promotion-card__span">Промокод:</span> TestPromo
      </p>
      <NuxtLink to="/">
        <AppButton :btn-msg="btnMsg2" class="promotion-card__btn" />
      </NuxtLink>
    </article>
  </section>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      msgTitleH2: 'Мастер акций — Шаг 2/2',
      btnMsg2: 'Все акции',
    }
  },
}
</script>

<style lang="scss">
.stock-master-step-2 {
  &__title-2 {
    margin-bottom: 26px;
  }

  &__promotion-card {
  }
}
.promotion-card {
  padding: 88px 86px 60px 86px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__img {
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 34px;
  }

  &__text {
    font-size: 1.5rem;

    &:first-of-type {
      margin-bottom: 38px;
    }

    &:last-of-type {
      margin-bottom: 32px;
    }
  }

  &__span {
    font-size: 0.9rem;
  }

  &__btn {
    padding: 14px 53px;
  }
}
</style>
