import Ember from 'ember';

export default Ember.Controller.extend({
	title: '',

	actions: {
		save() {
			var	self = this;
			var tag = this.store.createRecord('tag', {
			  title: self.get('title')
			});

			tag.save().then(function () {
  				self.transitionToRoute('index.tags');
			}); 
		},
	}
});
