import Ember from 'ember';

export default Ember.Controller.extend({
	indexController: Ember.inject.controller('index'),
	filter: Ember.computed.reads('indexController.filter'),
	showingDelete: false,
	selectedPost: null,

	results: Ember.computed('model', 'filter', function(){
		let results = this.get('model.posts');
		let filter = this.get('filter');

		if (!Ember.isEmpty(filter)) {
			results = results.filter(function(post){
		       return post.get('title').toLowerCase().indexOf(filter.toLowerCase()) > -1;
		    });
		};

		return results;
	}),

	actions: {
		confirmDelete(post) {
			this.set('selectedPost', post);
			this.toggleProperty('showingDelete');
		},

		delete(post) {
			post.deleteRecord();
			post.save(); 
		},
	}
});
