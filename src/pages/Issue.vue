<template>
  <div class="content-menu__section no-border">
    <div class="row">
      <h3>New Issue</h3>
      <div class="small-12 columns">
        <div :class="{'input-error': $v.newIssue.name.$dirty && $v.newIssue.name.$invalid}">
          <label>Title
          <input
            type="text"
            :value="newIssue.name"
            @input="update('name', $event)"
            placeholder="Name">
          </label>
          <span v-if="!$v.newIssue.name.required">Field is required.</span>
          <span v-if="!$v.newIssue.name.minLength">Field must have at least {{ $v.newIssue.name.$params.minLength.min }} characters.</span>
        </div>
        <br>
        <br>

        <div :class="{'input-error': $v.newIssue.description.$dirty && $v.newIssue.description.$invalid}">
          <label>Description
          <input
            type="text"
            :value="newIssue.description"
            @input="update('description', $event)"
            placeholder="Description">
          </label>
          <span v-if="!$v.newIssue.description.required">Field is required.</span>
          <span v-if="!$v.newIssue.description.minLength">Field must have at least {{ $v.newIssue.description.$params.minLength.min }} characters.</span>
        </div>
        <br>

        <button class="button small" @click="createAnIssue" :disabled="$v.newIssue.$invalid">
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
      newIssue: {
        name: { alpha, required, minLength: minLength(5) },
        description: { alpha, required, minLength: minLength(4) }
      }
    }
  };
</script>

<style scoped>
</style>
