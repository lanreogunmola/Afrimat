import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	price: DS.attr(),
	size: DS.attr(),
	image: DS.attr()

});
