import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  authenticate: Ember.inject.service('authentication'),
  host: config.apiUrl,
  headers: Ember.computed('authenticate.accessToken', function() {
    return {
      "x-access-token": this.get('authenticate.accessToken')
    };
  })
});
