
//  Fetching data using computed

// Anti Pattern
export default Ember.component({

  handles: null,

  init() {
    this.getTwitterHanldes();
  }

  getTwitterHanldes() {
    get(this, 'store').findAll('twitter-handles').then(function(handles) {
      set(this, 'handles', handles);
    })
  }

})

// Ember way

export default Ember.component({
  handles: computed(function() {
    return get(this, 'store').findAll('twitter-handles');
  })
})


// Capturing loading state: Anti patter

export default Ember.component({

  handles: null,
  isLoading: false,

  init() {
    this.getTwitterHanldes();
  }

  getTwitterHanldes() {
    set(this, 'isLoading', true);
    get(this, 'store').findAll('twitter-handles').then(function(handles) {
      set(this, 'handles', handles);
    }).finally(function() {
      set(this, 'isLoading', false);
    })
  }
})


// Ember way
export default Ember.component({
 handles: computed(function() {
   return get(this, 'store').findAll('twitter-handles');
 })

 isLoading: computed.reads('handles.isPending')

})
