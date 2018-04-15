import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    actions: {
        createShop() {
            let name = this.get('name');
            let newShop = this.get('store').createRecord('shop', {
                name: name,
            });
            newShop.save().then(() => {
                this.set('name', '');
            });
        },

        discardChanges() {
            this.set('name', '');
        }
    },

    isAddButtonDisabled: Ember.computed('name', function() {
        return Ember.isEmpty(this.get('name'));
    }),
});
