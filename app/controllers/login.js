import Ember from 'ember';

export default Ember.Controller.extend({
  authenticate: Ember.inject.service('authentication'),

  actions: {
    authenticate() {
        var _this = this;
        var previousTransition = _this.get('previousTransition');
        var credentials = this.getProperties('identification', 'password');
        this.get('authenticate').authenticate(credentials).then(function(){
          if (previousTransition) {
            _this.set('previousTransition', null);
            previousTransition.retry();
          } else {
            // Default back to homepage
            _this.transitionToRoute('index');
          }
        }).catch((message) => {
            this.set('errorMessage', message);
        });
    }
  }
});
