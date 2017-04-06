<template>
<div>
  <button class="button medium" :disabled="disabled">
    <div v-if="isLoading" class="loader-inner ball-pulse ball-pulse--xs">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <i v-if="error" class="icon ss-alert"></i>
    {{title}}
  </button>
</div>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'save-button',
    props: ['title', 'disabled'],
    computed: {
      ...Vuex.mapGetters(['error', 'isLoading']),
    },
  };
</script>

<style lang="scss" scoped>
</style>
