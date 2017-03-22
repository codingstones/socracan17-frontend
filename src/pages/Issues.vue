<template>
  <div>
    <div class="content-panel__header">
      <div class="title">
        <h1><a><i class="icon ss-reply" title="Volver"></i></a>&nbsp;{{ msg }}</h1>
      </div>
      <div class="actions">
        <button class="button" @click="retrieveIssues">
          Recargar Asuntos
        </button>
        <button class="button" @click="retrieveIssuesWithError">
          Recargar Asuntos con Error
        </button>
      </div>
    </div>
    <div class="content-panel__scroll" id="issue-list-panel">
      <div class="issue-list">
        <div class='issue-list__item' v-bind:class="{ unread: !issue.read }"
             v-for="(issue, index) in issues">
          <div class="list-col--check">
            <input v-model="issue.checked" type="checkbox">
          </div>
          <div class="list-col--priority">
            <i v-if="issue.prioritary" class="icon-flag"></i>
            <i v-if="issue.prioritary" class="icon-github-circled"></i>
          </div>
          <div class="list-col--id">
            <p>#{{issue.number}}</p>
          </div>
          <div class="list-col--title">
            <p><i class="new" v-if="issue.status == 'new'">Nuevo</i> <a @click="openIssueDetail(issue.id)">{{issue.title}}</a></p>
            <p v-if="issue.parent" class="related">Asunto hijo de <a @click="openIssueDetail(issue.parent.id)">#{{issue.parent.number}} <i>{{issue.parent.title}}</i></a></p>
          </div>
          <div class="list-col--last-updated-on">
            <p>
              <span class="date" :title="issue.last_updated_on">{{issue.last_updated_on}}</span>
            </p>
          </div>
          <div class="list-col--person">
            <p>{{issue.person.full_name}}</p>
          </div>
          <div class="list-col--status">
            Estado
          </div>
        </div>

        <div v-if="noResults" class="issue-list__message">No hay resultados</div>
        <spinner></spinner>
        <div class="reveal" id="backendErrorModal" data-reveal>
          <h1>{{error}}</h1>
          <p class="lead">{{error}}</p>
          <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
          <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>

    <div class="content-panel__footer">
    </div>
  </div>

</template>

<script>
  import * as Vuex from 'vuex';
  import Spinner from '../components/Spinner';


  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
    ],
    name: 'issues',
    components: { Spinner },
    data() {
      return {
        msg: 'Welcome to Conecta-Vue1',
        noResults: false,
      };
    },
    methods: {
      ...Vuex.mapActions(['retrieveIssues', 'retrieveIssuesWithError']),
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'issues', 'error']),
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
