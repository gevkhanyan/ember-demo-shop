import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    actions: {
        updateShop(id) {
            let name = this.get('model.name');

            this.get('store').findRecord('shop', id).then((shop) => {
                shop.set('name', name);
                shop.save();
            });
        },

        discardChanges() {
            this.get('model').rollbackAttributes();
        }
    },

    isUpdateButtonDisabled: Ember.computed('model.name', function() {
        return Ember.isEmpty(this.get('model.name'));
    })

});
