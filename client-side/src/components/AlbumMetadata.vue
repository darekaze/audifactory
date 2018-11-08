<template>
<div>
  <div class="a-title">
    {{album.title}}
  </div>
  <div class="a-artist">
    {{album.artist}}
  </div>
  <div class="a-genre">
    {{album.genre}}
  </div>
  <div class="a-stocks">
    Avaliability: {{album.stocks}}
  </div>
  <div class="a-loves">
    Loves: {{album.loves}}
  </div>
</div>
</template>

<script>
export default {
  props: [
    'album',
  ],
};
</script>

<style lang="scss" scoped>
.a-title {
  font-size: 30px;
}
.a-artist {
  font-size: 24px;
}
.a-genre {
  font-size: 18px;
}
</style>
