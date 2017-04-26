send vs sendAction vs closureAction

1. Send (used to call another action inside the component):-

export default Ember.component({
  getSomeThing() {
  },
  actions: {
    clickButton() {
      this.send('toggleProp');
    },

    toggleProp() {
      this.getSomeThing();
      // some thing happens here
    }
  }
})

---------------------------------------------------------------------------------------------------------------
2.sendAction (used to call action in the parent component / but it will not return anything):-

export default Ember.component({
  actions: {
    clickButton() {
      this.sendAction('clickButtonInParent');
    }
  }
})
---------------------------------------------------------------------------------------------------------------
3. closureAction (used to call action in the parent component / but it will return what you send from the parent):-

# Child Component
export default Ember.component({
  actions: {
    clickButton() {
      let val = this.attrs.clickButtonInParent();
      console.log(val); // equal to something you have returned from the parent
    }
  }
})

{{child-component clickButtonInParent=(action "clickButtonInParent")}}

# Parent Component
export default Ember.component({
  actions: {
    clickButtonInParent() {
      // do your own action
      return 1; // return anything
    }
  }
})
