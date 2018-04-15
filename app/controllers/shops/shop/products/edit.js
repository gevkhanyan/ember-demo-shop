import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

    actions: {
        discardChanges() {
            this.get('model').rollbackAttributes();
        }
    },

    isUpdateButtonDisabled: Ember.computed('model.name', 'model.quantity', 'model.price', function() {
        return Ember.isEmpty(this.get('model.name') && this.get('model.quantity') && this.get('model.price'));
    }),
});
