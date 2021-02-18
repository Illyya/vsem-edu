<template>
  <section class="stock-master">
    <AppTitleH2 :msg-title-h2="msgTitleH2" class="stock-master__title-2" />

    <PromotionActivation
      v-for="promotion in promotions"
      :key="promotion.id"
      :title="promotion.title"
      :description="promotion.description"
      :srcimg="promotion.srcimg"
      class="stock-master__promotion-activation"
    />
  </section>
</template>

<script>
import PromotionActivation from '@/components/PromotionActivation'
import AppTitleH2 from '@/components/AppTitleH2'

export default {
  components: {
    PromotionActivation,
    AppTitleH2,
  },
  data() {
    return {
      msgTitleH2: 'Мастер акций',
      promotions: [
        {
          id: 0,
          title: 'Убедите своих клиентов сделать первый заказ',
          description: 'Скидка или подарок на первую покупку по промокоду',
          srcimg: require('@/assets/img/basket.svg'),
        },
        {
          id: 1,
          title: 'Скидка на тип доставки',
          description: 'Настройте скидку на самовывоз или доставку',
          srcimg: require('@/assets/img/person.svg'),
        },
        {
          id: 2,
          title: 'Скидка от источника заказа',
          description: 'Делайте скидку если клиент оформил заказ с приложения',
          srcimg: require('@/assets/img/phone.svg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.stock-master {
  &__title-2 {
    margin-bottom: 27px;
  }

  &__promotion-activation {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
}
</style>
