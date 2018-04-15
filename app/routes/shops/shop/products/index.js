import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model() {
        return this.modelFor('shops.shop');
    },

    actions: {
        deleteProduct(id) {
            this.get('store').findRecord('product', id).then((product) => {
                product.deleteRecord();
                product.save();
            });

        }
    }
});
