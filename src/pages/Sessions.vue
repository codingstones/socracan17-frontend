<template>
  <div>
    <div class="content-panel__header">
      <div class="title">
        <h3>SESSIONS</h3>
      </div>
      <div class="actions">
        <router-link id='new-session' class="button" :to="{ name: 'new-session' }">New Session</router-link>
        <button class="button" @click="connectWebsocket">
          Connect Websocket
        </button>
      </div>
    </div>

    <div class="content-panel__scroll" id="session-list-panel">
      <div class="session-list">
        <div class='session-list__item' v-bind:class="{ unread: !session.read }"
             v-for="(session, index) in sessions">
          <div class="list-col--id">
            <i class="icon-chat"></i>
          </div>
          <div class="list-col--title">
            <p><a @click="openSessionDetail(session.id)">{{session.title}}</a></p>
            <p class="related">{{session.description}}</p>
          </div>
          <div class="list-col--last-updated-on">
            <p>
              <span class="date" :title="session.datetime">{{session.datetime}}</span>
            </p>
          </div>
          <div class="list-col--person">
            {{ session.facilitator }}
          </div>
          <div class="list-col--place">
            {{ session.place }}
          </div>
        </div>

        <spinner></spinner>
        <div class="reveal" id="backendErrorModal" data-reveal>
          <h1>{{error}}</h1>
          <p class="lead">{{error}}</p>
          <p>Backend Error</p>
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
  import SaveButton from '../components/SaveButton';
  import { WebSocketService } from '../services/websocket-service';


  export default {
    mixins: [
      // eslint-disable-next-line
      require('@/mixins/foundation'),
    ],
    name: 'sessions',
    components: { Spinner, SaveButton },
    methods: {
      ...Vuex.mapActions(['retrieveSessions']),
      connectWebsocket() {
        let ws = new WebSocket('ws://localhost:9000');
        let store = this.$store;
        ws.onmessage = function(message) {
          const session = JSON.parse(message.data).data;
          store.commit("CREATE_SESSION_SUCCESS", session);
        };
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
