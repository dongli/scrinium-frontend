import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Person ${i}`; },
  email(i) { return `person${i}@foo.com`; }
});
