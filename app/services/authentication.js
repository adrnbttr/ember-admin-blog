import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  token: localStorage.getItem('blog.auth.token'),
  tokenEndpoint: config.apiUrl + '/authenticate',
  userIsLoggedIn: !!localStorage.getItem('blog.auth.token'),

  accessToken: Ember.computed('token', function() {
    return JSON.parse(this.get('token')).access_token.token;
  }),

  user: Ember.computed('token', function() {
    return JSON.parse(this.get('token')).user;
  }),

  empty() {
    localStorage.setItem('blog.auth.token', null);
  },

  authenticate(options) {
    var url = this.tokenEndpoint;
    var request = new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify({
                username: options.identification,
                password: options.password
            }),
            contentType: 'application/json;charset=utf-8',
            dataType: 'json'
        }).then(function(response) {
            Ember.run(function() {
                resolve(response);
            });
        }, function() {
            Ember.run(function() {
                reject(new Error('getToken: `' + url + '` failed with status: [' + this.status + ']'));
            });
        });
    });

    request.then(function(response) {
      localStorage.setItem('blog.auth.token', JSON.stringify(response));
    }, function(error) {
      console.log(error);
      return error;
    });

    return Ember.RSVP.resolve();
  }
});
