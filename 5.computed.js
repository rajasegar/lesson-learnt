
alias vs reads vs readOnly:-

export default Ember.component({

  prop1: computed.alias('model') // will update upstream also, set is allowed

  prop2: computed.reads('model') // will not update upstream also, set is allowed

  prop3: computed.readOnly('model') // will not update upstream also, set is not allowed,

})


Other computed utilities:-

export default Ember.component({

  prop1: 'Falcon',
  prop2: null,
  prop3: null,

  prop4: computed.and('prop1', 'prop2', 'prop3')

  prop5: computed.or('prop1', 'prop2', 'prop3')

  prop5: computed.equal('prop1', 'Falcon')

})

isEmpty, gt, gte, lt, lte and many more...
