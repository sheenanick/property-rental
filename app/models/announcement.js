import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  message: DS.attr(),
  author: DS.attr()
});
