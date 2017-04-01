<template>
  <div>
  NUEVO ISSUE
  <input type='text'/>
    <button class="button" @click="createAnIssue">
      Save Issue
    </button>
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
      ...Vuex.mapActions(['createAnIssue']),
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'error']),
    },
  };
</script>

<style scoped>
</style>
