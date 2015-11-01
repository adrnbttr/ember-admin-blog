import Ember from 'ember';

export default Ember.Controller.extend({
	content: '',
	title: '',

	actions: {
		save() {
			var	self = this;

			var post = this.store.createRecord('post', {
			  title: self.get('title'),
			  content: self.get('content')
			});

			post.save().then(function () {
  				self.transitionToRoute('index.posts');
			}); 
		},
	}
});
