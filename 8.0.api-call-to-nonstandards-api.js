

//  URL should be proper REST standards

Example:-

GET all tickets - /tickets
GET tickets by ID - /tickets/:id
POST Create ticket - /tickets
PUT Update a tickets - /tickets/:id

// data fetching from non standard API (Example: search, Integrations, action for a model)
1. Ember API action:-
export default Model.extend({
  twitterReply: memberAction({ // tickets/:id/tweet
    path: 'tweet',
    type: 'POST'
  }),

  bulkDelete: collectionAction({
    path: 'bulk_delete', // tickets/bulk_delete
    type: 'PUT'
  }),
});

How to use in component?
get(this, 'store').peekRecord('ticket', 1).tweet(); // POST request to /tickets/1/tweet
get(this, 'store').peekRecord('ticket', 1).bulk_delete(); // PUT request to /tickets/bulk_delete

Points to note:-
1. Data will not be pushed to store in API actions

---------------------------------------------------------------------------------------------------------------
2. Use Ember Ajax instead $.ajax

export default Ember.component({

  ajax: Ember.service.inject(),

  data: null,

  init() {
    this.getCannedResponse();
  }

  getCannedResponse() {
    //  question? how do I set a loading state?
    get(this, 'ajax').request('/search/some/data').then(function(data) {
      set(this, 'data', data);
    })
  }

});

Ember way:-

export default Ember.component({

  cannedResponse() {
    // Comes from Ember data
    return DS.PromiseObject.create({
      promise: get(this, 'ajax').request('/search/some/data')
    });
  }

  isLoading: computed.reads('cannedResponse.isPending')

});

Other states:
1. isPending
2. isSettled
3. isRejected
4. isFulfilled
