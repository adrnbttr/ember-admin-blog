import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(post) {
			post.save();
			this.transitionToRoute('index.posts');
		},

		close(tag) {
			let post = this.get('model');
			post.get('tags').removeObject(tag);
			post.save();
		}
	}
});
