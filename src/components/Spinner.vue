<template>
  <div v-if="isLoading" class="issue-list__loader animated fadeIn">
    <div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'spinner',
    computed: {
      ...Vuex.mapGetters(['isLoading']),
    },
  };
</script>

<style lang="scss" scoped>
</style>
