import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
		post: this.store.findRecord('post', params.post_id),
		tags: this.store.findAll('tag')
	});
  }
});

