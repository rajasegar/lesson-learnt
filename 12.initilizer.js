
Ember initilizer:

What is it?
1. Initializers provide an opportunity to configure your application as it boots.
2. Happens while applicaition boots
-- copied from ember document

Sample scenerio:-
1. You have a resturant application
2. Show resturants based on location
3. Based on the data, your route request data from the model

---------------------------------------------------------------------------------------------------------------
> ember generate initializer configure-location

export function initialize(application) { // Ember application itself application
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = position.coords.latitude
    let lng = position.coords.longitude
    application.register('localtion:coords', position.coords);

    // To make it available in all your component, just use get(this, 'localtion-coords');
    // application.inject('component', 'localtion-coords', 'localtion:coords');

  })
};

export default {
  name: 'configure-location',
  initialize: initialize
};

// Use it in your component
export default Ember.component({
  getLocation() {
    let location = Ember.getOwner(this).lookup('localtion:coords');
    console.log(location);
  }
})

Things to be Noted:

1. instantiate true/false
2. singleton true /false


Point to be noted:
1. Did u know store is available in route by default, this is done by ember-data itself by injecting store on loading
