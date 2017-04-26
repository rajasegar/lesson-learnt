Ember data:-

1. Every entity should be mapped to relation

Store Methods:

1. findRecord
2. findAll
3. peekRecord
4. peekAll


Store Magic:-

Scenerio:
1. Partial Agent data is loaded from bootstrap API
2. Now you trying to do a findRecord('agent', 1);
3. At that moment, it will return the partial record from the store;
4. Once the request is done, store will automatically update the other data

So the problem?
export default Ember.component({

  handles: null,

  init() {
    this.getTwitterHanldes();
  }

  getTwitterHanldes() {
    get(this, 'store').findRecord('agent', 1).then(function(agent) {
      set(this, 'agent', agent); // it has partial record
    })
  }
})

Solution:
// Follow Ember way
export default Ember.component({

 agent: computed(function() {
   return get(this, 'store').findRecord('agent', 1);
 })

 isLoading: computed.reads('agent.isPending')

})

Points to note :-

store.findAll('tickets', {
  reload: Boolean,
  backgroundReload: Boolean
})

1. reload  - queries for new data pre-emptively, that is, it waits until the promise with new data resolves
2. backgroundReload - returns the local (cached) record, and then queries for new data
