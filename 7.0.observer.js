Ember Observer:-

-- Helps to support observing a property


Example:-

export default Ember.component({

  fullName: "Falcon",

  fullNameChanged: Ember.observer('fullName', function() {
    console.log(`fullName changed to: ${this.get('fullName')}`);
  })

});

Note:-
-- Please avoid using observer 99.999%
