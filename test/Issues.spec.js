import Vue from 'vue';
import Vuex from 'vuex';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Issues from '../src/pages/Issues';
import { store } from '../src/vuex/store';

Vue.use(Vuex);

describe('Issues.vue', () => {
  it('renders local data', () => {
    const msg = 'TEST DATA';
    const wrapper = mount(Issues, { store, data: { msg } });
    expect(wrapper.text()).contains('TEST DATA');
  });

  it('renders issue data', () => {
    store.state.issues = [{ number: 'ISSUE NUMBER', person: {} }]
    const wrapper = mount(Issues, { store });
    console.log(wrapper.text());
    expect(wrapper.text()).contains('#ISSUE NUMBER');
  });
});
