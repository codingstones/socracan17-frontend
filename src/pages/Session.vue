<template>
  <div class="content-menu__section no-border">
    <div class="row">
      <h3>New Session</h3>
      <div class="small-12 columns">
        <div :class="{'input-error': $v.newSession.title.$dirty && $v.newSession.title.$invalid}">
          <label>Title
          <input
            type="text"
            :value="newSession.title"
            @input="update('title', $event)"
            placeholder="Name">
          </label>
          <span v-if="!$v.newSession.title.required">Field is required.</span>
          <span v-if="!$v.newSession.title.minLength">Field must have at least {{ $v.newSession.title.$params.minLength.min }} characters.</span>
        </div>

        <br>
        <br>

        <div :class="{'input-error': $v.newSession.description.$dirty && $v.newSession.description.$invalid}">
          <label>Description
          <input
            type="text"
            :value="newSession.description"
            @input="update('description', $event)"
            placeholder="Description">
          </label>
          <span v-if="!$v.newSession.description.required">Field is required.</span>
          <span v-if="!$v.newSession.description.minLength">Field must have at least {{ $v.newSession.description.$params.minLength.min }} characters.</span>
        </div>
        <br>
        <br>

        <div :class="{'input-error': $v.newSession.facilitator.$dirty && $v.newSession.facilitator.$invalid}">
          <label>Facilitator
          <input
            type="text"
            :value="newSession.facilitator"
            @input="update('facilitator', $event)"
            placeholder="Facilitator">
          </label>
          <span v-if="!$v.newSession.facilitator.required">Field is required.</span>
          <span v-if="!$v.newSession.facilitator.minLength">Field must have at least {{ $v.newSession.facilitator.$params.minLength.min }} characters.</span>
        </div>
        <br>

        <div :class="{'input-error': $v.newSession.datetime.$dirty && $v.newSession.datetime.$invalid}">
          <label>Datetime
          <input
            type="date"
            :value="newSession.datetime"
            @input="update('datetime', $event)"
            placeholder="Datetime">
          </label>
          <span v-if="!$v.newSession.datetime.required">Field is required.</span>
        </div>
        <br>

        <div :class="{'input-error': $v.newSession.place.$dirty && $v.newSession.place.$invalid}">
          <label>Place
          <input
            type="text"
            :value="newSession.place"
            @input="update('place', $event)"
            placeholder="Place">
          </label>
          <span v-if="!$v.newSession.place.required">Field is required.</span>
          <span v-if="!$v.newSession.place.minLength">Field must have at least {{ $v.newSession.place.$params.minLength.min }} characters.</span>
        </div>
        <br>

        <save-button title="Save Session" :disabled="$v.newSession.$invalid" @click.native="createASession">
        </save-button>

      </div>
    </div>
  </div>

</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';
  import * as Vuex from 'vuex';
  import SaveButton from '../components/SaveButton';

  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
      validationMixin,
    ],
    name: 'session',
    components: { SaveButton },
    methods: {
      ...Vuex.mapActions(['updateFormField']),
      createASession() {
        console.log('foobar');
        this.$store.dispatch('createASession').then(() => {
          this.$router.push('/sessions');
        });
      },
      update(field, event) {
        this.$v.newSession[field].$touch();
        this.updateFormField({ field, value: event.target.value.trim() });
        // EQUIVALENT:
        // this.$store.commit(UPDATE_FORM_FIELD, { field, value: event.target.value.trim() });
      },
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'error', 'newSession']),
    },
    validations: {
      newSession: {
        title: { required, minLength: minLength(5) },
        description: { required, minLength: minLength(4) },
        facilitator: { required, minLength: minLength(4) },
        datetime: { required },
        place: { required, minLength: minLength(4) },
      }
    }
  };
</script>

<style scoped>
</style>
