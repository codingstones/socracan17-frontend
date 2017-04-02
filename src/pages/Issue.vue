<template>
  <div class="content-menu__section no-border">
    {{ newIssue }}
    {{$v.text}}
    <div class="row">
      <h3>New Issue</h3>
      <div class="small-12 columns"
           :class="{'input-error': $v.newIssue.name.$dirty && $v.newIssue.name.$invalid}">
        <label>Title
        <input
          type="text"
          :value="newIssue.name"
          @input="update('name', $event)"
          placeholder="Name">
        </label>

        <label>Description
        <input
          type="text"
          :value="newIssue.description"
          @input="update('description', $event)"
          placeholder="Description">
        </label>

        <label>Text
        <input type="text" v-model="text"
               @input="$v.text.$touch">
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
    data: () => {
      return { text: '' };
    },
    name: 'issue',
    methods: {
      ...Vuex.mapActions(['createAnIssue', 'updateFormField']),
      update(field, event) {
        this.$v.newIssue[field].$touch();
        this.updateFormField({ field, value: event.target.value.trim() });
        // EQUIVALENT:
        // this.$store.commit(UPDATE_FORM_FIELD, { field, value: event.target.value.trim() });
      },
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'error', 'newIssue']),
    },
    validations: {
      name: { alpha, minLength: minLength(4) },
      description: { alpha, minLength: minLength(4) },
      newIssue: ['name', 'description', 'text'],
      text: {
        required,
        minLength: minLength(5),
      },
    },
  };
</script>

<style scoped>
</style>
