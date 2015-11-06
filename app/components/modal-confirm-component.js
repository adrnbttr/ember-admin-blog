import Ember from 'ember';

const ModalConfirmComponent = Ember.Component.extend({
  showingModal: Ember.computed('params.[]', function(){
    return this.get('params')[0];
  }),

  actions: {
  	close() {
  		this.toggleProperty('showingModal');
  	},
  	confirm() {
  		this.get('onConfirm')();
  		this.toggleProperty('showingModal');
  	}
  },
});

ModalConfirmComponent.reopenClass({
  positionalParams: 'params'
});

export default ModalConfirmComponent;