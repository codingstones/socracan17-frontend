<template>
  <div>
    NUEVO ISSUE
  </div>

</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
    ],
    name: 'issue',
    methods: {
      ...Vuex.mapActions(['createIssue']),
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'error']),
    },
  };
</script>

<style scoped>
</style>
