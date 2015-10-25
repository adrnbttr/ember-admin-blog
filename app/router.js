import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('index', { path: '/' } ,function() {
    this.route('posts', { path: '/posts' });
    this.route('post', { path: '/post/:post_id' });
  });
});

export default Router;
