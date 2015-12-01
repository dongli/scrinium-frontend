import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  mobile: DS.attr('string'),
  role: DS.attr('string'),
  position: DS.attr('string')
});
