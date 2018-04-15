import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    isShopLength: false,

    actions: {
        deleteShop(id) {
            this.get('store').findRecord('shop', id).then( (shop) => {
                shop.deleteRecord();
                shop.save();
            });

        },

        shopCreationStart() {
            this.set('isShopLength', true);
        }
    },

    canCreateShop: Ember.computed('isShopLength', 'model.length', function () {
        let products = this.get('model.length');
        if(products === 0) {
            this.set('isShopLength', false);
        }
        return this.get('isShopLength') || this.get('model.length');
    })
});
