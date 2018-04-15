import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    isProductLength: false,

    actions: {
        productCreationStart() {
            this.set('isProductLength', true);
        }
    },

    totalPrice: Ember.computed('model.products.@each.price', function() {
        return this.get('model.products').mapBy('price').reduce((a, b) => a + b, 0);
    }),

    canCreateProduct: Ember.computed('isProductLength', 'model.products.length', function () {
        let products = this.get('model.products.length');
        if(products === 0) {
            this.set('isProductLength', false);
        }
        return this.get('isProductLength') || this.get('model.products.length');
    })

});
