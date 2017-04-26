Computed Property:-

"A computed property transforms an object literal with object's accessor function(s) into a property."

-- Ember Document


Example:-

export default Ember.component({

  prop1: null,
  prop2: null,

  prop3: computed('prop1,prop2', function() {
    return "something..";
  })

})

Note:- Computed should be used in template or you have to call using get(this, 'prop3');
