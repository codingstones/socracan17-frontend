import Vue from 'vue';
import Vuex from 'vuex';
import avoriaz from 'avoriaz';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Sessions from '../src/pages/Sessions';
import { store } from '../src/vuex/store';

avoriaz.use(Vuex);

const mixins = [];

describe('Sessions.vue', () => {
  it('renders local data', () => {
    const msg = 'TEST DATA';
    const wrapper = mount(Sessions, { store, data: { msg } });
    expect(wrapper.text()).contains('TEST DATA');
  });

  it('renders session data', () => {
    store.state.sessions = [{ number: 'SESSION NUMBER', person: {} }];
    const wrapper = mount(Sessions, { store });
    expect(wrapper.text()).contains('#SESSION NUMBER');
  });

  it('shows session list when clicking button to retrieve sessions', () => {
    const methods = {};

    // TODO: Instead of stubbing retrieveSessions method we could use a global Fake Server or even real server with fake data
    methods.retrieveSessions = () => {
      store.state.sessions = [{ number: 'SESSION NUMBER', person: {} }];
    };

    const wrapper = mount(Sessions, { store, mixins, methods });
    const button = wrapper.find('button')[0];

    button.simulate('click');
    expect(wrapper.text()).contains('#SESSION NUMBER');
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
