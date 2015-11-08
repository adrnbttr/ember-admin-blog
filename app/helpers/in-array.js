import Ember from 'ember';

export function inArray(params) {
  return params[1].contains(params[0]); 
}

export default Ember.Helper.helper(inArray);
