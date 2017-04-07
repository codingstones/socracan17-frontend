import Vue from 'vue';
import Vuex from 'vuex';
import avoriaz from 'avoriaz';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Session from '../src/pages/Session';
import { resolvedStub, stubFor, resolvedPromise } from './utils/test-helpers';
import { store } from '../src/vuex/store';

avoriaz.use(Vuex);

const mixins = [];

describe('Session.vue', () => {

  it('navigates to sessions page after creating session', () => {
    let wrapper, routerStub, responseStub;
    routerStub = stubFor('push');

    store.dispatch = resolvedPromise({});

    store.state.newSession = { };
    wrapper = mount(Session, { store, mixins, router: routerStub });
    const saveButton = wrapper.find('#save-button')[0];

    saveButton.simulate('click');

    expect(routerStub.push).calledWith('/sessions');
  });
});
