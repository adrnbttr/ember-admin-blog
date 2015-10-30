import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save() {
			var post = this.get('model');
			post.save();
		}
	}
});
