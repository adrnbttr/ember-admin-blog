import Ember from 'ember';

export default Ember.Component.extend({
	isExpanded: false,
	authenticate: Ember.inject.service('authentication'),
	router: Ember.inject.service('-routing'),

	actions: {
		toggleIsExpanded() {
		  this.toggleProperty('isExpanded');
		},

		logout() {
	        this.get('authenticate').logout();
	        this.get('router').transitionTo('login');
	    }
	}
});
