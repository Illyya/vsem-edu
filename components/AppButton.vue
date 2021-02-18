<template>
  <button class="btn">{{ btnMsg }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnMsg: {
      type: String,
      default: 'Кнопка',
    },
  },
}
</script>

<style lang="scss">
.btn {
  color: #ffffff;
  border-radius: 8px;
  background-color: #94d163;
}
</style>
