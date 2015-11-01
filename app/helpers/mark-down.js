import Ember from 'ember';
import marked from 'npm:marked';

export function markDown(params) {
	return Ember.String.htmlSafe(marked(params[0]));		
}

export default Ember.Helper.helper(markDown);
