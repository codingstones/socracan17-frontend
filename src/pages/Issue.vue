<template>
  <div class="content-menu__section no-border">
    {{$v.name}}
    <div class="row">
      <div class="small-12 columns"
           :class="{'input-error': $v.name.$dirty && !$v.name.$invalid}">
        <label>New Issue
        <input
          type="text"
          :value="newIssue.name"
          @change="update('name', $event)"
          placeholder="Name">
        </label>
        <button class="button small" @click="createAnIssue">
          Save Issue
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { alpha, required, minLength } from 'vuelidate/lib/validators';
  import * as Vuex from 'vuex';

  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
      validationMixin,
    ],
    name: 'issue',
    methods: {
      ...Vuex.mapActions(['createAnIssue', 'updateFormField']),
      update(field, event) {
        console.log('Updating', field, event.target.value.trim());
        this.$v[field].$touch();
        this.newIssue[field] = event.target.value.trim();
        this.updateFormField({ field, value: event.target.value.trim() });
      },
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'error', 'newIssue']),
    },
    validations: {
      name: { required, alpha, minLength: minLength(4) },
    },
  };
</script>

<style scoped>
</style>
