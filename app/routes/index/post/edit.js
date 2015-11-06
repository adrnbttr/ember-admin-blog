import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  	// return this.store.peekRecord('post', params.post_id);
    return Ember.RSVP.hash({
		post: this.store.findRecord('post', params.post_id),
		tags: this.store.findAll('tag')
	});
  }
});

