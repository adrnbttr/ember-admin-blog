import Ember from 'ember';

export default Ember.Controller.extend({
	indexController: Ember.inject.controller('index'),
	filter: Ember.computed.reads('indexController.filter'),

	results: Ember.computed('model', 'filter', function(){
		let results = this.get('model');
		let filter = this.get('filter');

		if (!Ember.isEmpty(filter)) {
			results = results.filter(function(post){
		       return post.get('title').toLowerCase().indexOf(filter.toLowerCase()) > -1;
		    });
		}

		return results;
	})
});
