import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  slug: DS.attr('string'),
  tags: DS.hasMany('tag')
});
