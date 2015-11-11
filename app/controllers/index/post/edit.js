import Ember from 'ember';

export default Ember.Controller.extend({

	tags: Ember.computed('model.tags', 'model.post.tags', function(){
		let tags = this.get('model.tags');
		let postTags = this.get('model.post.tags');

		tags = tags.filter(function(tag){
	       return postTags.contains(tag);
	    });

		return tags;
	}),

	otherTags: Ember.computed('model.tags', 'model.post.tags', function(){
		let tags = this.get('model.tags');
		let postTags = this.get('model.post.tags');

		tags = tags.filter(function(tag){
	       return !postTags.contains(tag);
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
		},

		addTag(tag) {
			let post = this.get('model.post');

			if (!post.get('tags').contains(tag)) {
				post.get('tags').pushObject(tag);
			};
		},
	}
});
