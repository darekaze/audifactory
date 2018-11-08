<template>
  <img :src="url" alt="" class="image" />
</template>

<script>
export default {
  props: [
    'url',
  ],
};
</script>

<style lang="scss" scoped>
.image {
  width: 95%;
  margin: 0 auto;
}
</style>
