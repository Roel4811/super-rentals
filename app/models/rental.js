import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  owner: attr('string'),
  city: attr('string'),
  category: attr('string'),
  image: attr('string'),
  bedrooms: attr('string'),
  description: attr('string')
});
