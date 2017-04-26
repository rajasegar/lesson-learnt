What is a service?

An Ember.Service is an Ember object that lives for the duration of the application,
and can be made available in different parts of your application.
-- Ember guide

Example:
ember generate service user-info

export default Ember.Service.extend({
  user: "set data from bootstrap api"
});

Accessing Services
export default Ember.Component.extend({
  userInfo: Ember.inject.service()
});

--or--

export default Ember.Component.extend({
  loggedUser: Ember.inject.service('user-info')
});


Note:-
1. Service is a singleton (Ex: Store)
