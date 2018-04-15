import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    actions: {
        discardChanges() {
            this.set('name', '');
            this.set('quantity', '');
            this.set('price', '');
        }
    },

    isAddButtonDisabled: Ember.computed('name', 'quantity', 'price', function() {
        return Ember.isEmpty(this.get('name') && this.get('quantity') && this.get('price'));
    }),
});
