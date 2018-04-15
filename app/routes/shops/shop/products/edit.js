import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        editProduct(id) {
            let controller = this.get('controller');
            let name = controller.get('model.name');
            let qty = controller.get('model.quantity');
            let price = parseInt(controller.get('model.price'));
            let self = this;

            this.get('store').findRecord('product', id, {reload: true, backgroundReload: true}).then((product) => {
                product.set('name', name);
                product.set('quantity', qty);
                product.set('price', price);
                product.save().then(() => {
                    self.transitionTo('shops.shop.products');
                });
            });
        }
    },
});
