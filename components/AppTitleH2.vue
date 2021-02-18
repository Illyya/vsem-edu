<template>
  <h2 class="title-2">{{ msgTitleH2 }}</h2>
</template>

<script>
export default {
  name: 'AppTitleH2',
  props: {
    msgTitleH2: {
      type: String,
      default: 'Заголовок',
    },
  },
}
</script>

<style>
.title-2 {
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
