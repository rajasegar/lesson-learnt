
Helps to hold your application booting process;

export function initialize(application) {
  application.deferReadiness();
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = position.coords.latitude
    let lng = position.coords.longitude
    application.register('localtion:coords', position.coords)
    application.advanceReadiness();
  })
};

export default {
  name: 'configure-location',
  initialize: initialize
};


Points to be noted:
1. advanceReadiness should be called, else you application will not start booting.
