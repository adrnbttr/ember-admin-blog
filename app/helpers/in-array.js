import Ember from 'ember';

export function inArray(params) {
  return params[0].contains(params[1]); 
}

export default Ember.Helper.helper(inArray);
