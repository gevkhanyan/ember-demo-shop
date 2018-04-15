import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('shops', function () {
        this.route('new');
        this.route('edit', {path: '/:shop_id'});

        this.route('shop', {path: ':id'}, function () {
            this.route('products', function () {
                this.route('new');
                this.route('edit', {path: '/:product_id'});
            });
        });
    });
});

export default Router;
