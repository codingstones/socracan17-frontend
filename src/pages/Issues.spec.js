import Vue from 'vue';
import Vuex from 'vuex';
import avoriaz from 'avoriaz';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Issues from './Issues';
import { store } from '../vuex/store';

avoriaz.use(Vuex);

describe('Issues.vue', () => {
  it('renders local data', () => {
    const msg = 'TEST DATA';
    const wrapper = mount(Issues, { store, data: { msg } });
    expect(wrapper.text()).contains('TEST DATA');
  });

  it('renders issue data', () => {
    store.state.issues = [{ number: 'ISSUE NUMBER', person: {} }];
    const wrapper = mount(Issues, { store });
    expect(wrapper.text()).contains('#ISSUE NUMBER');
  });

  it('uses existing actions', () => {
    for (let method of Object.entries(Issues.methods)) {
      if (method[1].name == 'mappedAction') {
        expect(Object.keys(store._actions).includes(method[0])).eql(true);
      }
    }
  });

  // it.only('can call methods', () => {
  //   const wrapper = mount(Issues, { store });
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
  //       test: Issues,
  //     },
  //   }).$mount();
  //
  //   console.log(vm.methods());
  // });
});
