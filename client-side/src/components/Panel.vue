<template>
  <div class="elevation-2">
    <v-toolbar flat dense class="primary" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ],
};
</script>
