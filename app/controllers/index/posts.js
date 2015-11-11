import Ember from 'ember';

export default Ember.Controller.extend({
	indexController: Ember.inject.controller('index'),
	filter: Ember.computed.reads('indexController.filter'),
	showingDelete: false,
	selectedPost: null,
	sort: 'title',
	sortDescending: false,
	filterBytag: '',

	results: Ember.computed('model', 'filter', 'sort', 'sortDescending', 'filterBytag', function(){
		let results = this.get('model.posts');
		let filter = this.get('filter');
		let desc = this.get('sortDescending');
		let order = desc ? '' : ':desc';
		let sort = this.get('sort') + order;
		let filterBytag = this.get('filterBytag');

		if (!Ember.isEmpty(filter)) {
			results = results.filter(function(post){
		       return post.get('title').toLowerCase().indexOf(filter.toLowerCase()) > -1;
		    });
		};

		if (!Ember.isEmpty(filterBytag)) {
			results = results.filter(function(post){
		       return post.get('tags').contains(filterBytag);
		    });
		};


		return results.sortBy(sort);
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

		sortBy(property) {
			this.set('sort', property);
			this.toggleProperty('sortDescending');
	    },

	    filterBytag(tag) {
	    	this.set('filterBytag', tag);
	    }
	}
});
