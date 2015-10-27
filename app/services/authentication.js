import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  token: null,
  tokenEndpoint: config.apiUrl + '/authenticate',

  init() {
    this._super(...arguments);
    this.set('token', localStorage.getItem('blog.auth.token'));
  },

  userIsLoggedIn: Ember.computed('token', function() {
    if (this.get('token') !== "null") {
      return true;  
    }

    return false;
  }),

  accessToken: Ember.computed('token', function() {
    if (this.get('token') !== "null") {
      return JSON.parse(this.get('token')).access_token.token;  
    }

    return null;
  }),

  user: Ember.computed('token', function() {
    return JSON.parse(this.get('token')).user;
  }),

  logout() {
    localStorage.setItem('blog.auth.token', null);
    this.set('token', null);
  },

  addToken(token) {
    this.set('token', JSON.stringify(token));
    localStorage.setItem('blog.auth.token', JSON.stringify(token));
  },

  authenticate(options) {
    var that = this;
    var request = new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.ajax({
            url: that.tokenEndpoint,
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
                reject(new Error('getToken: `' + that.tokenEndpoint + '` failed with status: [' + this.status + ']'));
            });
        });
    });

    request.then(function(response) {
      that.addToken(response);
    }, function(error) {
      console.log(error);
      return error;
    });

    return Ember.RSVP.resolve();
  }
});
