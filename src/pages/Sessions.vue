<template>
  <div>
    <div class="content-panel__header">
      <div class="title">
        <h1><a><i class="icon ss-reply" title="Back"></i></a>&nbsp;{{ msg }}</h1>
      </div>
      <div class="actions">
        <router-link class="button" :to="{ name: 'new-session' }">New Session</router-link>
        <button class="button" @click="sendWebSocketMessage">
          Send websocket message
        </button>
      </div>
    </div>
    <div class="content-panel__scroll" id="issue-list-panel">
      <div class="issue-list">
        <div class='issue-list__item' v-bind:class="{ unread: !session.read }"
             v-for="(session, index) in sessions">
          SESSION {{ session }}
          <div class="list-col--check">
            <input v-model="session.checked" type="checkbox">
          </div>
          <div class="list-col--priority">
            <i v-if="session.prioritary" class="icon-flag"></i>
            <i v-if="session.prioritary" class="icon-github-circled"></i>
          </div>
          <div class="list-col--id">
            <p>#{{session.number}}</p>
          </div>
          <div class="list-col--title">
            <p><i class="new" v-if="session.status == 'new'">Nuevo</i> <a @click="openSessionDetail(session.id)">{{session.title}}</a></p>
            <p v-if="session.parent" class="related">Asunto hijo de <a @click="openSessionDetail(session.parent.id)">#{{session.parent.number}} <i>{{session.parent.title}}</i></a></p>
          </div>
          <div class="list-col--last-updated-on">
            <p>
              <span class="date" :title="session.last_updated_on">{{session.last_updated_on}}</span>
            </p>
          </div>
          <div class="list-col--person">
            <!--<p v-if="session.person">{{session.person.full_name}}</p>-->
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
  import { WebSocketService } from '../services/websocket-service';

  const websocketService = new WebSocketService();

  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
    ],
    name: 'sessions',
    components: { Spinner },
    data() {
      return {
        msg: 'Welcome to Conecta-Vue1',
        noResults: false,
      };
    },
    methods: {
      ...Vuex.mapActions(['retrieveSessions', 'retrieveSessionsWithError']),
      sendWebSocketMessage() {
        websocketService.send('AY OMA QUE RICO');
      }
    },
    computed: {
      ...Vuex.mapGetters(['isLoading', 'sessions', 'error']),
    },
    created() {
      this.retrieveSessions();
    }
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
