<template>

  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.userName.$error }">
      <label class="form__label">Nested A</label>
      <input class="form__input" v-model.trim="form.userName" @input="$v.form.userName.$touch()">
    </div><span class="form-group__message" v-if="!$v.form.userName.required">Field is required.</span><span class="form-group__message" v-if="!$v.form.userName.minLength">Field must have at least {{ $v.form.userName.$params.minLength.min }} characters.</span>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.password.$error }">
      <label class="form__label">Nested B</label>
      <input class="form__input" v-model.trim="form.password" @input="$v.form.password.$touch()" type="password">
    </div><span class="form-group__message" v-if="!$v.form.password.required">Field is required.</span><span class="form-group__message" v-if="!$v.form.password.minLength">Field must have at least {{ $v.form.password.$params.minLength.min }} characters.</span>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.$error }"><span class="form-group__message" v-if="$v.form.$error">Form is invalid.</span></div>
    <pre>form: {{ $v.form }}</pre>
  </div>

</template>

<script>
  /* eslint-disable comma-dangle */

  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';
  import * as Vuex from 'vuex';

  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
      validationMixin,
    ],
    data() {
      return {
        form: {
          userName: '',
          password: ''
        }
      }
    },
    validations: {
      form: {
        userName: {
          required,
          minLength: minLength(5)
        },
        password: {
          required,
          minLength: minLength(8)
        }
      }
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
  };
</script>

<style scoped>
</style>
