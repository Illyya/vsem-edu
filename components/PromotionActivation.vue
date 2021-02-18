<template>
  <div class="promotion-activation">
    <div class="promotion-activation__img">
      <img :src="srcimg" alt="Корзина" />
    </div>
    <div class="promotion-activation__text">
      <h3 class="promotion-activation__title-3 title-3">
        {{ title }}
      </h3>
      <p class="promotion-activation__paragraph">
        {{ description }}
      </p>
    </div>
    <div class="promotion-activation__right">
      <NuxtLink to="/step1">
        <AppButton :btn-msg="btnMsg" class="promotion-activation__btn" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'PromotionActivation',
  components: {
    AppButton,
  },
  props: {
    title: {
      type: String,
      default: 'Заголовок',
    },
    description: {
      type: String,
      default: 'Описание',
    },
    srcimg: {
      type: String,
      default: 'Адресс картинки',
    },
  },
  data() {
    return {
      btnMsg: 'Запустить',
    }
  },
}
</script>

<style lang="scss">
.promotion-activation {
  padding: 24px;
  max-width: 894px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  border: 2px solid #e4e7ea;
  border-radius: 8px;

  &__img {
    max-width: 54px;
    max-height: 54px;
    margin-right: 30px;
  }

  &__text {
    max-width: 450px;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title-3 {
    margin-bottom: 12px;
  }

  &__paragraph {
  }

  &__btn {
    padding: 16px 62px;
    font-size: 1.125rem;
  }
}
</style>
