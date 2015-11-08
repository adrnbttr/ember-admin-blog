import Ember from 'ember';

export default Ember.Controller.extend({

	tags: Ember.computed('model', function(){
		let tags = this.get('model.tags');
		let postTags = this.get('model.post.tags');

		tags = tags.filter(function(tag){
	       return postTags.contains(tag);
	    });

		return tags;
	}),

	actions: {
		save(post) {
			post.save();
			this.transitionToRoute('index.posts');
		},

		deleteTag(tag) {
			let post = this.get('model.post');
			post.get('tags').removeObject(tag);
			post.save();
		}
	}
});
