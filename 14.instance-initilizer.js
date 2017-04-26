

Code will be executed once the app is booted and applicationInstance is created

export function initialize(appInstance) {  // appInstance is instance of Ember application
  let container = appInstance.lookup ? appInstance : appInstance.container;
  let store = container.lookup('service:store');
  store.findAll('email-config');
}

export default {
  name: 'load-all-email-config',
  after: 'bootstrap',  // bootstrap is another instance initilizer
  initialize
};


Point to be noted:
1. It is a queue, and it will be executed one by one
2. contoller using "after" in the export block
3. deferReadiness and advanceReadiness will not be available  :)
