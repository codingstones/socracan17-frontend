import Vue from 'vue';
import Vuex from 'vuex';
import avoriaz from 'avoriaz';
import { store } from '../src/vuex/store';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Sessions from '../src/pages/Sessions';
import router from '../vue-config/router';

avoriaz.use(Vuex);

const mixins = [];

describe('Sessions.vue', () => {
  describe('When mounting component', () => {
    let wrapper;
    const SESSION_TITLE = 'SESSION TITLE';
    beforeEach(() => {
      const methods = {};
      // TODO: Instead of stubbing retrieveSessions method we could use a global Fake Server
      // or even real server with fake data
      methods.retrieveSessions = () => {
        store.state.sessions = [{ title: SESSION_TITLE }];
      };
      wrapper = mount(Sessions, { store, mixins, methods, router });
    });

    it('shows session list', () => {
      const methods = {};

      methods.retrieveSessions = () => {
        store.state.sessions = [{ title: SESSION_TITLE }];
      };

      expect(wrapper.text()).contains(SESSION_TITLE);
    });
  });

  it('uses existing actions', () => {
    for (const method of Object.entries(Sessions.methods)) {
      if (method[1].name === 'mappedAction') {
        expect(Object.keys(store._actions).includes(method[0])).eql(true);
      }
    }
  });

  it('uses existing getters', () => {
    for (const method of Object.entries(Sessions.methods)) {
      if (method[1].name === 'mappedGetter') {
        expect(Object.keys(store._actions).includes(method[0])).eql(true);
      }
    }
  });


  // it.only('can call methods', () => {
  //   const wrapper = mount(Sessions, { store });
  //   console.log(wrapper.methods());
  //   console.log('ACTIONS', store._actions);
  //   console.log(wrapper.computed());
  //   expect(wrapper.methods().map(method => method.apply()));
  // });
  //
  // it('should render', () => {
  //   const vm = new Vue({
  //     template: '<div><test></test></div>',
  //     store,
  //     components: {
  //       test: Sessions,
  //     },
  //   }).$mount();
  //
  //   console.log(vm.methods());
  // });
});
