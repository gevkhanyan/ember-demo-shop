import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    products: DS.hasMany('product', {async: true}),
    createdAt: DS.attr('date', {
        defaultValue() {
            return new Date();
        }
    })
});
