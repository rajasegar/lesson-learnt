Use Prop types:-

Note:-  copied from react :)

Example:-

import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  propTypes: {
    ticket: PropTypes.EmberObject.isRequired
  }
});

1. PropTypes.array,
2. PropTypes.bool,
3. PropTypes.EmberComponent
4. PropTypes.element
5. PropTypes.string
6. PropTypes.array.isRequired

lot more types are there, pls Google it : ember-prop-types
