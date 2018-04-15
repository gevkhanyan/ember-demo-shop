import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        createProduct() {
            let controller = this.get('controller');
            let shop = this.modelFor('shops.shop');
            let self = this;

            let product = this.get('store').createRecord('product', {
                name: controller.get('name'),
                quantity: controller.get('quantity'),
                price: parseInt(controller.get('price')),
                shop: shop
            });

            product.save().then(() => {
                controller.set('name', '');
                controller.set('quantity', '');
                controller.set('price', '');
                self.transitionTo('shops.shop.products');
            });
        }
    }
});
