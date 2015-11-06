import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save() {
			var tag = this.get('model');
			tag.save();
			this.transitionToRoute('index.tags');
		}
	}
});
