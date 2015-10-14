import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (!localStorage.getItem('isAuthenticate')) {
      this.transitionTo('login');
    }
  },

  model() {
    return this.store.findAll('post');
  }
});
